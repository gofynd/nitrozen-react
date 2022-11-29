import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import r from "react";
import "./Card.scss.js";
const a = (a) => {
  const {
      style: t,
      headerStyle: c,
      cardTitle: n,
      className: s,
      showBorder: l,
      children: o,
      cardIcon: d,
    } = a,
    i = e(a, [
      "style",
      "headerStyle",
      "cardTitle",
      "className",
      "showBorder",
      "children",
      "cardIcon",
    ]);
  return r.createElement(
    "div",
    Object.assign(
      {
        className: s
          ? `${s} ${
              l && "nitrozen-card-container-border"
            } nitrozen-card-container`
          : `${l && "nitrozen-card-container-border"} nitrozen-card-container`,
        style: t,
      },
      i
    ),
    r.createElement(
      "div",
      { className: "nitrozen-card-header", style: c },
      d &&
        r.createElement("img", {
          src: d,
          alt: "cardIcon",
          className: "nitrozen-card-icon",
        }),
      n && r.createElement("span", null, n)
    ),
    r.createElement("div", { className: "nitrozen-card-description" }, o)
  );
};
a.defaultProps = {
  style: {},
  cardTitle: "",
  className: "",
  showBorder: !1,
  children: null,
  cardIcon: null,
};
export { a as default };
//# sourceMappingURL=Card.js.map
