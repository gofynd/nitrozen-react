import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useRef as a, useEffect as i } from "react";
import r from "../../utils/uuids.js";
import l from "../Dropdown/Dropdown.js";
import "./Pagination.scss.js";
import { usePagination as c } from "./usePagination.js";
import {
  SvgIcChevronLeft as s,
  SvgIcSearch as o,
  SvgIcChevronRight as u,
} from "../../assets/svg-components/Nitrozen/index.js";
import m from "../Button/Button.js";
import g from "../Input/Input.js";
var p, d, _;
!(function (e) {
  (e.MODE_REGULAR = "regular"), (e.MODE_CURSOR = "cursor");
})(p || (p = {})),
  (function (e) {
    (e.TYPE_DEFAULT = "default"), (e.TYPE_TOP = "top");
  })(d || (d = {})),
  (function (e) {
    (e.SIZE_LARGE = "large"), (e.SIZE_SMALL = "small");
  })(_ || (_ = {}));
const v = (r) => {
  const {
      id: v,
      name: f,
      mode: E,
      pageSizeOptions: b,
      defaultPageSize: O,
      value: N,
      onChange: h,
      onPreviousClick: j,
      onNextClick: P,
      className: S,
      style: w,
      visiblePagesNodeCount: C,
    } = r,
    y = e(r, [
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
    [x, $] = n(N),
    [R, k] = n(O || (b && b.length > 0 ? b[0] : 10)),
    z = a(null),
    [D, M] = n([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [T, I] = n(!1),
    [L, A] = n([0]),
    [U, B] = n(0),
    [F, Y] = n(x.current),
    [G, Z] = n(1);
  n(!1);
  const V = a(!0);
  function K() {
    if (x.total) {
      if (1 === x.current) return;
      const e = x.current ? x.current - 1 : 0;
      $(Object.assign(Object.assign({}, x), { current: e }));
    } else if (E === p.MODE_CURSOR) {
      if (!x.prevPage) return;
      $(
        Object.assign(Object.assign({}, x), {
          nextPage: "",
          currentPage: x.prevPage,
        })
      );
    }
    null == j || j();
  }
  function W() {
    if (x.total) {
      const e = H() || 1;
      if (x.current && x.current >= e)
        return void $(Object.assign(Object.assign({}, x), { current: e }));
      if (0 === e)
        return void $(Object.assign(Object.assign({}, x), { current: 0 }));
      const t = x.current ? x.current + 1 : 1;
      $(Object.assign(Object.assign({}, x), { current: t }));
    }
    if (E === p.MODE_CURSOR) {
      if (!x.nextPage) return;
      $(
        Object.assign(Object.assign({}, x), {
          prevPage: "",
          currentPage: x.nextPage,
        })
      );
    }
    null == P || P();
  }
  function q(e) {
    E === p.MODE_CURSOR
      ? $(
          Object.assign(Object.assign({}, x), {
            current: 1,
            limit: e,
            nextPage: "",
            prevPage: "",
            currentPage: "",
          })
        )
      : $(Object.assign(Object.assign({}, x), { current: 1, limit: e })),
      k(e);
  }
  function H() {
    return x.limit && x.limit > 0 ? x.total && Math.ceil(x.total / x.limit) : 0;
  }
  function J() {
    const e = b
      ? b.map((e) => ({ text: e.toString(), value: e.toString() }))
      : [];
    return (
      R || k(Number(x.limit ? x.limit : e.length > 0 ? e[0].value : 1800)), e
    );
  }
  function Q(e, t, n) {
    if ("..." == t) {
      let e = x.total && x.limit && Math.ceil(x.total / x.limit),
        t = D[n - 1],
        a = e;
      a = D[n + 1] == e ? e : D[n + 1];
      const i = (function (e, t, n) {
        let a = [e],
          i = e;
        for (; i < t; ) a.push((i += n || 1));
        return a;
      })(t, a, 1);
      Z(n), A(i), document.addEventListener("click", X, !1), I(n != G || !T);
    } else I(!1), $(Object.assign(Object.assign({}, x), { current: t }));
  }
  function X(e) {
    z.current && !z.current.contains(e.target) && I(!1);
  }
  function ee(e = "default") {
    let t = " ";
    return (
      !(function () {
        if (x.total) return !0;
        return !1;
      })()
        ? (t = x.currentTotal
            ? `${"default" === e ? "Showing" : ""} ${x.currentTotal} ${f}`
            : "")
        : ((t = `${"default" === e ? "Showing " : ""}${
            x.limit && x.limit * (x.current ? x.current - 1 : 0) + 1
          } - ${
            x.limit &&
            x.current &&
            x.total &&
            (x.limit * x.current < x.total ? x.limit * x.current : x.total)
          }`),
          (t += ` of ${x.total}${"default" === e ? " results" : ""}`)),
      t
    );
  }
  function te() {
    return !x.total || 1 !== x.current;
  }
  function ne() {
    return !(x.total && x.current && x.current >= (H() || 0));
  }
  return (
    i(() => {
      $(N);
    }, [N]),
    i(() => {
      x.current || $(Object.assign(Object.assign({}, x), { current: 1 })),
        (function () {
          var e, t;
          const n = [window.innerWidth];
          (null === (e = window.screen) || void 0 === e ? void 0 : e.width) &&
            n.push(
              null === (t = window.screen) || void 0 === t ? void 0 : t.width
            );
          const a = Math.min(...n);
          if (C && C > 4) {
            const e = Math.floor(C / 2) - (C % 2 == 0 ? 3 : 2),
              t = c(C, x.total, x.limit, e, x.current);
            return void M([...t]);
          }
          if (a <= 768) {
            const e = c(4, x.total, x.limit, 1, x.current);
            M([...e]);
          } else {
            const e = c(5, x.total, x.limit, 2, x.current);
            M([...e]);
          }
        })(),
        (null == V ? void 0 : V.current)
          ? (V.current = !1)
          : (Y(x.current), null == h || h(x));
    }, [x, C]),
    t.createElement(
      t.Fragment,
      null,
      r.type === d.TYPE_DEFAULT &&
        t.createElement(
          "div",
          Object.assign(
            {
              className: `n-pagination-container ${null != S ? S : ""}`,
              style: null != w ? w : {},
              id: v,
            },
            y
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
                ee()
              )
            ),
            t.createElement(
              "div",
              { className: "n-pagination__main" },
              D.length > 1
                ? t.createElement(
                    t.Fragment,
                    null,
                    t.createElement(
                      "div",
                      {
                        "data-testid": "btnPrevious",
                        onClick: () => K,
                        className: `n-pagination__prev ${
                          !te() && "pagination-diabled"
                        }`,
                      },
                      t.createElement(s, null)
                    ),
                    t.createElement(
                      "div",
                      { className: "n-pagination__number", ref: z },
                      null == D
                        ? void 0
                        : D.map((e, n) =>
                            t.createElement(
                              "div",
                              {
                                key: n,
                                id: n + "node",
                                onClick: (t) => Q(0, e, n),
                                className: `n-pagination__number_inactive ${
                                  e === x.current &&
                                  "n-pagination__number_active"
                                } ${
                                  "..." === e &&
                                  G === n &&
                                  T &&
                                  "n-pagination__dot_active"
                                }`,
                              },
                              e
                            )
                          ),
                      T
                        ? t.createElement(
                            "div",
                            {
                              className:
                                "n-pagination__showpopup " +
                                (1 === G
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
                                t.createElement(o, { className: "search-icon" })
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
                                          x.total &&
                                          x.limit &&
                                          Math.ceil(x.total / x.limit),
                                        n = Number(e.target.value);
                                      if (n <= (t || 0)) {
                                        if (!e.target.value) {
                                          const e = document.getElementById(
                                            L[0].toString()
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
                                      return B(n);
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
                              L.map((e, n) =>
                                t.createElement(
                                  "div",
                                  {
                                    key: n,
                                    id: null == e ? void 0 : e.toString(),
                                    onClick: (t) => Q(0, e, n),
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
                        onClick: W,
                        className: `n-pagination__next ${
                          !ne() && "pagination-diabled"
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
                ee()
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
                  items: J(),
                  value: R.toString(),
                  onChange: q,
                })
              )
            )
          )
        ),
      r.type === d.TYPE_TOP &&
        t.createElement(
          "div",
          Object.assign(
            {
              className: `${
                r.size === _.SIZE_SMALL ? "n-pagination-top__small" : ""
              } n-pagination-top-container ${null != S ? S : ""}`,
              style: null != w ? w : {},
              id: v,
            },
            y
          ),
          t.createElement(
            "div",
            { className: "n-pagination__select" },
            t.createElement(l, {
              className: "n-pagination-page-size",
              items: J(),
              value: R.toString(),
              onChange: q,
            })
          ),
          t.createElement(
            "span",
            {
              className: "n-pagination__count",
              "data-testid": "pagination-count",
            },
            ee("top")
          ),
          t.createElement(
            "div",
            { className: "n-pagination__main" },
            t.createElement(m, {
              theme: "secondary",
              "data-testid": "btnPrevious",
              onClick: () => K,
              size: "medium",
              className: "n-pagination__prev",
              icon: s,
              disabled: !te(),
            }),
            t.createElement(g, {
              type: "number",
              value: F,
              onChange: function (e) {
                const t = parseInt(e.target.value),
                  n = x.total && x.total / R;
                t < 1
                  ? (Y(1),
                    $((e) =>
                      Object.assign(Object.assign({}, e), { current: 1 })
                    ))
                  : n && t > n
                  ? (Y(n),
                    $((e) =>
                      Object.assign(Object.assign({}, e), { current: n })
                    ))
                  : (Y(e.target.value),
                    "" !== e.target.value &&
                      $((e) =>
                        Object.assign(Object.assign({}, e), { current: t })
                      )),
                  (e.target.style.width = e.target.value.length + 0.5 + "ch");
              },
              onKeyDown: function (e) {
                ["+", "-", ".", "e", "E"].includes(e.key) && e.preventDefault();
              },
              onBlur: function () {
                "" === F && Y(x.current);
              },
              min: 1,
              max: x.total && x.total / R,
              "data-testid": "pageInput",
            }),
            t.createElement(m, {
              theme: "secondary",
              "data-testid": "btnNext",
              onClick: W,
              size: "medium",
              icon: u,
              className: "n-pagination__next",
              disabled: !ne(),
            })
          )
        )
    )
  );
};
v.defaultProps = {
  id: `n-pagination-${r()}`,
  mode: p.MODE_REGULAR,
  type: d.TYPE_DEFAULT,
  size: _.SIZE_LARGE,
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
var f = t.memo(v);
export { p as ModeEnum, _ as SizeEnum, d as TypeEnum, f as default };
//# sourceMappingURL=Pagination.js.map
