---
title: "HotReloader"
description: "Prefab for live-reloading code, assets and shaders in the editor."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/hot_reloader.py"
category: "[12] Editor"
sort: 0
---

# HotReloader

`HotReloader(path=__file__, **kwargs)`

Located in `ursina/prefabs/hot_reloader.py`

## Overview

`HotReloader` is an `Entity` subclass that watches your script and asset folders and reloads them at runtime. Press the listed hotkeys to trigger code, texture, model or shader reloads without restarting the application. Enable or disable automatic watching with F9.

## Constructor Arguments

| Argument | Type   | Default  | Description                               |
|----------|--------|----------|-------------------------------------------|
| `path`   | `str`  | `__file__` | File or folder to watch for changes.      |
| `**kwargs` | `any` |          | Any other `Entity` parameters (position, scale, etc.). |

## Attributes

| Name                         | Description                                                      |
|------------------------------|------------------------------------------------------------------|
| `.path`                      | Path to watch (converted to `pathlib.Path`).                    |
| `.hotreload`                 | `bool`, whether automatic watching is active. Toggle with F9.    |
| `.hotkeys`                   | Mapping of keys to reload functions.                             |
| `.hotreload_window_settings` | Dict controlling the small overlay window (size, position, etc.).|

### Default hotkeys

| Key       | Action                     |
|-----------|----------------------------|
| `ctrl+r`  | Reload code and reset camera |
| `f5`      | Reload code                |
| `f6`      | Reload textures            |
| `f7`      | Reload models              |
| `f8`      | Reload shaders             |
| `f9`      | Toggle automatic watching  |

## Methods

| Method                               | Description                                                   |
|--------------------------------------|---------------------------------------------------------------|
| `input(key)`                         | Listen for hotkey presses.                                     |
| `update()`                           | Called every frame; handles file watching if enabled.          |
| `get_source_code()`                  | Read and return the current source file.                       |
| `toggle_hotreloading()`              | Turn automatic watching on or off.                             |
| `reload_code(reset_camera=True)`     | Re-import the main script; optionally reset the camera.        |
| `reload_textures()`                  | Reload all texture files.                                      |
| `reload_models()`                    | Reload all model assets.                                       |
| `reload_shaders()`                   | Recompile and reload shaders.                                  |

## Example

```python
from ursina import *
from ursina.prefabs.hot_reloader import HotReloader

app = Ursina()

# watch this file and assets for changes
HotReloader(path=__file__, position=(.8,.45), scale=.1)

# your game code here...
# press F5 to reload code, F6 models, F7 textures, F8 shaders, F9 auto on/off

app.run()
```