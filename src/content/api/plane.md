---
title: "Plane"
description: "Procedural subdivided plane mesh with UVs, for use as ground or grid."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/plane.py"
category: "Procedural Models"
sort: 2
---

# Plane

`Plane(subdivisions=(1,1), mode='triangle', **kwargs)`

Located in `ursina/models/procedural/plane.py`

## Overview

Creates a flat grid of quads or triangles:

- `subdivisions`: tuple (xSegments, ySegments)  
- `mode`: `'triangle'` (two triangles per cell) or `'ngon'` (filled polygon)  

## Fields

| Name            | Description                          |
|-----------------|--------------------------------------|
| `.vertices`     | List of vertex positions.            |
| `.triangles`    | List of index triplets.              |
| `.uvs`          | List of UV coordinates per vertex.   |

## Example

```python
from ursina import *

app = Ursina()
# 3×6 subdivided plane as floor
floor = Entity(model=Plane(subdivisions=(3,6)), texture='brick', rotation_x=-90)
EditorCamera()
app.run()
