---
title: "Mouse Input"
description: "Configuring Entities to respond to mouse hover and clicks."
pubDate: "2025-05-12"
category: "Entity Basics"
sort: 9
---

# Mouse Input

An entity needs a `collider` to get mouse events (Buttons include one by default).

- **Hovered entity**:  
  ```python
  print(mouse.hovered_entity)
  print(my_entity.hovered)
  ```

- **Click and hover callbacks**:  
  Assign any callable to these attributes:

  ```python
  def on_hit():
      print('Ow!')

  Entity(
      model='quad',
      parent=camera.ui,
      scale=0.1,
      collider='box',
      on_click=on_hit
  )
  ```

  Mouse enter/exit:

  ```python
  b = Button(scale=(0.5, 0.25), text='zzz')
  b.on_mouse_enter = Func(setattr, b, 'text', 'Hi!')
  b.on_mouse_exit  = Func(setattr, b, 'text', 'Bye!')
  ```
