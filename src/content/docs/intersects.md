---
title: "Intersects"
description: "Checking for overlapping colliders between entities in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 3
---

## Intersects

Check if one entity’s collider overlaps another’s. Returns a `HitInfo`.

```python
hit_info = entity.intersects(other_entity)
if hit_info.hit:
    print('Entities overlap')
```

Example trigger zone:

```python
if player.intersects(trigger_box).hit:
    trigger_box.color = color.lime
else:
    trigger_box.color = color.gray
```
