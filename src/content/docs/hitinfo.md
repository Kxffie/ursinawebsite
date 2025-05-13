---
title: "HitInfo"
description: "Data returned from collision queries in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 4
---

## HitInfo

A `HitInfo` contains details about what was hit:

- `hit` (bool)  
- `entity` (Entity)  
- `point` (Vec3 local space)  
- `world_point` (Vec3 world space)  
- `normal` (Vec3 local surface normal)  
- `world_normal` (Vec3 world surface normal)  
- `distance` (float)  
- `hits` (list of HitInfo for multi-hit queries)  
- `entities` (list of entities hit)
