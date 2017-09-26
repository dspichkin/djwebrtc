# -*- coding: utf-8 -*-

import json

from rest_framework import serializers


class JSONField(serializers.Field):
    """
    Сериализация JSON-полей
    """
    def __init__(self, default=None, **kwargs):
        super(JSONField, self).__init__(**kwargs)
        self.default = default
    """
    def to_native(self, obj):
        if isinstance(obj, basestring):
            try:
                return json.loads(obj)
            except ValueError:
                return json.loads(self.default)
        return obj
    """
    def from_native(self, data):
        return json.dumps(data, ensure_ascii=False)

    def to_representation(self, value):
        if isinstance(value, str):
            try:
                return json.loads(value)
            except ValueError:
                return json.loads(self.default)
        return value