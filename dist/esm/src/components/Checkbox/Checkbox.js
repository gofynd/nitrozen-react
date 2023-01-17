import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a, { useState as l, useEffect as s } from "react";
import n from "../../utils/uuids.js";
import t from "../Validation/Validation.js";
import "./Checkbox.scss.js";
import c from "../../../node_modules/classnames/index.js";
const o = (n) => {
  const {
      disabled: o,
      value: r,
      name: i,
      state: d,
      stateMessage: u,
      checkboxValue: m,
      id: b,
      labelText: h,
      children: y,
      onChange: k,
      checkArray: f,
      ref: g,
      className: x,
      style: v,
      labelStyle: p,
      icon: A,
      showIcon: C,
      onIconClick: N,
    } = n,
    j = e(n, [
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
    ]),
    I = Array.isArray(f) ? f : m,
    [w, E] = l(I);
  s(() => {
    E(Array.isArray(f) ? f : m);
  }, [m, f]);
  const V = n.icon;
  return a.createElement(
    "label",
    {
      htmlFor: b,
      className:
        "n-checkbox-container" + (o ? " n-checkbox-container-disabled" : ""),
      style: null != p ? p : {},
    },
    C && A && a.createElement(V, { className: "social-icon", onClick: N }),
    a.createElement(
      "input",
      Object.assign(
        {
          id: b,
          type: "checkbox",
          onChange: (e) => {
            if (Array.isArray(w))
              if (null == w ? void 0 : w.includes(m)) {
                const e = w.filter((e) => e !== m);
                E([...e]), k([...e]);
              } else E([...w, e.target.value]), k([...w, e.target.value]);
            else E(!w), k(!m);
          },
          value: m || r,
          checked: Array.isArray(w)
            ? null == w
              ? void 0
              : w.includes(m)
            : !!w,
          disabled: o,
          ref: null == n ? void 0 : n.ref,
          name: n.name,
          className: null != x ? x : "",
          style: null != v ? v : {},
        },
        j
      )
    ),
    h,
    y,
    a.createElement("span", {
      className: c({
        "n-checkbox": !0,
        "success-state": "success" == d,
        "warning-state": "warning" == d,
        "error-state": "error" == d,
      }),
    }),
    a.createElement(t, {
      className: "n-checkbox-validation",
      validationState: d,
      label: u,
      isHidden: null == d,
    })
  );
};
o.defaultProps = {
  disabled: !1,
  value: "",
  name: "",
  checkboxValue: null,
  state: null,
  stateMessage: "Your validation message",
  id: `n-dialog-${n()}`,
  labelText: "",
  children: null,
  icon: null,
  showIcon: !1,
  onChange: () => {},
  onIconClick: () => {},
  checkArray: null,
  ref: null,
};
export { o as default };
//# sourceMappingURL=Checkbox.js.map
