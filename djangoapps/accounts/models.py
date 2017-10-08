# -*- coding: utf-8 -*-
import os
from uuid import uuid4

from django.utils.encoding import python_2_unicode_compatible
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.deconstruct import deconstructible


@deconstructible
class PathAndRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        if instance.pk:
            filename = '{}.{}'.format(str(instance.pk) + '_' + uuid4().hex[:8], ext)
        else:
            # set filename as random string
            filename = '{}.{}'.format(uuid4().hex, ext)
        # return the whole path to the file
        return os.path.join(self.path, filename)


path_and_rename_account_avatar = PathAndRename("accounts_avatars")


@python_2_unicode_compatible
class Account(AbstractUser):

    ENGLISH_LEVELS = (
        (10, u'Beginner, Elementary'),
        (20, u'Pre-Intermediate'),
        (30, u'Intermediate'),
        (40, u'Upper-Intermediate'),
        (50, u'Advanced'),
        (60, u'Proficiency'),
    )

    created_at = models.DateTimeField(u'дата создания', auto_now_add=True)
    key = models.CharField(u'ключ', max_length=50, unique=True, blank=True, null=True)
    key_id = models.CharField(u'идетификатор ключа', max_length=50, unique=True, blank=True, null=True)
    avatar = models.ImageField(u'аватар', upload_to=path_and_rename_account_avatar, blank=True, null=True)
    level = models.SmallIntegerField(u'уровень знания', choices=ENGLISH_LEVELS, default=10)

    is_accept_call = models.BooleanField(u'принимать входящие звонки', default=False)

    class Meta(AbstractUser.Meta):
        verbose_name = u'Пользователь'
        verbose_name_plural = u'Пользователи'
        ordering = ('email', 'last_name', 'first_name')

    def __init__(self, *args, **kwargs):
        super(Account, self).__init__(*args, **kwargs)

    def __str__(self):
        return self.fio()

    def fio(self):
        fio_list = filter(None, [self.first_name, self.last_name])
        if fio_list:
            return ' '.join(fio_list)
        return self.email
    fio.short_description = u'ФИО'

    def serialize(self):
        from accounts.serializers import AccountSerializer
        return AccountSerializer(self).data
