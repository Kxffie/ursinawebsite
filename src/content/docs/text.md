---
title: "Text"
description: "Configuring text entity size, alignment, and color in Ursina Engine."
pubDate: "2025-05-13"
category: "[5] Text"
sort: 0
---

## Text Size

Set via `.scale` or `.world_scale`:

```python
text_entity = Text('hello', world_scale=2)
```

Change default text size globally:

```python
Text.size = 0.05  # double default size (default: 0.025)
```

For non-uniformly scaled Button:

```python
button = Button(scale=(0.2, 0.1), text='Start')
button.text_entity.world_scale = 2
```

## Text Alignment

Modify `.origin` to change alignment:

```python
Text('Hello\nWorld!', origin=(-0.5, 0.5))  # top-left (default)
Text('Hello\nWorld!', origin=(0, 0))       # center
```

## Text Colors

Color entire text:

```python
t = Text('This is some text', color=color.blue)
```

Use tags to color parts:

```python
t = Text('This is some <pink>colored text. <default>Reset.', color=color.blue)
```