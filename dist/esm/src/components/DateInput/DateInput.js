import e, { useState as t, useEffect as a } from "react";
import n from "../Validation/Validation.js";
import {
  SvgIcCalendar as l,
  SvgIcCloseRemove as i,
} from "../../assets/svg-components/Nitrozen/index.js";
import "./DateInput.scss.js";
import d from "../DatePicker/DatePicker.js";
import { getFormattedDate as r } from "../../utils/dateHandler.js";
const m = (m) => {
  const {
      label: s,
      required: o,
      useDatePicker: c,
      dateValue: u,
      helperText: y,
      validationState: g,
      validationText: p,
      validationClassName: f,
      validationStyle: v,
      getDateValue: E,
      closeClicked: D,
      id: $,
      isRange: N,
      rangeConfig: C,
      onConfirmRange: b,
      defaultValidation: h,
    } = m,
    [k, x] = t({ mm: "", dd: "", yyyy: "" }),
    [j, S] = t(""),
    [R, V] = t(""),
    [w, F] = t(!1),
    [I, O] = t({ start: "", end: "", min: "", max: "" });
  a(() => {
    if (u) {
      let e = new Date(u),
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
        x(t);
    }
    N && C && O(C);
  }, []);
  const P = (e) => {
    if (h) {
      if (e.mm && (0 === e.mm || e.mm > 12)) return S("Invalid Date");
      if ((e.yyyy && e.yyyy.length < 4) || ["0000", "9999"].includes(e.yyyy))
        return S("Invalid Date");
      let n = ((t = e.mm), (a = e.yyyy), new Date(a, t, 0).getDate());
      if (e.dd && (0 == e.dd || e.dd > n)) return S("Invalid Date");
      S("");
    }
    var t, a;
  };
  function T(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e, t) {
        if (e >= 0 && !t.target.value) {
          let t = document.getElementById(`date-input-${e - 1}-${$}`);
          null == t || t.focus();
        }
        P(k);
      })(t, e);
  }
  const B = (e) => {
    V(e);
    const t = e.split("/");
    let a = Object.assign({}, k);
    (a.mm = t[0]),
      (a.dd = t[1]),
      (a.yyyy = t[2]),
      x(a),
      null == E || E(new Date(`${a.mm}/${a.dd}/${a.yyyy}`));
  };
  return e.createElement(
    "div",
    { className: "n-date-wrapper" },
    e.createElement(
      "div",
      { className: "n-input-label-container" },
      s &&
        e.createElement(
          "label",
          { className: "n-input-label", "data-testid": "n-date-label" },
          e.createElement(e.Fragment, null, s, " ", o ? " *" : "")
        )
    ),
    e.createElement(
      "div",
      {
        "data-testid": "n-date-inputfield",
        className:
          "n-date-inputfield " + (j ? "n-date-error" : g ? `n-${g}-field` : ""),
      },
      e.createElement(
        "div",
        {
          className: "n-date-left-group",
          "data-testid": "n-date-left-group",
          onClick: () => (c ? F(!w) : () => {}),
        },
        e.createElement(
          "div",
          {
            "data-testid": "n-datepicker-icon",
            className: "n-icon-container " + (c ? "n-cursor-pointer" : ""),
          },
          e.createElement(l, null)
        ),
        e.createElement(
          "div",
          { className: "n-date-input-group" },
          !N &&
            Object.keys(k).map((t, a) =>
              e.createElement(
                e.Fragment,
                null,
                e.createElement("input", {
                  key: `date-input-${a}-${$}`,
                  "data-testid": `date-input-${a}-${$}`,
                  id: `date-input-${a}-${$}`,
                  className: "n-date-single-field",
                  value: k[t],
                  type: "text",
                  onChange: (e) =>
                    ((e, t, a) => {
                      let n = Object.assign({}, k);
                      if (
                        ((e.target.value = e.target.value.replace(
                          /[^0-9]+/g,
                          ""
                        )),
                        2 == e.target.value.length && 2 != a)
                      ) {
                        let e = document.getElementById(
                          `date-input-${a + 1}-${$}`
                        );
                        null == e || e.focus();
                      }
                      (2 == a && e.target.value.length > 4) ||
                        ((n[t] = e.target.value),
                        x(n),
                        n.mm && n.dd && n.yyyy && P(n),
                        null == E || E(new Date(`${n.mm}/${n.dd}/${n.yyyy}`)));
                    })(e, t, a),
                  placeholder: t.toUpperCase(),
                  onKeyDown: (e) => T(e, a),
                  onBlur: () => {
                    if ([0, 1].includes(a)) {
                      let e = Object.assign({}, k);
                      1 == e[t].length && ((e[t] = `0${e[t]}`), x(e));
                    }
                    null == E || E(`${k.mm}/${k.dd}/${k.yyyy}`);
                  },
                  autoComplete: "off",
                  disabled: !!c,
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
          N
            ? "" !== I.start && "" !== I.end
              ? e.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  e.createElement("div", null, r(I.start) || "--"),
                  e.createElement("div", null, "to"),
                  e.createElement("div", null, r(I.end) || "--")
                )
              : e.createElement(
                  "div",
                  { className: "n-date-range-field" },
                  "Select a date range"
                )
            : null
        )
      ),
      k.mm || k.dd || k.yyyy
        ? e.createElement(
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
                    x(e),
                    S(""),
                    null == E || E("");
                })(),
                  null == D || D();
              },
            },
            e.createElement(i, null)
          )
        : e.createElement(e.Fragment, null)
    ),
    e.createElement(
      "div",
      { className: "n-input-underinfo", "data-testid": "n-date-underinfo" },
      (j || g) &&
        e.createElement(n, {
          validationState: j ? "error" : g,
          label: p || j,
          isHidden: !1,
          style: v,
          className: f,
        }),
      y &&
        e.createElement(
          "span",
          { className: "n-helper-text", "data-testid": "n-date-helpertext" },
          y
        )
    ),
    e.createElement(
      "div",
      { className: "n-date-picker-container" },
      w
        ? e.createElement(d, {
            dateVal: R,
            onDateClick: (e) => {
              B(e), F(!1);
            },
            onClose: () => F(!1),
            minDate: "",
            maxDate: "",
            isRange: N,
            rangeConfig: { start: I.start, min: I.min, max: I.max, end: I.end },
            getRange: (e) => O(e),
            onConfirmRange: (e) => {
              null == b || b(e), F(!1);
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
};
var s = e.memo(m);
export { s as default };
//# sourceMappingURL=DateInput.js.map
