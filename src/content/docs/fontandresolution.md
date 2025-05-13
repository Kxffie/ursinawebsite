---
title: "Font and Resolution"
description: "Setting font and resolution for text entities in Ursina Engine."
pubDate: "2025-05-13"
category: "[5] Text"
sort: 1
---

## Font and Resolution

### Single Text Entity

```python
text = Text(font='VeraMono.ttf', resolution=100 * Text.size)
text.text = descr
```

### Global Defaults

```python
Text.default_font = 'VeraMono.ttf'
Text.default_resolution = 100 * Text.size
```

Keep in mind you only need to increase resolution for crisp pixel fonts; the default works for most cases.
