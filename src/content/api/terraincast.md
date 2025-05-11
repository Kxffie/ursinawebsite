---
title: "Terraincast"
description: "Query terrain height at a given world position."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/terraincast.py"
category: "Collision"
sort: 1
---

# Terraincast

`terraincast(world_position, terrain_entity, height_values=None, return_normals=False)`

Uses the X and Z of `world_position` to look up the corresponding Y on a terrain mesh.

## Parameters

| Name             | Type        | Default    | Description                                          |
|------------------|-------------|------------|------------------------------------------------------|
| `world_position` | `Vec3`      | —          | Position in world space.                            |
| `terrain_entity` | `Entity`    | —          | Entity using a `Terrain` model.                      |
| `height_values`  | `list`      | `None`     | Raw height map data; if `None` it’s taken from model.|
| `return_normals` | `bool`      | `False`    | If `True`, also return surface normal at that point. |

## Example

```python
from ursina import *
from ursina.terraincast import terraincast

app = Ursina()

terrain = Entity(
    model=Terrain('heightmap_1', skip=8),
    scale=(40,5,20),
    texture='heightmap_1'
)
player = Entity(model='sphere', scale=.2, origin_y=-.5, color=color.azure)

def update():
    move = Vec3(held_keys['d'] - held_keys['a'], 0, held_keys['w'] - held_keys['s']).normalized()
    player.position += move * time.dt * 4
    y = terraincast(player.world_position, terrain, terrain.model.height_values)
    if y is not None:
        player.y = y

EditorCamera()
app.run()
```