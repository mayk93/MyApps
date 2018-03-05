#!/usr/bin/env bash

touch /tmp/my_apps_server.pid

export PROD="true"

uwsgi --chmod-socket=666 --uwsgi-socket /home/deploy/my_apps_server/my_apps_server.sock --wsgi-file /home/deploy/MyApps/backend/backend/backend/wsgi.py

echo $! > /tmp/my_apps_server.pid

