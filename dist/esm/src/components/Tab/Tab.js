import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { memo as a, useState as n, useEffect as o } from "react";
import l from "../../utils/uuids.js";
import i from "../TabItem/TabItem.js";
import r from "../../../node_modules/classnames/index.js";
import "./Tab.scss.js";
const s = (a) => {
    const {
        id: s,
        tabItem: b,
        label: d,
        activeIndex: u,
        className: p,
        style: v,
        onTabChange: I,
      } = a,
      f = e(a, [
        "id",
        "tabItem",
        "label",
        "activeIndex",
        "className",
        "style",
        "onTabChange",
      ]),
      [T, x] = n(u);
    if (
      (o(() => {
        x(u);
      }, [u]),
      T > (null == b ? void 0 : b.length))
    )
      throw new Error(
        "Active Tab index cannot be greater than TabItem array length !"
      );
    const g = (e, t) => () => {
      x(e), null == I || I(t);
    };
    return t.createElement(
      "div",
      Object.assign(
        {
          id: s,
          style: null != v ? v : {},
          className: `nitrozen-tab-container ${null != p ? p : ""}`,
        },
        f
      ),
      t.createElement(
        "ul",
        { className: "nitrozen-tab" },
        null == b
          ? void 0
          : b.map((e, a) =>
              t.createElement(
                i,
                {
                  onClick: g(a, e),
                  className: r({ "nitrozen-tab-active": T === a }),
                  key: m(e, d) + a + l(),
                  icon: c(e, "icon"),
                  tooltipIcon: c(e, "tooltipIcon"),
                  tooltipIconHoverText: c(e, "tooltipIconHoverText"),
                },
                m(e, d)
              )
            )
      )
    );
  },
  m = (e, t) => {
    var a;
    return t && null !== (a = e[t]) && void 0 !== a ? a : e;
  },
  c = (e, t) => {
    if (e[t]) return e[t];
  };
s.defaultProps = { id: "nitrozen-tab-item" + l(), activeIndex: 0, tabItem: [] };
var b = a(s);
export { b as default };
//# sourceMappingURL=Tab.js.map
