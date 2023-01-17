"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../utils/uuids.js");
require("./Radio.scss.js");
var s = require("../Validation/Validation.js"),
  t = require("../../../node_modules/classnames/index.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var i = n(a);
const o = (a) => {
  const {
      disabled: l,
      name: n,
      value: o,
      radioValue: c,
      id: r,
      labelText: d,
      onChange: u,
      className: m,
      state: b,
      stateMessage: g,
      icon: v,
      showIcon: f,
      onIconClick: h,
      style: C,
    } = a,
    j = e.__rest(a, [
      "disabled",
      "name",
      "value",
      "radioValue",
      "id",
      "labelText",
      "onChange",
      "className",
      "state",
      "stateMessage",
      "icon",
      "showIcon",
      "onIconClick",
      "style",
    ]),
    k = a.icon;
  return i.default.createElement(
    "div",
    {
      style: null != C ? C : {},
      className: `n-radio-group ${null != m ? m : ""}`,
    },
    f &&
      v &&
      i.default.createElement(k, { className: "social-icon", onClick: h }),
    i.default.createElement(
      "input",
      Object.assign(
        {
          id: r,
          type: "radio",
          onChange: (e) => {
            null == u || u(e.target.value);
          },
          checked: o === c,
          value: o,
          name: n,
          disabled: l,
        },
        j
      )
    ),
    i.default.createElement(
      "label",
      {
        htmlFor: r,
        className: t({
          "success-state": "success" == b,
          "warning-state": "warning" == b,
          "error-state": "error" == b,
        }),
      },
      d
    ),
    i.default.createElement(s, {
      className: "n-checkbox-validation",
      validationState: b,
      label: g,
      isHidden: null == b,
    })
  );
};
(o.defaultProps = {
  disabled: !1,
  name: "",
  value: "",
  radioValue: "",
  id: `n-radio-${l()}`,
  state: null,
  stateMessage: "Your validation message",
  labelText: "",
  className: "",
  style: {},
  icon: null,
  showIcon: !1,
  onChange: () => {},
  onIconClick: () => {
    console.log("clicked");
  },
}),
  (module.exports = o);
//# sourceMappingURL=Radio.js.map
