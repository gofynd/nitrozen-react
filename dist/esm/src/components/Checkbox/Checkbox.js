import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a, { useState as l, useEffect as n } from "react";
import s from "../../utils/uuids.js";
import t from "../Validation/Validation.js";
import "./Checkbox.scss.js";
import c from "../../../node_modules/classnames/index.js";
const i = (s) => {
  const {
      disabled: i,
      value: r,
      name: o,
      state: d,
      stateMessage: m,
      checkboxValue: u,
      id: h,
      labelText: b,
      children: k,
      onChange: y,
      checkArray: x,
      ref: f,
      className: g,
      style: v,
      labelStyle: p,
      icon: A,
      showIcon: I,
      onIconClick: C,
      isIndeterminate: N,
    } = s,
    j = e(s, [
      "disabled",
      "value",
      "name",
      "state",
      "stateMessage",
      "checkboxValue",
      "id",
      "labelText",
      "children",
      "onChange",
      "checkArray",
      "ref",
      "className",
      "style",
      "labelStyle",
      "icon",
      "showIcon",
      "onIconClick",
      "isIndeterminate",
    ]),
    w = Array.isArray(x) ? x : u,
    [E, V] = l(w);
  n(() => {
    V(Array.isArray(x) ? x : u);
  }, [u, x]);
  const M = s.icon;
  return a.createElement(
    "label",
    {
      htmlFor: h,
      className:
        "n-checkbox-container" + (i ? " n-checkbox-container-disabled" : ""),
      style: null != p ? p : {},
    },
    I && A && a.createElement(M, { className: "social-icon", onClick: C }),
    a.createElement(
      "input",
      Object.assign(
        {
          id: h,
          "data-testid": h,
          type: "checkbox",
          onChange: (e) =>
            ((e) => {
              if (Array.isArray(E))
                if (null == E ? void 0 : E.includes(u)) {
                  const e = E.filter((e) => e !== u);
                  V([...e]), y([...e]);
                } else V([...E, e.target.value]), y([...E, e.target.value]);
              else V(!E), y(e.target.checked);
            })(e),
          value: u || r,
          checked: Array.isArray(E)
            ? null == E
              ? void 0
              : E.includes(u)
            : !!E,
          disabled: i,
          ref: null == s ? void 0 : s.ref,
          name: s.name,
          className: `n-id-checkbox ${null != g ? g : ""}`,
          style: null != v ? v : {},
        },
        j
      )
    ),
    b,
    k,
    a.createElement("span", {
      "data-testid": `n-checkbox-${h}`,
      className: c({
        "n-checkbox": !0,
        "success-state": "success" == d,
        "warning-state": "warning" == d,
        "error-state": "error" == d,
        "n-checkbox-indeterminate": s.isIndeterminate,
      }),
    }),
    a.createElement(t, {
      className: "n-checkbox-validation",
      validationState: d,
      label: m,
      isHidden: null == d,
    })
  );
};
i.defaultProps = {
  disabled: !1,
  value: "",
  name: "",
  checkboxValue: null,
  state: null,
  stateMessage: "Your validation message",
  id: `n-dialog-${s()}`,
  labelText: "",
  children: null,
  icon: null,
  showIcon: !1,
  onChange: () => {},
  onIconClick: () => {},
  checkArray: null,
  ref: null,
  isIndeterminate: !1,
};
export { i as default };
//# sourceMappingURL=Checkbox.js.map
