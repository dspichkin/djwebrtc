# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

import json
import os
from uuid import uuid4

from jsonfield import JSONField

from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.encoding import python_2_unicode_compatible
from django.db.models.signals import pre_save, post_save, post_delete
from django.utils.deconstruct import deconstructible
from django.dispatch import receiver
from django.utils import timezone
from django.utils.html import strip_tags

from channels import Group

from dialogs.signals import activedialog_changed


@deconstructible
class PathAndRename(object):
    """
    формирование имение файла вложения
    """

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        if instance.pk:
            filename = '{}_{}.{}'.format(instance.pk, uuid4().hex[:10], ext)
        else:
            # set filename as random string
            filename = '{}.{}'.format(uuid4().hex, ext)
        # return the whole path to the file
        return os.path.join(self.path, filename)


path_and_rename_blog_title_images = PathAndRename("blog_title_images")


@python_2_unicode_compatible
class Blog(models.Model):
    created_at = models.DateTimeField(u'дата создания', auto_now_add=True)
    updated_at = models.DateTimeField(u'дата редактирования', auto_now=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL)

    title = models.CharField(u'имя заметки', max_length=255)
    content = models.TextField(u'описание диалога', null=True, blank=True)
    slug = models.CharField(u'слаг', max_length=255, unique=True)
    source_url = models.CharField(u'url источника', max_length=255, null=True, blank=True)
    source_author = models.CharField(u'автор', max_length=100, null=True, blank=True)

    title_image = models.ImageField(u'заглавная картинка', upload_to=path_and_rename_blog_title_images, blank=True, null=True)
    is_published = models.BooleanField(u'заметка опубликован', default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Заметка'
        verbose_name_plural = 'Заметки'

        ordering = ('-created_at', 'title', )

    def get_short_content(self):
        text = self.content[:300]
        text = strip_tags(text)
        if len(self.content) > 300:
            text += ' ...'
        return text
    get_short_content.short_description = u'Содержимое'

    def get_title_image(self):
        if self.title_image and self.title_image.url:
            return self.title_image.url

    def get_absolute_url(self):
        return "/blog/%s" % self.pk




