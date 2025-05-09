---
title: "PointLight"
description: "Point source light that emits in all directions from a single point."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/lights.py"
category: "Graphics"
sort: 6
---

# PointLight

`PointLight(**kwargs)`

Located in `ursina/lights.py`

## Overview

`PointLight` creates a local light source that radiates uniformly in all directions. It can be moved like any entity to simulate lamps, torches or bulbs.

## Constructor Arguments

| Argument   | Type    | Default | Description                                       |
|------------|---------|---------|---------------------------------------------------|
| `**kwargs` | `any`   |         | Any `Light` or `Entity` attributes (position, color, etc.). |

## Example Usage

```python
from ursina import *
from ursina.shaders import lit_with_shadows_shader

app = Ursina()
EditorCamera()

# a cube that uses a shader to receive lighting
Entity(model='cube', y=1, color=color.light_gray, shader=lit_with_shadows_shader)

# point light at origin
light = PointLight(color=color.white)
light.position = (0, 2, 0)

app.run()
```