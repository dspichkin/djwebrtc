# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals


from django.conf.urls import url, include
from django.http import HttpResponseRedirect
from django.contrib import admin
from django.views.generic.base import TemplateView
from django.shortcuts import render
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap

from blog.models import Blog
from blog.views import blogs

from root.sitemap import StaticViewSitemap, BlogSitemap


def closepopup(request):
    return render(request, 'account/close_popup.html', {})


def sredirect(request, url):
    # return HttpResponseRedirect("/")
    return HttpResponseRedirect("/#/%s" % url)


def app(request):
    if request.user.is_authenticated():
        if not request.user.is_superuser and not request.user.is_confirm:
            return HttpResponseRedirect("/accounts/confirm/")
        return render(request, 'index.html')

    blogs = Blog.objects.filter(is_published=True)[:3]
    return render(request, 'landing.html', {
        "blogs": blogs
    })


def robot(request):
    return render(request, 'robots.txt', content_type='text/plain')


staticsitemaps = {
    'static': StaticViewSitemap,
    'blogs': BlogSitemap
}

urlpatterns = []

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)

urlpatterns += [
    url(r'^admin/', admin.site.urls),
    url(r'^dash/', include('djangodashpanel.urls')),

    url(r'^accounts/', include('accounts.urls')),
    url(r'^pj/', include('peerjs.urls')),
    url(r'^dialogs/', include('dialogs.urls')),
    url(r'^blog/', include('blog.urls')),

    # JS-приложение
    url(r'^$', app, name='app'),
    # лендинг
    url(r'^idia/?$', TemplateView.as_view(template_name="idia.html"), name="idia"),
    url(r'^interface/?$', TemplateView.as_view(template_name="interface.html"), name="interface"),
    url(r'^blog/?$', blogs, name="blogs"),
    url(r'^blog/(?P<blog_id>.*)/?$', blogs, name="blog"),

    url(r'^googlef93e055d62dd30d6.html$', TemplateView.as_view(template_name="googlef93e055d62dd30d6.html")),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': staticsitemaps}),

    # auth app
    url(r'^close/', closepopup, name="login_popup_close"),

    url(r'^robots\.txt$', robot, name="robots.txt"),
    url(r'^(?P<url>.*)$', sredirect),
]
