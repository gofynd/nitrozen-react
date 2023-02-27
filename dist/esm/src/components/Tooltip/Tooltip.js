import { __rest as t } from "../../../node_modules/tslib/tslib.es6.js";
import o from "react";
import "./Tooltip.scss.js";
import { SvgIcInfo as e } from "../../assets/svg-components/Nitrozen/index.js";
const n = (e) => {
  const {
      position: n,
      tooltipContent: l,
      children: i,
      icon: s,
      className: r,
      style: c,
      contentColor: a,
      contentBgColor: m,
      link: p,
      linkText: d,
    } = e,
    f = t(e, [
      "position",
      "tooltipContent",
      "children",
      "icon",
      "className",
      "style",
      "contentColor",
      "contentBgColor",
      "link",
      "linkText",
    ]),
    u = {};
  return (
    a && (u.color = a),
    m && (u.backgroundColor = m),
    o.createElement(
      "div",
      Object.assign(
        {
          className: `nitrozen-tooltip ${null != r ? r : ""}`,
          style: null != c ? c : {},
        },
        f
      ),
      ((t, o) => t || o || void 0)(i, s),
      o.createElement(
        "span",
        {
          "data-testid": "tooltip-component",
          className: `nitrozen-tooltipcontent nitrozen-tooltip-${n}`,
          style: u,
        },
        l,
        p &&
          o.createElement(
            o.Fragment,
            null,
            o.createElement("br", null),
            o.createElement(
              "a",
              { className: "nitrozen-tooltip-link", href: p },
              d || "Link Here"
            )
          )
      )
    )
  );
};
n.defaultProps = {
  contentBgColor: "#3d3d3d",
  contentColor: "#ffffff",
  icon: o.createElement(e, null),
  position: "top",
  tooltipContent: "Tooltip text",
};
var l = o.memo(n);
export { l as default };
//# sourceMappingURL=Tooltip.js.map
