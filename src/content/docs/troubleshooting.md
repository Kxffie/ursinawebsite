---
title: "Troubleshooting"
description: "Tips and solutions for common Ursina installation and runtime issues."
pubDate: "2025-05-08"
category: "[1] Getting Started"
sort: 0
---

## Installation Issues

### Multiple Python Versions  
If you have several Python installations, Ursina may install to a different one than you’re using in your IDE or script. Ensure you run:
```bash
python -m pip install ursina
```
with the same Python interpreter you launch your code with citeturn0search1turn0search0.

### Dependency Conflicts  
Pip may struggle choosing compatible Ursina releases when other dependencies conflict. Upgrading pip and installing in a fresh virtual environment often helps:
```bash
python -m pip install --upgrade pip
python -m venv venv && venv\Scripts\activate
pip install ursina
```

### Wheel Build Errors  
Errors like `invalid command 'bdist_wheel'` indicate missing build tools. On Windows, install the “Build Tools for Visual Studio.” On Linux/macOS, install `python3-dev` and `build-essential` packages.

## Import Errors

### ModuleNotFoundError: No module named 'ursina'  
Verify Ursina is installed in your current environment. Running your script with `python` rather than `python3` or vice versa can cause this error.

### No module named 'direct'  
The `direct` module is part of Panda3D. Ensure Panda3D is correctly installed alongside Ursina:
```bash
pip install panda3d
```

## IDE Configuration

### VSCode Not Recognizing Ursina  
In VSCode, select the correct Python interpreter in the status bar that matches where Ursina is installed. After that, reload the window

## Runtime Warnings

### “Error but still running” Message  
Some debug prints appear by default but do not affect your game. They originate from Ursina’s internal logging and can be safely ignored.

## Platform-Specific Issues

### Raspberry Pi Installation Fails  
Installing Ursina on Raspberry Pi can fail due to unavailable Panda3D wheels. You may need to compile Panda3D from source or run on a 64-bit OS.

---

If issues persist, join the <a href="https://discord.gg/ursina" target="_blank">Ursina Engine Discord</a> for updates and advanced troubleshooting.
