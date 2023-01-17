"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  s = require("../../assets/loader-white.gif.js"),
  n = require("../../../node_modules/classnames/index.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Button.scss.js");
var i = a(t);
const l = (t) => {
    const s = () =>
        n({
          "n-button-rounded": t.rounded,
          "n-button-primary": "primary" === t.theme,
          "n-button-primary-positive":
            "primary" === t.theme && "positive" === t.state,
          "n-button-primary-destructive":
            "primary" === t.theme && "destructive" === t.state,
          "n-button-secondary": "secondary" === t.theme,
          "n-button-secondary-positive":
            "secondary" === t.theme && "positive" === t.state,
          "n-button-secondary-destructive":
            "secondary" === t.theme && "destructive" === t.state,
          "n-button-tertiary": "tertiary" === t.theme,
          "n-button-tertiary-positive":
            "tertiary" === t.theme && "positive" === t.state,
          "n-button-tertiary-destructive":
            "tertiary" === t.theme && "destructive" === t.state,
          "n-button-large": "large" === t.size,
          "n-button-large_only_icon": !t.children,
          "n-button-mid": "medium" === t.size,
          "n-button-mid_only_icon": !t.children,
          "n-button-small": "small" === t.size,
          "n-button-small_only_icon": !t.children,
          "n-button-focused": t.focused,
          "n-button-disable": t.showProgress,
          "n-button-full-width": t.fullWidth,
        }),
      a = () => {
        if (t.href) {
          const s = e.__rest(t, [
            "rounded",
            "theme",
            "as",
            "size",
            "focused",
            "showProgress",
            "fullWidth",
            "onClick",
            "className",
            "children",
            "icon",
            "iconRight",
          ]);
          return Object.assign({}, s);
        }
        {
          const s = e.__rest(t, [
            "rounded",
            "theme",
            "as",
            "size",
            "href",
            "focused",
            "showProgress",
            "fullWidth",
            "className",
            "children",
            "icon",
            "iconRight",
          ]);
          return Object.assign({}, s);
        }
      };
    return t.href
      ? i.default.createElement(
          "a",
          Object.assign(
            {
              href: t.href,
              className: `n-button ripple ripple-anchor ${s()} ${
                t.className && t.className
              }`,
            },
            a()
          ),
          i.default.createElement(r, Object.assign({}, t))
        )
      : "div" == t.as
      ? i.default.createElement(
          "div",
          Object.assign(
            {
              className: `n-button ripple ${s()} ${t.className && t.className}`,
            },
            a
          ),
          i.default.createElement(r, Object.assign({}, t))
        )
      : "span" == t.as
      ? i.default.createElement(
          "span",
          Object.assign(
            {
              className: `n-button ripple ${s()} ${t.className && t.className}`,
            },
            a()
          ),
          i.default.createElement(r, Object.assign({}, t))
        )
      : i.default.createElement(
          "button",
          Object.assign(
            {
              className: `n-button ripple ${s()} ${t.className && t.className}`,
            },
            a()
          ),
          i.default.createElement(r, Object.assign({}, t))
        );
  },
  r = (e) => {
    const t = e.icon,
      a = e.iconRight;
    return i.default.createElement(
      "div",
      { className: "n-button-content" },
      e.icon &&
        (e.children || !e.showProgress) &&
        i.default.createElement(
          "div",
          { className: "social-icon" },
          i.default.createElement(t, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
              "icon-padding-right": e.children,
            }),
          })
        ),
      e.children,
      e.showProgress &&
        i.default.createElement(
          "div",
          { className: "n-btn-spin" },
          i.default.createElement("img", {
            className: "n-btn-spinner",
            style: { width: "50px" },
            src: s,
          })
        ),
      !e.showProgress &&
        e.children &&
        e.iconRight &&
        i.default.createElement(
          "div",
          { className: "social-icon-right" },
          i.default.createElement(a, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
              "icon-padding-left": e.children,
            }),
          })
        )
    );
  };
l.defaultProps = {
  href: null,
  disabled: !1,
  rounded: !0,
  theme: "primary",
  as: null,
  size: "medium",
  focused: !1,
  showProgress: !1,
  fullWidth: !1,
  children: null,
  onClick: null,
  className: null,
  id: null,
  icon: null,
  name: null,
};
var c = i.default.memo(l);
module.exports = c;
//# sourceMappingURL=Button.js.map
