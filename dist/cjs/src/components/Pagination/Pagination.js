"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../utils/uuids.js"),
  a = require("../Dropdown/Dropdown.js");
require("./Pagination.scss.js");
var i = require("./usePagination.js"),
  r = require("../../assets/svg-components/Nitrozen/index.js"),
  l = require("../Button/Button.js"),
  s = require("../Input/Input.js");
function u(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var o,
  c,
  d,
  m = u(t);
(exports.ModeEnum = void 0),
  ((o = exports.ModeEnum || (exports.ModeEnum = {})).MODE_REGULAR = "regular"),
  (o.MODE_CURSOR = "cursor"),
  (exports.TypeEnum = void 0),
  ((c = exports.TypeEnum || (exports.TypeEnum = {})).TYPE_DEFAULT = "default"),
  (c.TYPE_TOP = "top"),
  (exports.SizeEnum = void 0),
  ((d = exports.SizeEnum || (exports.SizeEnum = {})).SIZE_LARGE = "large"),
  (d.SIZE_SMALL = "small");
const g = (n) => {
  const {
      id: u,
      name: o,
      mode: c,
      pageSizeOptions: d,
      defaultPageSize: g,
      value: p,
      onChange: f,
      onPreviousClick: _,
      onNextClick: v,
      className: E,
      style: b,
      visiblePagesNodeCount: h,
    } = n,
    S = e.__rest(n, [
      "id",
      "name",
      "mode",
      "pageSizeOptions",
      "defaultPageSize",
      "value",
      "onChange",
      "onPreviousClick",
      "onNextClick",
      "className",
      "style",
      "visiblePagesNodeCount",
    ]),
    [O, N] = t.useState(p),
    [j, P] = t.useState(g || (d && d.length > 0 ? d[0] : 10)),
    x = t.useRef(null),
    [y, C] = t.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [w, M] = t.useState(!1),
    [R, T] = t.useState([0]),
    [z, I] = t.useState(0),
    [$, k] = t.useState(O.current),
    [L, D] = t.useState(1);
  t.useState(!1);
  const q = t.useRef(!0);
  function A() {
    if (O.total) {
      if (1 === O.current) return;
      const e = O.current ? O.current - 1 : 0;
      N(Object.assign(Object.assign({}, O), { current: e }));
    } else if (c === exports.ModeEnum.MODE_CURSOR) {
      if (!O.prevPage) return;
      N(
        Object.assign(Object.assign({}, O), {
          nextPage: "",
          currentPage: O.prevPage,
        })
      );
    }
    null == _ || _();
  }
  function U() {
    if (O.total) {
      const e = F() || 1;
      if (O.current && O.current >= e)
        return void N(Object.assign(Object.assign({}, O), { current: e }));
      if (0 === e)
        return void N(Object.assign(Object.assign({}, O), { current: 0 }));
      const t = O.current ? O.current + 1 : 1;
      N(Object.assign(Object.assign({}, O), { current: t }));
    }
    if (c === exports.ModeEnum.MODE_CURSOR) {
      if (!O.nextPage) return;
      N(
        Object.assign(Object.assign({}, O), {
          prevPage: "",
          currentPage: O.nextPage,
        })
      );
    }
    null == v || v();
  }
  function B(e) {
    c === exports.ModeEnum.MODE_CURSOR
      ? N(
          Object.assign(Object.assign({}, O), {
            current: 1,
            limit: e,
            nextPage: "",
            prevPage: "",
            currentPage: "",
          })
        )
      : N(Object.assign(Object.assign({}, O), { current: 1, limit: e })),
      P(e);
  }
  function F() {
    return O.limit && O.limit > 0 ? O.total && Math.ceil(O.total / O.limit) : 0;
  }
  function Y() {
    const e = d
      ? d.map((e) => ({ text: e.toString(), value: e.toString() }))
      : [];
    return (
      j || P(Number(O.limit ? O.limit : e.length > 0 ? e[0].value : 1800)), e
    );
  }
  function G(e, t, n) {
    if ("..." == t) {
      let e = O.total && O.limit && Math.ceil(O.total / O.limit),
        t = y[n - 1],
        a = e;
      a = y[n + 1] == e ? e : y[n + 1];
      const i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      D(n), T(i), document.addEventListener("click", Z, !1), M(n != L || !w);
    } else M(!1), N(Object.assign(Object.assign({}, O), { current: t }));
  }
  function Z(e) {
    x.current && !x.current.contains(e.target) && M(!1);
  }
  function V(e = "default") {
    let t = " ";
    return (
      !(function () {
        if (O.total) return !0;
        return !1;
      })()
        ? (t = O.currentTotal
            ? `${"default" === e ? "Showing" : ""} ${O.currentTotal} ${o}`
            : "")
        : ((t = `${"default" === e ? "Showing " : ""}${
            O.limit && O.limit * (O.current ? O.current - 1 : 0) + 1
          } - ${
            O.limit &&
            O.current &&
            O.total &&
            (O.limit * O.current < O.total ? O.limit * O.current : O.total)
          }`),
          (t += ` of ${O.total}${"default" === e ? " results" : ""}`)),
      t
    );
  }
  function K() {
    return !O.total || 1 !== O.current;
  }
  function W() {
    return !(O.total && O.current && O.current >= (F() || 0));
  }
  return (
    t.useEffect(() => {
      N(p);
    }, [p]),
    t.useEffect(() => {
      O.current || N(Object.assign(Object.assign({}, O), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          const a = Math.min(...n);
          if (h && h > 4) {
            const e = Math.floor(h / 2) - (h % 2 == 0 ? 3 : 2),
              t = i.usePagination(h, O.total, O.limit, e, O.current);
            return void C([...t]);
          }
          if (a <= 768) {
            const e = i.usePagination(4, O.total, O.limit, 1, O.current);
            C([...e]);
          } else {
            const e = i.usePagination(5, O.total, O.limit, 2, O.current);
            C([...e]);
          }
        })(),
        (null == q ? void 0 : q.current)
          ? (q.current = !1)
          : (k(O.current), null == f || f(O));
    }, [O, h]),
    m.default.createElement(
      m.default.Fragment,
      null,
      n.type === exports.TypeEnum.TYPE_DEFAULT &&
        m.default.createElement(
          "div",
          Object.assign(
            {
              className: `n-pagination-container ${null != E ? E : ""}`,
              style: null != b ? b : {},
              id: u,
            },
            S
          ),
          m.default.createElement(
            "div",
            { className: "n-pagination" },
            m.default.createElement(
              "div",
              { className: "n-pagination__left" },
              m.default.createElement(
                "span",
                {
                  className: "n-pagination__count",
                  "data-testid": "pagination-count",
                },
                V()
              )
            ),
            m.default.createElement(
              "div",
              { className: "n-pagination__main" },
              y.length > 1
                ? m.default.createElement(
                    m.default.Fragment,
                    null,
                    m.default.createElement(
                      "div",
                      {
                        "data-testid": "btnPrevious",
                        onClick: () => A,
                        className: `n-pagination__prev ${
                          !K() && "pagination-diabled"
                        }`,
                      },
                      m.default.createElement(r.SvgIcChevronLeft, null)
                    ),
                    m.default.createElement(
                      "div",
                      { className: "n-pagination__number", ref: x },
                      null == y
                        ? void 0
                        : y.map((e, t) =>
                            m.default.createElement(
                              "div",
                              {
                                key: t,
                                id: t + "node",
                                onClick: (n) => G(0, e, t),
                                className: `n-pagination__number_inactive ${
                                  e === O.current &&
                                  "n-pagination__number_active"
                                } ${
                                  "..." === e &&
                                  L === t &&
                                  w &&
                                  "n-pagination__dot_active"
                                }`,
                              },
                              e
                            )
                          ),
                      w
                        ? m.default.createElement(
                            "div",
                            {
                              className:
                                "n-pagination__showpopup " +
                                (1 === L
                                  ? "n-pagination__popup_left"
                                  : "n-pagination__popup_right"),
                              id: "menu",
                            },
                            m.default.createElement(
                              "div",
                              { className: "n-pagination__search_input" },
                              m.default.createElement(
                                "div",
                                { className: "n-pagination__search_logo" },
                                m.default.createElement(r.SvgIcSearch, {
                                  className: "search-icon",
                                })
                              ),
                              m.default.createElement(
                                "div",
                                { className: "text-input-wrapper" },
                                m.default.createElement("input", {
                                  id: "input_box",
                                  type: "number",
                                  className: "n-input",
                                  placeholder: "Search page",
                                  onChange: (e) =>
                                    (function (e) {
                                      let t =
                                          O.total &&
                                          O.limit &&
                                          Math.ceil(O.total / O.limit),
                                        n = Number(e.target.value);
                                      if (n <= (t || 0)) {
                                        if (!e.target.value) {
                                          const e = document.getElementById(
                                            R[0].toString()
                                          );
                                          return void (
                                            null == e || e.scrollIntoView()
                                          );
                                        }
                                        const t = document.getElementById(
                                          e.target.value
                                        );
                                        null == t || t.scrollIntoView();
                                      } else
                                        e.target.value = e.target.value.slice(
                                          0,
                                          -1
                                        );
                                      return I(n);
                                    })(e),
                                })
                              )
                            ),
                            m.default.createElement(
                              "div",
                              {
                                className: "n-pagination__search_wrapper",
                                id: "search_wrapper",
                              },
                              R.map((e, t) =>
                                m.default.createElement(
                                  "div",
                                  {
                                    key: t,
                                    id: null == e ? void 0 : e.toString(),
                                    onClick: (n) => G(0, e, t),
                                    className: `n-pagination__search_number_inactive ${
                                      e === z &&
                                      "n-pagination__search_number_active"
                                    }`,
                                  },
                                  e
                                )
                              )
                            )
                          )
                        : ""
                    ),
                    m.default.createElement(
                      "div",
                      {
                        "data-testid": "btnNext",
                        onClick: U,
                        className: `n-pagination__next ${
                          !W() && "pagination-diabled"
                        } `,
                      },
                      m.default.createElement(r.SvgIcChevronRight, null)
                    )
                  )
                : null
            ),
            m.default.createElement(
              "div",
              { className: "n-pagination__left mobile_view" },
              m.default.createElement(
                "span",
                {
                  className: "n-pagination__count",
                  "data-testid": "pagination-count-mobile-view",
                },
                V()
              )
            ),
            m.default.createElement(
              "div",
              { className: "n-pagination__right" },
              m.default.createElement(
                "span",
                { className: "n-pagination__select__label" },
                "Rows per page"
              ),
              m.default.createElement(
                "div",
                { className: "n-pagination__select" },
                m.default.createElement(a, {
                  className: "n-pagination-page-size",
                  items: Y(),
                  value: j.toString(),
                  onChange: B,
                })
              )
            )
          )
        ),
      n.type === exports.TypeEnum.TYPE_TOP &&
        m.default.createElement(
          "div",
          Object.assign(
            {
              className: `${
                n.size === exports.SizeEnum.SIZE_SMALL
                  ? "n-pagination-top__small"
                  : ""
              } n-pagination-top-container ${null != E ? E : ""}`,
              style: null != b ? b : {},
              id: u,
            },
            S
          ),
          m.default.createElement(
            "div",
            { className: "n-pagination__select" },
            m.default.createElement(a, {
              className: "n-pagination-page-size",
              items: Y(),
              value: j.toString(),
              onChange: B,
            })
          ),
          m.default.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count",
            },
            V("top")
          ),
          m.default.createElement(
            "div",
            { className: "n-pagination__main" },
            m.default.createElement(l, {
              theme: "secondary",
              "data-testid": "btnPrevious",
              onClick: () => A,
              size: "medium",
              className: "n-pagination__prev",
              icon: r.SvgIcChevronLeft,
              disabled: !K(),
            }),
            m.default.createElement(s, {
              type: "number",
              value: $,
              onChange: function (e) {
                const t = parseInt(e.target.value),
                  n = O.total && O.total / j;
                t < 1
                  ? (k(1),
                    N((e) =>
                      Object.assign(Object.assign({}, e), { current: 1 })
                    ))
                  : n && t > n
                  ? (k(n),
                    N((e) =>
                      Object.assign(Object.assign({}, e), { current: n })
                    ))
                  : (k(e.target.value),
                    "" !== e.target.value &&
                      N((e) =>
                        Object.assign(Object.assign({}, e), { current: t })
                      )),
                  (e.target.style.width = e.target.value.length + 0.5 + "ch");
              },
              onKeyDown: function (e) {
                ["+", "-", ".", "e", "E"].includes(e.key) && e.preventDefault();
              },
              onBlur: function () {
                "" === $ && k(O.current);
              },
              min: 1,
              max: O.total && O.total / j,
              "data-testid": "pageInput",
            }),
            m.default.createElement(l, {
              theme: "secondary",
              "data-testid": "btnNext",
              onClick: U,
              size: "medium",
              icon: r.SvgIcChevronRight,
              className: "n-pagination__next",
              disabled: !W(),
            })
          )
        )
    )
  );
};
g.defaultProps = {
  id: `n-pagination-${n()}`,
  mode: exports.ModeEnum.MODE_REGULAR,
  type: exports.TypeEnum.TYPE_DEFAULT,
  size: exports.SizeEnum.SIZE_LARGE,
  pageSizeOptions: [10, 20, 50, 100],
  defaultPageSize: 10,
  value: {
    limit: 0,
    total: 0,
    current: 0,
    prevPage: "",
    nextPage: "",
    currentPage: "",
    currentTotal: 0,
  },
};
var p = m.default.memo(g);
exports.default = p;
//# sourceMappingURL=Pagination.js.map
