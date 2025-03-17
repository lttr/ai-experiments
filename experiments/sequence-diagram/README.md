# AI Experiment: Sequence Diagram

## Purpose

Create a diagram for better understanding of the source code or in order to
communicate an idea. A Mermaid output have advantages:

- Easy to render an image
- Easy to commit to a repository
- Easy to change in a consistent way by hand
- Easy for AI tools to change, since its a text file

## Challenges

- The flexibility might be limited by the choice of Mermaid, however tools like
  Excalidraw can use Mermaid as its input

## Task

From a given description, create a Mermaid sequence diagram.

## Approach

I like to write my notes in Markdown, specifically in [Obsidian](https://obsidian.md/) editor. With an
[AI plugin](https://github.com/qgrail/obsidian-ai-assistant), I make a copy of
the diagram specification and use it as a prompt for the AI tool. I selected the
text, added prompt that is below and the output was a perfect diagram. I have
used Claude 3.5 model for this experiment.

It is also important, that I have written the specification right after I have
finished the implementation. Therefore, I had everything in my head and I was
able to write the spec in a couple of minutes. The purpose was to have an image
that I can show to my colleage and discuss the solution.

### Prompt

```
Based on the given prompt, output a diagram that can be used inside a Markdown
file. Do not output any other text.
```
