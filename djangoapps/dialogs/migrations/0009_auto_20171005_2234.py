# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-05 19:34
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0008_auto_20171002_2013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activedialog',
            name='pupil',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pupil', to=settings.AUTH_USER_MODEL, verbose_name='\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0443\u0447\u0435\u043d\u0438\u043a'),
        ),
    ]
