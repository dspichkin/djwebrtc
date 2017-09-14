import os
import sys
import datetime

from django.core.management.base import CommandError
from django.utils import six
from django.utils.encoding import get_system_encoding
from django.conf import settings

from django.core.management.commands.runserver import Command as RunserverCommand
from channels.management.commands.runserver import Command as ChannelsCommand, WorkerThread
from channels import DEFAULT_CHANNEL_LAYER, channel_layers

from daphne.server import Server, build_endpoint_description_strings


def default_ssl_files_dir():
    import sslchannels as module
    mod_path = os.path.dirname(module.__file__)
    ssl_dir = os.path.join(mod_path, "certificates")
    return ssl_dir


class Command(ChannelsCommand):
    help = "Run a Django Channels development server over HTTPS"

    def add_arguments(self, parser):
        super(Command, self).add_arguments(parser)
        parser.add_argument("--certificate",
                            default=os.path.join(default_ssl_files_dir(),
                                "development.crt"),
                            help="Path to the certificate")
        parser.add_argument("--key",
                            default=os.path.join(default_ssl_files_dir(),
                                "development.key"),
                            help="Path to the key file")

    def check_certificates(self, key_file, cert_file):

        if not os.path.exists(key_file):
            raise CommandError("Can't find key at %s" % key_file)
        if not os.path.exists(cert_file):
            raise CommandError("Can't find certificate at %s" %
                               cert_file)

    def inner_run(self, *args, **options):

        key_file = options.get("key")
        cert_file = options.get("certificate")
        self.check_certificates(key_file, cert_file)

        # Maybe they want the wsgi one?
        if not options.get("use_asgi", True) or DEFAULT_CHANNEL_LAYER not in channel_layers:
            return RunserverCommand.inner_run(self, *args, **options)

        # Check a handler is registered for http reqs; if not, add default one
        self.channel_layer = channel_layers[DEFAULT_CHANNEL_LAYER]
        self.channel_layer.router.check_default(
            http_consumer=self.get_consumer(*args, **options),
        )

        # Run checks
        self.stdout.write("Performing system checks...\n\n")
        self.check(display_num_errors=True)
        self.check_migrations()

        # Print helpful text
        quit_command = 'CTRL-BREAK' if sys.platform == 'win32' else 'CONTROL-C'
        now = datetime.datetime.now().strftime('%B %d, %Y - %X')
        if six.PY2:
            now = now.decode(get_system_encoding())
        self.stdout.write(now)
        self.stdout.write((
            "Django version %(version)s, using settings %(settings)r\n"
            "Starting Channels development server at http://%(addr)s:%(port)s/\n"
            "Channel layer %(layer)s\n"
            "Quit the server with %(quit_command)s.\n"
        ) % {
            "version": self.get_version(),
            "settings": settings.SETTINGS_MODULE,
            "addr": '[%s]' % self.addr if self._raw_ipv6 else self.addr,
            "port": self.port,
            "quit_command": quit_command,
            "layer": self.channel_layer,
        })

        # Launch workers as subthreads
        if options.get("run_worker", True):
            worker_count = 4 if options.get("use_threading", True) else 1
            for _ in range(worker_count):
                worker = WorkerThread(self.channel_layer, self.logger)
                worker.daemon = True
                worker.start()

        # Launch server in 'main' thread. Signals are disabled as it's still
        # actually a subthread under the autoreloader.
        self.logger.debug("Daphne running, listening on %s:%s", self.addr, self.port)

        # build the endpoint description string from host/port options
        endpoints = build_endpoint_description_strings(host=self.addr, port=self.port)
        endpoints[0] = 'ssl:{0}:privateKey={1}:certKey={2}'.format(self.port, key_file, cert_file)
        try:
            Server(
                channel_layer=self.channel_layer,
                endpoints=endpoints,
                signal_handlers=not options['use_reloader'],
                action_logger=self.log_action,
                http_timeout=self.http_timeout,
                ws_protocols=getattr(settings, 'CHANNELS_WS_PROTOCOLS', None),
                root_path=getattr(settings, 'FORCE_SCRIPT_NAME', '') or '',
            ).run()
            self.logger.debug("Daphne exited")
        except KeyboardInterrupt:
            shutdown_message = options.get('shutdown_message', '')
            if shutdown_message:
                self.stdout.write(shutdown_message)
            return


