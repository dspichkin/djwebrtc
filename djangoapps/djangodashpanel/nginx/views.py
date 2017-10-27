import time
import json
import pytz
from pprint import pprint

from datetime import datetime, timedelta
from django.utils import timezone
from django.conf import settings

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from djangodashpanel.models.nginx import (
    NginxAccess, NginxError)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_logs(request):

    data = []
    if hasattr(settings, 'DJANGODASHPANEL_NGINX_LOGS'):
        for i in settings.DJANGODASHPANEL_NGINX_LOGS:
            data.append({
                "name": i.get("name"),
                "slug": i.get("slug")
            })

    return Response(data, status=status.HTTP_200_OK)

"""
{"request_url": {
    "/preview/scene/2/": {
        "GET": {
            "count": 1,
            "status": "200",
            "last_date": 1447804199.0}}
    },
    "http_user_agent": {
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36": {"count": 1}
        },
    "body_bytes_sent": "1937",
    "http_referer": {
        "http://buddy.levellab.ru/preview/": {
            "count": 1, "last_url": "/preview/scene/2/"}
        },
    "remote_addr": {"176.194.60.47": {"count": 1, "last_date": 1447804199.0, "last_url": "/preview/scene/2/"}}}
"""


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_data(request, slug):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    request_urls = {}
    errors = []
    numbers_errors = []
    number_request_urls = []
    number_ip_address = []
    body_bytes_sent = []
    dates = []
    errors_dates = []
    count_url_attempt = 0

    values = NginxAccess.objects.filter(name=slug, time__range=[date_start_tz, date_end_tz])
    error_values = NginxError.objects.filter(name=slug, time__range=[date_start_tz, date_end_tz])

    # ---- Access log
    for p in values:
        value = json.loads(p.value)
        count_url_attempt = 0
        for url, v in value.get("request_url", {}).items():
            for method, v1 in v.items():
                if isinstance(v1, dict):
                    count_url_attempt += v1.get("count", 0)
                    raw_date = v1.get("last_date")
                    date_tz = None

                    if raw_date:
                        date = datetime.fromtimestamp(int(raw_date))
                        date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

                    if url in request_urls:
                        if method in request_urls[url]:
                            request_urls[url][method]["count"] = request_urls[url][method]["count"] + v1.get("count", 0)
                            request_urls[url][method]["status"] = v1.get("status")
                        else:
                            request_urls[url][method] = {
                                "count": v1.get("count", 0),
                                "status": v1.get("status", 0),
                                "last_date": date_tz.strftime("%b %d %H:%M")
                            }
                    else:
                        request_urls[url] = {}
                        request_urls[url][method] = {
                            "count": v1.get("count", 0),
                            "status": v1.get("status", 0),
                            "last_date": date_tz.strftime("%b %d %H:%M")
                        }

        ip_addresses = {}
        for addr, v in value.get("remote_addr", {}).items():
            ip_addresses.update({addr: 1})

        number_ip_address.append(len(ip_addresses.keys()))

        number_request_urls.append(count_url_attempt)

        body_bytes_sent.append(value.get("body_bytes_sent"))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    list_request_urls = []
    for url, v in request_urls.items():
        for method, v1 in v.items():
            list_request_urls.append({
                "url": url,
                "count": v1.get("count"),
                "last_date": v1.get("last_date"),
                "status": v1.get("status"),
                "method": method
                })
    list_request_urls.sort(key=lambda x: x["count"], reverse=True)

    # ------ Error log
    for p in error_values:
        value = json.loads(p.value)

        count_errors = 0
        index = -1
        for v in value.get("errors", {}):
            index += 1

            error = v.get("error")
            error_desc = v.get("error_desc")
            client = v.get("client")
            location = v.get("location")
            request_url = v.get("request_url")
            request_method = v.get("request_method")
            pid = v.get("pid")
            last_date = None
            if v.get("date"):
                date = datetime.fromtimestamp(int(v.get("date")))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)
                last_date = date_tz.strftime("%Y %b %d %H:%M")

            # ----  ERRORS

            count_errors += 1
            t = {
                "pid": pid,
                "error": error,
                "error_desc": error_desc,
            }
            if client:
                t["client"] = client
            if location:
                t["location"] = location
            if request_url:
                t["request_url"] = request_url
            if request_method:
                t["request_method"] = request_method
            if date:
                t["date"] = last_date
            errors.append(t)
        numbers_errors.append(count_errors)
        errors_dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))
    errors.sort(key=lambda x: x["date"], reverse=True)

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }
    start_date = None
    start_obj = None

    if values:
        start_date = values[0].time

    start_obj = NginxAccess.objects.all().first()
    start_obj2 = NginxError.objects.all().first()
    if start_obj2 and start_obj:
        if start_obj2.time < start_obj.time:
            start_obj = start_obj2

    if error_values:
        if error_values[0].time < start_date:
            start_date = error_values[0].time

    if start_date:
        date_range["start"] = time.mktime(timezone.localtime(start_date).timetuple())

    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "requests": [{
            "data": number_request_urls,
            "label": 'Number of requests'
        }],
        "addresses": [{
            "data": number_ip_address,
            "label": "Number of ip addreses"
        }],
        "body_bytes_sent": [{
            "data": body_bytes_sent,
            "label": "Bytes sent"
        }],
        "numbers_errors": [{
            "data": numbers_errors,
            "label": "Number of errors"
        }],
        "dates": dates,
        "errors_dates": errors_dates,
        "request_urls": list_request_urls[:100],
        "errors": errors[:100],
        "date_range": date_range,
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_access_ip_address(request, slug):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    remote_addr = {}
    location = {}

    values = NginxAccess.objects.filter(name=slug, time__range=[date_start_tz, date_end_tz])
    for p in values:
        value = json.loads(p.value)
        ip_addresses = {}
        for addr, v in value.get("remote_addr", {}).items():
            ip_addresses.update({addr: 1})
            raw_date = v.get("last_date")
            date_tz = None

            if raw_date:
                date = datetime.fromtimestamp(int(raw_date))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

            if addr in remote_addr:
                remote_addr[addr]["count"] = remote_addr[addr]["count"] + v.get("count", 0)
                remote_addr[addr]["last_date"] = date_tz.strftime("%b %d %H:%M")
                remote_addr[addr]["last_url"] = v.get("last_url")
            else:
                loc = v.get("location")
                remote_addr[addr] = {
                    "count": v.get("count"),
                    "last_date": date_tz.strftime("%b %d %H:%M"),
                    "last_url": v.get("last_url"),
                    "location": loc
                }
                if loc:
                    country = loc.get("country_name")
                    city = loc.get("city")
                    if country in location:
                        location[country]["count"] += 1
                        if city:
                            if city in location[country]["cities"]:
                                location[country]["cities"][city]["count"] += 1
                            else:
                                location[country]["cities"][city] = {
                                    "count": 1
                                }
                    else:
                        location[country] = {
                            "count": 1,
                            "cities": {}
                        }
                        if city:
                            location[country]["cities"][city] = {
                                "count": 1
                            }

    list_remote_addr = []
    for ipaddr, v in remote_addr.items():
        list_remote_addr.append({
            "ipaddr": ipaddr,
            "last_date": v.get("last_date"),
            "last_url": v.get("last_url"),
            "count": v.get("count"),
            "location": v.get("location")
            })

    list_remote_addr.sort(key=lambda x: x["count"], reverse=True)

    country_value = []
    country_label = []
    cities_value = []
    cities_label = []
    for k, v in location.items():
        country_label.append(k)
        country_value.append(v.get("count"))
        for k1, v1 in v.get("cities").items():
            cities_label.append(k1)
            cities_value.append(v1.get("count"))

    return Response({
        "location": {
            "country_value": country_value[:50],
            "country_label": country_label[:50],
            "cities_value": cities_value[:50],
            "cities_label": cities_label[:50]
        },
        "remote_addr": list_remote_addr[:100]
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_access_httpref(request, slug):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    http_referer = {}

    values = NginxAccess.objects.filter(name=slug, time__range=[date_start_tz, date_end_tz])
    for p in values:
        value = json.loads(p.value)

        numbers_count = 0
        for ref, v in value.get("http_referer", {}).items():
            numbers_count += v.get("count", 0)

            if ref in http_referer:
                http_referer[ref]["count"] = http_referer[ref]["count"] + v.get("count", 0)
            else:
                http_referer[ref] = {
                    "count": v.get("count"),
                }

    list_http_referer = []
    for url, v in http_referer.items():
        list_http_referer.append({
            "url": url,
            "count": v.get("count")
            })
    list_http_referer.sort(key=lambda x: x["count"], reverse=True)

    return Response({
        "http_referrer": list_http_referer[:100],
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_access_agents(request, slug):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    list_http_user_agents = []
    http_user_agents = {}
    values = NginxAccess.objects.filter(name=slug, time__range=[date_start_tz, date_end_tz])
    for p in values:
        value = json.loads(p.value)

        for user_agent, v in value.get("http_user_agent", {}).items():
            if user_agent in http_user_agents:
                http_user_agents[user_agent]["count"] += float(v.get("count"))
            else:
                http_user_agents[user_agent] = {
                    "count": float(v.get("count"))
                }

    list_http_user_agents = []
    for agent, v in http_user_agents.items():
        list_http_user_agents.append({
            "agent": agent,
            "count": v.get("count")
            })
    list_http_user_agents.sort(key=lambda x: x["count"], reverse=True)
    return Response({
        "http_user_agents": list_http_user_agents[:100],
    }, status=status.HTTP_200_OK)

"""
@api_view(['POST'])
@permission_classes((IsAdminUser, ))
def restart(request):
    # invoke-rc.d nginx rotate >/dev/null 2>&1
    os.system("kill -USR1 `cat /var/run/nginx.pid`")
    return Response(status=status.HTTP_200_OK)
"""