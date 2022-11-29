"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = r(require("react"));
const a = (r) => {
  const {
      style: a,
      headerStyle: n,
      cardTitle: c,
      className: l,
      showBorder: d,
      children: s,
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
  return t.default.createElement(
    "div",
    Object.assign(
      {
        className: l
          ? `${l} ${
              d && "nitrozen-card-container-border"
            } nitrozen-card-container`
          : `${d && "nitrozen-card-container-border"} nitrozen-card-container`,
        style: a,
      },
      i
    ),
    t.default.createElement(
      "div",
      { className: "nitrozen-card-header", style: n },
      o &&
        t.default.createElement("img", {
          src: o,
          alt: "cardIcon",
          className: "nitrozen-card-icon",
        }),
      c && t.default.createElement("span", null, c)
    ),
    t.default.createElement(
      "div",
      { className: "nitrozen-card-description" },
      s
    )
  );
};
(a.defaultProps = {
  style: {},
  cardTitle: "",
  className: "",
  showBorder: !1,
  children: null,
  cardIcon: null,
}),
  (module.exports = a);
//# sourceMappingURL=Card.js.map
