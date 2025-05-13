---
title: "Sending Game State"
description: "Approach of sending full game state updates over the network."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 3
---

In this model the server (or authoritative peer) sends full game state updates:

- Server updates state on events or at a fixed tick rate.
- State packets include arrays of entity data with unique IDs.
- Clients map received entity data to local entities by ID and update them.

This approach is network-bound: bandwidth scales with number of entities. It is simple to implement but may not scale to large simulations. Suitable when bandwidth is sufficient.
