---
title: "Transition Shader"
description: "Shader to create cutoff transitions on textured quads."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shaders/transition_shader.py"
category: "Shaders"
sort: 10
---

# Transition Shader

## Example

```python
from ursina import *
app = Ursina()
window.color = color._16
Texture.default_filtering = 'bilinear'

e = Entity(model='quad', shader=transition_shader, scale=5, cutoff=0,
    texture='sword_slash', color=color.azure)
mask = load_texture('sword_slash')
e.set_shader_input('mask_texture', mask)
EditorCamera()

min_cutoff_slider = Slider(0, 1, dynamic=True, y=-.4)
min_cutoff_slider.on_value_changed = lambda: e.set_shader_input('min_cutoff', min_cutoff_slider.value)

max_cutoff_slider = Slider(0, 1, default=1, dynamic=True, y=-.45)
max_cutoff_slider.on_value_changed = lambda: e.set_shader_input('max_cutoff', max_cutoff_slider.value)

def input(key):
    if key == 'space':
        e.cutoff = 0
        e.animate('cutoff', 1, duration=.1, curve=curve.linear, delay=.05)

app.run()
```