---
title: "Sending Inputs"
description: "Techniques for transmitting player inputs across the network."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 2
---

One option is to only send player inputs across the network. This can take one of two forms:

- **Dumb terminal model**: Clients send inputs to a server running the simulation; server sends back rendered state data. Clients act purely as frontends.
- **Deterministic lockstep**: Peers exchange inputs with each other, then each runs the simulation locally in sync.

Advantages:
- Minimal bandwidth use, as only small input data is sent.
- Simulation complexity is limited by each client’s compute, not network.
