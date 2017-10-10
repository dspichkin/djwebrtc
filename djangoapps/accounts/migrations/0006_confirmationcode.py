# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-08 17:36
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_account_is_accept_call'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConfirmationCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name=b'created')),
                ('sent', models.DateTimeField(null=True, verbose_name='\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d')),
                ('key', models.CharField(max_length=64, unique=True, verbose_name=b'\xd0\xba\xd0\xbb\xd1\x8e\xd1\x87')),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
                'verbose_name': '\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f',
                'verbose_name_plural': '\u041a\u043e\u0434\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f',
            },
        ),
    ]
