---
title: "Camera Contrast Shader"
description: "Adjustable contrast post-process effect."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/camera_contrast.py"
category: "[15] Shaders"
sort: 15
---

# Camera Contrast Shader

Default inputs:
```python
default_input = {
    'contrast': 1,
}
```

## Example

```python
from ursina import *

app = Ursina()
Entity(model='sphere')
Entity(model='cube', y=-1)

camera.shader = camera_contrast_shader
camera.set_shader_input('contrast', 1)

slider = ThinSlider(max=2, dynamic=True, position=(-.25, -.45))
def adjust_contrast():
    camera.set_shader_input('contrast', slider.value)
slider.on_value_changed = adjust_contrast

EditorCamera()
app.run()
```