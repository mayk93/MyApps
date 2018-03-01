#!/usr/bin/env bash

kill -9 $(cat /tmp/my_apps_server.pid)
rm /tmp/my_apps_server.pid