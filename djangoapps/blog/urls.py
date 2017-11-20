# -*- coding: utf-8 -*-

from django.conf.urls import url

from blog.views import get_api_blog


urlpatterns = [
    url(r'^api/blog/?$', get_api_blog, name="get_api_blogs"),
    url(r'^api/blog/(?P<blog_id>\d+)/?$', get_api_blog, name="get_api_blog"),
]
