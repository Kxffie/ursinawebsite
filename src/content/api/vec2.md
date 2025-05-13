---
title: "Vec2"
description: "2D vector class with swizzling and basic operations."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/vec2.py"
category: "[7] Math"
sort: 1
---

# Vec2

Located in `ursina/vec2.py`

## Properties

| Property | Description                               |
|----------|-------------------------------------------|
| `.x`     | X component (float)                       |
| `.y`     | Y component (float)                       |
| `.X`     | Integer-cast X                            |
| `.Y`     | Integer-cast Y                            |
| `.yx`    | Swizzle returning `(y, x)` as a `Vec2`    |

## Example

```python
from ursina.math import Vec2

a = Vec2(1, 1)
print(a)          # Vec2(1, 1)
print(round(a))   # Vec2(1, 1)
```