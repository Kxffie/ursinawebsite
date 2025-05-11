---
title: "Scrollable"
description: "Make an entity scrollable via mouse wheel over its area."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scripts/scrollable.py"
category: "Scripts"
sort: 3
---

# Scrollable

```python
Scrollable(**kwargs)
```

## Overview

Adds wheel-scroll handling to an entity, moving it along `axis` between `min` and `max`. Supports smoothing.

## Example

```python
app = Ursina()
p = Button(model='quad', scale=(.4, .8), collider='box')
for i in range(8):
    Button(parent=p, scale_y=.05, text=f'Item {i}', origin_y=.5, y=.5 - (i * .05))

p.add_script(Scrollable())
app.run()
```