"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Alert.scss.js");
var n = require("../Button/Button.js"),
  a = require("../../assets/svg-components/Nitrozen/index.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = l(t);
const o = (l) => {
  var o;
  const {
      alertWidth: s,
      buttonText: c,
      buttonType: i,
      children: u,
      className: d,
      displayButton: b,
      extendedAlert: f,
      fullWidth: m,
      href: v,
      Icon: x,
      labelText: k,
      linkText: h,
      loader: p,
      onClick: g,
      state: E,
      style: N,
    } = l,
    w = e.__rest(l, [
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
    y = {
      info: a.SvgIcInfo,
      success: a.SvgIcConfirm,
      warn: a.SvgIcError,
      error: a.SvgIcErrorColored,
    },
    [$, T] = t.useState({
      container: "",
      icon: "",
      button: "",
      buttonLabel: "",
    }),
    [j, I] = t.useState(() => y.info),
    [C, S] = t.useState("fit-content");
  return (
    t.useEffect(() => {
      switch (E) {
        case "info":
          T({
            container: "n-alert-info",
            icon: "n-alert-icon-info",
            button: "",
            buttonLabel: "n-alert-button-link-info",
          });
          break;
        case "success":
          T({
            container: "n-alert-success",
            icon: "n-alert-icon-success",
            button: "n-alert-button-success",
            buttonLabel: "n-alert-button-link-success",
          });
          break;
        case "warn":
          T({
            container: "n-alert-warn",
            icon: "n-alert-icon-warn",
            button: "n-alert-button-warn",
            buttonLabel: "n-alert-button-link-warn",
          });
          break;
        case "error":
          T({
            container: "n-alert-error",
            icon: "n-alert-icon-error",
            button: "n-alert-button-error",
            buttonLabel: "n-alert-button-link-error",
          });
      }
      void 0 !== E && I(() => y[E]);
    }, [E]),
    t.useEffect(() => {
      S(void 0 !== s ? s : !s && m ? "100%" : "fit-content");
    }, [s, m]),
    r.default.createElement(
      "div",
      Object.assign(
        {
          style:
            null !==
              (o = Object.assign(Object.assign({}, N), {
                width: C,
                height: f ? "auto" : "48px",
              })) && void 0 !== o
              ? o
              : {},
          className: `n-alert ${$.container} ${d} ${
            m && "n-alert-full-width"
          } ${"link" === i && "n-alert-link-button-container"} ${
            p && "n-alert-loader-container"
          }`,
        },
        w
      ),
      r.default.createElement(
        "div",
        { className: `n-alert-flex ${f && "n-alert-extended"}` },
        r.default.createElement(
          "div",
          { className: "n-alert-text-icon-wrapper" },
          p
            ? r.default.createElement("img", {
                src: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/loader.gif",
                className: "n-alert-icon n-alert-loader",
              })
            : x ||
                r.default.createElement(j, {
                  className: `\n                                        n-alert-icon \n                                        ${
                    $.icon
                  } \n                                        ${
                    p && "n-alert-loader"
                  }\n                                    `,
                }),
          r.default.createElement(
            "div",
            { className: "n-alert-label-text" },
            k
          ),
          r.default.createElement("div", { className: "n-alert-text" }, u)
        ),
        b &&
          !p &&
          r.default.createElement(
            "div",
            { className: "n-alert-button-container" },
            "default" === i || "button" === i
              ? r.default.createElement(
                  n,
                  {
                    size: "small",
                    className: `n-alert-button ${$.button}`,
                    onClick: g,
                  },
                  c
                )
              : r.default.createElement(
                  "a",
                  {
                    className: `n-alert-link ${$.buttonLabel}`,
                    onClick: g,
                    href: v,
                  },
                  h || c || "Click"
                )
          )
      )
    )
  );
};
(o.defaultProps = {
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
  (module.exports = o);
//# sourceMappingURL=Alert.js.map
