"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js");
require("./Table.scss.js");
var a = require("../../assets/svg-components/Hardware/index.js"),
  l = require("../Checkbox/Checkbox.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = r(e);
const n = (t) => {
  const { id: r, tableRow: n, tableHeader: d } = t,
    [o, s] = e.useState([]);
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
          t.checkable
            ? c.default.createElement(
                "th",
                { className: "n-table-header-checkbox" },
                c.default.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  c.default.createElement(l, {
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
                  backgroundColor: t.headerBackground,
                },
                onClick: () =>
                  ((e) => {
                    let t = d[e],
                      a = [...o];
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
                    s(a);
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
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : c.default.createElement(a.SvgKeyboardArrowDown, {
                              className: "n-action-icon",
                            })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : c.default.createElement(a.SvgKeyboardArrowRight, {
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
        n.map((e, a) =>
          c.default.createElement(
            "tr",
            {
              "data-testid": `row-${a}`,
              className: `n-table-row-item ${
                t.footer ? "" : "n-table-row-item-nofooter"
              } ${"zebra" == t.rowStyle ? "n-table-row-zebra" : ""} ${
                t.checkable ? "n-table-row-item-checkbox" : ""
              }`,
              key: `row-${a}`,
            },
            t.checkable
              ? c.default.createElement(
                  "td",
                  { className: "n-row-data" },
                  c.default.createElement(
                    "div",
                    { className: "n-table-checbox-wrapper" },
                    c.default.createElement(l, {
                      id: `n-row-checkbox-${a}`,
                      value: e.isChecked,
                      onChange: (e) =>
                        ((e, a) => {
                          var l;
                          let r = [...n];
                          (r[a].isChecked = e),
                            null === (l = t.getCheckedItems) ||
                              void 0 === l ||
                              l.call(t, r);
                        })(e, a),
                      checkboxValue: e.isChecked,
                    })
                  )
                )
              : c.default.createElement(c.default.Fragment, null),
            d.map(
              (t, l) => (
                console.log(e[t.name], "rowItem[headerElement.name]}"),
                c.default.createElement(
                  "td",
                  {
                    className: "n-row-data",
                    "data-testid": `n-row-data-${a}-${l}`,
                    key: `n-row-data-${a}-${l}`,
                  },
                  e[t.name]
                )
              )
            )
          )
        )
      ),
      t.footer
        ? c.default.createElement(
            "tfoot",
            null,
            c.default.createElement(
              "tr",
              { className: "n-table-footer" },
              c.default.createElement(
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
    )
  );
};
n.defaultProps = {
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
};
var d = e.memo(n);
module.exports = d;
//# sourceMappingURL=Table.js.map
