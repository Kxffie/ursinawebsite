---
title: "ButtonGroup"
description: "Group of toggleable buttons with single or multiple selection."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/button_group.py"
category: "[11] UI"
sort: 9
---

# ButtonGroup

`ButtonGroup(options, default='', min_selection=1, max_selection=1, origin=(-.5,.5,0), spacing=(0.025,0,0), label='', **kwargs)`

Located in `ursina/prefabs/button_group.py`

## Overview

Organizes buttons in a row or column, managing selected state constraints and callbacks.

## Key Properties

- `.options`  
- `.value`  
- `.label`  

## Methods

- `layout()`  
- `input(key)`  
- `select(b)`  
- `on_value_changed()`

## Example

```python
from ursina import *

app = Ursina()
gender_selection = ButtonGroup(('man', 'woman', 'other'), origin=(-.5,0), label='Choose gender:')
gender_selection.on_value_changed = lambda: print('Selected:', gender_selection.value)
app.run()
```