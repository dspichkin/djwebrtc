# -*- coding: utf-8 -*-

from rest_framework import serializers

from dialogs.utils import JSONField
from dialogs.models import (Dialog, ActiveDialog)
from accounts.serializers import (AccountSerializer)


class DialogSerializer(serializers.ModelSerializer):
    scenario = JSONField()

    class Meta:
        model = Dialog
        fields = '__all__'


class ActiveDialogSerializer(serializers.ModelSerializer):

    dialog = DialogSerializer()
    master = AccountSerializer()
    pupil = AccountSerializer()

    class Meta:
        model = ActiveDialog
        fields = '__all__'

