# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.contrib.sitemaps import Sitemap
from django.urls import reverse

from blog.models import Blog


class BlogSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return Blog.objects.filter(is_published=True)

    def lastmod(self, obj):
        return obj.updated_at


class StaticViewSitemap(Sitemap):
    priority = 1
    changefreq = 'monthly'

    def items(self):
        return ['app', 'idia', 'interface']

    def location(self, item):
        return reverse(item)
