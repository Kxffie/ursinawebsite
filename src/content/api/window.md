---
title: "Window"
description: "Reference for the Window class, which manages the application window, its properties, editor UI overlay and runtime stats."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/window.py"
category: "[2] Core Modules"
sort: 2
---

# Window

`window` is created internally when you instantiate `Ursina`. It extends Panda3D’s `WindowProperties` to configure windowed/fullscreen modes, aspect ratio, editor UI and on‑screen stats.

## Overview

`Window` handles all window parameters (title, icon, size, position, vsync, render mode) and builds the small editor overlay when in development mode. It also tracks monitors for fullscreen sizing and restores windowed size when exiting fullscreen.

## Fields

| Name                       | Description                                                                                                            |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|
| `.title`                   | Window title string.                                                                                                   |
| `.icon`                    | Path to window icon.                                                                                                   |
| `.monitors`                | List of available display monitors (via screeninfo).                                                                   |
| `.main_monitor`            | Primary monitor object (used for fullscreen sizing).                                                                    |
| `.monitor_index`           | Index of the current monitor in `.monitors`.                                                                            |
| `.windowed_size`           | Size when in windowed mode.                                                                                             |
| `.fullscreen_size`         | Size when in fullscreen mode.                                                                                            |
| `.windowed_position`       | Stored windowed position to restore after fullscreen.                                                                    |
| `.show_ursina_splash`      | If True, display the Ursina splash screen on startup.                                                                    |
| `.top`, `.bottom`, `.center` | Precomputed UI‑space Vec2 positions for overlay layout.                                                                  |
| `.forced_aspect_ratio`     | If set, locks window to that aspect ratio.                                                                               |
| `.always_on_top`           | If True, keep window above other OS windows.                                                                              |
| `.vsync`                   | Vertical‑sync flag (can’t change during play).                                                                            |
| `.color`                   | Background clear color.                                                                                                  |
| `.render_modes`            | Tuple of available render modes (`'default'`, `'wireframe'`, etc.).                                                       |
| `.render_mode`             | Current render mode.                                                                                                     |
| `.editor_ui`               | Root Entity for the editor overlay (created in development mode).                                                         |
| `.input_entity`            | Invisible Entity that listens for window‑level key shortcuts (F10, F11, F12, etc.).                                      |
| `.exit_button`, `.fps_counter`, `.entity_counter`, `.collider_counter` | UI elements for close button and runtime stats.                                   |
| `.cog_menu`, `.cog_button` | ButtonList and Button that open the editor cog menu for hot‑reloading, render‑mode toggles, etc.                         |

## Properties

| Property               | Description                                                    |
|------------------------|----------------------------------------------------------------|
| `.left`, `.right`      | UI‑space Vec2 at horizontal extremes.                          |
| `.top_left`, `.top_right`, `.bottom_left`, `.bottom_right` | Corner positions in UI space.           |
| `.position`            | Window position on the desktop.                                |
| `.size`                | Current window size.                                           |
| `.aspect_ratio`        | Read‑only width/height ratio.                                  |
| `.forced_aspect_ratio` | Get/set forced aspect ratio.                                   |
| `.render_mode`         | Get/set current render mode.                                   |
| `.title`, `.icon`      | Get/set title and icon.                                        |
| `.borderless`          | Get/set borderless flag.                                       |
| `.fullscreen`          | Get/set fullscreen flag.                                       |
| `.always_on_top`       | Get/set always-on-top.                                         |
| `.color`               | Get/set background clear color.                                |
| `.vsync`               | Get/set vsync (window recreation required).                    |

## Methods

| Method                                                                                          | Description                                                                                   |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `ready(title, icon, borderless, fullscreen, size, forced_aspect_ratio, position, vsync, editor_ui_enabled, window_type, render_mode)` | Internal setup of PRC data, sizing and monitor detection.             |
| `apply_settings()`                                                                              | Apply runtime changes (aspect ratio, vsync, color, render mode) and center on screen.         |
| `center_on_screen()`                                                                            | Move window to the center of the current monitor.                                             |
| `make_editor_gui()`                                                                             | Build the editor overlay UI (exit button, counters, cog menu) when in development mode.        |
| `update_aspect_ratio()`                                                                         | Handler for OS aspect‑ratio changes (recomputes UI positions).                                 |
| `next_render_mode()`                                                                            | Cycle through `.render_modes`.                                                                 |
| `toggle_editor_camera()`                                                                        | Enable or disable the built‑in `EditorCamera`.                                                 |
| `window_input(key)`                                                                             | Internal callback for F‑key shortcuts (F10–F12).                                              |

## Example Usage

```python
from ursina import *

app = Ursina(title='My Game', window_type='onscreen')

# toggle fullscreen and borderless via hotkeys:
#   F11 toggles fullscreen
#   F10 cycles render modes
#   F12 shows/hides the editor overlay

# center the window explicitly
window.center_on_screen()

# change window size and force 16:9 aspect
window.size = Vec2(1280, 720)
window.forced_aspect_ratio = 16/9

app.run()
