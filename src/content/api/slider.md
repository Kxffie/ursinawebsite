---
title: "Slider"
description: "Horizontal or vertical slider control."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/slider.py"
category: "UI"
sort: 2
---

# Slider

`Slider(min=0, max=1, default=None, height=Text.size, text='', dynamic=False, radius=Text.size/2, bar_color=color.black66, **kwargs)`

Located in `ursina/prefabs/slider.py`

## Overview

Interactive slider with optional snapping (`step`) and callbacks (`on_value_changed`).

## Key Properties

- `.value`
- `.step`
- `.dynamic`

## Methods

- `bg_click()`
- `drop()`
- `update()`
- `slide()`

## Example

```python
from ursina import *

app = Ursina()
box = Entity(model='cube', origin_y=-.5, scale=1, color=color.orange)
def scale_box():
    box.scale_y = slider.value
    print(slider.value)

slider = Slider(0, 20, default=10, height=Text.size*3, y=-.4, step=1, on_value_changed=scale_box, vertical=True)
thin_slider = ThinSlider(text='height', dynamic=True, on_value_changed=scale_box)
thin_slider.label.origin = (0,0)
thin_slider.label.position = (.25, -.1)
app.run()
```