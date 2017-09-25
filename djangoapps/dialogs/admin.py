# -*- coding: utf-8 -*-

from django.contrib import admin

from dialogs.models import (Dialog, ActiveDialog)


class DialogAdmin(admin.ModelAdmin):
    pass


class ActiveDialogAdmin(admin.ModelAdmin):
    pass


admin.site.register(Dialog, DialogAdmin)
admin.site.register(ActiveDialog, ActiveDialogAdmin)
