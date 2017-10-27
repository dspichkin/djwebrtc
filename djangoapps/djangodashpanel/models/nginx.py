# -*- coding: utf-8 -*-
import math
import json
import re
import time
from pprint import pprint
from datetime import datetime, timedelta
from dateutil import parser

from django.contrib.gis.geoip2 import GeoIP2
from django.utils.encoding import python_2_unicode_compatible
from django.db import models
from django.utils import timezone
from django.conf import settings

from ..solo.models import SingletonModel

geo = GeoIP2()


@python_2_unicode_compatible
class NginxData(SingletonModel):
    run_last_time = models.DateTimeField(u'last run', null=True, blank=True)
    list_time_access_record = models.DateTimeField(u'last time access record', null=True, blank=True)
    list_time_error_record = models.DateTimeField(u'last time error record', null=True, blank=True)

    class Meta:
        verbose_name = u'Nginx data'
        verbose_name_plural = u'Nginx data'

    def __str__(self):
        return "%s" % (self.run_last_time)


class NginxAccessManager(models.Manager):
    def put(self, index, name, value):
        if index and name and value:
            raw_request_url = value.get('request_url')
            if raw_request_url:
                request_url = raw_request_url.split('?')[0]
                if request_url:
                    if hasattr(settings, 'DJANGODASHPANEL_NGINX_ACCESS_EXCLUDES'):
                        for pattern in settings.DJANGODASHPANEL_NGINX_ACCESS_EXCLUDES:
                            if re.match(pattern, request_url):
                                return False

            dt_last_tz = value['time_local']
            obj_id = index + int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = NginxAccess.objects.get_or_create(pk=obj_id)
            obj.name = name

            remote_addr = value.get('remote_addr')
            remote_location = None
            if remote_addr:
                remote_location = geo.city(remote_addr)
            status = value.get('status')
            body_bytes_sent = float(value.get('body_bytes_sent', 0))
            http_referer = value.get('http_referer')
            http_user_agent = value.get('http_user_agent')
            request_method = value.get('request_method')

            if obj.value and obj.time and dt_last_tz < obj.time + timedelta(minutes=60):
                data = json.loads(obj.value)

                if remote_addr in data.get("remote_addr", {}):
                    data["remote_addr"][remote_addr]["count"] = data["remote_addr"][remote_addr]["count"] + 1
                    data["remote_addr"][remote_addr]["last_date"] = time.mktime(dt_last_tz.timetuple())
                    data["remote_addr"][remote_addr]["last_url"] = request_url
                else:
                    data["remote_addr"][remote_addr] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple()),
                        "last_url": request_url
                    }

                if request_url in data.get("request_url", {}):
                    if request_method in data["request_url"][request_url]:
                        data["request_url"][request_url][request_method]["count"] = \
                            data["request_url"][request_url][request_method]["count"] + 1
                        data["request_url"][request_url][request_method]["last_date"] = time.mktime(dt_last_tz.timetuple())
                        data["request_url"][request_url][request_method]["status"] = status
                    else:
                        data["request_url"][request_url] = {
                            "count": 1,
                            "last_date": time.mktime(dt_last_tz.timetuple()),
                            "status": status,
                        }
                else:
                    data["request_url"][request_url] = {}
                    data["request_url"][request_url][request_method] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple()),
                        "status": status,
                    }

                if http_referer in data.get("http_referer", {}):
                    data["http_referer"][http_referer]["count"] += 1
                    data["http_referer"][http_referer]["last_url"] = request_url
                else:
                    data["http_referer"] = {}
                    data["http_referer"][http_referer] = {
                        "count": 1,
                        "last_url": request_url
                    }

                if http_user_agent in data.get("http_user_agent", {}):
                    data["http_user_agent"][http_user_agent]["count"] += 1
                else:
                    data["http_user_agent"] = {}
                    data["http_user_agent"][http_user_agent] = {
                        "count": 1
                    }

                data["body_bytes_sent"] = data["body_bytes_sent"] + body_bytes_sent

            else:
                data = {
                    "remote_addr": {},
                    "request_url": {},
                    "http_user_agent": {},
                    "http_referer": {},
                    "body_bytes_sent": body_bytes_sent
                }
                data["remote_addr"][remote_addr] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple()),
                    "last_url": request_url
                }
                if remote_location:
                    data["remote_addr"][remote_addr]["location"] = remote_location

                data["request_url"][request_url] = {}
                data["request_url"][request_url][request_method] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple()),
                    "status": status,
                }

                data["http_user_agent"][http_user_agent] = {
                    "count": 1,
                }
                data["http_referer"][http_referer] = {
                    "last_url": request_url,
                    "count": 1,
                }

            try:
                obj.time = dt_last_tz
                obj.value = json.dumps(data)
                obj.save()
            except:
                return False
            return True
        return False


class NginxErrorManager(models.Manager):
    def put(self, index, name, value):
        if index and name and value:
            dt_last_tz = value['time']
            obj_id = index + int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = NginxError.objects.get_or_create(pk=obj_id)
            obj.name = name
            client = value.get('client')
            client_location = None
            if client:
                client_location = geo.city(client)
            error = value.get('error')
            error_desc = value.get('error_desc')
            pid = value.get('pid')
            request_method = value.get('request_method')
            raw_request_url = value.get('request_url')
            request_url = None
            if raw_request_url:
                request_url = raw_request_url.split('?')[0]

            data = {}
            if obj.value and obj.time and dt_last_tz < obj.time + timedelta(minutes=60):
                data = json.loads(obj.value)
                t = {
                    "pid": pid,
                    "error": error,
                    "error_desc": error_desc,
                    "client": client,
                    "request_method": request_method,
                    "request_url": request_url,
                    "date": time.mktime(dt_last_tz.timetuple())
                }
                if client_location:
                    t["location"] = client_location

                if "errors" in data:
                    data["errors"].append(t)
                else:
                    data["errors"] = [t]
            else:
                t = {
                    "error": error,
                    "error_desc": error_desc,
                    "client": client,
                    "date": time.mktime(dt_last_tz.timetuple()),
                }

                if request_method:
                    t["request_method"] = request_method
                if request_url:
                    t["request_url"] = request_url
                if client_location:
                    t["location"] = client_location

                data["errors"] = [t]
            try:
                obj.time = dt_last_tz
                obj.value = json.dumps(data)
                obj.save()
            except:
                return False
            return True
        return False


@python_2_unicode_compatible
class NginxAccess(models.Model):
    """
    each 10 minutes
    total have to be = 7 day of the week * 24 hour * 6 records in one hour = 1008 records
    """
    name = models.CharField(u'name', max_length=100, null=True)
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = NginxAccessManager()

    class Meta:
        verbose_name = u'Nginx access logs'
        verbose_name_plural = u'Nginx access logs'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.name)

    def get_short_data(self):
        if self.value:
            data = json.loads(self.value)
            return {
                "request_url": len(data.get('request_url', {}).keys()),
                "remote_addr": len(data.get('remote_addr', {}).keys()),
                "body_bytes_sent": data.get('body_bytes_sent', 0)
            }
    get_short_data.short_description = u'Content'


@python_2_unicode_compatible
class NginxError(models.Model):
    """
    each 10 minutes
    total have to be = 7 day of the week * 24 hour * 6 records in one hour = 1008 records
    """
    name = models.CharField(u'name', max_length=100, null=True)
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = NginxErrorManager()

    class Meta:
        verbose_name = u'Nginx error logs'
        verbose_name_plural = u'Nginx error logs'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.name)

    def get_short_data(self):
        if self.value:
            data = json.loads(self.value)
            return {
                "errors": len(data.get('errors', {})),
            }
    get_short_data.short_description = u'Content'


