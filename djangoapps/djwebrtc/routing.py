from channels.routing import route
from djwebrtc.consumers import (
    ws_connect, ws_disconnect, ws_message,
)


channel_routing = [
    route('websocket.connect', ws_connect, path=r"^/peerjs/?$"),
    route('websocket.receive', ws_message, path=r"^/peerjs/?$"),
    route('websocket.disconnect', ws_disconnect, path=r"^/peerjs/?$"),
]
