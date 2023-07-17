import e, { useState as t, useEffect as a } from "react";
import n from "../Validation/Validation.js";
import l from "../Tooltip/Tooltip.js";
import {
  SvgIcHelp as i,
  SvgIcCalendar as d,
  SvgIcCloseRemove as r,
} from "../../assets/svg-components/Nitrozen/index.js";
import "./DateInput.scss.js";
import o from "../DatePicker/DatePicker.js";
import { getFormattedDate as s } from "../../utils/dateHandler.js";
const m = (m) => {
  const {
      label: c,
      required: u,
      useDatePicker: p,
      dateValue: y,
      helperText: g,
      validationState: f,
      validationText: v,
      validationClassName: E,
      validationStyle: D,
      getDateValue: $,
      closeClicked: N,
      id: b,
      isRange: C,
      rangeConfig: x,
      onConfirmRange: h,
      defaultValidation: k,
      disabled: j,
      tooltipText: S,
      showTooltip: T,
      tooltipIcon: w,
    } = m,
    [I, R] = t({ mm: "", dd: "", yyyy: "" }),
    [V, F] = t(""),
    [O, P] = t(""),
    [B, M] = t(!1),
    [q, z] = t({ start: "", end: "", min: "", max: "" });
  a(() => {
    if (y) {
      let e = new Date(y),
        t = Object.assign({}, I);
      (t.mm =
        e.getMonth() + 1 < 10
          ? "0" + (e.getMonth() + 1).toString()
          : (e.getMonth() + 1).toString()),
        (t.dd =
          e.getDate() < 10
            ? "0" + e.getDate().toString()
            : e.getDate().toString()),
        (t.yyyy = e.getFullYear().toString()),
        R(t);
    }
    C && x && z(x);
  }, []);
  const H = (e) => {
    if (k) {
      if (e.mm && (0 === e.mm || e.mm > 12)) return F("Invalid Date");
      if ((e.yyyy && e.yyyy.length < 4) || ["0000", "9999"].includes(e.yyyy))
        return F("Invalid Date");
      let n = ((t = e.mm), (a = e.yyyy), new Date(a, t, 0).getDate());
      if (e.dd && (0 == e.dd || e.dd > n)) return F("Invalid Date");
      F("");
    }
    var t, a;
  };
  function K(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e, t) {
        if (e >= 0 && !t.target.value) {
          let t = document.getElementById(`date-input-${e - 1}-${b}`);
          null == t || t.focus();
        }
        H(I);
      })(t, e);
  }
  const U = (e) => {
    P(e);
    const t = e.split("/");
    let a = Object.assign({}, I);
    (a.mm = t[0]),
      (a.dd = t[1]),
      (a.yyyy = t[2]),
      R(a),
      null == $ || $(new Date(`${a.mm}/${a.dd}/${a.yyyy}`));
  };
  return e.createElement(
    "div",
    {
      className: "n-date-wrapper " + (j ? "n-input-group-disabled" : ""),
      "data-testid": "date-input",
    },
    e.createElement(
      "div",
      { className: "n-input-label-container" },
      c &&
        e.createElement(
          "label",
          { className: "n-input-label", "data-testid": "n-date-label" },
          e.createElement(
            e.Fragment,
            null,
            e.createElement("p", null, c, u ? "*" : ""),
            T &&
              e.createElement(
                "span",
                { className: "n-input-tooltip" },
                S &&
                  e.createElement(l, {
                    tooltipContent: S,
                    icon:
                      w || e.createElement(i, { style: { fontSize: "14px" } }),
                    position: "top",
                  })
              )
          )
        )
    ),
    e.createElement(
      "div",
      {
        "data-testid": "n-date-inputfield",
        className:
          "n-date-inputfield " + (V ? "n-date-error" : f ? `n-${f}-field` : ""),
      },
      e.createElement(
        "div",
        {
          className: "n-date-left-group",
          "data-testid": "n-date-left-group",
          onClick: () => (p ? M(!B) : () => {}),
        },
        e.createElement(
          "div",
          {
            "data-testid": "n-datepicker-icon",
            className: "n-icon-container " + (p ? "n-cursor-pointer" : ""),
          },
          e.createElement(d, null)
        ),
        e.createElement(
          "div",
          { className: "n-date-input-group" },
          !C &&
            Object.keys(I).map((t, a) =>
              e.createElement(
                e.Fragment,
                null,
                e.createElement("input", {
                  key: `date-input-${a}-${b}`,
                  "data-testid": `date-input-${a}-${b}`,
                  id: `date-input-${a}-${b}`,
                  className: "n-date-single-field " + (j ? "disabled" : ""),
                  value: I[t],
                  type: "text",
                  onChange: (e) =>
                    ((e, t, a) => {
                      let n = Object.assign({}, I);
                      if (
                        ((e.target.value = e.target.value.replace(
                          /[^0-9]+/g,
                          ""
                        )),
                        2 == e.target.value.length && 2 != a)
                      ) {
                        let e = document.getElementById(
                          `date-input-${a + 1}-${b}`
                        );
                        null == e || e.focus();
                      }
                      (2 == a && e.target.value.length > 4) ||
                        ((n[t] = e.target.value),
                        R(n),
                        n.mm && n.dd && n.yyyy && H(n),
                        null == $ || $(new Date(`${n.mm}/${n.dd}/${n.yyyy}`)));
                    })(e, t, a),
                  placeholder: t.toUpperCase(),
                  onKeyDown: (e) => K(e, a),
                  onBlur: () => {
                    if ([0, 1].includes(a)) {
                      let e = Object.assign({}, I);
                      1 == e[t].length && ((e[t] = `0${e[t]}`), R(e));
                    }
                    null == $ || $(`${I.mm}/${I.dd}/${I.yyyy}`);
                  },
                  autoComplete: "off",
                  disabled: j,
                }),
                a < 3
                  ? e.createElement(
                      "span",
                      { className: "n-date-divider" },
                      "/"
                    )
                  : e.createElement(e.Fragment, null)
              )
            ),
          C
            ? "" !== q.start && "" !== q.end
              ? e.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  e.createElement("div", null, s(q.start) || "--"),
                  e.createElement("div", null, "to"),
                  e.createElement("div", null, s(q.end) || "--")
                )
              : e.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  "Select a date range"
                )
            : null
        )
      ),
      (I.mm || I.dd || I.yyyy) && !j
        ? e.createElement(
            "div",
            {
              "data-testid": "n-date-close-icon",
              className: "n-input-close-btn n-icon-container n-cursor-pointer",
              onClick: () => {
                (() => {
                  let e = Object.assign({}, I);
                  (e.mm = ""),
                    (e.dd = ""),
                    (e.yyyy = ""),
                    R(e),
                    F(""),
                    null == $ || $("");
                })(),
                  null == N || N();
              },
            },
            e.createElement(r, null)
          )
        : e.createElement(e.Fragment, null)
    ),
    e.createElement(
      "div",
      { className: "n-input-underinfo", "data-testid": "n-date-underinfo" },
      (V || f) &&
        e.createElement(n, {
          validationState: V ? "error" : f,
          label: v || V,
          isHidden: !1,
          style: D,
          className: E,
        }),
      g &&
        e.createElement(
          "span",
          { className: "n-helper-text", "data-testid": "n-date-helpertext" },
          g
        )
    ),
    e.createElement(
      "div",
      { className: "n-date-picker-container" },
      B
        ? e.createElement(o, {
            dateVal: O,
            onDateClick: (e) => {
              U(e), M(!1);
            },
            onClose: () => M(!1),
            minDate: "",
            maxDate: "",
            isRange: C,
            rangeConfig: { start: q.start, min: q.min, max: q.max, end: q.end },
            getRange: (e) => z(e),
            onConfirmRange: (e) => {
              null == h || h(e), M(!1);
            },
          })
        : e.createElement(e.Fragment, null)
    )
  );
};
m.defaulProps = {
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
var c = e.memo(m);
export { c as default };
//# sourceMappingURL=DateInput.js.map
