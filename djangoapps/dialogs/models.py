# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

import json

from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.encoding import python_2_unicode_compatible
from django.db.models.signals import pre_save, post_save, post_delete
from django.dispatch import receiver
from django.utils import timezone

from channels import Group

from dialogs.signals import activedialog_changed


@python_2_unicode_compatible
class Dialog(models.Model):
    created_at = models.DateTimeField(u'дата создания', auto_now_add=True)
    updated_at = models.DateTimeField(u'дата редактирования', auto_now=True)

    name = models.CharField(u'имя диалога', max_length=255)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Диалог'
        verbose_name_plural = 'Диалоги'

        ordering = ('name', )


"""
@receiver(post_save, sender=Dialog)
def dialog_post_save(sender, instance, created, **kwargs):

    post_save.disconnect(dialog_post_save, sender=sender)
    # переназначаем порядок сортировки
    if !instance.owner:

    post_save.connect(partner_post_save, sender=sender)
"""


class ActiveDialogManager(models.Manager):
    def add(self, dialog, master, user=None):
        ActiveDialog.objects.filter(master=master).delete()
        activedialog, created = ActiveDialog.objects.create(dialog=dialog, master=master)
        self.broadcast_changed(added=activedialog)

        return activedialog


DIALOG_WAIT = 1
DIALOG_ACTIVE = 2
DIALOG_STOP = 3
DIALOG_CANCEL = 4
DIALOG_STATUS = (
    (DIALOG_WAIT, u'Ожидания подключения ученика'),
    (DIALOG_ACTIVE, u'Диалог запущен'),
    (DIALOG_STOP, u'Диалог завершен'),
    (DIALOG_CANCEL, u'Диалог отменен'),
)


@python_2_unicode_compatible
class ActiveDialog(models.Model):
    created_at = models.DateTimeField(u'дата создания', auto_now_add=True)
    running_at = models.DateTimeField(u'дата запуска диалога', blank=True, null=True)

    dialog = models.ForeignKey(Dialog, verbose_name=u'диалог')
    master = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=u'ведущий', related_name='master',)
    pupil = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=u'ведомый', related_name='pupil',
                              blank=True, null=True)

    status = models.SmallIntegerField(u'статус диалога', default=1, choices=DIALOG_STATUS)

    objects = ActiveDialogManager()

    class Meta:
        verbose_name = 'Диалог'
        verbose_name_plural = 'Диалоги'

        ordering = ('created_at', )

    def __str__(self):
        return u"%s - %s" % (self.dialog, self.master)

    @property
    def is_active(self):
        if self.pupil:
            return True
        return False

    def broadcast_changed(self, update=None, add=None, removed=None):
        activedialog_changed.send(
            sender=self.__class__,
            room="Clients",
            update=update,
            add=add,
            removed=removed,
        )

    def run_dialog(self, pupil_key_id):
        from accounts.models import Account
        userpupil = Account.objects.filter(key_id=pupil_key_id).first()
        if not userpupil:
            return False
        self.pupil = userpupil
        self.running_at = timezone.now()
        self.save()
        return True


@receiver(post_save, sender=ActiveDialog)
def activedialog_post_save(sender, instance, created, **kwargs):
    if created:
        instance.broadcast_changed(update=instance)


@receiver(post_delete, sender=ActiveDialog)
def activedialog_post_delete(sender, instance, **kwargs):
    instance.broadcast_changed(update=instance, removed=True)


@receiver(activedialog_changed)
def handle_activedialog_changed(sender, room, update, removed, **kwargs):
    if update:
        broadcast_to_room({
            "command": "UPDATE",
            "target": "activedialogs"
        })


def broadcast_to_room(message):
    Group("Clients").send({
        'text': json.dumps(message)
    })