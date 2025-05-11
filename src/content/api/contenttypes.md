---
title: "ContentTypes"
description: "Predefined character sets for InputField validation."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/input_field.py"
category: "UI"
sort: 7
---

# ContentTypes

Located in `ursina/prefabs/input_field.py`

## Available Types

- `ContentTypes.int` — digits `'0123456789'`  
- `ContentTypes.float` — digits plus `'.', ','`  
- `ContentTypes.int_math` — `int` plus `'+', '-', '*', '/'`  
- `ContentTypes.math` — `float` plus `'+', '-', '*', '/'`  

## Example

```python
from ursina import *

app = Ursina()
username_field = InputField(limit_content_to=ContentTypes.int, default_value='123', active=True)
app.run()
```