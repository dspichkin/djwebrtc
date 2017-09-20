# -*- coding: utf-8 -*-

from django.contrib import admin

from dialogs.models import (Dialog)


class DialogAdmin(admin.ModelAdmin):
    pass


admin.site.register(Dialog, DialogAdmin)
