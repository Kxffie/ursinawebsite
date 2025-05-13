---
title: "Model"
description: "Guide to assigning built‑in or custom 3D models to entities, including supported file formats and usage examples."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 1
---

There are several included models like 'quad', 'plane', 'cube', and 'sphere',
but you can also use your own.
To do that simply give the base name of your model and it will glob/search for
the model and take the first one it finds.

Supported file types are:
- obj
- bam (binary format)
- blend (gets auto converted to an obj)
- ursinamesh (custom human readable format identical to how you'd make a Mesh in code)

```python
Entity(model='name_of_your_model')
```

> [!TIP]
> Learn more about models at the API Reference docs.
>
>👉 [Browse API Reference](/api/models)