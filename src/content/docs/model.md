---
title: "Model"
description: "How to assign built-in or custom 3D models to an Entity."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 1
---

# Model

There are several included models like `quad`, `plane`, `cube`, and `sphere`, but you can also use your own. To do that simply give the base name of your model and Ursina will search for it and load the first match.

Supported file types are:

- `obj`  
- `bam` (binary format)  
- `blend` (auto-converted to `obj`)  
- `ursinamesh` (human-readable mesh format)

```python
# use a custom model file
e = Entity(model='name_of_your_model')
