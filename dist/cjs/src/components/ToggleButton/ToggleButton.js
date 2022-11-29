"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../../../node_modules/classnames/index.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = a(t);
const n = (a) => {
  const {
      disabled: n,
      onToggle: d,
      value: c,
      className: r,
      style: i,
      size: o,
    } = a,
    u = e.__rest(a, [
      "disabled",
      "onToggle",
      "value",
      "className",
      "style",
      "size",
    ]),
    [m, b] = t.useState(c);
  t.useEffect(() => {
    b(c);
  }, [c]);
  const f = t.useCallback(() => {
    b(!m), null == d || d();
  }, [m]);
  return s.default.createElement(
    "div",
    Object.assign(
      {
        style: i || {},
        className: `nitrozen-toggle-container ${null != r ? r : ""}`,
      },
      u
    ),
    s.default.createElement(
      "label",
      { className: `nitrozen-switch ${o}` },
      s.default.createElement("input", {
        type: "checkbox",
        "data-testid": "toggle-checkbox",
        onChange: f,
        disabled: n,
        checked: m,
      }),
      s.default.createElement(
        "span",
        {
          className: l({
            "nitrozen-slider nitrozen-round": !0,
            "nitrozen-disabled": n,
            checked: m,
          }),
        },
        s.default.createElement("div", {
          className: l({ "slider-ball": !0, checked: m }),
        })
      )
    )
  );
};
n.defaultProps = { value: !1, disabled: !1, size: "large" };
var d = s.default.memo(n);
module.exports = d;
//# sourceMappingURL=ToggleButton.js.map
