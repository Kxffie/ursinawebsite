---
title: "FileBrowser"
description: "Modal file selector UI."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/file_browser.py"
category: "UI"
sort: 12
---

# FileBrowser

`FileBrowser(file_button_class=FileButton, selection_limit=1, start_path=None, file_types=None, **kwargs)`

Located in `ursina/prefabs/file_browser.py`

## Overview

Displays a navigable file list. Use arrow keys or click to select. Fires `on_submit(paths)` callback.

## Key Properties

- `.file_types` — list of regex filters  
- `.selection` — selected file paths  

## Methods

- `input(key)`
- `on_enable()`
- `folder_up()`
- `open(path=None)`
- `close()`

## Example

```python
from ursina import *
app = Ursina()

fb = FileBrowser(file_types=('.*',), enabled=False)
fb.on_submit = lambda paths: print('Selected:', paths)

def input(key):
    if key=='tab': fb.enabled = not fb.enabled

app.run()
```