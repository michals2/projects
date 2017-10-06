# React typeahead challenge

## Start dev

1. `$ npm install`
2. `$ npm start`
3. open `http://localhost:3000/` in a browser window.

## Exercise

### General guidelines:

- Use default browser styles.
- Focus on functionality.
- Feel free to delete the `.eslintrc.yml` file and use any style rules you want.

### Basic Requirements

- `1.` As the user types in the input, a list of options should appear below it.
  The list should contain items from the `list` prop that *start* with the user
  entered value (case insensitive).
- `2.` Every new character typed should filter the list.
- `3.` List should only appear when input is not empty. Whitespace is considered
  empty.
- `4.` Clicking on a list item should populate the input with that item's string
  value and hide the list.

### Stretch Goals

- `5.` Style the part of the option string that the user has entered as *bold*.
- `6.` Using inline styles, highlight a list item with (dark background, light
  text) when the user mouses over it.

### Extreme Stretch Goals

- `7.` Add keyboard events to allow selection of an option without mouse.
  - Using "tab" and "shift+tab", the user should be able to focus the different
    list items.
  - With the cursor in the input, pressing the "tab" key should _focus_ the
    first item with the default browser focus style.
  - Subsequent presses of the "tab" key should focus the next item in the list.
  - Pressing the "shift+tab" keys should focus the previous item in the list.
  - Pressing the "shift+tab" key when the first item is highlighted should focus
    the input again.
  - Mousing over other list items should _highlight_ them while the keyboard-
    focused item remains _focused_.
  - Pressing the "return" key when an item is focused should populate the input
    with the focused item's string value, hide the list, and focus the input
    again.
- `8`. Add additional keyboard navigation:
  - "down" key works just like "tab".
  - "up" key works just like "shift+tab".
- `9.` Validate the input value: value should be alpha-numeric and exist in the
  list.
  - If the value is invalid, show a red label above the input field with a short
    but specific message; i.e. "No match found", or "Please use only letters and
    numbers".
- `10.` Add an API for a consumer of this component to get notified when a user
  makes a selection. The currently selected value should be passed.
