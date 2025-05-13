---
title: "Snapshot Interpolation"
description: "Smoothing out discrete state updates by interpolating between them."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 7
---

Snapshot interpolation works by:

- Buffering recent state updates from server or peers.
- Rendering entities at interpolated positions between two buffered states.
- Masks network update rate; provides smooth motion.
- Introduces rendering delay equal to interpolation buffer length.
