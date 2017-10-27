from django.conf.urls import url

from djangodashpanel.nginx.views import (
    get_logs, get_data, get_access_ip_address, get_access_httpref,
    get_access_agents)

urlpatterns = [
    url(r'^loggers/?$', get_logs, name="get_logs"),
    url(r'^access/(?P<slug>\w+)/?$', get_data, name="get_data"),
    url(r'^access/ipaddr/(?P<slug>\w+)/?$', get_access_ip_address, name="get_access_ip_address"),
    url(r'^access/href/(?P<slug>\w+)/?$', get_access_httpref, name="get_access_httpref"),
    url(r'^access/agent/(?P<slug>\w+)/?$', get_access_agents, name="get_access_agents"),

]
