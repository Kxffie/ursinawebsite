---
title: "Server Side Lag Compensation"
description: "Techniques for correcting player actions for network latency on the server."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 8
---

Servers can compensate for latency by:

- Storing a history of past game states.
- Rewinding to the time when an action occurred based on latency.
- Performing collision or hit checks on rewound state.
- Fast-forwarding back to current state after applying effects.

Used for precise actions (e.g., hitscan weapons). Balances fairness but may penalize low-latency players.
