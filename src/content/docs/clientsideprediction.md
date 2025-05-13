---
title: "Client Side Prediction"
description: "Techniques for hiding network latency by predicting actions locally."
pubDate: "2025-05-13"
category: "[7] Game Networking"
sort: 9
---

Clients apply inputs instantly while awaiting server confirmation:

- Maintain circular buffer of local inputs with sequence numbers.
- When server update arrives with processed sequence number, rewind and replay buffered inputs.
- Correct mismatches by snapping to authoritative state (may cause rubber-banding).
- Commonly paired with interpolation for other objects.
