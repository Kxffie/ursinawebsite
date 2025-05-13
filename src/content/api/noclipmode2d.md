---
title: "Noclip Mode 2D"
description: "2D variant of NoclipMode for top-down or side-view games."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scripts/noclip_mode.py"
category: "[13] Scripts"
sort: 5
---

# Noclip Mode 2D

```python
NoclipMode2d(speed=10, require_key='shift')
```

## Overview

Enables free 2D movement ignoring collisions when `require_key` is held down.

## Example

```python
app = Ursina()
player = Entity(model='cube', color=color.orange)
Entity(model='plane', scale=10)
EditorCamera()
player.add_script(NoclipMode2d(speed=8, require_key='shift'))
app.run()
```