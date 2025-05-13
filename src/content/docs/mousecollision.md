---
title: "Mouse Collision"
description: "Handling mouse-based collision detection and click events in Ursina Engine."
pubDate: "2025-05-13"
category: "[4] Collision"
sort: 6
---

## Mouse Collision

The mouse performs a raycast each frame. Useful attributes:

- `mouse.hovered_entity`  
- `mouse.point` / `mouse.world_point`  
- `mouse.normal` / `mouse.world_normal`  

Add a collider and `on_click` handler:

```python
def action():
    print('Ow! That hurt!')

Entity(
    model='quad',
    parent=camera.ui,
    scale=0.1,
    collider='box',
    on_click=action
)
```
