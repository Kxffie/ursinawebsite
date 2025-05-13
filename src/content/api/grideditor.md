---
title: "GridEditor"
description: "Prefab for pixel-style grid editing and ASCII art creation in-engine."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/grid_editor.py"
category: "[12] Editor"
sort: 1
---

# GridEditor

`GridEditor(size=(32,32), palette=(' ', '#', '|', 'o'), canvas_color=color.white, edit_mode=True, **kwargs)`

Located in `ursina/prefabs/grid_editor.py`

## Overview

`GridEditor` is an interactive, in-game pixel/ASCII editor. It displays a 2D grid you can draw on, select regions, flood-fill, copy/paste, and undo. Great for level prototyping or quick texture tweaks without leaving your Ursina session.

## Constructor Arguments

| Argument        | Type           | Default                                  | Description                                                 |
|-----------------|----------------|------------------------------------------|-------------------------------------------------------------|
| `size`          | `(int, int)`   | `(32,32)`                                | Grid dimensions (width, height).                            |
| `palette`       | `tuple[str]`   | `(' ', '#', '|', 'o')`                   | Characters or symbols for each pixel/ASCII value.           |
| `canvas_color`  | `Color`        | `color.white`                            | Background color of the drawing canvas.                     |
| `edit_mode`     | `bool`         | `True`                                   | If `False`, editing shortcuts are disabled (read-only view).|
| `**kwargs`      | `any`          |                                          | Any other `Entity` parameters (position, scale, parent, etc.).|

## Properties

| Property       | Description                                              |
|----------------|----------------------------------------------------------|
| `.palette`     | Current drawing palette.                                 |
| `.edit_mode`   | Editing enabled (`True`) or disabled (`False`).         |

## Attributes

| Name                      | Description                                                           |
|---------------------------|-----------------------------------------------------------------------|
| `.w`, `.h`                | Width and height of the grid.                                         |
| `.canvas`                 | Underlying quad that displays the grid.                               |
| `.canvas_collider`        | Invisible box collider for mouse interaction.                         |
| `.brush_size`             | Current brush size in pixels.                                         |
| `.cursor`                 | Visual cursor that follows the mouse within the grid.                 |
| `.outline`                | Outline rectangle for selection mode.                                 |
| `.selection_matrix`       | 2D array tracking selected cells.                                     |
| `.undo_stack`, `.undo_index` | History for undo/redo operations.                                 |
| `.temp_paste_layer`       | Preview layer when pasting clipboard data.                            |
| `.hotreload_window_settings` | (Inherited from `Entity`) window parameters for editor UI.         |

## Methods

| Method                                         | Description                                                      |
|------------------------------------------------|------------------------------------------------------------------|
| `update()`                                     | Per-frame updates (cursor tracking, render).                    |
| `get_cursor_position()`                        | Return current grid cell under the mouse.                        |
| `draw(x, y)`                                   | Draw current palette character at grid cell `(x,y)`.            |
| `input(key)`                                   | Handle keyboard and mouse events for editing and shortcuts.      |
| `record_undo()`                                | Push current state onto the undo stack.                         |
| `floodfill(matrix, x, y, first=True)`          | Recursive flood-fill from `(x,y)`.                               |
| `copy()`                                       | Copy selected region to clipboard.                              |
| `enter_paste_mode()`                           | Begin paste mode with clipboard data.                           |
| `exit_paste_mode(discard=False)`               | End paste mode, optionally discard changes.                     |
| `clear_selection()`                            | Clear any active selection.                                     |
| `render_selection()`                           | Redraw the selection outline.                                   |

## Example

```python
from ursina import *
from ursina.prefabs.grid_editor import GridEditor

app = Ursina(borderless=False)

# a 32×32 pixel editor with default palette
editor = GridEditor(size=(32,32), palette=(' ', '#', '*', '@'), scale=8)
editor.position = (-.5, .5, 0)

# enable orthographic view for crisp pixels
camera.orthographic = True
camera.fov = 20

EditorCamera(rotation_speed=0)

app.run()
```