# -*- coding: utf-8 -*-

from rest_framework import serializers

from accounts.models import (Account)


class AccountSerializer(serializers.ModelSerializer):
    level_display = serializers.SerializerMethodField()
    sex_display = serializers.SerializerMethodField()

    class Meta:
        model = Account
        fields = (
            'fio', 'key', 'key_id', 'email', 'level', 'level_display',
            'avatar', 'is_accept_call', 'first_name', 'skypeid', 'sex', 'sex_display', 'birth_year')

    def get_level_display(self, obj):
        return obj.get_level_display()

    def get_sex_display(self, obj):
        return obj.get_sex_display()


class AccountFIOSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('fio', )


