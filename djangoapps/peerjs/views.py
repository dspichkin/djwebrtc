# -*- coding: utf-8 -*-
import hashlib
import redis
import json

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from djwebrtc.redis_utils import set_clients, get_clients
from accounts.models import Account
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import AllowAny, IsAuthenticated


r = redis.StrictRedis(host='localhost', port=6379, db=0)


def get_id(request, key):
    user = get_object_or_404(Account, key=key)
    hash_object = hashlib.sha256(key)
    hex_dig = hash_object.hexdigest()[:15]
    if user.key_id != hex_dig:
        user.key_id = hex_dig
        user.save()
    return HttpResponse(hex_dig)


@csrf_exempt
def set_streaming(request, key, id, token):
    """
    ip = request.META['REMOTE_ADDR']

    clients = get_clients()
    if key not in clients:
        clients[key] = {
            "id": id,
            "ip": ip,
            "token": token,
        }
        set_clients(clients)
        # start_streaming(clients, key, id, token)
    else:
        set_clients(clients)
        # start_streaming(clients, key, id, token)
    """
    pad = '00'
    for i in range(0, 10):
        pad += pad

    content = pad + '\n'
    content += json.dumps({
        "type": "OPEN"
        })
    content += '\n'

    return HttpResponse(content, content_type='application/octet-stream')


def start_streaming(clients, key, id, token):

    # client = clients[key][id]
    pass




