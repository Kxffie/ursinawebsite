---
title: "UrsinaMath"
description: "Utility math functions for interpolation, distance, clamping, and more."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/ursinamath.py"
category: "[7] Math"
sort: 0
---

# UrsinaMath

A collection of standalone functions for common math tasks in 2D/3D space, color interpolation, clamping, and array utilities.

## Functions

| Function                                        | Description                                                                                             |
|-------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `distance(a, b)`                                | Full 3D distance between points or entities.                                                            |
| `distance_2d(a, b)`                             | Distance in the X–Y plane.                                                                              |
| `distance_xz(a, b)`                             | Distance in the X–Z plane.                                                                              |
| `lerp(a, b, t)`                                 | Linear interpolation between `a` and `b` at `t` (0–1). Supports numbers, tuples, Vec2, Vec3, lists.    |
| `inverselerp(a, b, t)`                          | Given `t` between `a` and `b`, return the normalized position (0–1).                                     |
| `lerp_angle(start_angle, end_angle, t)`         | Interpolate angles correctly across the 360° boundary.                                                  |
| `slerp(q1, q2, t)`                              | Spherical linear interpolation between two quaternions.                                                 |
| `clamp(value, floor, ceiling)`                  | Constrain a value to the given range.                                                                   |
| `round_to_closest(value, step=0)`               | Round to the nearest multiple of `step`. If `step=0`, behaves like `round()`.                            |
| `rotate_around_point_2d(point, origin, deg)`     | Rotate a 2D point around an origin by `deg` degrees.                                                    |
| `world_position_to_screen_position(point)`       | Convert a world-space `Vec3` to UI-space `(x,y)`.                                                       |
| `sum(l)`                                        | Sum all elements in an iterable.                                                                        |
| `make_gradient(index_color_dict)`               | Given `{index: color}`, return a 256-entry list smoothly interpolated between colors.                   |
| `sample_gradient(list_of_values, t)`            | Distribute `list_of_values` evenly along 0–1 and return the interpolated entry at `t`.                  |

## Example

```python
from ursina import *
from ursina.ursinamath import *

app = Ursina()

# distance examples
e1 = Entity(position=(0,0,0))
e2 = Entity(position=(0,1,1))
print(distance(e1, e2))           # full 3D distance
print(distance_xz(e1, e2.position))  # XZ-plane only

# interpolation examples
between_color = lerp(color.lime, color.magenta, .5)
print(between_color)

print(lerp((0,0), (0,1), .5))
print(lerp(Vec2(0,0), Vec2(0,1), .5))
print(lerp([0,0], [0,1], .5))

# angle rotation
p = (1,0)
print(p, 'rotated ->', rotate_around_point_2d(p, (0,0), 90))

app.run()
```