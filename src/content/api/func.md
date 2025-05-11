---
title: "Func"
description: "Wrap a callable and its arguments for use in a `Sequence`."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/sequence.py"
category: "Gameplay"
sort: 2
---

# Func

`Func(func, *args, **kwargs)`

Located in `ursina/sequence.py`

## Overview

`Func` is a simple container that holds a function reference along with its positional and keyword arguments. When used inside a `Sequence`, it ensures your function is called at the correct time with the specified parameters.

## Properties

| Property   | Description                               |
|------------|-------------------------------------------|
| `.func`    | The callable to execute.                  |
| `.args`    | Tuple of positional arguments.            |
| `.kwargs`  | Dictionary of keyword arguments.          |

## Example

```python
from ursina import *
from ursina.sequence import Sequence, Func, Wait

app = Ursina()
e = Entity(model='quad', color=color.azure)

def some_func():
    print('some_func called')

s = Sequence(
    some_func,
    1,                              # wait 1 second
    Func(print, 'one'),             # will call print('one')
    Func(e.fade_out, duration=1),   # will call e.fade_out(duration=1)
    Wait(1),
    loop=True
)

# dynamically add more print steps
for i in range(5):
    s.append(Func(print, f"step {i}"))
    s.append(Wait(0.2))

def input(key):
    actions = {'s': s.start, 'p': s.pause, 'r': s.resume, 'f': s.finish}
    if key in actions:
        actions[key]()

app.run()
```