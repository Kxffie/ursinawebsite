---
title: "Cone"
description: "Procedural cone mesh with optional base cap and configurable resolution."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/cone.py"
category: "[4] Procedural Models"
sort: 4
---

# Cone

`Cone(resolution=4, radius=0.5, height=1, add_bottom=True, mode='triangle', **kwargs)`

Located in `ursina/models/procedural/cone.py`

## Overview

Creates a conical mesh:

- `resolution`: segments around base  
- `radius`, `height`: dimensions  
- `add_bottom`: include circular base cap  
- `mode`: `'triangle'` (surface triangles) or `'line'` (wireframe)  

## Example

```python
from ursina import *

app = Ursina()
e = Entity(model=Cone(3), texture='brick')
EditorCamera()
app.run()
