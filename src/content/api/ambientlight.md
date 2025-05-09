---
title: "AmbientLight"
description: "Ambient light that illuminates all objects equally, without direction or shadows."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/lights.py"
category: "Graphics"
sort: 7
---

# AmbientLight

`AmbientLight(**kwargs)`

Located in `ursina/lights.py`

## Overview

`AmbientLight` provides a constant base illumination to the entire scene. It ensures that no surface is completely dark, regardless of other light sources.

## Constructor Arguments

| Argument   | Type    | Default | Description                                       |
|------------|---------|---------|---------------------------------------------------|
| `**kwargs` | `any`   |         | Any `Light` or `Entity` attributes (color, etc.). |

## Example Usage

```python
from ursina import *
from ursina.shaders import lit_with_shadows_shader

app = Ursina()
EditorCamera()

# floor and cube that receive shadows
Entity(model='plane', scale=10, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader)

# ambient light to brighten shadows
ambient = AmbientLight(color=color.gray)
  
app.run()