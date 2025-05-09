---
title: "Texture Importer"
description: "Utilities to locate, load, cache and compress image files (PNG, JPG, GIF, PSD) into Ursina `Texture` objects."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/texture_importer.py"
category: "Modules"
sort: 2
---

# Texture Importer

No constructor—import functions from `ursina.texture_importer`. Finds textures in asset folders, caches results, optionally compresses PSD/JPG/PNG.

## Overview

- `file_types`: supported extensions (`.tif`, `.jpg`, `.png`, `.gif`)  
- `imported_textures` cache to avoid reloading  
- Optional PSD → PNG/JPG compression when `development_mode`  

## Methods

| Function                                                   | Description                                                                                                      |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `load_texture(name, folder=None, use_cache=True, filtering='default')` | Locate and load an image by name (with or without extension), return a `Texture`.                     |
| `compress_textures(name='')`                                | Scan asset folder for large images or PSDs and write optimized versions into `textures_compressed`.              |
| `generate_thumbhashes()`                                    | Produce and store thumbhashes for fast client‑side previews (development tool).                                  |

## Example

```python
from ursina import *

app = Ursina()
# assign a built‑in white texture
Entity(model='quad', texture='white_cube')
app.run()
