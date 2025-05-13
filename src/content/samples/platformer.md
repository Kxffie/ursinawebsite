---
title: "Platformer"
image: "platformer.jpg"
description: "2D platformer demo with physics and smooth camera follow"
source: "https://github.com/pokepetter/ursina/blob/master/samples/platformer.py"
pubDate: "5/6/2025"
author: "Pokepetter"
authorImg: "people/pokepetter.webp"
officialSample: true
---

## How it works

## Code

```python
from ursina import *
from ursina.prefabs.platformer_controller_2d import PlatformerController2d

app = Ursina()
window.color = color.light_gray
camera.orthographic = True
camera.fov = 20

# ground
ground = Entity(
    model='cube', color=color.olive.tint(-.4),
    z=-.1, y=-1, origin_y=.5,
    scale=(1000,100,10), collider='box', ignore=True
)

# random platforms
random.seed(4)
for i in range(10):
    Entity(
        model='cube', color=color.dark_gray,
        collider='box', ignore=True,
        position=(random.randint(-20,20), random.randint(0,10)),
        scale=(random.randint(1,20), random.randint(2,5), 10)
    )

# player
player = PlatformerController2d()
player.x = 1
player.y = raycast(player.world_position, player.down).world_point[1] + .01

# smooth camera
camera.add_script(SmoothFollow(
    target=player, offset=[0,5,-30], speed=4
))

# input bindings
input_handler.bind('right arrow', 'd')
input_handler.bind('left arrow', 'a')
input_handler.bind('up arrow', 'space')
input_handler.bind('gamepad dpad right', 'd')
input_handler.bind('gamepad dpad left', 'a')
input_handler.bind('gamepad a', 'space')

# development cheats
if application.development_mode:
    from ursina.scripts.noclip_mode import NoclipMode2d
    player.add_script(NoclipMode2d())

app.run()
