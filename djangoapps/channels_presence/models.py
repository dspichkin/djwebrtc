from __future__ import unicode_literals, absolute_import

import json
from datetime import timedelta

from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.encoding import python_2_unicode_compatible
from django.utils.timezone import now

from django.core.mail import EmailMessage

from channels import Group
from channels_presence.signals import presence_changed


class PresenceManager(models.Manager):
    def touch(self, channel_name, user=None):
        presense = Presence.objects.filter(channel_name=channel_name)
        if presense:
            presense.update(last_seen=now())
        elif channel_name:
            #room = Room.objects.filter(channel_name='Clients').first()
            #if room:
            if user and user.is_authenticated():
                presense = Presence.objects.filter(user=user).first()
                if presense:
                    presense.last_seen = now()
                    presense.channel_name = channel_name
                    presense.save()
                else:
                    room = Room.objects.filter(channel_name='Clients').first()
                    if room:
                        presense = Presence.objects.create(
                            room=room,
                            channel_name=channel_name,
                            user=user,
                            last_seen=now())

    def leave_all(self, channel_name):
        for presence in self.select_related('room').filter(channel_name=channel_name):
            room = presence.room
            room.remove_presence(presence=presence)


@python_2_unicode_compatible
class Presence(models.Model):
    room = models.ForeignKey('Room', on_delete=models.CASCADE)
    channel_name = models.CharField(max_length=255, help_text="Reply channel for connection that is present")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
    last_seen = models.DateTimeField(default=now)

    objects = PresenceManager()

    def __str__(self):
        return self.channel_name

    class Meta:
        unique_together = [('room', 'channel_name')]


class RoomManager(models.Manager):
    def add(self, room_channel_name, user_channel_name, user=None):
        room, created = Room.objects.get_or_create(channel_name=room_channel_name)
        room.add_presence(user_channel_name, user)
        return room

    def remove(self, room_channel_name, user_channel_name):
        try:
            room = Room.objects.get(channel_name=room_channel_name)
        except Room.DoesNotExist:
            return
        room.remove_presence(user_channel_name)

    def prune_presences(self, channel_layer=None, age=None):
        for room in Room.objects.all():
            room.prune_presences(age)

    def prune_rooms(self):
        Room.objects.filter(presence__isnull=True).delete()


@python_2_unicode_compatible
class Room(models.Model):
    channel_name = models.CharField(max_length=255, unique=True, help_text="Group channel name for this room")

    objects = RoomManager()

    def __str__(self):
        return self.channel_name
    """
    def add_presence(self, channel_name, user=None):
        presence, created = Presence.objects.get_or_create(
            room=self,
            channel_name=channel_name,
            user=user if (user and user.is_authenticated()) else None
        )
        if created:
            Group(self.channel_name).add(channel_name)
            self.broadcast_changed(added=presence)
    """
    def add_presence(self, channel_name, user=None):
        if not user or not user.is_authenticated():
            return

        presence = Presence.objects.filter(
            room=self,
            channel_name=channel_name,
            user=user
        ).first()
        if not presence:
            presence = Presence.objects.filter(
                room=self,
                user=user
            ).first()
            if presence:
                presence.channel_name = channel_name
                presence.last_seen = now()
                presence.save()
            else:
                presence = Presence.objects.create(
                    room=self,
                    channel_name=channel_name,
                    user=user
                )
        Group(self.channel_name).add(channel_name)
        self.broadcast_changed(added=presence)

    def remove_presence(self, channel_name=None, presence=None):
        if presence is None:
            try:
                presence = Presence.objects.get(room=self, channel_name=channel_name)
            except Presence.DoesNotExist:
                return
        Group(self.channel_name).discard(presence.channel_name)
        presence.delete()
        self.broadcast_changed(removed=presence)

    def prune_presences(self, age_in_seconds=None):
        # msg = u"test"
        # mail = EmailMessage(u"Test on mydialogs", msg, settings.DEFAULT_FROM_EMAIL, settings.ADMIN_LIST_EMAILS)
        # mail.send()

        if age_in_seconds is None:
            age_in_seconds = getattr(settings, "CHANNELS_PRESENCE_MAX_AGE", 60)

        num_deleted, num_per_type = Presence.objects.filter(
            room=self,
            last_seen__lt=now() - timedelta(seconds=age_in_seconds)
        ).delete()

        if num_deleted > 0:
            self.broadcast_changed(bulk_change=True)

    def get_users(self):
        User = get_user_model()
        return User.objects.filter(presence__room=self).distinct()

    def get_anonymous_count(self):
        return self.presence_set.filter(user=None).count()

    def broadcast_changed(self, added=None, removed=None, bulk_change=False):
        presence_changed.send(sender=self.__class__,
            room=self,
            added=added,
            removed=removed,
            bulk_change=bulk_change)
