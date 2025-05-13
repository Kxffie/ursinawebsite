---
title: "Adding Colliders"
description: "How to attach colliders to entities in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 0
---

## Adding Colliders

Attach built-in colliders to match an entity's bounds, or define custom colliders:

```python
e = Entity(model='sphere', x=2)
e.collider = 'box'      # BoxCollider based on bounds
e.collider = 'sphere'   # SphereCollider based on bounds
e.collider = 'mesh'     # MeshCollider based on shape

# Custom collider instances
from ursina import BoxCollider, SphereCollider, MeshCollider, Vec3
e.collider = BoxCollider(e, center=Vec3(0,0,0), size=Vec3(1,1,1))
e.collider = SphereCollider(e, center=Vec3(0,0,0), radius=.75)
e.collider = MeshCollider(e, mesh=e.model, center=Vec3(0,0,0))
```

Make sure to set `model` before `collider` for built-in types:

```python
e = Entity(model='cube', collider='box')
```