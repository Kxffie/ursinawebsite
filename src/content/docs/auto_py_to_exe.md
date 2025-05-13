---
title: "Auto-py-to-exe"
description: "Package your game as an executable using the auto‑py‑to‑exe GUI (not recommended)."
pubDate: "2025-05-13"
category: "[9] Build and Release"
sort: 2
---

Using **auto‑py‑to‑exe** can produce larger files and slower startup, but it provides a GUI for configuring settings.

1. Install the tool:
    ```bash
    pip install auto-py-to-exe
    ```
2. Launch the GUI:
    ```bash
    auto-py-to-exe
    ```
3. In the interface:
    - **Script Location**: select your `main.py`  
    - **Onefile**: bundle into a single executable  
    - **GUI/Console**: choose window or console mode  
    - **Icon**: optional application icon  
4. Under **Additional Files**, add folders:
    ```
    panda3d-*.dist-info
    panda3d
    direct
    ursina-*.dist-info
    ursina
    ```
    (found in `YOUR_PYTHON_FOLDER/Lib/site-packages/`)  
5. In **Advanced > –paths**, add:
    ```
    YOUR_PYTHON_FOLDER/Lib/site-packages/panda3d
    ```
6. Set an output directory if desired.  
7. Click **Convert .py to .exe**.

Although straightforward, auto‑py‑to‑exe builds tend to be bulkier and slower to start.
