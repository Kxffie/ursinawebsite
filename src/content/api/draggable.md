---
title: "Draggable"
description: "Enable dragging behavior on UI or world-space elements."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/draggable.py"
category: "[11] UI"
sort: 0
---

# Draggable

`Draggable(**kwargs)`

Located in `ursina/prefabs/draggable.py`

## Overview

Adds click-and-drag functionality to an entity or UI element.

## Key Properties

- `require_key`: Optional modifier key to start drag.
- `locking`: Set per-axis in `.lock` Vec3.
- Min/max bounds on x, y, z.

## Methods

- `input(key)`
- `start_dragging()`
- `stop_dragging()`
- `update()`

## Example

```python
from ursina import *

app = Ursina()
Entity(model='plane', scale=8, texture='white_cube', texture_scale=(8,8))
draggable_button = Draggable(scale=.1, text='drag me', position=(-.5, 0))
world_space_draggable = Draggable(parent=scene, model='cube', color=color.azure, plane_direction=(0,1,0), lock=Vec3(1,0,0))
EditorCamera(rotation=(30,10,0))
world_space_draggable.drop = Func(print, 'dropped cube')
app.run()
```