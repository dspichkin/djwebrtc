# app/signals.py
import json

from django.dispatch import receiver

from channels_presence.signals import presence_changed
from channels import Group


@receiver(presence_changed)
def broadcast_presence(sender, room, **kwargs):
    print "broadcast_presence"
    # Broadcast the new list of present users to the room.
    Group(room.channel_name).send({
        'text': json.dumps({
            'type': 'presence',
            'payload': {
                'channel_name': room.channel_name,
                'members': [user.serialize() for user in room.get_users()],
                'lurkers': room.get_anonymous_count(),
            }
        })
    })
