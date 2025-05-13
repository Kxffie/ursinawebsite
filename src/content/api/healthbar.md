---
title: "HealthBar"
description: "Visual bar representing a value with optional text and lines."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/health_bar.py"
category: "[11] UI"
sort: 19
---

# HealthBar

`HealthBar(max_value=100, value=Default, roundness=.25, bar_color=color.red.tint(-.2), highlight_color=color.black66, animation_duration=.1, show_text=True, show_lines=False, text_size=.7, scale=(.5,.025), origin=(-.5,.5), name='health_bar', **kwargs)`

Located in `ursina/prefabs/health_bar.py`

## Overview

Displays a filled bar that animates on value change. Can show numeric text and separator lines.

## Key Properties

- `.value`  
- `.show_text`  
- `.show_lines`  
- `.bar_color`

## Example

```python
from ursina import *

app = Ursina()
health_bar_1 = HealthBar(bar_color=color.lime.tint(-.25), roundness=.5, max_value=100, value=50, scale=(.5,.1))

def input(key):
    if key == '+' or key == '+ hold':
        health_bar_1.value += 10
    if key == '-' or key == '- hold':
        health_bar_1.value -= 10

app.run()
```