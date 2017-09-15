# -*- coding: utf-8 -*-
import json

import urlparse

from pprint import pprint
from channels import Group
from channels.auth import channel_session_user_from_http


from djwebrtc.redis_utils import (
    set_clients, get_clients, get_key_by_id, get_id_by_key)


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

    if key not in clients:
        clients[key] = {
            "id": id,
            "token": token,
        }
    set_clients(clients)
    pprint(get_clients())
    print "ws_connect"


@channel_session_user_from_http
def ws_message(message):

    data = message.content.get('text')
    data = json.loads(data)
    client_key = message.channel_session['client_key']

    dst_key = get_key_by_id(data['dst'])
    print "dst_key", dst_key
    if not dst_key:
        print "client not find"
        return
    src_id = get_id_by_key(client_key)
    if data['type'] in ['LEAVE', 'CANDIDATE', 'OFFER', 'ANSWER']:
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
    # print "ws_disconnect", message.content
    # print message.channel_session.get("clients", set())
    # params = urlparse.parse_qs(message.content)
    client_key = message.channel_session['client_key']
    Group("client-%s" % client_key).discard(message.reply_channel)
    clients = get_clients()
    if client_key in clients:
        del clients[client_key]
        set_clients(clients)



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




def get_client1(key, id):
    _clients = get_clients()
    if key in _clients:
        if id in _clients[key]:
            return _clients[key][id]






