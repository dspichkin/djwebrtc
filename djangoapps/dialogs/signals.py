from __future__ import unicode_literals

from django import dispatch

activedialog_changed = dispatch.Signal(providing_args=[
    "room", "update", "add", "removed"
])

