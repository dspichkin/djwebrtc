# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from channels_presence.models import Presence, Room


class PresenceAdmin(admin.ModelAdmin):
    list_display = ('room', 'channel_name', 'user', 'last_seen', 'max_age', 'user__key_id')


class RoomAdmin(admin.ModelAdmin):
    list_display = ('channel_name',)


admin.site.register(Presence, PresenceAdmin)
admin.site.register(Room, RoomAdmin)
