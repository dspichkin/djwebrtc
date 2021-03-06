# -*- coding: utf-8 -*-

from rest_framework import serializers

from dialogs.utils import JSONField
from dialogs.models import (Tag, Dialog, ActiveDialog)
from accounts.serializers import (AccountSerializer, AccountFIOSerializer)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class DialogSerializer(serializers.ModelSerializer):
    scenario = JSONField()
    level_display = serializers.SerializerMethodField()
    tags = TagSerializer(many=True)
    owner = AccountFIOSerializer()

    class Meta:
        model = Dialog
        fields = '__all__'

    def get_level_display(self, obj):
        return obj.get_level_display()


class DialogShortSerializer(serializers.ModelSerializer):
    level_display = serializers.SerializerMethodField()
    tags = TagSerializer(many=True)
    owner = AccountFIOSerializer()

    class Meta:
        model = Dialog
        fields = ['id', 'level_display', 'tags', 'owner', 'name',
                  'description', 'level', 'background_image', 'is_published']

    def get_level_display(self, obj):
        return obj.get_level_display()


class ActiveDialogSerializer(serializers.ModelSerializer):

    dialog = DialogSerializer()
    master = AccountSerializer()
    pupil = AccountSerializer()
    chat_messages = JSONField()

    class Meta:
        model = ActiveDialog
        fields = '__all__'


class ActiveDialogShortSerializer(serializers.ModelSerializer):

    dialog = DialogShortSerializer()
    master = AccountSerializer()

    class Meta:
        model = ActiveDialog
        fields = ['id', 'dialog', 'master', 'status']
