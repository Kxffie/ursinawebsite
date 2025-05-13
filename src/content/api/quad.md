---
title: "Quad"
description: "Procedurally generates a quad mesh with configurable radius, segment count, aspect ratio, scale, drawing mode, and thickness. Caches generated meshes for performance."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/quad.py"
category: "Procedural Models"
sort: 0
---

# Quad

`
Quad(radius=.1, segments=8, aspect=1, scale=(1,1), mode='ngon', thickness=1)
`

Returns a `Mesh` or `QuadMesh` configured as a quad shape. Uses an internal cache to reuse meshes with identical parameters.

Located in `ursina/models/procedural/quad.py`

## Overview

The `Quad` function creates a flat quad mesh. By default it returns a simple four-corner mesh. For other settings, it constructs and returns a `QuadMesh` instance with specified parameters. Repeated calls with the same arguments will return a cached copy.

## Function Arguments

| Argument    | Type     | Default        | Description                                                                                             |
|-------------|----------|----------------|---------------------------------------------------------------------------------------------------------|
| `radius`    | `float`  | `0.1`          | Radius for corner generation when using segmented or rounded quads.                                     |
| `segments`  | `int`    | `8`            | Number of subdivision segments per corner (rounded quads).                                              |
| `aspect`    | `float`  | `1`            | Horizontal aspect ratio scaling factor for corner rounding.                                             |
| `scale`     | `tuple`  | `(1, 1)`       | Additional scaling applied to x and y edges after corner generation.                                     |
| `mode`      | `str`    | `'ngon'`       | Draw mode: `'ngon'` for filled, `'line'` for outline.                                                   |
| `thickness` | `int`    | `1`            | Line thickness when `mode='line'`.                                                                       |

## QuadMesh Class

```python
class QuadMesh(Mesh):
    def __init__(self, radius=.1, segments=8, aspect=1, scale=(1,1), mode='ngon', thickness=1):
        ...
```

`QuadMesh` extends `Mesh` to generate vertex positions, UVs, normals, and triangles based on corner rounding, segmentation, and scaling parameters. Once constructed, instances are cached in `cached_quads` by their parameter signature.

### Key Behavior

- **Corner generation**: Computes rounded or segmented corners by rotating a helper entity and sampling points.
- **Aspect and scale**: Adjusts vertex positions to apply nonuniform aspect ratios and scaling.
- **Caching**: Stores each created `QuadMesh` in `cached_quads` so repeated calls reuse existing meshes.

## Example

```python
from ursina import *
from ursina.models.procedural.quad import Quad

app = Ursina()

# simple quad
Entity(model=Quad(), color=color.azure)

# rounded quad with fewer segments
Entity(model=Quad(radius=0.2, segments=4), x=1, color=color.orange)

# outline quad
Entity(model=Quad(mode='line', thickness=2), x=-1, color=color.yellow)

app.run()
```
