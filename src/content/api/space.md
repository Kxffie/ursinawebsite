---
title: "Space"
description: "Placeholder spacer for WindowPanel layouts."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/window_panel.py"
category: "UI"
sort: 11
---

# Space

`Space(height=1)`

Located in `ursina/prefabs/window_panel.py`

## Overview

Provides vertical spacing between elements in a `WindowPanel`.

## Key Properties

- `.height` — number of units tall  

## Example

```python
from ursina import *
app = Ursina()

wp = WindowPanel(
    title='Custom Window',
    content=(Text('Above'), Space(height=2), Text('Below')),
    popup=True
)
wp.layout()
app.run()
```