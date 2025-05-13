---
title: "Sequence"
description: "Schedule a series of functions, waits, and animations over time."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/sequence.py"
category: "[8] Gameplay"
sort: 1
---

# Sequence

`Sequence(*args, **kwargs)`

Located in `ursina/sequence.py`

## Overview

`Sequence` lets you chain together calls, delays, and animation functions in order. You can loop, pause, resume, or kill a sequence. Assign an `entity` to auto-pause when it’s disabled or ignored.

## Constructor Arguments

| Argument   | Type     | Description                                                                |
|------------|----------|----------------------------------------------------------------------------|
| `*args`    | mixed    | A mix of callables, numbers (seconds to wait), `Func`, `Wait`, or nested `Sequence` objects.  |
| `**kwargs` | any      | Reserved for future use.                                                   |

## Properties

| Property    | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `.finished` | `bool` — `True` when the sequence has run through all its steps (unless looping).          |
| `.entity`   | Optional `Entity` to link to. If disabled or `.ignore` is `True`, the sequence auto-pauses.|

## Methods

| Method                | Description                                                                          |
|-----------------------|--------------------------------------------------------------------------------------|
| `generate()`          | Precompute timings from `.args` into `.funcs` and `.func_call_time` arrays.         |
| `append(arg, regenerate=True)` | Add an action or wait to the end of the sequence.                           |
| `extend(list)`        | Add multiple actions or waits at once.                                              |
| `start()`             | Begin or restart the sequence from the beginning.                                    |
| `pause()`             | Temporarily stop at the current step/time.                                           |
| `resume()`            | Continue after a pause.                                                              |
| `finish()`            | Jump immediately to the end, executing any final calls.                              |
| `kill()`              | Stop and clear the sequence; cannot be resumed.                                      |
| `update()`            | Internal method called each frame to advance the sequence.                           |

## Example

```python
from ursina import *
from ursina.sequence import Sequence
from ursina import Func, Wait

app = Ursina()
e = Entity(model='quad', color=color.azure)

def some_func():
    print('some_func called')

# build a looping sequence
s = Sequence(
    some_func,
    1,                              # wait 1 second
    Func(print, 'one'),
    Func(e.fade_out, duration=1),
    Wait(1),                        # another second
    loop=True
)

# add more steps dynamically
for i in range(5):
    s.append(Func(print, f"step {i}"))
    s.append(Wait(0.2))

print(s)

def input(key):
    if key == 's': s.start()
    if key == 'p': s.pause()
    if key == 'r': s.resume()
    if key == 'f': s.finish()

app.run()
```