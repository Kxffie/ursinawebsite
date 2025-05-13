---
title: "Client Authoritative"
description: "Networking where clients are responsible for their own game state."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 4
---

In client-authoritative setups, each client computes its own player state and sends it to peers or server:

- Simplifies local code; clients fully control their state.
- Vulnerable to cheating since clients can send invalid states.
- Suitable for trusted, private, or casual multiplayer games.
