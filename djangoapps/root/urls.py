# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url, include
from django.http import HttpResponseRedirect
from django.conf.urls import url
from django.contrib import admin
from django.views.generic.base import TemplateView


def sredirect(request, url):
    return HttpResponseRedirect("/dash/#/%s" % url)


class HomePageView(TemplateView):
    template_name = 'index.html'

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^peerjs/', include('peerjs.urls')),
    url(r'^$', HomePageView.as_view(), name='home'),
    # url(r'^(?P<url>.*)$', sredirect),
]
