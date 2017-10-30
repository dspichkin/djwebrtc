# -*- coding: utf-8 -*-
import json
# import logging
import urlparse

from pprint import pprint

from channels import Group
from channels.auth import channel_session_user_from_http, channel_session_user
# from channels.sessions import channel_session
from django.shortcuts import get_object_or_404
from django.utils import timezone

from channels_presence.models import Room, Presence

from accounts.models import Account
from dialogs.models import (
    ActiveDialog, DIALOG_WAIT, DIALOG_ACTIVE, DIALOG_STOP, DIALOG_CANCEL)


@channel_session_user_from_http
def ws_connect(message):
    message.reply_channel.send({"accept": True})
    params = urlparse.parse_qs(message.content['query_string'])
    id_list = params.get('id')
    if not id_list:
        return
    client_id = id_list[0]

    message.channel_session['client_id'] = client_id
    Room.objects.add("Clients", message.reply_channel.name, message.user)
    Group("call-client-%s" % client_id).add(message.reply_channel)


@channel_session_user
def ws_message(message):
    print "message", dir(message)
    Presence.objects.touch(message.reply_channel.name, user=message.user)

    data = message.content.get('text')
    data = json.loads(data)

    # src_client_id = message.channel_session['client_id']

    command = data.get("command")
    if command:

        if command == 'MESSAGE_CHANGE_TURN_TO_MASTER':
            activedialogid = data.get("activedialogid")
            activedialog = ActiveDialog.objects.filter(pk=activedialogid).first()
            if activedialog:
                Group("call-client-%s" % activedialog.master.key_id).send({
                    'text': json.dumps({
                        'command': "MESSAGE_CHANGE_TURN_TO_MASTER",
                    })
                })

        if command == 'CHAT_SEND_MESSAGE':
            activedialogid = data.get("activedialogid")
            chat_message = data.get("message")
            user_key = data.get("source")
            activedialog = ActiveDialog.objects.filter(pk=activedialogid).first()
            if activedialog:
                new_message = {
                    "message": chat_message,
                    "date": timezone.now().strftime('%H:%M %d.%m.%Y')
                }
                if activedialog.master.key_id == user_key:
                    new_message["source"] = {
                        "type": 'master',
                        "fio": activedialog.master.fio()
                    }
                if activedialog.pupil.key_id == user_key:
                    new_message["source"] = {
                        "type": 'pupil',
                        "fio": activedialog.pupil.fio()
                    }
                activedialog.chat_messages.append(new_message)
                activedialog.save()
                Group("call-client-%s" % activedialog.master.key_id).send({
                    'text': json.dumps({
                        'command': "CHAT_UPDATE",
                        'chat_messages': activedialog.chat_messages
                    })
                })
                Group("call-client-%s" % activedialog.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "CHAT_UPDATE",
                        'chat_messages': activedialog.chat_messages
                    })
                })

        if command == 'CHANGE_PERSONAGE':
            activedialogid = data.get("activedialogid")
            source = data.get("source")
            activedialog = ActiveDialog.objects.filter(pk=activedialogid).first()
            if activedialog:
                Group("call-client-%s" % activedialog.master.key_id).send({
                    'text': json.dumps({
                        'command': "CHANGE_PERSONAGE"
                    })
                })
                Group("call-client-%s" % activedialog.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "CHANGE_PERSONAGE"
                    })
                })
            else:
                Group("call-client-%s" % source).send({
                    'text': json.dumps({
                        'command': "STOP_CALLING",
                        'reason': "NOT FOUND"
                    })
                })

        if command == 'NEXTSTEP':
            nextstep = data.get("nextstep")
            activedialogid = data.get("activedialogid")
            source = data.get("source")

            activedialog = ActiveDialog.objects.filter(pk=activedialogid).first()
            if activedialog:
                Group("call-client-%s" % activedialog.master.key_id).send({
                    'text': json.dumps({
                        'command': "SET_STEP",
                        'STEP_ID': nextstep
                    })
                })
                Group("call-client-%s" % activedialog.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "SET_STEP",
                        'STEP_ID': nextstep
                    })
                })
            else:
                Group("call-client-%s" % source).send({
                    'text': json.dumps({
                        'command': "STOP_CALLING",
                        'reason': "NOT FOUND"
                    })
                })

        if command == 'CALLING':
            activedialogid = data.get("target")
            source = data.get("source")
            if activedialogid:
                activedialog = ActiveDialog.objects.filter(pk=activedialogid, master__is_accept_call=True).first()
                if activedialog:
                    if activedialog.status == DIALOG_WAIT:
                        presense = Presence.objects.filter(room__channel_name="Clients", user=activedialog.master).last()
                        source_user = Account.objects.filter(key_id=source).first()
                        if source_user and presense:
                            Group("call-client-%s" % activedialog.master.key_id).send({
                                'text': json.dumps({
                                    'command': "CALLING",
                                    'target': "TAKEPHONE",
                                    'activedialogid': activedialog.id,
                                    'user': {
                                        'fio': source_user.fio(),
                                        'key_id': source_user.key_id,
                                        'level_display': source_user.get_level_display(),
                                        'avatar': source_user.get_avatar_url()
                                    }
                                })
                            })
                    elif activedialog.status == DIALOG_STOP:
                        Group("call-client-%s" % source).send({
                            'text': json.dumps({
                                'command': "STOP_CALLING",
                                'reason': "DIALOG_STOP"
                            })
                        })
                    #elif activedialog.status == DIALOG_ACTIVE:
                    #    Group("call-client-%s" % source).send({
                    #        'text': json.dumps({
                    #            'command': "STOP_CALLING",
                    #            'reason': "DIALOG_ACTIVE"
                    #        })
                    #    })
                else:
                    Group("call-client-%s" % source).send({
                        'text': json.dumps({
                            'command': "STOP_CALLING",
                            'reason': "NOT FOUND"
                        })
                    })
        if command == 'CALLING_MASTER_REJECT':
            # activedialigid = data.get("activedialigid")
            user_pupil = data.get("target")
            user_master = data.get("source")
            if user_pupil:
                # activedialog = ActiveDialog.objects.filter(pk=activedialigid).first()
                Group("call-client-%s" % user_pupil).send({
                    'text': json.dumps({
                        'command': "CALLING_MASTER_REJECT",
                        'target': "TAKEPHONE",
                    })
                })
                Group("call-client-%s" % user_master).send({
                    'text': json.dumps({
                        'command': "CALLING_MASTER_REJECT",
                        'pupil': user_pupil,
                    })
                })
        if command == 'CALLING_REJECT':
            target = data.get("target")
            if target:
                activedialog = ActiveDialog.objects.filter(pk=target).first()
                Group("call-client-%s" % activedialog.master.key_id).send({
                    'text': json.dumps({
                        'command': "CALLING_REJECT",
                        'target': "TAKEPHONE",
                    })
                })
                # activedialog.status = DIALOG_CANCEL
                # activedialog.save()

        if command == 'START_DIALOG':
            target = data.get("target")
            master = data.get("master")
            pupil = data.get("pupil")
            if target and master and pupil:
                ac = ActiveDialog.objects.filter(pk=target, master__is_accept_call=True).first()
                if ac and ac.run_dialog(pupil):
                    Group("call-client-%s" % master).send({
                        'text': json.dumps({
                            'command': "START_DIALOG_MASTER",
                            'dialog': target,
                        })
                    })
                    Group("call-client-%s" % pupil).send({
                        'text': json.dumps({
                            'command': "START_DIALOG_PUPIL",
                            'dialog': target,
                        })
                    })

        if command == 'DIALOG_STOP':
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                ac.master.stop_dialog()
                ac.pupil.stop_dialog()
                Group("call-client-%s" % ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP",
                        'dialog': target,
                    })
                })
                Group("call-client-%s" % ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP",
                        'dialog': target,
                    })
                })
        if command == 'DIALOG_STOP_VOICE_CONNECTION':
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                ac.master.stop_dialog()
                ac.pupil.stop_dialog()
                Group("call-client-%s" % ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP_VOICE_CONNECTION",
                        'dialog': target,
                    })
                })
                Group("call-client-%s" % ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP_VOICE_CONNECTION",
                        'dialog': target,
                    })
                })
        if command == 'DIALOG_VOICE_CONNECTION_ERROR':
            target = data.get("target")
            message = data.get("message")
            ac = get_object_or_404(ActiveDialog, pk=target)
            ac.master.stop_dialog()
            ac.pupil.stop_dialog()
            Group("call-client-%s" % ac.master.key_id).send({
                'text': json.dumps({
                    'command': "DIALOG_VOICE_CONNECTION_ERROR",
                    'dialog': target,
                    'message': message
                })
            })
            Group("call-client-%s" % ac.pupil.key_id).send({
                'text': json.dumps({
                    'command': "DIALOG_VOICE_CONNECTION_ERROR",
                    'dialog': target,
                    'message': message
                })
            })

        if command == 'DIALOG_STOP_ERROR':
            target = data.get("target")
            ac = get_object_or_404(ActiveDialog, pk=target)
            ac.master.stop_dialog()
            ac.pupil.stop_dialog()
            Group("call-client-%s" % ac.master.key_id).send({
                'text': json.dumps({
                    'command': "DIALOG_STOP_ERROR",
                    'dialog': target,
                })
            })
            Group("call-client-%s" % ac.pupil.key_id).send({
                'text': json.dumps({
                    'command': "DIALOG_STOP_ERROR",
                    'dialog': target,
                })
            })

        if command == 'CHANGE_DIALOG':
            old_activedialogid = data.get("current_activedialogid")
            next_activedialogid = data.get("next_activedialogid")
            old_ac = get_object_or_404(ActiveDialog, pk=old_activedialogid)
            next_ac = get_object_or_404(ActiveDialog, pk=next_activedialogid)
            if old_ac and next_ac:
                next_ac.pupil = old_ac.pupil
                next_ac.save()
                Group("call-client-%s" % next_ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "CHANGE_DIALOG",
                        'activedialodid': next_ac.pk,
                    })
                })
                Group("call-client-%s" % next_ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "CHANGE_DIALOG",
                        'activedialodid': next_ac.pk,
                    })
                })

        if command == 'EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL':
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                # ac.status = DIALOG_STOP
                # ac.save()

                Group("call-client-%s" % ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP",
                        'dialog': target,
                    })
                })
                Group("call-client-%s" % ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL",
                        'dialog': target,
                    })
                })
        if command == 'EXIT_FROM_ACTIVE_DIALOG_BY_MASTER':
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                # ac.status = DIALOG_STOP
                # ac.save()

                Group("call-client-%s" % ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER",
                        'dialog': target,
                    })
                })
                Group("call-client-%s" % ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "DIALOG_STOP",
                        'dialog': target,
                    })
                })

        if command == 'HEARBEAT_DIALOG_PUPIL':
            # отпарвляем мастеру HEARBEAT
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                Group("call-client-%s" % ac.master.key_id).send({
                    'text': json.dumps({
                        'command': "HEARBEAT_DIALOG_PUPIL",
                        'dialog': target,
                    })
                })
        if command == 'HEARBEAT_DIALOG_MASTER':
            # отпарвляем ученику HEARBEAT
            target = data.get("target")
            if target:
                ac = get_object_or_404(ActiveDialog, pk=target)
                Group("call-client-%s" % ac.pupil.key_id).send({
                    'text': json.dumps({
                        'command': "HEARBEAT_DIALOG_MASTER",
                        'dialog': target,
                    })
                })
    else:
        src_id = message.channel_session['client_id']
        if src_id:
            src_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=src_id).order_by('last_seen').last()
            dst = data.get('dst')
            if dst:
                dst_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=dst).order_by('last_seen').last()
                if data.get('type') in ['LEAVE', 'CANDIDATE', 'OFFER', 'ANSWER']:
                    Group("call-client-%s" % dst_obj.user.key_id).send({
                        "text": json.dumps({
                            "type": data['type'],
                            "src": src_obj.user.key_id,
                            "dst": dst,
                            "payload": data['payload']
                        })
                    })


@channel_session_user
def ws_disconnect(message):
    # print "XXXXX ws_disconnect"
    if 'client_id' in message.channel_session:
        client_id = message.channel_session['client_id']
        # account = Account.objects.filter(key_id=client_id).first()
        """
        if account:
            for ad_master in ActiveDialog.objects.filter(master=account, status=DIALOG_WAIT):
                Group("call-client-%s" % ad_master.pupil.key_id).send({
                    'text': json.dumps({
                        'dst': ad_master.pupil.key_id,
                        'src': client_id,
                        'command': 'DIALOG_STOP',
                        'type': 'DIALOG_STOP'
                    })
                })
                # ad_master.status = DIALOG_STOP
            for ad_pupil in ActiveDialog.objects.filter(pupil=account, status=DIALOG_WAIT):
                Group("call-client-%s" % ad_pupil.master.key_id).send({
                    'text': json.dumps({
                        'dst': ad_pupil.master.key_id,
                        'src': client_id,
                        'command': 'DIALOG_STOP',
                        'type': 'DIALOG_STOP'
                    })
                })
                # ad_pupil.status = DIALOG_STOP
        """
        Group("call-client-%s" % client_id).discard(message.reply_channel)
    Room.objects.remove("Clients", message.reply_channel.name)





"""


@channel_session_user_from_http
def ws_connect_peer(message):
    return
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    params = urlparse.parse_qs(message.content['query_string'])
    key_list = params.get('key')
    client_key = key_list[0]
    id_list = params.get('id')
    client_id = id_list[0]
    # token_list = params.get('token')
    # token = token_list[0]
    Room.objects.add("Clients", message.reply_channel.name, message.user)

    # for p in Presence.objects.filter(room__channel_name='Clients', user__key=client_key):
    #    p.user.key_id = client_id

    # Room.objects.add("Clients", message.reply_channel.name, message.user)

    # message.channel_session['rooms'] = list(set(message.channel_session['rooms']).union([room.id]))
    message.channel_session['client_id'] = client_id
    Group("peer-client-%s" % client_id).add(message.reply_channel)

    print "ws_connect"


@channel_session_user_from_http
def ws_message_peer(message):
    return
    text = message.content.get('text')
    data = json.loads(text)
    # print "data:"
    # pprint(data)

    Presence.objects.touch(message.reply_channel.name)

    src_id = message.channel_session['client_id']
    src_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=src_id).order_by('last_seen').last()
    if not src_obj:
        Group("peer-client-%s" % src_id).send({
            'text': json.dumps({
                'error': "Not find src client",
                'type': data['type']
            })
        })
        return

    dst_obj = Presence.objects.filter(room__channel_name='Clients', user__key_id=data['dst']).order_by('last_seen').last()
    if not dst_obj:
        Group("peer-client-%s" % src_id).send({
            'text': json.dumps({
                'error': "Not find dst client",
                'type': data['type']
            })
        })
        return

    if data['type'] in ['LEAVE', 'CANDIDATE', 'OFFER', 'ANSWER']:
        Group("peer-client-%s" % dst_obj.user.key_id).send({
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
def ws_disconnect_peer(message):
    return
    print "XXXXX ws_disconnect"

    client_id = message.channel_session['client_id']
    Room.objects.remove("Clients", message.reply_channel.name)
    Group("peer-client-%s" % client_id).discard(message.reply_channel)


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

    Room.objects.add("CallClients", message.reply_channel.name, message.user)

    message.channel_session['client_id'] = client_id
    Group("call-client-%s" % client_id).add(message.reply_channel)

    # message.channel_session['client_key'] = key


@channel_session_user_from_http
def ws_message_call(message):

    data = message.content.get('text')
    data = json.loads(data)

    src_client_id = message.channel_session['client_id']

    Presence.objects.touch(message.reply_channel.name)
    for p in Presence.objects.filter(channel_name=message.reply_channel.name):
        last_client = Presence.objects.filter(room__channel_name="Clients", user=p.user).order_by('last_seen').last()
        if last_client:
            last_client.last_seen = timezone.now()
            last_client.save()

    # print "",  data["type"]

    if data["type"] in ['CALL', 'CLIENTS', 'HEARBEAT']:
        if 'command' in data:
            if data['command'] == 'GET':
                run_broadcast_clients()

        if data['type'] == 'CALL':
            dst = data['dst']
            pres = Presence.objects.filter(room__channel_name='CallClients', user__key_id=dst).order_by('last_seen').first()

            if not pres:
                Group("call-client-%s" % src_client_id).send({
                    'text': json.dumps({
                        'error': "Not find client",
                        'type': 'CALL'
                    })
                })
                return

            if data['command'] == 'CALL':
                # dst_client_key = pres.user.key
                dst_client_key_id = pres.user.key_id
                Group("call-client-%s" % dst_client_key_id).send({
                    'text': json.dumps({
                        'dst': dst_client_key_id,
                        'src': src_client_id,
                        'command': 'RING',
                        'type': 'CALL'
                    })
                })
                Group("call-client-%s" % src_client_id).send({
                    'text': json.dumps({
                        'dst': src_client_id,
                        'src': src_client_id,
                        'command': 'RING_ECHO',
                        'type': 'CALL'
                    })
                })
            if data['command'] == 'TAKE':
                dst_client_key_id = pres.user.key_id
                Group("call-client-%s" % dst_client_key_id).send({
                    'text': json.dumps({
                        'dst': dst_client_key_id,
                        'src': src_client_id,
                        'command': 'TAKE',
                        'type': 'CALL'
                    })
                })
                Group("call-client-%s" % src_client_id).send({
                    'text': json.dumps({
                        'dst': src_client_id,
                        'src': src_client_id,
                        'command': 'TAKE_ECHO',
                        'type': 'CALL'
                    })
                })


@channel_session_user_from_http
def ws_disconnect_call(message):
    print "ws_disconnect_call"
    Room.objects.remove("CallClients", message.reply_channel.name)

    if 'client_id' in message.channel_session:
        client_id = message.channel_session['client_id']
    Group("call-client-%s" % client_id).discard(message.reply_channel)


"""

def run_broadcast_clients():
    clients = []
    for room in Room.objects.filter(channel_name='CallClients'):
        clients += [user.serialize() for user in room.get_users()]

    for room in Room.objects.filter(channel_name='CallClients'):
        Group(room.channel_name).send({
            'text': json.dumps({
                'clients': clients,
                'type': 'CLIENTS'
            })
        })


# ================================






