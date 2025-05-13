---
title: "How Data Goes from Point A to Point B"
description: "Overview of Internet Protocol (IP) and packet routing."
pubDate: "2025-05-13"
category: "[6] Networking"
sort: 1
---

When two computers exchange data over the internet, it travels in small units called *packets*. Each packet includes:

- **Payload**: the data you want to send  
- **Headers**: metadata with source and destination IP addresses  

Packets move from the *source host* to the *destination host* through intermediary devices (routers). Each hop forwards the packet closer to its destination. The network can route packets along different paths; unreliable hops may drop packets. The internet’s design tolerates these failures by allowing multiple routes, though some packets may still be lost.
