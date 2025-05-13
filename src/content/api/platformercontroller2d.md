---
title: "PlatformerController2d"
description: "Prefab for 2D platformer movement with jumping and collisions."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/platformer_controller_2d.py"
category: "[10] Prefabs"
sort: 4
---

# PlatformerController2d

`PlatformerController2d(**kwargs)`

Located in `ursina/prefabs/platformer_controller_2d.py`

## Overview

2D side-scroller controller with walking, jumping (including multi-jump), gravity, and slope handling via boxcasts.

## Key Properties

- `walk_speed` (default 8)  
- `jump_height` (default 4)  
- `max_jumps` (default 1)  
- `gravity` (default 1)  
- `traverse_target` (default scene)  
- `ignore_list` (list of entities to skip)  

## Methods

- `update()`  
- `input(key)`  
- `jump()`  
- `start_fall()`  
- `land()`  

## Example

```python
from ursina import *

app = Ursina()
camera.orthographic = True
camera.fov = 10

ground = Entity(model='cube', scale=(20,1), collider='box', y=-1)
player = PlatformerController2d(scale_y=2, jump_height=4, x=0, y=0)

app.run()
```