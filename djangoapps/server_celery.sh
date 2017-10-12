#!/bin/bash

source $WORKON_HOME/webrtc/bin/activate
# cd /home/ubuntu/webrtc/djangoapps
export C_FORCE_ROOT="true"

case "$1" in
    "start")
        
        echo "Running 'celery' command:"
        celery -A djwebrtc worker -l info &
        #celery -A djwebrtc worker -B -l info
        
        ;;
    "stop")
        echo "Stop celery ..."
        #kill -9 `cat $pidfile`
        kill -9 `ps aux | grep 'celery -A' | grep -v grep | awk '{print $2}'`
        ;;
    "restart")
        ./server_celery.sh stop
        ./server_celery.sh start
        ;;
    *) 
        echo "Usage: ./server_celery.sh {start|stop|restart}"
        ;;
esac


