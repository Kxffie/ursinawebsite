---
title: "TextField"
description: "Multi-line editable text input field."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/text_field.py"
category: "UI"
sort: 4
---

# TextField

`TextField(max_lines=64, line_height=1.1, character_limit=None, **kwargs)`

Located in `ursina/prefabs/text_field.py`

## Overview

Rich text input with scrolling, selection, undo/redo, and shortcuts.

## Key Properties

- `.active`

## Methods

- `input(key)`
- `add_text(s, move_cursor=True, rerender=True)`
- `erase(rerender=True)`
- `render()`
- `update()`
- `select_all()`

## Example

```python
from ursina import *
from textwrap import dedent

app = Ursina()
window.color = color._25
te = TextField(max_lines=30, register_mouse_input=True)
te.text = dedent('''Lorem ipsum dolor sit amet...''')
te.render()

def input(key):
    if key == '3':
        te.input('scroll down')

EditorCamera()
app.run()
```