"use strict";
var e = require("react"),
  t = require("../Validation/Validation.js"),
  a = require("../Tooltip/Tooltip.js"),
  l = require("../../assets/svg-components/Nitrozen/index.js");
require("./DateInput.scss.js");
var n = require("../DatePicker/DatePicker.js"),
  d = require("../../utils/dateHandler.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = i(e);
const u = (i) => {
  const {
      label: u,
      required: s,
      useDatePicker: o,
      dateValue: c,
      helperText: m,
      validationState: f,
      validationText: g,
      validationClassName: y,
      validationStyle: p,
      getDateValue: v,
      closeClicked: E,
      id: D,
      isRange: $,
      rangeConfig: C,
      onConfirmRange: N,
      defaultValidation: b,
      disabled: S,
      tooltipText: x,
      showTooltip: h,
      tooltipIcon: j,
    } = i,
    [k, I] = e.useState({ mm: "", dd: "", yyyy: "" }),
    [q, F] = e.useState(""),
    [R, T] = e.useState(""),
    [w, V] = e.useState(!1),
    [O, P] = e.useState({ start: "", end: "", min: "", max: "" });
  e.useEffect(() => {
    if (c) {
      let e = new Date(c),
        t = Object.assign({}, k);
      (t.mm =
        e.getMonth() + 1 < 10
          ? "0" + (e.getMonth() + 1).toString()
          : (e.getMonth() + 1).toString()),
        (t.dd =
          e.getDate() < 10
            ? "0" + e.getDate().toString()
            : e.getDate().toString()),
        (t.yyyy = e.getFullYear().toString()),
        I(t);
    }
    $ && C && P(C);
  }, []);
  const B = (e) => {
    if (b) {
      if (e.mm && (0 === e.mm || e.mm > 12)) return F("Invalid Date");
      if ((e.yyyy && e.yyyy.length < 4) || ["0000", "9999"].includes(e.yyyy))
        return F("Invalid Date");
      let l = ((t = e.mm), (a = e.yyyy), new Date(a, t, 0).getDate());
      if (e.dd && (0 == e.dd || e.dd > l)) return F("Invalid Date");
      F("");
    }
    var t, a;
  };
  function H(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e, t) {
        if (e >= 0 && !t.target.value) {
          let t = document.getElementById(`date-input-${e - 1}-${D}`);
          null == t || t.focus();
        }
        B(k);
      })(t, e);
  }
  const M = (e) => {
    T(e);
    const t = e.split("/");
    let a = Object.assign({}, k);
    (a.mm = t[0]),
      (a.dd = t[1]),
      (a.yyyy = t[2]),
      I(a),
      null == v || v(new Date(`${a.mm}/${a.dd}/${a.yyyy}`));
  };
  return r.default.createElement(
    "div",
    {
      className: "n-date-wrapper " + (S ? "n-input-group-disabled" : ""),
      "data-testid": "date-input",
    },
    r.default.createElement(
      "div",
      { className: "n-input-label-container" },
      u &&
        r.default.createElement(
          "label",
          { className: "n-input-label", "data-testid": "n-date-label" },
          r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement("p", null, u, s ? "*" : ""),
            h &&
              r.default.createElement(
                "span",
                { className: "n-input-tooltip" },
                x &&
                  r.default.createElement(a, {
                    tooltipContent: x,
                    icon:
                      j ||
                      r.default.createElement(l.SvgIcHelp, {
                        style: { fontSize: "14px" },
                      }),
                    position: "top",
                  })
              )
          )
        )
    ),
    r.default.createElement(
      "div",
      {
        "data-testid": "n-date-inputfield",
        className:
          "n-date-inputfield " + (q ? "n-date-error" : f ? `n-${f}-field` : ""),
      },
      r.default.createElement(
        "div",
        {
          className: "n-date-left-group",
          "data-testid": "n-date-left-group",
          onClick: () => (o ? V(!w) : () => {}),
        },
        r.default.createElement(
          "div",
          {
            "data-testid": "n-datepicker-icon",
            className: "n-icon-container " + (o ? "n-cursor-pointer" : ""),
          },
          r.default.createElement(l.SvgIcCalendar, null)
        ),
        r.default.createElement(
          "div",
          { className: "n-date-input-group" },
          !$ &&
            Object.keys(k).map((e, t) =>
              r.default.createElement(
                r.default.Fragment,
                null,
                r.default.createElement("input", {
                  key: `date-input-${t}-${D}`,
                  "data-testid": `date-input-${t}-${D}`,
                  id: `date-input-${t}-${D}`,
                  className: "n-date-single-field " + (S ? "disabled" : ""),
                  value: k[e],
                  type: "text",
                  onChange: (a) =>
                    ((e, t, a) => {
                      let l = Object.assign({}, k);
                      if (
                        ((e.target.value = e.target.value.replace(
                          /[^0-9]+/g,
                          ""
                        )),
                        2 == e.target.value.length && 2 != a)
                      ) {
                        let e = document.getElementById(
                          `date-input-${a + 1}-${D}`
                        );
                        null == e || e.focus();
                      }
                      (2 == a && e.target.value.length > 4) ||
                        ((l[t] = e.target.value),
                        I(l),
                        l.mm && l.dd && l.yyyy && B(l),
                        null == v || v(new Date(`${l.mm}/${l.dd}/${l.yyyy}`)));
                    })(a, e, t),
                  placeholder: e.toUpperCase(),
                  onKeyDown: (e) => H(e, t),
                  onBlur: () => {
                    if ([0, 1].includes(t)) {
                      let t = Object.assign({}, k);
                      1 == t[e].length && ((t[e] = `0${t[e]}`), I(t));
                    }
                    null == v || v(`${k.mm}/${k.dd}/${k.yyyy}`);
                  },
                  autoComplete: "off",
                  disabled: S,
                }),
                t < 3
                  ? r.default.createElement(
                      "span",
                      { className: "n-date-divider" },
                      "/"
                    )
                  : r.default.createElement(r.default.Fragment, null)
              )
            ),
          $
            ? "" !== O.start && "" !== O.end
              ? r.default.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  r.default.createElement(
                    "div",
                    null,
                    d.getFormattedDate(O.start) || "--"
                  ),
                  r.default.createElement("div", null, "to"),
                  r.default.createElement(
                    "div",
                    null,
                    d.getFormattedDate(O.end) || "--"
                  )
                )
              : r.default.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  "Select a date range"
                )
            : null
        )
      ),
      (k.mm || k.dd || k.yyyy) && !S
        ? r.default.createElement(
            "div",
            {
              "data-testid": "n-date-close-icon",
              className: "n-input-close-btn n-icon-container n-cursor-pointer",
              onClick: () => {
                (() => {
                  let e = Object.assign({}, k);
                  (e.mm = ""),
                    (e.dd = ""),
                    (e.yyyy = ""),
                    I(e),
                    F(""),
                    null == v || v("");
                })(),
                  null == E || E();
              },
            },
            r.default.createElement(l.SvgIcCloseRemove, null)
          )
        : r.default.createElement(r.default.Fragment, null)
    ),
    r.default.createElement(
      "div",
      { className: "n-input-underinfo", "data-testid": "n-date-underinfo" },
      (q || f) &&
        r.default.createElement(t, {
          validationState: q ? "error" : f,
          label: g || q,
          isHidden: !1,
          style: p,
          className: y,
        }),
      m &&
        r.default.createElement(
          "span",
          { className: "n-helper-text", "data-testid": "n-date-helpertext" },
          m
        )
    ),
    r.default.createElement(
      "div",
      { className: "n-date-picker-container" },
      w
        ? r.default.createElement(n, {
            dateVal: R,
            onDateClick: (e) => {
              M(e), V(!1);
            },
            onClose: () => V(!1),
            minDate: "",
            maxDate: "",
            isRange: $,
            rangeConfig: { start: O.start, min: O.min, max: O.max, end: O.end },
            getRange: (e) => P(e),
            onConfirmRange: (e) => {
              null == N || N(e), V(!1);
            },
          })
        : r.default.createElement(r.default.Fragment, null)
    )
  );
};
u.defaulProps = {
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
  disabled: !1,
};
var s = r.default.memo(u);
module.exports = s;
//# sourceMappingURL=DateInput.js.map
