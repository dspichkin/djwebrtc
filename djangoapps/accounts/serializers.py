# -*- coding: utf-8 -*-

from rest_framework import serializers

from accounts.models import (Account)


class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('fio', 'key_id', 'email', )
