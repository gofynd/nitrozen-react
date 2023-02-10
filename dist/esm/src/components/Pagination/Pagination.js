import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useRef as a, useEffect as i } from "react";
import r from "../../utils/uuids.js";
import l from "../Dropdown/Dropdown.js";
import "./Pagination.scss.js";
import { SvgSearchLogo as c } from "../../assets/svg-components/Action/index.js";
import {
  SvgLeft as s,
  SvgRight as o,
} from "../../assets/svg-components/Navigation/index.js";
import { usePagination as u } from "./usePagination.js";
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
    } = r,
    h = e(r, [
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
    [j, P] = n(v),
    [w, C] = n(_ && _.length > 0 ? _[0] : 10),
    R = a(null),
    [x, S] = n([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [M, $] = n(!1),
    [k, D] = n(["0"]),
    [y, U] = n(0),
    [z, I] = n(1),
    [A, L] = n(!1),
    T = a(!0);
  function B() {
    return j.limit && j.limit > 0 ? j.total && Math.ceil(j.total / j.limit) : 0;
  }
  function G(e, t, n) {
    if ("..." == t) {
      let e = j.total && j.limit && Math.ceil(j.total / j.limit),
        t = x[n - 1],
        a = e;
      a = x[n + 1] == e ? e : x[n + 1];
      let i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      I(n), D(i), document.addEventListener("click", V, !1), $(n != z || !M);
    } else $(!1), P(Object.assign(Object.assign({}, j), { current: t }));
  }
  function V(e) {
    R.current && !R.current.contains(e.target) && $(!1);
  }
  function F() {
    let e = " ";
    return (
      !(function () {
        if (j.total) return !0;
        return !1;
      })()
        ? (e = j.currentTotal ? `Showing ${j.currentTotal} ${p}` : "")
        : ((e = `Showing ${
            j.limit && j.limit * (j.current ? j.current - 1 : 0) + 1
          } - ${
            j.limit &&
            j.current &&
            j.total &&
            (j.limit * j.current < j.total ? j.limit * j.current : j.total)
          }`),
          (e += ` of ${j.total} results`)),
      e
    );
  }
  return (
    i(() => {
      j.current || P(Object.assign(Object.assign({}, j), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          if (Math.min(...n) <= 768) {
            const e = u(4, j.total, j.limit, 1, j.current);
            S(e);
          } else {
            const e = u(5, j.total, j.limit, 2, j.current);
            S(e);
          }
        })();
    }, [j]),
    i(() => {
      (null == T ? void 0 : T.current) ? (T.current = !1) : null == f || f(j);
    }, [j]),
    t.createElement(
      "div",
      Object.assign(
        {
          className: `n-pagination-container ${null != O ? O : ""}`,
          style: null != N ? N : {},
          id: g,
        },
        h
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
          !A &&
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                "div",
                {
                  "data-testid": "btnPrevious",
                  onClick: function () {
                    if (j.total) {
                      if (1 === j.current) return;
                      const e = j.current ? j.current - 1 : 0;
                      P(Object.assign(Object.assign({}, j), { current: e }));
                    } else if (d === m.MODE_CURSOR) {
                      if (!j.prevPage) return;
                      P(
                        Object.assign(Object.assign({}, j), {
                          nextPage: "",
                          currentPage: j.prevPage,
                        })
                      );
                    }
                    null == b || b();
                  },
                  className: `n-pagination__prev ${
                    !!(
                      (j.total && 1 === j.current) ||
                      (d === m.MODE_CURSOR && !j.prevPage)
                    ) && "pagination-diabled"
                  }`,
                },
                t.createElement(s, null)
              ),
              t.createElement(
                "div",
                { className: "n-pagination__number", ref: R },
                (function () {
                  if (x.length > 1)
                    return null == x
                      ? void 0
                      : x.map((e, n) =>
                          t.createElement(
                            "div",
                            {
                              key: n,
                              id: n + "node",
                              onClick: (t) => G(t, e, n),
                              className: `n-pagination__number_inactive ${
                                e === j.current && "n-pagination__number_active"
                              } ${
                                "..." === e &&
                                z === n &&
                                M &&
                                "n-pagination__dot_active"
                              }`,
                            },
                            e
                          )
                        );
                  L(!0);
                })(),
                M
                  ? t.createElement(
                      "div",
                      {
                        className:
                          "n-pagination__showpopup " +
                          (1 === z
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
                          t.createElement(c, { className: "search-icon" })
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
                                    j.total &&
                                    j.limit &&
                                    Math.ceil(j.total / j.limit),
                                  n = Number(e.target.value);
                                if (n <= (t || 0)) {
                                  if (!e.target.value) {
                                    const e = document.getElementById(k[0]);
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
                                return U(n);
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
                        k.map((e, n) =>
                          t.createElement(
                            "div",
                            {
                              key: n,
                              id: e,
                              onClick: (t) => G(0, e, n),
                              className: `n-pagination__search_number_inactive ${
                                e === y && "n-pagination__search_number_active"
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
                    if (j.total) {
                      const e = B() || 1;
                      if (j.current && j.current >= e)
                        return void P(
                          Object.assign(Object.assign({}, j), { current: e })
                        );
                      if (0 === e)
                        return void P(
                          Object.assign(Object.assign({}, j), { current: 0 })
                        );
                      const t = j.current ? j.current + 1 : 1;
                      P(Object.assign(Object.assign({}, j), { current: t }));
                    }
                    if (d === m.MODE_CURSOR) {
                      if (!j.nextPage) return;
                      P(
                        Object.assign(Object.assign({}, j), {
                          prevPage: "",
                          currentPage: j.nextPage,
                        })
                      );
                    }
                    null == E || E();
                  },
                  className: `n-pagination__next ${
                    !!(
                      (j.total && j.current && j.current >= (B() || 0)) ||
                      (d === m.MODE_CURSOR && !j.nextPage)
                    ) && "pagination-diabled"
                  } `,
                },
                t.createElement(o, null)
              )
            )
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
                  w ||
                    C(
                      Number(
                        j.limit ? j.limit : e.length > 0 ? e[0].value : 1800
                      )
                    ),
                  e
                );
              })(),
              value: w,
              onChange: function (e) {
                d === m.MODE_CURSOR
                  ? P(
                      Object.assign(Object.assign({}, j), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : P(
                      Object.assign(Object.assign({}, j), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  C(e);
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
