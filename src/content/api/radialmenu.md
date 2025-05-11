---
title: "RadialMenu"
description: "Circular pop-up menu around cursor."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/radial_menu.py"
category: "UI"
sort: 17
---

# RadialMenu

`RadialMenu(buttons=list(), **kwargs)`

Located in `ursina/prefabs/radial_menu.py`

## Overview

Pop-up menu that arranges `RadialMenuButton` instances in a circle around the cursor or center.

## Key Properties

- `.buttons`  
- `.open_at_cursor`  
- `.bg` — background panel  

## Methods

- `on_enable()`  
- `input(key)`

## Example

```python
from ursina import *
from ursina.prefabs.radial_menu import RadialMenu, RadialMenuButton

app = Ursina()
rm = RadialMenu(buttons=(
    RadialMenuButton(text='1'),
    RadialMenuButton(text='2'),
    RadialMenuButton(text='3'),
    RadialMenuButton(text='4'),
), enabled=False)

def enable_radial_menu():
    rm.enabled = True

Button(parent=scene, model='cube', color=color.orange, on_click=enable_radial_menu)
EditorCamera()
app.run()
```