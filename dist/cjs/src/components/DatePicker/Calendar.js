"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Nitrozen/index.js");
require("./DatePicker.scss.js");
var a = require("../../utils/dateHandler.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = n(e);
const i = (n) => {
  const {
      dateVal: i,
      rangeConfig: l,
      onDateClick: d,
      isRange: c,
      from: m,
      to: s,
      calendar: o,
      selectedMonth: u,
      selectedYear: p,
      monthHandler: k,
      yearHandler: g,
      handleNextButtonClicked: v,
      handlePreviousButtonClicked: h,
      calendarId: f,
    } = n,
    [$, w] = e.useState([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [y, E] = e.useState(!1),
    [D, C] = e.useState(!1),
    N = (e) => {
      let t,
        n,
        r,
        d = "";
      if (
        ((d +=
          0 === e.value || e.inRange
            ? ""
            : " n-picker-calendar-griditem-hover"),
        (d += e.isDisabled ? " n-picker-calendar-griditem-disabled" : ""),
        (d += e.isToday ? " n-picker-calendar-griditem-today" : ""),
        i)
      ) {
        let e = new Date(i);
        (t = e.getMonth()), (n = e.getFullYear()), (r = e.getDate());
      }
      if (u == a.months[t] && n == p && e.value == r && !c)
        return "n-picker-calendar-griditem-selected";
      if (c) {
        let t = "",
          n = a.months.findIndex((e) => e == u) + 1;
        n = n < 10 ? `0${n}` : n;
        let r = `${n}/${e.value}/${p}`,
          i = new Date(m);
        i.setHours(0, 0, 0, 0);
        let c = new Date(s);
        c.setHours(0, 0, 0, 0),
          m &&
            new Date(r).getTime() == new Date(i).getTime() &&
            ((t += " n-picker-calendar-griditem-rangestart"),
            (d = d.replace("n-picker-calendar-griditem-hover", "")),
            (d = d.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            s &&
            new Date(r).getTime() == new Date(c).getTime() &&
            ((t += " n-picker-calendar-griditem-rangeend"),
            (d = d.replace("n-picker-calendar-griditem-hover", "")),
            (d = d.replace("n-picker-calendar-griditem-today", ""))),
          t &&
            a.areDatesSame(
              null == l ? void 0 : l.start,
              null == l ? void 0 : l.end
            ) &&
            ((t += " n-picker-calendar-griditem-rangesame"),
            (d = d.replace("n-picker-calendar-griditem-hover", "")),
            (d = d.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            m &&
            s &&
            new Date(r).getTime() < new Date(c).getTime() &&
            new Date(r).getTime() > new Date(i).getTime() &&
            ((t += " n-picker-calendar-griditem-range"),
            (d = d.replace("n-picker-calendar-griditem-today", "")),
            (d = d.replace("n-picker-calendar-griditem-hover", ""))),
          (d += t);
      }
      return d;
    };
  return r.default.createElement(
    "div",
    { className: "n-picker-calendar-wrapper" },
    r.default.createElement(
      "div",
      { className: "n-picker-my-wrapper" },
      r.default.createElement(
        "div",
        {
          "data-testid": `previous-click-${f}`,
          className: "n-picker-toggle-icon",
          onClick: () => {
            null == h || h();
          },
        },
        r.default.createElement(t.SvgIcChevronLeft, null)
      ),
      u &&
        p &&
        r.default.createElement(
          "div",
          { className: "n-picker-month-year" },
          r.default.createElement(
            "div",
            {
              "data-testid": `selected-month-${f}`,
              className: "n-picker-btn " + (y ? "n-picker-btn-active" : ""),
              onClick: () => {
                E(!y), C(!1);
              },
            },
            u.slice(0, 3),
            r.default.createElement(
              "span",
              null,
              y
                ? r.default.createElement(t.SvgIcChevronUp, null)
                : r.default.createElement(t.SvgIcChevronDown, null)
            )
          ),
          r.default.createElement(
            "div",
            {
              "data-testid": `selected-year-${f}`,
              className: "n-picker-btn " + (D ? "n-picker-btn-active" : ""),
              onClick: () => {
                C(!D), E(!1);
              },
            },
            p,
            r.default.createElement(
              "span",
              null,
              D
                ? r.default.createElement(t.SvgIcChevronUp, null)
                : r.default.createElement(t.SvgIcChevronDown, null)
            )
          )
        ),
      r.default.createElement(
        "div",
        {
          "data-testid": `next-click-${f}`,
          className: "n-picker-toggle-icon",
          onClick: () => (null == v ? void 0 : v()),
        },
        r.default.createElement(t.SvgIcChevronRight, null)
      )
    ),
    r.default.createElement(
      "div",
      { className: "n-picker-day-row" },
      $.map((e, t) =>
        r.default.createElement(
          "span",
          { key: `day-${t}`, "data-testid": `day-${t}-${f}` },
          e.name
        )
      )
    ),
    r.default.createElement(
      "div",
      { className: "n-picker-calendar-grid" },
      o &&
        o.length &&
        o.map((e, t) =>
          r.default.createElement(
            "div",
            {
              className:
                "n-picker-calendar-griditem " +
                (e.isDisabled ? "n-picker-calendar-griditem-disabled" : ""),
              "data-testid": `calendar-griditem-${t}-${f}`,
              key: `calendar-griditem-${t}`,
              onClick: () => {
                0 === e.value ||
                  e.isDisabled ||
                  ((e) => {
                    const t = e.value < 10 ? "0" + e.value : e.value;
                    let n = a.months.findIndex((e) => e == u) + 1;
                    n < 10 && (n = "0" + n), d(`${n}/${t}/${p}`);
                  })(e);
              },
            },
            r.default.createElement(
              "div",
              { className: `${N(e)}`, key: `calendar-griditem-value-${t}` },
              0 !== e.value && e.value
            )
          )
        )
    ),
    y &&
      r.default.createElement(
        "div",
        {
          "data-testid": `month-dropdown-${f}`,
          id: `month-dropdown-${f}`,
          className:
            "n-picker-monthlist " +
            (c ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        a.months.map((e, t) =>
          r.default.createElement(
            "div",
            {
              id: `month-row-${t}-${f}`,
              "data-testid": `month-item-${t}-${f}`,
              key: `month-item-${t}`,
              className:
                "n-picker-monthlist-item " +
                (u == e ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  k(e), E(!1);
                })(t + 1),
            },
            e
          )
        )
      ),
    D &&
      r.default.createElement(
        "div",
        {
          "data-testid": `year-dropdown-${f}`,
          className:
            "n-picker-monthlist " +
            (c ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        a.years.map((e, t) =>
          r.default.createElement(
            "div",
            {
              id: `year-row-${t}`,
              "data-testid": `year-item-${t}-${f}`,
              key: `year-item-${t}`,
              className:
                "n-picker-monthlist-item " +
                (p == e ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  g(e), C(!1);
                })(e),
            },
            e
          )
        )
      )
  );
};
i.defaulProps = { dateVal: "", from: "", to: "" };
var l = r.default.memo(i);
module.exports = l;
//# sourceMappingURL=Calendar.js.map
