"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../utils/uuids.js"),
  s = require("../Validation/Validation.js");
require("./Checkbox.scss.js");
var t = require("../../../node_modules/classnames/index.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = n(a);
const r = (l) => {
  const {
      disabled: n,
      value: r,
      name: i,
      state: o,
      stateMessage: u,
      checkboxValue: d,
      id: b,
      labelText: h,
      children: m,
      onChange: f,
      checkArray: y,
      ref: k,
      className: g,
      style: v,
      labelStyle: x,
      icon: A,
      showIcon: C,
      onIconClick: j,
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
    ]),
    p = Array.isArray(y) ? y : d,
    [q, E] = a.useState(p);
  a.useEffect(() => {
    E(Array.isArray(y) ? y : d);
  }, [d, y]);
  const I = l.icon;
  return c.default.createElement(
    "label",
    {
      htmlFor: b,
      className:
        "n-checkbox-container" + (n ? " n-checkbox-container-disabled" : ""),
      style: null != x ? x : {},
    },
    C &&
      A &&
      c.default.createElement(I, { className: "social-icon", onClick: j }),
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
                if (null == q ? void 0 : q.includes(d)) {
                  const e = q.filter((e) => e !== d);
                  E([...e]), f([...e]);
                } else E([...q, e.target.value]), f([...q, e.target.value]);
              else E(!q), f(e.target.checked);
            })(e),
          value: d || r,
          checked: Array.isArray(q)
            ? null == q
              ? void 0
              : q.includes(d)
            : !!q,
          disabled: n,
          ref: null == l ? void 0 : l.ref,
          name: l.name,
          className: null != g ? g : "",
          style: null != v ? v : {},
        },
        N
      )
    ),
    h,
    m,
    c.default.createElement("span", {
      className: t({
        "n-checkbox": !0,
        "success-state": "success" == o,
        "warning-state": "warning" == o,
        "error-state": "error" == o,
      }),
    }),
    c.default.createElement(s, {
      className: "n-checkbox-validation",
      validationState: o,
      label: u,
      isHidden: null == o,
    })
  );
};
(r.defaultProps = {
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
}),
  (module.exports = r);
//# sourceMappingURL=Checkbox.js.map
