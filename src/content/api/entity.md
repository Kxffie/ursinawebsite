---
title: "Entity"
description: "Reference for the base Entity class, which represents any object in the scene with transform, rendering, collision, input and scripting support."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/entity.py"
category: "[1] Basics"  
sort: 1
---

# Entity

`Entity(add_to_scene_entities=True, enabled=True, **kwargs)`

Located in `ursina/entity.py`

## Overview

The `Entity` class is the foundation for all scene objects. It provides position, rotation, scale, rendering, collision, input routing and script management. You can parent it under `scene` for 3D or under `camera.ui` for UI space.

## Constructor Arguments

| Argument                | Type            | Default    | Description                                                                 |
|-------------------------|-----------------|------------|-----------------------------------------------------------------------------|
| `add_to_scene_entities` | `bool`          | `True`     | If False, it will not be tracked by the engine update loop, but still rendered. |
| `enabled`               | `bool`          | `True`     | If False, the entity is invisible and its update/input methods are not run. |
| `**kwargs`              | `any`           |            | Any other attribute (position, model, color, etc.) can be set via kwargs.  |

## Attributes

| Name                   | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `rotation_directions`  | Default axes inversion for `.rotation`.                                           |
| `name`                 | Auto‑generated from class name in snake_case.                                      |
| `ignore`               | If True, entity’s update/input code will not run.                                  |
| `ignore_paused`        | If True, still runs when the application is paused.                                |
| `ignore_input`         | If True, input events are not sent to this entity.                                 |
| `parent`               | Parent entity (default `scene`). Set to `camera.ui` for UI space.                  |
| `add_to_scene_entities`| See constructor argument.                                                         |
| `scripts`              | List of attached script instances.                                                |
| `animations`           | Active animations on this entity.                                                 |
| `hovered`              | True when mouse is over the collider.                                             |
| `line_definition`      | Traceback info for where this entity was created.                                  |
| `enabled`              | See constructor argument.                                                         |

## Properties

| Property               | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| `.enabled`             | Get/set enabled state.                                                                        |
| `.model`               | Name of the model to render (without extension).                                              |
| `.color`               | Tint color.                                                                                   |
| `.eternal`             | If True, not destroyed on `scene.clear()`.                                                    |
| `.double_sided`        | If True, render both faces of polygons.                                                       |
| `.render_queue`        | Custom draw order (use `.z` for simple 2D sorting).                                           |
| `.parent`              | Current parent.                                                                               |
| `.loose_parent`        | Change parent without affecting world transform.                                              |
| `.world_parent`        | Alias for loose_parent.                                                                       |
| `.types`               | List of class names in its inheritance chain.                                                |
| `.visible`             | Get/set visibility including children.                                                        |
| `.visible_self`        | Get/set visibility of this entity only.                                                       |
| `.collider`            | Collider shape: `'box'`, `'sphere'`, `'capsule'`, `'mesh'`.                                    |
| `.collision`           | Toggle collision detection without changing collider.                                         |
| `.on_click`            | Handler called on mouse click.                                                                |
| `.origin`, `.origin_x`, `.origin_y`, `.origin_z` | Anchor point for position and rotation.                               |
| `.position`, `.x`, `.y`, `.z`       | Local position or individual axes.                                             |
| `.X`, `.Y`, `.Z`       | Integer-cast shortcuts for `.x`, `.y`, `.z`.                                                  |
| `.world_position`, `.world_x`, `.world_y`, `.world_z` | Position in world space.                        |
| `.rotation`, `.rotation_x`, `.rotation_y`, `.rotation_z` | Local rotation or individual axes.           |
| `.world_rotation`, `.world_rotation_x`, `.world_rotation_y`, `.world_rotation_z` | Rotation in world space. |
| `.quaternion`          | Rotation as quaternion.                                                                       |
| `.scale`, `.scale_x`, `.scale_y`, `.scale_z` | Local scale or individual axes.                                       |
| `.world_scale`, `.world_scale_x`, `.world_scale_y`, `.world_scale_z` | Scale in world space.     |
| `.transform`           | Combined (position, rotation, scale).                                                         |
| `.world_transform`     | Combined world transform.                                                                     |
| `.forward`, `.back`, `.right`, `.left`, `.up`, `.down` | Direction vectors in world space.                  |
| `.screen_position`     | Projected UI‑space position.                                                                  |
| `.shader`              | Assigned shader.                                                                              |
| `.shader_input`        | Shader input values.                                                                          |
| `.material`            | Shortcut to set shader, texture, scale, offset and inputs together.                           |
| `.texture`             | Texture path (requires a model).                                                              |
| `.texture_scale`       | UV tiling factor, e.g. `(8,8)`.                                                                |
| `.texture_offset`      | UV offset.                                                                                    |
| `.tileset_size`        | Grid size when using a tileset.                                                               |
| `.tile_coordinate`     | Index of tile in a tileset.                                                                   |
| `.alpha`               | Shortcut for color transparency.                                                              |
| `.always_on_top`       | If True, render on top of others.                                                             |
| `.unlit`               | If True, ignore lighting.                                                                     |
| `.billboard`           | If True, face the camera always.                                                              |
| `.wireframe`           | If True, draw as wireframe.                                                                   |
| `.model_bounds`, `.bounds` | Mesh bounds information.                                                                 |
| `.flipped_faces`       | Indicates inverted normals.                                                                   |
| `.children`, `.loose_children` | Child entities.                                                                         |
| `.attributes`          | List of attribute names (used by `duplicate()`).                                              |

## Methods

| Method                                                                                | Description                                                                                       |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `enable()`                                                                            | Equivalent to `.enabled = True`.                                                                   |
| `disable()`                                                                           | Equivalent to `.enabled = False`.                                                                  |
| `get_shader_input(name)`                                                               | Return shader input value.                                                                         |
| `set_shader_input(name, value)`                                                        | Set shader input value.                                                                            |
| `generate_sphere_map(size=512, name=...)`                                              | Create a spherical environment map texture.                                                        |
| `generate_cube_map(size=512, name=...)`                                                | Create a cube‑map environment texture.                                                             |
| `get_position(relative_to=scene)`                                                      | Get position relative to another entity.                                                           |
| `set_position(value, relative_to=scene)`                                              | Set position relative to another entity.                                                           |
| `rotate(value, relative_to=None)`                                                      | Rotate around local or given axis.                                                                 |
| `add_script(class_instance)`                                                           | Attach a script component.                                                                         |
| `combine(analyze=False, auto_destroy=True, ...)`                                       | Merge child meshes into one mesh.                                                                  |
| `look_at(target, axis='forward', up=None)`                                            | Orient entity to face a target in 3D.                                                              |
| `look_at_2d(target, axis='z')`                                                         | Orient in 2D (ignoring one axis).                                                                  |
| `look_at_xy(target)`                                                                   | Face a target in the XY plane.                                                                     |
| `look_at_xz(target)`                                                                   | Face a target in the XZ plane.                                                                     |
| `has_ancestor(possible_ancestor)`                                                      | True if this entity is nested under another.                                                       |
| `has_disabled_ancestor()`                                                              | True if any parent is disabled.                                                                    |
| `get_changes(target_class=None)`                                                       | Return dict of properties that differ from defaults.                                               |
| `animate(name, value, duration=.1, ...)`                                               | Animate any attribute over time with optional curve, delay, looping.                                |
| `animate_position(value, duration=.1, **kwargs)`                                       | Shortcut to animate `.position`.                                                                    |
| `animate_rotation(value, duration=.1, **kwargs)`                                       | Shortcut to animate `.rotation`.                                                                    |
| `animate_scale(value, duration=.1, **kwargs)`                                          | Shortcut to animate `.scale`.                                                                       |
| `shake(duration=.2, magnitude=1, ...)`                                                 | Apply a shaking effect to a chosen attribute.                                                       |
| `animate_color(value, duration=.1, ...)`                                               | Animate `.color`.                                                                                   |
| `fade_out(value=0, duration=.5, ...)`                                                  | Fade transparency to a target alpha.                                                                |
| `fade_in(value=1, duration=.5, ...)`                                                   | Fade transparency back in.                                                                           |
| `blink(value=color.clear, duration=.1, ...)`                                          | Quick fade‑out and back‑in (boomerang curve).                                                       |
| `intersects(traverse_target=scene, ignore=None, debug=False)`                          | Return collision hits against a collider or scene.                                                 |

## Example Usage

```python
from ursina import *
app = Ursina()

# simple quad entity
e = Entity(
    model='quad',
    color=color.orange,
    position=(0,0,1),
    scale=1.5,
    rotation=(0,0,45),
    texture='brick'
)

# subclassing Entity
class Player(Entity):
    def __init__(self, **kwargs):
        super().__init__()
        self.model = 'cube'
        self.color = color.red
        self.scale_y = 2
        for key, value in kwargs.items():
            setattr(self, key, value)

    def input(self, key):
        if key == 'space':
            self.animate_x(2, duration=1)

    def update(self):
        self.x += held_keys['d'] * time.dt * 10
        self.x -= held_keys['a'] * time.dt * 10

player = Player(x=-1)

app.run()
