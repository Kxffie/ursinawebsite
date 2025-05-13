---
title: "Shader"
description: "Reference for the Shader class, which lets you compile and apply custom GPU shaders (vertex, fragment, geometry) in Ursina."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/shader.py"
category: "[3] Graphics"
sort: 2
---

# Shader

`Shader(name='untitled_shader', language=Shader.GLSL, vertex=default_vertex_shader, fragment=default_fragment_shader, geometry='', **kwargs)`

Located in `ursina/shader.py`

> [!IMPORTANT]
> Looking for shaders to add to your game? Browse community‑made shaders in the `/assets` folder.
>
>👉 [Browse Community Assets](/assets)

## Overview

The `Shader` class wraps Panda3D’s shader system. It lets you supply GLSL, Cg, HLSL or SPIR‑V source for vertex, fragment and optional geometry stages, compile them at runtime, then assign the shader to any `Entity` or `Camera`.

## Constructor Arguments

| Argument    | Type    | Default                           | Description                                                 |
|-------------|---------|-----------------------------------|-------------------------------------------------------------|
| `name`      | `str`   | `'untitled_shader'`               | Identifier for debug or hot‑reload.                         |
| `language`  | `enum`  | `Shader.GLSL`                     | One of `Shader.CG`, `Shader.GLSL`, `Shader.HLSL`, `Shader.SPIR_V`. |
| `vertex`    | `str`   | `default_vertex_shader`           | Source code string for the vertex stage.                    |
| `fragment`  | `str`   | `default_fragment_shader`         | Source code string for the fragment stage.                  |
| `geometry`  | `str`   | `''`                              | Source code for an optional geometry stage.                 |
| `**kwargs`  | `any`   |                                   | Additional Panda3D `Shader` parameters.                     |

## Class Fields

| Name              | Description                                                  |
|-------------------|--------------------------------------------------------------|
| `Shader.CG`       | Cg shading language constant.                                |
| `Shader.GLSL`     | GLSL shading language constant.                              |
| `Shader.HLSL`     | HLSL shading language constant.                              |
| `Shader.SPIR_V`   | SPIR‑V shading language constant.                            |
| `.name`           | Shader identifier.                                           |
| `.language`       | Current language constant.                                   |
| `.vertex`, `.fragment`, `.geometry` | Source code strings for each stage.         |
| `.default_input`  | Uniforms set once at compile.                                |
| `.continuous_input` | Uniforms updated every frame.                              |
| `.compiled`       | True once `compile()` has succeeded.                         |

## Properties

| Property         | Description                                            |
|------------------|--------------------------------------------------------|
| `.name`          | Get/set the shader’s debug name.                      |
| `.language`      | Get/set shading language.                             |
| `.compiled`      | True if the GPU program is linked.                     |

## Methods

| Method                                              | Description                                                         |
|-----------------------------------------------------|---------------------------------------------------------------------|
| `compile(shader_includes=True)`                     | Compile and link the shader. If `shader_includes`, inject common headers. |
| `load(cls, language, vertex, fragment, geometry, **kwargs)` | Class method to create and compile a shader in one call.            |

## Example Usage

```python
from time import perf_counter
from ursina import *
from ursina import Ursina, Entity, held_keys, scene, EditorCamera, Shader

app = Ursina()
t0 = perf_counter()

# apply a fresh shader to a cube
cube = Entity(model='cube', shader=Shader())

# allow free camera
EditorCamera()

print('shader compile + setup time:', perf_counter() - t0)

def input(key):
    if held_keys['control'] and key == 'r':
        # recompile all shaders on the fly
        for e in scene.entities:
            if hasattr(e, '_shader'):
                e.shader.compile()
        
app.run()
