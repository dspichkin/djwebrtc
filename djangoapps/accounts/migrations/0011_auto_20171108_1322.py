# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-08 10:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_auto_20171031_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='key_id',
            field=models.CharField(blank=True, max_length=50, null=True, unique=True, verbose_name='\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043b\u044e\u0447\u0430'),
        ),
    ]
