---
title: "MeshCollider"
description: "Mesh‑based collision volume matching a model."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/collider.py"
category: "[9] Collision"
sort: 7
---

# MeshCollider

`MeshCollider(entity, mesh=None, center=(0,0,0))`

Uses an arbitrary mesh for collision. If `mesh` is `None`, uses the entity’s model.

## Constructor Arguments

| Name      | Type      | Default       | Description                         |
|-----------|-----------|---------------|-------------------------------------|
| `entity`  | `Entity`  | —             | Parent entity.                      |
| `mesh`    | `Mesh`    | `None`        | Source mesh for collision polygons. |
| `center`  | `Vec3`    | `(0,0,0)`     | Center offset of the mesh collider. |

## Properties

| Property             | Description                      |
|----------------------|----------------------------------|
| `.collision_polygons`| List of polygons used for collision. |

## Methods

| Method   | Description                            |
|----------|----------------------------------------|
| `remove()` | Remove the collider and cleanup.     |

## Example

```python
from ursina import *
from ursina.collider import MeshCollider

app = Ursina()
e = Entity(model='icosphere', color=color.yellow)
e.collider = MeshCollider(e, mesh=e.model)
app.run()
