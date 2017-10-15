# -*- coding: utf-8 -*-

from django.conf.urls import url

from peerjs.views import (
    get_id, set_streaming, handle, return_id, set_streaming1
)

urlpatterns = [
    url(r'^id$', return_id, name="return_id"),
    url(r'^(?P<key>\w+)/id$', get_id, name="get_id"),
    url(r'^(?P<key>\w+)/(?P<token>\w+)/id$', get_id, name="get_id"),
    url(r'^(?P<token>\w+)/id$', set_streaming1, name="set_streaming"),
    url(r'^(?P<id>\w+)/(?P<token>\w+)/id$', set_streaming, name="set_streaming"),
    url(r'^(?P<id>\w+)/(?P<token>\w+)/candidate$', handle, name="handle"),
    url(r'^(?P<id>\w+)/(?P<token>\w+)/offer$', handle, name="handle"),
]
