---
title: "Position"
description: "Guide to setting Entity positions locally and in world space."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 4
---

# Position

To set local position relative to its parent:

```python
e = Entity()
e.position = Vec3(0, 0, 0)
# or
e.position = (0, 0, 0)
```

You can also set individual axes:

```python
e = Entity(position=(1, 1, 1))
e.x = 0
print(e.position)  # Vec3(0, 1, 1)
```

For world-space coordinates (ignoring parent transform):

```python
parent = Entity(position=(0, 2, 0))
e = Entity(parent=parent, position=(0, 2, 0))
print(e.world_position)  # Vec3(0, 4, 0)

# assign world_position
e.world_position = (0, 0, 0)
print(e.position)        # Vec3(0, -2, 0)
```

Shortcuts also exist:

- `world_x`, `world_y`, `world_z`

See <https://www.ursinaengine.org/coordinate_system.html> for details.
