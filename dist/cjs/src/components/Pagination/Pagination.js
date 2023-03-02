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
const o = (n) => {
  const {
      id: l,
      name: s,
      mode: o,
      pageSizeOptions: c,
      value: d,
      onChange: m,
      onPreviousClick: g,
      onNextClick: p,
      className: f,
      style: _,
      visiblePagesNodeCount: v,
    } = n,
    E = e.__rest(n, [
      "id",
      "name",
      "mode",
      "pageSizeOptions",
      "value",
      "onChange",
      "onPreviousClick",
      "onNextClick",
      "className",
      "style",
      "visiblePagesNodeCount",
    ]),
    [b, O] = t.useState(d),
    [h, N] = t.useState(c && c.length > 0 ? c[0] : 10),
    j = t.useRef(null),
    [P, S] = t.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [x, M] = t.useState(!1),
    [C, w] = t.useState(["0"]),
    [R, $] = t.useState(0),
    [k, y] = t.useState(1);
  t.useState(!1);
  const D = t.useRef(!0);
  function U() {
    return b.limit && b.limit > 0 ? b.total && Math.ceil(b.total / b.limit) : 0;
  }
  function q(e, t, n) {
    if ("..." == t) {
      let e = b.total && b.limit && Math.ceil(b.total / b.limit),
        t = P[n - 1],
        a = e;
      a = P[n + 1] == e ? e : P[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      y(n), w(i), document.addEventListener("click", I, !1), M(n != k || !x);
    } else M(!1), O(Object.assign(Object.assign({}, b), { current: t }));
  }
  function I(e) {
    j.current && !j.current.contains(e.target) && M(!1);
  }
  function z() {
    let e = " ";
    return (
      !(function () {
        if (b.total) return !0;
        return !1;
      })()
        ? (e = b.currentTotal ? `Showing ${b.currentTotal} ${s}` : "")
        : ((e = `Showing ${
            b.limit && b.limit * (b.current ? b.current - 1 : 0) + 1
          } - ${
            b.limit &&
            b.current &&
            b.total &&
            (b.limit * b.current < b.total ? b.limit * b.current : b.total)
          }`),
          (e += ` of ${b.total} results`)),
      e
    );
  }
  return (
    t.useEffect(() => {
      b.current || O(Object.assign(Object.assign({}, b), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          const a = Math.min(...n);
          if (v && v > 4) {
            const e = Math.floor(v / 2) - (v % 2 == 0 ? 3 : 2),
              t = i.usePagination(v, b.total, b.limit, e, b.current);
            return void S([...t]);
          }
          if (a <= 768) {
            const e = i.usePagination(4, b.total, b.limit, 1, b.current);
            S([...e]);
          } else {
            const e = i.usePagination(5, b.total, b.limit, 2, b.current);
            S([...e]);
          }
        })(),
        (null == D ? void 0 : D.current) ? (D.current = !1) : null == m || m(b);
    }, [b, v]),
    u.default.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != f ? f : ""}`,
          style: null != _ ? _ : {},
          id: l,
        },
        E
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
            z()
          )
        ),
        u.default.createElement(
          "div",
          { className: "n-pagination__main" },
          P.length > 1
            ? u.default.createElement(
                u.default.Fragment,
                null,
                u.default.createElement(
                  "div",
                  {
                    "data-testid": "btnPrevious",
                    onClick: function () {
                      if (b.total) {
                        if (1 === b.current) return;
                        const e = b.current ? b.current - 1 : 0;
                        O(Object.assign(Object.assign({}, b), { current: e }));
                      } else if (o === exports.ModeEnum.MODE_CURSOR) {
                        if (!b.prevPage) return;
                        O(
                          Object.assign(Object.assign({}, b), {
                            nextPage: "",
                            currentPage: b.prevPage,
                          })
                        );
                      }
                      null == g || g();
                    },
                    className: `n-pagination__prev ${
                      !!(
                        (b.total && 1 === b.current) ||
                        (o === exports.ModeEnum.MODE_CURSOR && !b.prevPage)
                      ) && "pagination-diabled"
                    }`,
                  },
                  u.default.createElement(r.SvgIcChevronLeft, null)
                ),
                u.default.createElement(
                  "div",
                  { className: "n-pagination__number", ref: j },
                  null == P
                    ? void 0
                    : P.map((e, t) =>
                        u.default.createElement(
                          "div",
                          {
                            key: t,
                            id: t + "node",
                            onClick: (n) => q(0, e, t),
                            className: `n-pagination__number_inactive ${
                              e === b.current && "n-pagination__number_active"
                            } ${
                              "..." === e &&
                              k === t &&
                              x &&
                              "n-pagination__dot_active"
                            }`,
                          },
                          e
                        )
                      ),
                  x
                    ? u.default.createElement(
                        "div",
                        {
                          className:
                            "n-pagination__showpopup " +
                            (1 === k
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
                                      b.total &&
                                      b.limit &&
                                      Math.ceil(b.total / b.limit),
                                    n = Number(e.target.value);
                                  if (n <= (t || 0)) {
                                    if (!e.target.value) {
                                      const e = document.getElementById(C[0]);
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
                                  return $(n);
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
                          C.map((e, t) =>
                            u.default.createElement(
                              "div",
                              {
                                key: t,
                                id: e,
                                onClick: (n) => q(0, e, t),
                                className: `n-pagination__search_number_inactive ${
                                  e === R &&
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
                      if (b.total) {
                        const e = U() || 1;
                        if (b.current && b.current >= e)
                          return void O(
                            Object.assign(Object.assign({}, b), { current: e })
                          );
                        if (0 === e)
                          return void O(
                            Object.assign(Object.assign({}, b), { current: 0 })
                          );
                        const t = b.current ? b.current + 1 : 1;
                        O(Object.assign(Object.assign({}, b), { current: t }));
                      }
                      if (o === exports.ModeEnum.MODE_CURSOR) {
                        if (!b.nextPage) return;
                        O(
                          Object.assign(Object.assign({}, b), {
                            prevPage: "",
                            currentPage: b.nextPage,
                          })
                        );
                      }
                      null == p || p();
                    },
                    className: `n-pagination__next ${
                      !!(
                        (b.total && b.current && b.current >= (U() || 0)) ||
                        (o === exports.ModeEnum.MODE_CURSOR && !b.nextPage)
                      ) && "pagination-diabled"
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
            z()
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
                const e = c
                  ? c.map((e) => ({ text: e.toString(), value: e.toString() }))
                  : [];
                return (
                  h ||
                    N(
                      Number(
                        b.limit ? b.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: h,
              onChange: function (e) {
                o === exports.ModeEnum.MODE_CURSOR
                  ? O(
                      Object.assign(Object.assign({}, b), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : O(
                      Object.assign(Object.assign({}, b), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  N(e);
              },
            })
          )
        )
      )
    )
  );
};
o.defaultProps = {
  id: `n-pagination-${n()}`,
  mode: exports.ModeEnum.MODE_REGULAR,
  pageSizeOptions: [10, 20, 50, 100],
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
var c = u.default.memo(o);
exports.default = c;
//# sourceMappingURL=Pagination.js.map
