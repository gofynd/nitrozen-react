"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react"),
  l = require("../../assets/error-red-badge.svg.js"),
  t = require("../../assets/tick-green-badge.svg.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = s(a);
const i = (a) => {
  const {
      isValid: s,
      validLabel: i,
      invalidLabel: n,
      isHidden: d,
      className: c,
      style: u,
    } = a,
    o = e.__rest(a, [
      "isValid",
      "validLabel",
      "invalidLabel",
      "isHidden",
      "className",
      "style",
    ]);
  return d
    ? r.default.createElement(r.default.Fragment, null)
    : s
    ? r.default.createElement(
        "div",
        Object.assign(
          {
            style: null != u ? u : {},
            className: `badge-description-container ${null != c ? c : ""}`,
          },
          o
        ),
        r.default.createElement("img", { src: t, alt: "correct badge" }),
        r.default.createElement(
          "span",
          { className: "nitrozen-approval-visible" },
          i
        )
      )
    : r.default.createElement(
        "div",
        Object.assign(
          {
            style: null != u ? u : {},
            className: `badge-description-container ${null != c ? c : ""}`,
          },
          o
        ),
        r.default.createElement("img", { src: l, alt: "error badge" }),
        r.default.createElement(
          "span",
          { className: "nitrozen-error-visible" },
          n
        )
      );
};
i.defaultProps = {
  isValid: !1,
  validLabel: "",
  invalidLabel: "",
  isHidden: !1,
};
var n = r.default.memo(i);
module.exports = n;
//# sourceMappingURL=Validation.js.map
