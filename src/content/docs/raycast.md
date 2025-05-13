---
title: "Raycast"
description: "Using raycast to detect the first collision along a ray in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 1
---

## Raycast

Cast a ray from an origin in a given direction. Returns a `HitInfo`.

```python
from ursina import raycast, scene, Vec3, time

hit_info = raycast(
    origin,
    direction=(0, 0, 1),
    distance=float('inf'),
    traverse_target=scene,
    ignore=[],
    debug=False
)
```

- **origin**: start position (`Vec3`)  
- **direction**: unit vector direction  
- **distance**: max length  
- **traverse_target**: restrict to specific entity or scene  
- **ignore**: list of entities to skip  
- **debug**: draw the ray onscreen  

Example: only move if no wall is hit

```python
origin = player.world_position + (player.up * 0.5)
hit_info = raycast(origin, player.direction, ignore=[player], distance=0.5)
if not hit_info.hit:
    player.position += player.direction * 5 * time.dt
```