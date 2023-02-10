import { __rest as t } from "../../../node_modules/tslib/tslib.es6.js";
import e, { useState as n, useEffect as a } from "react";
import "./Alert.scss.js";
import l from "../Button/Button.js";
import { SvgError as r } from "../../assets/svg-components/Alert/index.js";
import { SvgCheck as o } from "../../assets/svg-components/Navigation/index.js";
import {
  SvgIcInfo as s,
  SvgIcErrorColored as i,
} from "../../assets/svg-components/Jio/index.js";
import c from "../../assets/loader.gif.js";
const u = (u) => {
  var b;
  const {
      alertWidth: d,
      buttonText: m,
      buttonType: f,
      children: p,
      className: x,
      displayButton: k,
      extendedAlert: h,
      fullWidth: v,
      href: N,
      Icon: g,
      labelText: j,
      linkText: w,
      loader: E,
      onClick: $,
      state: y,
      style: T,
    } = u,
    L = t(u, [
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
    A = { info: s, success: o, warn: r, error: i },
    [B, C] = n({ container: "", icon: "", button: "", buttonLabel: "" }),
    [W, I] = n(() => A.info),
    [O, z] = n("fit-content");
  return (
    a(() => {
      switch (y) {
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
      void 0 !== y && I(() => A[y]);
    }, [y]),
    a(() => {
      z(void 0 !== d ? d : !d && v ? "100%" : "fit-content");
    }, [d, v]),
    e.createElement(
      "div",
      Object.assign(
        {
          style:
            null !==
              (b = Object.assign(Object.assign({}, T), {
                width: O,
                height: h ? "auto" : "48px",
              })) && void 0 !== b
              ? b
              : {},
          className: `n-alert ${B.container} ${x} ${
            v && "n-alert-full-width"
          } ${"link" === f && "n-alert-link-button-container"} ${
            E && "n-alert-loader-container"
          }`,
        },
        L
      ),
      e.createElement(
        "div",
        { className: `n-alert-flex ${h && "n-alert-extended"}` },
        e.createElement(
          "div",
          { className: "n-alert-text-icon-wrapper" },
          E
            ? e.createElement("img", {
                src: c,
                className: "n-alert-icon n-alert-loader",
              })
            : g ||
                e.createElement(W, {
                  className: `\n                                        n-alert-icon \n                                        ${
                    B.icon
                  } \n                                        ${
                    E && "n-alert-loader"
                  }\n                                    `,
                }),
          e.createElement("div", { className: "n-alert-label-text" }, j),
          e.createElement("div", { className: "n-alert-text" }, p)
        ),
        k &&
          !E &&
          e.createElement(
            "div",
            { className: "n-alert-button-container" },
            "default" === f || "button" === f
              ? e.createElement(
                  l,
                  {
                    size: "small",
                    className: `n-alert-button ${B.button}`,
                    onClick: $,
                  },
                  m
                )
              : e.createElement(
                  "a",
                  {
                    className: `n-alert-link ${B.buttonLabel}`,
                    onClick: $,
                    href: N,
                  },
                  w || m || "Click"
                )
          )
      )
    )
  );
};
u.defaultProps = {
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
export { u as default };
//# sourceMappingURL=Alert.js.map
