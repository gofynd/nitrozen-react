"use strict";
var e = require("react"),
  a = require("../../utils/uuids.js");
require("./Table.scss.js");
var t = require("../../assets/svg-components/Hardware/index.js"),
  l = require("../Checkbox/Checkbox.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = r(e);
const n = (a) => {
  const { id: r, tableRow: n, tableHeader: d } = a,
    [o, s] = e.useState([]),
    u = (e) => () => {
      var t;
      null === (t = a.onRowClick) || void 0 === t || t.call(a, e);
    };
  return c.default.createElement(
    "div",
    { className: "n-table", "data-testid": `table-${r}` },
    c.default.createElement(
      "table",
      { className: "n-main-table" },
      c.default.createElement(
        "thead",
        null,
        c.default.createElement(
          "tr",
          { className: "n-table-header-tr" },
          a.checkable
            ? c.default.createElement(
                "th",
                { className: "n-table-header-checkbox" },
                c.default.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  c.default.createElement(l, {
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
            : c.default.createElement(c.default.Fragment, null),
          d.map((e, l) =>
            c.default.createElement(
              "th",
              {
                className:
                  "n-table-header " + (e.sortable ? "n-cursor-pointer" : ""),
                "data-testid": `n-table-header-${l}`,
                style: {
                  width: e.width ? e.width : "auto",
                  backgroundColor: a.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let a = d[e],
                      t = [...o];
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
                    s(t);
                  })(l),
                key: `n-table-header-${l}`,
              },
              c.default.createElement(
                "div",
                { className: "n-th-parent" },
                c.default.createElement(
                  "span",
                  {
                    className: "n-table-header-text",
                    "data-testid": `header-value-${l}`,
                  },
                  " ",
                  e.value
                ),
                e.sortable
                  ? c.default.createElement(
                      c.default.Fragment,
                      null,
                      o.includes(l)
                        ? a.customSortIcon
                          ? a.customSortIcon
                          : c.default.createElement(t.SvgKeyboardArrowDown, {
                              className: "n-action-icon",
                            })
                        : a.customSortIcon
                        ? a.customSortIcon
                        : c.default.createElement(t.SvgKeyboardArrowRight, {
                            className: "n-action-icon",
                          })
                    )
                  : c.default.createElement(c.default.Fragment, null)
              )
            )
          )
        )
      ),
      c.default.createElement(
        "tbody",
        null,
        n.map((e, t) =>
          c.default.createElement(
            "tr",
            Object.assign(
              {
                "data-testid": `row-${t}`,
                className: `n-table-row-item ${
                  a.footer ? "" : "n-table-row-item-nofooter"
                } ${"zebra" == a.rowStyle ? "n-table-row-zebra" : ""} ${
                  a.checkable ? "n-table-row-item-checkbox" : ""
                } ${a.onRowClick ? "n-table-row-item-clickable" : ""}`,
                key: `row-${t}`,
              },
              a.onRowClick ? { onClick: u(t) } : {}
            ),
            a.checkable
              ? c.default.createElement(
                  "td",
                  { className: "n-row-data" },
                  c.default.createElement(
                    "div",
                    { className: "n-table-checbox-wrapper" },
                    c.default.createElement(l, {
                      id: `n-row-checkbox-${t}`,
                      value: e.isChecked,
                      onChange: (e) =>
                        ((e, t) => {
                          var l;
                          let r = [...n];
                          (r[t].isChecked = e),
                            null === (l = a.getCheckedItems) ||
                              void 0 === l ||
                              l.call(a, r);
                        })(e, t),
                      checkboxValue: e.isChecked,
                    })
                  )
                )
              : c.default.createElement(c.default.Fragment, null),
            d.map((a, l) =>
              c.default.createElement(
                "td",
                {
                  className: "n-row-data",
                  "data-testid": `n-row-data-${t}-${l}`,
                  key: `n-row-data-${t}-${l}`,
                },
                e[a.name]
              )
            )
          )
        )
      ),
      a.footer
        ? c.default.createElement(
            "tfoot",
            null,
            c.default.createElement(
              "tr",
              { className: "n-table-footer" },
              c.default.createElement(
                "td",
                {
                  colSpan: a.checkable ? 1 + d.length : d.length,
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
n.defaultProps = {
  id: `nitrozen-dialog-${a()}`,
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
var d = e.memo(n);
module.exports = d;
//# sourceMappingURL=Table.js.map
