---
title: "Basics"
description: "Using RPCs for networking in Ursina Engine."
pubDate: "2025-05-13"
category: "[8] Ursina Networking"
sort: 1
---

The recommended way to do networking in Ursina is via remote procedure calls (RPCs). RPCs let you invoke functions on another machine over a network, hiding serialization and transport details. 

Typical usage:

```python
from ursina.networking import RPCPeer, rpc

rpc_peer = RPCPeer()

@rpc(rpc_peer)
def on_connect(connection, time_connected):
    print("New connection established.")
    if rpc_peer.is_hosting():
        print("Running on host.")

@rpc(rpc_peer)
def on_disconnect(connection, time_disconnected):
    print("Disconnected.")

@rpc(rpc_peer)
def say(connection, time_received, message: str):
    print(message)

def update():
    rpc_peer.update()

# Send RPC to first peer
rpc_peer.say(rpc_peer.get_connections()[0], "Hello, World!")
```

Type hints are required for RPC arguments. Custom types can be registered as needed.
