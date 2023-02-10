import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a from "react";
import "./Card.scss.js";
const t = (t) => {
  const {
    title: r,
    image: c,
    imageFocus: i,
    imageRatio: n,
    orientation: s,
    description: o,
    primaryCTA: m,
    secondaryCTA: d,
    caption: l,
    footer: p,
    header: v,
  } = t;
  e(t, [
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
  const g = "vertical" === s && "n-card-vertical",
    N = "vertical" === s && "n-card-vertical-space";
  return a.createElement(
    "div",
    { className: `n-card n-card__container ${g}` },
    v && a.createElement("div", { className: "n-card-header" }, v),
    a.createElement(
      "div",
      { className: `n-flex n-card-orientation-${s}` },
      c &&
        a.createElement(
          "div",
          { className: `n-card-image n-card-ratio-${n} n-card-focus-${i}` },
          c
        ),
      a.createElement(
        "div",
        { className: `n-card__content ${N}` },
        l && a.createElement("div", { className: "n-card-caption" }, l),
        r && a.createElement("h3", { className: "n-heading" }, r),
        o && a.createElement("div", { className: "n-text-md" }, o),
        a.createElement("div", { className: "n-button-group" }, m && m, d && d)
      )
    ),
    p && a.createElement("div", { className: "n-card-footer" }, p)
  );
};
t.defaultProps = {
  imageRatio: "wide",
  imageFocus: "center",
  orientation: "vertical",
  style: {},
  className: "",
};
export { t as default };
//# sourceMappingURL=Card.js.map
