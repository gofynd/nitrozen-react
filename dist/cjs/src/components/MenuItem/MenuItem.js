"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  s = require("../../utils/uuids.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = l(t);
const i = (t) => {
  const { id: s, className: l, style: i, children: n } = t,
    u = e.__rest(t, ["id", "className", "style", "children"]);
  return r.default.createElement(
    "li",
    Object.assign(
      {
        style: null != i ? i : {},
        className: `nitrozen-menu-item ${null != l ? l : ""}`,
      },
      u
    ),
    t.children
  );
};
i.defaultProps = { id: "nitrozen-menu" + s() };
var n = t.memo(i);
module.exports = n;
//# sourceMappingURL=MenuItem.js.map
