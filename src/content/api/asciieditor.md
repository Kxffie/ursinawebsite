---
title: "ASCIIEditor"
description: "GridEditor subclass for ASCII-art editing and display in-engine."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/grid_editor.py"
category: "[12] Editor"
sort: 3
---

# ASCIIEditor

`ASCIIEditor(size=(61,28), palette=(' ', '#', '|', 'A', '/', '\\', 'o', '_', '-', 'i', 'M', '.'), font='VeraMono.ttf', canvas_color=color.black, line_height=1.1, **kwargs)`

Located in `ursina/prefabs/grid_editor.py`

## Overview

`ASCIIEditor` lets you draw and display ASCII-art on a 2D grid. It uses a `Text` entity under the hood to render characters with a monospaced font. You can edit in real time or use it as a read-only viewer.

## Constructor Arguments

| Argument      | Type            | Default                                                                                  | Description                                                    |
|---------------|-----------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `size`        | `(int, int)`    | `(61,28)`                                                                                | Grid dimensions in columns and rows.                           |
| `palette`     | `tuple[str]`    | `(' ', '#', '|', 'A', '/', '\\', 'o', '_', '-', 'i', 'M', '.')`                          | Characters for each grid cell value.                           |
| `font`        | `str`           | `'VeraMono.ttf'`                                                                         | Path or name of a monospaced font.                             |
| `canvas_color`| `Color`         | `color.black`                                                                            | Background color behind the text.                              |
| `line_height` | `float`         | `1.1`                                                                                    | Vertical spacing multiplier between lines of text.             |
| `**kwargs`    | `any`           |                                                                                          | Any other `GridEditor`/`Entity` parameters (position, scale). |

## Attributes

| Name           | Description                                                   |
|----------------|---------------------------------------------------------------|
| `.text_entity` | Underlying `Text` entity that displays the ASCII grid.       |
| `.scale`       | `(width, height)` of the canvas in scene units, matching text dimensions. |

## Methods

| Method       | Description                                                          |
|--------------|----------------------------------------------------------------------|
| `render()`   | Rebuild the ASCII string from the grid data and update `Text`.       |
| `input(key)` | Handle navigation, drawing, and shortcut keys for editing.           |

## Example

```python
from ursina import *
from ursina.prefabs.grid_editor import ASCIIEditor

app = Ursina(borderless=False)

# position at center, small on-screen
editor = ASCIIEditor(
    size=(61,28),
    palette=(' ', '#', '|', 'A', '/', '\\', 'o', '_', '-', 'i', 'M', '.'),
    font='VeraMono.ttf',
    canvas_color=color.black,
    line_height=1.1,
    scale=.1,
    x=0
)

camera.orthographic = True
camera.fov = 15
EditorCamera(rotation_speed=0)

app.run()
```