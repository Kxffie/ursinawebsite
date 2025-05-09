---
title: "DirectionalLight"
description: "Infinite directional light (like sunlight) with optional shadow casting and automatic shadow‐area fitting."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/lights.py"
category: "Graphics"
sort: 5
---

# DirectionalLight

`DirectionalLight(shadows=True, **kwargs)`

Located in `ursina/lights.py`

## Overview

`DirectionalLight` simulates a distant light source (such as the sun). It can cast shadows into the scene. You can adjust shadow map resolution and have the light automatically fit its shadow frustum to any target entity or the entire scene.

## Constructor Arguments

| Argument   | Type    | Default | Description                            |
|------------|---------|---------|----------------------------------------|
| `shadows`  | `bool`  | `True`  | Enable or disable shadow casting.     |
| `**kwargs` | `any`   |         | Any other `Light` or `Entity` attributes. |

## Fields

| Name                     | Description                                                      |
|--------------------------|------------------------------------------------------------------|
| `.shadow_map_resolution` | `Vec2(1024,1024)` default resolution of the shadow depth map.   |
| `._bounds_entity`        | Entity used to compute shadow frustum (defaults to `scene`).     |
| `.shadows`               | Backing field for the `.shadows` property.                       |

## Properties

| Property    | Description                                       |
|-------------|---------------------------------------------------|
| `.shadows`  | Get or set whether shadows are cast by this light.|

## Methods

| Method                                | Description                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------|
| `update_bounds(entity=scene)`         | Recompute the shadow frustum to fit the given entity’s bounds (defaults to the whole scene).|
| `look_at(target, axis='forward', up=None)` | Aim the light at a target position, then update shadow bounds.                        |

## Example Usage

```python
from ursina import *
from ursina.shaders import lit_with_shadows_shader

app = Ursina()
EditorCamera()

# floor and cube that receive shadows
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, color=color.light_gray, shader=lit_with_shadows_shader)

# directional light with shadows
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1, -1, 1))

app.run()
```