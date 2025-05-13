---
title: "ThinSlider"
description: "Compact slider variant without visible bar."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/slider.py"
category: "[11] UI"
sort: 3
---

# ThinSlider

`ThinSlider(*args, **kwargs)`

Located in `ursina/prefabs/slider.py`

## Overview

Simplified `Slider` for minimal UI. Inherits all `Slider` functionality.

## Example

```python
from ursina import *

app = Ursina()
box = Entity(model='cube', origin_y=-.5, scale=1, color=color.orange)
def scale_box():
    box.scale_y = slider.value

slider = Slider(0, 20, default=10, height=Text.size*3, y=-.4, step=1, on_value_changed=scale_box, vertical=True)
thin_slider = ThinSlider(text='height', dynamic=True, on_value_changed=scale_box)
app.run()
```