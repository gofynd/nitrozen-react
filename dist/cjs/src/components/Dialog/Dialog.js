"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../assets/svg-components/Nitrozen/index.js"),
  l = require("../../utils/uuids.js"),
  i = require("../Button/Button.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Dialog.scss.js");
var s = n(t);
const d = (t) => {
  const {
      id: l,
      kind: n,
      title: d,
      size: o,
      theme: r,
      children: c,
      positiveButtonLabel: u,
      negativeButtonLabel: m,
      onPositiveResponse: g,
      onNegativeResponse: f,
      isVisible: b,
      isClosable: h,
      className: p,
      style: v,
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
  return s.default.createElement(
    s.default.Fragment,
    null,
    b &&
      s.default.createElement(
        "div",
        { id: l },
        s.default.createElement(
          "div",
          { className: "n-dialog-backdrop" },
          s.default.createElement(
            "div",
            Object.assign(
              {
                className:
                  "s" === o
                    ? `n-wrapper-width-s n-dialog ${null != p ? p : ""}`
                    : `n-wrapper-width-m n-dialog ${null != p ? p : ""}`,
                style: null != v ? v : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              E
            ),
            s.default.createElement(
              "div",
              { className: "n-closebtn-container" },
              s.default.createElement(
                "header",
                {
                  className:
                    "acknowledgement" === n
                      ? "n-dialog-header-acknowlegdement n-dialog-header"
                      : "n-dialog-header",
                  id: "id + '_title'",
                },
                "string" == typeof d
                  ? s.default.createElement(
                      "h5",
                      {
                        className:
                          "acknowledgement" === n
                            ? "acknowlegdement-header header"
                            : "header",
                      },
                      d
                    )
                  : s.default.createElement(
                      "div",
                      { className: "n-header-card" },
                      s.default.createElement(
                        "span",
                        { className: "n-header-card-1" },
                        " ",
                        d.helperBlock.text
                      ),
                      s.default.createElement(
                        "span",
                        { className: "n-header-card-2" },
                        " ",
                        d.titleBlock.text
                      )
                    )
              ),
              h &&
                s.default.createElement(a.SvgIcClose, {
                  className: "n-closebtn",
                  onClick: k,
                })
            ),
            s.default.createElement(
              "section",
              { className: "n-dialog-body", id: "id + '_desc'" },
              c
            ),
            s.default.createElement(
              "footer",
              {
                className:
                  "dialog" === n
                    ? "s" === o
                      ? "n-dialog-footer-size"
                      : "n-dialog-footer"
                    : "acknowledgement" === n
                    ? "n-dialog-footer-size"
                    : void 0,
              },
              "dialog" === n &&
                s.default.createElement(
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
              ("dialog" === n || "acknowledgement" === n) &&
                s.default.createElement(
                  i,
                  {
                    theme: "primary",
                    size: "medium",
                    onClick: () => {
                      g && g(), k();
                    },
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
