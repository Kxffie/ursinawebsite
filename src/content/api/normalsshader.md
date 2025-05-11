---
title: "Normals Shader"
description: "Visualize normals of a mesh in screen-space."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/normals_shader.py"
category: "Shaders"
sort: 9
---

# Normals Shader

## Example

```python
from ursina import *
from ursina.prefabs.primitives import *

app = Ursina()
window.color = color.black
shader = normals_shader

a = WhiteCube(shader=shader)
b = AzureSphere(rotation_y=180, x=3)
b.shader = shader
GrayPlane(scale=10, y=-2, texture='shore')

Sky(color=color.light_gray)
EditorCamera()

def update():
    b.rotation_z += 1
    b.rotation_y += 1
    b.rotation_x += 1

app.run()
```