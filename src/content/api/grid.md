---
title: "Grid"
description: "Procedural grid of lines, useful for debugging or graph paper backgrounds."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/grid.py"
category: "Procedural Models"
sort: 3
---

# Grid

`Grid(width, height, mode='line', thickness=1, **kwargs)`

Located in `ursina/models/procedural/grid.py`

## Overview

Generates a 2D grid of line segments:

- `width`, `height`: number of cells along X and Z  
- `mode`: `'line'` (grid lines) or `'triangle'` (filled)  

## Fields

| Name     | Description               |
|----------|---------------------------|
| `.width` | Grid width in cells.      |
| `.height`| Grid height in cells.     |

## Example

```python
from ursina import *

app = Ursina()
# 2×6 grid of lines
Entity(model=Grid(2, 6))
app.run()
