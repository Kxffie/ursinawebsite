---
title: "ColorPicker"
description: "Interactive HSV color picker with alpha."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/color_picker.py"
category: "[11] UI"
sort: 20
---

# ColorPicker

`ColorPicker(dynamic=True, **kwargs)`

Located in `ursina/prefabs/color_picker.py`

## Overview

Sliders for hue, saturation, value, and alpha. Calls `on_value_changed` callback.

## Key Properties

- `.preview` — Button showing current color  
- `.h_slider`, `.s_slider`, `.v_slider`, `.a_slider`

## Methods

- `_calculate_color()`  
- value change callbacks

## Example

```python
from ursina import *
app = Ursina()
ColorPicker()
app.run()
```