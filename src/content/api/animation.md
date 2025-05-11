---
title: "Animation"
description: "Play a sequence of images or a GIF as an animated Sprite."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/animation.py"
category: "Animation"
sort: 0
---

# Animation

`Animation(name, fps=12, loop=True, autoplay=True, frame_times=None, **kwargs)`

Located in `ursina/prefabs/animation.py`

## Overview

`Animation` loads a series of image files or a GIF and displays them as frames on a `Sprite`. You can control playback speed with `fps`, choose whether it repeats, and start or stop it at any time.

## Constructor Arguments

| Argument      | Type            | Default   | Description                                                                                     |
|---------------|-----------------|-----------|-------------------------------------------------------------------------------------------------|
| `name`        | `str`           |           | Base filename or path. If files are `img_000.png`, `img_001.png`, use `"img"`; support GIFs.   |
| `fps`         | `int`           | `12`      | Frames per second. Faster FPS shortens total duration.                                         |
| `loop`        | `bool`          | `True`    | Whether to repeat when the sequence ends.                                                      |
| `autoplay`    | `bool`          | `True`    | If `True`, start playing immediately after creation.                                           |
| `frame_times` | `list[float]`   | `None`    | Custom display time for each frame (in seconds). Overrides `fps` if provided.                  |
| `**kwargs`    | `any`           |           | Any other `Sprite` parameters (position, scale, parent, etc.).                                 |

## Properties

| Property    | Description                                                                                |
|-------------|--------------------------------------------------------------------------------------------|
| `.duration` | Total playtime in seconds. Computed from `fps` or `frame_times`. Cannot be set directly.  |
| `.is_playing` | `bool`, whether the animation is currently running.                                      |

## Methods

| Method        | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| `start()`     | Begin playback from the first frame or resume if paused.               |
| `pause()`     | Temporarily stop at the current frame.                                  |
| `resume()`    | Continue playback from the paused frame.                                |
| `finish()`    | Advance to the last frame and stop.                                     |

## Example

```python
from ursina import *
from ursina.prefabs.animation import Animation

app = Ursina()

# load files named walk_000.png, walk_001.png, ...
walk = Animation('walk', fps=8, loop=True, autoplay=True, position=(0,1,0))

# pause after 2 seconds
invoke(walk.pause, delay=2)
# resume 1 second later
invoke(walk.resume, delay=3)

app.run()
```