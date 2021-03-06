# -*- coding: utf-8 -*-
import hashlib
import redis
import json

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

# from djwebrtc.redis_utils import set_clients, get_clients
from accounts.models import Account
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import AllowAny, IsAuthenticated


# r = redis.StrictRedis(host='localhost', port=6379, db=0)


def return_id(request):
    return HttpResponse(request.user.key_id)


def get_id(request, key, token=None):
    user = get_object_or_404(Account, key=key)
    hash_object = hashlib.sha256(key)
    hex_dig = hash_object.hexdigest()[:15]
    if user.key_id != hex_dig:
        user.key_id = hex_dig
        user.save()
    return HttpResponse(hex_dig)


@csrf_exempt
def set_streaming(request, key, token):
    pad = '00'
    for i in range(0, 10):
        pad += pad

    content = pad + '\n'
    content += json.dumps({
        "type": "OPEN"
        })
    content += '\n'

    return HttpResponse(content, content_type='application/octet-stream')

"""
@csrf_exempt
def set_streaming1(request, key, token):
    pad = '00'
    for i in range(0, 10):
        pad += pad

    content = pad + '\n'
    content += json.dumps({
        "type": "OPEN"
        })
    content += '\n'

    return HttpResponse(content, content_type='application/octet-stream')
"""

@csrf_exempt
def handle(request, key, token):
    raw_data = request.body
    data = json.loads(raw_data)
    data["src"] = id
    return HttpResponse(json.dumps(data), content_type='application/json')


