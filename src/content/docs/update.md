---
title: "Update"
description: "Describes three convenient methods to attach per‑frame behavior to entities using the update callback."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 7
---

An Entity's update method will be called automatically:

### By assigning `update` to an entity

```python
e = Entity()

def my_update():
    e.x += 1 * time.dt # dt stands for delta time, the duration since the last frame.

e.update = my_update
```

### By inheriting the Entity class

```python
class Player(Entity):
    def update(self):
        self.x += 1 * time.dt
```

### By having an `update` function in `__main__` (the starting script)

The third option is to put a function called `update` in `__main__`, the starting script.
You'll see this in many examples because it is convenient for small scripts.
Keep in mind this will not work if you import a module with an `update` function defined at module level.

```python
def update():
    print('update')
```
