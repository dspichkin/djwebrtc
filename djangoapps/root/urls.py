# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url, include
from django.http import HttpResponseRedirect
from django.contrib import admin
from django.views.generic.base import TemplateView
from django.shortcuts import render


def sredirect(request, url):
    return HttpResponseRedirect("/dash/#/%s" % url)


def app(request):
    if request.user.is_authenticated():
        return render(request, 'index.html')
    return HttpResponseRedirect("/accounts/login/")


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^accounts/', include('accounts.urls')),
    url(r'^peerjs/', include('peerjs.urls')),
    url(r'^dialogs/', include('dialogs.urls')),
    # JS-приложение
    url(r'^$', app, name='app'),
    # url(r'^(?P<url>.*)$', sredirect),
]
