"use strict";
var e = require("react"),
  t = require("../Validation/Validation.js"),
  a = require("../../assets/svg-components/Nitrozen/index.js");
require("./DateInput.scss.js");
var n = require("../DatePicker/DatePicker.js"),
  l = require("../../utils/dateHandler.js");
function d(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var i = d(e);
const r = (d) => {
  const {
      label: r,
      required: u,
      useDatePicker: s,
      dateValue: m,
      helperText: c,
      validationState: o,
      validationText: f,
      validationClassName: g,
      validationStyle: y,
      getDateValue: p,
      closeClicked: v,
      id: E,
      isRange: D,
      rangeConfig: $,
      onConfirmRange: C,
      defaultValidation: N,
    } = d,
    [S, b] = e.useState({ mm: "", dd: "", yyyy: "" }),
    [h, k] = e.useState(""),
    [x, j] = e.useState(""),
    [q, F] = e.useState(!1),
    [I, R] = e.useState({ start: "", end: "", min: "", max: "" });
  e.useEffect(() => {
    if (m) {
      let e = new Date(m),
        t = Object.assign({}, S);
      (t.mm =
        e.getMonth() + 1 < 10
          ? "0" + (e.getMonth() + 1).toString()
          : (e.getMonth() + 1).toString()),
        (t.dd =
          e.getDate() < 10
            ? "0" + e.getDate().toString()
            : e.getDate().toString()),
        (t.yyyy = e.getFullYear().toString()),
        b(t);
    }
    D && $ && R($);
  }, []);
  const V = (e) => {
    if (N) {
      if (e.mm && (0 === e.mm || e.mm > 12)) return k("Invalid Date");
      if ((e.yyyy && e.yyyy.length < 4) || ["0000", "9999"].includes(e.yyyy))
        return k("Invalid Date");
      let n = ((t = e.mm), (a = e.yyyy), new Date(a, t, 0).getDate());
      if (e.dd && (0 == e.dd || e.dd > n)) return k("Invalid Date");
      k("");
    }
    var t, a;
  };
  function w(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e, t) {
        if (e >= 0 && !t.target.value) {
          let t = document.getElementById(`date-input-${e - 1}-${E}`);
          null == t || t.focus();
        }
        V(S);
      })(t, e);
  }
  const O = (e) => {
    j(e);
    const t = e.split("/");
    let a = Object.assign({}, S);
    (a.mm = t[0]),
      (a.dd = t[1]),
      (a.yyyy = t[2]),
      b(a),
      null == p || p(new Date(`${a.mm}/${a.dd}/${a.yyyy}`));
  };
  return i.default.createElement(
    "div",
    { className: "n-date-wrapper" },
    i.default.createElement(
      "div",
      { className: "n-input-label-container" },
      r &&
        i.default.createElement(
          "label",
          { className: "n-input-label", "data-testid": "n-date-label" },
          i.default.createElement(
            i.default.Fragment,
            null,
            r,
            " ",
            u ? " *" : ""
          )
        )
    ),
    i.default.createElement(
      "div",
      {
        "data-testid": "n-date-inputfield",
        className:
          "n-date-inputfield " + (h ? "n-date-error" : o ? `n-${o}-field` : ""),
      },
      i.default.createElement(
        "div",
        {
          className: "n-date-left-group",
          "data-testid": "n-date-left-group",
          onClick: () => (s ? F(!q) : () => {}),
        },
        i.default.createElement(
          "div",
          {
            "data-testid": "n-datepicker-icon",
            className: "n-icon-container " + (s ? "n-cursor-pointer" : ""),
          },
          i.default.createElement(a.SvgIcCalendar, null)
        ),
        i.default.createElement(
          "div",
          { className: "n-date-input-group" },
          !D &&
            Object.keys(S).map((e, t) =>
              i.default.createElement(
                i.default.Fragment,
                null,
                i.default.createElement("input", {
                  key: `date-input-${t}-${E}`,
                  "data-testid": `date-input-${t}-${E}`,
                  id: `date-input-${t}-${E}`,
                  className: "n-date-single-field",
                  value: S[e],
                  type: "text",
                  onChange: (a) =>
                    ((e, t, a) => {
                      let n = Object.assign({}, S);
                      if (
                        ((e.target.value = e.target.value.replace(
                          /[^0-9]+/g,
                          ""
                        )),
                        2 == e.target.value.length && 2 != a)
                      ) {
                        let e = document.getElementById(
                          `date-input-${a + 1}-${E}`
                        );
                        null == e || e.focus();
                      }
                      (2 == a && e.target.value.length > 4) ||
                        ((n[t] = e.target.value),
                        b(n),
                        n.mm && n.dd && n.yyyy && V(n),
                        null == p || p(new Date(`${n.mm}/${n.dd}/${n.yyyy}`)));
                    })(a, e, t),
                  placeholder: e.toUpperCase(),
                  onKeyDown: (e) => w(e, t),
                  onBlur: () => {
                    if ([0, 1].includes(t)) {
                      let t = Object.assign({}, S);
                      1 == t[e].length && ((t[e] = `0${t[e]}`), b(t));
                    }
                    null == p || p(`${S.mm}/${S.dd}/${S.yyyy}`);
                  },
                  autoComplete: "off",
                  disabled: !!s,
                }),
                t < 3
                  ? i.default.createElement(
                      "span",
                      { className: "n-date-divider" },
                      "/"
                    )
                  : i.default.createElement(i.default.Fragment, null)
              )
            ),
          D
            ? "" !== I.start && "" !== I.end
              ? i.default.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  i.default.createElement(
                    "div",
                    null,
                    l.getFormattedDate(I.start) || "--"
                  ),
                  i.default.createElement("div", null, "to"),
                  i.default.createElement(
                    "div",
                    null,
                    l.getFormattedDate(I.end) || "--"
                  )
                )
              : i.default.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  "Select a date range"
                )
            : null
        )
      ),
      S.mm || S.dd || S.yyyy
        ? i.default.createElement(
            "div",
            {
              "data-testid": "n-date-close-icon",
              className: "n-input-close-btn n-icon-container n-cursor-pointer",
              onClick: () => {
                (() => {
                  let e = Object.assign({}, S);
                  (e.mm = ""),
                    (e.dd = ""),
                    (e.yyyy = ""),
                    b(e),
                    k(""),
                    null == p || p("");
                })(),
                  null == v || v();
              },
            },
            i.default.createElement(a.SvgIcCloseRemove, null)
          )
        : i.default.createElement(i.default.Fragment, null)
    ),
    i.default.createElement(
      "div",
      { className: "n-input-underinfo", "data-testid": "n-date-underinfo" },
      (h || o) &&
        i.default.createElement(t, {
          validationState: h ? "error" : o,
          label: f || h,
          isHidden: !1,
          style: y,
          className: g,
        }),
      c &&
        i.default.createElement(
          "span",
          { className: "n-helper-text", "data-testid": "n-date-helpertext" },
          c
        )
    ),
    i.default.createElement(
      "div",
      { className: "n-date-picker-container" },
      q
        ? i.default.createElement(n, {
            dateVal: x,
            onDateClick: (e) => {
              O(e), F(!1);
            },
            onClose: () => F(!1),
            minDate: "",
            maxDate: "",
            isRange: D,
            rangeConfig: { start: I.start, min: I.min, max: I.max, end: I.end },
            getRange: (e) => R(e),
            onConfirmRange: (e) => {
              null == C || C(e), F(!1);
            },
          })
        : i.default.createElement(i.default.Fragment, null)
    )
  );
};
r.defaulProps = {
  useDatePicker: !0,
  required: !1,
  tooltipText: "",
  helperText: "",
  validationStyle: {},
  validationClassName: "",
  isRange: !1,
  rangeConfig: {},
  onConfirmRange: () => {},
  defaultValidation: !0,
};
var u = i.default.memo(r);
module.exports = u;
//# sourceMappingURL=DateInput.js.map
