# -*- coding: utf-8 -*-

from django.conf.urls import url

from blog.views import (
    old_get_blog, get_blog)


urlpatterns = [
    url(r'^api/blog/?$', get_blog, name="blogs"),
    url(r'^api/blog/(?P<blog_id>\d+)/?$', old_get_blog, name="old_get_blog"),
    url(r'^api/blog/(?P<blog_slug>\w+)/?$', get_blog, name="blog"),
]
