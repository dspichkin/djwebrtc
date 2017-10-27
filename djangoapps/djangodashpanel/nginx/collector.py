# -*- coding: utf-8 -*-
import os
import pytz
import re
from datetime import datetime

from pprint import pprint

from django.utils import timezone
from django.conf import settings
from django.utils.timezone import get_fixed_timezone

from djangodashpanel.models.nginx import (
    NginxData, NginxAccess, NginxError)

from djangodashpanel.models.naxsi import (
    NaxsiData, NaxsiMessage)


def parse_datetime(raw_date):
    # 18/Feb/2016:04:03:12 -0500
    datetime_re = re.compile(
        r'(?P<day>\d{1,2})\/(?P<month>\w{3})\/(?P<year>\d{4})\:'
        r'(?P<hour>\d{1,2})\:(?P<minute>\d{1,2})\:(?P<second>\d{1,2}) '
        r'(?P<tzinfo>[+-]\d{4})$'
    )

    match = datetime_re.match(raw_date)
    if match:
        kw = match.groupdict()

        month = kw.pop('month')
        if month == 'Jan':
            kw['month'] = 1
        if month == 'Feb':
            kw['month'] = 2
        if month == 'Mar':
            kw['month'] = 3
        if month == 'Apr':
            kw['month'] = 4
        if month == 'May':
            kw['month'] = 5
        if month == 'Jun':
            kw['month'] = 6
        if month == 'Jul':
            kw['month'] = 7
        if month == 'Aug':
            kw['month'] = 8
        if month == 'Sep':
            kw['month'] = 9
        if month == 'Oct':
            kw['month'] = 10
        if month == 'Nov':
            kw['month'] = 11
        if month == 'Dec':
            kw['month'] = 12

        tzinfo = kw.pop('tzinfo')
        offset_mins = int(tzinfo[-2:]) if len(tzinfo) > 3 else 0
        offset = 60 * int(tzinfo[1:3]) + offset_mins
        if tzinfo[0] == '-':
            offset = -offset
        tzinfo = get_fixed_timezone(offset)
        kw = {k: int(v) for k, v in kw.items() if v is not None}
        kw['tzinfo'] = tzinfo
        return datetime(**kw)


def parse_error_datetime(raw_date):
    # 2015/11/18 02:33:44
    datetime_re = re.compile(
        r'(?P<year>\d{4})\/(?P<month>\w{1,2})\/(?P<day>\d{1,2}) '
        r'(?P<hour>\d{1,2})\:(?P<minute>\d{1,2})\:(?P<second>\d{1,2})$'
    )

    match = datetime_re.match(raw_date)
    if match:
        kw = match.groupdict()
        kw = {k: int(v) for k, v in kw.items() if v is not None}
        return datetime(**kw)


def nginx_collector():
    if hasattr(settings, 'DJANGODASHPANEL_NGINX_LOGS'):
        count = 1
        for d in settings.DJANGODASHPANEL_NGINX_LOGS:
            slug = d.get('slug')
            faccess = d.get('access')
            if slug and faccess:
                nginx_access(count, slug, faccess)

            ferror = d.get('error')
            if slug and ferror:
                nginx_error(count, slug, ferror)

            count += 1


def nginx_error(index, name, filename):
    if not os.path.exists(filename):
        return

    has_naxsi = False

    if hasattr(settings, 'DJANGODASHPANEL_NGINX_NAXSI'):
        if os.path.exists(settings.DJANGODASHPANEL_NGINX_NAXSI):
            has_naxsi = True
            # naxsi_rules = read_naxsi_rules(settings.DJANGODASHPANEL_NGINX_NAXSI)

    reline = re.compile(
        r'(?P<time>.*?)\ \[(?P<error>.*?)\]\ (?P<pid>.*?)\:\ (?P<error_desc>.*?)\, '
    )

    last_record_error = NginxData.get_solo()
    last_record_error_tz = None
    if last_record_error and last_record_error.list_time_error_record:
        last_record_error_tz = timezone.localtime(last_record_error.list_time_error_record)

    last_record_naxsi = NaxsiData.get_solo()
    last_record_naxsi_tz = None
    if has_naxsi and last_record_naxsi and last_record_naxsi.list_time_record:
        last_record_naxsi_tz = timezone.localtime(last_record_naxsi.list_time_record)

    with open(filename, 'r') as infile:
        data = infile.readlines()
        data.reverse()

        for line in data[::-1]:
            result = reline.match(line)

            if result:
                value = result.groupdict()

                client = re.search(r'client\:\ (?P<remote_host>.*?)\,', line)
                if client:
                    value["client"] = client.group(1)

                server = re.search(r'server\:\ (?P<server>.*?)\,', line)
                if server:
                    value["server"] = server.group(1)

                req = re.search(r'request\:\ \"(?P<request_method>.*?)\ (?P<request_url>.*?)\ (?P<request_version>.*?)"', line)
                if req:
                    t = req.groupdict()
                    value["request_url"] = t["request_url"]
                    value["request_method"] = t["request_method"]
                    value["request_version"] = t["request_version"]

                host = re.search(r'host\:\ (?P<host>.*?)\,', line)
                if host:
                    value["host"] = host.group(1)

                referrer = re.search(r'referrer\:\ \"(?P<referrer>.*?)\"', line)
                if host and referrer:
                    value["referrer"] = referrer.group(1)

                dt = parse_error_datetime(value.get('time'))
                value['time'] = pytz.timezone(settings.TIME_ZONE).localize(dt, is_dst=None)

                dt_last_tz = value['time']

                error_desc = value.get('error_desc')

                # Naxsi record
                if has_naxsi and error_desc and 'NAXSI_FMT' in error_desc:
                    if last_record_naxsi_tz and last_record_naxsi_tz >= dt_last_tz:
                        continue

                    last_record_naxsi.list_time_record = dt_last_tz
                    last_record_naxsi.save()
                    NaxsiMessage.objects.put(index, name, value)

                # Nginx error
                if not has_naxsi or not error_desc or 'NAXSI_FMT' not in error_desc:
                    if last_record_error_tz and last_record_error_tz >= dt_last_tz:
                        continue

                    last_record_error.list_time_error_record = dt_last_tz
                    last_record_error.save()
                    NginxError.objects.put(index, name, value)


def nginx_access(index, name, filename):
    if not os.path.exists(filename):
        return

    print "nginx_access"
    conf = '$remote_addr - $remote_user [$time_local] "$request_method $request_url $request_version" $status $body_bytes_sent "$http_referer" "$http_user_agent"'

    regex = ''.join(
        '(?P<' + g + '>.*?)' if g else re.escape(c)
        for g, c in re.findall(r'\$(\w+)|(.)', conf))

    last_record = NginxAccess.objects.all().order_by('time').last()
    last_record_tz = None
    if last_record:
        last_record_tz = timezone.localtime(last_record.time)

    with open(filename, 'r') as infile:
        data = infile.readlines()
        for line in data[::-1]:
            result = re.match(regex, line)
            if result:
                value = result.groupdict()
                value['time_local'] = parse_datetime(value.get('time_local'))
                dt_last_tz = value['time_local']

                if last_record_tz and last_record_tz >= dt_last_tz:
                    return
                NginxAccess.objects.put(index, name, value)
