"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../utils/uuids.js");
require("./ToggleButton.scss.js");
var t = require("../../../node_modules/classnames/index.js"),
  s = require("../Validation/Validation.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = n(a);
const i = (l) => {
  const {
      disabled: n,
      id: i,
      labelText: o,
      onToggle: d,
      value: r,
      className: u,
      style: m,
      size: g,
      state: b,
      icon: f,
      showIcon: h,
      onIconClick: v,
      stateMessage: k,
    } = l,
    E = e.__rest(l, [
      "disabled",
      "id",
      "labelText",
      "onToggle",
      "value",
      "className",
      "style",
      "size",
      "state",
      "icon",
      "showIcon",
      "onIconClick",
      "stateMessage",
    ]),
    [N, x] = a.useState(r);
  a.useEffect(() => {
    x(r);
  }, [r]);
  const j = a.useCallback(() => {
      x(!N), null == d || d();
    }, [N]),
    p = l.icon;
  return c.default.createElement(
    "div",
    Object.assign(
      { style: m || {}, className: `n-toggle-container ${null != u ? u : ""}` },
      E
    ),
    h &&
      f &&
      c.default.createElement(p, { className: `social-icon-${g}`, onClick: v }),
    c.default.createElement(
      "label",
      { htmlFor: i, className: `n-switch ${g}` },
      c.default.createElement("input", {
        id: i,
        type: "checkbox",
        "data-testid": "toggle-checkbox",
        onChange: j,
        disabled: n,
        checked: N,
      }),
      c.default.createElement(
        "span",
        {
          className: t({
            "n-slider n-round": !0,
            "n-disabled": n,
            "success-state": "success" == b,
            "warning-state": "warning" == b,
            "error-state": "error" == b,
            checked: N,
          }),
        },
        c.default.createElement("div", {
          className: t({ "slider-ball": !0, checked: N }),
        })
      ),
      c.default.createElement(
        "span",
        { className: t({ "label-text": !0, "n-disabled": n, checked: N }) },
        o
      ),
      c.default.createElement(s, {
        className: "n-toggle-validation",
        validationState: b,
        label: k,
        isHidden: null == b,
      }),
      c.default.createElement(c.default.Fragment, null)
    )
  );
};
i.defaultProps = {
  id: `nitrozen-dialog-${l()}`,
  value: !1,
  disabled: !1,
  labelText: null,
  size: "medium",
  state: null,
  stateMessage: "Your validation message",
  icon: null,
  showIcon: !1,
  onIconClick: () => {},
};
var o = c.default.memo(i);
module.exports = o;
//# sourceMappingURL=ToggleButton.js.map
