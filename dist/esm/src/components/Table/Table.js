import e, { memo as t, useState as a } from "react";
import l from "../../utils/uuids.js";
import "./Table.scss.js";
import {
  SvgKeyboardArrowDown as r,
  SvgKeyboardArrowRight as c,
} from "../../assets/svg-components/Hardware/index.js";
import n from "../Checkbox/Checkbox.js";
const o = (t) => {
  const { id: l, tableRow: o, tableHeader: m } = t,
    [s, d] = a([]);
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
          t.checkable
            ? e.createElement(
                "th",
                { className: "n-table-header-checkbox" },
                e.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  e.createElement(n, {
                    id: "header-checkbox",
                    value: t.allChecked,
                    onChange: (e) => {
                      var a;
                      return null === (a = t.allCheckClicked) || void 0 === a
                        ? void 0
                        : a.call(t, e);
                    },
                    checkboxValue: t.allChecked,
                  })
                )
              )
            : e.createElement(e.Fragment, null),
          m.map((a, l) =>
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
                    let t = m[e],
                      a = [...s];
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
                    d(a);
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
                      s.includes(l)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : e.createElement(r, { className: "n-action-icon" })
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
        o.map((a, l) =>
          e.createElement(
            "tr",
            {
              "data-testid": `row-${l}`,
              className: `n-table-row-item ${
                t.footer ? "" : "n-table-row-item-nofooter"
              } ${"zebra" == t.rowStyle ? "n-table-row-zebra" : ""} ${
                t.checkable ? "n-table-row-item-checkbox" : ""
              }`,
              key: `row-${l}`,
            },
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
                          let r = [...o];
                          (r[a].isChecked = e),
                            null === (l = t.getCheckedItems) ||
                              void 0 === l ||
                              l.call(t, r);
                        })(e, l),
                      checkboxValue: a.isChecked,
                    })
                  )
                )
              : e.createElement(e.Fragment, null),
            m.map(
              (t, r) => (
                console.log(a[t.name], "rowItem[headerElement.name]}"),
                e.createElement(
                  "td",
                  {
                    className: "n-row-data",
                    "data-testid": `n-row-data-${l}-${r}`,
                    key: `n-row-data-${l}-${r}`,
                  },
                  a[t.name]
                )
              )
            )
          )
        )
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
                  colSpan: t.checkable ? 1 + m.length : m.length,
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
};
var m = t(o);
export { m as default };
//# sourceMappingURL=Table.js.map
