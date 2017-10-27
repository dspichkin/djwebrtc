# -*- coding: utf-8 -*-

import psutil

from datetime import timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone

from djangodashpanel.backups.rotator import FileRotator
from djangodashpanel.models.perf import (
    PerfData, PerfCpu, PerfMemory, PerfDisk, PerfNetwork, PerfProcess,
    PerfSystem)
from djangodashpanel.models.backups import BackupData
from djangodashpanel.models.nginx import NginxData
from djangodashpanel.nginx.collector import nginx_collector


class Command(BaseCommand):
    help = 'Runs all jobs that are due.'

    def handle(self, *args, **options):

        perf = PerfData.get_solo()
        backup = BackupData.get_solo()
        nginx = NginxData.get_solo()
        now = timezone.localtime(timezone.now())

        # nginx.run_last_time = timezone.now()
        # nginx.save()
        # self.get_nginx()
        # return

        self.get_cpu()
        self.get_network()

        if not perf.run_last_time_10m or perf.run_last_time_10m + timedelta(minutes=10) < now:
            perf.run_last_time_10m = timezone.now()
            perf.save()
            self.get_memory()
            self.get_nginx()

        if not nginx.run_last_time or perf.run_last_time + timedelta(minutes=10) < now:
            nginx.run_last_time = timezone.now()
            nginx.save()
            self.get_nginx()

        if not perf.run_last_time_30m or perf.run_last_time_30m + timedelta(minutes=30) < now:
            perf.run_last_time_30m = timezone.now()
            perf.save()
            self.get_disk()
            self.get_system()

        if not perf.run_last_time_1h or perf.run_last_time_1h + timedelta(minutes=60) < now:
            perf.run_last_time_1h = timezone.now()
            perf.save()
            self.get_process()

        if backup.backups_enable and backup.run_time:

            run_time = timezone.localtime(backup.run_time)
            run_time = run_time.replace(year=now.year, month=now.month, day=now.day)

            last_run_backup_tz = None
            if backup.last_run_backup:
                last_run_backup_tz = timezone.localtime(backup.last_run_backup)

            if now >= run_time and now <= run_time + timedelta(minutes=30):
                if not backup.last_run_backup:
                    self.get_backup()
                elif last_run_backup_tz + timedelta(minutes=35) < now:
                    self.get_backup()

        perf.run_last_time_5m = timezone.now()
        perf.save()

    def get_cpu(self):
        print "cpu"
        num = []
        for x in range(3):
            value = psutil.cpu_percent(interval=1)
            num.append(value)
        m = 0
        for x in num:
            m += x
        data = round(float(m) / len(num), 2)
        PerfCpu.objects.put(timezone.now(), data)

    def get_memory(self):
        print "memory"
        vm = psutil.virtual_memory()
        sm = psutil.swap_memory()
        PerfMemory.objects.put(timezone.now(), vm, sm)

    def get_disk(self):
        print "disk"
        dsk = psutil.disk_usage('/')
        PerfDisk.objects.put(timezone.now(), dsk)

    def get_network(self):
        print "network"
        net = psutil.net_io_counters()
        PerfNetwork.objects.put(timezone.now(), net)

    def get_process(self):
        print "process"
        processes = []
        for p in psutil.pids():
            try:
                pr = psutil.Process(p)
                t = {
                    "pid": p,
                    "name": pr.name(),
                }
                try:
                    t["cpu"] = pr.cpu_percent(interval=1.0)
                except:
                    t["cpu"] = 0.0
                try:
                    t["status"] = pr.status()
                except:
                    t["status"] = None
                try:
                    t["create_time"] = p.create_time()
                except:
                    t["create_time"] = None
                processes.append(t)
            except:
                pass
        PerfProcess.objects.put(timezone.now(), processes)

    def get_system(self):
        print "system"
        systems = []
        for user in psutil.users():
            u = user
            t = {
                "name": u.name,
                "terminal": u.terminal,
                "host": u.host,
                "started": u.started
            }
            systems.append(t)

        PerfSystem.objects.put(timezone.now(), systems)

    def get_backup(self):
        print "run backup"
        FileRotator()

    def get_nginx(self):
        print "run nginx"
        nginx_collector()

