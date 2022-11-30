"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../Input/Input.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var o = n(t);
const s = (n) => {
  const {
      placeholder: s,
      items: a,
      onChange: u,
      onBlur: c,
      onFocus: r,
      showSearchIcon: i,
      label: d,
      listItemClicked: m,
      className: h,
      style: f,
    } = n,
    p = e.__rest(n, [
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
    [C, w] = t.useState([]),
    [I, v] = t.useState("");
  return o.default.createElement(
    "div",
    Object.assign(
      {
        style: null != f ? f : {},
        className: `nitrozen-autocomplete ${null != h ? h : ""}`,
      },
      p
    ),
    o.default.createElement(l, {
      showSearchIcon: i,
      label: d,
      onChange: function (e) {
        const t = e.target.value,
          l = b(t.toLowerCase());
        v(t), w(l), null == u || u(e);
      },
      onBlur: function (e) {
        w([]), null == c || c(e);
      },
      onFocus: function (e) {
        const t = b(I.toLowerCase());
        w(t), null == r || r(e);
      },
      value: I,
      placeholder: s,
    }),
    (null == C ? void 0 : C.length) > 0 &&
      o.default.createElement(
        "div",
        { className: "nitrozen-autocomplete-items" },
        C.map((e, t) =>
          o.default.createElement(
            "div",
            {
              key: t,
              "data-testid": `test-${e}`,
              onMouseDown: () =>
                (function (e) {
                  v(e), w([]), null == m || m(e);
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
      ? a.filter((t) => t.toLowerCase() !== e && t.toLowerCase().includes(e))
      : [];
  }
};
(s.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  listItemClicked: () => {},
  showSearchIcon: !0,
}),
  (module.exports = s);
//# sourceMappingURL=Autocomplete.js.map
