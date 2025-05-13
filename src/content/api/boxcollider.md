---
title: "BoxCollider"
description: "Axis‑aligned box collision shape."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/collider.py"
category: "[9] Collision"
sort: 5
---

# BoxCollider

`BoxCollider(entity, center=(0,0,0), size=(1,1,1))`

Attaches an axis‑aligned box collider to `entity`.

## Constructor Arguments

| Name      | Type          | Default       | Description                         |
|-----------|---------------|---------------|-------------------------------------|
| `entity`  | `Entity`      | —             | Parent entity.                      |
| `center`  | `(float,3)`   | `(0,0,0)`     | Center offset of the box.           |
| `size`    | `(float,3)`   | `(1,1,1)`     | Dimensions of the collision box.    |

## Example

```python
from ursina import *
from ursina.collider import BoxCollider

app = Ursina()
e = Entity(model='cube', color=color.azure)
e.collider = BoxCollider(e, center=Vec3(0,0,0), size=Vec3(1,2,1))
app.run()
```