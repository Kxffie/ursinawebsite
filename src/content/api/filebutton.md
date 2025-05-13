---
title: "FileButton"
description: "Button representing a file or folder entry."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/file_browser.py"
category: "[11] UI"
sort: 13
---

# FileButton

`FileButton(load_menu, path, **kwargs)`

Located in `ursina/prefabs/file_browser.py`

## Overview

Selectable UI button for a single file or folder. Double-click to open folders.

## Key Properties

- `.path`
- `.selected`  

## Methods

- `on_click()`
- `on_double_click()`

## Example

```python
from ursina import *
app = Ursina()
fb = FileBrowser(enabled=True)
fb.on_submit = lambda paths: print(paths)
app.run()
```