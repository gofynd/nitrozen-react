import e, { useState as t } from "react";
import {
  SvgIcChevronLeft as a,
  SvgIcChevronUp as n,
  SvgIcChevronDown as i,
  SvgIcChevronRight as r,
} from "../../assets/svg-components/Nitrozen/index.js";
import "./DatePicker.scss.js";
import {
  months as l,
  years as c,
  areDatesSame as d,
} from "../../utils/dateHandler.js";
const m = (m) => {
  const {
      dateVal: s,
      rangeConfig: o,
      onDateClick: p,
      isRange: k,
      from: g,
      to: u,
      calendar: v,
      selectedMonth: h,
      selectedYear: $,
      monthHandler: E,
      yearHandler: w,
      handleNextButtonClicked: y,
      handlePreviousButtonClicked: D,
      calendarId: N,
    } = m,
    [f, C] = t([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [T, b] = t(!1),
    [x, H] = t(!1),
    j = (e) => {
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
        s)
      ) {
        let e = new Date(s);
        (t = e.getMonth()), (a = e.getFullYear()), (n = e.getDate());
      }
      if (h == l[t] && a == $ && e.value == n && !k)
        return "n-picker-calendar-griditem-selected";
      if (k) {
        let t = "",
          a = l.findIndex((e) => e == h) + 1;
        a = a < 10 ? `0${a}` : a;
        let n = `${a}/${e.value}/${$}`,
          r = new Date(g);
        r.setHours(0, 0, 0, 0);
        let c = new Date(u);
        c.setHours(0, 0, 0, 0),
          g &&
            new Date(n).getTime() == new Date(r).getTime() &&
            ((t += " n-picker-calendar-griditem-rangestart"),
            (i = i.replace("n-picker-calendar-griditem-hover", "")),
            (i = i.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            u &&
            new Date(n).getTime() == new Date(c).getTime() &&
            ((t += " n-picker-calendar-griditem-rangeend"),
            (i = i.replace("n-picker-calendar-griditem-hover", "")),
            (i = i.replace("n-picker-calendar-griditem-today", ""))),
          t &&
            d(null == o ? void 0 : o.start, null == o ? void 0 : o.end) &&
            ((t += " n-picker-calendar-griditem-rangesame"),
            (i = i.replace("n-picker-calendar-griditem-hover", "")),
            (i = i.replace("n-picker-calendar-griditem-today", ""))),
          !t &&
            g &&
            u &&
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
          "data-testid": `previous-click-${N}`,
          className: "n-picker-toggle-icon",
          onClick: () => {
            null == D || D();
          },
        },
        e.createElement(a, null)
      ),
      h &&
        $ &&
        e.createElement(
          "div",
          { className: "n-picker-month-year" },
          e.createElement(
            "div",
            {
              "data-testid": `selected-month-${N}`,
              className: "n-picker-btn " + (T ? "n-picker-btn-active" : ""),
              onClick: () => {
                b(!T), H(!1);
              },
            },
            h.slice(0, 3),
            e.createElement(
              "span",
              null,
              T ? e.createElement(n, null) : e.createElement(i, null)
            )
          ),
          e.createElement(
            "div",
            {
              "data-testid": `selected-year-${N}`,
              className: "n-picker-btn " + (x ? "n-picker-btn-active" : ""),
              onClick: () => {
                H(!x), b(!1);
              },
            },
            $,
            e.createElement(
              "span",
              null,
              x ? e.createElement(n, null) : e.createElement(i, null)
            )
          )
        ),
      e.createElement(
        "div",
        {
          "data-testid": `next-click-${N}`,
          className: "n-picker-toggle-icon",
          onClick: () => (null == y ? void 0 : y()),
        },
        e.createElement(r, null)
      )
    ),
    e.createElement(
      "div",
      { className: "n-picker-day-row" },
      f.map((t, a) =>
        e.createElement(
          "span",
          { key: `day-${a}`, "data-testid": `day-${a}-${N}` },
          t.name
        )
      )
    ),
    e.createElement(
      "div",
      { className: "n-picker-calendar-grid" },
      v &&
        v.length &&
        v.map((t, a) =>
          e.createElement(
            "div",
            {
              className:
                "n-picker-calendar-griditem " +
                (t.isDisabled ? "n-picker-calendar-griditem-disabled" : ""),
              "data-testid": `calendar-griditem-${a}-${N}`,
              key: `calendar-griditem-${a}`,
              onClick: () => {
                0 === t.value ||
                  t.isDisabled ||
                  ((e) => {
                    const t = e.value < 10 ? "0" + e.value : e.value;
                    let a = l.findIndex((e) => e == h) + 1;
                    a < 10 && (a = "0" + a), p(`${a}/${t}/${$}`);
                  })(t);
              },
            },
            e.createElement(
              "div",
              { className: `${j(t)}`, key: `calendar-griditem-value-${a}` },
              0 !== t.value && t.value
            )
          )
        )
    ),
    T &&
      e.createElement(
        "div",
        {
          "data-testid": `month-dropdown-${N}`,
          id: `month-dropdown-${N}`,
          className:
            "n-picker-monthlist " +
            (k ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        l.map((t, a) =>
          e.createElement(
            "div",
            {
              id: `month-row-${a}-${N}`,
              "data-testid": `month-item-${a}-${N}`,
              key: `month-item-${a}`,
              className:
                "n-picker-monthlist-item " +
                (h == t ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  E(e), b(!1);
                })(a + 1),
            },
            t
          )
        )
      ),
    x &&
      e.createElement(
        "div",
        {
          "data-testid": `year-dropdown-${N}`,
          className:
            "n-picker-monthlist " +
            (k ? "n-picker-monthlist-semiwidth" : "n-picker-monthlist-width"),
        },
        c.map((t, a) =>
          e.createElement(
            "div",
            {
              id: `year-row-${a}`,
              "data-testid": `year-item-${a}-${N}`,
              key: `year-item-${a}`,
              className:
                "n-picker-monthlist-item " +
                ($ == t ? "n-picker-monthlist-selected" : ""),
              onClick: () =>
                ((e) => {
                  w(e), H(!1);
                })(t),
            },
            t
          )
        )
      )
  );
};
m.defaulProps = { dateVal: "", from: "", to: "" };
var s = e.memo(m);
export { s as default };
//# sourceMappingURL=Calendar.js.map
