"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js");
require("./Table.scss.js");
var l = require("../../assets/svg-components/Nitrozen/index.js"),
  a = require("../Checkbox/Checkbox.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = r(e);
const o = (t) => {
  const {
      id: r,
      tableRow: o,
      tableHeader: c,
      showColumnDivider: d,
      customStyle: s,
      customClassName: i,
    } = t,
    [u, m] = e.useState([]),
    f = e.useRef(null),
    h = (e) => () => {
      var l;
      null === (l = t.onRowClick) || void 0 === l || l.call(t, e);
    },
    b = (e) => {
      let t;
      return () => {
        cancelAnimationFrame(t), (t = requestAnimationFrame(e));
      };
    },
    v = b(() => {
      var e;
      const l = f.current;
      if (!l) return;
      const { scrollLeft: a } = l,
        r =
          null == l
            ? void 0
            : l.querySelectorAll(
                "th:nth-child(-n+" + t.freezeLeftColumns + ")"
              );
      let n = 0;
      null === (e = Array.from(r)) ||
        void 0 === e ||
        e.forEach((e) => {
          (e.style.position = "sticky"),
            (e.style.left = n + "px"),
            (n += e.getBoundingClientRect().width);
        });
      const o = null == l ? void 0 : l.querySelectorAll("tbody > tr");
      null == o ||
        o.forEach((e) => {
          var l;
          const a =
            null == e
              ? void 0
              : e.querySelectorAll(
                  "td:nth-child(-n+" + t.freezeLeftColumns + ")"
                );
          let r = 0;
          null === (l = Array.from(a)) ||
            void 0 === l ||
            l.forEach((e) => {
              (e.style.position = "sticky"),
                (e.style.left = r + "px"),
                (r += e.getBoundingClientRect().width);
            });
        });
      (null == l
        ? void 0
        : l.querySelector(".left-freezed-border")
      ).style.left = n + a + "px";
    }),
    k = b(() => {
      var e;
      const l = f.current;
      if (!l) return;
      const { scrollLeft: a } = l,
        r =
          null == l
            ? void 0
            : l.querySelectorAll(
                "th:nth-last-child(-n+" + t.freezeRightColumns + ")"
              );
      let n = 0;
      null === (e = Array.from(r)) ||
        void 0 === e ||
        e.reverse().forEach((e) => {
          (e.style.position = "sticky"),
            (e.style.right = n + "px"),
            (n += e.getBoundingClientRect().width);
        });
      const o = null == l ? void 0 : l.querySelectorAll("tbody > tr");
      null == o ||
        o.forEach((e) => {
          var l;
          const a =
            null == e
              ? void 0
              : e.querySelectorAll(
                  "td:nth-last-child(-n+" + t.freezeRightColumns + ")"
                );
          let r = 0;
          null === (l = Array.from(a)) ||
            void 0 === l ||
            l.reverse().forEach((e) => {
              (e.style.position = "sticky"),
                (e.style.right = r + "px"),
                (r += e.getBoundingClientRect().width);
            });
        });
      (null == l
        ? void 0
        : l.querySelector(".right-freezed-border")
      ).style.right = n - a + "px";
    }),
    C = () => {
      t.freezeLeftColumns && Number(t.freezeLeftColumns) > 0 && v(),
        t.freezeRightColumns && Number(t.freezeRightColumns) > 0 && k();
    };
  e.useEffect(
    () => (
      C(),
      void 0 !== typeof window && window.addEventListener("resize", C),
      () => {
        void 0 !== typeof window && window.removeEventListener("resize", C);
      }
    ),
    [o]
  );
  const g = () => !(o.filter((e) => e.isChecked).length < 1);
  return n.default.createElement(
    "div",
    {
      className: `n-table ${i || ""}`,
      "data-testid": `table-${r}`,
      style: null != s ? s : {},
      ref: f,
      onScroll: C,
    },
    n.default.createElement(
      "table",
      { className: "n-main-table" },
      n.default.createElement(
        "thead",
        null,
        n.default.createElement(
          "tr",
          { className: "n-table-header-tr" },
          t.checkable
            ? n.default.createElement(
                "th",
                {
                  className: "n-table-header-checkbox",
                  style: { backgroundColor: t.headerBackground },
                },
                n.default.createElement(
                  "div",
                  { className: "n-table-checkbox-wrapper" },
                  n.default.createElement(a, {
                    id: "header-checkbox",
                    value: g(),
                    onChange: (e) => {
                      var l;
                      null === (l = t.allCheckClicked) ||
                        void 0 === l ||
                        l.call(t, e);
                    },
                    checkboxValue: g(),
                    isIndeterminate: !t.allChecked,
                  })
                )
              )
            : n.default.createElement(n.default.Fragment, null),
          c.map((e, a) =>
            n.default.createElement(
              "th",
              {
                className:
                  "n-table-header " + (e.sortable ? "n-cursor-pointer" : ""),
                "data-testid": `n-table-header-${a}`,
                style: {
                  width: e.width ? e.width : "auto",
                  backgroundColor: t.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let t = c[e],
                      l = [...u];
                    if (l.includes(e)) {
                      let a = l.indexOf(e);
                      a > -1 &&
                        (l.splice(a, 1),
                        t.customSort({
                          sort: !1,
                          headerIndex: e,
                          headerName: t.name,
                        }));
                    } else
                      l.push(e),
                        t.customSort({
                          sort: !0,
                          headerIndex: e,
                          headerName: t.name,
                        });
                    m(l);
                  })(a),
                key: `n-table-header-${a}`,
              },
              n.default.createElement(
                "div",
                { className: "n-th-parent" },
                n.default.createElement(
                  "span",
                  {
                    className: "n-table-header-text",
                    "data-testid": `header-value-${a}`,
                  },
                  " ",
                  e.value
                ),
                e.sortable
                  ? n.default.createElement(
                      n.default.Fragment,
                      null,
                      u.includes(a)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : n.default.createElement(l.SvgIcChevronDown, {
                              className: "n-action-icon",
                            })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : n.default.createElement(l.SvgIcChevronRight, {
                            className: "n-action-icon",
                          })
                    )
                  : n.default.createElement(n.default.Fragment, null)
              )
            )
          )
        )
      ),
      n.default.createElement(
        "tbody",
        null,
        o.map((e, l) =>
          n.default.createElement(
            "tr",
            Object.assign(
              {
                "data-testid": `row-${l}`,
                className: `n-table-row-item ${
                  t.footer ? "" : "n-table-row-item-nofooter"
                } ${"zebra" == t.rowStyle ? "n-table-row-zebra" : ""} ${
                  t.checkable ? "n-table-row-item-checkbox" : ""
                } ${t.onRowClick ? "n-table-row-item-clickable" : ""}`,
                key: `row-${l}`,
              },
              t.onRowClick ? { onClick: h(l) } : {}
            ),
            t.checkable
              ? n.default.createElement(
                  "td",
                  { className: "n-row-data" },
                  n.default.createElement(
                    "div",
                    {
                      className: "n-table-checkbox-wrapper",
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                    },
                    n.default.createElement(a, {
                      id: `n-row-checkbox-${l}`,
                      value: e.isChecked,
                      onChange: (e) =>
                        ((e, l) => {
                          var a;
                          let r = [...o];
                          (r[l].isChecked = e),
                            null === (a = t.getCheckedItems) ||
                              void 0 === a ||
                              a.call(t, r);
                        })(e, l),
                      checkboxValue: e.isChecked,
                    })
                  )
                )
              : n.default.createElement(n.default.Fragment, null),
            c.map((t, a) =>
              n.default.createElement(
                "td",
                {
                  className: "n-row-data " + (d ? "" : "n-table-no-divider"),
                  "data-testid": `n-row-data-${l}-${a}`,
                  key: `n-row-data-${l}-${a}`,
                },
                e[t.name]
              )
            )
          )
        )
      ),
      t.footer
        ? n.default.createElement(
            "tfoot",
            null,
            n.default.createElement(
              "tr",
              { className: "n-table-footer" },
              n.default.createElement(
                "td",
                {
                  colSpan: t.checkable ? 1 + c.length : c.length,
                  "data-testid": "footer-data",
                },
                t.footer
              )
            )
          )
        : null
    ),
    !!t.freezeLeftColumns &&
      n.default.createElement("div", { className: "left-freezed-border" }),
    !!t.freezeRightColumns &&
      n.default.createElement("div", { className: "right-freezed-border" })
  );
};
o.defaultProps = {
  id: `nitrozen-dialog-${t()}`,
  tableHeader: [],
  tableRow: [],
  rowStyle: "simple",
  headerBackground: "",
  customSortIcon: "",
  checkable: !1,
  allChecked: !1,
  getCheckedItems: () => {},
  allCheckClicked: () => {},
  showColumnDivider: !0,
  freezeLeftColumns: 0,
  freezeRightColumns: 0,
};
var c = e.memo(o);
module.exports = c;
//# sourceMappingURL=Table.js.map
