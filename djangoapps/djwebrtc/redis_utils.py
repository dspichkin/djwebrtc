import json
import redis

r = redis.Redis(host='localhost', port=6379, db=0)


def get_clients():
    clients = r.get("clients")
    if not clients:
        clients = {}
    else:
        try:
            clients = json.loads(clients)
        except:
            print "except in getting clients"
            clients = {}
    return clients


def set_clients(clients):
    r.set("clients", json.dumps(clients))


def get_key_by_id(id):
    _clients = get_clients()
    for key in _clients:
        if "id" in _clients[key]:
            if _clients[key]["id"] == id:
                return key


def get_id_by_key(key):
    _clients = get_clients()
    if key in _clients:
        if "id" in _clients[key]:
            return _clients[key]["id"]
