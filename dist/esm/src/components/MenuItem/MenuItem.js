import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import i, { memo as n } from "react";
import t from "../../utils/uuids.js";
import "./MenuItem.scss.js";
const l = (n) => {
  const {
      id: t,
      className: l,
      style: d,
      children: s,
      disabled: m,
      selected: a,
      heading: o,
      linkConfig: c,
      divider: r,
      key: u,
      index: k,
    } = n,
    b = e(n, [
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
  return i.createElement(
    "li",
    Object.assign(
      {
        id: t ? t.toString() : "",
        "data-testid": `n-menu-block-item-${k}`,
        className: `n-menu-block-item ${l || ""}\n        ${
          m ? "n-menu-block-item-disabled" : ""
        }\n        ${r ? "n-menu-block-item-divider" : ""}\n        ${
          o ? "n-menu-block-item-heading" : ""
        }\n        ${!a || o || m ? "" : "n-menu-block-item-selected"}\n      `,
        style: d,
      },
      b
    ),
    i.createElement(
      "a",
      {
        href: (!m && (null == c ? void 0 : c.href)) || void 0,
        target: (null == c ? void 0 : c.target) || "_self",
        "data-testid": `n-menu-block-item-${k}-link`,
      },
      s
    )
  );
};
l.defaultProps = {
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
var d = n(l);
export { d as default };
//# sourceMappingURL=MenuItem.js.map
