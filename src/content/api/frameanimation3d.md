---
title: "FrameAnimation3d"
description: "Play a sequence of 3D models as a frame-by-frame animation."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/frame_animation_3d.py"
category: "[6] Animation"
sort: 1
---

# FrameAnimation3d

`FrameAnimation3d(name, fps=12, loop=True, autoplay=True, frame_times=None, auto_destroy=False, **kwargs)`

Located in `ursina/prefabs/frame_animation_3d.py`

## Overview

`FrameAnimation3d` loads a series of mesh files (e.g. `.obj`) and displays them one after another on an `Entity`. It functions like a flipbook in 3D, useful for simple character or object animations without using a full skeletal system.

## Constructor Arguments

| Argument         | Type            | Default    | Description                                                                                 |
|------------------|-----------------|------------|---------------------------------------------------------------------------------------------|
| `name`           | `str`           |            | Base filename or path prefix for model files (e.g. `"run_cycle_"` to match `run_cycle_000.obj`). |
| `fps`            | `int`           | `12`       | Frames per second.                                                                           |
| `loop`           | `bool`          | `True`     | Whether to repeat the animation when it ends.                                               |
| `autoplay`       | `bool`          | `True`     | If `True`, start playback immediately.                                                      |
| `frame_times`    | `list[float]`   | `None`     | Per-frame durations in seconds. Overrides `fps` if provided.                                 |
| `auto_destroy`   | `bool`          | `False`    | If `True`, destroy the entity when the sequence finishes (when not looping).                |
| `**kwargs`       | `any`           |            | Any other `Entity` parameters (`position`, `scale`, `parent`, etc.).                        |

## Properties

| Property         | Description                                                                             |
|------------------|-----------------------------------------------------------------------------------------|
| `.duration`      | Total playtime in seconds, derived from `fps` or `frame_times`.                         |
| `.current_frame` | Index of the currently visible frame (0-based).                                         |

## Methods

| Method          | Description                                                                  |
|-----------------|------------------------------------------------------------------------------|
| `start()`       | Begin playback from frame 0 or resume if paused.                            |
| `pause()`       | Stop playback at the current frame.                                          |
| `resume()`      | Continue playback from the paused frame.                                     |
| `finish()`      | Jump to the final frame and stop.                                            |
| `on_destroy()`  | Cleanup logic called if `auto_destroy=True` after sequence ends.             |

## Example

```python
from ursina import *
from ursina.prefabs.frame_animation_3d import FrameAnimation3d

app = Ursina()

# run_cycle_000.obj, run_cycle_001.obj, ... in your assets folder
anim = FrameAnimation3d(
    'run_cycle_', 
    fps=10, 
    loop=True, 
    position=(0,0,0),
    scale=1
)

app.run()
```