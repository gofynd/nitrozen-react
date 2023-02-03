"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../../utils/uuids.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./TabItem.scss.js");
var n = a(t);
const s = n.default.forwardRef((t, l) => {
  const { id: a, children: s, onClick: r, className: u, style: i, icon: c } = t,
    d = e.__rest(t, [
      "id",
      "children",
      "onClick",
      "className",
      "style",
      "icon",
    ]);
  return n.default.createElement(
    "li",
    Object.assign(
      {
        id: a,
        className: `n-tab-item ${null != u ? u : ""}`,
        style: null != i ? i : {},
      },
      d,
      { ref: l }
    ),
    n.default.createElement(
      "button",
      { role: "tab", className: "n-tab-btn", type: "button", onClick: r },
      c
        ? n.default.createElement("span", { className: "n-tab-icon" }, c)
        : null,
      n.default.createElement("span", null, s)
    )
  );
});
s.defaultProps = {
  id: "n-tab-item" + l(),
  children: n.default.createElement(n.default.Fragment, null),
};
var r = t.memo(s);
module.exports = r;
//# sourceMappingURL=TabItem.js.map
