---
title: "Texture"
description: "Instructions on setting textures and using Sprite for 2D graphics."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 2
---

# Texture

Setting a texture is similar to setting a model. Just give the filename (without extension):

```python
e1 = Entity(model='cube', texture='texture_name')
```

Other ways:

```python
# copy another entity’s texture
e2 = Entity(model='cube', texture=e1.texture)

# set a PIL-created image as texture
from ursina import Texture
from PIL import Image
e3 = Entity(model='cube', texture=Texture(Image.new('RGBA', (854,480))))

# use a video file
e4 = Entity(model='cube', texture='movie_name.mp4')
```

For 2D graphics there is a `Sprite` class, which is just an `Entity` with a `quad` model and auto-scaled to the texture’s aspect ratio:

```python
s = Sprite('texture_name')
print(s.aspect_ratio)
```
