---
title: "SpriteSheetAnimation"
description: "Play named animations from a tiled sprite sheet texture."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/sprite_sheet_animation.py"
category: "[6] Animation"
sort: 2
---

# SpriteSheetAnimation

`SpriteSheetAnimation(texture, animations, tileset_size=[4,1], fps=12, model='quad', autoplay=True, **kwargs)`

Located in `ursina/prefabs/sprite_sheet_animation.py`

## Overview

`SpriteSheetAnimation` lets you define multiple named animations on a single texture atlas. You supply a dictionary of animation names mapping to start/end tile coordinates, and then call `play_animation(name)` to switch between them at runtime.

## Constructor Arguments

| Argument         | Type                   | Default          | Description                                                                          |
|------------------|------------------------|------------------|--------------------------------------------------------------------------------------|
| `texture`        | `str` or `Texture`     |                  | Path or `Texture` object for the sprite sheet.                                       |
| `animations`     | `dict[str, ((int,int),(int,int))]` |  | Mapping of animation names to `(start_tile, end_tile)` pairs.                         |
| `tileset_size`   | `(int,int)`            | `[4,1]`          | Number of columns and rows in the sprite sheet.                                      |
| `fps`            | `int`                  | `12`             | Frames per second for all animations.                                                |
| `model`          | `str`                  | `'quad'`         | Mesh to which the texture is applied.                                                |
| `autoplay`       | `bool`                 | `True`           | If `True`, automatically start the first animation.                                  |
| `**kwargs`       | `any`                  |                  | Any other `Entity` parameters (`position`, `scale`, `parent`, etc.).                 |

## Properties

_None_

## Methods

| Method                         | Description                                                           |
|--------------------------------|-----------------------------------------------------------------------|
| `play_animation(animation_name)` | Switch to and play the specified named animation, looping by default. |

## Example

```python
from ursina import *
from ursina.prefabs.sprite_sheet_animation import SpriteSheetAnimation

app = Ursina()

# define animations on a 4×4 sprite sheet
player = SpriteSheetAnimation(
    texture='sprite_sheet',
    tileset_size=(4,4),
    fps=6,
    animations={
        'idle'       : ((0,0), (0,0)),  # single-frame idle
        'walk_down'  : ((0,3), (3,3)),  # bottom row
        'walk_left'  : ((0,2), (3,2)),
        'walk_right' : ((0,1), (3,1)),
        'walk_up'    : ((0,0), (3,0)),
    },
    scale=2
)

def input(key):
    if key == 'w': player.play_animation('walk_up')
    if key == 's': player.play_animation('walk_down')
    if key == 'a': player.play_animation('walk_left')
    if key == 'd': player.play_animation('walk_right')

camera.orthographic = True
camera.fov = 10

app.run()
```