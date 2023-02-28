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
      value: d,
      onChange: m,
      onPreviousClick: g,
      onNextClick: p,
      className: f,
      style: _,
    } = n,
    v = e.__rest(n, [
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
    ]),
    [E, b] = t.useState(d),
    [O, h] = t.useState(o && o.length > 0 ? o[0] : 10),
    N = t.useRef(null),
    [j, S] = t.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [x, P] = t.useState(!1),
    [M, w] = t.useState(["0"]),
    [C, R] = t.useState(0),
    [$, k] = t.useState(1),
    [y, D] = t.useState(!1),
    U = t.useRef(!0);
  function q() {
    return E.limit && E.limit > 0 ? E.total && Math.ceil(E.total / E.limit) : 0;
  }
  function I(e, t, n) {
    if ("..." == t) {
      let e = E.total && E.limit && Math.ceil(E.total / E.limit),
        t = j[n - 1],
        a = e;
      a = j[n + 1] == e ? e : j[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      k(n), w(i), document.addEventListener("click", z, !1), P(n != $ || !x);
    } else P(!1), b(Object.assign(Object.assign({}, E), { current: t }));
  }
  function z(e) {
    N.current && !N.current.contains(e.target) && P(!1);
  }
  function L() {
    let e = " ";
    return (
      !(function () {
        if (E.total) return !0;
        return !1;
      })()
        ? (e = E.currentTotal ? `Showing ${E.currentTotal} ${s}` : "")
        : ((e = `Showing ${
            E.limit && E.limit * (E.current ? E.current - 1 : 0) + 1
          } - ${
            E.limit &&
            E.current &&
            E.total &&
            (E.limit * E.current < E.total ? E.limit * E.current : E.total)
          }`),
          (e += ` of ${E.total} results`)),
      e
    );
  }
  return (
    t.useEffect(() => {
      E.current || b(Object.assign(Object.assign({}, E), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          if (Math.min(...n) <= 768) {
            const e = i.usePagination(4, E.total, E.limit, 1, E.current);
            S(e);
          } else {
            const e = i.usePagination(5, E.total, E.limit, 2, E.current);
            S(e);
          }
        })();
    }, [E]),
    t.useEffect(() => {
      (null == U ? void 0 : U.current) ? (U.current = !1) : null == m || m(E);
    }, [E]),
    u.default.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != f ? f : ""}`,
          style: null != _ ? _ : {},
          id: l,
        },
        v
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
          !y &&
            u.default.createElement(
              u.default.Fragment,
              null,
              u.default.createElement(
                "div",
                {
                  "data-testid": "btnPrevious",
                  onClick: function () {
                    if (E.total) {
                      if (1 === E.current) return;
                      const e = E.current ? E.current - 1 : 0;
                      b(Object.assign(Object.assign({}, E), { current: e }));
                    } else if (c === exports.ModeEnum.MODE_CURSOR) {
                      if (!E.prevPage) return;
                      b(
                        Object.assign(Object.assign({}, E), {
                          nextPage: "",
                          currentPage: E.prevPage,
                        })
                      );
                    }
                    null == g || g();
                  },
                  className: `n-pagination__prev ${
                    !!(
                      (E.total && 1 === E.current) ||
                      (c === exports.ModeEnum.MODE_CURSOR && !E.prevPage)
                    ) && "pagination-diabled"
                  }`,
                },
                u.default.createElement(r.SvgIcChevronLeft, null)
              ),
              u.default.createElement(
                "div",
                { className: "n-pagination__number", ref: N },
                (function () {
                  if (j.length > 1)
                    return null == j
                      ? void 0
                      : j.map((e, t) =>
                          u.default.createElement(
                            "div",
                            {
                              key: t,
                              id: t + "node",
                              onClick: (n) => I(n, e, t),
                              className: `n-pagination__number_inactive ${
                                e === E.current && "n-pagination__number_active"
                              } ${
                                "..." === e &&
                                $ === t &&
                                x &&
                                "n-pagination__dot_active"
                              }`,
                            },
                            e
                          )
                        );
                  D(!0);
                })(),
                x
                  ? u.default.createElement(
                      "div",
                      {
                        className:
                          "n-pagination__showpopup " +
                          (1 === $
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
                                    E.total &&
                                    E.limit &&
                                    Math.ceil(E.total / E.limit),
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
                                  e.target.value = e.target.value.slice(0, -1);
                                return R(n);
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
                                e === C && "n-pagination__search_number_active"
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
                    if (E.total) {
                      const e = q() || 1;
                      if (E.current && E.current >= e)
                        return void b(
                          Object.assign(Object.assign({}, E), { current: e })
                        );
                      if (0 === e)
                        return void b(
                          Object.assign(Object.assign({}, E), { current: 0 })
                        );
                      const t = E.current ? E.current + 1 : 1;
                      b(Object.assign(Object.assign({}, E), { current: t }));
                    }
                    if (c === exports.ModeEnum.MODE_CURSOR) {
                      if (!E.nextPage) return;
                      b(
                        Object.assign(Object.assign({}, E), {
                          prevPage: "",
                          currentPage: E.nextPage,
                        })
                      );
                    }
                    null == p || p();
                  },
                  className: `n-pagination__next ${
                    !!(
                      (E.total && E.current && E.current >= (q() || 0)) ||
                      (c === exports.ModeEnum.MODE_CURSOR && !E.nextPage)
                    ) && "pagination-diabled"
                  } `,
                },
                u.default.createElement(r.SvgIcChevronRight, null)
              )
            )
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
                  O ||
                    h(
                      Number(
                        E.limit ? E.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: O,
              onChange: function (e) {
                c === exports.ModeEnum.MODE_CURSOR
                  ? b(
                      Object.assign(Object.assign({}, E), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : b(
                      Object.assign(Object.assign({}, E), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  h(e);
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
