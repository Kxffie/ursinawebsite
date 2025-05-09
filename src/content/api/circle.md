---
title: "Circle"
description: "Procedural circle mesh generator with configurable resolution, radius and primitive mode."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/models/procedural/circle.py"
category: "Procedural Models"
sort: 1
---

# Circle

`Circle(resolution=16, radius=0.5, mode='ngon', **kwargs)`

Located in `ursina/models/procedural/circle.py` :contentReference[oaicite:0]{index=0}

## Overview

Generates a circular mesh (filled or outline) by sampling points around a unit circle.

- `resolution`: number of segments around the circumference  
- `radius`: circle radius in world units  
- `mode`: one of `'ngon'` (fill), `'line'` (outline), `'triangle'` (triangulated fill)  

## Fields

| Name       | Description                  |
|------------|------------------------------|
| `.vertices`| List of Vec3 positions around circle. |

## Example

```python
from ursina import *

app = Ursina()
# outline circle of radius .5 with 8 segments
e = Entity(model=Circle(8, radius=0.5, mode='line', thickness=10), color=color.hsv(60,1,1,0.3))
EditorCamera(rotation_speed=200, panning_speed=200)
app.run()
