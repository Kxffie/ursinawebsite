---
title: "SpotLight"
description: "Spotlight that emits a cone of light, useful for flashlights or theater spot effects."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/lights.py"
category: "Graphics"
sort: 8
---

# SpotLight

`SpotLight(**kwargs)`

Located in `ursina/lights.py`

## Overview

`SpotLight` casts light in a cone shape from its position. You can point it at targets to simulate flashlights, stage lights or headlights.

## Constructor Arguments

| Argument   | Type    | Default | Description                                       |
|------------|---------|---------|---------------------------------------------------|
| `**kwargs` | `any`   |         | Any `Light` or `Entity` attributes (position, color, etc.). |

## Example Usage

```python
from ursina import *
from ursina.shaders import lit_with_shadows_shader

app = Ursina()
EditorCamera()

# plane and cube using shadow shader
Entity(model='plane', scale=10, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader)

# spotlight shining downwards
spot = SpotLight(color=color.white)
spot.position = (0, 3, 0)
spot.look_at((0, 0, 0))

app.run()