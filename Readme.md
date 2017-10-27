

для postres
```
sudo -u postgres createuser -d mydialogs-user
sudo -u postgres createdb -O mydialogs-user mydialogs
```

### fixtures
```
from django.contrib.contenttypes.models import ContentType
ContentType.objects.all().delete()
quit()
````


# Настройки pg_hba.conf
```
local   all             postgres                                peer
local   all             ubuntu                                  peer

local   all             all                                     trust
host    all             all             127.0.0.1/32            trust
host    all             all             ::1/128                 trust
```


# Настройки крона

sudo vim /etc/cron.d/webrtc

```
*/5 * * * * /home/ubuntu/webrtc/djangoapps/run_cron.sh
```

# Сборка dash

```
ng build --prod -d /static/dash/
```