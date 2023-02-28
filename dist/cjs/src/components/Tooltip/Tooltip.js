"use strict";
var t = require("../../../node_modules/tslib/tslib.es6.js"),
  e = require("react");
require("./Tooltip.scss.js");
var o = require("../../assets/svg-components/Nitrozen/index.js");
function n(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
var l = n(e);
const r = (e) => {
  const {
      position: o,
      tooltipContent: n,
      children: r,
      icon: i,
      className: s,
      style: a,
      contentColor: c,
      contentBgColor: u,
      link: d,
      linkText: f,
    } = e,
    p = t.__rest(e, [
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
    m = {};
  return (
    c && (m.color = c),
    u && (m.backgroundColor = u),
    l.default.createElement(
      "div",
      Object.assign(
        {
          className: `nitrozen-tooltip ${null != s ? s : ""}`,
          style: null != a ? a : {},
        },
        p
      ),
      ((t, e) => t || e || void 0)(r, i),
      l.default.createElement(
        "span",
        {
          "data-testid": "tooltip-component",
          className: `nitrozen-tooltipcontent nitrozen-tooltip-${o}`,
          style: m,
        },
        n,
        d &&
          l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement("br", null),
            l.default.createElement(
              "a",
              { className: "nitrozen-tooltip-link", href: d },
              f || "Link Here"
            )
          )
      )
    )
  );
};
r.defaultProps = {
  contentBgColor: "#3d3d3d",
  contentColor: "#ffffff",
  icon: l.default.createElement(o.SvgIcInfo, null),
  position: "top",
  tooltipContent: "Tooltip text",
};
var i = l.default.memo(r);
module.exports = i;
//# sourceMappingURL=Tooltip.js.map
