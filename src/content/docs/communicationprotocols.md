---
title: "Communication Protocols"
description: "Comparison of UDP and TCP and their suitability for real‑time applications."
pubDate: "2025-05-13"
category: "[6] Networking"
sort: 4
---

Data on top of IP uses one of two main transport protocols:

- **UDP** (User Datagram Protocol)  
  - Connectionless, minimal overhead  
  - Packets may arrive out of order or be lost  
  - Preferred for real‑time games  

- **TCP** (Transmission Control Protocol)  
  - Connection-oriented, reliable, ordered delivery  
  - Retransmits lost packets, may introduce latency spikes  
  - Ideal for file transfers, chat, but less so for fast-paced games
