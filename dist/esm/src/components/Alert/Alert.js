import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useEffect as a } from "react";
import "./Alert.scss.js";
import l from "../Button/Button.js";
import {
  SvgIcInfo as r,
  SvgIcConfirm as o,
  SvgIcError as s,
  SvgIcErrorColored as i,
} from "../../assets/svg-components/Nitrozen/index.js";
const c = (c) => {
  var u;
  const {
      alertWidth: b,
      buttonText: d,
      buttonType: m,
      children: f,
      className: p,
      displayButton: x,
      extendedAlert: k,
      fullWidth: h,
      href: N,
      Icon: v,
      labelText: w,
      linkText: g,
      loader: y,
      onClick: E,
      state: $,
      style: T,
    } = c,
    j = e(c, [
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
    L = { info: r, success: o, warn: s, error: i },
    [B, C] = n({ container: "", icon: "", button: "", buttonLabel: "" }),
    [W, A] = n(() => L.info),
    [I, O] = n("fit-content");
  return (
    a(() => {
      switch ($) {
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
      void 0 !== $ && A(() => L[$]);
    }, [$]),
    a(() => {
      O(void 0 !== b ? b : !b && h ? "100%" : "fit-content");
    }, [b, h]),
    t.createElement(
      "div",
      Object.assign(
        {
          style:
            null !==
              (u = Object.assign(Object.assign({}, T), {
                width: I,
                height: k ? "auto" : "48px",
              })) && void 0 !== u
              ? u
              : {},
          className: `n-alert ${B.container} ${p} ${
            h && "n-alert-full-width"
          } ${"link" === m && "n-alert-link-button-container"} ${
            y && "n-alert-loader-container"
          }`,
        },
        j
      ),
      t.createElement(
        "div",
        { className: `n-alert-flex ${k && "n-alert-extended"}` },
        t.createElement(
          "div",
          { className: "n-alert-text-icon-wrapper" },
          y
            ? t.createElement("img", {
                src: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/loader.gif",
                className: "n-alert-icon n-alert-loader",
              })
            : v ||
                t.createElement(W, {
                  className: `\n                                        n-alert-icon \n                                        ${
                    B.icon
                  } \n                                        ${
                    y && "n-alert-loader"
                  }\n                                    `,
                }),
          t.createElement("div", { className: "n-alert-label-text" }, w),
          t.createElement("div", { className: "n-alert-text" }, f)
        ),
        x &&
          !y &&
          t.createElement(
            "div",
            { className: "n-alert-button-container" },
            "default" === m || "button" === m
              ? t.createElement(
                  l,
                  {
                    size: "small",
                    className: `n-alert-button ${B.button}`,
                    onClick: E,
                  },
                  d
                )
              : t.createElement(
                  "a",
                  {
                    className: `n-alert-link ${B.buttonLabel}`,
                    onClick: E,
                    href: N,
                  },
                  g || d || "Click"
                )
          )
      )
    )
  );
};
c.defaultProps = {
  className: "",
  displayButton: !1,
  extendedAlert: !1,
  fullWidth: !0,
  Icon: "",
  labelText: "",
  loader: !1,
  state: "info",
  style: {},
};
export { c as default };
//# sourceMappingURL=Alert.js.map
