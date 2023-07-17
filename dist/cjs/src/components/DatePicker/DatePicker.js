"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Nitrozen/index.js");
require("./DatePicker.scss.js");
var n = require("./Calendar.js"),
  a = require("../Button/Button.js"),
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
      minDate: m,
      maxDate: c,
      rangeConfig: f,
      getRange: g,
      onConfirmRange: v,
    } = r,
    [h, D] = e.useState(""),
    [w, p] = e.useState(""),
    [x] = e.useState([
      { name: "S", enum: 7 },
      { name: "M", enum: 1 },
      { name: "T", enum: 2 },
      { name: "W", enum: 3 },
      { name: "T", enum: 4 },
      { name: "F", enum: 5 },
      { name: "S", enum: 6 },
    ]),
    [M, Y] = e.useState(["", ""]),
    [k, E] = e.useState(["", ""]),
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
    let n = "",
      a = "";
    if (i) {
      if (null == f ? void 0 : f.start) {
        let n = new Date(f.start);
        (e = n.getMonth() + 1), (t = n.getFullYear());
      }
      if (null == f ? void 0 : f.end) {
        let t = new Date(f.end);
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
    } else if (o) {
      let n = new Date(o);
      (e = n.getMonth() + 1), (t = n.getFullYear());
    }
    j({ forMonth: e, forYear: t, calendarIndex: 0 }),
      i &&
        (j({ forMonth: n, forYear: a, calendarIndex: 1 }),
        D((null == f ? void 0 : f.start) || ""),
        p((null == f ? void 0 : f.end) || ""));
  }, []);
  const j = (e) => {
      let { forMonth: t, forYear: n, calendarIndex: a } = e;
      t = t < 10 ? `0${t}` : t;
      let r = $.getFullYear(),
        d = $.getMonth() + 1,
        o = $.getDate();
      d = d < 10 ? `0${d}` : d;
      let i = l.daysInMonth(t, n),
        u = new Date(`${t}/01/${n}`).getDay(),
        s = x.findIndex((e) => e.enum == u),
        f = [];
      for (var g = 1; g <= i; g++) {
        let e = new Date(`${t}/${g}/${n}`),
          a = !1,
          l = !1,
          i = !1,
          u = !1,
          s = !1;
        new Date(`${t}/${g}/${n}`).getTime() ==
          new Date(`${d}/${o}/${r}`).getTime() && (a = !0),
          m && new Date(m) > e && (l = !0),
          c && new Date(c) < e && (l = !0),
          f.push({
            value: g,
            isToday: a,
            isDisabled: l,
            inRange: i,
            rangeEnd: s,
            rangeStart: u,
          });
      }
      let v = Array(-1 == s ? 0 : s).fill({ value: 0 }),
        h = F;
      h[a] = [...v, ...f];
      let D = new Date(`${t}/01/${n}`).getMonth(),
        w = M;
      w[a] = l.months[D];
      let p = k;
      (p[a] = n.toString()), Y([...w]), E([...p]), C([...h]);
    },
    q = (e, t) => {
      (i && M.includes(l.months[e - 1])) ||
        j({ forMonth: e, forYear: k[t], calendarIndex: t });
    },
    H = (e, t) => {
      let n = l.months.findIndex((e) => e == M[t]);
      (i && k.includes(e)) ||
        j({ forMonth: n + 1, forYear: e, calendarIndex: t });
    },
    T = (e) => {
      let t = new Date(e);
      return (
        h == e &&
          (D(""),
          null == g ||
            g({
              start: "",
              end: new Date(w),
              min: null == f ? void 0 : f.min,
              max: null == f ? void 0 : f.max,
            })),
        w == e
          ? (p(""),
            null == g
              ? void 0
              : g({
                  start: new Date(h),
                  end: "",
                  min: null == f ? void 0 : f.min,
                  max: null == f ? void 0 : f.max,
                }))
          : h
          ? new Date(h) > t
            ? (p(h),
              D(e),
              null == g
                ? void 0
                : g({
                    start: new Date(e),
                    end: new Date(h),
                    min: null == f ? void 0 : f.min,
                    max: null == f ? void 0 : f.max,
                  }))
            : (p(e),
              null == g
                ? void 0
                : g({
                    start: new Date(h),
                    end: new Date(e),
                    min: null == f ? void 0 : f.min,
                    max: null == f ? void 0 : f.max,
                  }))
          : (D(e),
            null == g ||
              g({
                start: new Date(e),
                end: "",
                min: null == f ? void 0 : f.min,
                max: null == f ? void 0 : f.max,
              }),
            !h && w
              ? new Date(w) < t
                ? (p(e),
                  D(w),
                  null == g
                    ? void 0
                    : g({
                        start: new Date(w),
                        end: new Date(e),
                        min: null == f ? void 0 : f.min,
                        max: null == f ? void 0 : f.max,
                      }))
                : (p(e),
                  null == g
                    ? void 0
                    : g({
                        start: new Date(h),
                        end: new Date(e),
                        min: null == f ? void 0 : f.min,
                        max: null == f ? void 0 : f.max,
                      }))
              : void 0)
      );
    },
    P = (e) => {
      let t = M[e],
        n = l.months.findIndex((e) => e == t),
        a = k[e],
        r = V(`${n + 1}/01/${a}`);
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
      let t = M[e],
        n = l.months.findIndex((e) => e == t),
        a = k[e],
        r = z(`${n + 1}/01/${a}`);
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
        n = window.innerWidth - t.width;
      t.right > n ? b({ right: 0 }) : b({ left: 0 });
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
        d.default.createElement(n, {
          rangeConfig: f,
          calendarId: "c1",
          onDateClick: i
            ? (e) => T(e)
            : (e) => {
                S ? N(e) : null == u || u(e);
              },
          selectedMonth: M[0],
          selectedYear: k[0],
          monthHandler: (e) => q(e, 0),
          yearHandler: (e) => {
            H(e, 0);
          },
          isRange: i,
          from: h,
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
            d.default.createElement(n, {
              rangeConfig: f,
              calendarId: "c2",
              onDateClick: (e) => T(e),
              isRange: i,
              from: h,
              to: w,
              selectedMonth: M[1],
              selectedYear: k[1],
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
              a,
              {
                disabled: !f.end || !l.getFormattedDate(f.start),
                onClick: () => {
                  null == v || v(f);
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
              a,
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
