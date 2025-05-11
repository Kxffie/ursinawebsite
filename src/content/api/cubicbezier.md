---
title: "CubicBezier"
description: "Parametric cubic Bézier curve evaluator for custom easing."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/curve.py"
category: "Math"
sort: 6
---

# CubicBezier

`CubicBezier(a, b, c, d)`

Located in `ursina/curve.py`

## Overview

`CubicBezier` implements a cubic Bézier easing function defined by four control points `(0,0)`, `(a,b)`, `(c,d)`, `(1,1)`. Use it whenever you need a custom easing curve in `Entity.animate_*` calls.

## Properties

| Name  | Description                                              |
|-------|----------------------------------------------------------|
| `.a`  | X coordinate of first control point                      |
| `.b`  | Y coordinate of first control point                      |
| `.c`  | X coordinate of second control point                     |
| `.d`  | Y coordinate of second control point                     |
| `.ax` | Precomputed coefficient for `t³` term in X polynomial    |
| `.bx` | Precomputed coefficient for `t²` term in X polynomial    |
| `.cx` | Precomputed coefficient for `t¹` term in X polynomial    |
| `.ay` | Precomputed coefficient for `t³` term in Y polynomial    |
| `.by` | Precomputed coefficient for `t²` term in Y polynomial    |
| `.cy` | Precomputed coefficient for `t¹` term in Y polynomial    |

## Methods

| Method                          | Description                                                                          |
|---------------------------------|--------------------------------------------------------------------------------------|
| `sample_curve_x(t)`             | Return the X value of the Bézier at parameter `t`.                                   |
| `sample_curve_y(t)`             | Return the Y value of the Bézier at parameter `t`.                                   |
| `sample_curve_derivative_x(t)`  | Return the derivative dX/dt at parameter `t`.                                        |
| `solve_curve_x(t, epsilon)`     | Numerically solve for parameter `t` that yields `sample_curve_x(t) ≈ x`.             |
| `calculate(x, epsilon)`         | Given an input progress `x` (0–1), return the eased output by solving inverse X.     |

## Example

```python
from ursina import *
from ursina.curve import CubicBezier, combine, linear, reverse, in_expo

app = Ursina()
camera.orthographic = True
camera.fov = 16
window.color = color.black

# render the curve as a line
def render_curve(fn, name):
    verts = [Vec3(i/31, fn(i/31), 0) for i in range(32)]
    c = Entity(model=Mesh(vertices=verts, mode='line', thickness=2), color=color.light_gray)
    Text(parent=c, text=name, scale=8, color=color.gray, y=-0.1)
    return c

# simple Bézier: start slow, speed up, slow again
bez = CubicBezier(0, .5, 1, .5)
print('Value at x=0.23 →', bez.calculate(.23))

# combine two curves for a custom effect
custom = combine(linear, reverse(in_expo), 0.25)
render_curve(custom, 'custom_combine')

# Bézier example in animation
e = Entity(model='cube')
e.animate_y(2, duration=1, curve=bez)

EditorCamera()
app.run()
```