import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import o, { useState as t } from "react";
import "./Autocomplete.scss.js";
import l from "../Input/Input.js";
const n = (n) => {
  const {
      placeholder: s,
      items: a,
      onChange: c,
      onBlur: r,
      onFocus: u,
      showSearchIcon: i,
      label: m,
      listItemClicked: d,
      className: h,
      style: p,
    } = n,
    f = e(n, [
      "placeholder",
      "items",
      "onChange",
      "onBlur",
      "onFocus",
      "showSearchIcon",
      "label",
      "listItemClicked",
      "className",
      "style",
    ]),
    [C, w] = t([]),
    [I, g] = t("");
  return o.createElement(
    "div",
    Object.assign(
      {
        style: null != p ? p : {},
        className: `nitrozen-autocomplete ${null != h ? h : ""}`,
      },
      f
    ),
    o.createElement(l, {
      showSearchIcon: i,
      label: m,
      onChange: function (e) {
        const o = e.target.value,
          t = b(o.toLowerCase());
        g(o), w(t), null == c || c(e);
      },
      onBlur: function (e) {
        w([]), null == r || r(e);
      },
      onFocus: function (e) {
        const o = b(I.toLowerCase());
        w(o), null == u || u(e);
      },
      value: I,
      placeholder: s,
    }),
    (null == C ? void 0 : C.length) > 0 &&
      o.createElement(
        "div",
        { className: "nitrozen-autocomplete-items" },
        C.map((e, t) =>
          o.createElement(
            "div",
            {
              key: t,
              "data-testid": `test-${e}`,
              onMouseDown: () =>
                (function (e) {
                  g(e), w([]), null == d || d(e);
                })(e),
            },
            e
          )
        )
      )
  );
  function b(e = "") {
    return "" === e
      ? []
      : a
      ? a.filter((o) => o.toLowerCase() !== e && o.toLowerCase().includes(e))
      : [];
  }
};
n.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  listItemClicked: () => {},
  showSearchIcon: !0,
};
export { n as default };
//# sourceMappingURL=Autocomplete.js.map
