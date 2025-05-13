---
title: "Input"
description: "Handling keyboard input in Entity classes."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 8
---

# Input

Override `input(self, key)` to react to keys:

```python
class Player(Entity):
    def input(self, key):
        if key == 'w':
            self.position += self.forward
        if key == 'd':
            self.animate('rotation_y', self.rotation_y + 90, duration=0.1)
        if key == 'a':
            self.animate('rotation_y', self.rotation_y - 90, duration=0.1)
```
