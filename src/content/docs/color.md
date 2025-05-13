---
title: "Color"
description: "How to set and manipulate Entity colors using the color module."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 3
---

# Color

You can assign any of the built-in colors from the `color` module:

```python
e.color = color.red
```

Or use other color functions:

```python
e.color = hsv(120, 0.5, 0.5)          # HSV
e.color = rgb(0.8, 0.1, 0)           # normalized RGB
e.color = rgb32(16, 128, 255)        # 0–255 RGB
e.color = '#aabbcc'                  # hex code
e.color = e.color.tint(0.1)          # lighten
e.color = color.random_color()       # random pick
e.color = lerp(color.red, color.green, 0.5)  # midpoint blend
```
