"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../assets/svg-components/Navigation/index.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = l(t);
const a = (l) => {
  const {
      deletable: a,
      disabled: o,
      isRounded: i,
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
    } = l,
    h = e.__rest(l, [
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
    k = l.icon,
    j = {
      color: "secondary" === l.state ? "#2e31be" : "#8F8F8F",
      fontSize: "16px",
    },
    E = t.useCallback(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          null == u || u({ event: e, chipProps: l }),
          a && b && (C(!v), b({ event: e, chipProps: l })));
      },
      [l]
    ),
    P = t.useCallback(
      (e) => {
        null == p || p({ event: e, chipProps: l });
      },
      [l]
    ),
    z = t.useCallback(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          C(!v),
          null == b || b({ event: e, chipProps: l }));
      },
      [l]
    );
  return v
    ? s.default.createElement(s.default.Fragment, null)
    : s.default.createElement(
        "div",
        Object.assign(
          {
            onClick: P,
            style: Object.assign(
              {
                fontWeight: (function () {
                  let e;
                  return (
                    (e = "secondary" === l.state ? 600 : 400),
                    (e = l.fontWeight ? l.fontWeight : e),
                    e
                  );
                })(),
              },
              y
            ),
            className: `nitrozen-chip ${(function () {
              let e = "";
              o && (e += "nitrozen-disabled ");
              i && (e += "rounded ");
              "secondary" === r && (e += "nitrozen-chip-secondary ");
              f && (e += f + " ");
              return e;
            })()}`,
          },
          h
        ),
        s.default.createElement("span", null, d),
        a &&
          !m &&
          s.default.createElement(
            "span",
            {
              "data-testid": "deletable-cross",
              className: "nitrozen-icon",
              onClick: z,
            },
            s.default.createElement(n.SvgClose, {
              style: Object.assign(Object.assign({}, j), g),
            })
          ),
        m &&
          s.default.createElement(
            "span",
            {
              "data-testid": "prop-icon",
              className: "nitrozen-icon",
              onClick: E,
            },
            s.default.createElement(k, {
              style: Object.assign(Object.assign({}, j), g),
            })
          )
      );
};
a.defaultProps = {
  deletable: !1,
  disabled: !1,
  iconStyle: {},
  isRounded: !1,
  state: "primary",
  style: {},
};
var o = s.default.memo(a);
module.exports = o;
//# sourceMappingURL=Chip.js.map
