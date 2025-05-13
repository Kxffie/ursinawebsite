---
title: "Distance Check"
description: "Using simple distance checks for proximity-based triggers in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 5
---

## Distance Check

For basic proximity detection, compare the distance between entities:

```python
from ursina import distance, destroy

if distance(player, pickup) < (pickup.scale_x / 2):
    pickup.animate_scale(0, duration=0.1)
    destroy(pickup, delay=0.1)
```
