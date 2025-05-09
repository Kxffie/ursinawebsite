---
title: "Terrain"
description: "Procedural heightmap terrain mesh: generate from image file or 2D list of height values, with optional color gradient and adjustable resolution."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/terrain.py"
category: "Procedural Models"
sort: 7
---

# Terrain

`Terrain(heightmap='', height_values=None, gradient=None, skip=1, **kwargs)`

Located in `ursina/models/procedural/terrain.py`

## Overview

Creates a mesh whose vertex heights come from:

- A grayscale image file (`heightmap`)  
- Or a 2D list of numeric `height_values`  

Supports color gradients, down‑sampling via `skip`, and automatic UVs.

## Constructor Arguments

| Argument        | Type         | Default | Description                                                                    |
|-----------------|--------------|---------|--------------------------------------------------------------------------------|
| `heightmap`     | `str`        | `''`    | Name of an image asset to load as heightmap.                                   |
| `height_values` | list of lists| `None`  | 2D array of heights (0–255) to use directly.                                    |
| `gradient`      | sequence     | `None`  | Color gradient to apply based on height.                                        |
| `skip`          | `int`        | `1`     | Step size to downsample height data (higher = lower resolution).                |
| `**kwargs`      | `any`        |         | Other `Mesh` kwargs (`mode`, `thickness`, etc.).                                |

## Fields

| Name         | Description                                            |
|--------------|--------------------------------------------------------|
| `.width`     | Number of columns in height_values.                    |
| `.depth`     | Number of rows in height_values.                       |
| `.aspect_ratio` | Ratio `width/depth`.                                 |
| `.gradient`  | The supplied color gradient.                           |
| `.height_values` | NumPy array of current heights.                    |

## Methods

| Method         | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `generate()`   | Build the mesh vertices, triangles and UVs from height data.       |

## Example Usage

```python
from ursina import *
import random

app = Ursina()

# terrain from an image heightmap (skipping every 8 pixels)
terrain_tex = Entity(
    model=Terrain('heightmap_1', skip=8),
    scale=(40,5,20),
    texture='heightmap_1'
)

# terrain from Python list
hv = terrain_tex.model.height_values.tolist()
terrain_list = Entity(
    model=Terrain(height_values=hv),
    scale=(40,5,20),
    texture='heightmap_1',
    x=40
)

EditorCamera(rotation_x=90)
camera.orthographic = True
Sky()
app.run()
