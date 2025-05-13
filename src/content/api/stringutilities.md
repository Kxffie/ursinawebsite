---
title: "StringUtilities"
description: "Helper functions for converting between camelCase and snake_case, multi‑replace, and debug printing."
pubDate: "2025-05-08"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/string_utilities.py"
category: "[5] Modules"
sort: 3
---

# String Utilities

No constructor—import functions from `ursina.string_utilities`. Provides simple text transformations and debug printing.

## Methods

| Function                        | Description                                                                              |
|---------------------------------|------------------------------------------------------------------------------------------|
| `camel_to_snake(value)`         | Convert `"CamelCase"` → `"camel_case"`.                                                   |
| `snake_to_camel(value)`         | Convert `"snake_case"` → `"SnakeCase"`.                                                  |
| `multireplace(string, replacements, ignore_case=False)` | Replace multiple substrings in one pass using a dict of `{old: new}`.        |
| `printvar(var)`                 | Print the caller’s variable name and its value for quick debugging.                       |
| `print_info(str, *args)`        | Conditionally print info messages when `application.print_info` is `True`.                |
| `print_warning(str, *args)`     | Conditionally print warnings when `application.print_warnings` is `True`.                 |

## Example

```python
from ursina.string_utilities import *

print(camel_to_snake('CamelToSnake'))   # → "camel_to_snake"
print(snake_to_camel('snake_to_camel')) # → "SnakeToCamel"

x = 42
printvar(x)                             # → "x = 42"
