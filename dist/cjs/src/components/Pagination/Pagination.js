"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../utils/uuids.js"),
  a = require("../Dropdown/Dropdown.js");
require("./Pagination.scss.js");
var i = require("../../assets/svg-components/Action/index.js"),
  r = require("../../assets/svg-components/Navigation/index.js"),
  l = require("./usePagination.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var u,
  c = s(t);
(exports.ModeEnum = void 0),
  ((u = exports.ModeEnum || (exports.ModeEnum = {})).MODE_REGULAR = "regular"),
  (u.MODE_CURSOR = "cursor");
const o = (n) => {
  const {
      id: s,
      name: u,
      mode: o,
      pageSizeOptions: d,
      value: m,
      onChange: g,
      onPreviousClick: p,
      onNextClick: f,
      className: _,
      style: v,
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
    ]),
    [b, O] = t.useState(m),
    [h, N] = t.useState(d && d.length > 0 ? d[0] : 10),
    j = t.useRef(null),
    [x, S] = t.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [P, M] = t.useState(!1),
    [w, R] = t.useState(["0"]),
    [C, $] = t.useState(0),
    [k, y] = t.useState(1),
    [D, q] = t.useState(!1),
    U = t.useRef(!0);
  function L() {
    return b.limit && b.limit > 0 ? b.total && Math.ceil(b.total / b.limit) : 0;
  }
  function z(e, t, n) {
    if ("..." == t) {
      let e = b.total && b.limit && Math.ceil(b.total / b.limit),
        t = x[n - 1],
        a = e;
      a = x[n + 1] == e ? e : x[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      y(n), R(i), document.addEventListener("click", I, !1), M(n != k || !P);
    } else M(!1), O(Object.assign(Object.assign({}, b), { current: t }));
  }
  function I(e) {
    j.current && !j.current.contains(e.target) && M(!1);
  }
  function A() {
    let e = " ";
    return (
      !(function () {
        if (b.total) return !0;
        return !1;
      })()
        ? (e = b.currentTotal ? `Showing ${b.currentTotal} ${u}` : "")
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
          if (Math.min(...n) <= 768) {
            const e = l.usePagination(4, b.total, b.limit, 1, b.current);
            S(e);
          } else {
            const e = l.usePagination(5, b.total, b.limit, 2, b.current);
            S(e);
          }
        })();
    }, [b]),
    t.useEffect(() => {
      (null == U ? void 0 : U.current) ? (U.current = !1) : null == g || g(b);
    }, [b]),
    c.default.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != _ ? _ : ""}`,
          style: null != v ? v : {},
          id: s,
        },
        E
      ),
      c.default.createElement(
        "div",
        { className: "n-pagination" },
        c.default.createElement(
          "div",
          { className: "n-pagination__left" },
          c.default.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count",
            },
            A()
          )
        ),
        c.default.createElement(
          "div",
          { className: "n-pagination__main" },
          !D &&
            c.default.createElement(
              c.default.Fragment,
              null,
              c.default.createElement(
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
                    null == p || p();
                  },
                  className: `n-pagination__prev ${
                    !!(
                      (b.total && 1 === b.current) ||
                      (o === exports.ModeEnum.MODE_CURSOR && !b.prevPage)
                    ) && "pagination-diabled"
                  }`,
                },
                c.default.createElement(r.SvgLeft, null)
              ),
              c.default.createElement(
                "div",
                { className: "n-pagination__number", ref: j },
                (function () {
                  if (x.length > 1)
                    return null == x
                      ? void 0
                      : x.map((e, t) =>
                          c.default.createElement(
                            "div",
                            {
                              key: t,
                              id: t + "node",
                              onClick: (n) => z(n, e, t),
                              className: `n-pagination__number_inactive ${
                                e === b.current && "n-pagination__number_active"
                              } ${
                                "..." === e &&
                                k === t &&
                                P &&
                                "n-pagination__dot_active"
                              }`,
                            },
                            e
                          )
                        );
                  q(!0);
                })(),
                P
                  ? c.default.createElement(
                      "div",
                      {
                        className:
                          "n-pagination__showpopup " +
                          (1 === k
                            ? "n-pagination__popup_left"
                            : "n-pagination__popup_right"),
                        id: "menu",
                      },
                      c.default.createElement(
                        "div",
                        { className: "n-pagination__search_input" },
                        c.default.createElement(
                          "div",
                          { className: "n-pagination__search_logo" },
                          c.default.createElement(i.SvgSearchLogo, {
                            className: "search-icon",
                          })
                        ),
                        c.default.createElement(
                          "div",
                          { className: "text-input-wrapper" },
                          c.default.createElement("input", {
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
                                    const e = document.getElementById(w[0]);
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
                                return $(n);
                              })(e),
                          })
                        )
                      ),
                      c.default.createElement(
                        "div",
                        {
                          className: "n-pagination__search_wrapper",
                          id: "search_wrapper",
                        },
                        w.map((e, t) =>
                          c.default.createElement(
                            "div",
                            {
                              key: t,
                              id: e,
                              onClick: (n) => z(0, e, t),
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
              c.default.createElement(
                "div",
                {
                  "data-testid": "btnNext",
                  onClick: function () {
                    if (b.total) {
                      const e = L() || 1;
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
                    null == f || f();
                  },
                  className: `n-pagination__next ${
                    !!(
                      (b.total && b.current && b.current >= (L() || 0)) ||
                      (o === exports.ModeEnum.MODE_CURSOR && !b.nextPage)
                    ) && "pagination-diabled"
                  } `,
                },
                c.default.createElement(r.SvgRight, null)
              )
            )
        ),
        c.default.createElement(
          "div",
          { className: "n-pagination__left mobile_view" },
          c.default.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count-mobile-view",
            },
            A()
          )
        ),
        c.default.createElement(
          "div",
          { className: "n-pagination__right" },
          c.default.createElement(
            "span",
            { className: "n-pagination__select__label" },
            "Rows per page"
          ),
          c.default.createElement(
            "div",
            { className: "n-pagination__select" },
            c.default.createElement(a, {
              className: "n-pagination-page-size",
              items: (function () {
                const e = d
                  ? d.map((e) => ({ text: e.toString(), value: e.toString() }))
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
var d = c.default.memo(o);
exports.default = d;
//# sourceMappingURL=Pagination.js.map
