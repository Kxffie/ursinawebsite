---
title: "Ursina.build"
description: "How to package your Ursina game using the built-in build tool."
pubDate: "2025-05-13"
category: "[9] Build and Release"
sort: 0
---

Open a command prompt in your project folder and run:

```bash
python -m ursina.build
```

This will collect all necessary files into a `build` directory ready for distribution. By default, it:
- Copies the Python interpreter and your project's dependencies  
- Includes your scripts and assets under `build/src/`  
- Generates a `.bat` (Windows) launcher  

Available flags:

- `--ignore` : specify asset patterns to exclude  
- `--name` : override the default project name  
- `--include_modules` : comma‑separated list of extra modules, e.g. `PIL,numpy`  
- `--overwrite` : overwrite existing build without prompt  
- `--skip_engine` : omit Ursina engine files  
- `--skip_game` : omit your game scripts  
- `--compile_to_pyc=True|False` : toggle `.pyc` compilation  

Errors from the running application are logged to `log.sswg` instead of the console.
