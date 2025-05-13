---
title: "Text"
description: "Reference for the Text class, which renders multi‑line, styled UI text with optional word‑wrapping, tags and images."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/text.py"
category: "[1] Basics"
sort: 4
---

# Text

`Text(text='', start_tag='<', end_tag='>', ignore=True, **kwargs)`

Located in `ursina/text.py`

## Overview

`Text` extends `Entity` to display UI‑space text. It supports inline color tags, embedded images, word‑wrap, background boxes and animated reveal.

## Constructor Arguments

| Argument    | Type    | Default    | Description                                                  |
|-------------|---------|------------|--------------------------------------------------------------|
| `text`      | `str`   | `''`       | Initial string, may include tags like `<red>…<default>`.     |
| `start_tag` | `str`   | `'<'`      | Opening delimiter for inline tags.                           |
| `end_tag`   | `str`   | `'>'`      | Closing delimiter for inline tags.                           |
| `ignore`    | `bool`  | `True`     | If False, input events reach this entity.                    |
| `**kwargs`  | `any`   |            | Any other `Entity` attributes (position, color, parent, etc).|

## Class Fields

| Name               | Type       | Default                       | Description                                    |
|--------------------|------------|-------------------------------|------------------------------------------------|
| `Text.size`        | `float`    | `0.025`                       | Base character size                            |
| `.size`            | `float`    | `Text.size`                   | Effective character size                       |
| `.parent`          | `Entity`   | `camera.ui`                   | UI‑space parent                                |
| `.shader`          | `any`      | `None`                        | Shader applied to text mesh                    |
| `.text_nodes`      | `list`     | `[]`                          | Internal mesh objects for each character/tag   |
| `.images`          | `list`     | `[]`                          | Embedded image entities                        |
| `.origin`          | `tuple`   | `(-.5, .5)`                   | Anchor at top‑left                             |
| `.font`            | `Font`     | `Text.default_font`           | Font used                                      |
| `.resolution`      | `int`      | `Text.default_resolution`     | Character mesh resolution                      |
| `.use_tags`        | `bool`     | `True`                        | Enable inline tags                             |
| `.line_height`     | `float`    | `1`                           | Multiplier between lines                       |
| `.text_colors`     | `dict`     | `{'default': color.text_color}`| Map tag→color                                  |
| `.scale_override`  | `float`    | `1`                           | Manual scale multiplier                        |
| `.appear_sequence` | `any`      | `None`                        | Created by `appear()` for reveal animation     |

## Properties

| Property      | Description                                      |
|---------------|--------------------------------------------------|
| `.text`       | Get or set the full string including tags.       |
| `.color`      | Default text color.                              |
| `.width`      | Width of the widest line.                        |
| `.height`     | Total height of all lines.                       |
| `.lines`      | List of lines after wrap.                        |
| `.wordwrap`   | Wrap text after N characters when > 0.           |
| `.background` | Background box entity if created.                |

## Methods

| Method                                         | Description                                                                                      |
|------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `text(text)`                                   | Change the displayed string, rebuilding meshes.                                                  |
| `create_text_section(text, tag='', x=0, y=0)`  | Internal: build meshes for a substring or image tag.                                             |
| `align()`                                      | Adjust positions of text nodes based on `.origin`, `.line_height`, `.wordwrap`.                   |
| `create_background(padding=size*2, radius=size, color=color.black66)` | Add a background quad behind text.                                           |
| `appear(speed=0.025)`                          | Animate text reveal one character at a time.                                                     |
| `get_width(string, font=None)`                 | Return width in world units for `string`.                                                        |

## Example Usage

```python
from ursina import *

app = Ursina()

descr = '''\
<red>Rainstorm<default>
Summon a storm to deal 5 <blue>water<default> damage.
Lasts for 4 rounds.
'''

# scale resolution to match Text.size
Text.default_resolution = 1080 * Text.size

# create a wrapped text box
test = Text(text=descr, wordwrap=30)

def input(key):
    if key == 'a':
        test.text = '<default><image:file_icon> <red><image:file_icon> test'
    if key == 'c':
        test.text = ''

window.fps_counter.enabled = False
print('width of "yolo":', Text.get_width('yolo'))

app.run()
