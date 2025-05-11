---
title: "Animator"
description: "Manage multiple entities or animations as named states."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/animator.py"
category: "Animation"
sort: 3
---

# Animator

`Animator(animations=None, start_state='', pause_disabled=True)`

Located in `ursina/prefabs/animator.py`

## Overview

`Animator` holds a dictionary of named `Entity` or animation objects and switches between them based on its `.state` property. Only the active state’s object is enabled; others are hidden or paused. Useful for UI screens, character states, or toggling animations.

## Constructor Arguments

| Argument         | Type                        | Default     | Description                                                             |
|------------------|-----------------------------|-------------|-------------------------------------------------------------------------|
| `animations`     | `dict[str, Entity|Animation]` | `None`      | Mapping of state names to `Entity` instances or `Animation` objects.    |
| `start_state`    | `str`                       | `''`        | Initial active state name.                                              |
| `pause_disabled` | `bool`                      | `True`      | If `True`, disabling a state pauses its animation instead of destroying.|

## Properties

| Property    | Description                                                   |
|-------------|---------------------------------------------------------------|
| `.state`    | Current active state. Setting this enables the new state’s object and disables the previous one. |

## Example

```python
from ursina import *
from ursina.prefabs.animation import Animation
from ursina.prefabs.animator import Animator

app = Ursina()

# create a simple Animation instance
anim = Animation('ursina_wink', loop=True, autoplay=False)

# create an Animator with three states
a = Animator(
    animations={
        'lol':   Entity(model='cube', color=color.red),
        'yo':    Entity(model='cube', color=color.green, x=1),
        'help':  anim,
    }
)

# start in the 'yo' state
a.state = 'yo'

Text(
    'press <red>1<default>, <green>2<default> or <violet>3<default> to switch states',
    origin=(0, -0.5),
    y=-0.4
)

def input(key):
    if key == '1':
        a.state = 'lol'
    if key == '2':
        a.state = 'yo'
    if key == '3':
        a.state = 'help'
        print(anim.enabled)

app.run()
```