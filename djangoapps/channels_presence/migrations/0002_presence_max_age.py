# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 11:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels_presence', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='presence',
            name='max_age',
            field=models.IntegerField(default=0, verbose_name=''),
        ),
    ]
