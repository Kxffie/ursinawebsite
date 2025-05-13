---
title: "Cylinder"
description: "Procedural cylinder (tube) mesh, with configurable start offset and direction."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/cylinder.py"
category: "[4] Procedural Models"
sort: 5
---

# Cylinder

`Cylinder(resolution=8, radius=0.5, start=0, height=1, direction=(0,1,0), mode='triangle', **kwargs)`

Located in `ursina/models/procedural/cylinder.py`

## Overview

Generates a cylindrical surface (tube):

- `resolution`: segments around  
- `radius`, `height`: dimensions  
- `start`: vertical offset  
- `direction`: axis vector  
- `mode`: `'triangle'` or `'line'`  

## Example

```python
from ursina import *

app = Ursina()
Entity(model=Cylinder(6, start=-0.5), color=color.hsv(60,1,1,0.3))
EditorCamera(rotation_speed=200, panning_speed=200)
app.run()
