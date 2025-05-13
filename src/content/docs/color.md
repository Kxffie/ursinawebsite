---
title: "Color"
description: "Demonstrates several ways to set or transform an entity's color using HSV, RGB helpers, hex codes, and randomization."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 3
---

```python
e.color = color.red # set it to a color in the color module

e.color = hsv(120, .5, .5) # hsv color
e.color = rgb(.8, .1, 0) # rgb color
e.color = rgb32(16, 128, 255) # rgb color
e.color = '#aabbcc' # hex color
e.color = e.color.tint(.1) # tint the color
e.color = color.random_color() # set it to a random color
e.color = lerp(color.red, color.green, .5) # set it to a color half way between red and green
```

> [!TIP]
> Learn more about colors at the API Reference docs.
>
>👉 [Browse API Reference](/api/color)