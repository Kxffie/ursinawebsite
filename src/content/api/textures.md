---
title: "Textures"
description: "Built-in texture assets for surface detail and UI."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/tree/master/ursina/textures"
category: "Assets"
sort: 1
---

# Textures

A list of bundled image files you can assign via `Entity(texture=…)` or `ShaderInput`.

| Texture Name        | Notes                                    |
|---------------------|------------------------------------------|
| `noise`             | Grayscale noise pattern                  |
| `grass`             | Tiled grass ground                       |
| `vignette`          | Black radial vignette overlay            |
| `arrow_right`       | UI arrow pointing right                  |
| `test_tileset`      | Sample tileset grid                      |
| `tilemap_test_level`| Example level layout                     |
| `shore`             | Sandy beach shoreline texture            |
| `file_icon`         | Generic file icon for UI                 |
| `sky_sunset`        | Gradient sky at sunset                   |
| `radial_gradient`   | Smooth circular gradient                 |
| `circle`            | White filled circle                      |
| `perlin_noise`      | Perlin noise fractal texture             |
| `brick`             | Brick wall pattern                       |
| `grass_tintable`    | Grass that responds to `color` tint      |
| `circle_outlined`   | Hollow circle outline                    |
| `ursina_logo`       | Ursina Engine logo                       |
| `arrow_down`        | UI arrow pointing down                   |
| `cog`               | Gear icon                                |
| `vertical_gradient` | Smooth vertical gradient                 |
| `white_cube`        | Plain white cubemap                      |
| `horizontal_gradient` | Smooth horizontal gradient             |
| `folder`            | Folder icon                              |
| `rainbow`           | Full spectrum gradient                   |
| `heightmap_1`       | Example heightmap (for terrain)         |
| `sky_default`       | Basic clear-sky cubemap                  |

## Overview

All textures live under `ursina/textures`. Use `texture_scale=(u_repeat,v_repeat)` on your Entity to tile textures.

## Example

```python
from ursina import *

app = Ursina()

# applying brick texture to a cube
wall = Entity(
    model='cube',
    texture='brick',
    texture_scale=(2,2),
    position=(0,0,3)
)

# UI image using the Ursina logo
logo = Entity(
    parent=camera.ui,
    model='quad',
    texture='ursina_logo',
    scale=(0.3,0.3),
    position=(-0.7,0.45)
)

app.run()
```