---
title: "Keys"
description: "Enum of input key names and functions for rebinding and handling inputs."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/input_handler.py"
category: "[8] Gameplay"
sort: 3
---

# Keys

All mouse, keyboard, and gamepad input events are exposed as string constants on the `Keys` enum.

## Mouse Buttons
- **Keys.left_mouse_down**  `"left mouse down"`
- **Keys.left_mouse_up**  `"left mouse up"`
- **Keys.middle_mouse_down**  `"middle mouse down"`
- **Keys.middle_mouse_up**  `"middle mouse up"`
- **Keys.right_mouse_down**  `"right mouse down"`
- **Keys.right_mouse_up**  `"right mouse up"`
- **Keys.double_click**  `"double click"`

## Scroll Wheel
- **Keys.scroll_up**  `"scroll up"`
- **Keys.scroll_down**  `"scroll down"`

## Arrow Keys
- **Keys.left_arrow**  `"left arrow"`
- **Keys.left_arrow_up**  `"left arrow up"`
- **Keys.up_arrow**  `"up arrow"`
- **Keys.up_arrow_up**  `"up arrow up"`
- **Keys.down_arrow**  `"down arrow"`
- **Keys.down_arrow_up**  `"down arrow up"`
- **Keys.right_arrow**  `"right arrow"`
- **Keys.right_arrow_up**  `"right arrow up"`

## Page Navigation
- **Keys.page_up**  `"page up"`
- **Keys.page_up_up**  `"page up up"`
- **Keys.page_down**  `"page down"`
- **Keys.page_down_up**  `"page down up"`

## Editing & Control
- **Keys.enter**  `"enter"`
- **Keys.backspace**  `"backspace"`
- **Keys.escape**  `"escape"`
- **Keys.tab**  `"tab"`

## Modifier Keys
- **Keys.left_control**  `"left control"`
- **Keys.left_control_up**  `"left control up"`
- **Keys.right_control**  `"right control"`
- **Keys.right_control_up**  `"right control up"`
- **Keys.left_shift**  `"left shift"`
- **Keys.left_shift_up**  `"left shift up"`
- **Keys.right_shift**  `"right shift"`
- **Keys.right_shift_up**  `"right shift up"`
- **Keys.left_alt**  `"left alt"`
- **Keys.left_alt_up**  `"left alt up"`
- **Keys.right_alt**  `"right alt"`
- **Keys.right_alt_up**  `"right alt up"`

## Gamepad Axes (held_keys only)
- **Keys.gamepad_left_stick_x**  `"gamepad left stick x"`
- **Keys.gamepad_left_stick_y**  `"gamepad left stick y"`
- **Keys.gamepad_right_stick_x**  `"gamepad right stick x"`
- **Keys.gamepad_right_stick_y**  `"gamepad right stick y"`
- **Keys.gamepad_left_trigger**  `"gamepad left trigger"`
- **Keys.gamepad_right_trigger**  `"gamepad right trigger"`

## Gamepad Buttons & D-Pad
- **Keys.gamepad_a**  `"gamepad a"`
- **Keys.gamepad_a_up**  `"gamepad a up"`
- **Keys.gamepad_b**  `"gamepad b"`
- **Keys.gamepad_b_up**  `"gamepad b up"`
- **Keys.gamepad_x**  `"gamepad x"`
- **Keys.gamepad_x_up**  `"gamepad x up"`
- **Keys.gamepad_y**  `"gamepad y"`
- **Keys.gamepad_y_up**  `"gamepad y up"`
- **Keys.gamepad_back**  `"gamepad back"`
- **Keys.gamepad_back_up**  `"gamepad back up"`
- **Keys.gamepad_start**  `"gamepad start"`
- **Keys.gamepad_dpad_up**  `"gamepad dpad up"`
- **Keys.gamepad_dpad_up_up**  `"gamepad dpad up up"`
- **Keys.gamepad_dpad_down**  `"gamepad dpad down"`
- **Keys.gamepad_dpad_down_up**  `"gamepad dpad down up"`
- **Keys.gamepad_dpad_left**  `"gamepad dpad left"`
- **Keys.gamepad_dpad_left_up**  `"gamepad dpad left up"`
- **Keys.gamepad_dpad_right**  `"gamepad dpad right"`
- **Keys.gamepad_dpad_right_up**  `"gamepad dpad right up"`

## Gamepad Shoulder Buttons
- **Keys.gamepad_left_shoulder**  `"gamepad left shoulder"`
- **Keys.gamepad_left_shoulder_up**  `"gamepad left shoulder up"`
- **Keys.gamepad_right_shoulder**  `"gamepad right shoulder"`
- **Keys.gamepad_right_shoulder_up**  `"gamepad right shoulder up"`


## Functions

| Function                       | Description                                                                                   |
|--------------------------------|-----------------------------------------------------------------------------------------------|
| `bind(original_key, alternative_key)`   | Map `original_key` events to `alternative_key`.                                              |
| `unbind(key)`                         | Remove any rebinding for `key`.                                                              |
| `rebind(to_key, from_key)`            | Alias `to_key` events to `from_key`.                                                         |
| `input(key)`                          | Internal handler that applies all bindings before dispatching to `def input(key):` callbacks. |
| `get_combined_key(key)`               | Retrieve the final mapped key after all nested bindings.                                      |

## Example

```python
from ursina import *
from ursina import input_handler, Keys

app = Ursina(borderless=False)

# Rebind 'z' to act like 'w'
input_handler.bind('z', 'w')

# Map left-click and gamepad B to a custom 'attack' event
input_handler.bind(Keys.left_mouse_down, 'attack')
input_handler.bind(Keys.gamepad_b, 'attack')

def input(key):
    print('got key:', key)
    if key == 'attack':
        destroy(Entity(model='cube', color=color.blue), delay=0.2)

app.run()
```