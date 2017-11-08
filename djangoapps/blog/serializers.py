# -*- coding: utf-8 -*-

from rest_framework import serializers

from dialogs.utils import JSONField
from blog.models import (Blog)


class BlogSerializer(serializers.ModelSerializer):
    short_content = serializers.SerializerMethodField()
    title_image = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = '__all__'

    def get_short_content(self, obj):
        return obj.get_short_content()

    def get_title_image(self, obj):
        return obj.get_title_image()

