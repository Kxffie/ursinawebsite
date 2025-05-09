---
title: "Input Handler"
description: "Singleton for custom key‑binding and remapping of input events, with support for held‑key state and combined modifiers."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/input_handler.py"
category: "Modules"
sort: 0
---

# Input Handler

No constructor—importing `ursina.input_handler` gives you the singleton `input_handler`. It manages remapping of keys, tracks held‑down state, and normalizes combined modifiers.

## Overview

- `.held_keys`: defaultdict counting frames each key is held  
- `.rebinds`: mapping of original→set(of alternative) keys  

## Methods

| Function                                | Description                                                                                       |
|-----------------------------------------|---------------------------------------------------------------------------------------------------|
| `bind(original_key, alternative_key)`   | Map an input (e.g. `'z'`) to another key or action (e.g. `'w'`).                                   |
| `unbind(key)`                          | Remove all rebinds for that key.                                                                  |
| `rebind(to_key, from_key)`             | Shortcut to unbind `to_key` then bind it to `from_key`.                                           |
| `input(key)`                           | Internal handler — updates `held_keys` and applies rebinds for down, up and hold events.           |
| `get_combined_key(key)`                | Prepend active modifiers (`control+`, `shift+`, `alt+`) to produce combined key string.            |

## Example

```python
from ursina import *
from ursina import Ursina, input_handler

app = Ursina(borderless=False)

# remap 'z' to act as 'w'
input_handler.bind('z', 'w')

# map left‑click to custom 'attack' action
input_handler.bind('left mouse down', 'attack')

def input(key):
    print('got key:', key)
    if key == 'attack':
        destroy(Entity(model='cube', color=color.blue), delay=.2)

app.run()
