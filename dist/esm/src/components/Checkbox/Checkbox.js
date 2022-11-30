import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import l, { useState as a, useEffect as r } from "react";
import n from "../../utils/uuids.js";
import "./Checkbox.scss.js";
const s = (n) => {
  const {
      disabled: s,
      value: t,
      name: c,
      checkboxValue: i,
      id: o,
      labelText: d,
      children: u,
      onChange: b,
      checkArray: h,
      ref: m,
      className: y,
      style: f,
      labelStyle: k,
    } = n,
    x = e(n, [
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
    A = Array.isArray(h) ? h : i,
    [p, v] = a(A);
  r(() => {
    v(Array.isArray(h) ? h : i);
  }, [i, h]);
  return l.createElement(
    "label",
    {
      htmlFor: o,
      className:
        "nitrozen-checkbox-container" +
        (s ? " nitrozen-checkbox-container-disabled" : ""),
      style: null != k ? k : {},
    },
    l.createElement(
      "input",
      Object.assign(
        {
          id: o,
          type: "checkbox",
          onChange: (e) => {
            if (Array.isArray(p))
              if (null == p ? void 0 : p.includes(i)) {
                const e = p.filter((e) => e !== i);
                v([...e]), b([...e]);
              } else v([...p, e.target.value]), b([...p, e.target.value]);
            else v(!p), b(!i);
          },
          value: i || t,
          checked: Array.isArray(p)
            ? null == p
              ? void 0
              : p.includes(i)
            : !!p,
          disabled: s,
          ref: null == n ? void 0 : n.ref,
          className: null != y ? y : "",
          style: null != f ? f : {},
        },
        x
      )
    ),
    d,
    u,
    l.createElement("span", { className: "nitrozen-checkbox" })
  );
};
s.defaultProps = {
  disabled: !1,
  value: "",
  name: "",
  checkboxValue: null,
  id: `nitrozen-dialog-${n()}`,
  labelText: "",
  children: null,
  onChange: () => {},
  checkArray: null,
  ref: null,
};
export { s as default };
//# sourceMappingURL=Checkbox.js.map
