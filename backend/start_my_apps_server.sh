#!/usr/bin/env bash

touch /tmp/my_apps_server.pid

export PROD="true"

uwsgi --chmod-socket=666 --uwsgi-socket /home/deploy/server/my_app_server.sock --wsgi-file /home/deploy/MyApps/backend/backend/backend/wsgi.py

echo $! > /tmp/my_apps_server.pid

