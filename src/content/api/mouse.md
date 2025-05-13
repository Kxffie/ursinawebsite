---
title: "Mouse"
description: "Reference for the global mouse object, which tracks cursor position, button state, collisions and input routing."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/mouse.py"
category: "[2] Core Modules"
sort: 1
---

# Mouse

`mouse` is the singleton instance provided by Ursina when you import it. It extends input handling to track cursor movement, clicks, collisions and hover state.

## Overview

The `mouse` object centralizes all pointer information:

- Absolute and delta movement  
- Button down/up states  
- Drag distances  
- Hovered entity detection via raycasts  
- Double‑click timing and position  

You can lock or hide the cursor, adjust collision targets, and read/write all properties at runtime.

## Fields

| Name                        | Type        | Description                                                                    |
|-----------------------------|-------------|--------------------------------------------------------------------------------|
| `.enabled`                  | `bool`      | Master switch for mouse updates.                                               |
| `.visible`                  | `bool`      | Show or hide the system cursor.                                                |
| `.locked`                   | `bool`      | Confine cursor to window center (for FPS controls).                            |
| `.position`                 | `Vec3`      | Current cursor position in world or UI space.                                  |
| `.delta`                    | `Vec3`      | Movement since last button‑press.                                              |
| `.delta_drag`               | `Vec3`      | Movement between left‑button down and up.                                      |
| `.velocity`                 | `Vec3`      | Movement per frame.                                                            |
| `.moving`                   | `bool`      | True when the cursor is in motion.                                             |
| `.prev_click_time`          | `float`     | Timestamp of last click.                                                       |
| `.prev_click_pos`           | `Vec3`      | Cursor position at last click.                                                 |
| `.double_click_distance`    | `float`     | Max move distance to still count as double‑click.                              |
| `.double_click_movement_limit` | `float`  | Threshold movement to interrupt double‑click detection.                        |
| `.hovered_entity`           | `Entity`    | Closest entity under cursor with a collider.                                   |
| `.left`, `.right`, `.middle`| `bool`      | Button down states.                                                            |
| `.traverse_target`          | `Entity`    | Scene or parent under which to raycast for collisions.                         |
| `.raycast`                  | `bool`      | Enable or disable pointer raycasts.                                            |
| `.collisions`               | `list`      | List of hits from the last raycast.                                            |

## Properties

| Property         | Description                                                      |
|------------------|------------------------------------------------------------------|
| `.x`, `.y`       | Shortcut to cursor coordinates.                                  |
| `.locked`        | Get/set lock state.                                              |
| `.visible`       | Get/set cursor visibility.                                       |
| `.normal`        | Surface normal at hit point (local space).                      |
| `.world_normal`  | Surface normal at hit point (world space).                     |
| `.point`         | Hit position on collider (local space).                        |
| `.world_point`   | Hit position on collider (world space).                       |
| `.is_outside`    | True if cursor is outside window or no collision detected.      |

## Methods

| Method                       | Description                                                          |
|------------------------------|----------------------------------------------------------------------|
| `input(key)`                 | Internal handler for mouse button events.                            |
| `update()`                   | Update cursor position, delta, velocity and collisions each frame.    |
| `find_collision()`           | Perform raycast against `.traverse_target` to update `.collisions`.   |
| `unhover_everything_not_hit()` | Clear hover state on entities not under the cursor.                 |

## Example Usage

```python
from ursina import *
from ursina import Ursina, Button, mouse

app = Ursina()

# create a button in the scene
Button(parent=scene, text='Click me')

def input(key):
    if key == 'space':
        # toggle cursor lock and print velocity
        mouse.locked = not mouse.locked
        print('cursor velocity:', mouse.velocity)

# show a custom cursor
Cursor()

app.run()
