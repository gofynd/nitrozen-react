"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../utils/uuids.js"),
  n = require("../TabItem/TabItem.js"),
  l = require("../../../node_modules/classnames/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Tab.scss.js");
var i = r(t);
const o = (r) => {
    const {
        id: o,
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
      [T, p] = t.useState(m);
    if (
      (t.useEffect(() => {
        p(m);
      }, [m]),
      T > (null == u ? void 0 : u.length))
    )
      throw new Error(
        "Active Tab index cannot be greater than TabItem array length !"
      );
    const x = (e, t) => () => {
      p(e), null == I || I(t);
    };
    return i.default.createElement(
      "div",
      Object.assign(
        {
          id: o,
          style: null != v ? v : {},
          className: `nitrozen-tab-container ${null != b ? b : ""}`,
        },
        f
      ),
      i.default.createElement(
        "ul",
        { className: "nitrozen-tab" },
        null == u
          ? void 0
          : u.map((e, t) =>
              i.default.createElement(
                n,
                {
                  onClick: x(t, e),
                  className: l({ "nitrozen-tab-active": T === t }),
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
o.defaultProps = { id: "nitrozen-tab-item" + a(), activeIndex: 0, tabItem: [] };
var u = t.memo(o);
module.exports = u;
//# sourceMappingURL=Tab.js.map
