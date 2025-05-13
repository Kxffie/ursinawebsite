---
title: "HitInfo"
description: "Stores detailed information about a collision, including hit status, entity, contact points, normals, and distance."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/hit_info.py"
category: "[9] Collision"
sort: 3
---

# HitInfo

```python
HitInfo(**kwargs)
```

Located in `ursina/hit_info.py`

## Overview

`HitInfo` is returned by collision detection functions (such as `raycast` or `boxcast`). It indicates whether a collision occurred and provides details about the hit point, normals, distance from origin, and involved entities.

## Constructor Arguments

| Argument       | Type     | Default | Description                                                                          |
|----------------|----------|---------|--------------------------------------------------------------------------------------|
| `hit`          | `bool`   | `None`  | Whether a collision occurred (`True`) or not (`False`).                             |
| `entity`       | `Entity` | `None`  | The first entity that was hit.                                                       |
| `point`        | `Vec3`   | `None`  | Collision point in the entity’s local coordinate space.                              |
| `world_point`  | `Vec3`   | `None`  | Collision point in world coordinates.                                               |
| `distance`     | `float`  | `9999`  | Distance from the origin of the test (ray or box) to the collision point.            |
| `normal`       | `Vec3`   | `None`  | Surface normal at the collision location in local space.                            |
| `world_normal` | `Vec3`   | `None`  | Surface normal at the collision location in world space.                            |
| `hits`         | `list`   | `[]`    | For multi-hit queries, list of `HitInfo` instances for each collision.               |
| `entities`     | `list`   | `[]`    | List of all entities hit (in case multiple collisions occur).                        |

## Properties

| Property       | Description                                                                             |
|----------------|-----------------------------------------------------------------------------------------|
| `.hit`         | `True` if a collision occurred; otherwise `False`.                                      |
| `.entity`      | The first entity that was hit.                                                          |
| `.point`       | Collision point in the entity’s local space.                                            |
| `.world_point` | Collision point in world coordinates.                                                   |
| `.distance`    | Distance from the origin of the test to the hit point.                                  |
| `.normal`      | Surface normal at the collision location in local space.                                |
| `.world_normal`| Surface normal at the collision location in world space.                                |
| `.hits`        | List of `HitInfo` for each collision in multi-hit scenarios.                            |
| `.entities`    | List of entities hit when multiple collisions occur.                                    |

## Methods

| Method          | Description                                                                     |
|-----------------|---------------------------------------------------------------------------------|
| `__bool__()`    | Returns the value of `.hit`, enabling `if hit_info:` style collision checks.   |

## Example

```python
from ursina import Ursina, raycast, Vec3
from ursina.hit_info import HitInfo

app = Ursina()

# Cast a ray downward from (0, 5, 0)
hit = raycast(origin=Vec3(0,5,0), direction=Vec3(0,-1,0), distance=10)

if hit:
    print('Hit entity:', hit.entity)
    print('Collision point (world):', hit.world_point)
    print('Surface normal (world):', hit.world_normal)
    print('Distance to hit:', hit.distance)
else:
    print('No collision within 10 units')

app.run()
```