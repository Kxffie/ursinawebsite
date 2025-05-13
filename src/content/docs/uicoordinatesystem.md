---
title: "UI Coordinate System"
description: "Normalized 2D coordinate layout for UI elements in Ursina Engine"
pubDate: "2025-05-13"
category: "[3] Coordinate System"
sort: 1
---

## UI Coordinate System

UI coordinates run from `-0.5` to `0.5` on each axis, with the origin at the screen center:

- **(0, 0)** is the center of the window  
- **(-0.5, 0.5)** is the top-left corner  
- **(0.5, -0.5)** is the bottom-right corner  
- Horizontal range may be adjusted by aspect ratio, for example:  
  ```python
  right_edge = Vec2(0.5 * window.aspect_ratio, 0)
  ```

```text
                      (-.5, .5)           (.5, .5)
  (window.top_left)_______|____(window.top)____|_______(window.top_right)
                   |       '                  '       |
                   |       '      (0, 0)      '       |
                   |_______'__________________'_______|
(window.bottom_left)       |  (window.bottom) |       (window.bottom_right)
                      (-.5, -.5)          (.5, -.5)
```

#### Custom UI layers
To move or scale the entire UI you can parent elements under `camera.ui` since it is itself an Entity.