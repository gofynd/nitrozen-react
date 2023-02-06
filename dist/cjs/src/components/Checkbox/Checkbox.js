"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../utils/uuids.js"),
  t = require("../Validation/Validation.js");
require("./Checkbox.scss.js");
var n = require("../../../node_modules/classnames/index.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = s(a);
const i = (l) => {
  const {
      disabled: s,
      value: i,
      name: r,
      state: o,
      stateMessage: d,
      checkboxValue: u,
      id: b,
      labelText: h,
      children: m,
      onChange: k,
      checkArray: f,
      ref: y,
      className: x,
      style: g,
      labelStyle: v,
      icon: A,
      showIcon: I,
      onIconClick: C,
      isIndeterminate: j,
    } = l,
    N = e.__rest(l, [
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
    p = Array.isArray(f) ? f : u,
    [q, E] = a.useState(p);
  a.useEffect(() => {
    E(Array.isArray(f) ? f : u);
  }, [u, f]);
  const w = l.icon;
  return c.default.createElement(
    "label",
    {
      htmlFor: b,
      className:
        "n-checkbox-container" + (s ? " n-checkbox-container-disabled" : ""),
      style: null != v ? v : {},
    },
    I &&
      A &&
      c.default.createElement(w, { className: "social-icon", onClick: C }),
    c.default.createElement(
      "input",
      Object.assign(
        {
          id: b,
          "data-testid": b,
          type: "checkbox",
          onChange: (e) =>
            ((e) => {
              if (Array.isArray(q))
                if (null == q ? void 0 : q.includes(u)) {
                  const e = q.filter((e) => e !== u);
                  E([...e]), k([...e]);
                } else E([...q, e.target.value]), k([...q, e.target.value]);
              else E(!q), k(e.target.checked);
            })(e),
          value: u || i,
          checked: Array.isArray(q)
            ? null == q
              ? void 0
              : q.includes(u)
            : !!q,
          disabled: s,
          ref: null == l ? void 0 : l.ref,
          name: l.name,
          className: `n-id-checkbox ${null != x ? x : ""}`,
          style: null != g ? g : {},
        },
        N
      )
    ),
    h,
    m,
    c.default.createElement("span", {
      "data-testid": `n-checkbox-${b}`,
      className: n({
        "n-checkbox": !0,
        "success-state": "success" == o,
        "warning-state": "warning" == o,
        "error-state": "error" == o,
        "n-checkbox-indeterminate": l.isIndeterminate,
      }),
    }),
    c.default.createElement(t, {
      className: "n-checkbox-validation",
      validationState: o,
      label: d,
      isHidden: null == o,
    })
  );
};
(i.defaultProps = {
  disabled: !1,
  value: "",
  name: "",
  checkboxValue: null,
  state: null,
  stateMessage: "Your validation message",
  id: `n-dialog-${l()}`,
  labelText: "",
  children: null,
  icon: null,
  showIcon: !1,
  onChange: () => {},
  onIconClick: () => {},
  checkArray: null,
  ref: null,
  isIndeterminate: !1,
}),
  (module.exports = i);
//# sourceMappingURL=Checkbox.js.map
