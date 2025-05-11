---
title: "MeshImporter"
description: "Utilities to load 3D models from .bam, .ursinamesh, .obj, .gltf/.glb and .blend, with caching and optional conversion via Blender."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/mesh_importer.py"
category: "Modules"
sort: 1
---

# Mesh Importer

No constructor—import functions directly from `ursina.mesh_importer`. Handles locating, caching, and converting various model formats.

## Overview

- Caches imported meshes in `imported_meshes`  
- Detects and converts `.blend` via Blender CLI  
- Supports `.bam`, `.ursinamesh`, `.obj`, `.gltf`, `.glb`  

## Methods

| Function                                                                                                                  | Description                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `load_model(name, folder=None, file_types=…, use_deepcopy=False, gltf_no_srgb=…)`                                          | Find and load a model by name; optionally deepcopy or convert formats.                                                      |
| `load_blender_scene(name, folder=…, reload=False, skip_hidden=True, …)`                                                   | Export a `.blend` scene to a URSINA‐readable file, then load its entities or meshes.                                         |
| `get_blender(blend_file)`                                                                                                  | Determine appropriate Blender executable for given file/version.                                                             |
| `blend_to_obj(blend_file, out_folder=…, export_mtl=True)`                                                                  | Run Blender headless to export `.blend` → `.obj`.                                                                            |
| `obj_to_ursinamesh(folder=…, out_folder=…, name='*', return_mesh=True, save_to_file=False, delete_obj=False)`             | Read `.obj`, convert to `Mesh`, optionally save as `.bam`.                                                                   |
| `ursina_mesh_to_obj(mesh, name='', out_path=…, max_decimals=5, flip_faces=True)`                                            | Export a `Mesh` instance to `.obj`.                                                                                         |
| `compress_internal()`                                                                                                      | Compress all internal models folder to `.bam` using current importer.                                                       |

## Example

```python
from ursina import *
from ursina.mesh_importer import obj_to_ursinamesh

app = Ursina()
# convert an .obj in samples/ to Mesh without writing to disk
m = obj_to_ursinamesh(
    folder=application.asset_folder.parent / 'samples',
    name='procedural_rock_0',
    save_to_file=False,
    delete_obj=False
)
print(m.serialize())

EditorCamera()
Sky()
app.run()
