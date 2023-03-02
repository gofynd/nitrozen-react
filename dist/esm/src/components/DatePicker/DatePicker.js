import e, { useState as t, useRef as n, useEffect as a } from "react";
import { SvgIcClose as l } from "../../assets/svg-components/Nitrozen/index.js";
import "./DatePicker.scss.js";
import r from "./Calendar.js";
import o from "../Button/Button.js";
import {
  daysInMonth as i,
  months as d,
  getFormattedDate as c,
} from "../../utils/dateHandler.js";
const m = (m) => {
  const {
      dateVal: s,
      isRange: u,
      onDateClick: g,
      onClose: f,
      minDate: p,
      maxDate: h,
      rangeConfig: v,
      getRange: w,
      onConfirmRange: D,
    } = m,
    [M, Y] = t(""),
    [k, x] = t(""),
    [E] = t([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [F, $] = t(["", ""]),
    [C, N] = t(["", ""]),
    [I, R] = t([[], []]),
    [B] = t(new Date()),
    [y, b] = t(""),
    [j, H] = t(!1),
    S = n(null),
    [T, P] = t({});
  a(() => {
    window.innerWidth < 426 ? H(!0) : L();
    let e = "",
      t = "";
    (e = B.getMonth() + 1), (t = B.getFullYear());
    let n = "",
      a = "";
    if (u) {
      if (null == v ? void 0 : v.start) {
        let n = new Date(v.start);
        (e = n.getMonth() + 1), (t = n.getFullYear());
      }
      if (null == v ? void 0 : v.end) {
        let t = new Date(v.end);
        (n = t.getMonth() + 1),
          (a = t.getFullYear()),
          e == n &&
            ((t =
              12 == n
                ? new Date(t.getFullYear() + 1, 0, 1)
                : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
            (n = t.getMonth() + 1),
            (a = t.getFullYear()));
      } else {
        let e,
          t = new Date();
        (e =
          11 == t.getMonth()
            ? new Date(t.getFullYear() + 1, 0, 1)
            : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
          (n = e.getMonth() + 1),
          (a = e.getFullYear());
      }
    } else if (s) {
      let n = new Date(s);
      (e = n.getMonth() + 1), (t = n.getFullYear());
    }
    W({ forMonth: e, forYear: t, calendarIndex: 0 }),
      u &&
        (W({ forMonth: n, forYear: a, calendarIndex: 1 }),
        Y((null == v ? void 0 : v.start) || ""),
        x((null == v ? void 0 : v.end) || ""));
  }, []);
  const W = (e) => {
      let { forMonth: t, forYear: n, calendarIndex: a } = e;
      t = t < 10 ? `0${t}` : t;
      let l = B.getFullYear(),
        r = B.getMonth() + 1,
        o = B.getDate();
      r = r < 10 ? `0${r}` : r;
      let c = i(t, n),
        m = new Date(`${t}/01/${n}`).getDay(),
        s = E.findIndex((e) => e.enum == m),
        u = [];
      for (var g = 1; g <= c; g++) {
        let e = new Date(`${t}/${g}/${n}`),
          a = !1,
          i = !1,
          d = !1,
          c = !1,
          m = !1;
        new Date(`${t}/${g}/${n}`).getTime() ==
          new Date(`${r}/${o}/${l}`).getTime() && (a = !0),
          p && new Date(p) > e && (i = !0),
          h && new Date(h) < e && (i = !0),
          u.push({
            value: g,
            isToday: a,
            isDisabled: i,
            inRange: d,
            rangeEnd: m,
            rangeStart: c,
          });
      }
      let f = Array(-1 == s ? 0 : s).fill({ value: 0 }),
        v = I;
      v[a] = [...f, ...u];
      let w = new Date(`${t}/01/${n}`).getMonth(),
        D = F;
      D[a] = d[w];
      let M = C;
      (M[a] = n.toString()), $([...D]), N([...M]), R([...v]);
    },
    V = (e, t) => {
      (u && F.includes(d[e - 1])) ||
        W({ forMonth: e, forYear: C[t], calendarIndex: t });
    },
    z = (e, t) => {
      let n = d.findIndex((e) => e == F[t]);
      (u && C.includes(e)) ||
        W({ forMonth: n + 1, forYear: e, calendarIndex: t });
    },
    A = (e) => {
      let t = new Date(e);
      return M == e
        ? (Y(""),
          null == w
            ? void 0
            : w({
                start: "",
                end: new Date(k),
                min: null == v ? void 0 : v.min,
                max: null == v ? void 0 : v.max,
              }))
        : k == e
        ? (x(""),
          null == w
            ? void 0
            : w({
                start: new Date(M),
                end: "",
                min: null == v ? void 0 : v.min,
                max: null == v ? void 0 : v.max,
              }))
        : M
        ? new Date(M) > t
          ? (x(M),
            Y(e),
            null == w
              ? void 0
              : w({
                  start: new Date(e),
                  end: new Date(M),
                  min: null == v ? void 0 : v.min,
                  max: null == v ? void 0 : v.max,
                }))
          : (x(e),
            null == w
              ? void 0
              : w({
                  start: new Date(M),
                  end: new Date(e),
                  min: null == v ? void 0 : v.min,
                  max: null == v ? void 0 : v.max,
                }))
        : (Y(e),
          void (
            null == w ||
            w({
              start: new Date(e),
              end: "",
              min: null == v ? void 0 : v.min,
              max: null == v ? void 0 : v.max,
            })
          ));
    },
    q = (e) => {
      let t = F[e],
        n = d.findIndex((e) => e == t),
        a = C[e],
        l = J(`${n + 1}/01/${a}`);
      W({
        forMonth: l.getMonth() + 1,
        forYear: l.getFullYear(),
        calendarIndex: 0,
      }),
        u &&
          ((l = J(l)),
          W({
            forMonth: l.getMonth() + 1,
            forYear: l.getFullYear(),
            calendarIndex: 1,
          }));
    },
    G = (e) => {
      let t = F[e],
        n = d.findIndex((e) => e == t),
        a = C[e],
        l = K(`${n + 1}/01/${a}`);
      W({
        forMonth: l.getMonth() + 1,
        forYear: l.getFullYear(),
        calendarIndex: 1,
      }),
        u &&
          ((l = K(l)),
          W({
            forMonth: l.getMonth() + 1,
            forYear: l.getFullYear(),
            calendarIndex: 0,
          }));
    },
    J = (e) => {
      let t = new Date(e);
      return (
        (t =
          11 == t.getMonth()
            ? new Date(t.getFullYear() + 1, 0, 1)
            : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
        t
      );
    },
    K = (e) => {
      let t = new Date(e);
      return (
        (t =
          0 == t.getMonth()
            ? new Date(t.getFullYear() - 1, 11, 1)
            : new Date(t.getFullYear(), t.getMonth() - 1, 1)),
        t
      );
    },
    L = () => {
      const e = null == S ? void 0 : S.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        n = window.innerWidth - t.width;
      t.right > n ? P({ right: 0 }) : P({ left: 0 });
    };
  return e.createElement(
    "div",
    {
      "data-testid": "picker-wrapper",
      ref: S,
      className: "n-picker-wrapper " + (u ? "" : "n-picker-wrapper-width"),
      style: T,
    },
    e.createElement(
      "div",
      {
        "data-testid": "n-closeicon-wrapper",
        className: "n-closeicon-wrapper",
        onClick: () => {
          f();
        },
      },
      e.createElement(l, null)
    ),
    e.createElement(
      "div",
      { className: "n-picker-calendar-group" },
      I[0].length &&
        e.createElement(r, {
          calendarId: "c1",
          onDateClick: u
            ? (e) => A(e)
            : (e) => {
                j ? b(e) : null == g || g(e);
              },
          selectedMonth: F[0],
          selectedYear: C[0],
          monthHandler: (e) => V(e, 0),
          yearHandler: (e) => {
            z(e, 0);
          },
          isRange: u,
          from: M,
          to: k,
          calendar: I[0],
          handleNextButtonClicked: () => {
            q(0);
          },
          handlePreviousButtonClicked: () => {
            G(0);
          },
        }),
      u && I[1].length
        ? e.createElement(
            e.Fragment,
            null,
            e.createElement("div", {
              className: "n-picker-divider",
              "data-testid": "date-picker-divider",
            }),
            " ",
            e.createElement(r, {
              calendarId: "c2",
              onDateClick: (e) => A(e),
              isRange: u,
              from: M,
              to: k,
              selectedMonth: F[1],
              selectedYear: C[1],
              calendar: I[1],
              monthHandler: (e) => V(e, 1),
              yearHandler: (e) => {
                z(e, 1);
              },
              handleNextButtonClicked: () => {
                q(1);
              },
              handlePreviousButtonClicked: () => {
                G(1);
              },
            })
          )
        : e.createElement(e.Fragment, null)
    ),
    u && v
      ? e.createElement(
          "div",
          { className: "n-picker-footer" },
          e.createElement(
            "div",
            { className: "n-picker-footer-date-group" },
            e.createElement(
              "div",
              {
                className: "n-picker-footer-date-item",
                "data-testid": "picker-startdate",
              },
              e.createElement("span", null, "Start Date"),
              e.createElement("span", null, v.start ? c(v.start) : "--")
            ),
            e.createElement(
              "div",
              {
                className: "n-picker-footer-date-item",
                "data-testid": "picker-enddate",
              },
              e.createElement("span", null, "End Date"),
              e.createElement("span", null, v.end ? c(v.end) : "--")
            )
          ),
          e.createElement(
            "div",
            { className: "n-picker-footer-button" },
            e.createElement(
              o,
              {
                disabled: !v.end || !c(v.start),
                onClick: () => {
                  null == D || D(v);
                },
              },
              "Confirm"
            )
          )
        )
      : e.createElement(
          "div",
          {
            className: "n-picker-single-footer",
            "data-testid": "n-picker-single-footer",
          },
          e.createElement(
            "div",
            { className: "n-picker-single-footer-date-group" },
            e.createElement(
              "div",
              {
                className: "n-picker-single-footer-date-item",
                "data-testid": "single-footer-value",
              },
              e.createElement("span", null, y ? c(y) : "--")
            )
          ),
          e.createElement(
            "div",
            { className: "n-picker-single-footer-button" },
            e.createElement(
              o,
              {
                disabled: !y,
                onClick: () => {
                  null == g || g(y);
                },
              },
              "Confirm"
            )
          )
        )
  );
};
m.defaulProps = {
  dateVal: "",
  isRange: !1,
  rangeConfig: {},
  getRange: () => {},
};
var s = e.memo(m);
export { s as default };
//# sourceMappingURL=DatePicker.js.map
