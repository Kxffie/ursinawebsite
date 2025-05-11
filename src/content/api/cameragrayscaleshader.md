---
title: "Camera Grayscale Shader"
description: "Toggle grayscale post-process effect."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/camera_grayscale.py"
category: "Shaders"
sort: 17
---

# Camera Grayscale Shader

## Example

```python
from ursina import *

app = Ursina()
Entity(model='sphere', color=color.orange)
Entity(model='cube', y=-1)

camera.shader = camera_grayscale_shader
EditorCamera()

def input(key):
    if key == 'space':
        camera.shader = None if camera.shader else camera_grayscale_shader

app.run()
```