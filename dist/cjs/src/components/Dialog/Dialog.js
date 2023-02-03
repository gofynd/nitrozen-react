"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../assets/svg-components/Navigation/index.js"),
  l = require("../../utils/uuids.js"),
  i = require("../Button/Button.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Dialog.scss.js");
var n = s(t);
const d = (t) => {
  const {
      id: l,
      kind: s,
      title: d,
      size: o,
      theme: r,
      children: c,
      positiveButtonLabel: u,
      negativeButtonLabel: m,
      onPositiveResponse: g,
      onNegativeResponse: f,
      isVisible: b,
      isClosable: p,
      className: v,
      style: h,
      closeHandle: N,
    } = t,
    E = e.__rest(t, [
      "id",
      "kind",
      "title",
      "size",
      "theme",
      "children",
      "positiveButtonLabel",
      "negativeButtonLabel",
      "onPositiveResponse",
      "onNegativeResponse",
      "isVisible",
      "isClosable",
      "className",
      "style",
      "closeHandle",
    ]),
    k = () => {
      null == N || N();
    };
  return n.default.createElement(
    n.default.Fragment,
    null,
    b &&
      n.default.createElement(
        "div",
        { id: l },
        n.default.createElement(
          "div",
          { className: "n-dialog-backdrop" },
          n.default.createElement(
            "div",
            Object.assign(
              {
                className: ` n-${s} ${
                  "s" === o
                    ? `n-wrapper-width-s n-dialog ${null != v ? v : ""}`
                    : `n-wrapper-width-m n-dialog ${null != v ? v : ""}`
                }`,
                style: null != h ? h : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              E
            ),
            n.default.createElement(
              "div",
              { className: "n-closebtn-container" },
              p &&
                n.default.createElement(a.SvgClose, {
                  className: "n-closebtn",
                  onClick: k,
                })
            ),
            n.default.createElement(
              "header",
              { className: "n-dialog-header", id: "id + '_title'" },
              "string" == typeof d
                ? n.default.createElement("h5", { className: "header" }, d)
                : n.default.createElement(
                    "div",
                    { className: "n-header-card" },
                    n.default.createElement(
                      "span",
                      { className: "n-header-card-1" },
                      " ",
                      d.helperBlock.text
                    ),
                    n.default.createElement(
                      "span",
                      { className: "n-header-card-2" },
                      " ",
                      d.titleBlock.text
                    )
                  )
            ),
            n.default.createElement(
              "section",
              { className: "n-dialog-body", id: "id + '_desc'" },
              c
            ),
            n.default.createElement(
              "footer",
              {
                className:
                  "dialog" === s
                    ? "s" === o
                      ? "n-dialog-footer-size"
                      : "n-dialog-footer"
                    : "acknowledgement" === s
                    ? "n-dialog-footer-size"
                    : void 0,
              },
              "dialog" === s &&
                n.default.createElement(
                  i,
                  {
                    className: "n-dialog-footer-btn-spacing",
                    theme: "secondary",
                    size: "medium",
                    onClick: () => {
                      f && f(), k();
                    },
                  },
                  m
                ),
              ("dialog" === s || "acknowledgement" === s) &&
                n.default.createElement(
                  i,
                  {
                    theme: "primary",
                    size: "medium",
                    onClick: () => {
                      g && g(), k();
                    },
                    className:
                      "dialog" == s && "s" !== o ? "n-dialog-positive" : "",
                  },
                  u
                )
            )
          )
        )
      )
  );
};
(d.defaultProps = {
  id: `n-dialog-${l()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: !1,
  negativeButtonLabel: !1,
  isVisible: !1,
}),
  (module.exports = d);
//# sourceMappingURL=Dialog.js.map
