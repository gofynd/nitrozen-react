import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useRef as a, useEffect as i } from "react";
import r from "../../utils/uuids.js";
import l from "../Dropdown/Dropdown.js";
import "./Pagination.scss.js";
import { usePagination as c } from "./usePagination.js";
import {
  SvgIcChevronLeft as o,
  SvgIcSearch as s,
  SvgIcChevronRight as u,
} from "../../assets/svg-components/Nitrozen/index.js";
var m;
!(function (e) {
  (e.MODE_REGULAR = "regular"), (e.MODE_CURSOR = "cursor");
})(m || (m = {}));
const g = (r) => {
  const {
      id: g,
      name: p,
      mode: d,
      pageSizeOptions: _,
      value: v,
      onChange: f,
      onPreviousClick: b,
      onNextClick: E,
      className: O,
      style: N,
      visiblePagesNodeCount: h,
    } = r,
    j = e(r, [
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
    [P, w] = n(v),
    [C, R] = n(_ && _.length > 0 ? _[0] : 10),
    x = a(null),
    [S, M] = n([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [$, k] = n(!1),
    [D, y] = n(["0"]),
    [U, z] = n(0),
    [I, L] = n(1);
  n(!1);
  const T = a(!0);
  function A() {
    return P.limit && P.limit > 0 ? P.total && Math.ceil(P.total / P.limit) : 0;
  }
  function B(e, t, n) {
    if ("..." == t) {
      let e = P.total && P.limit && Math.ceil(P.total / P.limit),
        t = S[n - 1],
        a = e;
      a = S[n + 1] == e ? e : S[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      L(n), y(i), document.addEventListener("click", G, !1), k(n != I || !$);
    } else k(!1), w(Object.assign(Object.assign({}, P), { current: t }));
  }
  function G(e) {
    x.current && !x.current.contains(e.target) && k(!1);
  }
  function V() {
    let e = " ";
    return (
      !(function () {
        if (P.total) return !0;
        return !1;
      })()
        ? (e = P.currentTotal ? `Showing ${P.currentTotal} ${p}` : "")
        : ((e = `Showing ${
            P.limit && P.limit * (P.current ? P.current - 1 : 0) + 1
          } - ${
            P.limit &&
            P.current &&
            P.total &&
            (P.limit * P.current < P.total ? P.limit * P.current : P.total)
          }`),
          (e += ` of ${P.total} results`)),
      e
    );
  }
  return (
    i(() => {
      P.current || w(Object.assign(Object.assign({}, P), { current: 1 })),
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
              t = c(h, P.total, P.limit, e, P.current);
            return void M([...t]);
          }
          if (a <= 768) {
            const e = c(4, P.total, P.limit, 1, P.current);
            M([...e]);
          } else {
            const e = c(5, P.total, P.limit, 2, P.current);
            M([...e]);
          }
        })(),
        (null == T ? void 0 : T.current) ? (T.current = !1) : null == f || f(P);
    }, [P, h]),
    t.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != O ? O : ""}`,
          style: null != N ? N : {},
          id: g,
        },
        j
      ),
      t.createElement(
        "div",
        { className: "n-pagination" },
        t.createElement(
          "div",
          { className: "n-pagination__left" },
          t.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count",
            },
            V()
          )
        ),
        t.createElement(
          "div",
          { className: "n-pagination__main" },
          S.length > 1
            ? t.createElement(
                t.Fragment,
                null,
                t.createElement(
                  "div",
                  {
                    "data-testid": "btnPrevious",
                    onClick: function () {
                      if (P.total) {
                        if (1 === P.current) return;
                        const e = P.current ? P.current - 1 : 0;
                        w(Object.assign(Object.assign({}, P), { current: e }));
                      } else if (d === m.MODE_CURSOR) {
                        if (!P.prevPage) return;
                        w(
                          Object.assign(Object.assign({}, P), {
                            nextPage: "",
                            currentPage: P.prevPage,
                          })
                        );
                      }
                      null == b || b();
                    },
                    className: `n-pagination__prev ${
                      !!(
                        (P.total && 1 === P.current) ||
                        (d === m.MODE_CURSOR && !P.prevPage)
                      ) && "pagination-diabled"
                    }`,
                  },
                  t.createElement(o, null)
                ),
                t.createElement(
                  "div",
                  { className: "n-pagination__number", ref: x },
                  null == S
                    ? void 0
                    : S.map((e, n) =>
                        t.createElement(
                          "div",
                          {
                            key: n,
                            id: n + "node",
                            onClick: (t) => B(0, e, n),
                            className: `n-pagination__number_inactive ${
                              e === P.current && "n-pagination__number_active"
                            } ${
                              "..." === e &&
                              I === n &&
                              $ &&
                              "n-pagination__dot_active"
                            }`,
                          },
                          e
                        )
                      ),
                  $
                    ? t.createElement(
                        "div",
                        {
                          className:
                            "n-pagination__showpopup " +
                            (1 === I
                              ? "n-pagination__popup_left"
                              : "n-pagination__popup_right"),
                          id: "menu",
                        },
                        t.createElement(
                          "div",
                          { className: "n-pagination__search_input" },
                          t.createElement(
                            "div",
                            { className: "n-pagination__search_logo" },
                            t.createElement(s, { className: "search-icon" })
                          ),
                          t.createElement(
                            "div",
                            { className: "text-input-wrapper" },
                            t.createElement("input", {
                              id: "input_box",
                              type: "number",
                              className: "n-input",
                              placeholder: "Search page",
                              onChange: (e) =>
                                (function (e) {
                                  let t =
                                      P.total &&
                                      P.limit &&
                                      Math.ceil(P.total / P.limit),
                                    n = Number(e.target.value);
                                  if (n <= (t || 0)) {
                                    if (!e.target.value) {
                                      const e = document.getElementById(D[0]);
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
                                  return z(n);
                                })(e),
                            })
                          )
                        ),
                        t.createElement(
                          "div",
                          {
                            className: "n-pagination__search_wrapper",
                            id: "search_wrapper",
                          },
                          D.map((e, n) =>
                            t.createElement(
                              "div",
                              {
                                key: n,
                                id: e,
                                onClick: (t) => B(0, e, n),
                                className: `n-pagination__search_number_inactive ${
                                  e === U &&
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
                t.createElement(
                  "div",
                  {
                    "data-testid": "btnNext",
                    onClick: function () {
                      if (P.total) {
                        const e = A() || 1;
                        if (P.current && P.current >= e)
                          return void w(
                            Object.assign(Object.assign({}, P), { current: e })
                          );
                        if (0 === e)
                          return void w(
                            Object.assign(Object.assign({}, P), { current: 0 })
                          );
                        const t = P.current ? P.current + 1 : 1;
                        w(Object.assign(Object.assign({}, P), { current: t }));
                      }
                      if (d === m.MODE_CURSOR) {
                        if (!P.nextPage) return;
                        w(
                          Object.assign(Object.assign({}, P), {
                            prevPage: "",
                            currentPage: P.nextPage,
                          })
                        );
                      }
                      null == E || E();
                    },
                    className: `n-pagination__next ${
                      !!(
                        (P.total && P.current && P.current >= (A() || 0)) ||
                        (d === m.MODE_CURSOR && !P.nextPage)
                      ) && "pagination-diabled"
                    } `,
                  },
                  t.createElement(u, null)
                )
              )
            : null
        ),
        t.createElement(
          "div",
          { className: "n-pagination__left mobile_view" },
          t.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count-mobile-view",
            },
            V()
          )
        ),
        t.createElement(
          "div",
          { className: "n-pagination__right" },
          t.createElement(
            "span",
            { className: "n-pagination__select__label" },
            "Rows per page"
          ),
          t.createElement(
            "div",
            { className: "n-pagination__select" },
            t.createElement(l, {
              className: "n-pagination-page-size",
              items: (function () {
                const e = _
                  ? _.map((e) => ({ text: e.toString(), value: e.toString() }))
                  : [];
                return (
                  C ||
                    R(
                      Number(
                        P.limit ? P.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: C,
              onChange: function (e) {
                d === m.MODE_CURSOR
                  ? w(
                      Object.assign(Object.assign({}, P), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : w(
                      Object.assign(Object.assign({}, P), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  R(e);
              },
            })
          )
        )
      )
    )
  );
};
g.defaultProps = {
  id: `n-pagination-${r()}`,
  mode: m.MODE_REGULAR,
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
var p = t.memo(g);
export { m as ModeEnum, p as default };
//# sourceMappingURL=Pagination.js.map
