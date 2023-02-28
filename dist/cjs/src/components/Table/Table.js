"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js");
require("./Table.scss.js");
var a = require("../../assets/svg-components/Nitrozen/index.js"),
  l = require("../Checkbox/Checkbox.js");
function c(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = c(e);
const n = (t) => {
  const { id: c, tableRow: n, tableHeader: o } = t,
    [d, s] = e.useState([]),
    u = (e) => () => {
      var a;
      null === (a = t.onRowClick) || void 0 === a || a.call(t, e);
    };
  return r.default.createElement(
    "div",
    { className: "n-table", "data-testid": `table-${c}` },
    r.default.createElement(
      "table",
      { className: "n-main-table" },
      r.default.createElement(
        "thead",
        null,
        r.default.createElement(
          "tr",
          { className: "n-table-header-tr" },
          t.checkable
            ? r.default.createElement(
                "th",
                { className: "n-table-header-checkbox" },
                r.default.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  r.default.createElement(l, {
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
            : r.default.createElement(r.default.Fragment, null),
          o.map((e, l) =>
            r.default.createElement(
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
                    let t = o[e],
                      a = [...d];
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
              r.default.createElement(
                "div",
                { className: "n-th-parent" },
                r.default.createElement(
                  "span",
                  {
                    className: "n-table-header-text",
                    "data-testid": `header-value-${l}`,
                  },
                  " ",
                  e.value
                ),
                e.sortable
                  ? r.default.createElement(
                      r.default.Fragment,
                      null,
                      d.includes(l)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : r.default.createElement(a.SvgIcChevronDown, {
                              className: "n-action-icon",
                            })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : r.default.createElement(a.SvgIcChevronRight, {
                            className: "n-action-icon",
                          })
                    )
                  : r.default.createElement(r.default.Fragment, null)
              )
            )
          )
        )
      ),
      r.default.createElement(
        "tbody",
        null,
        n.map((e, a) =>
          r.default.createElement(
            "tr",
            Object.assign(
              {
                "data-testid": `row-${a}`,
                className: `n-table-row-item ${
                  t.footer ? "" : "n-table-row-item-nofooter"
                } ${"zebra" == t.rowStyle ? "n-table-row-zebra" : ""} ${
                  t.checkable ? "n-table-row-item-checkbox" : ""
                } ${t.onRowClick ? "n-table-row-item-clickable" : ""}`,
                key: `row-${a}`,
              },
              t.onRowClick ? { onClick: u(a) } : {}
            ),
            t.checkable
              ? r.default.createElement(
                  "td",
                  { className: "n-row-data" },
                  r.default.createElement(
                    "div",
                    { className: "n-table-checbox-wrapper" },
                    r.default.createElement(l, {
                      id: `n-row-checkbox-${a}`,
                      value: e.isChecked,
                      onChange: (e) =>
                        ((e, a) => {
                          var l;
                          let c = [...n];
                          (c[a].isChecked = e),
                            null === (l = t.getCheckedItems) ||
                              void 0 === l ||
                              l.call(t, c);
                        })(e, a),
                      checkboxValue: e.isChecked,
                    })
                  )
                )
              : r.default.createElement(r.default.Fragment, null),
            o.map((t, l) =>
              r.default.createElement(
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
      ),
      t.footer
        ? r.default.createElement(
            "tfoot",
            null,
            r.default.createElement(
              "tr",
              { className: "n-table-footer" },
              r.default.createElement(
                "td",
                {
                  colSpan: t.checkable ? 1 + o.length : o.length,
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
var o = e.memo(n);
module.exports = o;
//# sourceMappingURL=Table.js.map
