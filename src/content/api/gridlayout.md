---
title: "Grid Layout"
description: "Arrange a list of entities in a 2D grid pattern."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scripts/grid_layout.py"
category: "[13] Scripts"
sort: 0
---

# Grid Layout

```python
grid_layout(l, max_x=8, max_y=8, spacing=(0,0,0), origin=(-.5,.5,0), offset=(0,0,0))
```

## Overview

Positions each element of list `l` in rows and columns, with configurable maximum columns/rows, spacing, origin pivot, and offset.

## Example

```python
app = Ursina()

center = Entity(model='quad', scale=.1, color=color.red)
p = Entity()
for i in range(4*5):
    b = Button(parent=p, model='quad', scale=Vec2(.2,.1), text=str(i), color=color.tint(color.random_color(),-.6))
    b.text_entity.scale = 1

t = time.time()
grid_layout(p.children, max_x=7, max_y=10, origin=(0, .5), spacing=(.15, 0))
print(time.time() - t)

EditorCamera()
app.run()
```