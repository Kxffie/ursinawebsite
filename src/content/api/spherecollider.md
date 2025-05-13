---
title: "SphereCollider"
description: "Sphere‑shaped collision volume."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/collider.py"
category: "[9] Collision"
sort: 6
---

# SphereCollider

`SphereCollider(entity, center=(0,0,0), radius=0.5)`

Attaches a spherical collider to `entity`.

## Constructor Arguments

| Name      | Type         | Default      | Description                         |
|-----------|--------------|--------------|-------------------------------------|
| `entity`  | `Entity`     | —            | Parent entity.                      |
| `center`  | `Vec3`       | `(0,0,0)`    | Sphere center offset.               |
| `radius`  | `float`      | `0.5`        | Radius of the collision sphere.     |

## Example

```python
from ursina import *
from ursina.collider import SphereCollider

app = Ursina()
e = Entity(model='sphere', color=color.magenta)
e.collider = SphereCollider(e, center=Vec3(0,0,0), radius=1)
app.run()
```