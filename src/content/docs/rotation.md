---
title: "Rotation"
description: "Covers controlling an entity's orientation with Euler angles and the look_at helper function."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 5
---

```python
e.rotation = (0,0,0)
e.rotation_y = 90
```

The `look_at()` method can also be used for pointing an entity at something:

```python
other_entity = Entity(position=(10,1,8))

e.look_at(other_entity) # make z‑axis (forward) point at other_entity
e.look_at(other_entity, axis='up') # optionally define which axis
```
