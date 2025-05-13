---
title: "Update"
description: "Three ways to implement an Entity’s update method."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 7
---

# Update

An entity’s `update` method runs every frame.

1. **Assign a function** to its `update` attribute:

    ```python
    e = Entity()
    def my_update():
        e.x += time.dt
    e.update = my_update
    ```

2. **Subclass Entity** and override `update`:

    ```python
    class Player(Entity):
        def update(self):
            self.x += time.dt
    ```

3. **Global `update()` in your main script** (convenient for small examples):

    ```python
    def update():
        print('frame tick')
    ```
