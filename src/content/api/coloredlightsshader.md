---
title: "Colored Lights Shader"
description: "Vertex-lit shader with configurable colors for each face."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/colored_lights_shader.py"
category: "Shaders"
sort: 3
---

# Colored Lights Shader

Default inputs:
```python
default_input = {
    'top_color': color.hsv(220, .12, .82),
    'bottom_color': color.hsv(285, .13, .47),
    'left_color': color.hsv(217, .3, .68),
    'right_color': color.hsv(0, .25, .93),
    'front_color': color.hsv(231, .08, .69),
    'back_color': color.hsv(240, .05, .76),
}
```

## Example

```python
from ursina import *
from ursina.prefabs.primitives import *

app = Ursina()
window.color = color.black
shader = colored_lights_shader

Entity(model='cube', color=color.white, shader=shader)
e = Entity(model='cube', x=1.2, color=color.white, shader=shader)
e.set_shader_input('top_color', hsv(0,1,1))
e.set_shader_input('bottom_color', hsv(0,0,0))
# ...set other face colors...

GrayPlane(scale=10, y=-2, texture='shore')
Sky(color=color.light_gray)
EditorCamera()
app.run()
```