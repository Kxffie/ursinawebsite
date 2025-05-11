---
title: "Tilemap"
description: "GridEditor-based prefab for tilemap display and editing."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/tilemap.py"
category: "Prefabs"
sort: 2
---

# Tilemap

`Tilemap(tilemap='', tileset='', tileset_size=(8,8), **kwargs)`

Located in `ursina/prefabs/tilemap.py`

## Overview

Loads an image (e.g. PNG) as a 2D tilemap, maps each pixel to a tile in `tileset`. Supports editing mode, drawing temporary highlights, saving changes, and auto-generated colliders.

## Key Properties

- `grid` (2D list of pixel values)  
- `tileset_size` (columns, rows)  
- `colliders` (list of generated collider Entities)  
- `outline` (Entity showing selection)  

## Methods

- `update()`  
- `draw_temp(position)`  
- `input(key)`  
- `render()`  
- `save()`  

## Example

```python
from ursina import *

app = Ursina()
EditorCamera()
tilemap = Tilemap('tilemap_test_level', tileset='test_tileset', tileset_size=(8,4), parent=scene)
camera.orthographic = True
camera.position = tilemap.tilemap.size / 2
camera.fov = tilemap.tilemap.height

Text('press tab to toggle edit mode', origin=(.5,0), position=(-.55,.4))
app.run()
```