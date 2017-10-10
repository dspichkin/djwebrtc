# -*- coding: utf-8 -*-

from django.conf.urls import include, url

from peerjs.views import (
    get_id, set_streaming, handle
)

from accounts.views import (
    accept_call, message, check_user, registration, confirm_email,
    remember
    )

urlpatterns = [
    url(r'^', include('django.contrib.auth.urls')),
    url(r'^', include('allauth.urls')),
    url(r'^registration/', registration, name="registration"),
    url(r'^accept_call/', accept_call, name="accept_call"),
    url(r'^message/', message, name="message"),
    url(r'^user/', check_user, name="check_user"),
    url(r'^confirm/(?P<key>\w+)/?$', confirm_email, name="confirm_key"),
    url(r'^confirm/', confirm_email, name="confirm"),
    url(r'^remember/(?P<key>\w+)/?$', remember, name="remember_key"),
    url(r'^remember/', remember, name="remember"),
]
