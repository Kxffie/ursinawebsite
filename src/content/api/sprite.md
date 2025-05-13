---
title: "Sprite"
description: "Reference for the Sprite prefab, a simple 2D quad that automatically sizes to its texture."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/sprite.py"
category: "[1] Basics"
sort: 3
---

# Sprite

`Sprite(texture=None, ppu:int=None, **kwargs)`

Located in `ursina/prefabs/sprite.py`

## Overview

`Sprite` is a subclass of `Entity` with a quad model and automatic scaling so that one pixel in the texture equals one world unit (pixels‑per‑unit).

## Constructor Arguments

| Argument   | Type      | Default | Description                                 |
|------------|-----------|---------|---------------------------------------------|
| `texture`  | `str`     | `None`  | Name or path of the texture to apply.       |
| `ppu`      | `int`     | `None`  | Pixels‑per‑unit. Overrides `Sprite.ppu`.    |
| `**kwargs` | `any`     |         | Any other `Entity` attributes (position, color, parent, etc.). |

## Class Fields

| Name       | Type    | Default  | Description                              |
|------------|---------|----------|------------------------------------------|
| `Sprite.ppu` | `int` | `100`    | Default pixels‑per‑unit for all sprites. |
| `.model`     | `str` | `'quad'` | The mesh used (always a quad).           |
| `.texture`   | `str` | `texture`| The texture assigned.                    |
| `.ppu`       | `int` | `ppu \|\| Sprite.ppu` | Effective pixels‑per‑unit.    |

## Methods

### `update_scale()`

Recompute the entity’s scale based on its texture size and the current `ppu`. Called once at init. Call again if you change `.texture` or `.ppu`.

## Example Usage

```python
from ursina import *

app = Ursina()
camera.orthographic = True
camera.fov = 1

# change default pixels‑per‑unit
Sprite.ppu = 16

# disable texture filtering for pixel‑perfect look
Texture.default_filtering = False

# create a brick sprite at origin
s = Sprite('brick', filtering=False)

app.run()
