---
title: "Ports"
description: "Role of port numbers in directing network traffic to applications."
pubDate: "2025-05-13"
category: "[6] Networking"
sort: 3
---

IP addresses route packets to the correct machine. *Ports* route packets to the right application on that machine:

- Each service listens on a port number (e.g., HTTP on port 80)  
- Packets include both IP address and port  

When hosting behind NAT, forward the server’s port through your router. Access your router’s admin page (often at `192.168.0.1`) to add port forwarding rules.
