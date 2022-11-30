import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import s from "react";
import t from "../../assets/loader-white.gif.js";
import n from "../../../node_modules/classnames/index.js";
import "./Button.scss.js";
const r = (t) => {
    const r = () =>
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
      a = () => {
        if (t.href) {
          const s = e(t, [
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
          const s = e(t, [
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
      ? s.createElement(
          "a",
          Object.assign(
            {
              href: t.href,
              className: `n-button ripple ripple-anchor ${r()} ${
                t.className && t.className
              }`,
            },
            a()
          ),
          s.createElement(o, Object.assign({}, t))
        )
      : s.createElement(
          "button",
          Object.assign(
            {
              className: `n-button ripple ${r()} ${t.className && t.className}`,
            },
            a()
          ),
          s.createElement(o, Object.assign({}, t))
        );
  },
  o = (e) => {
    const r = e.icon;
    return s.createElement(
      "div",
      { className: "n-button-content" },
      !e.showProgress &&
        e.icon &&
        s.createElement(
          "div",
          { className: "social-icon" },
          s.createElement(r, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
            }),
          })
        ),
      !e.showProgress && e.children,
      e.showProgress &&
        s.createElement(
          "div",
          { className: "n-btn-spin" },
          s.createElement("img", {
            className: "n-btn-spinner",
            style: { width: "50px" },
            src: t,
          })
        )
    );
  };
r.defaultProps = {
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
var a = s.memo(r);
export { a as default };
//# sourceMappingURL=Button.js.map
