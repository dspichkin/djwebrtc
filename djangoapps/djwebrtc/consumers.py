# -*- coding: utf-8 -*-
import json
import logging
import urlparse

from pprint import pprint
from channels import Group
from channels.auth import channel_session_user_from_http
from channels.sessions import channel_session

from channels_presence.models import Room, Presence


@channel_session_user_from_http
def ws_connect(message):
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    params = urlparse.parse_qs(message.content['query_string'])
    key_list = params.get('key')
    client_key = key_list[0]
    id_list = params.get('id')
    client_id = id_list[0]
    # token_list = params.get('token')
    # token = token_list[0]

    for p in Presence.objects.filter(room__channel_name='Clients', user__key=client_key):
        p.user.key_id = client_id
        p.user.save()

    # Room.objects.add("Clients", message.reply_channel.name, message.user)

    # message.channel_session['rooms'] = list(set(message.channel_session['rooms']).union([room.id]))
    message.channel_session['client_id'] = client_id
    Group("client-%s" % client_id).add(message.reply_channel)

    print "ws_connect"


@channel_session_user_from_http
def ws_message(message):

    text = message.content.get('text')
    data = json.loads(text)

    client_id = message.channel_session['client_id']

    dst_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=data['dst']).order_by('last_seen').first()
    if not dst_obj:
        return

    src_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=client_id).order_by('last_seen').first()
    if not src_obj:
        return
    if data['type'] in ['LEAVE', 'CANDIDATE', 'OFFER', 'ANSWER']:
        Group(src_obj.room.channel_name).send({
            "text": json.dumps({
                "type": data['type'],
                "src": src_obj.user.key_id,
                "dst": data['dst'],
                "payload": data['payload']
            })
        })

    else:
        print "Message unrecognized"


@channel_session_user_from_http
def ws_disconnect(message):
    print "ws_disconnect"

    client_id = message.channel_session['client_id']

    Room.objects.remove("Clients", message.reply_channel.name)
    message.channel_session['client_id'] = client_id
    Group("client-%s" % client_id).discard(message.reply_channel)


# ===========================

@channel_session_user_from_http
def ws_connect_call(message):
    print "ws_connect_call"
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    params = urlparse.parse_qs(message.content['query_string'])
    # key_list = params.get('key')
    id_list = params.get('id')
    # client_key = key_list[0]
    client_id = id_list[0]

    run_broadcast_clients()

    Room.objects.add("Clients", message.reply_channel.name, message.user)

    message.channel_session['client_id'] = client_id
    Group("client-%s" % client_id).add(message.reply_channel)

    # message.channel_session['client_key'] = key


@channel_session_user_from_http
def ws_message_call(message):

    data = message.content.get('text')
    data = json.loads(data)

    src_client_id = message.channel_session['client_id']

    print "",  data["type"]

    if data["type"] in ['CALL', 'CLIENTS', 'HEARBEAT']:
        if 'command' in data:
            if data['command'] == 'GET':
                run_broadcast_clients()

        if data['type'] == 'HEARBEAT':
            Presence.objects.touch(message.reply_channel.name)

        if data['type'] == 'CALL':
            dst = data['dst']
            pres = Presence.objects.filter(room__channel_name='Clients', user__key_id=dst).order_by('last_seen').first()

            if not pres:
                return

            if data['command'] == 'CALL':
                # dst_client_key = pres.user.key
                dst_client_key_id = pres.user.key_id
                Group("client-%s" % dst_client_key_id).send({
                    'text': json.dumps({
                        'dst': dst_client_key_id,
                        'src': src_client_id,
                        'command': 'RING',
                        'type': 'CALL'
                    })
                })
                Group("client-%s" % src_client_id).send({
                    'text': json.dumps({
                        'dst': src_client_id,
                        'src': src_client_id,
                        'command': 'RING_ECHO',
                        'type': 'CALL'
                    })
                })
            if data['command'] == 'TAKE':
                dst_client_key_id = pres.user.key_id
                Group("client-%s" % dst_client_key_id).send({
                    'text': json.dumps({
                        'dst': dst_client_key_id,
                        'src': src_client_id,
                        'command': 'TAKE',
                        'type': 'CALL'
                    })
                })
                Group("client-%s" % src_client_id).send({
                    'text': json.dumps({
                        'dst': src_client_id,
                        'src': src_client_id,
                        'command': 'TAKE_ECHO',
                        'type': 'CALL'
                    })
                })


def ws_disconnect_call(message):
    print "ws_disconnect_call"
    Room.objects.remove("Clients", message.reply_channel.name)

    client_id = message.channel_session['client_id']
    Group("client-%s" % client_id).discard(message.reply_channel)


def run_broadcast_clients():
    clients = []
    for room in Room.objects.filter(channel_name='Clients'):
        clients += [user.serialize() for user in room.get_users()]

    for room in Room.objects.filter(channel_name='Clients'):
        Group(room.channel_name).send({
            'text': json.dumps({
                'clients': clients,
                'type': 'CLIENTS'
            })
        })


# ================================






