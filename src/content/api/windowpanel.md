---
title: "WindowPanel"
description: "Draggable window container with automatic layout."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/window_panel.py"
category: "[11] UI"
sort: 10
---

# WindowPanel

`WindowPanel(title='', content=[], **kwargs)`

Located in `ursina/prefabs/window_panel.py`

## Overview

Creates a draggable window with a title bar and automatic layout of child UI elements in `.content`.

## Key Properties

- `.content` — tuple of Entities to lay out  
- `.panel` — background Entity  
- `.popup` — if `True`, toggles `.enabled` on space or other triggers  

## Methods

- `layout()` — arranges `.content` within the panel  

## Example

```python
from ursina import *
app = Ursina()

wp = WindowPanel(
    title='Custom Window',
    content=(
        Text('Name:'), InputField(), Button(text='Submit'),
        Slider(), Slider(), ButtonGroup(('A','B','C'))
    ),
    popup=True
)
wp.y = wp.panel.scale_y/2 * wp.scale_y
wp.layout()

def input(key):
    if key == 'space':
        wp.enabled = True

app.run()
```