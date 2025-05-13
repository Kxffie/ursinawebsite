---
title: "Boxcast"
description: "Using boxcast to detect collisions with a volumetric ray in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 2
---

## Boxcast

Similar to `raycast`, but the ray has width and height (thickness). Returns a `HitInfo`.

```python
from ursina import boxcast, scene

hit_info = boxcast(
    origin,
    direction=(0, 0, 1),
    distance=9999,
    thickness=(1, 1),
    traverse_target=scene,
    ignore=[],
    debug=False
)
```

- **thickness**: `(width, height)` tuple  
- Other parameters are the same as `raycast`  

Use it when you need volume-based collision checks.
