---
title: "Camera Vertical Blur Shader"
description: "Post-process vertical blur effect for the camera."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/camera_vertical_blur.py"
category: "[15] Shaders"
sort: 16
---

# Camera Vertical Blur Shader

Default inputs:
```python
default_input = {
    'blur_size': 0.1,
}
```

## Example

```python
from ursina import *

app = Ursina()
window.color = color._16

Entity(model='sphere', color=color.orange)
Entity(model='cube', y=-1)

camera.shader = camera_vertical_blur_shader

slider = ThinSlider(max=0.1, dynamic=True, position=(-.25, -.45))
def set_blur():
    camera.set_shader_input('blur_size', slider.value)
slider.on_value_changed = set_blur

EditorCamera()
app.run()
```