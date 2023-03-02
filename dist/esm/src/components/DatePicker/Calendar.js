import e, { useState as t } from "react";
import {
  SvgIcChevronLeft as a,
  SvgIcChevronUp as n,
  SvgIcChevronDown as i,
  SvgIcChevronRight as r,
} from "../../assets/svg-components/Nitrozen/index.js";
import "./DatePicker.scss.js";
import { months as l, years as c } from "../../utils/dateHandler.js";
const d = (d) => {
  const {
      dateVal: m,
      onDateClick: s,
      isRange: o,
      from: p,
      to: k,
      calendar: g,
      selectedMonth: u,
      selectedYear: v,
      monthHandler: h,
      yearHandler: $,
      handleNextButtonClicked: E,
      handlePreviousButtonClicked: w,
      calendarId: y,
    } = d,
    [D, N] = t([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [f, T] = t(!1),
    [C, b] = t(!1),
    x = (e) => {
      let t,
        a,
        n,
        i = "";
      if (
        ((i +=
          0 === e.value || e.inRange
            ? ""
            : " n-picker-calendar-griditem-hover"),
        (i += e.isDisabled ? " n-picker-calendar-griditem-disabled" : ""),
        (i += e.isToday ? " n-picker-calendar-griditem-today" : ""),
        m)
      ) {
        let e = new Date(m);
        (t = e.getMonth()), (a = e.getFullYear()), (n = e.getDate());
      }
      if (u == l[t] && a == v && e.value == n && !o)
        return "n-picker-calendar-griditem-selected";
      if (o) {
        let t = "",
          a = l.findIndex((e) => e == u) + 1;
        a = a < 10 ? `0${a}` : a;
        let n = `${a}/${e.value}/${v}`,
          r = new Date(p);
        r.setHours(0, 0, 0, 0);
        let c = new Date(k);
        c.setHours(0, 0, 0, 0),
          p &&
            new Date(n).getTime() == new Date(r).getTime() &&
            ((t += " n-picker-calendar-griditem-rangestart"),
            (i = i.replace("n-picker-calendar-griditem-hover", "")),
            (i = i.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            k &&
            new Date(n).getTime() == new Date(c).getTime() &&
            ((t += " n-picker-calendar-griditem-rangeend"),
            (i = i.replace("n-picker-calendar-griditem-hover", "")),
            (i = i.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            p &&
            k &&
            new Date(n).getTime() < new Date(c).getTime() &&
            new Date(n).getTime() > new Date(r).getTime() &&
            ((t += " n-picker-calendar-griditem-range"),
            (i = i.replace("n-picker-calendar-griditem-today", "")),
            (i = i.replace("n-picker-calendar-griditem-hover", ""))),
          (i += t);
      }
      return i;
    };
  return e.createElement(
    "div",
    { className: "n-picker-calendar-wrapper" },
    e.createElement(
      "div",
      { className: "n-picker-my-wrapper" },
      e.createElement(
        "div",
        {
          "data-testid": `previous-click-${y}`,
          className: "n-picker-toggle-icon",
          onClick: () => {
            null == w || w();
          },
        },
        e.createElement(a, null)
      ),
      u &&
        v &&
        e.createElement(
          "div",
          { className: "n-picker-month-year" },
          e.createElement(
            "div",
            {
              "data-testid": `selected-month-${y}`,
              className: "n-picker-btn " + (f ? "n-picker-btn-active" : ""),
              onClick: () => {
                T(!f), b(!1);
              },
            },
            u.slice(0, 3),
            e.createElement(
              "span",
              null,
              f ? e.createElement(n, null) : e.createElement(i, null)
            )
          ),
          e.createElement(
            "div",
            {
              "data-testid": `selected-year-${y}`,
              className: "n-picker-btn " + (C ? "n-picker-btn-active" : ""),
              onClick: () => {
                b(!C), T(!1);
              },
            },
            v,
            e.createElement(
              "span",
              null,
              C ? e.createElement(n, null) : e.createElement(i, null)
            )
          )
        ),
      e.createElement(
        "div",
        {
          "data-testid": `next-click-${y}`,
          className: "n-picker-toggle-icon",
          onClick: () => (null == E ? void 0 : E()),
        },
        e.createElement(r, null)
      )
    ),
    e.createElement(
      "div",
      { className: "n-picker-day-row" },
      D.map((t, a) =>
        e.createElement(
          "span",
          { key: `day-${a}`, "data-testid": `day-${a}-${y}` },
          t.name
        )
      )
    ),
    e.createElement(
      "div",
      { className: "n-picker-calendar-grid" },
      g &&
        g.length &&
        g.map((t, a) =>
          e.createElement(
            "div",
            {
              className:
                "n-picker-calendar-griditem " +
                (t.isDisabled ? "n-picker-calendar-griditem-disabled" : ""),
              "data-testid": `calendar-griditem-${a}-${y}`,
              key: `calendar-griditem-${a}`,
              onClick: () => {
                0 === t.value ||
                  t.isDisabled ||
                  ((e) => {
                    const t = e.value < 10 ? "0" + e.value : e.value;
                    let a = l.findIndex((e) => e == u) + 1;
                    a < 10 && (a = "0" + a), s(`${a}/${t}/${v}`);
                  })(t);
              },
            },
            e.createElement(
              "div",
              { className: `${x(t)}`, key: `calendar-griditem-value-${a}` },
              0 !== t.value && t.value
            )
          )
        )
    ),
    f &&
      e.createElement(
        "div",
        {
          "data-testid": `month-dropdown-${y}`,
          id: `month-dropdown-${y}`,
          className:
            "n-picker-monthlist " +
            (o ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        l.map((t, a) =>
          e.createElement(
            "div",
            {
              id: `month-row-${a}-${y}`,
              "data-testid": `month-item-${a}-${y}`,
              key: `month-item-${a}`,
              className:
                "n-picker-monthlist-item " +
                (u == t ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  h(e), T(!1);
                })(a + 1),
            },
            t
          )
        )
      ),
    C &&
      e.createElement(
        "div",
        {
          "data-testid": `year-dropdown-${y}`,
          className:
            "n-picker-monthlist " +
            (o ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        c.map((t, a) =>
          e.createElement(
            "div",
            {
              id: `year-row-${a}`,
              "data-testid": `year-item-${a}-${y}`,
              key: `year-item-${a}`,
              className:
                "n-picker-monthlist-item " +
                (v == t ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  $(e), b(!1);
                })(t),
            },
            t
          )
        )
      )
  );
};
d.defaulProps = { dateVal: "", from: "", to: "" };
var m = e.memo(d);
export { m as default };
//# sourceMappingURL=Calendar.js.map
