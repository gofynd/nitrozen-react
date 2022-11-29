import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import n, { memo as t, useState as o, useCallback as i } from "react";
import s from "../../utils/uuids.js";
import r from "../../../node_modules/classnames/index.js";
import { useOutsideClick as m } from "../../utils/useOutsideClick.js";
import "./Menu.scss.js";
import { SvgMoreHoriz as l } from "../../assets/svg-components/Navigation/index.js";
const a = (t) => {
  const {
      id: s,
      mode: a,
      inverted: d,
      position: c,
      children: u,
      onChangeMenuItem: p,
      className: v = "",
      style: f,
    } = t,
    z = e(t, [
      "id",
      "mode",
      "inverted",
      "position",
      "children",
      "onChangeMenuItem",
      "className",
      "style",
    ]),
    [g, j] = o(!1),
    N = m(() => j(!1)),
    h = i(
      (e) => {
        null == p || p(e.target.innerHTML);
      },
      [p]
    );
  return n.createElement(
    "div",
    Object.assign(
      {
        id: s,
        ref: N,
        onClick: () => {
          j((e) => !e);
        },
        style: null != f ? f : {},
        className: r({
          "nitrozen-menu-content": !0,
          "nitrozen-default-menu": !d,
          [v]: null == v ? void 0 : v.length,
        }),
      },
      z
    ),
    n.createElement(
      "span",
      {
        className: r({
          "nitrozen-menu-dots": !0,
          "nitrozen-menu-vertical-dots": "vertical" === a,
        }),
      },
      n.createElement(l, {
        "data-testid": "menu-icon",
        className: "nitrozen-menu-icon " + (d ? "inverted" : ""),
      })
    ),
    g &&
      n.createElement(
        "ul",
        {
          className: r({
            "nitrozen-menu-vertical-dropdown": "vertical" === a,
            "nitrozen-menu-top": "top" === c,
          }),
          onClick: h,
        },
        u
      )
  );
};
a.defaultProps = {
  id: "nitrozen-menu" + s(),
  mode: "vertical",
  inverted: !1,
  position: "bottom",
};
var d = t(a);
export { d as default };
//# sourceMappingURL=Menu.js.map
