import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { memo as l } from "react";
import n from "../../utils/uuids.js";
import "./TabItem.scss.js";
const s = t.forwardRef((l, n) => {
  const { id: s, children: a, onClick: r, className: i, style: c, icon: o } = l,
    m = e(l, ["id", "children", "onClick", "className", "style", "icon"]);
  return t.createElement(
    "li",
    Object.assign(
      {
        id: s,
        className: `n-tab-item ${null != i ? i : ""}`,
        style: null != c ? c : {},
      },
      m,
      { ref: n }
    ),
    t.createElement(
      "button",
      { role: "tab", className: "n-tab-btn", type: "button", onClick: r },
      o ? t.createElement("span", { className: "n-tab-icon" }, o) : null,
      t.createElement("span", null, a)
    )
  );
});
s.defaultProps = {
  id: "n-tab-item" + n(),
  children: t.createElement(t.Fragment, null),
};
var a = l(s);
export { a as default };
//# sourceMappingURL=TabItem.js.map
