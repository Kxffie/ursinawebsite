---
title: "Frequently Asked Questions"
description: "Common questions to help you get started with Ursina Engine"
pubDate: "2025-05-13"
category: "[1] Getting Started"
sort: 3
---

## How should I structure my project?

A clear project layout helps keep your code and assets organized. A typical setup looks like this:

```text
project_folder/         # one folder per project
├── main.py             # entry point
├── level.py
├── player.py
├── enemies.py
├── player_sprite.png
└── textures/           # optional subfolder for image assets
    ├── enemy_1.png
    └── enemy_2.png
```

- Put related scripts and resources together.
- Use subfolders (like `textures/` or `models/`) for large asset collections.
- Keep `main.py` as the script that launches your game.

---

## How do I move the camera?

The built-in `camera` is just another `Entity`. You can set its position, rotation, or even parent it to other objects:

```python
from ursina import *

app = Ursina()
camera.position = Vec3(1, 1, 0)
camera.rotation = Vec3(30, 45, 0)
app.run()
```

---

## Why use Python for game development? Isn’t it slow?

Python itself executes game logic, while the heavy lifting—rendering and physics—is done in C++ and shaders. Benefits include:

- **Rapid development:** less boilerplate, faster iteration  
- **Readable code:** easier to maintain and refactor  
- **Extensibility:** integrate custom C++ modules or shaders when needed  

In practice, Python’s overhead is negligible for most indie and hobby projects.

---

## How do I call a function with a delay?

Use the built-in `invoke` utility to schedule a function call:

```python
from ursina import *

def say_hello():
    print('Hello after 2 seconds!')

invoke(say_hello, delay=2)
```

You can pass arguments or keyword arguments just as you would to the function:

```python
def greet(name, emoji='😊'):
    print(f'Hello {name} {emoji}')

invoke(greet, 'Alice', emoji='👋', delay=1.5)
```

---

## How can I use Panda3D alongside Ursina?

Under the hood, an `Entity` in Ursina is a `NodePath` in Panda3D, and Ursina itself is built on a `ShowBase`. To blend the two:

1. Import Panda3D modules directly alongside Ursina.  
2. Treat your `Entity` objects as Panda3D `NodePath`s when you need low-level control.  
3. Write custom Panda3D shaders and assign them to your Ursina `Entity` via the `.shader` property.  

For full details on Panda3D’s shader system, see Panda3D’s official documentation.  
