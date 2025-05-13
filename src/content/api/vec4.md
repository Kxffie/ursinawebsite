---
title: "Vec4"
description: "4D vector class with component-wise operations."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/vec4.py"
category: "[7] Math"
sort: 3
---

# Vec4

Located in `ursina/vec4.py`

## Properties

| Property | Description                               |
|----------|-------------------------------------------|
| `.x`     | X component (float)                       |
| `.y`     | Y component (float)                       |
| `.z`     | Z component (float)                       |
| `.w`     | W component (float)                       |

## Example

```python
from ursina.math import Vec4

a = Vec4(1, 0, 0, 0) * 2
print(a)         # Vec4(2, 0, 0, 0)

a = Vec4(1, 0, 1, 1) * Vec4(2, 1, 2, 3)
print(a)         # Vec4(2, 0, 2, 3)

b = Vec4(1.25235, 0, 1, 0.2)
b += Vec4(0, 1, 0, 0)
print(b)         # Vec4(1.25235, 1, 1, 0.2)
```