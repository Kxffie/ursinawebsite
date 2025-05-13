---
title: "Noclip Mode"
description: "Allow free flying movement ignoring collisions when a key is held."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/scripts/noclip_mode.py"
category: "[13] Scripts"
sort: 4
---

# Noclip Mode

```python
NoclipMode(speed=10, require_key='shift')
```

## Overview

When added as a script to an entity, toggles collision ignoring and allows free movement while holding `require_key`.

## Example

```python
app = Ursina()
player = Entity(model='cube', color=color.orange)
Entity(model='plane', scale=10)
EditorCamera()
player.add_script(NoclipMode(speed=12, require_key='shift'))
app.run()
```