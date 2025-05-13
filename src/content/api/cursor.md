---
title: "Cursor"
description: "Custom mouse cursor entity."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/cursor.py"
category: "[11] UI"
sort: 5
---

# Cursor

`Cursor(**kwargs)`

Located in `ursina/prefabs/cursor.py`

## Overview

Replaces the system cursor with a textured quad attached to `camera.ui`. Hides the OS cursor.

## Key Properties

- `.texture` (default `'cursor'`)  
- `.render_queue` (default `1`)  

## Methods

- `update()`

## Example

```python
from ursina import *
app = Ursina()

Button('button').fit_to_text()
camera.orthographic = True
camera.fov = 100

cursor = Cursor(
    model=Mesh(
        vertices=[(-.5,0,0),(.5,0,0),(0,-.5,0),(0,.5,0)],
        triangles=[(0,1),(2,3)],
        mode='line', thickness=2
    ),
    scale=.02
)
mouse.visible = False
app.run()
```