"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Alert.scss.js");
var n = require("../Button/Button.js"),
  a = require("../../assets/svg-components/Alert/index.js"),
  l = require("../../assets/svg-components/Navigation/index.js"),
  r = require("../../assets/svg-components/Jio/index.js"),
  s = require("../../assets/loader.gif.js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = o(t);
const i = (o) => {
  var i;
  const {
      alertWidth: u,
      buttonText: d,
      buttonType: b,
      children: f,
      className: m,
      displayButton: v,
      extendedAlert: x,
      fullWidth: k,
      href: h,
      Icon: g,
      labelText: p,
      linkText: E,
      loader: N,
      onClick: j,
      state: w,
      style: y,
    } = o,
    $ = e.__rest(o, [
      "alertWidth",
      "buttonText",
      "buttonType",
      "children",
      "className",
      "displayButton",
      "extendedAlert",
      "fullWidth",
      "href",
      "Icon",
      "labelText",
      "linkText",
      "loader",
      "onClick",
      "state",
      "style",
    ]),
    T = {
      info: r.SvgIcInfo,
      success: l.SvgCheck,
      warn: a.SvgError,
      error: r.SvgIcErrorColored,
    },
    [q, C] = t.useState({
      container: "",
      icon: "",
      button: "",
      buttonLabel: "",
    }),
    [S, I] = t.useState(() => T.info),
    [L, A] = t.useState("fit-content");
  return (
    t.useEffect(() => {
      switch (w) {
        case "info":
          C({
            container: "n-alert-info",
            icon: "n-alert-icon-info",
            button: "",
            buttonLabel: "n-alert-button-link-info",
          });
          break;
        case "success":
          C({
            container: "n-alert-success",
            icon: "n-alert-icon-success",
            button: "n-alert-button-success",
            buttonLabel: "n-alert-button-link-success",
          });
          break;
        case "warn":
          C({
            container: "n-alert-warn",
            icon: "n-alert-icon-warn",
            button: "n-alert-button-warn",
            buttonLabel: "n-alert-button-link-warn",
          });
          break;
        case "error":
          C({
            container: "n-alert-error",
            icon: "n-alert-icon-error",
            button: "n-alert-button-error",
            buttonLabel: "n-alert-button-link-error",
          });
      }
      void 0 !== w && I(() => T[w]);
    }, [w]),
    t.useEffect(() => {
      A(void 0 !== u ? u : !u && k ? "100%" : "fit-content");
    }, [u, k]),
    c.default.createElement(
      "div",
      Object.assign(
        {
          style:
            null !==
              (i = Object.assign(Object.assign({}, y), {
                width: L,
                height: x ? "auto" : "48px",
              })) && void 0 !== i
              ? i
              : {},
          className: `n-alert ${q.container} ${m} ${
            k && "n-alert-full-width"
          } ${"link" === b && "n-alert-link-button-container"} ${
            N && "n-alert-loader-container"
          }`,
        },
        $
      ),
      c.default.createElement(
        "div",
        { className: `n-alert-flex ${x && "n-alert-extended"}` },
        c.default.createElement(
          "div",
          { className: "n-alert-text-icon-wrapper" },
          N
            ? c.default.createElement("img", {
                src: s,
                className: "n-alert-icon n-alert-loader",
              })
            : g ||
                c.default.createElement(S, {
                  className: `\n                                        n-alert-icon \n                                        ${
                    q.icon
                  } \n                                        ${
                    N && "n-alert-loader"
                  }\n                                    `,
                }),
          c.default.createElement(
            "div",
            { className: "n-alert-label-text" },
            p
          ),
          c.default.createElement("div", { className: "n-alert-text" }, f)
        ),
        v &&
          !N &&
          c.default.createElement(
            "div",
            { className: "n-alert-button-container" },
            "default" === b || "button" === b
              ? c.default.createElement(
                  n,
                  {
                    size: "small",
                    className: `n-alert-button ${q.button}`,
                    onClick: j,
                  },
                  d
                )
              : c.default.createElement(
                  "a",
                  {
                    className: `n-alert-link ${q.buttonLabel}`,
                    onClick: j,
                    href: h,
                  },
                  E || d || "Click"
                )
          )
      )
    )
  );
};
(i.defaultProps = {
  className: "",
  displayButton: !1,
  extendedAlert: !1,
  fullWidth: !0,
  Icon: "",
  labelText: "",
  loader: !1,
  state: "info",
  style: {},
}),
  (module.exports = i);
//# sourceMappingURL=Alert.js.map
