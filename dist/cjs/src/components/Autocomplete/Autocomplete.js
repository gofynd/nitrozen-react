"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Autocomplete.scss.js");
var l = require("../Input/Input.js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = o(t);
const s = (o) => {
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
    } = o,
    p = e.__rest(o, [
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
    [C, v] = t.useState([]),
    [w, I] = t.useState("");
  return n.default.createElement(
    "div",
    Object.assign(
      {
        style: null != f ? f : {},
        className: `nitrozen-autocomplete ${null != h ? h : ""}`,
      },
      p
    ),
    n.default.createElement(l, {
      showSearchIcon: i,
      label: d,
      onChange: function (e) {
        const t = e.target.value,
          l = b(t.toLowerCase());
        I(t), v(l), null == u || u(e);
      },
      onBlur: function (e) {
        v([]), null == c || c(e);
      },
      onFocus: function (e) {
        const t = b(w.toLowerCase());
        v(t), null == r || r(e);
      },
      value: w,
      placeholder: s,
    }),
    (null == C ? void 0 : C.length) > 0 &&
      n.default.createElement(
        "div",
        { className: "nitrozen-autocomplete-items" },
        C.map((e, t) =>
          n.default.createElement(
            "div",
            {
              key: t,
              "data-testid": `test-${e}`,
              onMouseDown: () =>
                (function (e) {
                  I(e), v([]), null == m || m(e);
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
