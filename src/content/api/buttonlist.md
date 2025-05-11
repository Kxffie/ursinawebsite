---
title: "ButtonList"
description: "Lists buttons generated from a dict of labels to callbacks."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/button_list.py"
category: "UI"
sort: 8
---

# ButtonList

`ButtonList(button_dict, button_height=1.1, width=.5, popup=False, color=Button.default_color, highlight_color=color.white33, selected_color=color.azure, font=Text.default_font, clear_selected_on_enable=True, **kwargs)`

Located in `ursina/prefabs/button_list.py`

## Overview

Dynamically creates buttons from keys of `button_dict`, each invoking its associated callback.

## Key Properties

- `.button_dict`  
- `.selected`  

## Methods

- `input(key)`  
- `update()`  
- `on_enable()` / `on_disable()`

## Example

```python
from ursina import *
from ursina import Func

app = Ursina()
button_dict = {f'Option {i}': Func(print, i) for i in range(5)}
bl = ButtonList(button_dict, font='VeraMono.ttf', button_height=1.5)

def input(key):
    if key == 'space':
        bl.button_dict = {'A': None, 'B': Func(print,'B')}

bl.selected = 'Option 1'
app.run()
```