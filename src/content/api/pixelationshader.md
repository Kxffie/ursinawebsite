---
title: "Pixelation Shader"
description: "Screen-space pixelation effect shader."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/pixelation_shader.py"
category: "Shaders"
sort: 14
---

# Pixelation Shader

## Example

```python
from ursina import *
app = Ursina()

Entity(model='sphere', color=color.orange)
Entity(model='cube', y=-1)
camera.shader = pixelation_shader
EditorCamera()
app.run()
```