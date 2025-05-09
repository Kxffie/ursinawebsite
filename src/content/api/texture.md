---
title: "Texture"
description: "Reference for the Texture class, which represents an image loaded into GPU memory and provides pixel‑level access, filtering and saving."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/texture.py"
category: "Graphics"
sort: 3
---

# Texture

`Texture(value, filtering='default')`

Located in `ursina/texture.py` :contentReference[oaicite:0]{index=0}

> [!IMPORTANT]
> Looking for textures to add to your game? Browse community‑made shaders in the `/assets` folder.
>
>👉 [Browse Community Assets](/assets)

## Overview

The `Texture` class wraps a Panda3D texture object. It’s normally created for you when you assign a texture path or PIL image to an `Entity`. You can also manipulate pixels directly, change filtering modes, generate blank textures, and save to disk.

## Constructor Arguments

| Argument    | Type    | Default     | Description                                              |
|-------------|---------|-------------|----------------------------------------------------------|
| `value`     | any     | —           | Path, PIL Image, or existing Panda3D Texture object.    |
| `filtering` | `str`   | `'default'` | Filtering mode: `'default'`, `'nearest'`, `'linear'`.   |

## Properties

| Property    | Description                                                               |
|-------------|---------------------------------------------------------------------------|
| `.name`     | Internal name or path of the texture.                                     |
| `.size`     | `(width, height)` tuple in pixels.                                        |
| `.width`    | Pixel width.                                                              |
| `.height`   | Pixel height.                                                             |
| `.pixels`   | Flat list or buffer of pixel data.                                        |
| `.filtering`| Current filtering mode (`'nearest'` vs. `'linear'`).                     |
| `.repeat`   | UV wrap mode (`True` to repeat, `False` to clamp).                       |

## Methods

| Method                          | Description                                                        |
|---------------------------------|--------------------------------------------------------------------|
| `new(size, color=(255,255,255))`| Create a blank texture of given `size` filled with `color`.        |
| `get_pixel(x, y)`               | Return the RGBA tuple of the pixel at `(x,y)`.                     |
| `get_pixels(start, end)`        | Return a list of pixel tuples from flat index `start` to `end`.    |
| `set_pixel(x, y, color)`        | Change the pixel at `(x,y)` to the given RGBA `color` tuple.       |
| `apply()`                       | Upload any pixel changes to GPU memory.                            |
| `save(path)`                    | Write the texture to disk at the given filesystem `path`.          |

## Example Usage

```python
from ursina import *
from ursina import texture_importer

app = Ursina()

# assign a texture by name (auto‑loaded/compressed)
e = Entity(model='quad', texture='brick')

# manually change one pixel to blue
e.texture.set_pixel(0, 2, color.blue)

# push the change to the GPU
e.texture.apply()

app.run()
