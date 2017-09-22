# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-21 17:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dialog',
            name='status',
            field=models.SmallIntegerField(choices=[(1, '\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0443\u0447\u0435\u043d\u0438\u043a\u0430'), (2, '\u0414\u0438\u0430\u043b\u043e\u0433 \u0437\u0430\u043f\u0443\u0449\u0435\u043d')], default=1, verbose_name='\u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u0438\u0430\u043b\u043e\u0433\u0430'),
        ),
        migrations.AlterField(
            model_name='activedialog',
            name='running_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='\u0434\u0430\u0442\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u0430'),
        ),
    ]
