# Description

Price picker component typically used in e-commerce websites for filtering
products by price range.

# Requirements

- Make the picker small so that if fits into a future filters aside.
- The picker should have a slider with two thumbs for setting the minimum and
  maximum price.
- The minimum price should equal to the minimum price that occurs in the
  dataset.
- The maximum price should equal to the maximum price that occurs in the
  dataset.
- The picker should contain two inputs for entering the minimum and maximum
  price manually.
- All elements should be focusable and keyboard accessible. Thumbs has to be
  visible all the time. Do not cover them and do not overlap them with each other.
- The steps (when user hits up or down arrows) should be sensible, not too small
  or too large.
- Do not allow to move the left thumb past the minimum price or past the right
  slider. Don't allow to move the right thumb past the maximum price or past the
  left thumb.

# Technical notes

Prefer more than one component: a dumb component for the price picker and a
smart component for communication with the rest of the application.

The smart component should be responsible for setting query parameters,
essentially doing a navigation.

Use PuleoCSS for styling. Use idiomatic Nuxt and Vue components.
