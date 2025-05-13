---
title: "Limitations"
description: "Current limitations of Ursina's TCP-based networking."
pubDate: "2025-05-13"
category: "[8] Ursina Networking"
sort: 0
---

Ursina's networking currently uses TCP. This simplifies implementation and usage but can suffer from latency spikes when packet resends occur. TCP is reliable when packet loss is minimal, so ensure a stable network connection. For broader compatibility or high packet loss scenarios, consider a UDP-based solution. Non-realtime networked games tolerate TCP resends without major issues.
