---
title: "Conversation"
description: "Dialogue system with branching choices and variable tracking."
pubDate: "2025-05-11"
source: "https://github.com/pokepetter/ursina/blob/master/ursina/prefabs/conversation.py"
category: "Prefabs"
sort: 5
---

# Conversation

`Conversation(variables_object=None, **kwargs)`

Located in `ursina/prefabs/conversation.py`

## Overview

Manages a branching dialogue sequence defined by indented text. Tracks variables on the provided `variables_object` and displays selectable options.

## Key Properties

- `.question` — Button showing the current question  
- `.buttons` — Tuple of up to three answer Buttons  
- `.variables_object` — Object for storing conversation state variables  
- `.more_indicator` — Shows when more text follows  

## Methods

- `start_conversation(conversation_text)` — Parses and begins the dialogue  
- `ask(node, question_part=0)` — Displays question text and options  
- `on_click(node)` — Handles answer selection  
- `next()` — Advances to the next part  
- `parse_conversation(convo)` — Converts indented text into dialogue tree  

## Example

```python
from ursina import *
from textwrap import dedent

app = Ursina()
variables = Empty(evil=0, chaos=0, bar_mission_solved=False)
conversation = Conversation(variables_object=variables)

convo = dedent("""
I'm looking for my sister. Can you help me find her, please? I haven't seen her in days! Who knows what could've happened!?
I'm worried. Will you help me?
    * Yes, of course. This can be a dangerous city.
        Oh no! Do you think something happened to her?
        What should I do?!
            * She's probably fine. She can handle herself.
                You're right. I'm still worried though.
                    * Don't worry, I'll look for her.
            * Maybe. (stats.chaos += 1)
                Help me look for her, please! *runs off*
    * I'm sorry, but I don't have time right now. (evil += 1)
        A true friend wouldn't say that.
    * I know where she is! (if bar_mission_solved)
        Really? Where?
            * I saw her on a ship by the docks, it looked like they were ready to set off.
                Thank you! *runs off*
""")
conversation.start_conversation(convo)

def input(key):
    if key == 'space':
        print(variables.evil)

Sprite('shore', z=1)
app.run()
```