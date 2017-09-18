# -*- coding: utf-8 -*-

from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.sessions.models import Session

from accounts.models import (Account)


class UserAdmin(BaseUserAdmin):
    list_display = (
        'id', 'fio', 'email', 'is_superuser',)
    list_filter = ('is_superuser',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', )}),
        ('Personal info', {'fields': (
            'first_name', 'last_name', 'key', 'key_id')}),


        ('Permissions', {'fields': ('is_active', 'is_superuser', 'is_staff')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'first_name', 'last_name', 'password1', 'password2')
            }
         ),
    )

    search_fields = ('id', 'first_name', 'last_name', 'email',)
    ordering = ('first_name', 'last_name', 'email',)


class SessionAdmin(admin.ModelAdmin):
    list_display = ('session_key', 'expire_date',)


admin.site.register(Session, SessionAdmin)
admin.site.register(Account, UserAdmin)
admin.site.unregister(Group)
