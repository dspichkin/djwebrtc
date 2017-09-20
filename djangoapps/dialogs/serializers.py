# -*- coding: utf-8 -*-

from rest_framework import serializers


from dialogs.models import (Dialog, ActiveDialog)
from accounts.serializers import (AccountSerializer)


class DialogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dialog
        fields = '__all__'


class ActiveDialogSerializer(serializers.ModelSerializer):

    dialog = DialogSerializer()
    master = AccountSerializer()

    class Meta:
        model = ActiveDialog
        fields = '__all__'

