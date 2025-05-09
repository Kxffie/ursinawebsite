---
title: "Color"
description: "Reference for the Color utilities, presets and functions for working with colors in Ursina (HSV, RGB, alpha, tints, random, conversion, brightness, inverse)."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/color.py"
category: "Graphics"
sort: 0
---

# Color

Located in `ursina/color.py`

## Overview

The `color` module provides:

- A large set of named color presets (HSV‑ and RGB‑based)  
- Functions to create or convert colors (HSV, RGB, RGBA, hex)  
- Utilities for brightness, inversion, tinting and random color generation  

Note: the top‑level `color(...)` constructor is deprecated in favor of `hsv(...)`.

## Preset Colors

| Name        | Definition                  |  
|-------------|-----------------------------|  
| `white`     | `hsv(0,0,1)`                |  
| `smoke`     | `hsv(0,0,0.96)`             |  
| `light_gray`| `hsv(0,0,0.75)`             |  
| `gray`      | `hsv(0,0,0.5)`              |  
| `dark_gray` | `hsv(0,0,0.25)`             |  
| `black`     | `hsv(0,0,0)`                |  
| `red`       | `hsv(0,1,1)`                |  
| `yellow`    | `hsv(60,1,1)`               |  
| `lime`      | `hsv(90,1,1)`               |  
| `green`     | `hsv(120,1,1)`              |  
| `turquoise` | `hsv(150,1,1)`              |  
| `cyan`      | `hsv(180,1,1)`              |  
| `azure`     | `hsv(210,1,1)`              |  
| `blue`      | `hsv(240,1,1)`              |  
| `violet`    | `hsv(270,1,1)`              |  
| `magenta`   | `hsv(300,1,1)`              |  
| `pink`      | `hsv(330,1,1)`              |  
| `brown`     | `rgb32(165,42,42)`          |  
| `olive`     | `rgb32(128,128,0)`          |  
| `peach`     | `rgb32(255,218,185)`        |  
| `gold`      | `rgb32(255,215,0)`          |  
| `salmon`    | `rgb32(250,128,114)`        |  
| `clear`     | `rgba(0,0,0,0)`             |  
| `white10`   | `rgba(1,1,1,0.10)`          |  
| `white33`   | `rgba(1,1,1,0.33)`          |  
| `white50`   | `rgba(1,1,1,0.50)`          |  
| `white66`   | `rgba(1,1,1,0.66)`          |  
| `black10`   | `rgba(0,0,0,0.10)`          |  
| `black33`   | `rgba(0,0,0,0.33)`          |  
| `black50`   | `rgba(0,0,0,0.50)`          |  
| `black66`   | `rgba(0,0,0,0.66)`          |  
| `black90`   | `rgba(0,0,0,0.90)`          |  
| `text`, `light_text` | `smoke`             |  
| `dark_text` | `hsv(0,0,0.1)`               |  
| `text_color`| `light_text`                |  

## Functions

| Function                          | Description                                                         |
|-----------------------------------|---------------------------------------------------------------------|
| `color(h,s,v,a=1)`                | Deprecated alias for `hsv(h,s,v,a)`.                                |
| `hsv(h,s,v,a=1)`                  | Create an HSV‑based color.                                           |
| `rgba32(r,g,b,a=255)`             | Create color from 0–255 RGBA components.                            |
| `rgb32(r,g,b)`                    | Create opaque color from 0–255 RGB.                                 |
| `rgba(r,g,b,a)`                   | Create color from 0–1 RGBA floats.                                  |
| `rgb(r,g,b)`                      | Create opaque color from 0–1 RGB floats.                            |
| `to_hsv(color)`                   | Convert any color to HSV tuple.                                     |
| `hex(value)`                      | Parse a hexadecimal color string (`'#RRGGBB'` or `'#RRGGBBAA'`).     |
| `rgb_to_hex(r,g,b,a=1)`           | Convert RGBA floats to hex string.                                  |
| `brightness(color)`               | Return brightness (V component) of an HSV color.                    |
| `inverse(color)`                  | Return the inverse (complement) of a color.                         |
| `random_color()`                  | Generate a random HSV color with full saturation and value.         |
| `tint(color, amount=0.2)`         | Lighten or darken by mixing toward white (`amount>0`) or black (`<0`). |

## Example Usage

```python
from ursina import *
from ursina import Ursina, Entity, Button, Quad, grid_layout, color

app = Ursina()

# show all named presets
p = Entity(x=-2)
for key, c in color.colors.items():
    b = Button(parent=p, model=Quad(0), color=c, text=key)
    b.text_entity.scale *= 0.5
grid_layout(p.children, max_x=8)

# color utilities
print('blue brightness:', color.brightness(color.blue))
print('inverse of red:', color.inverse(color.red))
print('random HSV:', color.random_color())

# hex conversions
print('rgb_to_hex:', color.rgb_to_hex(*color.blue))
print('parse hex:', color.hex('#ffa500'))

app.run()
