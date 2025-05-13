---
title: "Lit With Shadows Shader"
description: "Shader with simple directional lighting and shadows."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/lit_with_shadows_shader.py"
category: "[15] Shaders"
sort: 1
---

# Lit With Shadows Shader

Default inputs:
```python
default_input = {
    'texture_scale': Vec2(1, 1),
    'texture_offset': Vec2(0, 0),
    'shadow_color': Color(0, .5, 1, .25),
    'shadow_blur': 0.005,
    'shadow_samples': 4,
}
```

## Example

```python
from ursina import *
app = Ursina()
shader = lit_with_shadows_shader

a = Entity(model='cube', shader=shader, y=1, color=color.light_gray)
Entity(model='sphere', texture='shore', y=2, x=1, shader=shader)
Entity(model='plane', scale=16, texture='grass', shader=shader)

from ursina.lights import DirectionalLight
sun = DirectionalLight(shadow_map_resolution=(2048,2048))
sun.look_at(Vec3(-1,-1,-10))
scene.fog_density = (1, 50)
Sky(color=color.light_gray)
EditorCamera()

def update():
    a.x += (held_keys['d'] - held_keys['a']) * time.dt * 5
    a.y += (held_keys['e'] - held_keys['q']) * time.dt * 5
    a.z += (held_keys['w'] - held_keys['s']) * time.dt * 5

def input(key):
    if key == 'r':
        sun.color = color.red if sun.color == color.white else color.white

app.run()
```