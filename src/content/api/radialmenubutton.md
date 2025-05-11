---
title: "RadialMenuButton"
description: "Button used in a RadialMenu."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/radial_menu.py"
category: "UI"
sort: 18
---

# RadialMenuButton

`RadialMenuButton(**kwargs)`

Located in `ursina/prefabs/radial_menu.py`

## Overview

Interactive button placed in a `RadialMenu`.

## Example

```python
from ursina import *
from ursina.prefabs.radial_menu import RadialMenu, RadialMenuButton

app = Ursina()
rm = RadialMenu(buttons=(
    RadialMenuButton(text='A'),
    RadialMenuButton(text='B'),
    RadialMenuButton(text='C'),
), enabled=True)

EditorCamera()
app.run()
```