"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Nitrozen/index.js");
require("./DatePicker.scss.js");
var a = require("./Calendar.js"),
  n = require("../Button/Button.js"),
  l = require("../../utils/dateHandler.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = r(e);
const o = (r) => {
  const {
      dateVal: o,
      isRange: i,
      onDateClick: u,
      onClose: s,
      minDate: c,
      maxDate: m,
      rangeConfig: f,
      getRange: g,
      onConfirmRange: h,
    } = r,
    [v, D] = e.useState(""),
    [w, p] = e.useState(""),
    [M] = e.useState([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [Y, k] = e.useState(["", ""]),
    [x, E] = e.useState(["", ""]),
    [F, C] = e.useState([[], []]),
    [$] = e.useState(new Date()),
    [I, N] = e.useState(""),
    [S, R] = e.useState(!1),
    y = e.useRef(null),
    [B, b] = e.useState({});
  e.useEffect(() => {
    window.innerWidth < 426 ? R(!0) : A();
    let e = "",
      t = "";
    (e = $.getMonth() + 1), (t = $.getFullYear());
    let a = "",
      n = "";
    if (i) {
      if (null == f ? void 0 : f.start) {
        let a = new Date(f.start);
        (e = a.getMonth() + 1), (t = a.getFullYear());
      }
      if (null == f ? void 0 : f.end) {
        let t = new Date(f.end);
        (a = t.getMonth() + 1),
          (n = t.getFullYear()),
          e == a &&
            ((t =
              12 == a
                ? new Date(t.getFullYear() + 1, 0, 1)
                : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
            (a = t.getMonth() + 1),
            (n = t.getFullYear()));
      } else {
        let e,
          t = new Date();
        (e =
          11 == t.getMonth()
            ? new Date(t.getFullYear() + 1, 0, 1)
            : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
          (a = e.getMonth() + 1),
          (n = e.getFullYear());
      }
    } else if (o) {
      let a = new Date(o);
      (e = a.getMonth() + 1), (t = a.getFullYear());
    }
    j({ forMonth: e, forYear: t, calendarIndex: 0 }),
      i &&
        (j({ forMonth: a, forYear: n, calendarIndex: 1 }),
        D((null == f ? void 0 : f.start) || ""),
        p((null == f ? void 0 : f.end) || ""));
  }, []);
  const j = (e) => {
      let { forMonth: t, forYear: a, calendarIndex: n } = e;
      t = t < 10 ? `0${t}` : t;
      let r = $.getFullYear(),
        d = $.getMonth() + 1,
        o = $.getDate();
      d = d < 10 ? `0${d}` : d;
      let i = l.daysInMonth(t, a),
        u = new Date(`${t}/01/${a}`).getDay(),
        s = M.findIndex((e) => e.enum == u),
        f = [];
      for (var g = 1; g <= i; g++) {
        let e = new Date(`${t}/${g}/${a}`),
          n = !1,
          l = !1,
          i = !1,
          u = !1,
          s = !1;
        new Date(`${t}/${g}/${a}`).getTime() ==
          new Date(`${d}/${o}/${r}`).getTime() && (n = !0),
          c && new Date(c) > e && (l = !0),
          m && new Date(m) < e && (l = !0),
          f.push({
            value: g,
            isToday: n,
            isDisabled: l,
            inRange: i,
            rangeEnd: s,
            rangeStart: u,
          });
      }
      let h = Array(-1 == s ? 0 : s).fill({ value: 0 }),
        v = F;
      v[n] = [...h, ...f];
      let D = new Date(`${t}/01/${a}`).getMonth(),
        w = Y;
      w[n] = l.months[D];
      let p = x;
      (p[n] = a.toString()), k([...w]), E([...p]), C([...v]);
    },
    q = (e, t) => {
      (i && Y.includes(l.months[e - 1])) ||
        j({ forMonth: e, forYear: x[t], calendarIndex: t });
    },
    H = (e, t) => {
      let a = l.months.findIndex((e) => e == Y[t]);
      (i && x.includes(e)) ||
        j({ forMonth: a + 1, forYear: e, calendarIndex: t });
    },
    T = (e) => {
      let t = new Date(e);
      return v == e
        ? (D(""),
          null == g
            ? void 0
            : g({
                start: "",
                end: new Date(w),
                min: null == f ? void 0 : f.min,
                max: null == f ? void 0 : f.max,
              }))
        : w == e
        ? (p(""),
          null == g
            ? void 0
            : g({
                start: new Date(v),
                end: "",
                min: null == f ? void 0 : f.min,
                max: null == f ? void 0 : f.max,
              }))
        : v
        ? new Date(v) > t
          ? (p(v),
            D(e),
            null == g
              ? void 0
              : g({
                  start: new Date(e),
                  end: new Date(v),
                  min: null == f ? void 0 : f.min,
                  max: null == f ? void 0 : f.max,
                }))
          : (p(e),
            null == g
              ? void 0
              : g({
                  start: new Date(v),
                  end: new Date(e),
                  min: null == f ? void 0 : f.min,
                  max: null == f ? void 0 : f.max,
                }))
        : (D(e),
          void (
            null == g ||
            g({
              start: new Date(e),
              end: "",
              min: null == f ? void 0 : f.min,
              max: null == f ? void 0 : f.max,
            })
          ));
    },
    P = (e) => {
      let t = Y[e],
        a = l.months.findIndex((e) => e == t),
        n = x[e],
        r = V(`${a + 1}/01/${n}`);
      j({
        forMonth: r.getMonth() + 1,
        forYear: r.getFullYear(),
        calendarIndex: 0,
      }),
        i &&
          ((r = V(r)),
          j({
            forMonth: r.getMonth() + 1,
            forYear: r.getFullYear(),
            calendarIndex: 1,
          }));
    },
    W = (e) => {
      let t = Y[e],
        a = l.months.findIndex((e) => e == t),
        n = x[e],
        r = z(`${a + 1}/01/${n}`);
      j({
        forMonth: r.getMonth() + 1,
        forYear: r.getFullYear(),
        calendarIndex: 1,
      }),
        i &&
          ((r = z(r)),
          j({
            forMonth: r.getMonth() + 1,
            forYear: r.getFullYear(),
            calendarIndex: 0,
          }));
    },
    V = (e) => {
      let t = new Date(e);
      return (
        (t =
          11 == t.getMonth()
            ? new Date(t.getFullYear() + 1, 0, 1)
            : new Date(t.getFullYear(), t.getMonth() + 1, 1)),
        t
      );
    },
    z = (e) => {
      let t = new Date(e);
      return (
        (t =
          0 == t.getMonth()
            ? new Date(t.getFullYear() - 1, 11, 1)
            : new Date(t.getFullYear(), t.getMonth() - 1, 1)),
        t
      );
    },
    A = () => {
      const e = null == y ? void 0 : y.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        a = window.innerWidth - t.width;
      t.right > a ? b({ right: 0 }) : b({ left: 0 });
    };
  return d.default.createElement(
    "div",
    {
      "data-testid": "picker-wrapper",
      ref: y,
      className: "n-picker-wrapper " + (i ? "" : "n-picker-wrapper-width"),
      style: B,
    },
    d.default.createElement(
      "div",
      {
        "data-testid": "n-closeicon-wrapper",
        className: "n-closeicon-wrapper",
        onClick: () => {
          s();
        },
      },
      d.default.createElement(t.SvgIcClose, null)
    ),
    d.default.createElement(
      "div",
      { className: "n-picker-calendar-group" },
      F[0].length &&
        d.default.createElement(a, {
          calendarId: "c1",
          onDateClick: i
            ? (e) => T(e)
            : (e) => {
                S ? N(e) : null == u || u(e);
              },
          selectedMonth: Y[0],
          selectedYear: x[0],
          monthHandler: (e) => q(e, 0),
          yearHandler: (e) => {
            H(e, 0);
          },
          isRange: i,
          from: v,
          to: w,
          calendar: F[0],
          handleNextButtonClicked: () => {
            P(0);
          },
          handlePreviousButtonClicked: () => {
            W(0);
          },
        }),
      i && F[1].length
        ? d.default.createElement(
            d.default.Fragment,
            null,
            d.default.createElement("div", {
              className: "n-picker-divider",
              "data-testid": "date-picker-divider",
            }),
            " ",
            d.default.createElement(a, {
              calendarId: "c2",
              onDateClick: (e) => T(e),
              isRange: i,
              from: v,
              to: w,
              selectedMonth: Y[1],
              selectedYear: x[1],
              calendar: F[1],
              monthHandler: (e) => q(e, 1),
              yearHandler: (e) => {
                H(e, 1);
              },
              handleNextButtonClicked: () => {
                P(1);
              },
              handlePreviousButtonClicked: () => {
                W(1);
              },
            })
          )
        : d.default.createElement(d.default.Fragment, null)
    ),
    i && f
      ? d.default.createElement(
          "div",
          { className: "n-picker-footer" },
          d.default.createElement(
            "div",
            { className: "n-picker-footer-date-group" },
            d.default.createElement(
              "div",
              {
                className: "n-picker-footer-date-item",
                "data-testid": "picker-startdate",
              },
              d.default.createElement("span", null, "Start Date"),
              d.default.createElement(
                "span",
                null,
                f.start ? l.getFormattedDate(f.start) : "--"
              )
            ),
            d.default.createElement(
              "div",
              {
                className: "n-picker-footer-date-item",
                "data-testid": "picker-enddate",
              },
              d.default.createElement("span", null, "End Date"),
              d.default.createElement(
                "span",
                null,
                f.end ? l.getFormattedDate(f.end) : "--"
              )
            )
          ),
          d.default.createElement(
            "div",
            { className: "n-picker-footer-button" },
            d.default.createElement(
              n,
              {
                disabled: !f.end || !l.getFormattedDate(f.start),
                onClick: () => {
                  null == h || h(f);
                },
              },
              "Confirm"
            )
          )
        )
      : d.default.createElement(
          "div",
          {
            className: "n-picker-single-footer",
            "data-testid": "n-picker-single-footer",
          },
          d.default.createElement(
            "div",
            { className: "n-picker-single-footer-date-group" },
            d.default.createElement(
              "div",
              {
                className: "n-picker-single-footer-date-item",
                "data-testid": "single-footer-value",
              },
              d.default.createElement(
                "span",
                null,
                I ? l.getFormattedDate(I) : "--"
              )
            )
          ),
          d.default.createElement(
            "div",
            { className: "n-picker-single-footer-button" },
            d.default.createElement(
              n,
              {
                disabled: !I,
                onClick: () => {
                  null == u || u(I);
                },
              },
              "Confirm"
            )
          )
        )
  );
};
o.defaulProps = {
  dateVal: "",
  isRange: !1,
  rangeConfig: {},
  getRange: () => {},
};
var i = d.default.memo(o);
module.exports = i;
//# sourceMappingURL=DatePicker.js.map
