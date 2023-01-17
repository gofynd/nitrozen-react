"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../Button/Button.js"),
  a = require("../../utils/uuids.js");
require("./Dialog.scss.js");
var i = require("../../utils/useOutsideClick.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var o = n(t);
const s = (t) => {
  const {
      id: a,
      title: n,
      DialogIcon: s,
      theme: r,
      children: d,
      positiveButtonLabel: u,
      neutralButtonLabel: c,
      negativeButtonLabel: m,
      onPositiveResponse: b,
      onNeutralResponse: f,
      onNegativeResponse: g,
      isVisible: v,
      className: p,
      style: N,
      closeHandle: h,
    } = t,
    E = e.__rest(t, [
      "id",
      "title",
      "DialogIcon",
      "theme",
      "children",
      "positiveButtonLabel",
      "neutralButtonLabel",
      "negativeButtonLabel",
      "onPositiveResponse",
      "onNeutralResponse",
      "onNegativeResponse",
      "isVisible",
      "className",
      "style",
      "closeHandle",
    ]),
    B = u || !1,
    y = null != c ? c : "",
    z = m || !1,
    L = () => {
      null == h || h();
    },
    j = i.useOutsideClick(L);
  return o.default.createElement(
    o.default.Fragment,
    null,
    v &&
      o.default.createElement(
        "div",
        { id: a },
        o.default.createElement(
          "div",
          { className: "nitrozen-dialog-backdrop" },
          o.default.createElement(
            "div",
            Object.assign(
              {
                ref: j,
                className: `nitrozen-dialog ${null != p ? p : ""}`,
                style: null != N ? N : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              E
            ),
            null != s ? s : null,
            o.default.createElement(
              "header",
              { className: "nitrozen-dialog-header", id: "id + '_title'" },
              o.default.createElement("div", { className: "header" }, n)
            ),
            o.default.createElement(
              "section",
              { className: "nitrozen-dialog-body", id: "id + '_desc'" },
              d
            ),
            o.default.createElement(
              "footer",
              { className: "nitrozen-dialog-footer" },
              o.default.createElement(
                "div",
                { className: "nitrozen-dialog-footer-container" },
                B &&
                  o.default.createElement(
                    l,
                    {
                      theme: `${r || "primary"}`,
                      rounded: !1,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        b && b(), L();
                      },
                    },
                    B
                  ),
                y &&
                  o.default.createElement(
                    l,
                    {
                      theme: `${r || "primary"}`,
                      rounded: !1,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        f && f(), L();
                      },
                    },
                    y
                  ),
                z &&
                  o.default.createElement(
                    l,
                    {
                      rounded: !1,
                      theme: `${r || "primary"}`,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        g && g(), L();
                      },
                    },
                    z
                  )
              )
            )
          )
        )
      )
  );
};
(s.defaultProps = {
  id: `nitrozen-dialog-${a()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: !1,
  neutralButtonLabel: "",
  negativeButtonLabel: !1,
  isVisible: !1,
}),
  (module.exports = s);
//# sourceMappingURL=Dialog.js.map
