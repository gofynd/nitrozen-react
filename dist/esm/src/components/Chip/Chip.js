import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useCallback as s } from "react";
import "./Chip.scss.js";
import { SvgIcClose as a } from "../../assets/svg-components/Nitrozen/index.js";
const l = (l) => {
  const {
      deletable: i,
      disabled: o,
      isRounded: c,
      fontWeight: r,
      state: d,
      children: m,
      onIconClick: p,
      onClick: b,
      onDelete: h,
      className: u,
      icon: g,
      iconStyle: y,
      style: f,
      maxWidth: x,
      label: W,
    } = l,
    j = e(l, [
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
    [C, E] = n(!1),
    N = l.icon,
    k = {
      color: "secondary" === l.state ? "#2e31be" : "#8F8F8F",
      fontSize: "16px",
    },
    v = s(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          null == p || p({ event: e, chipProps: l }),
          i && h && (E(!C), h({ event: e, chipProps: l })));
      },
      [l]
    ),
    P = s(
      (e) => {
        null == b || b({ event: e, chipProps: l });
      },
      [l]
    ),
    O = s(
      (e) => {
        l.disabled ||
          (e.stopPropagation(),
          E(!C),
          null == h || h({ event: e, chipProps: l }));
      },
      [l]
    );
  return C
    ? t.createElement(t.Fragment, null)
    : t.createElement(
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
              f
            ),
            className: `n-chip ${(function () {
              let e = "";
              o && (e += "n-disabled ");
              c && (e += "rounded ");
              "secondary" === d && (e += "n-chip-secondary ");
              u && (e += u + " ");
              return e;
            })()}`,
          },
          j
        ),
        t.createElement(
          "span",
          {
            className: "n-chiptext " + (W ? "n-label-chip-text" : ""),
            style: {
              maxWidth: (function () {
                let e;
                return (e = l.maxWidth ? l.maxWidth : "22rem"), e;
              })(),
            },
          },
          W
            ? t.createElement("span", { className: "n-chip-label" }, W, ": ")
            : null,
          m || "Submit"
        ),
        i &&
          !g &&
          t.createElement(
            "span",
            {
              "data-testid": "deletable-cross",
              className: "n-icon",
              onClick: O,
            },
            t.createElement(a, {
              style: Object.assign(Object.assign({}, k), y),
            })
          ),
        g &&
          t.createElement(
            "span",
            { "data-testid": "prop-icon", className: "n-icon", onClick: v },
            t.createElement(N, {
              style: Object.assign(Object.assign({}, k), y),
            })
          )
      );
};
l.defaultProps = {
  deletable: !1,
  disabled: !1,
  iconStyle: {},
  isRounded: !0,
  state: "primary",
  style: {},
  maxWidth: "22rem",
};
var i = t.memo(l);
export { i as default };
//# sourceMappingURL=Chip.js.map
