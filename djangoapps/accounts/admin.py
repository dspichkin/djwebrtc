# -*- coding: utf-8 -*-

from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.sessions.models import Session

from accounts.models import (Account, ConfirmationCode)


class UserAdmin(BaseUserAdmin):
    list_display = (
        'id', 'fio', 'email', 'is_superuser',)
    list_filter = ('is_superuser',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', )}),
        ('Personal info', {'fields': (
            'first_name', 'last_name', 'key', 'key_id', 'skypeid', 'avatar')}),


        ('Permissions', {'fields': ('is_active', 'is_confirm', 'is_superuser', 'is_staff')}),

        ('Dialog activity', {'fields': ('last_dialog_active', 'last_dialog_started', 'last_dialog_end')}),
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


class ConfirmationCodeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Session, SessionAdmin)
admin.site.register(Account, UserAdmin)
admin.site.unregister(Group)
admin.site.register(ConfirmationCode, ConfirmationCodeAdmin)
