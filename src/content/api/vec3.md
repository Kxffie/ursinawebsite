---
title: "Vec3"
description: "3D vector class with swizzling and basic operations."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/vec3.py"
category: "[7] Math"
sort: 2
---

# Vec3

Located in `ursina/vec3.py`

## Properties

| Property | Description                                 |
|----------|---------------------------------------------|
| `.x`     | X component (float)                         |
| `.y`     | Y component (float)                         |
| `.z`     | Z component (float)                         |
| `.xy`    | Swizzle `(x, y)` as `Vec2`                  |
| `.yx`    | Swizzle `(y, x)` as `Vec2`                  |
| `.xz`    | Swizzle `(x, z)` as `Vec2`                  |
| `.yz`    | Swizzle `(y, z)` as `Vec2`                  |
| `.X`     | Integer-cast X                              |
| `.Y`     | Integer-cast Y                              |
| `.Z`     | Integer-cast Z                              |

## Example

```python
from ursina.math import Vec3

a = Vec3(1, 0, 0) * 2
print(a)         # Vec3(2, 0, 0)

a = Vec3(1, 0, 1) * Vec3(2, 1, 2)
print(a)         # Vec3(2, 0, 2)

b = Vec3(1.25235, 0, 1)
b += Vec3(0, 1, 0)
print(b)         # Vec3(1.25235, 1, 1)
```