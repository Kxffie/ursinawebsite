---
title: "Tooltip"
description: "Display contextual text on hover."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/tooltip.py"
category: "UI"
sort: 1
---

# Tooltip

`Tooltip(text='', wordwrap=40, background_color=color.black66, **kwargs)`

Located in `ursina/prefabs/tooltip.py`

## Overview

Shows styled text when hovering over UI elements or entities.

## Methods

- `update()`

## Example

```python
from ursina import *

app = Ursina()
tooltip_test = Tooltip(
    '<scale:1.5><pink>Rainstorm<scale:1>\n\n'
    'Summon a <blue>rainstorm<default> to deal damage.',
    background_color=color.violet,
    font='VeraMono.ttf',
    wordwrap=50,
)
tooltip_test.enabled = True
app.run()
```