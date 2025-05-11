---
title: "Curve"
description: "Collection of easing and interpolation functions for animations."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/curve.py"
category: "Animation"
sort: 5
---

# Curve

The `curve` module provides a variety of easing and interpolation functions. Pass any of these to `Entity.animate_*` calls to control acceleration, bounce, elastic effects, and more.

## Functions

| Function                   | Signature                           | Description                                   |
|----------------------------|-------------------------------------|-----------------------------------------------|
| `linear`                   | `linear(t)`                         | No easing, constant speed.                    |
| `in_sine`                  | `in_sine(t)`                        | Accelerating from zero velocity.              |
| `out_sine`                 | `out_sine(t)`                       | Decelerating to zero velocity.                |
| `in_out_sine`              | `in_out_sine(t)`                    | Accelerate then decelerate.                   |
| `in_quad`                  | `in_quad(t)`                        | Quadratic easing in.                          |
| `out_quad`                 | `out_quad(t)`                       | Quadratic easing out.                         |
| `in_out_quad`              | `in_out_quad(t)`                    | Quadratic easing in then out.                 |
| `in_cubic`                 | `in_cubic(t)`                       | Cubic easing in.                              |
| `out_cubic`                | `out_cubic(t)`                      | Cubic easing out.                             |
| `in_out_cubic`             | `in_out_cubic(t)`                   | Cubic easing in then out.                     |
| `in_quart`                 | `in_quart(t)`                       | Quartic easing in.                            |
| `out_quart`                | `out_quart(t)`                      | Quartic easing out.                           |
| `in_out_quart`             | `in_out_quart(t)`                   | Quartic easing in then out.                   |
| `in_quint`                 | `in_quint(t)`                       | Quintic easing in.                            |
| `out_quint`                | `out_quint(t)`                      | Quintic easing out.                           |
| `in_out_quint`             | `in_out_quint(t)`                   | Quintic easing in then out.                   |
| `in_expo`                  | `in_expo(t)`                        | Exponential easing in.                        |
| `out_expo`                 | `out_expo(t)`                       | Exponential easing out.                       |
| `in_out_expo`              | `in_out_expo(t)`                    | Exponential easing in then out.               |
| `in_circ`                  | `in_circ(t)`                        | Circular easing in.                           |
| `out_circ`                 | `out_circ(t)`                       | Circular easing out.                          |
| `in_out_circ`              | `in_out_circ(t)`                    | Circular easing in then out.                  |
| `in_back`                  | `in_back(t, magnitude=1.70158)`     | Overshooting cubic easing in.                 |
| `out_back`                 | `out_back(t, magnitude=1.70158)`    | Overshooting cubic easing out.                |
| `in_out_back`              | `in_out_back(t, magnitude=1.70158)` | Overshooting cubic easing in then out.        |
| `in_elastic`               | `in_elastic(t, magnitude=0.7)`      | Elastic bounce-in effect.                     |
| `out_elastic`              | `out_elastic(t, magnitude=0.7)`     | Elastic bounce-out effect.                    |
| `in_out_elastic`           | `in_out_elastic(t, magnitude=0.65)` | Elastic bounce-in then out.                   |
| `out_bounce`               | `out_bounce(t)`                     | Bounce out.                                   |
| `in_bounce`                | `in_bounce(t)`                      | Bounce in.                                    |
| `in_out_bounce`            | `in_out_bounce(t)`                  | Bounce in then out.                           |
| `zero`                     | `zero(t)`                           | Always returns 0.                             |
| `one`                      | `one(t)`                            | Always returns 1.                             |
| `combine`                  | `combine(curve_a, curve_b, split_at)` | Run `curve_a` until `split_at`, then `curve_b`. |
| `reverse`                  | `reverse(curve_function)`           | Invert a curve’s progress.                    |
| `<e>_boomerang`            | e.g. `in_quad_boomerang(t)`         | Play `in_quad` then reverse it.               |

## Example

```python
from ursina import *
from ursina.curve import combine, reverse, linear, in_expo

app = Ursina()
camera.orthographic = True
camera.fov = 16
window.color = color.black

# Render custom curve
custom = combine(linear, reverse(in_expo), 0.25)
curve_line = Entity(
    model=Mesh(
        vertices=[Vec3(i/31, custom(i/31), 0) for i in range(32)],
        mode='line', thickness=2
    ),
    color=color.light_gray
)
Text(parent=curve_line, text='custom_curve', scale=8, color=color.gray, y=-0.1)

# Example usage in animation
e = Entity(model='cube')
e.animate_y(2, duration=1, curve=in_expo)

app.run()
```