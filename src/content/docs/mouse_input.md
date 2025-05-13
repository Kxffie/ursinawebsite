---
title: "Mouse Input"
description: "Provides patterns for detecting hover and click events through colliders and handy on_* mouse callbacks."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 9
---

### Basic mouse queries

Entities can react to the mouse as long as they have a collider.
Buttons will have one by default, but you can also assign one.

```python
# the entity currently under the mouse
print(mouse.hovered_entity)

# check if an entity with a collider is hovered by the mouse
print(my_entity.hovered)
```

### Mouse event helpers

There are also functions for handling mouse clicks and hover events.
These only work if the Entity has a collider and the function or callable is assigned.

* `on_click()`
* `on_double_click()`
* `on_mouse_enter()`
* `on_mouse_exit()`

Example using `on_click`:

```python
def action():
    print('Ow! That hurt!')

Entity(model='quad', parent=camera.ui, scale=.1, collider='box', on_click=action) # on_click should be a function, callable, Func or Sequence
```

Example using `on_mouse_enter` and `on_mouse_exit`:

```python
b = Button(scale=(.5, .25), text='zzz')
b.on_mouse_enter = Func(setattr, b, 'text', 'Hi, friend :D')
b.on_mouse_exit = Func(setattr, b, 'text', """No! Don't leave me ;-;""")
```
