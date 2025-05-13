---
title: "Nuitka"
description: "Compile your Python game into standalone executables using Nuitka."
pubDate: "2025-05-13"
category: "[9] Build and Release"
sort: 1
---

Nuitka converts your Python scripts into optimized C code and then compiles them. For full instructions and advanced options, visit:

https://nuitka.net/

A typical workflow:

1. Install Nuitka:
    ```bash
    pip install nuitka
    ```
2. Compile your entry script in standalone mode:
    ```bash
    python -m nuitka --standalone --onefile main.py
    ```
3. Find the generated executable in the output directory.
