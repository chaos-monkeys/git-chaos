#!/bin/bash
set -eu

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $SCRIPT_DIR

if [ "$DEPLOY_ENV" == "production" ]; then
    export DJANGO_SETTINGS_MODULE=conf.settings.production
elif [ "$DEPLOY_ENV" == "docker" ]; then
    export DJANGO_SETTINGS_MODULE=conf.settings.docker
else
    export DJANGO_SETTINGS_MODULE=conf.settings.local
fi

python manage.py migrate --noinput

exec "$@"
