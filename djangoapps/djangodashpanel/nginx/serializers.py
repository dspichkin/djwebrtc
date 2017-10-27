# -*- coding: utf-8 -*-

from rest_framework import serializers

from djangodashpanel.models.naxsi import (
    NaxsiConfig)


class ConfigSerializer(serializers.ModelSerializer):

    class Meta:
        model = NaxsiConfig
        fields = ('id', 'created_at', 'updated_at', 'name', 'logger')

    