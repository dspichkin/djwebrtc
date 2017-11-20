# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from blog.models import Blog
from blog.serializers import BlogSerializer


def blogs(request, blog_slug=None):
    paginate_by = 10
    blogs = Blog.objects.filter(is_published=True).order_by('-created_at')

    if not blog_slug:
        page = request.GET.get('page', 1)
        paginator = Paginator(blogs, paginate_by)

        try:
            rdata = paginator.page(page)
        except PageNotAnInteger:
            rdata = paginator.page(1)
        except EmptyPage:
            rdata = paginator.page(1)

        count = paginator.count
        count_page = count / paginate_by
        previouspage = None if not rdata.has_previous() else rdata.previous_page_number()
        nextpage = None if not rdata.has_next() else rdata.next_page_number()

        return render(request, 'blogs.html', {
            "blogs": rdata,
            "count": count,
            "count_page": count_page,
            "previouspage": previouspage,
            "nextpage": nextpage
            })
    else:
        blog = blogs.filter(slug=blog_slug).first()
        if not blog:
            raise Http404
        next_blog = None
        prev_blog = None
        if len(blogs) > 1:
            found = False
            for index, item in enumerate(blogs):
                if found is True:
                    next_blog = item
                    break
                if item.pk == blog.pk:
                    found = True
                if index > 0:
                    prev_blog = blogs[index - 1]

        return render(request, 'blog.html', {
            "blog": blog,
            "next_blog": next_blog,
            "prev_blog": prev_blog
            })


@api_view(['GET'])
def old_get_blog(request, blog_id=None):
    blog = get_object_or_404(Blog, pk=blog_id)
    print "blog", blog
    return HttpResponseRedirect(reverse('get_blog', args=[blog.slug]))


@api_view(['GET'])
def get_api_blog(request, blog_id=None):
    paginate_by = 2
    blogs = Blog.objects.filter(is_published=True).order_by('-created_at')

    if not blog_id:
        page = request.GET.get('page', 1)
        paginator = Paginator(blogs, paginate_by)

        try:
            rdata = paginator.page(page)
        except PageNotAnInteger:
            rdata = paginator.page(1)
        except EmptyPage:
            rdata = paginator.page(1)

        count = paginator.count
        count_page = count / paginate_by
        previouspage = None if not rdata.has_previous() else rdata.previous_page_number()
        nextpage = None if not rdata.has_next() else rdata.next_page_number()

        return Response({
            "blogs": BlogSerializer(rdata, many=True).data,
            "count": count,
            "count_page": count_page,
            "previouspage": previouspage,
            "nextpage": nextpage
            })
    else:
        blog = blogs.filter(pk=blog_id).first()
        if not blog:
            raise Http404
        next_blog = None
        prev_blog = None
        if len(blogs) > 1:
            found = False
            for index, item in enumerate(blogs):
                if found is True:
                    next_blog = item
                    break
                if item.pk == blog.pk:
                    found = True
                if index > 0:
                    prev_blog = blogs[index - 1]
        next_blog_pk = None
        prev_blog_pk = None
        if next_blog:
            next_blog_pk = next_blog.pk
        if prev_blog:
            prev_blog_pk = prev_blog.pk
        return Response({
            "blog": BlogSerializer(blog).data,
            "next_blog": next_blog_pk,
            "prev_blog": prev_blog_pk
            })



