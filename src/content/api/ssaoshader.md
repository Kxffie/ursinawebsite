---
title: "SSAO Shader"
description: "Screen-space ambient occlusion post-process shader."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/screenspace_shaders/ssao.py"
category: "Shaders"
sort: 12
---

# SSAO Shader

## Example

```python
from ursina import *
import random

app = Ursina()
e = Entity(model='sphere', color=color.orange)
e = Entity(model='cube', y=-1)
e = Entity(model='plane', scale=100, y=-1)
camera.shader = ssao_shader

EditorCamera()

def input(key):
    if key == 'space':
        camera.shader = None if camera.shader else ssao_shader

for i in range(20):
    Entity(model='cube', position=Vec3(random.random(),random.random(),random.random())*3, rotation=Vec3(random.random(),random.random(),random.random())*360)

app.run()
```