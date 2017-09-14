from channels.routing import route
from djwebrtc.consumers import (
    ws_connect, ws_disconnect, ws_message,
    ws_connect_call, ws_message_call, ws_disconnect_call
)


channel_routing = [
    route('websocket.connect', ws_connect, path=r"^/peerjs/peerjs?$"),
    route('websocket.receive', ws_message, path=r"^/peerjs/peerjs?$"),
    route('websocket.disconnect', ws_disconnect, path=r"^/peerjs/peerjs?$"),

    route('websocket.connect', ws_connect_call, path=r"^/call/?$"),
    route('websocket.receive', ws_message_call, path=r"^/call/?$"),
    route('websocket.disconnect', ws_disconnect_call, path=r"^/call/?$"),
]
