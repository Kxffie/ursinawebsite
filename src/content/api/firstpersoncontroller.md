---
title: "FirstPersonController"
description: "Prefab for 3D first-person movement and looking."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/first_person_controller.py"
category: "Prefabs"
sort: 3
---

# FirstPersonController

`FirstPersonController(**kwargs)`

Located in `ursina/prefabs/first_person_controller.py`

## Overview

Basic FPS movement with mouse-look, jumping, gravity, and collision. Draws a simple crosshair via a UI quad.

## Key Properties

- `speed` (default 5)  
- `height` (default 2)  
- `mouse_sensitivity` (Vec2(40,40))  
- `jump_height` (default 2)  
- `gravity` (default 1)  
- `ignore_list` (entities to skip in collision)  

## Methods

- `update()`  
- `input(key)`  
- `jump()`  
- `start_fall()`  
- `land()`  
- `on_enable()` / `on_disable()`  

## Example

```python
from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController

app = Ursina()
ground = Entity(model='plane', scale=100, collider='box', texture='white_cube', texture_scale=(100,100))
player = FirstPersonController(y=2, origin_y=-.5)
app.run()
```