# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib.auth.views import LoginView
from django.http import HttpResponseRedirect

from accounts.views import (
    accept_call, message, check_user, registration, confirm_email,
    remember, user
    )


def if_authentificated_redirect(function):
    def wrap(request, *args, **kwargs):
        if request.user and request.user.is_authenticated:
            return HttpResponseRedirect('/')
        else:
            return function(request, *args, **kwargs)
    return wrap

urlpatterns = [
    url(r'^login/?', if_authentificated_redirect(LoginView.as_view()), name='login'),
    url(r'^', include('django.contrib.auth.urls')),
    url(r'^', include('allauth.urls')),
    url(r'^registration/', registration, name="registration"),
    url(r'^accept_call/', accept_call, name="accept_call"),
    url(r'^message/', message, name="message"),
    url(r'^check_user/?', check_user, name="check_user"),
    url(r'^user/?', user, name="user"),
    url(r'^confirm/(?P<key>\w+)/?$', confirm_email, name="confirm_key"),
    url(r'^confirm/', confirm_email, name="confirm"),
    url(r'^remember/(?P<key>\w+)/?$', remember, name="remember_key"),
    url(r'^remember/', remember, name="remember"),
]
