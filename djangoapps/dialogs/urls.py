# -*- coding: utf-8 -*-

from django.conf.urls import url

#from peerjs.views import (
#)
from dialogs.views import (
    get_dialogs, get_activedialogs, get_activedialog,
    run_dialog, stop_dialog, user_status, stop_activedialog)


urlpatterns = [
    url(r'^api/dialogs/?$', get_dialogs, name="get_dialogs"),
    url(r'^api/activedialogs/?$', get_activedialogs, name="get_activedialogs"),
    url(r'^api/activedialogs/(?P<activedialog_pk>\d+)/?$', get_activedialog, name="get_activedialog"),
    url(r'^api/run/(?P<dialog_pk>\d+)/?$', run_dialog, name="run_dialog"),
    # url(r'^api/runinto/(?P<activedialog_pk>\d+)/?$', runinto_dialog, name="runinto_dialog"),
    url(r'^api/stop/?$', stop_dialog, name="stop_dialog"),
    url(r'^api/stop/(?P<activedialog_pk>\d+)/?$', stop_activedialog, name="stop_activedialog"),
    url(r'^api/status/?$', user_status, name="user_status"),
    
    #url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/id$', set_streaming, name="set_streaming"),
    #url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/candidate$', handle, name="handle"),
]
