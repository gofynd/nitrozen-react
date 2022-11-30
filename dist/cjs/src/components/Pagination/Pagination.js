"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("../../utils/uuids.js"),
  a = require("../Dropdown/Dropdown.js"),
  r = require("../../assets/svg-components/Navigation/index.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s,
  o = i(t);
(exports.ModeEnum = void 0),
  ((s = exports.ModeEnum || (exports.ModeEnum = {})).MODE_REGULAR = "regular"),
  (s.MODE_CURSOR = "cursor");
const l = (n) => {
  const {
      id: i,
      name: s,
      mode: l,
      pageSizeOptions: u,
      value: c,
      onChange: g,
      onPreviousClick: d,
      onNextClick: m,
      className: p,
      style: f,
    } = n,
    O = e.__rest(n, [
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
    [v, E] = t.useState(c),
    [_, b] = t.useState(u && u.length > 0 ? u[0] : 10);
  function j() {
    null == g || g(v);
  }
  function x() {
    return v.limit && v.limit > 0 ? v.total && Math.ceil(v.total / v.limit) : 0;
  }
  return (
    t.useEffect(() => {
      v.current || E(Object.assign(Object.assign({}, v), { current: 1 }));
    }, []),
    o.default.createElement(
      "div",
      Object.assign(
        {
          className: `nitrozen-pagination-container ${null != p ? p : ""}`,
          style: null != f ? f : {},
          id: i,
        },
        O
      ),
      o.default.createElement(
        "div",
        { className: "nitrozen-pagination" },
        o.default.createElement(
          "div",
          { className: "nitrozen-pagination__left" },
          o.default.createElement(
            "span",
            {
              className: "nitrozen-pagination__count",
              "data-testid": "pagination-count",
            },
            (function () {
              let e = " ";
              return (
                !(function () {
                  if (v.total) return !0;
                  return !1;
                })()
                  ? (e = v.currentTotal ? `Showing ${v.currentTotal} ${s}` : "")
                  : ((e = `Result ${
                      v.limit && v.limit * (v.current ? v.current - 1 : 0) + 1
                    } - ${
                      v.limit &&
                      v.current &&
                      v.total &&
                      (v.limit * v.current < v.total
                        ? v.limit * v.current
                        : v.total)
                    }`),
                    (e += ` of ${v.total}`)),
                e
              );
            })()
          )
        ),
        o.default.createElement(
          "div",
          { className: "nitrozen-pagination__right" },
          o.default.createElement(
            "div",
            { className: "nitrozen-pagination__select" },
            o.default.createElement(
              "span",
              { className: "nitrozen-pagination__select__label" },
              "Rows per page"
            ),
            o.default.createElement(a, {
              className: "nitrozen-pagination-page-size",
              items: (function () {
                const e = u
                  ? u.map((e) => ({ text: e.toString(), value: e.toString() }))
                  : [];
                return (
                  _ || b(v.limit ? v.limit : e.length > 0 ? e[0].value : 10), e
                );
              })(),
              value: _,
              onChange: function (e) {
                l === exports.ModeEnum.MODE_CURSOR
                  ? E(
                      Object.assign(Object.assign({}, v), {
                        current: 1,
                        limit: e,
                        nextPage: "",
                        prevPage: "",
                        currentPage: "",
                      })
                    )
                  : E(
                      Object.assign(Object.assign({}, v), {
                        current: 1,
                        limit: e,
                      })
                    ),
                  b(e),
                  j();
              },
            })
          ),
          l === exports.ModeEnum.MODE_REGULAR &&
            o.default.createElement(
              o.default.Fragment,
              null,
              o.default.createElement(
                "div",
                {
                  "data-testid": "btnPrevious",
                  onClick: function () {
                    if (v.total) {
                      if (1 === v.current) return;
                      const e = v.current ? v.current - 1 : 0;
                      E(Object.assign(Object.assign({}, v), { current: e }));
                    } else if (l === exports.ModeEnum.MODE_CURSOR) {
                      if (!v.prevPage) return;
                      E(
                        Object.assign(Object.assign({}, v), {
                          nextPage: "",
                          currentPage: v.prevPage,
                        })
                      );
                    }
                    j(), null == d || d();
                  },
                  className: `nitrozen-pagination__prev ${
                    !!(
                      (v.total && 1 === v.current) ||
                      (l === exports.ModeEnum.MODE_CURSOR && !v.prevPage)
                    ) && "pagination-diabled"
                  }`,
                },
                o.default.createElement(r.SvgChevronLeft, null)
              ),
              o.default.createElement(
                "div",
                {
                  "data-testid": "btnNext",
                  onClick: function () {
                    if (v.total) {
                      const e = x() || 1;
                      if (v.current && v.current >= e)
                        return void E(
                          Object.assign(Object.assign({}, v), { current: e })
                        );
                      if (0 === e)
                        return void E(
                          Object.assign(Object.assign({}, v), { current: 0 })
                        );
                      const t = v.current ? v.current + 1 : 1;
                      E(Object.assign(Object.assign({}, v), { current: t }));
                    }
                    if (l === exports.ModeEnum.MODE_CURSOR) {
                      if (!v.nextPage) return;
                      E(
                        Object.assign(Object.assign({}, v), {
                          prevPage: "",
                          currentPage: v.nextPage,
                        })
                      );
                    }
                    j(), null == m || m();
                  },
                  className: `nitrozen-pagination__next ${
                    !!(
                      (v.total && v.current && v.current >= (x() || 0)) ||
                      (l === exports.ModeEnum.MODE_CURSOR && !v.nextPage)
                    ) && "pagination-diabled"
                  } `,
                },
                o.default.createElement(r.SvgChevronRight, null)
              )
            )
        )
      )
    )
  );
};
l.defaultProps = {
  id: `nitrozen-pagination-${n()}`,
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
var u = o.default.memo(l);
exports.default = u;
//# sourceMappingURL=Pagination.js.map
