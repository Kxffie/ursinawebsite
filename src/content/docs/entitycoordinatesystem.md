---
title: "Entity Coordinate System"
description: "Overview of the 3D space axes orientation used for positioning and rotating entities in Ursina Engine"
pubDate: "2025-05-13"
category: "[3] Coordinate System"
sort: 0
---

## Entity Coordinate System

Ursina uses a right-handed 3D coordinate system:

- **X axis** points to the right  
- **Y axis** points upward  
- **Z axis** points forward toward the viewer  

```text
            y (up)
            |
            |
(forward) z |
          \ |
           \|
            *---------- x (right)
```

#### Right-hand rule
1. Point your right hand thumb along +X  
2. Point your index finger along +Y  
3. Your middle finger then points along +Z  

#### Usage
- Move an entity:  
  ```python
  entity.position = Vec3(x, y, z)
  ```
- Rotate an entity:  
  ```python
  entity.rotation = Vec3(rx, ry, rz)
  ```
- Continuous rotation:  
  ```python
  entity.rotate(amount)
  ```