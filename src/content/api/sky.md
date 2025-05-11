---
title: "Sky"
description: "Simple infinite skybox prefab."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/sky.py"
category: "Prefabs"
sort: 0
---

# Sky

`Sky(**kwargs)`

Located in `ursina/prefabs/sky.py`

## Overview

Creates a large sphere or cube around the scene to simulate sky. Automatically tracks the camera so it always appears infinitely far away. Multiple `Sky` instances are supported via `Sky.instances`.

## Methods

- `update()`  
  Repositions the sky around the active camera each frame.  
- `input(key)`  
  (Unused by default) can react to input if needed.

## Example

```python
from ursina import *

app = Ursina()
Sky()  # add default sky

Entity(model='cube', color=color.azure, scale=2, collider='box')
EditorCamera()

app.run()
```