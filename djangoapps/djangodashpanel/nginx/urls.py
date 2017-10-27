from django.conf.urls import url

from djangodashpanel.nginx.views import (
    get_logs, get_data, get_access_ip_address, get_access_httpref,
    get_access_agents)

from djangodashpanel.nginx.naxsi import (
    naxsi_messages, naxsi_rules, naxsi_apply_message, naxsi_config,
    naxsi_config_clean, naxsi_config_apply, naxsi_config_rebuild,
    naxsi_configs, naxsi_ids)

urlpatterns = [
    url(r'^loggers/?$', get_logs, name="get_logs"),
    url(r'^access/(?P<slug>\w+)/?$', get_data, name="get_data"),
    url(r'^access/ipaddr/(?P<slug>\w+)/?$', get_access_ip_address, name="get_access_ip_address"),
    url(r'^access/href/(?P<slug>\w+)/?$', get_access_httpref, name="get_access_httpref"),
    url(r'^access/agent/(?P<slug>\w+)/?$', get_access_agents, name="get_access_agents"),

    url(r'^naxsi/messages/(?P<slug>\w+)/?$', naxsi_messages, name="naxsi_messages"),
    url(r'^naxsi/rules/?$', naxsi_rules, name="naxsi_rules"),
    url(r'^naxsi/ids/?$', naxsi_ids, name="naxsi_ids"),
    url(r'^naxsi/configs/?$', naxsi_configs, name="naxsi_configs"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/?$', naxsi_configs, name="naxsi_config"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/rule/?$', naxsi_config, name="naxsi_config"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/clean/?$', naxsi_config_clean, name="naxsi_config_clean"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/apply/?$', naxsi_config_apply, name="naxsi_config_apply"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/messages/?$', naxsi_apply_message, name="naxsi_apply_message"),
    url(r'^naxsi/configs/(?P<config_id>\d+)/rebuild/?$', naxsi_config_rebuild, name="naxsi_config_rebuild"),


]
