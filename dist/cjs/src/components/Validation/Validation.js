"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Validation.scss.js");
var s = t(a);
const r = (a) => {
  const {
    validationState: t,
    label: r,
    isHidden: l,
    className: n,
    style: i,
  } = a;
  return (
    e.__rest(a, ["validationState", "label", "isHidden", "className", "style"]),
    l
      ? s.default.createElement(s.default.Fragment, null)
      : s.default.createElement(
          "div",
          { className: "n-validation-container" },
          (function () {
            let e, a;
            switch (t) {
              case "error":
                (e = "n-field-error"),
                  (a = require("../../assets/error-badge.svg"));
                break;
              case "success":
                (e = "n-field-success"),
                  (a = require("../../assets/tick-green-badge.svg"));
                break;
              case "warning":
                (e = "n-field-warning"),
                  (a = require("../../assets/warning-badge.svg"));
            }
            return s.default.createElement(
              "div",
              {
                className: `n-state-container ${e} ${null != n ? n : ""}`,
                style: null != i ? i : {},
              },
              s.default.createElement(
                "div",
                { className: "n-svg-container" },
                " ",
                s.default.createElement("img", { src: a, alt: `${t} badge` })
              ),
              r
            );
          })()
        )
  );
};
r.defaultProps = { validationState: "success", label: "", isHidden: !1 };
var l = s.default.memo(r);
module.exports = l;
//# sourceMappingURL=Validation.js.map
