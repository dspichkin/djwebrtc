#!/bin/bash

ROOT=`pwd`
name=django
prefix=webrtc

socket=/tmp/$prefix-$name.sock 
pidfile=$ROOT/logs/run/$name.pid 
errlog=$ROOT/logs/$name.error.log
python=$WORKON_HOME/$prefix/bin/python

cd $ROOT
case "$1" in
    "start")
        uwsgi --chdir=$ROOT --module=root.wsgi \
            --env DJANGO_SETTINGS_MODULE=root.settings_prod \
            --master --pidfile=$pidfile \
            --socket=$socket --processes=2 --harakiri=120 --post-buffering=1 \
            --max-requests=4000 --vacuum --home=$WORKON_HOME/$prefix \
            --daemonize=$errlog
        chmod o+w $socket
        daphne -e ssl:80:privateKey=/home/ubuntu/webrtc/ssl/private.pem:certKey=/home/ubuntu/webrtc/ssl/cert.pem -b 0.0.0.0 root.asgi:channel_layer -u /tmp/daphne.sock --access-log=/home/ubuntu/webrtc/djangoapps/logs/daphne.log &
        python manage.py runworker &
        ;;
    "stop")
        kill -9 `cat $pidfile`
	    ps aux | grep -i daphne | awk {'print $2'} | xargs kill -9  
        ps aux | grep -i runworker | awk {'print $2'} | xargs kill -9        
	;;
    "restart")
        ./server.sh stop
        ./server.sh start
        ;;
    *) 
        echo "Usage: ./server.sh {start|stop|restart}"
        ;;
esac
