# -*- coding: utf-8 -*-

from django.conf.urls import url

from blog.views import (
    get_blog)


urlpatterns = [
    url(r'^api/blog/?$', get_blog, name="blogs"),
    url(r'^api/blog/(?P<blog_id>\d+)/?$', get_blog, name="blog"),
]
