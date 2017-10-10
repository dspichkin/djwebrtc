# -*- coding: utf-8 -*-

import json

from rest_framework import serializers
from rest_framework import permissions

from django.http import HttpResponseRedirect


class IsConfirmAndIsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):

        if request.user and request.user.is_authenticated():
            if not request.user.is_superuser and not request.user.is_confirm:
                return HttpResponseRedirect("/accounts/confirm/")
            return True
        return False


class JSONField(serializers.Field):
    """
    Сериализация JSON-полей
    """
    def __init__(self, default=None, **kwargs):
        super(JSONField, self).__init__(**kwargs)
        self.default = default

    def from_native(self, data):
        return json.dumps(data, ensure_ascii=False)

    def to_representation(self, value):
        if isinstance(value, str):
            try:
                return json.loads(value)
            except ValueError:
                return json.loads(self.default)
        return value
