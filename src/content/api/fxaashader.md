---
title: "FXAA Shader"
description: "Fast approximate anti-aliasing post-process shader."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/fxaa.py"
category: "[15] Shaders"
sort: 11
---

# FXAA Shader

Default inputs:
```python
default_input = {
    'window_size': Vec2(1280, 720)
}
```

## Example

```python
from ursina import *
app = Ursina()
window.color = color.black

Entity(model='plane', scale=10, y=-2, texture='shore')
EditorCamera()
Entity(model='quad', color=color.red, double_sided=True)
Entity(model='quad', color=color.green, z=-.001, scale=.5, texture='circle')
camera.shader = fxaa_shader
camera.clip_plane_far = 100
Sky()

def input(key):
    if key == 'space':
        camera.shader = None if camera.shader else fxaa_shader

app.run()
```