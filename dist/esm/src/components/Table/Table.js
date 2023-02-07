import e, { memo as a, useState as t } from "react";
import l from "../../utils/uuids.js";
import "./Table.scss.js";
import {
  SvgKeyboardArrowDown as c,
  SvgKeyboardArrowRight as r,
} from "../../assets/svg-components/Hardware/index.js";
import n from "../Checkbox/Checkbox.js";
const o = (a) => {
  const { id: l, tableRow: o, tableHeader: s } = a,
    [m, d] = t([]);
  return e.createElement(
    "div",
    { className: "n-table", "data-testid": `table-${l}` },
    e.createElement(
      "table",
      { className: "n-main-table" },
      e.createElement(
        "thead",
        null,
        e.createElement(
          "tr",
          { className: "n-table-header-tr" },
          a.checkable
            ? e.createElement(
                "th",
                { className: "n-table-header-checkbox" },
                e.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  e.createElement(n, {
                    id: "header-checkbox",
                    value: a.allChecked,
                    onChange: (e) => {
                      var t;
                      null === (t = a.allCheckClicked) ||
                        void 0 === t ||
                        t.call(a, e);
                    },
                    checkboxValue: a.allChecked,
                  })
                )
              )
            : e.createElement(e.Fragment, null),
          s.map((t, l) =>
            e.createElement(
              "th",
              {
                className:
                  "n-table-header " + (t.sortable ? "n-cursor-pointer" : ""),
                "data-testid": `n-table-header-${l}`,
                style: {
                  width: t.width ? t.width : "auto",
                  backgroundColor: a.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let a = s[e],
                      t = [...m];
                    if (t.includes(e)) {
                      let l = t.indexOf(e);
                      l > -1 &&
                        (t.splice(l, 1),
                        a.customSort({
                          sort: !1,
                          headerIndex: e,
                          headerName: a.name,
                        }));
                    } else
                      t.push(e),
                        a.customSort({
                          sort: !0,
                          headerIndex: e,
                          headerName: a.name,
                        });
                    d(t);
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
                  t.value
                ),
                t.sortable
                  ? e.createElement(
                      e.Fragment,
                      null,
                      m.includes(l)
                        ? a.customSortIcon
                          ? a.customSortIcon
                          : e.createElement(c, { className: "n-action-icon" })
                        : a.customSortIcon
                        ? a.customSortIcon
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
        o.map((t, l) => {
          return e.createElement(
            "tr",
            Object.assign(
              {
                "data-testid": `row-${l}`,
                className: `n-table-row-item ${
                  a.footer ? "" : "n-table-row-item-nofooter"
                } ${"zebra" == a.rowStyle ? "n-table-row-zebra" : ""} ${
                  a.checkable ? "n-table-row-item-checkbox" : ""
                } ${a.onRowClick ? "n-table-row-item-clickable" : ""}`,
                key: `row-${l}`,
              },
              a.onRowClick
                ? {
                    onClick:
                      ((c = l),
                      () => {
                        var e;
                        null === (e = a.onRowClick) ||
                          void 0 === e ||
                          e.call(a, c);
                      }),
                  }
                : {}
            ),
            a.checkable
              ? e.createElement(
                  "td",
                  { className: "n-row-data" },
                  e.createElement(
                    "div",
                    { className: "n-table-checbox-wrapper" },
                    e.createElement(n, {
                      id: `n-row-checkbox-${l}`,
                      value: t.isChecked,
                      onChange: (e) =>
                        ((e, t) => {
                          var l;
                          let c = [...o];
                          (c[t].isChecked = e),
                            null === (l = a.getCheckedItems) ||
                              void 0 === l ||
                              l.call(a, c);
                        })(e, l),
                      checkboxValue: t.isChecked,
                    })
                  )
                )
              : e.createElement(e.Fragment, null),
            s.map((a, c) =>
              e.createElement(
                "td",
                {
                  className: "n-row-data",
                  "data-testid": `n-row-data-${l}-${c}`,
                  key: `n-row-data-${l}-${c}`,
                },
                t[a.name]
              )
            )
          );
          var c;
        })
      ),
      a.footer
        ? e.createElement(
            "tfoot",
            null,
            e.createElement(
              "tr",
              { className: "n-table-footer" },
              e.createElement(
                "td",
                {
                  colSpan: a.checkable ? 1 + s.length : s.length,
                  "data-testid": "footer-data",
                },
                a.footer
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
};
var s = a(o);
export { s as default };
//# sourceMappingURL=Table.js.map
