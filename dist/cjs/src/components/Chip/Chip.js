"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Chip.scss.js");
var n = require("../../assets/svg-components/Navigation/index.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var a = s(t);
const l = (s) => {
  const {
      deletable: l,
      disabled: i,
      isRounded: o,
      fontWeight: c,
      state: r,
      children: d,
      onIconClick: u,
      onClick: p,
      onDelete: b,
      className: f,
      icon: m,
      iconStyle: g,
      style: y,
    } = s,
    h = e.__rest(s, [
      "deletable",
      "disabled",
      "isRounded",
      "fontWeight",
      "state",
      "children",
      "onIconClick",
      "onClick",
      "onDelete",
      "className",
      "icon",
      "iconStyle",
      "style",
    ]),
    [v, C] = t.useState(!1),
    j = s.icon,
    k = {
      color: "secondary" === s.state ? "#2e31be" : "#8F8F8F",
      fontSize: "16px",
    },
    E = t.useCallback(
      (e) => {
        s.disabled ||
          (e.stopPropagation(),
          null == u || u({ event: e, chipProps: s }),
          l && b && (C(!v), b({ event: e, chipProps: s })));
      },
      [s]
    ),
    P = t.useCallback(
      (e) => {
        null == p || p({ event: e, chipProps: s });
      },
      [s]
    ),
    z = t.useCallback(
      (e) => {
        s.disabled ||
          (e.stopPropagation(),
          C(!v),
          null == b || b({ event: e, chipProps: s }));
      },
      [s]
    );
  return v
    ? a.default.createElement(a.default.Fragment, null)
    : a.default.createElement(
        "div",
        Object.assign(
          {
            onClick: P,
            style: Object.assign(
              {
                fontWeight: (function () {
                  let e;
                  return (
                    (e = "secondary" === s.state ? 600 : 400),
                    (e = s.fontWeight ? s.fontWeight : e),
                    e
                  );
                })(),
              },
              y
            ),
            className: `nitrozen-chip ${(function () {
              let e = "";
              i && (e += "nitrozen-disabled ");
              o && (e += "rounded ");
              "secondary" === r && (e += "nitrozen-chip-secondary ");
              f && (e += f + " ");
              return e;
            })()}`,
          },
          h
        ),
        a.default.createElement("span", null, d),
        l &&
          !m &&
          a.default.createElement(
            "span",
            {
              "data-testid": "deletable-cross",
              className: "nitrozen-icon",
              onClick: z,
            },
            a.default.createElement(n.SvgClose, {
              style: Object.assign(Object.assign({}, k), g),
            })
          ),
        m &&
          a.default.createElement(
            "span",
            {
              "data-testid": "prop-icon",
              className: "nitrozen-icon",
              onClick: E,
            },
            a.default.createElement(j, {
              style: Object.assign(Object.assign({}, k), g),
            })
          )
      );
};
l.defaultProps = {
  deletable: !1,
  disabled: !1,
  iconStyle: {},
  isRounded: !1,
  state: "primary",
  style: {},
};
var i = a.default.memo(l);
module.exports = i;
//# sourceMappingURL=Chip.js.map
