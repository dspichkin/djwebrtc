# -*- coding: utf-8 -*-
from root.settings import *

DEBUG = False
TEMPLATE_DEBUG = False
BASE_URL = 'https://www.mydialogs.ru/'

ALLOWED_HOSTS = ['*']

ADMINS = (
    ('Denis Spichkin', 'user783@gmail.com'),
)

EMAIL_SUBJECT_PREFIX = '[mydialogs.ru] '

SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = False
