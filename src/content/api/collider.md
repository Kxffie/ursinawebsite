---
title: "Collider"
description: "Base class for attaching collision shapes to Entities."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/collider.py"
category: "Collision"
sort: 4
---

# Collider

`Collider(entity, shape)`

Creates a Panda3D collision node and attaches it to `entity`.

## Constructor Arguments

| Name     | Type     | Description                                         |
|----------|----------|-----------------------------------------------------|
| `entity` | `Entity` | Parent entity to attach the collider to.            |
| `shape`  | `any`    | Shape descriptor: string (`'box'`, `'sphere'`, etc.) or collider object. |

## Properties

| Property    | Description                                  |
|-------------|----------------------------------------------|
| `.visible`  | `bool` — Whether to show the debug collider. |

## Methods

| Method   | Description                            |
|----------|----------------------------------------|
| `remove()` | Detach and destroy the collision node. |

## Example

```python
from ursina import *
from ursina.collider import Collider

app = Ursina()
e = Button(model='cube', color=color.red)
e.collider = 'box'           # add box collider
e.collider = Collider(e, 'sphere')  # custom collider
app.run()
```
