import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useCallback as s } from "react";
import "./Chip.scss.js";
import { SvgClose as o } from "../../assets/svg-components/Navigation/index.js";
const i = (i) => {
  const {
      deletable: l,
      disabled: a,
      isRounded: c,
      fontWeight: r,
      state: d,
      children: p,
      onIconClick: m,
      onClick: b,
      onDelete: u,
      className: g,
      icon: h,
      iconStyle: y,
      style: f,
    } = i,
    j = e(i, [
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
    [v, C] = n(!1),
    k = i.icon,
    E = {
      color: "secondary" === i.state ? "#2e31be" : "#8F8F8F",
      fontSize: "16px",
    },
    P = s(
      (e) => {
        i.disabled ||
          (e.stopPropagation(),
          null == m || m({ event: e, chipProps: i }),
          l && u && (C(!v), u({ event: e, chipProps: i })));
      },
      [i]
    ),
    z = s(
      (e) => {
        null == b || b({ event: e, chipProps: i });
      },
      [i]
    ),
    N = s(
      (e) => {
        i.disabled ||
          (e.stopPropagation(),
          C(!v),
          null == u || u({ event: e, chipProps: i }));
      },
      [i]
    );
  return v
    ? t.createElement(t.Fragment, null)
    : t.createElement(
        "div",
        Object.assign(
          {
            onClick: z,
            style: Object.assign(
              {
                fontWeight: (function () {
                  let e;
                  return (
                    (e = "secondary" === i.state ? 600 : 400),
                    (e = i.fontWeight ? i.fontWeight : e),
                    e
                  );
                })(),
              },
              f
            ),
            className: `nitrozen-chip ${(function () {
              let e = "";
              a && (e += "nitrozen-disabled ");
              c && (e += "rounded ");
              "secondary" === d && (e += "nitrozen-chip-secondary ");
              g && (e += g + " ");
              return e;
            })()}`,
          },
          j
        ),
        t.createElement("span", null, p),
        l &&
          !h &&
          t.createElement(
            "span",
            {
              "data-testid": "deletable-cross",
              className: "nitrozen-icon",
              onClick: N,
            },
            t.createElement(o, {
              style: Object.assign(Object.assign({}, E), y),
            })
          ),
        h &&
          t.createElement(
            "span",
            {
              "data-testid": "prop-icon",
              className: "nitrozen-icon",
              onClick: P,
            },
            t.createElement(k, {
              style: Object.assign(Object.assign({}, E), y),
            })
          )
      );
};
i.defaultProps = {
  deletable: !1,
  disabled: !1,
  iconStyle: {},
  isRounded: !1,
  state: "primary",
  style: {},
};
var l = t.memo(i);
export { l as default };
//# sourceMappingURL=Chip.js.map
