---
title: "UrsinaStuff"
description: "General-purpose gameplay utilities and helpers."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/ursinastuff.py"
category: "[8] Gameplay"
sort: 0
---

# UrsinaStuff

Utility functions for scheduling, list manipulation, on-screen debugging, and more.

## Functions

| Function                                              | Description                                                                                    |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `invoke(function, *args, **kwargs)`                   | Call `function` later. Accepts `delay=` and `unscaled=` keywords.                               |
| `after(delay, unscaled=True)`                         | Decorator to run a function after a delay.                                                     |
| `reset_cooldown()`                                    | Reset any active cooldown on an `invoke` wrapper.                                              |
| `wrapper(*args, **kwargs)`                            | Returned by `invoke`/`after`, executes the scheduled call.                                     |
| `destroy(entity, delay=0)`                            | Destroy an entity (or call `destroy`) after an optional delay (in seconds).                    |
| `chunk_list(target_list, chunk_size)`                 | Split a flat list into sublists of length `chunk_size`.                                        |
| `flatten_list(target_list)`                           | Flatten one level of nesting in a list.                                                        |
| `flatten_completely(target_list)`                     | Fully flatten nested lists/tuples into a single list.                                          |
| `enumerate_2d(target_2d_list)`                        | Iterate over a 2D list returning `((x, y), value)` pairs.                                      |
| `enumerate_3d(target_3d_list)`                        | Iterate over a 3D list returning `((x, y, z), value)` pairs.                                   |
| `rotate_2d_list(target_2d_list)`                      | Rotate a 2D list matrix 90° clockwise.                                                         |
| `list_2d_to_string(target_2d_list, characters='.#')`  | Convert a 2D list of 0/1 (or other values) into lines of text using `characters` as mapping.   |
| `size_list()`                                         | Return currently loaded Python objects sorted by memory usage.                                  |
| `find_sequence(name, file_types, folders)`            | Search for files `name_0`, `name_1`, … in given folders and extensions.                        |
| `import_all_classes(path, debug=False)`               | Dynamically import all classes from `.py` files under `path`.                                   |
| `print_on_screen(text, position=(0,0), origin=(-.5,.5), scale=1, duration=1)` | Render `text` in UI space for a set duration. |

## Example

```python
from ursina import *
from ursina.ursinastuff import list_2d_to_string, destroy, invoke

app = Ursina()

# convert a 2D array into a text-based preview
list_2d = [
    [1,0,0,1, 0,1,1,1,0],
    [0,1,1,0, 1,0,0,1,0],
]
print(list_2d_to_string(list_2d))

# schedule and cancel
a = Audio('sine')
a.play()
invoke(destroy, a, delay=1)   # destroy the audio entity after 1 second

# decorator style
@after(2, unscaled=False)
def on_two_seconds():
    print('Two seconds have passed!')

app.run()
```