---
title: "Pipe"
description: "Procedural extruded mesh along a path: sweep a 2D base shape along a 3D polyline with per‑segment thickness, optional end caps and color gradient."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/pipe.py"
category: "[4] Procedural Models"
sort: 6
---

# Pipe

`Pipe(base_shape=Quad, origin=(0,0), path=((0,0,0),(0,1,0)), thicknesses=((1,1),), color_gradient=None, look_at=True, cap_ends=True, mode='triangle', **kwargs)`

Located in `ursina/models/procedural/pipe.py`

## Overview

Extrudes a 2D cross‑section (`base_shape`) along a 3D `path`, generating side faces and optional end‑caps. Supports variable thickness per segment and color gradients along the sweep.

## Constructor Arguments

| Argument         | Type         | Default                | Description                                                                                  |
|------------------|--------------|------------------------|----------------------------------------------------------------------------------------------|
| `base_shape`     | `Mesh` or list| `Quad`                | Cross‑section shape to extrude (Mesh instance or list of 2D points).                         |
| `origin`         | `tuple(float,float)` | `(0,0)`      | Local origin pivot within the base shape.                                                    |
| `path`           | sequence of Vec3 | `((0,0,0),(0,1,0))` | 3D positions defining the sweep centerline.                                                  |
| `thicknesses`    | sequence of tuple | `((1,1),)`         | Per‑point scale of the base shape (width, height).                                           |
| `color_gradient` | sequence of Color | `None`             | Gradient colors sampled along the path.                                                      |
| `look_at`        | `bool`       | `True`                 | If True, orient cross‑section to face next path point.                                        |
| `cap_ends`       | `bool`       | `True`                 | Add triangular end‑caps at start and end.                                                    |
| `mode`           | `str`        | `'triangle'`           | Primitive mode for mesh generation.                                                         |
| `**kwargs`       | `any`        |                        | Other `Mesh` kwargs (`static`, `thickness`, etc.).                                           |

## Fields

| Name            | Description                                                      |
|-----------------|------------------------------------------------------------------|
| `.base_shape`   | Vertex list of the 2D cross‑section.                             |
| `.path`         | The input polyline of Vec3 positions.                            |
| `.thicknesses`  | Scale factors applied to the base_shape at each path point.      |
| `.look_at`      | Whether each segment faces forward along the path.               |
| `.cap_ends`     | Whether to generate end‑cap triangles.                           |

## Methods

| Method       | Description                                                                              |
|--------------|------------------------------------------------------------------------------------------|
| `generate()` | Build the mesh: extrude base_shape along path, create side faces, apply caps and colors. |

## Example Usage

```python
from ursina import *
app = Ursina()

# build a circular path
from ursina.models.procedural.circle import Circle
path = [v * 5 for v in Circle().vertices]
path.append(path[0])

# sweep a quad along that path without end caps
e = Entity(model=Pipe(path=path, cap_ends=False))
print(len(e.model.vertices), len(e.model.colors))

EditorCamera()
app.run()
