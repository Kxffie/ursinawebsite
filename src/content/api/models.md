---
title: "Models"
description: "Built-in geometric meshes you can assign to any Entity."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/tree/master/ursina/models"
category: "[14] Assets"
sort: 0
---

# Models

Available built-in meshes that you can pass to `Entity(model=…)` for common shapes.

| Model Name        | Description                              |
|-------------------|------------------------------------------|
| `quad`            | Simple two-triangle square               |
| `wireframe_cube`  | Cube rendered as wireframe               |
| `plane`           | Infinite flat plane                      |
| `circle`          | Flat circle composed of many segments    |
| `diamond`         | Two pyramids base-to-base                |
| `wireframe_quad`  | Square outline                           |
| `sphere`          | UV-sphere                                |
| `cube`            | Solid cube                              |
| `icosphere`       | Subdivided icosahedron                   |
| `cube_uv_top`     | Cube with top face UV-mapped differently |
| `arrow`           | Directional arrow mesh                   |
| `sky_dome`        | Large inverted sphere for skyboxes       |

## Overview

All of the above are located under `ursina/models`. You can also drop your own `.obj`/`.glb`/etc. in the `assets` folder and refer to it by filename.

## Example

```python
from ursina import *

app = Ursina()

# rotating wireframe cube
e = Entity(
    model='wireframe_cube',
    color=color.azure,
    scale=2,
    rotation=(45, 45, 0),
    position=(0, 0, 2)
)

# floor plane
floor = Entity(
    model='plane',
    texture='shore',
    texture_scale=(4,4),
    rotation=(90,0,0),
    position=(0,-1,0)
)

app.run()
```