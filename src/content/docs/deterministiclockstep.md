---
title: "Deterministic Lockstep"
description: "Peer-to-peer synchronization by exchanging inputs and stepping the simulation."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 6
---

Deterministic lockstep involves:

- Peers exchange inputs each tick.
- Each client advances the simulation using identical starting state and inputs.
- Requires bit-for-bit determinism across devices.
- Disadvantages: no late joins without state syncing; strict requirements on math and random seeds.

Common in RTS and classic fighting games.
