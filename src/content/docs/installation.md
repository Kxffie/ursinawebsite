---
title: "Installation"
description: "Step‑by‑step instructions for setting up Python and installing Ursina, including development builds, optional extras, and troubleshooting."
pubDate: "2025-05-08"
sort: -1
---

# Downloading and Installing Ursina

## Installing Python

### By getting Python from the official website {: #install-python }
1. Download **Python 3.12 or newer** from <https://www.python.org/downloads/>.
2. Verify the installation and version:

```bash
python --version
```

---

## Installing Ursina (stable release)

Install the latest stable build from **PyPI**:

```bash
python -m pip install ursina
```

---

## Development Version

The development build can contain fixes and features not yet released on PyPI. Be aware that things *could* break.

### Install the most recent build from GitHub

```bash
python -m pip uninstall ursina
python -m pip install https://github.com/pokepetter/ursina/archive/master.zip
```

### Install from GitHub by cloning the repo

If you plan to edit the source, clone the repository and install in editable mode. Make sure **Git** is installed (<https://git-scm.com/>):

```bash
git clone https://github.com/pokepetter/ursina.git
python -m pip install --editable .
```

### Install a specific commit

Replace `<commit-hash>` with the commit you need:

```bash
python -m pip uninstall ursina
python -m pip install https://github.com/pokepetter/ursina/archive/<commit-hash>.zip
```

---

## Installing optional dependencies

Ursina ships with several optional extras. Install individual extras — or all of them at once — like so:

```bash
pip install ursina[extras]
```

---

## Troubleshooting

### Ursina installed, but Python can’t find it

If you have multiple Python installs, make sure Ursina was installed to the interpreter you’re using:

```bash
python3.10 -m pip install ursina
```

If you work inside a virtual environment, activate it **before** running `pip install`.
