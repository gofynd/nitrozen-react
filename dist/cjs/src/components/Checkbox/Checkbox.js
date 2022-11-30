"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  l = require("react"),
  a = require("../../utils/uuids.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = r(l);
const n = (a) => {
  const {
      disabled: r,
      value: n,
      name: s,
      checkboxValue: c,
      id: i,
      labelText: u,
      children: d,
      onChange: o,
      checkArray: b,
      ref: h,
      className: y,
      style: f,
      labelStyle: m,
    } = a,
    k = e.__rest(a, [
      "disabled",
      "value",
      "name",
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
    ]),
    v = Array.isArray(b) ? b : c,
    [x, A] = l.useState(v);
  l.useEffect(() => {
    A(Array.isArray(b) ? b : c);
  }, [c, b]);
  return t.default.createElement(
    "label",
    {
      htmlFor: i,
      className:
        "nitrozen-checkbox-container" +
        (r ? " nitrozen-checkbox-container-disabled" : ""),
      style: null != m ? m : {},
    },
    t.default.createElement(
      "input",
      Object.assign(
        {
          id: i,
          type: "checkbox",
          onChange: (e) => {
            if (Array.isArray(x))
              if (null == x ? void 0 : x.includes(c)) {
                const e = x.filter((e) => e !== c);
                A([...e]), o([...e]);
              } else A([...x, e.target.value]), o([...x, e.target.value]);
            else A(!x), o(!c);
          },
          value: c || n,
          checked: Array.isArray(x)
            ? null == x
              ? void 0
              : x.includes(c)
            : !!x,
          disabled: r,
          ref: null == a ? void 0 : a.ref,
          className: null != y ? y : "",
          style: null != f ? f : {},
        },
        k
      )
    ),
    u,
    d,
    t.default.createElement("span", { className: "nitrozen-checkbox" })
  );
};
(n.defaultProps = {
  disabled: !1,
  value: "",
  name: "",
  checkboxValue: null,
  id: `nitrozen-dialog-${a()}`,
  labelText: "",
  children: null,
  onChange: () => {},
  checkArray: null,
  ref: null,
}),
  (module.exports = n);
//# sourceMappingURL=Checkbox.js.map
