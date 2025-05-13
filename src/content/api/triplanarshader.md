---
title: "Triplanar Shader"
description: "Blend textures across three axes without visible seams."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/triplanar_shader.py"
category: "[15] Shaders"
sort: 8
---

# Triplanar Shader

Default inputs:
```python
default_input = {
    'texture_scale': Vec2(1,1),
    'side_texture': 'brick',
    'side_texture_scale': Vec2(1,1),
}
```

## Example

```python
from ursina import *
from ursina.prefabs.primitives import *

app = Ursina()
window.color = color.black
shader = triplanar_shader

a = Draggable(parent=scene, model='cube', shader=shader, texture=load_texture('brick'), plane_direction=Vec3(0,1,0))
b = AzureSphere(shader=shader, rotation_y=180, x=3, texture='grass')
GrayPlane(scale=10, y=-2, texture='shore')

for s in (a,b):
    s.set_shader_input('side_texture', load_texture('brick'))

Sky(color=color.light_gray)
EditorCamera()

def update():
    b.rotation_y += 1
    b.rotation_x += 1

app.run()
```