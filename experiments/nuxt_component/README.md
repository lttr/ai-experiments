# AI Experiment: nuxt_component

## Purpose

The goal of this experiment is to generate an idiomatic Nuxt component. It means
the AI tool needs to understand details about Vue and Nuxt and it has to know
typical libraries used with those frameworks e.g. VueUse and Nuxt Image.

## Challenges

The base knowledge of mainstream LLMs is still lacking recent features and
idiomatic patterns.

## Task

Implement a front-end component that communicates 

## Approach

How one can approach this task with AI tools.

### Prompt

Implement a price picker typically used in e-commerce websites for filtering
products by price range.

There will be 2 components: a dumb component for the price picker and a smart
component for communication with the rest of the application.

The picker should have a slider with two thumbs for setting the minimum and
maximum price. The minimum price should equal to the minimum price that occurs
in the dataset. The maximum price should equal to the maximum price that occurs
in the dataset. The picker should contain two inputs for entering the minimum
and maximum price manually. All elements should be focusable and keyboard
accessible.

The smart component should be responsible for setting query parameters,
essentially doing a navigation.

Use PuleoCSS for styling. Use idiomatic Nuxt and Vue components.
