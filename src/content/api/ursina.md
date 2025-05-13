---  
title: "Ursina"  
description: "Reference for the Ursina application singleton, which boots and manages the game window, input routing, update loop and more."  
pubDate: "2025-05-08"  
source: "https://github.com/pokepetter/ursina/blob/master/ursina/main.py"  
category: "[1] Basics"  
sort: 0  
---  

# Ursina  

`Ursina(title='ursina', icon='textures/ursina.ico', borderless=False, fullscreen=False, size=None, forced_aspect_ratio=None, position=None, vsync=True, editor_ui_enabled=True, window_type='onscreen', development_mode=True, render_mode=None, show_ursina_splash=False, use_ingame_console=False, **kwargs)`  

Located in `ursina/main.py`

## Overview  

The `Ursina` class is the core singleton of the engine. It extends Panda3D’s `ShowBase`, sets up the window, input routing, scene and camera, then drives the main update loop. You should only ever instantiate it once.  

## Constructor Arguments  

| Argument               | Type               | Default         | Description                                                                                                        |
|------------------------|--------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
| `title`                | `str`              | `'ursina'`      | Window title                                                                                                       |
| `icon`                 | `str`              | `'textures/ursina.ico'` | Path to window icon                                                                                              |
| `borderless`           | `bool`             | `False`         | Remove window border                                                                                               |
| `fullscreen`           | `bool`             | `False`         | Start in fullscreen                                                                                                 |
| `size`                 | `tuple(int,int)`   | `None`          | Window dimensions (width, height)                                                                                   |
| `forced_aspect_ratio`  | `float`            | `None`          | Lock to a specific aspect ratio                                                                                    |
| `position`             | `tuple(int,int)`   | `None`          | Window position on screen                                                                                          |
| `vsync`                | `bool`             | `True`          | Enable vertical sync                                                                                               |
| `editor_ui_enabled`    | `bool`             | `True`          | Show built‑in editor UI                                                                                            |
| `window_type`          | `str`              | `'onscreen'`    | `'onscreen'`, `'offscreen'` or `'none'`                                                                             |
| `development_mode`     | `bool`             | `True`          | Enable dev features (hot reload, splash screen, console)                                                            |
| `render_mode`          | `str`              | `None`          | Panda3D render pipeline (e.g. `'wireframe'`, `'shaded'`)                                                            |
| `show_ursina_splash`   | `bool`             | `False`         | Display the Ursina splash screen on start                                                                           |
| `use_ingame_console`   | `bool`             | `False`         | Provide an in‑game text console                                                                                     |
| `**kwargs`             | `any`              |                 | Passed through for advanced settings (e.g. `gltf_no_srgb`)                                                           |

## Methods  

| Method                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `.step()`              | Advance one frame of the update loop manually (instead of `app.run()`).                         |
| `.run(info=True)`      | Start the main loop. Prints OS & dev‑mode if `info` is `True`.                                   |
| `.input(key, is_raw)`  | Internal key‑down handler. Routes to entities, scripts and main `input` function.               |
| `.input_up(key, is_raw)`   | Internal key‑up handler.                                                                      |
| `.input_hold(key, is_raw)` | Internal key‑repeat handler.                                                                  |
| `.text_input(key)`     | Internal text‑entry handler. Routes to entities, scripts and main `text_input`.                 |

## Example Usage  

```python
from ursina import *
# create the one and only application instance
app = Ursina(development_mode=False, use_ingame_console=True)

# define global input handler
def input(key):
    print('you pressed', key)

# start the engine
app.run()
