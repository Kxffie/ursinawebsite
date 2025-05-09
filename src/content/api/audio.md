---
title: "Audio"
description: "Reference for the Audio class, which loads and controls playback of sound clips."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/audio.py"
category: "Basics"
sort: 5
---

# Audio

`Audio(sound_file_name='', volume=1, pitch=1, balance=0, loop=False, loops=1, autoplay=True, auto_destroy=False, **kwargs)`

Located in `ursina/audio.py`

## Overview

`Audio` is an `Entity` subclass that loads a sound file and offers playback control, volume, pitch, looping, panning and fade effects. It can auto‑play on creation and optionally remove itself when finished.

## Constructor Arguments

| Argument            | Type    | Default   | Description                                                 |
|---------------------|---------|-----------|-------------------------------------------------------------|
| `sound_file_name`   | `str`   | `''`      | Name or path of the audio file (omit extension to auto‑detect). |
| `volume`            | `float` | `1`       | Initial volume multiplier.                                  |
| `pitch`             | `float` | `1`       | Playback pitch (speed).                                     |
| `balance`           | `float` | `0`       | Stereo pan (–0.5 left to +0.5 right).                       |
| `loop`              | `bool`  | `False`   | If `True`, play repeatedly.                                 |
| `loops`             | `int`   | `1`       | Number of times to repeat when `loop=False`.                |
| `autoplay`          | `bool`  | `True`    | If `True`, start playback immediately.                      |
| `auto_destroy`      | `bool`  | `False`   | If `True`, destroy the entity when playback ends.           |
| `**kwargs`          | `any`   |           | Other `Entity` attributes (position, parent, etc.).         |

## Class Fields

| Name                 | Type    | Default   | Description                              |
|----------------------|---------|-----------|------------------------------------------|
| `Audio.volume_multiplier` | `float` | `0.5` | Global volume scale applied to all Audio instances. |
| `._clip`             | `any`   | `sound_file_name` | Loaded sound clip object.            |
| `._volume`           | `float` | `volume`  | Effective playback volume.               |
| `._pitch`            | `float` | `pitch`   | Effective playback pitch.                |
| `._balance`          | `float` | `balance` | Effective stereo pan.                    |
| `._loop`             | `bool`  | `loop`    | Loop flag.                               |
| `._autoplay`         | `bool`  | `autoplay`| Autoplay flag.                           |
| `._auto_destroy`     | `bool`  | `auto_destroy` | Auto‑destroy flag.                  |

## Properties

| Property    | Description                                                    |
|-------------|----------------------------------------------------------------|
| `.volume`   | Get or set playback volume.                                    |
| `.pitch`    | Get or set playback pitch.                                     |
| `.loop`     | Get or set loop flag.                                          |
| `.loops`    | Get or set repeat count.                                       |
| `.clip`     | Get or set the loaded sound clip.                              |
| `.length`   | Duration of the clip in seconds.                               |
| `.status`   | Playback status (`'playing'`, `'paused'`, `'stopped'`).       |
| `.ready`    | True when clip has loaded and is ready to play.                |
| `.playing`  | True while audio is actively playing.                          |
| `.time`     | Current playback time in seconds.                              |
| `.balance`  | Get or set stereo pan.                                         |

## Methods

| Method                                                             | Description                                                                      |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------|
| `play(start=0)`                                                    | Start playback at `start` seconds into the clip.                                 |
| `pause()`                                                          | Pause playback, retaining current time.                                          |
| `resume()`                                                         | Resume from paused position.                                                     |
| `stop(destroy=True)`                                               | Stop playback. If `destroy=True`, destroy entity.                                |
| `fade(value, duration=0.5, delay=0, curve=curve.in_expo, ...)`      | Animate volume to `value` over `duration` seconds after `delay`.                 |
| `fade_in(value=1, duration=0.5, delay=0, ...)`                      | Shortcut to fade from 0 to `value`.                                              |
| `fade_out(value=0, duration=0.5, delay=0, ...)`                     | Shortcut to fade from current volume to 0.                                        |

## Example Usage

```python
from ursina import Ursina, Audio
import random

app = Ursina()

# create a looping sine tone at half volume
a = Audio('sine', loop=True, autoplay=True)
a.volume = 0.5

def input(key):
    if key == 'space':
        # play a new tone with random pitch
        Audio('sine', pitch=random.uniform(0.5, 1), loop=True)

app.run()
