# -*- coding: utf-8 -*-
import os
from uuid import uuid4
from datetime import timedelta

from django.utils.encoding import python_2_unicode_compatible
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.deconstruct import deconstructible
from django.utils.crypto import get_random_string
from django.conf import settings
from django.utils import timezone
from django.template import loader, RequestContext
from django.core.mail import EmailMultiAlternatives


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
    is_confirm = models.BooleanField(u'email подтвержден', default=False)
    is_accept_call = models.BooleanField(u'принимать входящие звонки', default=False)

    class Meta(AbstractUser.Meta):
        verbose_name = u'Пользователь'
        verbose_name_plural = u'Пользователи'
        ordering = ('email', 'last_name', 'first_name')

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


@python_2_unicode_compatible
class ConfirmationCode(models.Model):
    account = models.ForeignKey(Account)
    created = models.DateTimeField('created', auto_now_add=True)
    sent = models.DateTimeField(u'отправлен', null=True)
    key = models.CharField('ключ', max_length=64, unique=True)
    confirm = models.NullBooleanField(u'подтвержден')

    class Meta(AbstractUser.Meta):
        verbose_name = u'Код подтверждения'
        verbose_name_plural = u'Коды подтверждения'

    def __str__(self):
        if self.account:
            return self.account.fio()

    def create(self):
        self.key = get_random_string(64).lower()
        self.save()

    def key_expired(self):
        expiration_date = self.sent \
            + timedelta(days=settings.EMAIL_CONFIRMATION_EXPIRE_DAYS)
        return expiration_date <= timezone.now()
    key_expired.boolean = True

    def confirm(self, request):
        if not self.key_expired():
            return True

    def send(self, request=None, signup=False):
        email_data = {
            "baseserver": settings.BASEURL,
            "key": self.key
        }

        html_template = loader.get_template('emails/confirm_user_email.html')
        text_template = loader.get_template('emails/confirm_user_email.txt')
        html_content = html_template.render(email_data)
        text_content = text_template.render(email_data)

        subject = 'www.dialogs.ru'

        msg = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, [self.account.email])
        msg.attach_alternative(html_content, "text/html")
        try:
            msg.send()
        except:
            pass

        self.sent = timezone.now()
        self.save()

    def send_remember(self, request=None, signup=False):
        email_data = {
            "baseserver": settings.BASEURL,
            "key": self.key
        }

        html_template = loader.get_template('emails/remember_user_email.html')
        text_template = loader.get_template('emails/remember_user_email.txt')
        html_content = html_template.render(email_data)
        text_content = text_template.render(email_data)

        subject = 'www.dialogs.ru'

        msg = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, [self.account.email])
        msg.attach_alternative(html_content, "text/html")
        try:
            msg.send()
        except:
            pass

        self.sent = timezone.now()
        self.save()

