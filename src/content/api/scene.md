---
title: "Scene"
description: "Reference for the Scene singleton, which tracks all entities, handles scene‐wide fog and provides methods to clear or reset the scene."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scene.py"
category: "[2] Core Modules"
sort: 4
---

# Scene

`scene` is the global instance created by Ursina when you start the app. It maintains the list of all active entities and collidables, and offers scene‑wide settings such as fog.

## Overview

The `scene` object is your root for managing everything in the 3D world. It keeps track of every `Entity` that’s been added, lets you clear the scene, and configure global fog effects.

## Fields

| Name             | Type       | Description                                         |
|------------------|------------|-----------------------------------------------------|
| `.entities`      | `list`     | All entities currently in the scene.                |
| `.collidables`   | `set`      | Entities with active colliders for raycasts.        |

## Properties

| Property         | Description                                              |
|------------------|----------------------------------------------------------|
| `.fog_color`     | Color used when rendering exponential or linear fog.     |
| `.fog_density`   | Exponential fog density (when set to a single float).    |
| `.children`      | Alias for `.entities` (for hierarchical use cases).      |

## Methods

| Method                       | Description                                                                        |
|------------------------------|------------------------------------------------------------------------------------|
| `set_up()`                   | Internal initialization called by Ursina.                                          |
| `clear()`                    | Remove all entities from the scene (resets `.entities` and `.collidables`).        |
| `fog_density(value)`         | Configure fog. Pass a single float for exponential fog density, or a `(start, end)` tuple for linear fog. |

## Example Usage

```python
from ursina import *

app = Ursina()

# add a large ground plane
ground = Entity(model='plane', color=color.black, scale=100)

# allow WASD camera control
EditorCamera()

# add a skybox
sky = Sky()

def input(key):
    if key == 'l':
        # list all entity names
        for e in scene.entities:
            print(e.name)

    if key == 'd':
        # clear and spawn a cube
        scene.clear()
        Entity(model='cube', color=color.azure)

# exponential fog
scene.fog_density = 0.1

# or linear fog from 50 to 200 units
scene.fog_density = (50, 200)

app.run()
