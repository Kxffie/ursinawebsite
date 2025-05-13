---
title: "EditorCamera"
description: "Debug camera with free movement and rotation."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/editor_camera.py"
category: "[10] Prefabs"
sort: 1
---

# EditorCamera

`EditorCamera(**kwargs)`

Located in `ursina/prefabs/editor_camera.py`

## Overview

Provides a fly-around camera for debugging. Hold right mouse button to rotate, use WASD or arrow keys to pan, scroll to zoom. Includes shortcuts for toggling orthographic, focusing on center, and resetting view.

## Key Properties

- `rotation_speed` (default 200)  
- `pan_speed` (default Vec2(5,5))  
- `move_speed` (default 10)  
- `zoom_speed` (default 1.25)  
- `zoom_smoothing` (default 8)  
- `shortcuts`  
  - `shift+p` to toggle orthographic  
  - `shift+f` to focus on center  
  - `alt+f` to reset center  

## Methods

- `on_enable()` / `on_disable()` / `on_destroy()`  
- `input(key)`  
- `update()`  

## Example

```python
from ursina import *

app = Ursina()
Sky()
Entity(model='cube', color=color.orange, collider='box')
EditorCamera()

app.run()
```