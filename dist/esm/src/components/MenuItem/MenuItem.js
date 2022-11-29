import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import s, { memo as t } from "react";
import l from "../../utils/uuids.js";
import "./MenuItem.scss.js";
const i = (t) => {
  const { id: l, className: i, style: r, children: n } = t,
    m = e(t, ["id", "className", "style", "children"]);
  return s.createElement(
    "li",
    Object.assign(
      {
        style: null != r ? r : {},
        className: `nitrozen-menu-item ${null != i ? i : ""}`,
      },
      m
    ),
    t.children
  );
};
i.defaultProps = { id: "nitrozen-menu" + l() };
var r = t(i);
export { r as default };
//# sourceMappingURL=MenuItem.js.map
