"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Card.scss.js");
var r = t(a);
const c = (a) => {
  const {
    title: t,
    image: c,
    imageFocus: i,
    imageRatio: n,
    orientation: s,
    description: d,
    primaryCTA: l,
    secondaryCTA: o,
    caption: m,
    footer: u,
    header: f,
  } = a;
  e.__rest(a, [
    "title",
    "image",
    "imageFocus",
    "imageRatio",
    "orientation",
    "description",
    "primaryCTA",
    "secondaryCTA",
    "caption",
    "footer",
    "header",
  ]);
  const v = "vertical" === s && "n-card-vertical",
    p = "vertical" === s && "n-card-vertical-space";
  return r.default.createElement(
    "div",
    { className: `n-card n-card__container ${v}` },
    f && r.default.createElement("div", { className: "n-card-header" }, f),
    r.default.createElement(
      "div",
      { className: `n-flex n-card-orientation-${s}` },
      c &&
        r.default.createElement(
          "div",
          { className: `n-card-image n-card-ratio-${n} n-card-focus-${i}` },
          c
        ),
      r.default.createElement(
        "div",
        { className: `n-card__content ${p}` },
        m && r.default.createElement("div", { className: "n-card-caption" }, m),
        t && r.default.createElement("h3", { className: "n-heading" }, t),
        d && r.default.createElement("div", { className: "n-text-md" }, d),
        r.default.createElement(
          "div",
          { className: "n-button-group" },
          l && l,
          o && o
        )
      )
    ),
    u && r.default.createElement("div", { className: "n-card-footer" }, u)
  );
};
(c.defaultProps = {
  imageRatio: "wide",
  imageFocus: "center",
  orientation: "vertical",
  style: {},
  className: "",
}),
  (module.exports = c);
//# sourceMappingURL=Card.js.map
