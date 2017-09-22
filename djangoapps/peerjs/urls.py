# -*- coding: utf-8 -*-

from django.conf.urls import url

from peerjs.views import (
    get_id, set_streaming, handle, return_id
)

urlpatterns = [
    url(r'^(?P<key>\w+)/peerjs/id$', get_id, name="return_id"),
    url(r'^(?P<key>\w+)/id$', get_id, name="get_id"),
    url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/id$', set_streaming, name="set_streaming"),
    url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/candidate$', handle, name="handle"),
    url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/offer$', handle, name="handle"),
]
