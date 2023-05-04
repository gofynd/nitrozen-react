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
      defaultPageSize: v,
      value: f,
      onChange: b,
      onPreviousClick: E,
      onNextClick: O,
      className: N,
      style: h,
      visiblePagesNodeCount: j,
    } = r,
    P = e(r, [
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
    [w, C] = n(f),
    [S, x] = n(v || (_ && _.length > 0 ? _[0] : 10)),
    R = a(null),
    [$, k] = n([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [M, y] = n(!1),
    [z, D] = n([0]),
    [U, I] = n(0),
    [L, T] = n(1);
  n(!1);
  const A = a(!0);
  function B() {
    return w.limit && w.limit > 0 ? w.total && Math.ceil(w.total / w.limit) : 0;
  }
  function G(e, t, n) {
    if ("..." == t) {
      let e = w.total && w.limit && Math.ceil(w.total / w.limit),
        t = $[n - 1],
        a = e;
      a = $[n + 1] == e ? e : $[n + 1];
      const i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      T(n), D(i), document.addEventListener("click", V, !1), y(n != L || !M);
    } else y(!1), C(Object.assign(Object.assign({}, w), { current: t }));
  }
  function V(e) {
    R.current && !R.current.contains(e.target) && y(!1);
  }
  function F() {
    let e = " ";
    return (
      !(function () {
        if (w.total) return !0;
        return !1;
      })()
        ? (e = w.currentTotal ? `Showing ${w.currentTotal} ${p}` : "")
        : ((e = `Showing ${
            w.limit && w.limit * (w.current ? w.current - 1 : 0) + 1
          } - ${
            w.limit &&
            w.current &&
            w.total &&
            (w.limit * w.current < w.total ? w.limit * w.current : w.total)
          }`),
          (e += ` of ${w.total} results`)),
      e
    );
  }
  return (
    i(() => {
      C(f);
    }, [f]),
    i(() => {
      w.current || C(Object.assign(Object.assign({}, w), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          const a = Math.min(...n);
          if (j && j > 4) {
            const e = Math.floor(j / 2) - (j % 2 == 0 ? 3 : 2),
              t = c(j, w.total, w.limit, e, w.current);
            return void k([...t]);
          }
          if (a <= 768) {
            const e = c(4, w.total, w.limit, 1, w.current);
            k([...e]);
          } else {
            const e = c(5, w.total, w.limit, 2, w.current);
            k([...e]);
          }
        })(),
        (null == A ? void 0 : A.current) ? (A.current = !1) : null == b || b(w);
    }, [w, j]),
    t.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != N ? N : ""}`,
          style: null != h ? h : {},
          id: g,
        },
        P
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
            F()
          )
        ),
        t.createElement(
          "div",
          { className: "n-pagination__main" },
          $.length > 1
            ? t.createElement(
                t.Fragment,
                null,
                t.createElement(
                  "div",
                  {
                    "data-testid": "btnPrevious",
                    onClick: function () {
                      if (w.total) {
                        if (1 === w.current) return;
                        const e = w.current ? w.current - 1 : 0;
                        C(Object.assign(Object.assign({}, w), { current: e }));
                      } else if (d === m.MODE_CURSOR) {
                        if (!w.prevPage) return;
                        C(
                          Object.assign(Object.assign({}, w), {
                            nextPage: "",
                            currentPage: w.prevPage,
                          })
                        );
                      }
                      null == E || E();
                    },
                    className: `n-pagination__prev ${
                      !(!w.total || 1 !== w.current) && "pagination-diabled"
                    }`,
                  },
                  t.createElement(o, null)
                ),
                t.createElement(
                  "div",
                  { className: "n-pagination__number", ref: R },
                  null == $
                    ? void 0
                    : $.map((e, n) =>
                        t.createElement(
                          "div",
                          {
                            key: n,
                            id: n + "node",
                            onClick: (t) => G(0, e, n),
                            className: `n-pagination__number_inactive ${
                              e === w.current && "n-pagination__number_active"
                            } ${
                              "..." === e &&
                              L === n &&
                              M &&
                              "n-pagination__dot_active"
                            }`,
                          },
                          e
                        )
                      ),
                  M
                    ? t.createElement(
                        "div",
                        {
                          className:
                            "n-pagination__showpopup " +
                            (1 === L
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
                                      w.total &&
                                      w.limit &&
                                      Math.ceil(w.total / w.limit),
                                    n = Number(e.target.value);
                                  if (n <= (t || 0)) {
                                    if (!e.target.value) {
                                      const e = document.getElementById(
                                        z[0].toString()
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
                        t.createElement(
                          "div",
                          {
                            className: "n-pagination__search_wrapper",
                            id: "search_wrapper",
                          },
                          z.map((e, n) =>
                            t.createElement(
                              "div",
                              {
                                key: n,
                                id: null == e ? void 0 : e.toString(),
                                onClick: (t) => G(0, e, n),
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
                      if (w.total) {
                        const e = B() || 1;
                        if (w.current && w.current >= e)
                          return void C(
                            Object.assign(Object.assign({}, w), { current: e })
                          );
                        if (0 === e)
                          return void C(
                            Object.assign(Object.assign({}, w), { current: 0 })
                          );
                        const t = w.current ? w.current + 1 : 1;
                        C(Object.assign(Object.assign({}, w), { current: t }));
                      }
                      if (d === m.MODE_CURSOR) {
                        if (!w.nextPage) return;
                        C(
                          Object.assign(Object.assign({}, w), {
                            prevPage: "",
                            currentPage: w.nextPage,
                          })
                        );
                      }
                      null == O || O();
                    },
                    className: `n-pagination__next ${
                      !!(w.total && w.current && w.current >= (B() || 0)) &&
                      "pagination-diabled"
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
            F()
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
                  S ||
                    x(
                      Number(
                        w.limit ? w.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: S.toString(),
              onChange: function (e) {
                d === m.MODE_CURSOR
                  ? C(
                      Object.assign(Object.assign({}, w), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : C(
                      Object.assign(Object.assign({}, w), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  x(e);
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
var p = t.memo(g);
export { m as ModeEnum, p as default };
//# sourceMappingURL=Pagination.js.map
