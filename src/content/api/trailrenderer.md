---
title: "TrailRenderer"
description: "Draw a fading trail behind a moving Entity using a 3D pipe mesh."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/trail_renderer.py"
category: "Animation"
sort: 4
---

# TrailRenderer

`TrailRenderer(size=[1, .01], segments=8, min_spacing=.05, fade_speed=0, color_gradient=[color.white, color.clear], **kwargs)`

Located in `ursina/prefabs/trail_renderer.py`

## Overview

`TrailRenderer` attaches to an Entity and leaves a smooth, fading ribbon in its wake. It uses a `Pipe` mesh with adjustable thickness, color gradient and fade speed.

## Constructor Arguments

| Argument         | Type                  | Default                                  | Description                                                      |
|------------------|-----------------------|------------------------------------------|------------------------------------------------------------------|
| `size`           | `list[float]`         | `[1, .01]`                               | Width and thickness of the trail cross-section.                 |
| `segments`       | `int`                 | `8`                                      | Number of radial segments in the pipe mesh.                     |
| `min_spacing`    | `float`               | `.05`                                    | Minimum distance moved before adding a new segment.             |
| `fade_speed`     | `float`               | `0`                                      | How fast old segments disappear (units per second).             |
| `color_gradient` | `list[Color]`         | `[color.white, color.clear]`             | Colors along the trail from start to end.                       |
| `**kwargs`       | `any`                 |                                          | Other `Entity` parameters (`parent`, `position`, `scale`, etc.).|

## Attributes

| Name              | Description                                                                              |
|-------------------|------------------------------------------------------------------------------------------|
| `.renderer`       | `Entity` holding a `Pipe` model that displays the trail.                                |
| `.segments`       | Number of radial segments around the pipe.                                               |
| `.update_step`    | Distance threshold for adding new segments (same as `min_spacing`).                     |
| `.min_spacing`    | Minimum movement before spawning the next trail segment.                                 |
| `.fade_speed`     | Speed at which older segments fade out and are removed.                                  |
| `.on_enable`      | Callback to enable the internal renderer.                                                |
| `.on_disable`     | Callback to disable the internal renderer.                                               |

## Methods

| Method       | Description                                                   |
|--------------|---------------------------------------------------------------|
| `update()`   | Called each frame to check movement and extend the trail.    |
| `on_destroy()` | Cleanup the renderer and any remaining segments.            |

## Example

```python
from ursina import *
from ursina.prefabs.trail_renderer import TrailRenderer

app = Ursina(vsync=False)
window.color = color.black
mouse.visible = False

# A player entity that follows the mouse
player = Entity(z=1)
player.graphics = Entity(parent=player, scale=.1, model='circle')

# Attach one or more trail renderers to the player
trails = []
trails.append(
    TrailRenderer(
        size=[1, 1],
        segments=8,
        min_spacing=0.05,
        fade_speed=1,
        parent=player,
        color_gradient=[color.magenta, color.cyan.tint(-.5), color.clear]
    )
)

def update():
    # smooth follow the mouse
    player.position = lerp(player.position, mouse.position * 10, time.dt * 4)

def input(key):
    if key == 'escape':
        for t in trails:
            t.enabled = not t.enabled
    if key == 'space':
        destroy(player)

EditorCamera()
Entity(model=Grid(8,8), rotation_x=90, color=color.gray, y=-3, scale=8)

app.run()
```