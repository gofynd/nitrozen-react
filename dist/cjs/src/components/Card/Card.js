"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  r = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Card.scss.js");
var a = t(r);
const n = (r) => {
  const {
      style: t,
      headerStyle: n,
      cardTitle: c,
      className: l,
      showBorder: s,
      children: d,
      cardIcon: o,
    } = r,
    i = e.__rest(r, [
      "style",
      "headerStyle",
      "cardTitle",
      "className",
      "showBorder",
      "children",
      "cardIcon",
    ]);
  return a.default.createElement(
    "div",
    Object.assign(
      {
        className: l
          ? `${l} ${
              s && "nitrozen-card-container-border"
            } nitrozen-card-container`
          : `${s && "nitrozen-card-container-border"} nitrozen-card-container`,
        style: t,
      },
      i
    ),
    a.default.createElement(
      "div",
      { className: "nitrozen-card-header", style: n },
      o &&
        a.default.createElement("img", {
          src: o,
          alt: "cardIcon",
          className: "nitrozen-card-icon",
        }),
      c && a.default.createElement("span", null, c)
    ),
    a.default.createElement(
      "div",
      { className: "nitrozen-card-description" },
      d
    )
  );
};
(n.defaultProps = {
  style: {},
  cardTitle: "",
  className: "",
  showBorder: !1,
  children: null,
  cardIcon: null,
}),
  (module.exports = n);
//# sourceMappingURL=Card.js.map
