import e, {
  memo as t,
  useState as l,
  useRef as r,
  useEffect as a,
} from "react";
import o from "../../utils/uuids.js";
import "./Table.scss.js";
import {
  SvgIcChevronDown as n,
  SvgIcChevronRight as c,
} from "../../assets/svg-components/Nitrozen/index.js";
import s from "../Checkbox/Checkbox.js";
const i = (t) => {
  const {
      id: o,
      tableRow: i,
      tableHeader: d,
      showColumnDivider: m,
      customStyle: u,
      customClassName: h,
    } = t,
    [f, b] = l([]),
    k = r(null),
    v = (e) => {
      let t;
      return () => {
        cancelAnimationFrame(t), (t = requestAnimationFrame(e));
      };
    },
    C = v(() => {
      var e;
      const l = k.current;
      if (!l) return;
      const { scrollLeft: r } = l,
        a =
          null == l
            ? void 0
            : l.querySelectorAll(
                "th:nth-child(-n+" + t.freezeLeftColumns + ")"
              );
      let o = 0;
      null === (e = Array.from(a)) ||
        void 0 === e ||
        e.forEach((e) => {
          (e.style.position = "sticky"),
            (e.style.left = o + "px"),
            (o += e.getBoundingClientRect().width);
        });
      const n = null == l ? void 0 : l.querySelectorAll("tbody > tr");
      null == n ||
        n.forEach((e) => {
          var l;
          const r =
            null == e
              ? void 0
              : e.querySelectorAll(
                  "td:nth-child(-n+" + t.freezeLeftColumns + ")"
                );
          let a = 0;
          null === (l = Array.from(r)) ||
            void 0 === l ||
            l.forEach((e) => {
              (e.style.position = "sticky"),
                (e.style.left = a + "px"),
                (a += e.getBoundingClientRect().width);
            });
        });
      (null == l
        ? void 0
        : l.querySelector(".left-freezed-border")
      ).style.left = o + r + "px";
    }),
    y = v(() => {
      var e;
      const l = k.current;
      if (!l) return;
      const { scrollLeft: r } = l,
        a =
          null == l
            ? void 0
            : l.querySelectorAll(
                "th:nth-last-child(-n+" + t.freezeRightColumns + ")"
              );
      let o = 0;
      null === (e = Array.from(a)) ||
        void 0 === e ||
        e.reverse().forEach((e) => {
          (e.style.position = "sticky"),
            (e.style.right = o + "px"),
            (o += e.getBoundingClientRect().width);
        });
      const n = null == l ? void 0 : l.querySelectorAll("tbody > tr");
      null == n ||
        n.forEach((e) => {
          var l;
          const r =
            null == e
              ? void 0
              : e.querySelectorAll(
                  "td:nth-last-child(-n+" + t.freezeRightColumns + ")"
                );
          let a = 0;
          null === (l = Array.from(r)) ||
            void 0 === l ||
            l.reverse().forEach((e) => {
              (e.style.position = "sticky"),
                (e.style.right = a + "px"),
                (a += e.getBoundingClientRect().width);
            });
        });
      (null == l
        ? void 0
        : l.querySelector(".right-freezed-border")
      ).style.right = o - r + "px";
    }),
    g = () => {
      t.freezeLeftColumns && Number(t.freezeLeftColumns) > 0 && C(),
        t.freezeRightColumns && Number(t.freezeRightColumns) > 0 && y();
    };
  a(
    () => (
      g(),
      void 0 !== typeof window && window.addEventListener("resize", g),
      () => {
        void 0 !== typeof window && window.removeEventListener("resize", g);
      }
    ),
    [i]
  );
  const w = () => !(i.filter((e) => e.isChecked).length < 1);
  return e.createElement(
    "div",
    {
      className: `n-table ${h || ""}`,
      "data-testid": `table-${o}`,
      style: null != u ? u : {},
      ref: k,
      onScroll: g,
    },
    e.createElement(
      "table",
      { className: "n-main-table" },
      e.createElement(
        "thead",
        null,
        e.createElement(
          "tr",
          { className: "n-table-header-tr" },
          t.checkable
            ? e.createElement(
                "th",
                {
                  className: "n-table-header-checkbox",
                  style: { backgroundColor: t.headerBackground },
                },
                e.createElement(
                  "div",
                  { className: "n-table-checkbox-wrapper" },
                  e.createElement(s, {
                    id: "header-checkbox",
                    value: w(),
                    onChange: (e) => {
                      var l;
                      null === (l = t.allCheckClicked) ||
                        void 0 === l ||
                        l.call(t, e);
                    },
                    checkboxValue: w(),
                    isIndeterminate: !t.allChecked,
                  })
                )
              )
            : e.createElement(e.Fragment, null),
          d.map((l, r) =>
            e.createElement(
              "th",
              {
                className:
                  "n-table-header " + (l.sortable ? "n-cursor-pointer" : ""),
                "data-testid": `n-table-header-${r}`,
                style: {
                  width: l.width ? l.width : "auto",
                  backgroundColor: t.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let t = d[e],
                      l = [...f];
                    if (l.includes(e)) {
                      let r = l.indexOf(e);
                      r > -1 &&
                        (l.splice(r, 1),
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
                    b(l);
                  })(r),
                key: `n-table-header-${r}`,
              },
              e.createElement(
                "div",
                { className: "n-th-parent" },
                e.createElement(
                  "span",
                  {
                    className: "n-table-header-text",
                    "data-testid": `header-value-${r}`,
                  },
                  " ",
                  l.value
                ),
                l.sortable
                  ? e.createElement(
                      e.Fragment,
                      null,
                      f.includes(r)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : e.createElement(n, { className: "n-action-icon" })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : e.createElement(c, { className: "n-action-icon" })
                    )
                  : e.createElement(e.Fragment, null)
              )
            )
          )
        )
      ),
      e.createElement(
        "tbody",
        null,
        i.map((l, r) => {
          return e.createElement(
            "tr",
            Object.assign(
              {
                "data-testid": `row-${r}`,
                className: `n-table-row-item ${
                  t.footer ? "" : "n-table-row-item-nofooter"
                } ${"zebra" == t.rowStyle ? "n-table-row-zebra" : ""} ${
                  t.checkable ? "n-table-row-item-checkbox" : ""
                } ${t.onRowClick ? "n-table-row-item-clickable" : ""}`,
                key: `row-${r}`,
              },
              t.onRowClick
                ? {
                    onClick:
                      ((a = r),
                      () => {
                        var e;
                        null === (e = t.onRowClick) ||
                          void 0 === e ||
                          e.call(t, a);
                      }),
                  }
                : {}
            ),
            t.checkable
              ? e.createElement(
                  "td",
                  { className: "n-row-data" },
                  e.createElement(
                    "div",
                    {
                      className: "n-table-checkbox-wrapper",
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                    },
                    e.createElement(s, {
                      id: `n-row-checkbox-${r}`,
                      value: l.isChecked,
                      onChange: (e) =>
                        ((e, l) => {
                          var r;
                          let a = [...i];
                          (a[l].isChecked = e),
                            null === (r = t.getCheckedItems) ||
                              void 0 === r ||
                              r.call(t, a);
                        })(e, r),
                      checkboxValue: l.isChecked,
                    })
                  )
                )
              : e.createElement(e.Fragment, null),
            d.map((t, a) =>
              e.createElement(
                "td",
                {
                  className: "n-row-data " + (m ? "" : "n-table-no-divider"),
                  "data-testid": `n-row-data-${r}-${a}`,
                  key: `n-row-data-${r}-${a}`,
                },
                l[t.name]
              )
            )
          );
          var a;
        })
      ),
      t.footer
        ? e.createElement(
            "tfoot",
            null,
            e.createElement(
              "tr",
              { className: "n-table-footer" },
              e.createElement(
                "td",
                {
                  colSpan: t.checkable ? 1 + d.length : d.length,
                  "data-testid": "footer-data",
                },
                t.footer
              )
            )
          )
        : null
    ),
    !!t.freezeLeftColumns &&
      e.createElement("div", { className: "left-freezed-border" }),
    !!t.freezeRightColumns &&
      e.createElement("div", { className: "right-freezed-border" })
  );
};
i.defaultProps = {
  id: `nitrozen-dialog-${o()}`,
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
var d = t(i);
export { d as default };
//# sourceMappingURL=Table.js.map
