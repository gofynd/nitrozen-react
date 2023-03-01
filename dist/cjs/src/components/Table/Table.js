"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js");
require("./Table.scss.js");
var a = require("../../assets/svg-components/Nitrozen/index.js"),
  l = require("../Checkbox/Checkbox.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = r(e);
const n = (t) => {
  const {
      id: r,
      tableRow: n,
      tableHeader: o,
      showColumnDivider: d,
      customStyle: s,
      customClassName: u,
    } = t,
    [m, i] = e.useState([]),
    h = (e) => () => {
      var a;
      null === (a = t.onRowClick) || void 0 === a || a.call(t, e);
    };
  return c.default.createElement(
    "div",
    {
      className: `n-table ${u || ""}`,
      "data-testid": `table-${r}`,
      style: null != s ? s : {},
    },
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
                {
                  className: "n-table-header-checkbox",
                  style: { backgroundColor: t.headerBackground },
                },
                c.default.createElement(
                  "div",
                  { className: "n-table-checbox-wrapper" },
                  c.default.createElement(l, {
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
            : c.default.createElement(c.default.Fragment, null),
          o.map((e, l) =>
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
                    let t = o[e],
                      a = [...m];
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
                    i(a);
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
                      m.includes(l)
                        ? t.customSortIcon
                          ? t.customSortIcon
                          : c.default.createElement(a.SvgIcChevronDown, {
                              className: "n-action-icon",
                            })
                        : t.customSortIcon
                        ? t.customSortIcon
                        : c.default.createElement(a.SvgIcChevronRight, {
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
              t.onRowClick ? { onClick: h(a) } : {}
            ),
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
            o.map((t, l) =>
              c.default.createElement(
                "td",
                {
                  className: "n-row-data " + (d ? "" : "n-table-no-divider"),
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
        ? c.default.createElement(
            "tfoot",
            null,
            c.default.createElement(
              "tr",
              { className: "n-table-footer" },
              c.default.createElement(
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
  showColumnDivider: !0,
};
var o = e.memo(n);
module.exports = o;
//# sourceMappingURL=Table.js.map
