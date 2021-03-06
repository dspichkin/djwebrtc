# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-02 17:13
from __future__ import unicode_literals

import dialogs.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0007_auto_20171002_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='dialog',
            name='background_image',
            field=models.ImageField(blank=True, null=True, upload_to=dialogs.models.PathAndRename('dialog_bg_images')),
        ),
        migrations.AlterField(
            model_name='dialog',
            name='tags',
            field=models.ManyToManyField(blank=True, to='dialogs.Tag', verbose_name='\u043c\u0435\u0442\u043a\u0438'),
        ),
    ]
