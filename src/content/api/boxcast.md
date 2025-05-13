---
title: "Boxcast"
description: "Cast a swept box (thick ray) to detect collisions."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/boxcast.py"
category: "[9] Collision"
sort: 2
---

# Boxcast

`boxcast(origin, direction=(0,0,1), distance=9999, thickness=(1,1), traverse_target=scene, ignore=None, debug=False)`

Similar to `raycast` but with a rectangular cross‑section defined by `thickness`.

## Parameters

| Name             | Type           | Default              | Description                                                    |
|------------------|----------------|----------------------|----------------------------------------------------------------|
| `origin`         | `Vec3`         | —                    | Starting point.                                                |
| `direction`      | `Vec3`         | `(0,0,1)`            | Direction vector.                                              |
| `distance`       | `float`        | `9999`               | Maximum travel distance.                                       |
| `thickness`      | `(float,float)`| `(1,1)`              | Width and height of the box cross‑section.                     |
| `traverse_target`| `Entity`       | `scene`              | Parent to search under.                                        |
| `ignore`         | `list[Entity]` | `None`               | Entities to exclude.                                           |
| `debug`          | `bool`         | `False`              | Draw the box path if `True`.                                   |

## Example

```python
from ursina import *
from ursina.boxcast import boxcast

app = Ursina()

class Player(Entity):
    def update(self):
        dir = Vec3(held_keys['d'] - held_keys['a'], 0, held_keys['w'] - held_keys['s']).normalized()
        start = self.world_position + (self.up * .5)
        hit = boxcast(start, dir, distance=.5, thickness=(.5,.5), ignore=[self])
        if not hit.hit:
            self.position += dir * time.dt * 5

Player(model='cube', origin_y=-.5, color=color.orange)
wall = Entity(model='cube', collider='box', scale=(1,3,1), origin_y=-.5, color=color.azure, x=3)
EditorCamera()
app.run()
```