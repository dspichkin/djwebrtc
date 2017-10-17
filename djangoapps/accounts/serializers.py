# -*- coding: utf-8 -*-

from rest_framework import serializers

from accounts.models import (Account)


class AccountSerializer(serializers.ModelSerializer):
    level_display = serializers.SerializerMethodField()

    class Meta:
        model = Account
        fields = (
            'fio', 'key', 'key_id', 'email', 'level', 'level_display',
            'avatar', 'is_accept_call', 'first_name', 'skypeid')

    def get_level_display(self, obj):
        return obj.get_level_display()
