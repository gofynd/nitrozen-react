"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../utils/uuids.js");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = t(a);
const n = (a) => {
  const {
      disabled: l,
      name: t,
      value: n,
      radioValue: r,
      id: u,
      labelText: d,
      onChange: i,
      className: o,
      style: c,
    } = a,
    m = e.__rest(a, [
      "disabled",
      "name",
      "value",
      "radioValue",
      "id",
      "labelText",
      "onChange",
      "className",
      "style",
    ]);
  return s.default.createElement(
    "div",
    {
      style: null != c ? c : {},
      className: `nitrozen-radio-group ${null != o ? o : ""}`,
    },
    s.default.createElement(
      "input",
      Object.assign(
        {
          id: u,
          type: "radio",
          onChange: (e) => {
            null == i || i(e.target.value);
          },
          checked: n === r,
          value: n,
          name: t,
          disabled: l,
        },
        m
      )
    ),
    s.default.createElement("label", { htmlFor: u }, d)
  );
};
(n.defaultProps = {
  disabled: !1,
  name: "",
  value: "",
  radioValue: "",
  id: `nitrozen-radio-${l()}`,
  labelText: "",
  className: "",
  style: {},
  onChange: () => {},
}),
  (module.exports = n);
//# sourceMappingURL=Radio.js.map
