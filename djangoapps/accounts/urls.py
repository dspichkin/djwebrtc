# -*- coding: utf-8 -*-

from django.conf.urls import include, url

from peerjs.views import (
    get_id, set_streaming, handle
)

urlpatterns = [
    url('^', include('django.contrib.auth.urls')),
]
