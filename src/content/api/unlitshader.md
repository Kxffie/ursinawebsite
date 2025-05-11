---
title: "Unlit Shader"
description: "Basic shader that applies texture without lighting."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/unlit_shader.py"
category: "Shaders"
sort: 0
---

# Unlit Shader

Default inputs:
```python
default_input = {
    'texture_scale': Vec2(1, 1),
    'texture_offset': Vec2(0.0, 0.0),
}
```

## Example

```python
from ursina import *
from ursina.prefabs.primitives import *

app = Ursina()
shader = unlit_shader

ground = GrayPlane(scale=10, y=-2, texture='shore', shader=shader, texture_scale=(10,10))
ground.set_shader_input('texture_scale', Vec2(2, 1))
EditorCamera()
app.run()
```