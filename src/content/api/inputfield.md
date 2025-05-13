---
title: "InputField"
description: "Text input field with label, default value, and submit handling."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/input_field.py"
category: "[11] UI"
sort: 6
---

# InputField

`InputField(default_value='', label='', max_lines=1, character_limit=24, text='', active=False, **kwargs)`

Located in `ursina/prefabs/input_field.py`

## Overview

Wraps a `TextField` for simple labeled input, with optional content masking and validation types.

## Key Properties

- `.text`  
- `.active`  
- `.limit_content_to`  
- `.hide_content`  

## Methods

- `render()`  
- `input(key)`

## Example

```python
from ursina import *
app = Ursina()
gradient = Entity(model='quad', texture='vertical_gradient', parent=camera.ui, scale=(camera.aspect_ratio,1), color=color.hsv(240,.6,.1,.75))

username_field = InputField(y=-.12, limit_content_to='0123456789', default_value='11', active=True)
username_field.text = '0929468098'
password_field = InputField(y=-.18, hide_content=True)
username_field.next_field = password_field

def submit():
    print('username:', username_field.text)
    print('password:', password_field.text)

Button(text='Login', scale=.1, color=color.cyan.tint(-.4), y=-.26, on_click=submit).fit_to_text()
username_field.on_value_changed = submit
app.run()
```