---
title: "Rotation"
description: "How rotations are applied to entities, axis conventions, and helper methods in Ursina Engine"
pubDate: "2025-05-13"
category: "[3] Coordinate System"
sort: 2
---

## Rotation

Rotations are specified in degrees around each axis. The default sign convention is:

- **X and Y axes** rotate clockwise when viewed from outside  
- **Z axis** rotates counter-clockwise (so 2D rotation appears clockwise)  

This is controlled by:
```python
Entity.rotation_directions = (-1, -1, 1)
```

```text
           _______
          /
          \->
    __
   /  \     y
   v  |     |
      |  z  |                __
          \ |               /  \
           \|               v   |
            *---------- x       |
```

#### Common methods
- Absolute set:  
  ```python
  entity.rotation = Vec3(rx, ry, rz)
  ```
- Continuous rotate:  
  ```python
  entity.rotate(amount)
  ```
- Face a point in 3D:  
  ```python
  entity.look_at(target_position)
  ```
- Face a point in 2D:  
  ```python
  entity.look_at_2d(target_position)
  ```
- Direct quaternion access:  
  ```python
  q = entity.quaternion
  entity.quaternion = new_q
  ```