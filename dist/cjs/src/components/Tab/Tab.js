"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../utils/uuids.js"),
  n = require("../TabItem/TabItem.js"),
  l = require("../../../node_modules/classnames/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var o = r(t);
const i = (r) => {
    const {
        id: i,
        tabItem: u,
        label: d,
        activeIndex: m,
        className: b,
        style: v,
        onTabChange: I,
      } = r,
      f = e.__rest(r, [
        "id",
        "tabItem",
        "label",
        "activeIndex",
        "className",
        "style",
        "onTabChange",
      ]),
      [p, x] = t.useState(m);
    if (
      (t.useEffect(() => {
        x(m);
      }, [m]),
      p > (null == u ? void 0 : u.length))
    )
      throw new Error(
        "Active Tab index cannot be greater than TabItem array length !"
      );
    const T = (e, t) => () => {
      x(e), null == I || I(t);
    };
    return o.default.createElement(
      "div",
      Object.assign(
        {
          id: i,
          style: null != v ? v : {},
          className: `nitrozen-tab-container ${null != b ? b : ""}`,
        },
        f
      ),
      o.default.createElement(
        "ul",
        { className: "nitrozen-tab" },
        null == u
          ? void 0
          : u.map((e, t) =>
              o.default.createElement(
                n,
                {
                  onClick: T(t, e),
                  className: l({ "nitrozen-tab-active": p === t }),
                  key: s(e, d) + t + a(),
                  icon: c(e, "icon"),
                  tooltipIcon: c(e, "tooltipIcon"),
                  tooltipIconHoverText: c(e, "tooltipIconHoverText"),
                },
                s(e, d)
              )
            )
      )
    );
  },
  s = (e, t) => {
    var a;
    return t && null !== (a = e[t]) && void 0 !== a ? a : e;
  },
  c = (e, t) => {
    if (e[t]) return e[t];
  };
i.defaultProps = { id: "nitrozen-tab-item" + a(), activeIndex: 0, tabItem: [] };
var u = t.memo(i);
module.exports = u;
//# sourceMappingURL=Tab.js.map
