import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a from "react";
import "./Validation.scss.js";
import s from "../../assets/error-red-badge.svg.js";
import l from "../../assets/tick-green-badge.svg.js";
const i = (i) => {
  const {
      isValid: t,
      validLabel: r,
      invalidLabel: n,
      isHidden: d,
      className: c,
      style: m,
    } = i,
    o = e(i, [
      "isValid",
      "validLabel",
      "invalidLabel",
      "isHidden",
      "className",
      "style",
    ]);
  return d
    ? a.createElement(a.Fragment, null)
    : t
    ? a.createElement(
        "div",
        Object.assign(
          {
            style: null != m ? m : {},
            className: `badge-description-container ${null != c ? c : ""}`,
          },
          o
        ),
        a.createElement("img", { src: l, alt: "correct badge" }),
        a.createElement("span", { className: "nitrozen-approval-visible" }, r)
      )
    : a.createElement(
        "div",
        Object.assign(
          {
            style: null != m ? m : {},
            className: `badge-description-container ${null != c ? c : ""}`,
          },
          o
        ),
        a.createElement("img", { src: s, alt: "error badge" }),
        a.createElement("span", { className: "nitrozen-error-visible" }, n)
      );
};
i.defaultProps = {
  isValid: !1,
  validLabel: "",
  invalidLabel: "",
  isHidden: !1,
};
var t = a.memo(i);
export { t as default };
//# sourceMappingURL=Validation.js.map
