# -*- coding: utf-8 -*-
"""
Django settings for djwebrtc project.

Generated by 'django-admin startproject' using Django 1.11.5.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os
import sys

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'c!8!t5-ta%@@#0eh9sx@@7%tgajhrzp)st5rj)pwxp0v-g0amk'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

ADMIN_LIST_EMAILS = ['user783@gmail.com']
ADMINS = (
    ('user783', 'user783@gmail.com'),
)
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sites',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
    'channels_presence',
    'djcelery',
    'sslchannels',
    'rest_framework',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.vk',

    'djangodashpanel',
    'accounts',
    'djwebrtc',
    'peerjs',
    'dialogs',
]

SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'djangodashpanel.middleware.urllogstat.URLLogStatMiddleware',
]

ROOT_URLCONF = 'root.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates'),
                 os.path.join(BASE_DIR, '..', 'app')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'root.context_processors.debug',
            ],
        },
    },
]

WSGI_APPLICATION = 'root.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mydialogs',
        'USER': 'mydialogs-user',
        'PASSWORD': 'mydialogs-user',
    }
}

AUTH_USER_MODEL = 'accounts.Account'

AUTHENTICATION_BACKENDS = ['accounts.backends.EmailBackend', 'allauth.account.auth_backends.AuthenticationBackend', ]

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators
"""
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
"""

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'ru-ru'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True

BASEURL = 'www.mydialogs.ru'


EMAIL_SUBJECT_PREFIX = '[mydialogs/Local] '
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True

EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_HOST_USER = 'noreply@mydialogs.ru'
EMAIL_HOST_PASSWORD = 'fgtkmcby!@'
EMAIL_PORT = 465
SERVER_EMAIL = 'noreply@mydialogs.ru'

DEFAULT_FROM_EMAIL = 'noreply@mydialogs.ru'


STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, '..', 'app'),
)
STATIC_ROOT = os.path.join(BASE_DIR, '..', 'www', 'assets')

MEDIA_ROOT = os.path.join(BASE_DIR, '..', 'media')
MEDIA_URL = '/media/'


CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'asgi_redis.RedisChannelLayer',  # 'asgi_redis.RedisChannelLayer',
        'ROUTING': 'djwebrtc.routing.channel_routing',
        "CONFIG": {
            "hosts": [("127.0.0.1", 6379), ],
        },
    },
}

# адрес redis сервера
BROKER_URL = 'redis://localhost:6379/0'
# храним результаты выполнения задач так же в redis
CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'
# в течение какого срока храним результаты, после чего они удаляются
CELERY_TASK_RESULT_EXPIRES = 7*86400  # 7 days
# это нужно для мониторинга наших воркеров
CELERY_SEND_EVENTS = True
# место хранения периодических задач (данные для планировщика)
CELERYBEAT_SCHEDULER = "djcelery.schedulers.DatabaseScheduler"


CHANNELS_PRESENCE_MAX_AGE = 20

from datetime import timedelta

CELERYBEAT_SCHEDULE = {
    'prune-presence': {
        'task': 'channels_presence.tasks.prune_presence',
        'schedule': timedelta(seconds=60)
    },
    'prune-rooms': {
        'task': 'channels_presence.tasks.prune_rooms',
        'schedule': timedelta(seconds=600)
    }
}


ACCOUNT_USER_MODEL_USERNAME_FIELD = 'username'
ACCOUNT_EMAIL_VERIFICATION = "requred"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USER_MODEL_EMAIL_FIELD = "email"
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_SIGNUP_FORM_CLASS = 'accounts.forms.DiscounterSignupFrom'
SOCIALACCOUNT_AUTO_SIGNUP = True

SOCIALACCOUNT_ADAPTER = 'accounts.myadapter.MyAdapter'

SOCIALACCOUNT_PROVIDERS = {
    'facebook': {
        'METHOD': 'oauth2',
        'SCOPE': ['email', 'public_profile'],
        'FIELDS': [
            'id',
            'email',
            'name',
            'first_name',
            'last_name',
            'verified',
            'locale',
            'timezone',
            'link',
            'gender',
            'updated_time'
        ],
        'EXCHANGE_TOKEN': True,
        'LOCALE_FUNC': lambda request: 'ru_RU',
        'VERIFIED_EMAIL': False,
        'VERSION': 'v2.4',
    },
    'vk': {
        'METHOD': 'oauth2',
        'SCOPE': ['email'],
        'FIELDS': [
            'id',
            'email',
            'name',
            'first_name',
            'last_name',
            'verified',
            'locale',
            'timezone',
            'link',
            'gender',
            'updated_time',
        ],
    }
}

LOGS_ROOT = os.path.join(BASE_DIR, 'logs')
if not os.path.exists(LOGS_ROOT):
    os.mkdir(LOGS_ROOT)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            'format': '%(asctime)s %(levelname)s %(message)s',
            'datefmt': '%m-%d %H:%M:%S'},
        },

    'filters': {'require_debug_false': {
        '()': 'django.utils.log.RequireDebugFalse'}
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            # 'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler',
            'include_html': True,
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'default',
            'filename': os.path.join(LOGS_ROOT, 'debug.log')
        },
        'console': {
            'class': 'logging.StreamHandler',
            'stream': sys.stdout,
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins', 'file'],
            'level': 'ERROR',
            'propagate': True
        },
        'mydialogs': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True
        },
        'celery.task': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'celery': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
        },
    }
}


DJANGODASHPANEL_BACKUP_DIR = os.path.join(BASE_DIR, '..', 'backups')
DJANGODASHPANEL_URLSTAT = True
DJANGODASHPANEL_URLSTAT_EXCLUDES = [
    "/admin/.*",
    "/dash/.*",
    "/static/.*",
    "/media/.*",
]

DJANGODASHPANEL_NGINX_ACCESS_EXCLUDES = [
    "/api/dash/.*",
    "/dash/.*",
    "/media/.*",
    "/static/.*"
]


TEMP_DIR = os.path.join(BASE_DIR, '..', 'temp')
if not os.path.exists(TEMP_DIR):
    os.mkdir(TEMP_DIR)

import djcelery
djcelery.setup_loader()

try:
    from settings_local import *
except ImportError:
    pass