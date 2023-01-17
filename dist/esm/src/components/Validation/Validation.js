import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import s from "react";
import "./Validation.scss.js";
import a from "../../assets/error-badge.svg.js";
import t from "../../assets/warning-badge.svg.js";
import r from "../../assets/tick-green-badge.svg.js";
const n = (n) => {
  const {
    validationState: i,
    label: l,
    isHidden: c,
    className: o,
    style: m,
  } = n;
  return (
    e(n, ["validationState", "label", "isHidden", "className", "style"]),
    c
      ? s.createElement(s.Fragment, null)
      : s.createElement(
          "div",
          { className: "n-validation-container" },
          (function () {
            let e, n;
            switch (i) {
              case "error":
                (e = "n-field-error"), (n = a);
                break;
              case "success":
                (e = "n-field-success"), (n = r);
                break;
              case "warning":
                (e = "n-field-warning"), (n = t);
            }
            return s.createElement(
              "div",
              {
                className: `n-state-container ${e} ${null != o ? o : ""}`,
                style: null != m ? m : {},
              },
              s.createElement(
                "div",
                { className: "n-svg-container" },
                " ",
                s.createElement("img", { src: n, alt: `${i} badge` })
              ),
              l
            );
          })()
        )
  );
};
n.defaultProps = { validationState: "success", label: "", isHidden: !1 };
var i = s.memo(n);
export { i as default };
//# sourceMappingURL=Validation.js.map
