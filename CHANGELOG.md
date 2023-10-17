# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.9(2023-06-14)

### Features

- Make measurements dynamic based on font-size (Changed base font-size from 10px to 16px) ([341eb39](https://github.com/gofynd/nitrozen-react/pull/102))

## 2.0.8(2023-07-17)

### Features

- Added `No Options found` if items passed is an empty array. ([31b1865](https://github.com/gofynd/nitrozen-react/pull/100))
- Added prop `showAddOptionWithItems` which show add option for search input along with items. Default: `false`. ([31b1865](https://github.com/gofynd/nitrozen-react/pull/100))
- Added prop `removeBorderBetweenItems` which removes the border present between the each option in the list. Default: `false`. ([31b1865](https://github.com/gofynd/nitrozen-react/pull/100))
- Added prop `disabled` which disables the component. Default: `false`. ([31b1865](https://github.com/gofynd/nitrozen-react/pull/100))
- Added props `showTooltip`,`tooltipText` and `tooltipIcon`, which enables support for the tooltip in the component label. ([31b1865](https://github.com/gofynd/nitrozen-react/pull/100))

## 2.0.7(2023-06-14)

### Bugfixes

- OTP Copy Paste Support ([341eb39](https://github.com/gofynd/nitrozen-react/pull/96))
- Storybook and Documentation Link change ([21d74db](https://github.com/gofynd/nitrozen-react/pull/96))
- Pagination Bugfixes ([4046ee1](https://github.com/gofynd/nitrozen-react/pull/97))

## 2.0.6(2023-06-14)

### Bugfixes

- Bugfixes ([7725416](https://github.com/gofynd/nitrozen-react/pull/92))

## 2.0.5(2023-06-05)

### Bugfixes

- Bugfixes for paginaton and dropdown component ([55f865f](https://github.com/gofynd/nitrozen-react/pull/86))
- Minor bugfixes ([d8631eb](https://github.com/gofynd/nitrozen-react/pull/90))

### Features

- Table component now customizable to allow users to freeze particular columns and make others scrollable ([4e94362](https://github.com/gofynd/nitrozen-react/pull/87))
- Pagination component now supports a top and bottom type along with configurable sizes ([bb1a8ad](https://github.com/gofynd/nitrozen-react/pull/89))

## 2.0.4(2023-05-04)

### Bugfixes

- Dropdown bugfixes for pagination state updates ([19b534](https://github.com/gofynd/nitrozen-react/pull/83))
- Table event propagation bugfixes ([3bcda4b](https://github.com/gofynd/nitrozen-react/pull/82))

## 2.0.3(2023-04-13)

### Bugfixes

- Pagination type fixes ([fb26553](https://github.com/gofynd/nitrozen-react/pull/74))
- Bugfixes in Button component for disabled states ([39a5614](https://github.com/gofynd/nitrozen-react/pull/75))
- Dropdown bugfixes ([0456b45](https://github.com/gofynd/nitrozen-react/pull/77))

## 2.0.2(2023-03-13)

### Features

- Grid Layout component added([f8d652e](https://github.com/gofynd/nitrozen-react/pull/69))
- Typography Support added ([5f8505e](https://github.com/gofynd/nitrozen-react/pull/67))

### Bugfixes

- Pagination bugfixes ([8173376](https://github.com/gofynd/nitrozen-react/pull/68))
- Alert component bugfixes ([1b66769](https://github.com/gofynd/nitrozen-react/pull/71))

## 2.0.1 (2023-03-01)

### Features

- Date Picker component added([5621f49](https://github.com/gofynd/nitrozen-react/pull/54))
- Support for column divider in Table ([2305ce0](https://github.com/gofynd/nitrozen-react/pull/62))
- Support for custom node values in Paginaton ([a653eca](https://github.com/gofynd/nitrozen-react/pull/65))
- Bundle size reduced ([c8620e4](https://github.com/gofynd/nitrozen-react/pull/61))

### Bugfixes

- Table Component bugfixes([2305ce0](https://github.com/gofynd/nitrozen-react/pull/62))
- Pagination bugfixes ([b00f302](https://github.com/gofynd/nitrozen-react/pull/63))

## 2.0.0 (2023-02-10)

### Features

- Design system upgrade([5621f49](https://github.com/gofynd/nitrozen-react/pull/54))

## 1.1.1 (2022-12-20)

### Features

- feat: added changelog page in storybook([ff2e7cc](https://github.com/gofynd/nitrozen-react/pull/4/commits/ff2e7cca321eb84551a1a0ca43b6eaafa42abdea))

### Bug Fixes

- fix: styling loading issue fix in drogon ([4bd6a61](https://github.com/gofynd/nitrozen-react/pull/4/commits/4bd6a6140c18dbc41e34803b4a2cc033a131b312))

## 1.1.0 (2022-11-29)

### Features

- eslint setup done, fixed lint errors from different files ([90488997](https://gitlab.com/fynd/ops-engg/frontend/nitrozen-react/-/merge_requests/79/commits))
- treeshaking for cjs and esm

### Bug Fixes

- added name prop in input and tab activeindex fix ([baeb131e](https://gitlab.com/fynd/ops-engg/frontend/nitrozen-react/-/merge_requests/81/diffs?commit_id=baeb131e3eec506913b66339e2b4111c73824432))
- some pagination test cases added for increasing coverage
- z-index added in theme
- css refactoring - px to rem for all components
- autocomplete,badge,button,card components px to rm done
- font size changed to 10px, alert fixed accordingly
- dropdown,pagination, tabitem fixes
- common css removed from base file to avoid dublicates
- link button added, tabItem padding fix
- fixed placeholder and tooltip issue ([65c9b14](https://gitlab.com/fynd/ops-engg/frontend/nitrozen-react/commit/65c9b146a3699965dc35eedcd61b0109fabcde62))
