---
title: "Camera Outline Shader"
description: "Outline effect for camera view in screen-space."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/camera_outline_shader.py"
category: "[15] Shaders"
sort: 13
---

# Camera Outline Shader

## Example

```python
from ursina import *
import time

app = Ursina()
Entity(model='cube', texture='white_cube', color=color.red)
Entity(model='cube', texture='white_cube', color=color.white, x=1.1)
Entity(model='sphere', texture='white_cube', color=color.gray, y=1.1)
camera.shader = camera_outline_shader

t = 0
frame = 0
def update():
    global t, frame
    t += time.dt
    frame += 1

EditorCamera()
app.run()
```