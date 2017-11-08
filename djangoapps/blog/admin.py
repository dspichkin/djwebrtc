# -*- coding: utf-8 -*-
from django import forms
from django.contrib import admin

from ckeditor.widgets import CKEditorWidget

from blog.models import (Blog, )


class BlogAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Blog
        fields = '__all__'


class BlogAdmin(admin.ModelAdmin):
    form = BlogAdminForm
    list_display = (
        'created_at', 'created_by', 'title', 'is_published')


admin.site.register(Blog, BlogAdmin)
