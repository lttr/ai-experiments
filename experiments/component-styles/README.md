# AI Experiment: Component styles

## Purpose

Help to kickstart component styles with a given design. Project already has its
styles, either CSS or Tailwind. Also has some rules for the design and for the
code.

For the purpose of this experiment, all the context will come from the prompt.
You are supposed to provide the CSS or Tailwind config, example component or a
set of conventions in the prompt.

As an input I choose a component from 23rd section of the
[Tailblocks](https://tailblocks.cc/) project. It is not super simple but also
not too complex. There are tricky sections like tabs or table though.

I don't expect to have any behavior, accessibility, or other aspects of a
component, I would rather only focus on the design in this experiment.

## Challenges

Ideally we want styles that are systematic, consistent, responsive, modern, etc.

## Task

Generate styles for a component given an image with the component design.

## Approach

I will use my CSS library to generate the styles. It has a lot of build in css
custom properties, so the tool can use them.

### Prompt

Start Aider:

```
aider --file ./experiments/component-styles/start/index.html --read ./experiments/component-styles/start/section-23.png  --read ./experiments/component-styles/end/node_modules/@lttr/puleo/output/puleo.post.css
```

Use this prompt in Aider:

```
Generate a component based on the given image. The HTML output put into body tag
inside index.html. The CSS put inside style tag inside index.html. Act as an
expert coder. Prefer linked CSS library, not custom styles. Use rem values when
there is no provided custom property in the given CSS. Pay attention to details
like layout, what is on the left and what is on the right, or where are borders.
```
