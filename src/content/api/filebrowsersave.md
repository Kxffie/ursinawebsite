---
title: "FileBrowserSave"
description: "Save dialog with filename input and overwrite prompt."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/file_browser_save.py"
category: "UI"
sort: 14
---

# FileBrowserSave

`FileBrowserSave(**kwargs)`

Located in `ursina/prefabs/file_browser_save.py`

## Overview

Extends `FileBrowser` with a `TextField` for entering the save filename, and a confirm dialog.

## Key Properties

- `.file_name_field` — `InputField` for name  
- `.file_type` — extension filter  
- `.last_saved_file`  

## Methods

- `on_submit(path)` — called when saving  
- `on_enable()` / `on_disable()`

## Example

```python
from ursina import *
from ursina.prefabs.file_browser_save import FileBrowserSave

app = Ursina()
wp = FileBrowserSave(file_type='.*')
wp.data = '{"level":4,"name":"Link"}'
wp.enabled=False

def input(key):
    if key=='tab': wp.enabled = not wp.enabled

app.run()
```