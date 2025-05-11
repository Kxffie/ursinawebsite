---
title: "Build"
description: "Automate packaging your Ursina project for distribution."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/build.py"
category: "Scripts"
sort: 6
---

# Build

```python
# instantiate and call methods on:
build = Build()
# use build.copytree(src, dst, ...)
```

## Overview

Configures paths and options for collecting Python files, assets, and engine runtime into a distributable folder. Supports ignoring patterns and compressing textures.

## Example

```python
# from a project root
from ursina.build import Build
b = Build()
b.copytree('assets', 'build/assets', ignore_filetypes=['.psd'])
```