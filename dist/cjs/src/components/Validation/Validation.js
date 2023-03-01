"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react");
require("./Validation.scss.js");
var s = require("../../assets/error-badge.svg.js"),
  t = require("../../assets/warning-badge.svg.js"),
  r = require("../../assets/tick-green-badge.svg.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = l(a);
const i = (a) => {
  const {
    validationState: l,
    label: i,
    isHidden: d,
    className: c,
    style: u,
  } = a;
  return (
    e.__rest(a, ["validationState", "label", "isHidden", "className", "style"]),
    d
      ? n.default.createElement(n.default.Fragment, null)
      : n.default.createElement(
          "div",
          { className: "n-validation-container" },
          (function () {
            let e, a;
            switch (l) {
              case "error":
                (e = "n-field-error"), (a = s);
                break;
              case "success":
                (e = "n-field-success"), (a = r);
                break;
              case "warning":
                (e = "n-field-warning"), (a = t);
            }
            return n.default.createElement(
              "div",
              {
                className: `n-state-container ${e} ${null != c ? c : ""}`,
                style: null != u ? u : {},
              },
              n.default.createElement(
                "div",
                { className: "n-svg-container" },
                " ",
                n.default.createElement("img", { src: a, alt: `${l} badge` })
              ),
              i
            );
          })()
        )
  );
};
i.defaultProps = { validationState: "success", label: "", isHidden: !1 };
var d = n.default.memo(i);
module.exports = d;
//# sourceMappingURL=Validation.js.map
