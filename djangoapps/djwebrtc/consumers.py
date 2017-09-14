# -*- coding: utf-8 -*-
import json
import redis
import urlparse

from pprint import pprint
from channels import Group
from channels.auth import channel_session_user_from_http

r = redis.StrictRedis(host='localhost', port=6379, db=0)


@channel_session_user_from_http
def ws_connect(message):
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    params = urlparse.parse_qs(message.content['query_string'])
    key_list = params.get('key')
    key = key_list[0]
    id_list = params.get('id')
    id = id_list[0]
    token_list = params.get('token')
    token = token_list[0]
    # message.channel_session['rooms'] = list(set(message.channel_session['rooms']).union([room.id]))
    message.channel_session['client_key'] = key
    Group("client-%s" % key).add(message.reply_channel)
    clients = get_clients()

    pprint(clients)

    clients[key] = {}
    clients[key][id] = {
        "token": token,
    }
    r.set("clients", json.dumps(clients))

    print "ws_connect"


@channel_session_user_from_http
def ws_message(message):
    print "ws_message"

    data = message.content.get('text')
    data = json.loads(data)
    # pprint(data)
    pprint(get_clients())
    client_key = message.channel_session['client_key']
    # print "client_key", client_key

    dst_key = get_key_by_id(data['dst'])
    if not dst_key:
        print "client not find"
        return
    src_id = get_id_by_key(client_key)

    if data['type'] in ['LEAVE', 'CANDIDATE', 'OFFER', 'ANSWER']:
        print "message send %s" % data['dst']
        Group("client-%s" % dst_key).send({
            "text": json.dumps({
                "type": data['type'],
                "src": src_id,
                "dst": data['dst'],
                "payload": data['payload']
            })
        })

    else:
        print "Message unrecognized"


@channel_session_user_from_http
def ws_disconnect(message):
    print "ws_disconnect", message.content
    # print message.channel_session.get("clients", set())
    # params = urlparse.parse_qs(message.content)
    client_key = message.channel_session['client_key']
    Group("client-%s" % client_key).discard(message.reply_channel)
    clients = get_clients()
    del clients[client_key]
    r.set("clients", clients)



# ===========================


def ws_connect_call(message):
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    # Add them to the chat group
    Group('call').add(message.reply_channel)
    print "ws_connect call"


def ws_message_call(message):
    print "ws_message"
    Group("call").send({
        "text": "[user] %s" % message.content['text'],
    })


def ws_disconnect_call(message):
    #Group('call').discard(message.reply_channel)
    pass

# ================================


def get_clients():
    clients = r.get("clients")
    if not clients:
        clients = {}
    else:
        clients = json.loads(clients)
    return clients


def get_client(key, id):
    _clients = get_clients()
    if key in _clients:
        if id in _clients[key]:
            return _clients[key][id]


def get_key_by_id(id):
    _clients = get_clients()
    for key in _clients:
        for i in _clients[key]:
            if i == id:
                return key


def get_id_by_key(key):
    _clients = get_clients()
    for k in _clients:
        if k == key:
            for i in _clients[key]:
                return i
