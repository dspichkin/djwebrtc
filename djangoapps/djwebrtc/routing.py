from channels.routing import route
from djwebrtc.consumers import (
    ws_connect, ws_disconnect, ws_message,
    ws_connect_peer, ws_disconnect_peer, ws_message_peer,
    ws_connect_call, ws_message_call, ws_disconnect_call
)


channel_routing = [
    route('websocket.connect', ws_connect_peer, path=r"^/peerjs/peerjs?$"),
    route('websocket.receive', ws_message_peer, path=r"^/peerjs/peerjs?$"),
    route('websocket.disconnect', ws_disconnect_peer, path=r"^/peerjs/peerjs?$"),

    route('websocket.connect', ws_connect_call, path=r"^/call/?$"),
    route('websocket.receive', ws_message_call, path=r"^/call/?$"),
    route('websocket.disconnect', ws_disconnect_call, path=r"^/call/?$"),

    route('websocket.connect', ws_connect, path=r"^/$"),
    route('websocket.receive', ws_message, path=r"^/$"),
    route('websocket.disconnect', ws_disconnect, path=r"^/$"),
]
