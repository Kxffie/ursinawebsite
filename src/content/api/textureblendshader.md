---
title: "Texture Blend Shader"
description: "Blend multiple textures using a blend map."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/texture_blend_shader.py"
category: "[15] Shaders"
sort: 6
---

# Texture Blend Shader

## Example

```python
from ursina import *
Texture.default_filtering = 'bilinear'

app = Ursina(vsync=False)
e = Entity(model='plane', shader=texture_blend_shader, texture='shore')
e.set_shader_input('red_texture', load_texture('dirt'))
e.set_shader_input('green_texture', load_texture('grass_tintable.tif'))
e.set_shader_input('green_tint', color.hex('#6f6d24'))
e.set_shader_input('blue_texture', load_texture('cobblestone.tif'))
blend_map = load_texture('texture_blend_map_example')
e.set_shader_input('blend_map', blend_map)
e.scale_x = blend_map.width / blend_map.height
e.scale *= 200

EditorCamera(rotation_x=30)

def input(key):
    if key == 'space':
        e.shader = None if e.shader else texture_blend_shader
    if key == 'left mouse up':
        blend_map.apply()

e.collider = 'mesh'

def update():
    if mouse.left and mouse.hovered_entity == e:
        x, _, y = mouse.point + Vec3(.5)
        blend_map.set_pixel(int(x*blend_map.width), int(y*blend_map.height), color.green)
        blend_map.apply()

app.run()
```