# -*- coding: utf-8 -*-
import hashlib
import redis
import json

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import AllowAny, IsAuthenticated


r = redis.StrictRedis(host='localhost', port=6379, db=0)


def get_id(request, key):
    hash_object = hashlib.sha256(key)
    hex_dig = hash_object.hexdigest()[:15]
    return HttpResponse(hex_dig)


@csrf_exempt
def set_streaming(request, key, id, token):
    ip = request.META['REMOTE_ADDR']

    clients = get_clients()
    if key not in clients:
        clients[key] = {}
        if id not in clients[key]:
            clients[key][id] = {
                "token": token,
                "ip": ip
            }
        start_streaming(clients, key, id, token)
    else:
        start_streaming(clients, key, id, token)

    pad = '00'
    for i in range(0, 10):
        pad += pad

    content = pad + '\n'
    content += json.dumps({
        "type": "OPEN"
        })
    content += '\n'

    return HttpResponse(content, content_type='application/octet-stream')


def get_clients():
    clients = r.get("clients")
    if not clients:
        clients = {}
    else:
        try:
            clients = json.load(clients)
        except:
            clients = {}
    return clients


def start_streaming(clients, key, id, token):

    # client = clients[key][id]
    r.set("clients", json.dumps(clients))




