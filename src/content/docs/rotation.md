---
title: "Rotation"
description: "Methods for rotating Entities and aiming them with look_at."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 5
---

# Rotation

Set Euler angles directly:

```python
e.rotation = (0, 0, 0)
e.rotation_y = 90
```

Use `look_at()` to point an axis toward a target:

```python
target = Entity(position=(10, 1, 8))
e.look_at(target)               # z-axis forward
e.look_at(target, axis='up')    # choose which axis to align
```
