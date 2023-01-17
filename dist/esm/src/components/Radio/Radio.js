import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a from "react";
import s from "../../utils/uuids.js";
import "./Radio.scss.js";
import l from "../Validation/Validation.js";
import t from "../../../node_modules/classnames/index.js";
const o = (s) => {
  const {
      disabled: o,
      name: n,
      value: i,
      radioValue: c,
      id: r,
      labelText: d,
      onChange: m,
      className: u,
      state: g,
      stateMessage: b,
      icon: p,
      showIcon: h,
      onIconClick: v,
      style: C,
    } = s,
    f = e(s, [
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
    k = s.icon;
  return a.createElement(
    "div",
    {
      style: null != C ? C : {},
      className: `n-radio-group ${null != u ? u : ""}`,
    },
    h && p && a.createElement(k, { className: "social-icon", onClick: v }),
    a.createElement(
      "input",
      Object.assign(
        {
          id: r,
          type: "radio",
          onChange: (e) => {
            null == m || m(e.target.value);
          },
          checked: i === c,
          value: i,
          name: n,
          disabled: o,
        },
        f
      )
    ),
    a.createElement(
      "label",
      {
        htmlFor: r,
        className: t({
          "success-state": "success" == g,
          "warning-state": "warning" == g,
          "error-state": "error" == g,
        }),
      },
      d
    ),
    a.createElement(l, {
      className: "n-checkbox-validation",
      validationState: g,
      label: b,
      isHidden: null == g,
    })
  );
};
o.defaultProps = {
  disabled: !1,
  name: "",
  value: "",
  radioValue: "",
  id: `n-radio-${s()}`,
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
};
export { o as default };
//# sourceMappingURL=Radio.js.map
