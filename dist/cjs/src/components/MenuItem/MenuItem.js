"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  s = require("react"),
  t = require("../../utils/uuids.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./MenuItem.scss.js");
var l = r(s);
const i = (s) => {
  const { id: t, className: r, style: i, children: n } = s,
    u = e.__rest(s, ["id", "className", "style", "children"]);
  return l.default.createElement(
    "li",
    Object.assign(
      {
        style: null != i ? i : {},
        className: `nitrozen-menu-item ${null != r ? r : ""}`,
      },
      u
    ),
    s.children
  );
};
i.defaultProps = { id: "nitrozen-menu" + t() };
var n = s.memo(i);
module.exports = n;
//# sourceMappingURL=MenuItem.js.map
