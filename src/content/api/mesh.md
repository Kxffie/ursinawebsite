---
title: "Mesh"
description: "Reference for the Mesh class, which lets you define custom geometry (triangles, lines, points) by specifying vertices, indices, colors, UVs and normals."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/mesh.py"
category: "[3] Graphics"
sort: 1
---

# Mesh

`Mesh(vertices=None, triangles=None, colors=None, uvs=None, normals=None, static=True, mode='triangle', thickness=1, render_points_in_3d=True, vertex_buffer=None, vertex_buffer_length=None, vertex_buffer_format=None)`

Located in `ursina/mesh.py`

## Overview

The `Mesh` class (a `p3d.NodePath` subclass) lets you build custom geometry by providing:

- **vertices**: list of 3‑tuples or flat list of floats  
- **triangles** (indices): flat list or list of index‑tuples  
- **colors**, **uvs**, **normals**: per‑vertex arrays  
- **mode**: `'triangle'`, `'line'`, `'point'`, `'ngon'`, `'tristrip'`  
- **thickness** and **render_points_in_3d** for line/point modes  
- or supply a raw **vertex_buffer**  

When constructed it auto‑generates the Panda3D `Geom` under the hood.

## Constructor Arguments

| Argument               | Type                   | Default      | Description                                                                  |
|------------------------|------------------------|--------------|------------------------------------------------------------------------------|
| `vertices`             | list or flat list      | `None`       | Vertex positions `(x,y,z)` or flat `[x0,y0,z0, x1,y1,z1,…]`.                  |
| `triangles`            | list or flat list      | `None`       | Indices defining primitives: `[0,1,2, 2,3,0]` or `[(0,1,2),(2,3,0)]`.         |
| `colors`               | list                   | `None`       | Per‑vertex RGBA floats.                                                      |
| `uvs`                  | list                   | `None`       | Per‑vertex UV coords `(u,v)`.                                                |
| `normals`              | list                   | `None`       | Per‑vertex normals `(nx,ny,nz)`.                                              |
| `static`               | `bool`                 | `True`       | Use static or dynamic vertex buffer.                                         |
| `mode`                 | `str` or `MeshModes`   | `'triangle'` | Primitive type: triangles, lines, points, fans or strips.                    |
| `thickness`            | `int`                  | `1`          | Line or point thickness.                                                     |
| `render_points_in_3d`  | `bool`                 | `True`       | Draw points in 3D rather than overlay.                                       |
| `vertex_buffer`        | binary buffer          | `None`       | Raw interleaved buffer.                                                      |
| `vertex_buffer_length` | `int`                  | `None`       | Number of vertices in raw buffer.                                            |
| `vertex_buffer_format` | `str`                  | `None`       | Format string, e.g. `"p3f, c4f"` for position+color.                         |

## Properties

| Property             | Description                                             |
|----------------------|---------------------------------------------------------|
| `.vertices`          | The vertex array.                                       |
| `.triangles`         | The index array.                                        |
| `.colors`, `.uvs`, `.normals` | Per‑vertex data arrays.                       |
| `.mode`              | Current primitive mode.                                 |
| `.thickness`         | Line/point thickness.                                   |
| `.render_points_in_3d` | Draw points as 3D or overlay.                         |
| `.indices`           | Flattened index list.                                   |
| `.generated_vertices`| Internal expanded vertex list after generate.           |

## Methods

| Method                                                                                     | Description                                                                                   |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `generate()`                                                                               | (Re)build the underlying `Geom` from current arrays.                                          |
| `generate_normals(smooth=True, regenerate=True)`                                           | Compute normals per‑vertex.                                                                   |
| `project_uvs(aspect_ratio=1, direction='forward')`                                          | Auto‑generate planar UVs.                                                                      |
| `colorize(left, right, down, up, back, forward, smooth=True, world_space=True, strength=1)` | Assign vertex colors based on face orientation.                                               |
| `clear(regenerate=True)`                                                                   | Clear all arrays (optionally regenerate an empty mesh).                                       |
| `save(name='', folder=..., flip_faces=False, ...)`                                         | Write to a .bam or .egg in the compressed models folder.                                      |
| `serialize(vertex_decimal_limit=4, color_decimal_limit=4, uv_decimal_limit=4, normal_decimal_limit=4)` | Return a JSON‑friendly dict of mesh data.                              |

## Example Usage

```python
from ursina import *
from ursina.mesh import Mesh

app = Ursina()

# simple triangle
t1 = Entity(
    model=Mesh(vertices=[(-.5,0,0), (.5,0,0), (0,1,0)])
)

# line strip
line = Entity(
    position=(2,0,0),
    model=Mesh(
        vertices=[(0,0,0), (1,1,0), (2,0,0)],
        mode='line',
        thickness=4
    ),
    color=color.cyan
)

# quad with UVs and texture
quad = Entity(
    position=(4,0,0),
    model=Mesh(
        vertices=[(0.5,0.5,0),(-0.5,0.5,0),(-0.5,-0.5,0),(0.5,-0.5,0),(0.5,0.5,0),(-0.5,-0.5,0)],
        uvs=[(1,1),(0,1),(0,0),(1,0),(1,1),(0,0)],
        triangles=[0,1,2,2,3,0]
    ),
    texture='shore'
)

EditorCamera()
app.run()
