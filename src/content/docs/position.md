---
title: "Position"
description: "Explains local versus world positioning, axis shortcuts, and practical examples of parent–child relationships."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 4
---

To set the position relative to the parent, set `.position`:

```python
e = Entity()
e.position = Vec3(0,0,0)
e.position = Vec2(0,0)
e.position = (0,0,0)
e.position = (0,0)
```

You can also set `x`, `y`, `z` for setting the position on a specific axis.

```python
e = Entity(position=Vec3(1,1,1))
e.x = 0
print(position)
>>> Vec3(0,1,1)
```

To set the position relative to the scene, that is, ignoring the position of any parents, set `.world_position`:

```python
parent_entity = Entity(position=Vec3(0,2,0))
e = Entity(parent=parent_entity, position=Vec3(0,2,0))
print(e.position)
>>> Vec3(0,2,0)
print(e.world_position)
>>> Vec3(0,4,0)

e.world_position = Vec3(0,0,0)
print(e.position)
>>> Vec3(0,-2,0)
```

As with position, there's shortcuts for setting world position on individual axes too:
`world_x`, `world_y` and `world_z`

See https://www.ursinaengine.org/coordinate_system.html for more
information on how the coordinate system works.
