---
title: "Particle System"
image: "particle_system.jpg"
description: "Particle Simulation"
source: "https://github.com/pokepetter/ursina/blob/master/samples/particle_system.py"
pubDate: "5/6/2025"
author: "Pokepetter"
authorImg: "people/pokepetter.webp"
officialSample: true
---

## How it works

## Code

```python
from ursina import *
import numpy as np
import random
import copy
from math import floor

# number of particles
number_of_particles = 1000

# initial positions and directions
points = np.array([Vec3(0, 0, 0) for i in range(number_of_particles)])
directions = np.array([
    Vec3(random.random() - 0.5,
         random.random() - 0.5,
         random.random() - 0.5) * 0.05
    for i in range(number_of_particles)
])

# cache frames for one second at 60fps
frames = []
for i in range(60):
    points += directions
    frames.append(copy.copy(points))


class ParticleSystem(Entity):
    def __init__(self, **kwargs):
        super().__init__(
            model=Mesh(
                vertices=points,
                mode='point',
                static=False,
                render_points_in_3d=True,
                thickness=.1
            ),
            t=0,
            duration=1,
            **kwargs
        )
        for key, value in kwargs.items():
            setattr(self, key, value)

    def update(self):
        self.t += time.dt
        if self.t >= self.duration:
            destroy(self)
            return
        # pick the current frame and redraw
        frame_index = floor(self.t * 60)
        self.model.vertices = frames[frame_index]
        self.model.generate()


if __name__ == '__main__':
    app = Ursina(vsync=False)
    window.color = color.black

    def input(key):
        if key == 'space':
            ParticleSystem(
                position=Vec3(random.random(),
                              random.random(),
                              random.random()) * 2,
                color=color.random_color(),
                rotation_y=random.random() * 360
            ).fade_out(duration=.2, delay=.8, curve=curve.linear)

    Text('press space to spawn particles', origin=(0, 0), y=-.45)
    EditorCamera()
    app.run()
