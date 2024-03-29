# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-27 07:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0011_dialog_is_published'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='dialog',
            options={'ordering': ('-updated_at', 'name'), 'verbose_name': '\u0414\u0438\u0430\u043b\u043e\u0433', 'verbose_name_plural': '\u0414\u0438\u0430\u043b\u043e\u0433\u0438'},
        ),
        migrations.AlterField(
            model_name='dialog',
            name='level',
            field=models.SmallIntegerField(blank=True, choices=[(10, 'Beginner, Elementary'), (20, 'Pre-Intermediate'), (30, 'Intermediate'), (40, 'Upper-Intermediate'), (50, 'Advanced'), (60, 'Proficiency')], null=True, verbose_name='\u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u043d\u0438\u044f'),
        ),
    ]
