import e, { memo as t, useState as a } from "react";
import l from "../../utils/uuids.js";
import "./Table.scss.js";
import {
  SvgIcChevronDown as c,
  SvgIcChevronRight as r,
} from "../../assets/svg-components/Nitrozen/index.js";
import n from "../Checkbox/Checkbox.js";
const o = (t) => {
  const {
      id: l,
      tableRow: o,
      tableHeader: s,
      showColumnDivider: d,
      customStyle: m,
      customClassName: i,
    } = t,
    [h, b] = a([]);
  return e.createElement(
    "div",
    {
      className: `n-table ${i || ""}`,
      "data-testid": `table-${l}`,
      style: null != m ? m : {},
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
                  { className: "n-table-checbox-wrapper" },
                  e.createElement(n, {
                    id: "header-checkbox",
                    value: t.allChecked,
                    onChange: (e) => {
                      var a;
                      null === (a = t.allCheckClicked) ||
                        void 0 === a ||
                        a.call(t, e);
                    },
                    checkboxValue: t.allChecked,
                  })
                )
              )
            : e.createElement(e.Fragment, null),
          s.map((a, l) =>
            e.createElement(
              "th",
              {
                className:
                  "n-table-header " + (a.sortable ? "n-cursor-pointer" : ""),
                "data-testid": `n-table-header-${l}`,
                style: {
                  width: a.width ? a.width : "auto",
                  backgroundColor: t.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let t = s[e],
                      a = [...h];
                    if (a.includes(e)) {
                      let l = a.indexOf(e);
                      l > -1 &&
                        (a.splice(l, 1),
                        t.customSort({
                          sort: !1,
                          headerIndex: e,
                          headerName: t.name,
                        }));
                    } else
                      a.push(e),
                        t.customSort({
                          sort: !0,
                          headerIndex: e,
                          headerName: t.name,
                        });
                    b(a);
                  })(l),
                key: `n-table-header-${l}`,
              },
              e.createElement(
                "div",
                { className: "n-th-parent" },
                e.createElement(
                  "span",
                  {
                    className: "n-table-header-text",
                    "data-testid": `header-value-${l}`,
                  },
                  " ",
                  a.value
                ),
                a.sortable
                  ? e.createElement(
                      e.Fragment,
                      null,
                      h.includes(l)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : e.createElement(c, { className: "n-action-icon" })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : e.createElement(r, { className: "n-action-icon" })
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
        o.map((a, l) => {
          return e.createElement(
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
              t.onRowClick
                ? {
                    onClick:
                      ((c = l),
                      () => {
                        var e;
                        null === (e = t.onRowClick) ||
                          void 0 === e ||
                          e.call(t, c);
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
                    { className: "n-table-checbox-wrapper" },
                    e.createElement(n, {
                      id: `n-row-checkbox-${l}`,
                      value: a.isChecked,
                      onChange: (e) =>
                        ((e, a) => {
                          var l;
                          let c = [...o];
                          (c[a].isChecked = e),
                            null === (l = t.getCheckedItems) ||
                              void 0 === l ||
                              l.call(t, c);
                        })(e, l),
                      checkboxValue: a.isChecked,
                    })
                  )
                )
              : e.createElement(e.Fragment, null),
            s.map((t, c) =>
              e.createElement(
                "td",
                {
                  className: "n-row-data " + (d ? "" : "n-table-no-divider"),
                  "data-testid": `n-row-data-${l}-${c}`,
                  key: `n-row-data-${l}-${c}`,
                },
                a[t.name]
              )
            )
          );
          var c;
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
                  colSpan: t.checkable ? 1 + s.length : s.length,
                  "data-testid": "footer-data",
                },
                t.footer
              )
            )
          )
        : null
    )
  );
};
o.defaultProps = {
  id: `nitrozen-dialog-${l()}`,
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
};
var s = t(o);
export { s as default };
//# sourceMappingURL=Table.js.map
