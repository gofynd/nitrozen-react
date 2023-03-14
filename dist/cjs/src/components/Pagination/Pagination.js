"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../utils/uuids.js"),
  a = require("../Dropdown/Dropdown.js");
require("./Pagination.scss.js");
var i = require("./usePagination.js"),
  r = require("../../assets/svg-components/Nitrozen/index.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s,
  u = l(t);
(exports.ModeEnum = void 0),
  ((s = exports.ModeEnum || (exports.ModeEnum = {})).MODE_REGULAR = "regular"),
  (s.MODE_CURSOR = "cursor");
const c = (n) => {
  const {
      id: l,
      name: s,
      mode: c,
      pageSizeOptions: o,
      defaultPageSize: d,
      value: g,
      onChange: m,
      onPreviousClick: p,
      onNextClick: f,
      className: _,
      style: v,
      visiblePagesNodeCount: E,
    } = n,
    b = e.__rest(n, [
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
    [h, O] = t.useState(g),
    [N, j] = t.useState(d || (o && o.length > 0 ? o[0] : 10)),
    P = t.useRef(null),
    [S, x] = t.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [w, C] = t.useState(!1),
    [M, R] = t.useState(["0"]),
    [$, k] = t.useState(0),
    [y, z] = t.useState(1);
  t.useState(!1);
  const D = t.useRef(!0);
  function q() {
    return h.limit && h.limit > 0 ? h.total && Math.ceil(h.total / h.limit) : 0;
  }
  function I(e, t, n) {
    if ("..." == t) {
      let e = h.total && h.limit && Math.ceil(h.total / h.limit),
        t = S[n - 1],
        a = e;
      a = S[n + 1] == e ? e : S[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      z(n), R(i), document.addEventListener("click", U, !1), C(n != y || !w);
    } else C(!1), O(Object.assign(Object.assign({}, h), { current: t }));
  }
  function U(e) {
    P.current && !P.current.contains(e.target) && C(!1);
  }
  function L() {
    let e = " ";
    return (
      !(function () {
        if (h.total) return !0;
        return !1;
      })()
        ? (e = h.currentTotal ? `Showing ${h.currentTotal} ${s}` : "")
        : ((e = `Showing ${
            h.limit && h.limit * (h.current ? h.current - 1 : 0) + 1
          } - ${
            h.limit &&
            h.current &&
            h.total &&
            (h.limit * h.current < h.total ? h.limit * h.current : h.total)
          }`),
          (e += ` of ${h.total} results`)),
      e
    );
  }
  return (
    t.useEffect(() => {
      O(g);
    }, [g]),
    t.useEffect(() => {
      h.current || O(Object.assign(Object.assign({}, h), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          const a = Math.min(...n);
          if (E && E > 4) {
            const e = Math.floor(E / 2) - (E % 2 == 0 ? 3 : 2),
              t = i.usePagination(E, h.total, h.limit, e, h.current);
            return void x([...t]);
          }
          if (a <= 768) {
            const e = i.usePagination(4, h.total, h.limit, 1, h.current);
            x([...e]);
          } else {
            const e = i.usePagination(5, h.total, h.limit, 2, h.current);
            x([...e]);
          }
        })(),
        (null == D ? void 0 : D.current) ? (D.current = !1) : null == m || m(h);
    }, [h, E]),
    u.default.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != _ ? _ : ""}`,
          style: null != v ? v : {},
          id: l,
        },
        b
      ),
      u.default.createElement(
        "div",
        { className: "n-pagination" },
        u.default.createElement(
          "div",
          { className: "n-pagination__left" },
          u.default.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count",
            },
            L()
          )
        ),
        u.default.createElement(
          "div",
          { className: "n-pagination__main" },
          S.length > 1
            ? u.default.createElement(
                u.default.Fragment,
                null,
                u.default.createElement(
                  "div",
                  {
                    "data-testid": "btnPrevious",
                    onClick: function () {
                      if (h.total) {
                        if (1 === h.current) return;
                        const e = h.current ? h.current - 1 : 0;
                        O(Object.assign(Object.assign({}, h), { current: e }));
                      } else if (c === exports.ModeEnum.MODE_CURSOR) {
                        if (!h.prevPage) return;
                        O(
                          Object.assign(Object.assign({}, h), {
                            nextPage: "",
                            currentPage: h.prevPage,
                          })
                        );
                      }
                      null == p || p();
                    },
                    className: `n-pagination__prev ${
                      !(!h.total || 1 !== h.current) && "pagination-diabled"
                    }`,
                  },
                  u.default.createElement(r.SvgIcChevronLeft, null)
                ),
                u.default.createElement(
                  "div",
                  { className: "n-pagination__number", ref: P },
                  null == S
                    ? void 0
                    : S.map((e, t) =>
                        u.default.createElement(
                          "div",
                          {
                            key: t,
                            id: t + "node",
                            onClick: (n) => I(0, e, t),
                            className: `n-pagination__number_inactive ${
                              e === h.current && "n-pagination__number_active"
                            } ${
                              "..." === e &&
                              y === t &&
                              w &&
                              "n-pagination__dot_active"
                            }`,
                          },
                          e
                        )
                      ),
                  w
                    ? u.default.createElement(
                        "div",
                        {
                          className:
                            "n-pagination__showpopup " +
                            (1 === y
                              ? "n-pagination__popup_left"
                              : "n-pagination__popup_right"),
                          id: "menu",
                        },
                        u.default.createElement(
                          "div",
                          { className: "n-pagination__search_input" },
                          u.default.createElement(
                            "div",
                            { className: "n-pagination__search_logo" },
                            u.default.createElement(r.SvgIcSearch, {
                              className: "search-icon",
                            })
                          ),
                          u.default.createElement(
                            "div",
                            { className: "text-input-wrapper" },
                            u.default.createElement("input", {
                              id: "input_box",
                              type: "number",
                              className: "n-input",
                              placeholder: "Search page",
                              onChange: (e) =>
                                (function (e) {
                                  let t =
                                      h.total &&
                                      h.limit &&
                                      Math.ceil(h.total / h.limit),
                                    n = Number(e.target.value);
                                  if (n <= (t || 0)) {
                                    if (!e.target.value) {
                                      const e = document.getElementById(M[0]);
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
                                  return k(n);
                                })(e),
                            })
                          )
                        ),
                        u.default.createElement(
                          "div",
                          {
                            className: "n-pagination__search_wrapper",
                            id: "search_wrapper",
                          },
                          M.map((e, t) =>
                            u.default.createElement(
                              "div",
                              {
                                key: t,
                                id: e,
                                onClick: (n) => I(0, e, t),
                                className: `n-pagination__search_number_inactive ${
                                  e === $ &&
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
                u.default.createElement(
                  "div",
                  {
                    "data-testid": "btnNext",
                    onClick: function () {
                      if (h.total) {
                        const e = q() || 1;
                        if (h.current && h.current >= e)
                          return void O(
                            Object.assign(Object.assign({}, h), { current: e })
                          );
                        if (0 === e)
                          return void O(
                            Object.assign(Object.assign({}, h), { current: 0 })
                          );
                        const t = h.current ? h.current + 1 : 1;
                        O(Object.assign(Object.assign({}, h), { current: t }));
                      }
                      if (c === exports.ModeEnum.MODE_CURSOR) {
                        if (!h.nextPage) return;
                        O(
                          Object.assign(Object.assign({}, h), {
                            prevPage: "",
                            currentPage: h.nextPage,
                          })
                        );
                      }
                      null == f || f();
                    },
                    className: `n-pagination__next ${
                      !!(h.total && h.current && h.current >= (q() || 0)) &&
                      "pagination-diabled"
                    } `,
                  },
                  u.default.createElement(r.SvgIcChevronRight, null)
                )
              )
            : null
        ),
        u.default.createElement(
          "div",
          { className: "n-pagination__left mobile_view" },
          u.default.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count-mobile-view",
            },
            L()
          )
        ),
        u.default.createElement(
          "div",
          { className: "n-pagination__right" },
          u.default.createElement(
            "span",
            { className: "n-pagination__select__label" },
            "Rows per page"
          ),
          u.default.createElement(
            "div",
            { className: "n-pagination__select" },
            u.default.createElement(a, {
              className: "n-pagination-page-size",
              items: (function () {
                const e = o
                  ? o.map((e) => ({ text: e.toString(), value: e.toString() }))
                  : [];
                return (
                  N ||
                    j(
                      Number(
                        h.limit ? h.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: N,
              onChange: function (e) {
                c === exports.ModeEnum.MODE_CURSOR
                  ? O(
                      Object.assign(Object.assign({}, h), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : O(
                      Object.assign(Object.assign({}, h), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  j(e);
              },
            })
          )
        )
      )
    )
  );
};
c.defaultProps = {
  id: `n-pagination-${n()}`,
  mode: exports.ModeEnum.MODE_REGULAR,
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
var o = u.default.memo(c);
exports.default = o;
//# sourceMappingURL=Pagination.js.map
