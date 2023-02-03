import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useEffect as i } from "react";
import a from "../../utils/uuids.js";
import r from "../Dropdown/Dropdown.js";
import "./Pagination.scss.js";
import {
  SvgChevronLeft as s,
  SvgChevronRight as o,
} from "../../assets/svg-components/Navigation/index.js";
var c;
!(function (e) {
  (e.MODE_REGULAR = "regular"), (e.MODE_CURSOR = "cursor");
})(c || (c = {}));
const l = (a) => {
  const {
      id: l,
      name: u,
      mode: g,
      pageSizeOptions: m,
      value: p,
      onChange: O,
      onPreviousClick: d,
      onNextClick: v,
      className: f,
      style: b,
    } = a,
    _ = e(a, [
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
    [E, j] = n(p),
    [P, R] = n(m && m.length > 0 ? m[0] : 10);
  function N() {
    null == O || O(E);
  }
  function z() {
    return E.limit && E.limit > 0 ? E.total && Math.ceil(E.total / E.limit) : 0;
  }
  return (
    i(() => {
      E.current || j(Object.assign(Object.assign({}, E), { current: 1 }));
    }, []),
    t.createElement(
      "div",
      Object.assign(
        {
          className: `nitrozen-pagination-container ${null != f ? f : ""}`,
          style: null != b ? b : {},
          id: l,
        },
        _
      ),
      t.createElement(
        "div",
        { className: "nitrozen-pagination" },
        t.createElement(
          "div",
          { className: "nitrozen-pagination__left" },
          t.createElement(
            "span",
            {
              className: "nitrozen-pagination__count",
              "data-testid": "pagination-count",
            },
            (function () {
              let e = " ";
              return (
                !(function () {
                  if (E.total) return !0;
                  return !1;
                })()
                  ? (e = E.currentTotal ? `Showing ${E.currentTotal} ${u}` : "")
                  : ((e = `Result ${
                      E.limit && E.limit * (E.current ? E.current - 1 : 0) + 1
                    } - ${
                      E.limit &&
                      E.current &&
                      E.total &&
                      (E.limit * E.current < E.total
                        ? E.limit * E.current
                        : E.total)
                    }`),
                    (e += ` of ${E.total}`)),
                e
              );
            })()
          )
        ),
        t.createElement(
          "div",
          { className: "nitrozen-pagination__right" },
          t.createElement(
            "div",
            { className: "nitrozen-pagination__select" },
            t.createElement(
              "span",
              { className: "nitrozen-pagination__select__label" },
              "Rows per page"
            ),
            t.createElement(r, {
              className: "nitrozen-pagination-page-size",
              items: (function () {
                const e = m
                  ? m.map((e) => ({ text: e.toString(), value: e.toString() }))
                  : [];
                return (
                  P || R(E.limit ? E.limit : e.length > 0 ? e[0].value : 10), e
                );
              })(),
              value: P,
              onChange: function (e) {
                g === c.MODE_CURSOR
                  ? j(
                      Object.assign(Object.assign({}, E), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : j(
                      Object.assign(Object.assign({}, E), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  R(e),
                  N();
              },
            })
          ),
          g === c.MODE_REGULAR &&
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                "div",
                {
                  "data-testid": "btnPrevious",
                  onClick: function () {
                    if (E.total) {
                      if (1 === E.current) return;
                      const e = E.current ? E.current - 1 : 0;
                      j(Object.assign(Object.assign({}, E), { current: e }));
                    } else if (g === c.MODE_CURSOR) {
                      if (!E.prevPage) return;
                      j(
                        Object.assign(Object.assign({}, E), {
                          nextPage: "",
                          currentPage: E.prevPage,
                        })
                      );
                    }
                    N(), null == d || d();
                  },
                  className: `nitrozen-pagination__prev ${
                    !!(
                      (E.total && 1 === E.current) ||
                      (g === c.MODE_CURSOR && !E.prevPage)
                    ) && "pagination-diabled"
                  }`,
                },
                t.createElement(s, null)
              ),
              t.createElement(
                "div",
                {
                  "data-testid": "btnNext",
                  onClick: function () {
                    if (E.total) {
                      const e = z() || 1;
                      if (E.current && E.current >= e)
                        return void j(
                          Object.assign(Object.assign({}, E), { current: e })
                        );
                      if (0 === e)
                        return void j(
                          Object.assign(Object.assign({}, E), { current: 0 })
                        );
                      const t = E.current ? E.current + 1 : 1;
                      j(Object.assign(Object.assign({}, E), { current: t }));
                    }
                    if (g === c.MODE_CURSOR) {
                      if (!E.nextPage) return;
                      j(
                        Object.assign(Object.assign({}, E), {
                          prevPage: "",
                          currentPage: E.nextPage,
                        })
                      );
                    }
                    N(), null == v || v();
                  },
                  className: `nitrozen-pagination__next ${
                    !!(
                      (E.total && E.current && E.current >= (z() || 0)) ||
                      (g === c.MODE_CURSOR && !E.nextPage)
                    ) && "pagination-diabled"
                  } `,
                },
                t.createElement(o, null)
              )
            )
        )
      )
    )
  );
};
l.defaultProps = {
  id: `nitrozen-pagination-${a()}`,
  mode: c.MODE_REGULAR,
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
var u = t.memo(l);
export { c as ModeEnum, u as default };
//# sourceMappingURL=Pagination.js.map
