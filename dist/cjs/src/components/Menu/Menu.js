"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../utils/uuids.js"),
  i = require("../../../node_modules/classnames/index.js"),
  s = require("../../utils/useOutsideClick.js"),
  r = require("../../assets/svg-components/Navigation/index.js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var l = o(t);
const a = (n) => {
  const {
      id: o,
      mode: a,
      inverted: u,
      position: d,
      children: c,
      onChangeMenuItem: m,
      className: v = "",
      style: f,
    } = n,
    p = e.__rest(n, [
      "id",
      "mode",
      "inverted",
      "position",
      "children",
      "onChangeMenuItem",
      "className",
      "style",
    ]),
    [z, g] = t.useState(!1),
    j = s.useOutsideClick(() => g(!1)),
    C = t.useCallback(
      (e) => {
        null == m || m(e.target.innerHTML);
      },
      [m]
    );
  return l.default.createElement(
    "div",
    Object.assign(
      {
        id: o,
        ref: j,
        onClick: () => {
          g((e) => !e);
        },
        style: null != f ? f : {},
        className: i({
          "nitrozen-menu-content": !0,
          "nitrozen-default-menu": !u,
          [v]: null == v ? void 0 : v.length,
        }),
      },
      p
    ),
    l.default.createElement(
      "span",
      {
        className: i({
          "nitrozen-menu-dots": !0,
          "nitrozen-menu-vertical-dots": "vertical" === a,
        }),
      },
      l.default.createElement(r.SvgMoreHoriz, {
        "data-testid": "menu-icon",
        className: "nitrozen-menu-icon " + (u ? "inverted" : ""),
      })
    ),
    z &&
      l.default.createElement(
        "ul",
        {
          className: i({
            "nitrozen-menu-vertical-dropdown": "vertical" === a,
            "nitrozen-menu-top": "top" === d,
          }),
          onClick: C,
        },
        c
      )
  );
};
a.defaultProps = {
  id: "nitrozen-menu" + n(),
  mode: "vertical",
  inverted: !1,
  position: "bottom",
};
var u = t.memo(a);
module.exports = u;
//# sourceMappingURL=Menu.js.map
