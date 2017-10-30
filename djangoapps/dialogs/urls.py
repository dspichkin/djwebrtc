# -*- coding: utf-8 -*-

from django.conf.urls import url

from dialogs.views import (
    get_dialog, get_dialogs, get_activedialogs, get_activedialog,
    run_dialog, stop_dialog, user_status, stop_activedialog,
    get_myactivedialogs, mydialogs, mydialog, mydialog_bg_image,
    tags, delete_dialog_tag, dialog_tag)


urlpatterns = [
    url(r'^api/dialogues/?$', get_dialogs, name="get_dialogs"),
    url(r'^api/dialogues/(?P<dialog_pk>\d+)/?$', get_dialog, name="get_dialog"),
    url(r'^api/mydialogues/?$', mydialogs, name="mydialogs"),
    url(r'^api/mydialogues/(?P<dialog_pk>\d+)/bg/?$', mydialog_bg_image, name="mydialog_bg_image"),
    url(r'^api/mydialogues/(?P<dialog_pk>\d+)/?$', mydialog, name="mydialog"),
    url(r'^api/activedialogues/?$', get_activedialogs, name="get_activedialogs"),
    url(r'^api/myactivedialogues/?$', get_myactivedialogs, name="get_myactivedialogs"),
    url(r'^api/activedialogues/(?P<activedialog_pk>\d+)/?$', get_activedialog, name="get_activedialog"),
    url(r'^api/run/(?P<dialog_pk>\d+)/?$', run_dialog, name="run_dialog"),
    # url(r'^api/runinto/(?P<activedialog_pk>\d+)/?$', runinto_dialog, name="runinto_dialog"),
    url(r'^api/stop/?$', stop_dialog, name="stop_dialog"),
    url(r'^api/stop/(?P<activedialog_pk>\d+)/?$', stop_activedialog, name="stop_activedialog"),
    url(r'^api/status/?$', user_status, name="user_status"),

    url(r'^tags/(?P<dialog_pk>\d+)/(?P<tag_pk>\d+)/?$', delete_dialog_tag, name="delete_dialog_tag"),
    url(r'^tags/(?P<dialog_pk>\d+)/?$', dialog_tag, name="dialog_tag"),
    url(r'^tags/?$', tags, name="tags"),
    
    #url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/id$', set_streaming, name="set_streaming"),
    #url(r'^(?P<key>\w+)/(?P<id>\w+)/(?P<token>\w+)/candidate$', handle, name="handle"),
]
