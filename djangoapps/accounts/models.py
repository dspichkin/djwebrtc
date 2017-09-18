# -*- coding: utf-8 -*-

from django.utils.encoding import python_2_unicode_compatible
from django.db import models
from django.contrib.auth.models import AbstractUser


@python_2_unicode_compatible
class Account(AbstractUser):

    created_at = models.DateTimeField(u'дата создания', auto_now_add=True)
    key = models.CharField(u'ключ', max_length=50, unique=True, blank=True, null=True)
    key_id = models.CharField(u'идетификатор ключа', max_length=50, unique=True, blank=True, null=True)

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
