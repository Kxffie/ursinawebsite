---
title: "Duplicate"
description: "Clone an entity, optionally including its children."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/duplicate.py"
category: "[13] Scripts"
sort: 1
---

# Duplicate

```python
duplicate(entity, copy_children=True, *args, **kwargs)
```

## Overview

Creates a deep copy of `entity`, preserving transform and optionally its children. Additional transform kwargs can override the clone’s properties.

## Example

```python
from ursina import *

app = Ursina()
e = Button(parent=scene, scale=1, text='yolo')
e2 = duplicate(e, x=1.25)
EditorCamera()
app.run()
```