---
title: "DropdownMenu"
description: "Hierarchical dropdown menu UI."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/dropdown_menu.py"
category: "[11] UI"
sort: 15
---

# DropdownMenu

`DropdownMenu(text='', buttons:list=None, **kwargs)`

Located in `ursina/prefabs/dropdown_menu.py`

## Overview

Clickable menu that displays a vertical list of `DropdownMenuButton` or nested `DropdownMenu` items.

## Key Properties

- `.buttons` — list of menu entries  
- `.arrow_symbol` — UI arrow indicator  

## Methods

- `open()` / `close()`  
- `on_mouse_enter()`  
- `input(key)`  
- `update()`

## Example

```python
from ursina import *
from ursina.prefabs.dropdown_menu import DropdownMenu, DropdownMenuButton

app = Ursina()
DropdownMenu('File', buttons=(
    DropdownMenuButton('New'),
    DropdownMenuButton('Open'),
    DropdownMenu('Reopen Project', buttons=(
        DropdownMenuButton('Project 1'),
        DropdownMenuButton('Project 2')
    )),
    DropdownMenuButton('Save'),
    DropdownMenu('Options', buttons=(
        DropdownMenuButton('Option a'),
        DropdownMenuButton('Option b')
    )),
    DropdownMenuButton('Exit'),
))
app.run()
```