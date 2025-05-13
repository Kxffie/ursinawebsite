---
title: "Changing Text of Prefabs"
description: "Accessing and modifying text entities on UI prefabs in Ursina Engine."
pubDate: "2025-05-13"
category: "[5] Text"
sort: 2
---

UI prefabs like `Slider`, `InputField`, or `Button` include a `text_entity` you can adjust:

```python
from ursina import Button, Slider, InputField

button = Button(text='Click me')
button.text_entity.text = 'New Label'
button.text_entity.color = color.red

slider = Slider(max=10, start=5)
slider.text_entity.world_scale = 1.5

input_field = InputField(default_value='Enter name')
input_field.text_entity.font = 'VeraMono.ttf'
```

Treat each `text_entity` as a standalone `Text` for full control over its appearance.
