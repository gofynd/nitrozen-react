import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, {
  useState as l,
  useRef as n,
  useEffect as o,
  useCallback as s,
} from "react";
import a from "../../../node_modules/classnames/index.js";
import "./Autocomplete.scss.js";
import {
  SvgIcStatusLoading as r,
  SvgIcSearch as c,
  SvgIcCloseRemove as u,
} from "../../assets/svg-components/Nitrozen/index.js";
import i from "../../utils/debounce.js";
const m = (m) => {
  const {
      className: d = "",
      disabled: p,
      debounceDuration: f,
      items: v = [],
      onListItemClick: h,
      onBlur: N,
      onChange: b,
      onFocus: w,
      loader: E,
      placeholder: g,
      renderItem: y,
      resultStringKeyName: k,
      showClearAll: C,
      showLoader: I,
      showItems: L,
      showSearchIcon: j,
      style: A,
    } = m,
    x = e(m, [
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
    [z, D] = l(""),
    [S, B] = l(null),
    [F, K] = l(!1),
    [T, $] = l(!1),
    _ = n(null),
    O = n(null),
    P = n([]),
    U = n(null);
  o(() => {
    var e;
    if (null !== S && P.current && _.current) {
      let t = P.current[S];
      null === (e = null == t ? void 0 : t.scrollIntoView) ||
        void 0 === e ||
        e.call(t, { block: "nearest", inline: "nearest" });
    }
  }, [S, P, _.current]),
    o(() => {
      B(null), $(!1);
    }, [v]),
    o(() => {
      I || $(!1);
    }, [I]);
  const V = a("n-autocomplete", { [d]: d }, { "n-autocomplete-disabled": p });
  const q = s(
    i(function (e) {
      null == b || b(e.target.value);
    }, f),
    []
  );
  function G(e) {
    return function () {
      var t;
      const l = v[e];
      D("object" == typeof l && k ? v[e][k] : v[e]),
        null == h || h(e),
        null === (t = _.current) ||
          void 0 === t ||
          t.classList.remove("n-autocomplete-focussed");
    };
  }
  return t.createElement(
    "div",
    Object.assign({ className: "n-autocomplete-wrapper" }, x),
    t.createElement(
      "div",
      { style: null != A ? A : {}, className: V, ref: _ },
      (T || j) &&
        t.createElement(
          "span",
          { className: "n-pre-input-icon " },
          T
            ? E
              ? { loader: E }
              : t.createElement(r, { className: "n-search-loading", size: 24 })
            : t.createElement(c, { className: "n-search-svg", size: 24 })
        ),
      t.createElement("input", {
        type: "text",
        placeholder: g,
        className: a([{ "n-pre-input": j || T }, "n-suf-input"]),
        onChange: function (e) {
          D(e.target.value), I && $(!0), q(e);
        },
        value: z,
        onKeyDown: function (e) {
          var t, l, n, o;
          if ("Enter" === e.key)
            if (null === S)
              null === (t = _.current) ||
                void 0 === t ||
                t.classList.remove("n-autocomplete-focussed");
            else {
              null == h || h(S);
              const e = v[S];
              D("object" == typeof e && k ? v[S][k] : v[S]),
                null === (l = U.current) || void 0 === l || l.blur(),
                null == h || h(S);
            }
          else
            "Tab" === e.key
              ? (null === (n = U.current) || void 0 === n || n.blur(),
                null === (o = _.current) ||
                  void 0 === o ||
                  o.classList.remove("n-autocomplete-focussed"))
              : "ArrowDown" === e.key
              ? B(null === S ? 0 : (S + 1) % v.length)
              : "ArrowUp" === e.key &&
                B(null === S || 0 === S ? v.length - 1 : S - 1);
        },
        onBlur: function (e) {
          setTimeout(() => {
            var t;
            K(!1),
              null == N || N(e),
              null === (t = _.current) ||
                void 0 === t ||
                t.classList.remove("n-autocomplete-focussed");
          }, 10);
        },
        onFocus: function (e) {
          var t;
          null === (t = _.current) ||
            void 0 === t ||
            t.classList.add("n-autocomplete-focussed"),
            K(!0),
            null == w || w(e);
        },
        ref: U,
        disabled: p,
      }),
      t.createElement(
        "span",
        { className: "n-suf-input-icon " },
        C &&
          z &&
          t.createElement(
            "div",
            {
              className: "n-suf-icon-back",
              onClick: function () {
                var e;
                D(""),
                  null === (e = U.current) || void 0 === e || e.focus(),
                  null == b || b("");
              },
            },
            t.createElement(u, { size: 24 })
          )
      )
    ),
    (F || L) &&
      (null == v ? void 0 : v.length) > 0 &&
      t.createElement(
        "ul",
        { className: "n-autocomplete-result-wrapper", ref: O },
        v.map((e, l) => {
          let n;
          return (
            y && (n = y(e, l)),
            n
              ? t.cloneElement(n, {
                  key: l,
                  "data-testid": `test-item-${l}`,
                  className: a("n-autocomplete-result-item", {
                    "n-autocomplete-result-item-active": S === l,
                  }),
                  ref: (e) => (P.current[l] = e),
                  onClick: G(l),
                })
              : t.createElement(
                  "li",
                  {
                    key: l,
                    "data-testid": `test-${e}`,
                    className: a("n-autocomplete-result-item", {
                      "n-autocomplete-result-item-active": S === l,
                    }),
                    ref: (e) => (P.current[l] = e),
                    onClick: G(l),
                  },
                  t.createElement(
                    "span",
                    { className: "n-autocomplete-result-item-icon" },
                    " ",
                    t.createElement(c, { className: "n-search-svg", size: 19 })
                  ),
                  t.createElement(
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
m.defaultProps = {
  debounceDuration: 300,
  showSearchIcon: !0,
  showClearAll: !0,
};
export { m as default };
//# sourceMappingURL=Autocomplete.js.map
