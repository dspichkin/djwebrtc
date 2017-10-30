from __future__ import unicode_literals

from celery import shared_task

from channels_presence.models import Room

from django.core import management


@shared_task(name='channels_presence.tasks.prune_presence')
def prune_presence():
    print "run prune_presence"
    Room.objects.prune_presences()


@shared_task(name='channels_presence.tasks.prune_rooms')
def prune_rooms():
    print "run prune_rooms"
    Room.objects.prune_rooms()


@shared_task(name='channels_presence.tasks.clean_old_session')
def clean_old_session():
    print "run clean old sessions"
    try:
        management.call_command("clearsessions", verbosity=0)
    except management.base.CommandError:
        management.call_command("cleanup", verbosity=0)