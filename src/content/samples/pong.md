---
title: "Pong"
image: "pong.jpg"
description: "Classic 2D Pong game"
source: "https://github.com/pokepetter/ursina/blob/master/samples/pong.py"
pubDate: "5/6/2025"
author: "Pokepetter"
authorImg: "people/pokepetter.webp"
officialSample: true
---


## How it works

## Code

```python
from ursina import *

app = Ursina()

window.color = color.black
camera.orthographic = True
camera.fov = 1

# paddles
left_paddle = Entity(
    scale=(1/32, 6/32),
    x=-.75, model='quad',
    origin_x=.5, collider='box'
)
right_paddle = duplicate(
    left_paddle,
    x=left_paddle.x * -1,
    rotation_z=left_paddle.rotation_z + 180
)

# walls
floor = Entity(
    model='quad', y=-.5, origin_y=.5,
    collider='box', scale=(2,10), visible=False
)
ceiling = duplicate(floor, y=.5, rotation_z=180)
left_wall = duplicate(
    floor,
    x=-.5 * window.aspect_ratio,
    rotation_z=90,
    visible=True
)
right_wall = duplicate(
    floor,
    x=.5 * window.aspect_ratio,
    rotation_z=-90,
    visible=True
)

# ball & scoring
left_score = 0
right_score = 0
max_score = 5
game_paused = False
collision_cooldown = .15

ball = Entity(
    model='circle',
    scale=.05,
    collider='box',
    speed=0,
    collision_cooldown=collision_cooldown
)

score_text = Text(
    text=f"{left_score} : {right_score}",
    position=(0, .45),
    scale=2,
    origin=(0,0)
)

def update():
    global left_score, right_score, game_paused

    if game_paused:
        return

    ball.collision_cooldown -= time.dt
    ball.position += ball.right * time.dt * ball.speed

    # paddle movement
    left_paddle.y += (held_keys['w'] - held_keys['s']) * time.dt
    right_paddle.y += (held_keys['up arrow'] - held_keys['down arrow']) * time.dt

    if ball.collision_cooldown > 0:
        return

    hit_info = ball.intersects()
    if hit_info.hit:
        ball.collision_cooldown = collision_cooldown
        entity = hit_info.entity

        if entity in (left_paddle, right_paddle):
            ball.rotation_z += 180 * (-1 if entity == left_paddle else 1)
            ball.rotation_z -= (entity.world_y - ball.y) \
                * 20 * 32 \
                * (-1 if entity == left_paddle else 1)
            ball.speed *= 1.1

        elif entity == right_wall:
            left_score += 1
            update_score()

        elif entity == left_wall:
            right_score += 1
            update_score()

        # collision particle effect
        particle = Entity(
            model='quad',
            position=hit_info.world_point,
            scale=0,
            texture='circle',
            add_to_scene_entities=False
        )
        particle.animate_scale(.2, .5, curve=curve.out_expo)
        particle.animate_color(color.clear, duration=.5, curve=curve.out_expo)
        destroy(particle, delay=.5)

    # bounce off top/bottom
    if (
        ball.y > ceiling.y - ball.scale_y/2
        or ball.y < floor.y + ball.scale_y/2
    ):
        ball.rotation_z = -ball.rotation_z

def update_score():
    global left_score, right_score, game_paused

    score_text.text = f"{left_score} : {right_score}"

    if left_score >= max_score or right_score >= max_score:
        winner = 'Left' if left_score >= max_score else 'Right'
        Text(
            f"{winner} Player Wins!",
            y=0,
            scale=2,
            origin=(0,0)
        )
        ball.speed = 0
        game_paused = True
        invoke(destroy, _, delay=3)

def reset():
    global game_paused
    ball.position = (0, 0, 0)
    ball.rotation = (0, 0, 0)
    ball.speed = 10
    game_paused = False
    for paddle in (left_paddle, right_paddle):
        paddle.collision = True
        paddle.y = 0

info_text = Text("press space to play", y=-.45)

def input(key):
    global game_paused
    if key == 'space' and not game_paused:
        info_text.enabled = False
        reset()

app.run()
