---
title: "Light"
description: "Reference for the Light base class and its subclasses (DirectionalLight, PointLight, etc.), which provide scene illumination and shadow control."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/lights.py"
category: "[3] Graphics"
sort: 4
---

# Light

`Light(**kwargs)`

Located in `ursina/lights.py`

## Overview

`Light` is an `Entity` subclass that represents a light source in your scene. You can set its color, enable shadows (for those light types that support them), and control its orientation. Ursina provides built‑in subclasses like `DirectionalLight`, `PointLight` and `AmbientLight`.

## Constructor Arguments

Any `Entity` keyword argument is accepted (position, rotation, parent, etc.), plus:

| Argument     | Type    | Default | Description                                 |
|--------------|---------|---------|---------------------------------------------|
| `color`      | `Color` | `color.white` | Light color and intensity.              |
| `shadows`    | `bool`  | `False` | Enable shadow casting (only for certain types). |

## Properties

| Property    | Description                                         |
|-------------|-----------------------------------------------------|
| `.color`    | Get/set the light’s color (tint and intensity).     |

## Methods

Light itself adds no new methods beyond those inherited from `Entity`. Its subclasses may include:

- `DirectionalLight(shadows=True)` – infinite directional light with optional shadows  
- `PointLight(...)` – point source light  
- `AmbientLight(...)` – scene‑wide ambient illumination  

## Example Usage

```python
from ursina import *
from ursina.shaders import lit_with_shadows_shader

app = Ursina()
EditorCamera()

# create a floor and a cube that receive shadows
floor = Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
cube  = Entity(model='cube', y=1, color=color.light_gray, shader=lit_with_shadows_shader)

# directional sunlight with shadows
light = DirectionalLight(shadows=True)
light.color = color.white
light.look_at(Vec3(1, -1, 1))

# an unlit cube (ignores all lights)
unlit = Entity(model='cube', x=-2, y=1, unlit=True, color=color.light_gray)

app.run()
