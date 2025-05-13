---
title: "Input"
description: "Illustrates capturing keyboard input inside an entity class to drive movement and animations."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 8
---

The same goes for the `input` method:

```python
class Player(Entity):
    def input(self, key):
        if key == 'w':
            self.position += self.forward

        if key == 'd':
            self.animate('rotation_y', self.rotation_y + 90, duration=.1)

        if key == 'a':
            self.animate('rotation_y', self.rotation_y - 90, duration=.1)
```
