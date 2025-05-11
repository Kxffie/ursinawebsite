---
title: "Projector Shader"
description: "Screen-space projector effect for textures."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/projector_shader.py"
category: "Shaders"
sort: 5
---

# Projector Shader

## Example

```python
from ursina import *
import random

app = Ursina()
Entity.default_shader = projector_shader

editor_camera = EditorCamera(rotation_x=30)
light = Entity(model='sphere', unlit=True)
ground = Entity(model='plane', collider='box', scale=64, texture='grass', texture_scale=(4,4))

random.seed(0)
for i in range(16):
    Entity(
        model='cube', origin_y=-.5, scale=2, texture='brick', texture_scale=(1,2),
        x=random.uniform(-8,8), z=random.uniform(-8,8)+8,
        collider='box', scale_y=random.uniform(2,3),
        color=color.hsv(0,0,random.uniform(.9,1))
    )

scene.fog_density = (10,200)

projector_texture = load_texture('vignette', application.internal_textures_folder)
projector_shader.default_input['projector_texture'] = projector_texture

def update():
    light.x += (held_keys['d'] - held_keys['a']) * time.dt * 3
    light.z += (held_keys['w'] - held_keys['s']) * time.dt * 3
    for e in scene.entities:
        if getattr(e, 'shader', None) == projector_shader:
            e.set_shader_input('projector_uv_offset', light.world_position.xz * projector_shader.default_input['projector_uv_scale'])

app.run()
```