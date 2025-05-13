---
title: "Origin"
description: "How to adjust the pivot point of a model for transforms in Ursina Engine"
pubDate: "2025-05-13"
category: "[3] Coordinate System"
sort: 3
---

## Origin

The origin is the pivot point for position, rotation, and scale. By default it is centered at `(0, 0)` within the model.

Use the `origin` property to shift it:

```python
entity.origin = (0, 0.5)  # pivot moves to top center
```

#### Examples

```text
             (-.5, .5)
+---------+      0---------+
|         |      |         |
|    0    |      |         |
|         |      |         |
+---------+      +---------+

   (0, .5)
+----0----+      +---------+
|         |      |         |
|         |      |         0 (.5, 0)
|         |      |         |
+---------+      +---------+
```

#### Why change the origin
- Pivot UI panels on an edge for smooth slide-in animations  
- Rotate doors or wheels around their hinge point  
