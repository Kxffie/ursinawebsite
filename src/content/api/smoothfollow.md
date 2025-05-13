---
title: "Smooth Follow"
description: "Script to smoothly follow a target entity with optional offset."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scripts/smooth_follow.py"
category: "[13] Scripts"
sort: 2
---

# Smooth Follow

```python
SmoothFollow(target=None, offset=(0,0,0), speed=8, rotation_speed=0, rotation_offset=(0,0,0))
```

## Overview

When added as a script, updates its host entity each frame to move and rotate toward `target`, using separate linear and angular speeds.

## Example

```python
app = Ursina()
player = Entity(model='cube', color=color.orange)

def update():
    player.x += held_keys['d'] * .1
    player.x -= held_keys['a'] * .1

e = Entity(model='cube')
sf = e.add_script(SmoothFollow(target=player, offset=(0,2,0)))

EditorCamera()
app.run()
```