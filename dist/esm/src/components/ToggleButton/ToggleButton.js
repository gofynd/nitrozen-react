import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import s, { useState as l, useEffect as t, useCallback as a } from "react";
import "./ToggleButton.scss.js";
import n from "../../../node_modules/classnames/index.js";
const o = (o) => {
  const {
      disabled: c,
      onToggle: i,
      value: r,
      className: d,
      style: m,
      size: g,
    } = o,
    u = e(o, ["disabled", "onToggle", "value", "className", "style", "size"]),
    [b, p] = l(r);
  t(() => {
    p(r);
  }, [r]);
  const z = a(() => {
    p(!b), null == i || i();
  }, [b]);
  return s.createElement(
    "div",
    Object.assign(
      {
        style: m || {},
        className: `nitrozen-toggle-container ${null != d ? d : ""}`,
      },
      u
    ),
    s.createElement(
      "label",
      { className: `nitrozen-switch ${g}` },
      s.createElement("input", {
        type: "checkbox",
        "data-testid": "toggle-checkbox",
        onChange: z,
        disabled: c,
        checked: b,
      }),
      s.createElement(
        "span",
        {
          className: n({
            "nitrozen-slider nitrozen-round": !0,
            "nitrozen-disabled": c,
            checked: b,
          }),
        },
        s.createElement("div", {
          className: n({ "slider-ball": !0, checked: b }),
        })
      )
    )
  );
};
o.defaultProps = { value: !1, disabled: !1, size: "large" };
var c = s.memo(o);
export { c as default };
//# sourceMappingURL=ToggleButton.js.map
