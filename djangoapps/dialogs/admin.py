# -*- coding: utf-8 -*-

from django.contrib import admin

from dialogs.models import (Dialog, ActiveDialog, Tag)


class DialogAdmin(admin.ModelAdmin):
    list_display = (
        'owner', 'name', 'level', 'is_published', )

    filter_horizontal = ('tags', )


class ActiveDialogAdmin(admin.ModelAdmin):
    list_display = (
        'running_at', 'dialog', 'status', 'master', 'pupil',)
    list_filter = ('master', )


class TagAdmin(admin.ModelAdmin):
    pass

admin.site.register(Dialog, DialogAdmin)
admin.site.register(ActiveDialog, ActiveDialogAdmin)
admin.site.register(Tag, TagAdmin)
