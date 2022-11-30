import { __rest as t } from "../../../node_modules/tslib/tslib.es6.js";
import e, { memo as o } from "react";
import l from "../../utils/uuids.js";
import i from "../Tooltip/Tooltip.js";
import "./TabItem.scss.js";
const n = (o) => {
  const {
      id: l,
      children: n,
      onClick: s,
      className: c,
      style: r,
      icon: a,
      tooltipIcon: m,
      tooltipIconHoverText: p,
    } = o,
    d = t(o, [
      "id",
      "children",
      "onClick",
      "className",
      "style",
      "icon",
      "tooltipIcon",
      "tooltipIconHoverText",
    ]);
  return e.createElement(
    "li",
    Object.assign(
      {
        onClick: s,
        id: l,
        className: `nitrozen-tab-item ${null != c ? c : ""}`,
        style: null != r ? r : {},
      },
      d
    ),
    e.createElement("span", null, n),
    m && p
      ? e.createElement(
          "span",
          { className: "tab-item-icon" },
          e.createElement(i, { position: "bottom", icon: m, tooltipContent: p })
        )
      : a || null
  );
};
n.defaultProps = {
  id: "nitrozen-tab-item" + l(),
  children: e.createElement("span", null, "hello"),
};
var s = o(n);
export { s as default };
//# sourceMappingURL=TabItem.js.map
