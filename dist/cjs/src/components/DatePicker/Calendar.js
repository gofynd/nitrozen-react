"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Nitrozen/index.js");
require("./DatePicker.scss.js");
var a = require("../../utils/dateHandler.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var l = n(e);
const i = (n) => {
  const {
      dateVal: i,
      onDateClick: r,
      isRange: d,
      from: c,
      to: m,
      calendar: s,
      selectedMonth: o,
      selectedYear: u,
      monthHandler: p,
      yearHandler: k,
      handleNextButtonClicked: v,
      handlePreviousButtonClicked: g,
      calendarId: h,
    } = n,
    [f, $] = e.useState([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [w, E] = e.useState(!1),
    [y, D] = e.useState(!1),
    N = (e) => {
      let t,
        n,
        l,
        r = "";
      if (
        ((r +=
          0 === e.value || e.inRange
            ? ""
            : " n-picker-calendar-griditem-hover"),
        (r += e.isDisabled ? " n-picker-calendar-griditem-disabled" : ""),
        (r += e.isToday ? " n-picker-calendar-griditem-today" : ""),
        i)
      ) {
        let e = new Date(i);
        (t = e.getMonth()), (n = e.getFullYear()), (l = e.getDate());
      }
      if (o == a.months[t] && n == u && e.value == l && !d)
        return "n-picker-calendar-griditem-selected";
      if (d) {
        let t = "",
          n = a.months.findIndex((e) => e == o) + 1;
        n = n < 10 ? `0${n}` : n;
        let l = `${n}/${e.value}/${u}`,
          i = new Date(c);
        i.setHours(0, 0, 0, 0);
        let d = new Date(m);
        d.setHours(0, 0, 0, 0),
          c &&
            new Date(l).getTime() == new Date(i).getTime() &&
            ((t += " n-picker-calendar-griditem-rangestart"),
            (r = r.replace("n-picker-calendar-griditem-hover", "")),
            (r = r.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            m &&
            new Date(l).getTime() == new Date(d).getTime() &&
            ((t += " n-picker-calendar-griditem-rangeend"),
            (r = r.replace("n-picker-calendar-griditem-hover", "")),
            (r = r.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            c &&
            m &&
            new Date(l).getTime() < new Date(d).getTime() &&
            new Date(l).getTime() > new Date(i).getTime() &&
            ((t += " n-picker-calendar-griditem-range"),
            (r = r.replace("n-picker-calendar-griditem-today", "")),
            (r = r.replace("n-picker-calendar-griditem-hover", ""))),
          (r += t);
      }
      return r;
    };
  return l.default.createElement(
    "div",
    { className: "n-picker-calendar-wrapper" },
    l.default.createElement(
      "div",
      { className: "n-picker-my-wrapper" },
      l.default.createElement(
        "div",
        {
          "data-testid": `previous-click-${h}`,
          className: "n-picker-toggle-icon",
          onClick: () => {
            null == g || g();
          },
        },
        l.default.createElement(t.SvgIcChevronLeft, null)
      ),
      o &&
        u &&
        l.default.createElement(
          "div",
          { className: "n-picker-month-year" },
          l.default.createElement(
            "div",
            {
              "data-testid": `selected-month-${h}`,
              className: "n-picker-btn " + (w ? "n-picker-btn-active" : ""),
              onClick: () => {
                E(!w), D(!1);
              },
            },
            o.slice(0, 3),
            l.default.createElement(
              "span",
              null,
              w
                ? l.default.createElement(t.SvgIcChevronUp, null)
                : l.default.createElement(t.SvgIcChevronDown, null)
            )
          ),
          l.default.createElement(
            "div",
            {
              "data-testid": `selected-year-${h}`,
              className: "n-picker-btn " + (y ? "n-picker-btn-active" : ""),
              onClick: () => {
                D(!y), E(!1);
              },
            },
            u,
            l.default.createElement(
              "span",
              null,
              y
                ? l.default.createElement(t.SvgIcChevronUp, null)
                : l.default.createElement(t.SvgIcChevronDown, null)
            )
          )
        ),
      l.default.createElement(
        "div",
        {
          "data-testid": `next-click-${h}`,
          className: "n-picker-toggle-icon",
          onClick: () => (null == v ? void 0 : v()),
        },
        l.default.createElement(t.SvgIcChevronRight, null)
      )
    ),
    l.default.createElement(
      "div",
      { className: "n-picker-day-row" },
      f.map((e, t) =>
        l.default.createElement(
          "span",
          { key: `day-${t}`, "data-testid": `day-${t}-${h}` },
          e.name
        )
      )
    ),
    l.default.createElement(
      "div",
      { className: "n-picker-calendar-grid" },
      s &&
        s.length &&
        s.map((e, t) =>
          l.default.createElement(
            "div",
            {
              className:
                "n-picker-calendar-griditem " +
                (e.isDisabled ? "n-picker-calendar-griditem-disabled" : ""),
              "data-testid": `calendar-griditem-${t}-${h}`,
              key: `calendar-griditem-${t}`,
              onClick: () => {
                0 === e.value ||
                  e.isDisabled ||
                  ((e) => {
                    const t = e.value < 10 ? "0" + e.value : e.value;
                    let n = a.months.findIndex((e) => e == o) + 1;
                    n < 10 && (n = "0" + n), r(`${n}/${t}/${u}`);
                  })(e);
              },
            },
            l.default.createElement(
              "div",
              { className: `${N(e)}`, key: `calendar-griditem-value-${t}` },
              0 !== e.value && e.value
            )
          )
        )
    ),
    w &&
      l.default.createElement(
        "div",
        {
          "data-testid": `month-dropdown-${h}`,
          id: `month-dropdown-${h}`,
          className:
            "n-picker-monthlist " +
            (d ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        a.months.map((e, t) =>
          l.default.createElement(
            "div",
            {
              id: `month-row-${t}-${h}`,
              "data-testid": `month-item-${t}-${h}`,
              key: `month-item-${t}`,
              className:
                "n-picker-monthlist-item " +
                (o == e ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  p(e), E(!1);
                })(t + 1),
            },
            e
          )
        )
      ),
    y &&
      l.default.createElement(
        "div",
        {
          "data-testid": `year-dropdown-${h}`,
          className:
            "n-picker-monthlist " +
            (d ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        a.years.map((e, t) =>
          l.default.createElement(
            "div",
            {
              id: `year-row-${t}`,
              "data-testid": `year-item-${t}-${h}`,
              key: `year-item-${t}`,
              className:
                "n-picker-monthlist-item " +
                (u == e ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  k(e), D(!1);
                })(e),
            },
            e
          )
        )
      )
  );
};
i.defaulProps = { dateVal: "", from: "", to: "" };
var r = l.default.memo(i);
module.exports = r;
//# sourceMappingURL=Calendar.js.map
