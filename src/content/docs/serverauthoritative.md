---
title: "Server Authoritative"
description: "Networking where the server has final authority over game state."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 5
---

In server-authoritative setups, the server governs all game state:

- Clients send inputs or state to server.
- Server validates and broadcasts updated state to clients.
- Prevents client-side cheating.
- Requires dedicated servers or host-executable distribution.
- Standard choice for competitive and matchmaking games.
