---
title: "Other Magic Functions"
description: "Special Entity events like on_enable, on_disable, and on_destroy."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 10
---

# Other Magic Functions

Trigger side-effects when an entity’s state changes:

- **on_enable**: called when `enabled` becomes `True`  
- **on_disable**: called when `enabled` becomes `False`  
- **on_destroy**: called just before the entity is removed  

```python
def boom():
    print('Goodbye!')

e = Entity(on_destroy=boom)
destroy(e)  # prints "Goodbye!"
```
