---
title: "Raycast"
description: "Cast a ray from a point and detect the first collider hit."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/raycast.py"
category: "Collision"
sort: 0
---

# Raycast

`raycast(origin, direction=(0,0,1), distance=9999, traverse_target=scene, ignore=None, debug=False, color=color.white)`

Casts a ray from `origin` along `direction` up to `distance`. Returns a `HitInfo` with details if it hits an entity with a collider.

## Parameters

| Name             | Type           | Default              | Description                                                                                     |
|------------------|----------------|----------------------|-------------------------------------------------------------------------------------------------|
| `origin`         | `Vec3`         | —                    | Starting point of the ray.                                                                      |
| `direction`      | `Vec3`         | `(0,0,1)`            | Direction vector.                                                                               |
| `distance`       | `float`        | `9999`               | Maximum length of the ray.                                                                      |
| `traverse_target`| `Entity`       | `scene`              | Only entities under this parent will be considered.                                             |
| `ignore`         | `list[Entity]` | `None`               | Entities to skip during collision checks.                                                       |
| `debug`          | `bool`         | `False`              | If `True`, draw the ray line on screen.                                                         |
| `color`          | `Color`        | `color.white`        | Color of the debug line if enabled.                                                             |

## Example

```python
from ursina import *
from ursina.raycast import raycast

app = Ursina()

class Player(Entity):
    def update(self):
        dir = Vec3(held_keys['d'] - held_keys['a'], 0, held_keys['w'] - held_keys['s']).normalized()
        start = self.world_position + (self.up * .5)
        hit = raycast(start, dir, distance=.5, ignore=[self], debug=False)
        if not hit.hit:
            self.position += dir * 5 * time.dt

Player(model='cube', origin_y=-.5, color=color.orange)
wall = Entity(model='cube', collider='box', scale=(1,3,1), origin_y=-.5, color=color.azure)
app.run()
```