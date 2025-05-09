---
title: "Application"
description: "Reference for the global Application singleton, which manages engine state, timing, asset folders, hot‑reloading and the main loop."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/application.py"
category: "Core Modules"
sort: 3
---

# Application

`application` is created when you call `Ursina()`. It orchestrates the update loop, time scaling, pause/resume, asset paths and development‑mode features like hot‑reloading.

## Overview

The `application` singleton holds global engine settings and runtime state. It tracks whether the game is paused, scales the delta‑time for slow‑motion effects, manages folders for assets and scripts, and provides methods to pause, resume or quit the engine. When in development mode, it also wires up the hot‑reloader.

## Fields

| Name                         | Type               | Description                                                             |
|------------------------------|--------------------|-------------------------------------------------------------------------|
| `.paused`                    | `bool`             | True when the update loop is suspended.                                 |
| `.time_scale`                | `float`            | Multiplier applied to unscaled delta‑time (`time.dt_unscaled`).         |
| `.calculate_dt`              | `bool`             | If True, compute `time.dt` each frame.                                  |
| `.sequences`                 | `list`             | Active animation or appear sequences.                                   |
| `.trace_entity_definition`   | `bool`             | If True, record entity creation stack traces.                           |
| `.package_folder`            | `Path`             | Root folder of the Ursina package.                                      |
| `.development_mode`          | `bool`             | Enables editor UI, splash screen and hot‑reloading.                     |
| `.window_type`               | `str`              | Type of window used (`'onscreen'`, `'offscreen'`, `'none'`).            |
| `.hot_reloader`              | `HotReloader` or None | Object that watches files and reloads on change (dev mode only).      |
| `.scenes_folder`, `.scripts_folder`, `.fonts_folder`, `.compressed_textures_folder`, `.compressed_models_folder` | `Path` | Asset subfolders for organized content. |

## Properties

| Property            | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| `.paused`           | Get/set pause state.                                              |
| `.time_scale`       | Get/set global time scale.                                        |
| `.development_mode` | Get/set whether development features are enabled.                 |

## Methods

| Method                              | Description                                                                    |
|-------------------------------------|--------------------------------------------------------------------------------|
| `pause()`                           | Suspend the update loop (sets `.paused = True`).                              |
| `resume()`                          | Resume updates (sets `.paused = False`).                                       |
| `quit()`                            | Stop the main loop and close the window.                                       |
| `load_settings(path=...)`           | Execute a Python settings file to override defaults (window, input, etc.).     |

## Example Usage

```python
from ursina import Ursina, application

app = Ursina(development_mode=True)

# slow down time to half‑speed
application.time_scale = 0.5

# pause the game when 'p' is pressed
def input(key):
    if key == 'p':
        if application.paused:
            application.resume()
        else:
            application.pause()

# quit on escape
def update():
    if application.paused:
        print('Game is paused')

app.run()
