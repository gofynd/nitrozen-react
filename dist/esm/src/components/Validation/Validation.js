import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a from "react";
import "./Validation.scss.js";
const s = (s) => {
  const {
    validationState: t,
    label: r,
    isHidden: n,
    className: i,
    style: l,
  } = s;
  return (
    e(s, ["validationState", "label", "isHidden", "className", "style"]),
    n
      ? a.createElement(a.Fragment, null)
      : a.createElement(
          "div",
          { className: "n-validation-container" },
          (function () {
            let e, s;
            switch (t) {
              case "error":
                (e = "n-field-error"),
                  (s = require("../../assets/error-badge.svg"));
                break;
              case "success":
                (e = "n-field-success"),
                  (s = require("../../assets/tick-green-badge.svg"));
                break;
              case "warning":
                (e = "n-field-warning"),
                  (s = require("../../assets/warning-badge.svg"));
            }
            return a.createElement(
              "div",
              {
                className: `n-state-container ${e} ${null != i ? i : ""}`,
                style: null != l ? l : {},
              },
              a.createElement(
                "div",
                { className: "n-svg-container" },
                " ",
                a.createElement("img", { src: s, alt: `${t} badge` })
              ),
              r
            );
          })()
        )
  );
};
s.defaultProps = { validationState: "success", label: "", isHidden: !1 };
var t = a.memo(s);
export { t as default };
//# sourceMappingURL=Validation.js.map
