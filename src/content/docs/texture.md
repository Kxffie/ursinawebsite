---
title: "Texture"
description: "Shows how to apply textures or video materials to entities and introduces the Sprite helper for 2D graphics."
pubDate: "2025-05-12"
category: "[2] Entity Basics"
sort: 2
---

Setting a texture is similar to setting a model. Just give it a name in this case as well:

```python
e1 = Entity(model='cube', texture='texture_name')

# other ways are:
e2 = Entity(model='cube', texture=e1.texture) # or set it to another Texture
e3 = Entity(model='cube', texture=Texture(PIL.Image.new(mode="RGBA", size=(854,480)))) # set a PIL texture
e4 = Entity(model='cube', texture='movie_name.mp4') # set video texture
```

For 2d graphics there's also the Sprite class, which is simply an Entity with a
'quad' model and scale set to automatically fit the size and aspect ratio of the texture.

```python
s = Sprite('texture_name')
print(s.aspect_ratio)
```

> [!IMPORTANT]
> Looking for textures to add to your game? Browse community‑made shaders in the `/assets` folder.
>
>👉 [Browse Community Assets](/assets)