import e, { useState as t, useRef as n, useEffect as a } from "react";
import { SvgIcClose as l } from "../../assets/svg-components/Nitrozen/index.js";
import "./DatePicker.scss.js";
import r from "./Calendar.js";
import o from "../Button/Button.js";
import {
  daysInMonth as i,
  months as d,
  getFormattedDate as m,
} from "../../utils/dateHandler.js";
const c = (c) => {
  const {
      dateVal: s,
      isRange: u,
      onDateClick: g,
      onClose: f,
      minDate: v,
      maxDate: w,
      rangeConfig: D,
      getRange: p,
      onConfirmRange: h,
    } = c,
    [x, M] = t(""),
    [Y, k] = t(""),
    [E] = t([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [F, C] = t(["", ""]),
    [$, N] = t(["", ""]),
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
      if (null == D ? void 0 : D.start) {
        let n = new Date(D.start);
        (e = n.getMonth() + 1), (t = n.getFullYear());
      }
      if (null == D ? void 0 : D.end) {
        let t = new Date(D.end);
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
        M((null == D ? void 0 : D.start) || ""),
        k((null == D ? void 0 : D.end) || ""));
  }, []);
  const W = (e) => {
      let { forMonth: t, forYear: n, calendarIndex: a } = e;
      t = t < 10 ? `0${t}` : t;
      let l = B.getFullYear(),
        r = B.getMonth() + 1,
        o = B.getDate();
      r = r < 10 ? `0${r}` : r;
      let m = i(t, n),
        c = new Date(`${t}/01/${n}`).getDay(),
        s = E.findIndex((e) => e.enum == c),
        u = [];
      for (var g = 1; g <= m; g++) {
        let e = new Date(`${t}/${g}/${n}`),
          a = !1,
          i = !1,
          d = !1,
          m = !1,
          c = !1;
        new Date(`${t}/${g}/${n}`).getTime() ==
          new Date(`${r}/${o}/${l}`).getTime() && (a = !0),
          v && new Date(v) > e && (i = !0),
          w && new Date(w) < e && (i = !0),
          u.push({
            value: g,
            isToday: a,
            isDisabled: i,
            inRange: d,
            rangeEnd: c,
            rangeStart: m,
          });
      }
      let f = Array(-1 == s ? 0 : s).fill({ value: 0 }),
        D = I;
      D[a] = [...f, ...u];
      let p = new Date(`${t}/01/${n}`).getMonth(),
        h = F;
      h[a] = d[p];
      let x = $;
      (x[a] = n.toString()), C([...h]), N([...x]), R([...D]);
    },
    V = (e, t) => {
      (u && F.includes(d[e - 1])) ||
        W({ forMonth: e, forYear: $[t], calendarIndex: t });
    },
    z = (e, t) => {
      let n = d.findIndex((e) => e == F[t]);
      (u && $.includes(e)) ||
        W({ forMonth: n + 1, forYear: e, calendarIndex: t });
    },
    A = (e) => {
      let t = new Date(e);
      return (
        x == e &&
          (M(""),
          null == p ||
            p({
              start: "",
              end: new Date(Y),
              min: null == D ? void 0 : D.min,
              max: null == D ? void 0 : D.max,
            })),
        Y == e
          ? (k(""),
            null == p
              ? void 0
              : p({
                  start: new Date(x),
                  end: "",
                  min: null == D ? void 0 : D.min,
                  max: null == D ? void 0 : D.max,
                }))
          : x
          ? new Date(x) > t
            ? (k(x),
              M(e),
              null == p
                ? void 0
                : p({
                    start: new Date(e),
                    end: new Date(x),
                    min: null == D ? void 0 : D.min,
                    max: null == D ? void 0 : D.max,
                  }))
            : (k(e),
              null == p
                ? void 0
                : p({
                    start: new Date(x),
                    end: new Date(e),
                    min: null == D ? void 0 : D.min,
                    max: null == D ? void 0 : D.max,
                  }))
          : (M(e),
            null == p ||
              p({
                start: new Date(e),
                end: "",
                min: null == D ? void 0 : D.min,
                max: null == D ? void 0 : D.max,
              }),
            !x && Y
              ? new Date(Y) < t
                ? (k(e),
                  M(Y),
                  null == p
                    ? void 0
                    : p({
                        start: new Date(Y),
                        end: new Date(e),
                        min: null == D ? void 0 : D.min,
                        max: null == D ? void 0 : D.max,
                      }))
                : (k(e),
                  null == p
                    ? void 0
                    : p({
                        start: new Date(x),
                        end: new Date(e),
                        min: null == D ? void 0 : D.min,
                        max: null == D ? void 0 : D.max,
                      }))
              : void 0)
      );
    },
    q = (e) => {
      let t = F[e],
        n = d.findIndex((e) => e == t),
        a = $[e],
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
        a = $[e],
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
          rangeConfig: D,
          calendarId: "c1",
          onDateClick: u
            ? (e) => A(e)
            : (e) => {
                j ? b(e) : null == g || g(e);
              },
          selectedMonth: F[0],
          selectedYear: $[0],
          monthHandler: (e) => V(e, 0),
          yearHandler: (e) => {
            z(e, 0);
          },
          isRange: u,
          from: x,
          to: Y,
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
              rangeConfig: D,
              calendarId: "c2",
              onDateClick: (e) => A(e),
              isRange: u,
              from: x,
              to: Y,
              selectedMonth: F[1],
              selectedYear: $[1],
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
    u && D
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
              e.createElement("span", null, D.start ? m(D.start) : "--")
            ),
            e.createElement(
              "div",
              {
                className: "n-picker-footer-date-item",
                "data-testid": "picker-enddate",
              },
              e.createElement("span", null, "End Date"),
              e.createElement("span", null, D.end ? m(D.end) : "--")
            )
          ),
          e.createElement(
            "div",
            { className: "n-picker-footer-button" },
            e.createElement(
              o,
              {
                disabled: !D.end || !m(D.start),
                onClick: () => {
                  null == h || h(D);
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
              e.createElement("span", null, y ? m(y) : "--")
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
c.defaulProps = {
  dateVal: "",
  isRange: !1,
  rangeConfig: {},
  getRange: () => {},
};
var s = e.memo(c);
export { s as default };
//# sourceMappingURL=DatePicker.js.map
