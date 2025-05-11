---
title: "DropdownMenuButton"
description: "Single entry in a DropdownMenu."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/dropdown_menu.py"
category: "UI"
sort: 16
---

# DropdownMenuButton

`DropdownMenuButton(text='', **kwargs)`

Located in `ursina/prefabs/dropdown_menu.py`

## Overview

Button used within a `DropdownMenu`. Inherits from `Button`.

## Example

```python
from ursina import *
from ursina.prefabs.dropdown_menu import DropdownMenu, DropdownMenuButton

app = Ursina()
DropdownMenu('File', buttons=(
    DropdownMenuButton('New'),
    DropdownMenuButton('Open'),
    DropdownMenuButton('Exit'),
))
app.run()
```