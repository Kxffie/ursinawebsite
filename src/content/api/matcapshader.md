---
title: "MatCap Shader"
description: "Shader that simulates material capture for stylized shading."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/matcap_shader.py"
category: "Shaders"
sort: 2
---

# MatCap Shader

## Example

```python
from ursina import *
from ursina.prefabs.primitives import *

app = Ursina()
window.color = color.black
shader = matcap_shader

a = WhiteCube(shader=shader, texture='shore')
b = WhiteSphere(shader=shader, rotation_y=180, x=3, texture='shore')
GrayPlane(scale=10, y=-2, texture='shore')
Sky(color=color.light_gray)
EditorCamera()

def update():
    b.rotation_z += 1
    b.rotation_y += 1
    b.rotation_x += 1

app.run()
```