import datetime

from .base import *

SECRET_KEY = 'u_2qspyv=j!33)uje#92=xr2=ju&wm#_u7_-#ijc+c(i3y%jl('
JWT_SECRET_KEY = 'wg=pp*f_kl6(pquo#1t^w-i+x-@sc9^^tvmj)1ks=xhk(yqikd'
DEBUG = True
ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = True

# find a way to pull from .env

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'gc_backend',
        'USER': 'chaosmonkey',
        'PASSWORD': 'chaosPassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

JWT_AUTH.update({'JWT_SECRET_KEY': JWT_SECRET_KEY})

MACRO_API_URL = 'http://127.0.0.1:8002/'
SERVICE_API_URL = 'http://127.0.0.1:8001/'

DASHBOARD_API_ORIGIN = 'http://127.0.0.1:8000/'
