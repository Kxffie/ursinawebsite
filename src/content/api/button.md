---
title: "Button"
description: "Detailed reference for the Ursina Button prefab"
pubDate: "2025-05-06"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/button.py"
category: "Basics"
sort: 2
---

# Button

`Button(text='', parent=camera.ui, model=Default, radius=-1, origin=(0,0), text_origin=(0,0), text_size=1, color=Default, collider='box', highlight_scale=1, pressed_scale=1, disabled=False, **kwargs)`

Located in `ursina/prefabs/button.py`

## Overview

The `Button` class extends `Entity` and provides an interactive UI element. It supports text, icons, mouse interactions, and custom sounds.

## Constructor Arguments

| Argument         | Type            | Default          | Description                                                                                |
|------------------|-----------------|------------------|--------------------------------------------------------------------------------------------|
| `text`           | `str`           | `''`             | The text displayed on the button.                                                          |
| `parent`         | `Entity`        | `camera.ui`      | The parent entity in the scene graph.                                                      |
| `model`          | `Model`         | `Default`        | The 3D model used for the button background.                                               |
| `radius`         | `float`         | `-1`             | Corner radius for rounding the button shape.                                               |
| `origin`         | `tuple(float)`  | `(0,0)`          | Anchor point of the button entity.                                                         |
| `text_origin`    | `tuple(float)`  | `(0,0)`          | Anchor point of the text within the button.                                                |
| `text_size`      | `float`         | `1`              | Scale of the text.                                                                         |
| `color`          | `Color`         | `Default`        | Base color of the button.                                                                  |
| `collider`       | `str`           | `'box'`          | Type of collider for mouse interaction.                                                    |
| `highlight_scale`| `float`         | `1`              | Scale multiplier when hovered.                                                             |
| `pressed_scale`  | `float`         | `1`              | Scale multiplier when pressed.                                                             |
| `disabled`       | `bool`          | `False`          | If `True`, disables input responses.                                                       |
| `**kwargs`       | `any`           |                  | Additional keyword arguments passed to the base `Entity` class.                            |

## Attributes

| Name               | Type    | Description                                       |
|--------------------|---------|---------------------------------------------------|
| `origin`           | tuple   | Current origin point of the button.               |
| `color`            | Color   | Base color (tinted).                              |
| `highlight_color`  | Color   | Color when hovered (`color.tint(.2)`).            |
| `pressed_color`    | Color   | Color when pressed (`color.tint(-.2)`).           |
| `highlight_scale`  | float   | Hover scale multiplier.                           |
| `pressed_scale`    | float   | Pressed scale multiplier.                         |
| `highlight_sound`  | Sound   | Sound played on hover (if set).                   |
| `pressed_sound`    | Sound   | Sound played on click (if set).                   |
| `collider`         | str     | Collider shape for input detection.               |
| `disabled`         | bool    | Disabled state flag.                              |
| `text_entity`      | Text    | Internal text entity instance.                    |
| `text_origin`      | tuple   | Origin of the text entity.                        |

## Properties

| Property        | Description                            |
|-----------------|----------------------------------------|
| `.text`         | Get or set the button text.            |
| `.text_origin`  | Get or set the text origin.            |
| `.text_color`   | Get or set the text color.             |
| `.icon`         | Get or set the button icon.            |
| `.icon_world_scale` | Get or set the icon scale in world units. |
| `.text_size`    | Get or set the text size.              |
| `.origin`       | Get or set the button origin.          |

## Methods

### `input(key)`

Called on input events. Override to handle custom key actions.

### `on_mouse_enter()`

Called when the cursor enters the button collider.

### `on_mouse_exit()`

Called when the cursor exits the button collider.

### `fit_to_text(radius=1, padding=Vec2(Text.size*1.5, Text.size))`

Adjusts the button size to fit its text content.  
- `radius`: corner radius multiplier  
- `padding`: `Vec2` padding around text

## Example Usage

```python
from ursina import *
app = Ursina()

# Default button
Button.default_color = color.red
b1 = Button(model='quad', scale=.05, x=-.5, color=color.lime, text='test', text_size=.5, text_color=color.black)
b1.on_click = lambda: print('Button clicked')

# Icon button
b2 = Button(text='hello world!', icon='sword', scale=.25, text_origin=(-.5,0), x=.5)
b2.tooltip = Tooltip('exit')

# Nested under a UI panel
panel = Entity(parent=camera.ui, scale=.2, y=-.2)
b3 = Button(parent=panel, text='new text', scale_x=1, origin=(-.5,.5))

# Custom sounds
Button(text='sound', scale=.2, position=(-.25,-.2), color=color.pink,
       highlight_sound='blip_1', pressed_sound=Audio('coin_1', autoplay=False))

Text('Text size reference', x=.15)

def input(key):
    if key == 'd':
        scene.clear()
    if key == 'space':
        b1.text = 'updated text'

app.run()
```