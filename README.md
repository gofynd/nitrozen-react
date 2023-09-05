# @gofynd/nitrozen-react

[![npm version](https://badge.fury.io/js/@gofynd%2Fnitrozen-react.svg)](https://www.npmjs.com/package/@gofynd/nitrozen-react)
[![](https://img.shields.io/badge/Storybook-documentation-brightgreen)](https://opensource.gofynd.io/nitrozen-react)

> A React component library inspired from Nitrozen design system

## 🤔 Getting started

To install `@gofynd/nitrozen-react` in your project, you will need to run the following
command using [npm](https://www.npmjs.com/):

```bash
npm install -S @gofynd/nitrozen-react
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @gofynd/nitrozen-react
```

- Nitrozen component library can be consumed by all React / React with Typescript projects.

## Usage

The `@gofynd/nitrozen-react` package provides components and icons for the Nitrozen Design
System.

To use a component, you can import it directly from the package:

```jsx
import { Button } from "@gofynd/nitrozen-react";

function MyComponent() {
  return <Button rounded>Button</Button>;
}
```

### Example:

![button](https://github.com/gofynd/nitrozen-react/blob/main/src/assets/sb-buttons.png)

### 🚨 Note:

> The library sets default font size as 10px. Hence if you are planning to use 10px as base font size in your app, you need to add the same to your code as well.

```css
html,
body {
  font-size: 10px;
}
```

If you wish to use any other base font-size apart from 10px, you need to add these following:

```css
:root {
  --BaseFontSize: <your font size>; /* number as integer without unit */
}

html,
body {
  font-size: <your font size>; /* number with unit */
}
```

## 🔥 Components List:

- [Alert](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-alert--button-less-alert)
- [Autocomplete](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-autocomplete--autocomplete-input)
- [Badge](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-badge--badge-demo)
- [Button](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-button--default)
- [Card](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-card--card-demo)
- [Checkbox](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-input-checkbox--single-checkbox)
- [OTP Code Input](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-code--code-playground)
- [Chip](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-chip--primary-chip)
- [Checkbox](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-input-checkbox--single-checkbox)
- [Dialog](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-dialog--dialog)
- [Dropdown](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-input-dropdown--single-select)
- [Icon](https://opensource.gofynd.io/nitrozen-react/?path=/docs/assets-icons--svg-example)
- [Input](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-input-textfields--textfield)
- [Menu](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-menu--primary-menu)
- [Validation Text](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-validation--validation-message)
- [Pagination](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-pagination--basic-pagination)
- [Radio](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-input-radiobutton--radio-playground)
- [Nudge](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-nudge--show-nudge)
- [Stepper](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-stepper--horizontal-stepper)
- [Tab](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-tab--object-tab-items)
- [ToggleBtn](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-button-togglebutton--toggle-btn)
- [Tooltip](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-tooltip--tooltip-success)
- [Toast](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-toast--show-toast)
- [Table](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-table--template)
- [Grid](https://opensource.gofynd.io/nitrozen-react/?path=/docs/components-grid--custom-grid)
- [Typography](https://opensource.gofynd.io/nitrozen-react/?path=/docs/tokens-typography--typography)

> For a full list of components available & it's detailed documentation, checkout our
> [Storybook](https://opensource.gofynd.io/nitrozen-react/?path=/story/introduction-welcome--welcome).

## 🏆 Contributors

- [Rohan Shah](https://github.com/ShahRohan27)
- [Aayush Jain](https://github.com/vishu3011)
- [Aadesh Kulkarni](https://github.com/aadeshkulkarni-fynd)
- [Roshan Prajapt](https://github.com/roshanprajapat-gofynd)
- [Sujoy Dev](https://github.com/sujoydev99)
- [Amarjit Singh](https://github.com/Amarjit-Singh-22)
- [Rushabh Shah](https://github.com/rushabhshah1993)
- [Ashutosh Kumar](https://github.com/mrashutoshkrsingh)
- [Raj Savsani](https://github.com/raj-savsani)
- [Meet Dhanani](https://github.com/meetdhananifynd)
- [Ritik Soni](https://github.com/ritik07)
- [Kinshuk Shah](https://github.com/kinkshuk25)
- [Saurabh Mamidwar](https://github.com/Saurabhm-fynd)
- [Rupesh Aagde](https://github.com/RupeshAagde)
- [Zissan Chowdhary](https://github.com/Zissan)
- [Pooran Suthar](https://github.com/Pooran8898)
- [Rakesh Yadav](https://github.com/ryadav96-fynd)
- [Dipanshu Suman](https://github.com/d-suman1)
- [Subhomoy Choudhury](https://github.com/subhomoy-roy-choudhury)

## 📖 API Documentation

If you're looking for `@gofynd/nitrozen-react` API documentation, check out:

- [Storybook](https://opensource.gofynd.io/nitrozen-react/?path=/story/introduction-welcome--welcome)

## 📝 License

> Licensed under the Apache 2.0 License
