# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-26 14:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0005_auto_20170926_1655'),
    ]

    operations = [
        migrations.AddField(
            model_name='dialog',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430'),
        ),
    ]
