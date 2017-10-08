# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-02 13:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogs', '0006_dialog_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='\u0438\u043c\u044f \u043c\u0435\u0442\u043a\u0438')),
            ],
            options={
                'ordering': ('name',),
                'verbose_name': '\u041c\u0435\u0442\u043a\u0430',
                'verbose_name_plural': '\u041c\u0435\u0442\u043a\u0438',
            },
        ),
        migrations.AddField(
            model_name='dialog',
            name='level',
            field=models.SmallIntegerField(blank=True, choices=[(10, 'Beginner, Elementary'), (20, 'Pre-Intermediate'), (30, 'Intermediate'), (40, 'Upper-Intermediate'), (50, 'Advanced'), (60, 'Proficiency')], null=True, verbose_name=' \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u043d\u0438\u044f'),
        ),
        migrations.AddField(
            model_name='dialog',
            name='tags',
            field=models.ManyToManyField(to='dialogs.Tag', verbose_name='\u043c\u0435\u0442\u043a\u0438'),
        ),
    ]