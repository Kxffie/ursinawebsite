---
title: "PixelEditor"
description: "GridEditor subclass for in-engine pixel/texture editing."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/grid_editor.py"
category: "Editor"
sort: 2
---

# PixelEditor

`PixelEditor(texture, palette=(color.black, color.white, color.light_gray, color.gray, color.red, color.orange, color.yellow, color.lime, color.green, color.turquoise, color.cyan, color.azure, color.blue, color.violet, color.magenta, color.pink), **kwargs)`

Located in `ursina/prefabs/grid_editor.py`

## Overview

`PixelEditor` extends `GridEditor` to load, edit, and save actual `Texture` objects. Each palette entry maps to a color in the texture’s pixel data. Useful for quick texture tweaks, level-art prototyping, or sprite work without leaving Ursina.

## Constructor Arguments

| Argument      | Type          | Default (if omitted)                                                                                       | Description                                                             |
|---------------|---------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `texture`     | `Texture`     | N/A                                                                                                         | The texture to edit. May be a new blank `Texture` or an existing one.   |
| `palette`     | `tuple[Color]`| `(color.black, color.white, color.light_gray, color.gray, color.red, color.orange, color.yellow, ...)`      | Colors available for painting.                                          |
| `**kwargs`    | `any`         |                                                                                                             | Any other `GridEditor`/`Entity` parameters (`position`, `scale`, etc.).|

## Properties

| Property    | Description                              |
|-------------|------------------------------------------|
| `.texture`  | Currently loaded `Texture` instance.     |

## Methods

| Method                                                      | Description                                                                           |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------|
| `set_texture(texture, render=True, clear_undo_stack=True)`  | Load a new `Texture` and re-render the grid.                                          |
| `draw(x, y)`                                                | Paint the selected palette color at grid cell `(x,y)`.                                |
| `render()`                                                  | Update the visual canvas from the current texture data.                               |
| `save()`                                                    | Write modified pixel data back into the `Texture` object.                             |

## Example

```python
from ursina import *
from ursina.prefabs.grid_editor import PixelEditor
from PIL import Image

app = Ursina(borderless=False)

# create a blank 32×32 RGBA texture
blank = Texture( Image.new('RGBA', (32,32), (0,0,0,1)) )

# start a pixel editor with that texture
editor = PixelEditor(
    parent=scene,
    texture=blank,
    scale=10
)

# or load an existing texture from assets
brick_tex = load_texture('brick')
editor.set_texture(brick_tex)

# enable orthographic for crisp pixels
camera.orthographic = True
camera.fov = 15
EditorCamera(rotation_speed=0)

app.run()
```