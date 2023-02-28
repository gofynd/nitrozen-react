"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Chip.scss.js");
var a = require("../../assets/svg-components/Nitrozen/index.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = l(t);
const s = (l) => {
  const {
      deletable: s,
      disabled: i,
      isRounded: c,
      fontWeight: o,
      state: d,
      children: r,
      onIconClick: u,
      onClick: m,
      onDelete: p,
      className: b,
      icon: f,
      iconStyle: h,
      style: g,
      maxWidth: y,
      label: C,
    } = l,
    v = e.__rest(l, [
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
      "maxWidth",
      "label",
    ]),
    [x, W] = t.useState(!1),
    j = l.icon,
    k = {
      color: "secondary" === l.state ? "#2e31be" : "#8F8F8F",
      fontSize: "16px",
    },
    E = t.useCallback(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          null == u || u({ event: e, chipProps: l }),
          s && p && (W(!x), p({ event: e, chipProps: l })));
      },
      [l]
    ),
    N = t.useCallback(
      (e) => {
        null == m || m({ event: e, chipProps: l });
      },
      [l]
    ),
    P = t.useCallback(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          W(!x),
          null == p || p({ event: e, chipProps: l }));
      },
      [l]
    );
  return x
    ? n.default.createElement(n.default.Fragment, null)
    : n.default.createElement(
        "div",
        Object.assign(
          {
            onClick: N,
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
              g
            ),
            className: `n-chip ${(function () {
              let e = "";
              i && (e += "n-disabled ");
              c && (e += "rounded ");
              "secondary" === d && (e += "n-chip-secondary ");
              b && (e += b + " ");
              return e;
            })()}`,
          },
          v
        ),
        n.default.createElement(
          "span",
          {
            className: "n-chiptext " + (C ? "n-label-chip-text" : ""),
            style: {
              maxWidth: (function () {
                let e;
                return (e = l.maxWidth ? l.maxWidth : "22rem"), e;
              })(),
            },
          },
          C
            ? n.default.createElement(
                "span",
                { className: "n-chip-label" },
                C,
                ": "
              )
            : null,
          r || "Submit"
        ),
        s &&
          !f &&
          n.default.createElement(
            "span",
            {
              "data-testid": "deletable-cross",
              className: "n-icon",
              onClick: P,
            },
            n.default.createElement(a.SvgIcClose, {
              style: Object.assign(Object.assign({}, k), h),
            })
          ),
        f &&
          n.default.createElement(
            "span",
            { "data-testid": "prop-icon", className: "n-icon", onClick: E },
            n.default.createElement(j, {
              style: Object.assign(Object.assign({}, k), h),
            })
          )
      );
};
s.defaultProps = {
  deletable: !1,
  disabled: !1,
  iconStyle: {},
  isRounded: !0,
  state: "primary",
  style: {},
  maxWidth: "22rem",
};
var i = n.default.memo(s);
module.exports = i;
//# sourceMappingURL=Chip.js.map
