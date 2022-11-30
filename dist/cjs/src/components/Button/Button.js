"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  s = require("../../assets/loader-white.gif.js"),
  n = require("../../../node_modules/classnames/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var a = r(t);
const o = (t) => {
    const s = () =>
        n({
          "n-button-rounded": t.rounded,
          "n-button-primary": "primary" === t.theme,
          "n-button-secondary": "secondary" === t.theme,
          "n-button-large": "large" === t.size,
          "n-button-mid": "medium" === t.size,
          "n-button-small": "small" === t.size,
          "n-button-focused": t.focused,
          "n-button-disable": t.showProgress,
          "n-button-stroke n-button-stroke-primary":
            t.stroke && "primary" === t.theme,
          "n-button-stroke n-button-stroke-secondary":
            t.stroke && "secondary" === t.theme,
          "n-flat-button n-flat-button-primary":
            !t.stroke && "primary" === t.theme,
          "n-flat-button n-flat-button-secondary":
            !t.stroke && "secondary" === t.theme,
          "n-button-link": t.link,
        }),
      r = () => {
        if (t.href) {
          const s = e.__rest(t, [
            "rounded",
            "theme",
            "stroke",
            "size",
            "focused",
            "showProgress",
            "onClick",
            "className",
            "children",
            "icon",
          ]);
          return Object.assign({}, s);
        }
        {
          const s = e.__rest(t, [
            "rounded",
            "theme",
            "stroke",
            "size",
            "href",
            "focused",
            "showProgress",
            "className",
            "children",
            "icon",
          ]);
          return Object.assign({}, s);
        }
      };
    return t.href
      ? a.default.createElement(
          "a",
          Object.assign(
            {
              href: t.href,
              className: `n-button ripple ripple-anchor ${s()} ${
                t.className && t.className
              }`,
            },
            r()
          ),
          a.default.createElement(l, Object.assign({}, t))
        )
      : a.default.createElement(
          "button",
          Object.assign(
            {
              className: `n-button ripple ${s()} ${t.className && t.className}`,
            },
            r()
          ),
          a.default.createElement(l, Object.assign({}, t))
        );
  },
  l = (e) => {
    const t = e.icon;
    return a.default.createElement(
      "div",
      { className: "n-button-content" },
      !e.showProgress &&
        e.icon &&
        a.default.createElement(
          "div",
          { className: "social-icon" },
          a.default.createElement(t, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
            }),
          })
        ),
      !e.showProgress && e.children,
      e.showProgress &&
        a.default.createElement(
          "div",
          { className: "n-btn-spin" },
          a.default.createElement("img", {
            className: "n-btn-spinner",
            style: { width: "50px" },
            src: s,
          })
        )
    );
  };
o.defaultProps = {
  href: null,
  type: "button",
  disabled: !1,
  rounded: !1,
  theme: "primary",
  size: "medium",
  focused: !1,
  showProgress: !1,
  stroke: null,
  children: null,
  onClick: null,
  className: null,
  id: null,
  icon: null,
  name: null,
};
var i = a.default.memo(o);
module.exports = i;
//# sourceMappingURL=Button.js.map
