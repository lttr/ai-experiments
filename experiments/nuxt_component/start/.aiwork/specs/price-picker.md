# Description

Price picker component typically used in e-commerce websites for filtering products by price range.

# Requirements

## Layout

- Make the picker small so it fits into a future filters aside
- Should work within limited space: around 240px wide and 160px high

## Slider Behavior

- Dual thumb slider for setting minimum and maximum price
- Left thumb controls minimum price, right thumb controls maximum price
- **No thumb overlap**: Left thumb can never move past or over the right thumb
- **Both thumbs always visible**: Never hide or obscure either thumb
- Thumbs can be at the same position logically (allowing ranges like $50 to $50), but visually they will be side by side in such position
- Visual indicator shows selected range between thumbs

## Price Range

- Minimum and maximum bounds come from the **complete dataset**
- Price scale stays constant - never recalculates when filtering products
- Users can select any range within the dataset's min/max bounds

## Number Inputs

- Two inputs for manually entering min and max prices
- Inputs enforce the same rules as sliders (min ≤ max)
- Invalid inputs reset to valid values when user leaves the field

## Accessibility

- All controls can be focused with keyboard
- Slider thumbs respond to arrow keys
- Clear visual focus indicators on all interactive elements

## Price Display

- Show prices as whole dollars (e.g., $10, not $10.00)
- Steps should be sensible - not too small or too large based on the price range

# Technical Notes

- Separate "dumb" component for the UI (reusable price picker)
- Separate "smart" component for managing filters and navigation
- Smart component handles URL query parameters
- Use debouncing to avoid excessive URL updates

Use PuleoCSS for styling. Use idiomatic Nuxt and Vue components.
