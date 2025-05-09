---
title: "Camera"
description: "Reference for the Camera singleton, which manages 3D and UI cameras, projection mode, clipping and post‑processing."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/camera.py"
category: "Core Modules"
sort: 0
---

# Camera

`camera` is instantiated automatically when you import Ursina. It inherits from `Entity` and lives under `scene`.

## Overview

The global `camera` object provides both the 3D view and a UI camera. You can switch between perspective and orthographic projection, adjust field of view and clipping planes, and apply fullscreen post‑processing shaders.

## Fields

| Name                     | Type      | Description                                                                                   |
|--------------------------|-----------|-----------------------------------------------------------------------------------------------|
| `.parent`                | `Entity`  | Always `scene`.                                                                                |
| `.name`                  | `str`     | `"camera"`.                                                                                    |
| `.eternal`               | `bool`    | `True`—never destroyed on scene clear.                                                         |
| `.ui_size`               | `int`     | Size of the UI coordinate space.                                                               |
| `.perspective_lens_node` | `LensNode`| Panda3D node for perspective projection.                                                       |
| `.orthographic_lens_node`| `LensNode`| Panda3D node for orthographic projection.                                                      |
| `.ui`                    | `Entity`  | Root UI entity (parented to `camera.ui`).                                                      |
| `.overlay`               | `Entity`  | Fullscreen quad for post‑processing (under UI).                                                |

## Properties

| Property             | Description                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------|
| `.orthographic`      | Get/set orthographic mode (`True` or `False`).                                                |
| `.fov`               | Get/set horizontal field of view.                                                              |
| `.clip_plane_near`   | Get/set near clipping plane distance.                                                          |
| `.clip_plane_far`    | Get/set far clipping plane distance.                                                           |
| `.aspect_ratio`      | Read‑only current window aspect ratio.                                                         |
| `.shader`            | Apply a post‑processing `Shader` to the overlay quad.                                          |

## Methods

| Method                                  | Description                                                                                          |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| `set_up()`                              | Initialize Panda3D lens nodes, display regions and UI camera. Called internally by Ursina.           |
| `set_shader_input(name, value)`         | Send a uniform or texture to the post‑processing shader.                                              |

## Example Usage

```python
from ursina import *
from ursina import Ursina, camera, Entity, EditorCamera
from ursina.shaders import camera_grayscale_shader

app = Ursina()

# switch to orthographic projection
camera.orthographic = True

# spawn some colored quads at different depths
for x in (-2, 0, 2):
    e = Entity(model='quad', color=color.random_color(), position=(x, 0, 10))

# add an editor camera for free movement
EditorCamera()

# apply a grayscale post‑processing shader
camera.shader = camera_grayscale_shader

app.run()
