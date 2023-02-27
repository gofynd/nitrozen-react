"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../../../node_modules/classnames/index.js");
require("./Autocomplete.scss.js");
var n = require("../../assets/svg-components/Nitrozen/index.js"),
  s = require("../../utils/debounce.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var u = a(t);
const o = (a) => {
  const {
      className: o = "",
      disabled: r,
      debounceDuration: c,
      items: i = [],
      onListItemClick: m,
      onBlur: d,
      onChange: f,
      onFocus: p,
      loader: v,
      placeholder: h,
      renderItem: b,
      resultStringKeyName: g,
      showClearAll: E,
      showLoader: N,
      showItems: w,
      showSearchIcon: y,
      style: S,
    } = a,
    k = e.__rest(a, [
      "className",
      "disabled",
      "debounceDuration",
      "items",
      "onListItemClick",
      "onBlur",
      "onChange",
      "onFocus",
      "loader",
      "placeholder",
      "renderItem",
      "resultStringKeyName",
      "showClearAll",
      "showLoader",
      "showItems",
      "showSearchIcon",
      "style",
    ]),
    [I, C] = t.useState(""),
    [L, j] = t.useState(null),
    [q, A] = t.useState(!1),
    [x, z] = t.useState(!1),
    D = t.useRef(null),
    R = t.useRef(null),
    _ = t.useRef([]),
    B = t.useRef(null);
  t.useEffect(() => {
    var e;
    if (null !== L && _.current && D.current) {
      let t = _.current[L];
      null === (e = null == t ? void 0 : t.scrollIntoView) ||
        void 0 === e ||
        e.call(t, { block: "nearest", inline: "nearest" });
    }
  }, [L, _, D.current]),
    t.useEffect(() => {
      j(null), z(!1);
    }, [i]),
    t.useEffect(() => {
      N || z(!1);
    }, [N]);
  const F = l("n-autocomplete", { [o]: o }, { "n-autocomplete-disabled": r });
  const K = t.useCallback(
    s(function (e) {
      null == f || f(e.target.value);
    }, c),
    []
  );
  function T(e) {
    return function () {
      var t;
      const l = i[e];
      C("object" == typeof l && g ? i[e][g] : i[e]),
        null == m || m(e),
        null === (t = D.current) ||
          void 0 === t ||
          t.classList.remove("n-autocomplete-focussed");
    };
  }
  return u.default.createElement(
    "div",
    Object.assign({ className: "n-autocomplete-wrapper" }, k),
    u.default.createElement(
      "div",
      { style: null != S ? S : {}, className: F, ref: D },
      (x || y) &&
        u.default.createElement(
          "span",
          { className: "n-pre-input-icon " },
          x
            ? v
              ? { loader: v }
              : u.default.createElement(n.SvgIcStatusLoading, {
                  className: "n-search-loading",
                  size: 24,
                })
            : u.default.createElement(n.SvgIcSearch, {
                className: "n-search-svg",
                size: 24,
              })
        ),
      u.default.createElement("input", {
        type: "text",
        placeholder: h,
        className: l([{ "n-pre-input": y || x }, "n-suf-input"]),
        onChange: function (e) {
          C(e.target.value), N && z(!0), K(e);
        },
        value: I,
        onKeyDown: function (e) {
          var t, l, n, s;
          if ("Enter" === e.key)
            if (null === L)
              null === (t = D.current) ||
                void 0 === t ||
                t.classList.remove("n-autocomplete-focussed");
            else {
              null == m || m(L);
              const e = i[L];
              C("object" == typeof e && g ? i[L][g] : i[L]),
                null === (l = B.current) || void 0 === l || l.blur(),
                null == m || m(L);
            }
          else
            "Tab" === e.key
              ? (null === (n = B.current) || void 0 === n || n.blur(),
                null === (s = D.current) ||
                  void 0 === s ||
                  s.classList.remove("n-autocomplete-focussed"))
              : "ArrowDown" === e.key
              ? j(null === L ? 0 : (L + 1) % i.length)
              : "ArrowUp" === e.key &&
                j(null === L || 0 === L ? i.length - 1 : L - 1);
        },
        onBlur: function (e) {
          setTimeout(() => {
            var t;
            A(!1),
              null == d || d(e),
              null === (t = D.current) ||
                void 0 === t ||
                t.classList.remove("n-autocomplete-focussed");
          }, 10);
        },
        onFocus: function (e) {
          var t;
          null === (t = D.current) ||
            void 0 === t ||
            t.classList.add("n-autocomplete-focussed"),
            A(!0),
            null == p || p(e);
        },
        ref: B,
        disabled: r,
      }),
      u.default.createElement(
        "span",
        { className: "n-suf-input-icon " },
        E &&
          I &&
          u.default.createElement(
            "div",
            {
              className: "n-suf-icon-back",
              onClick: function () {
                var e;
                C(""),
                  null === (e = B.current) || void 0 === e || e.focus(),
                  null == f || f("");
              },
            },
            u.default.createElement(n.SvgIcCloseRemove, { size: 24 })
          )
      )
    ),
    (q || w) &&
      (null == i ? void 0 : i.length) > 0 &&
      u.default.createElement(
        "ul",
        { className: "n-autocomplete-result-wrapper", ref: R },
        i.map((e, t) => {
          let s;
          return (
            b && (s = b(e, t)),
            s
              ? u.default.cloneElement(s, {
                  key: t,
                  "data-testid": `test-item-${t}`,
                  className: l("n-autocomplete-result-item", {
                    "n-autocomplete-result-item-active": L === t,
                  }),
                  ref: (e) => (_.current[t] = e),
                  onClick: T(t),
                })
              : u.default.createElement(
                  "li",
                  {
                    key: t,
                    "data-testid": `test-${e}`,
                    className: l("n-autocomplete-result-item", {
                      "n-autocomplete-result-item-active": L === t,
                    }),
                    ref: (e) => (_.current[t] = e),
                    onClick: T(t),
                  },
                  u.default.createElement(
                    "span",
                    { className: "n-autocomplete-result-item-icon" },
                    " ",
                    u.default.createElement(n.SvgIcSearch, {
                      className: "n-search-svg",
                      size: 19,
                    })
                  ),
                  u.default.createElement(
                    "span",
                    { className: "n-autocomplete-result-item-text" },
                    e
                  )
                )
          );
        })
      )
  );
};
(o.defaultProps = {
  debounceDuration: 300,
  showSearchIcon: !0,
  showClearAll: !0,
}),
  (module.exports = o);
//# sourceMappingURL=Autocomplete.js.map
