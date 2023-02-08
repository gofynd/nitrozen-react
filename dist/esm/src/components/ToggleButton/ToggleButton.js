import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import s, { useState as a, useEffect as l, useCallback as t } from "react";
import n from "../../utils/uuids.js";
import "./ToggleButton.scss.js";
import o from "../../../node_modules/classnames/index.js";
import i from "../Validation/Validation.js";
const c = (n) => {
  const {
      disabled: c,
      id: d,
      labelText: r,
      onToggle: m,
      value: u,
      className: g,
      style: b,
      size: h,
      state: p,
      icon: k,
      showIcon: v,
      onIconClick: E,
      stateMessage: N,
    } = n,
    x = e(n, [
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
    [f, j] = a(u);
  l(() => {
    j(u);
  }, [u]);
  const w = t(() => {
      j(!f), null == m || m();
    }, [f]),
    I = n.icon;
  return s.createElement(
    "div",
    Object.assign(
      { style: b || {}, className: `n-toggle-container ${null != g ? g : ""}` },
      x
    ),
    v && k && s.createElement(I, { className: `social-icon-${h}`, onClick: E }),
    s.createElement(
      "label",
      { htmlFor: d, className: `n-switch ${h}` },
      s.createElement("input", {
        id: d,
        type: "checkbox",
        "data-testid": "toggle-checkbox",
        onChange: w,
        disabled: c,
        checked: f,
      }),
      s.createElement(
        "span",
        {
          className: o({
            "n-slider n-round": !0,
            "n-disabled": c,
            "success-state": "success" == p,
            "warning-state": "warning" == p,
            "error-state": "error" == p,
            checked: f,
          }),
        },
        s.createElement("div", {
          className: o({ "slider-ball": !0, checked: f }),
        })
      ),
      s.createElement(
        "span",
        { className: o({ "label-text": !0, "n-disabled": c, checked: f }) },
        r
      ),
      s.createElement(i, {
        className: "n-toggle-validation",
        validationState: p,
        label: N,
        isHidden: null == p,
      }),
      s.createElement(s.Fragment, null)
    )
  );
};
c.defaultProps = {
  id: `nitrozen-dialog-${n()}`,
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
var d = s.memo(c);
export { d as default };
//# sourceMappingURL=ToggleButton.js.map
