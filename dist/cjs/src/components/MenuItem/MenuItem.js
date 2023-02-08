"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  i = require("react"),
  t = require("../../utils/uuids.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./MenuItem.scss.js");
var l = n(i);
const d = (i) => {
  const {
      id: t,
      className: n,
      style: d,
      children: s,
      disabled: a,
      selected: r,
      heading: u,
      linkConfig: c,
      divider: m,
      key: o,
      index: b,
    } = i,
    k = e.__rest(i, [
      "id",
      "className",
      "style",
      "children",
      "disabled",
      "selected",
      "heading",
      "linkConfig",
      "divider",
      "key",
      "index",
    ]);
  return l.default.createElement(
    "li",
    Object.assign(
      {
        id: t ? t.toString() : "",
        "data-testid": `n-menu-block-item-${b}`,
        className: `n-menu-block-item ${n || ""}\n        ${
          a ? "n-menu-block-item-disabled" : ""
        }\n        ${m ? "n-menu-block-item-divider" : ""}\n        ${
          u ? "n-menu-block-item-heading" : ""
        }\n        ${!r || u || a ? "" : "n-menu-block-item-selected"}\n      `,
        style: d,
      },
      k
    ),
    l.default.createElement(
      "a",
      {
        href: (!a && (null == c ? void 0 : c.href)) || void 0,
        target: (null == c ? void 0 : c.target) || "_self",
        "data-testid": `n-menu-block-item-${b}-link`,
      },
      s
    )
  );
};
d.defaultProps = {
  id: `n-menu-block-item-${t()}`,
  key: `n-menu-block-item-key-${t()}`,
  style: {},
  className: "",
  disabled: !1,
  selected: !1,
  heading: !1,
  linkConfig: {},
  divider: !1,
  childern: "Menu Item",
};
var s = i.memo(d);
module.exports = s;
//# sourceMappingURL=MenuItem.js.map
