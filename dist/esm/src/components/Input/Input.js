import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import n, { useState as t, useRef as a, useEffect as r } from "react";
import "./Input.scss.js";
import o from "./InputPrefix.js";
import s from "./InputSuffix.js";
import l from "../../utils/uuids.js";
import { SvgSearch as i } from "../../assets/svg-components/Action/index.js";
import c from "../../assets/error-badge.svg.js";
import u from "../../assets/warning-badge.svg.js";
import m from "../../assets/tick-green-badge.svg.js";
const f = (l) => {
  const {
      autoComplete: f,
      type: p,
      label: d,
      placeholder: x,
      disabled: h,
      required: g,
      value: v,
      showSearchIcon: b,
      id: C,
      name: $,
      maxLength: y,
      showPrefix: E,
      showSuffix: k,
      prefix: N,
      suffix: P,
      autofocus: w,
      min: j,
      max: S,
      onKeyUp: K,
      onKeyPress: I,
      onChange: F,
      onBlur: B,
      onFocus: T,
      onClick: U,
      className: L,
      style: q,
      helperText: O,
      state: A,
      stateText: _,
      onPrefixClick: z,
      onSuffixClick: D,
    } = l,
    G = e(l, [
      "autoComplete",
      "type",
      "label",
      "placeholder",
      "disabled",
      "required",
      "value",
      "showSearchIcon",
      "id",
      "name",
      "maxLength",
      "showPrefix",
      "showSuffix",
      "prefix",
      "suffix",
      "autofocus",
      "min",
      "max",
      "onKeyUp",
      "onKeyPress",
      "onChange",
      "onBlur",
      "onFocus",
      "onClick",
      "className",
      "style",
      "helperText",
      "state",
      "stateText",
      "onPrefixClick",
      "onSuffixClick",
    ]),
    [H, J] = t(v || ""),
    M = a(null),
    [Q, R] = t(""),
    [V, W] = t("");
  function X(e) {
    J(e.target.value), null == F || F(e);
  }
  function Y() {
    R("n-focused-label" + (E || b ? "-prefixed" : "")), W("n-border-focused");
  }
  return (
    r(() => {
      var e;
      l.autofocus &&
        (null === (e = null == M ? void 0 : M.current) ||
          void 0 === e ||
          e.focus()),
        (v || x) && Y();
    }, []),
    r(() => {
      J(v || "");
    }, [v]),
    n.createElement(
      n.Fragment,
      null,
      n.createElement(
        "div",
        { className: "n-form-input" },
        n.createElement(
          "div",
          {
            className: `n-input-label-container ${
              E || b ? "n-input-label-prefixed" : ""
            } ${Q}`,
          },
          d &&
            n.createElement(
              "label",
              { className: "n-input-label" },
              n.createElement(n.Fragment, null, d, " ", g ? " *" : "")
            )
        ),
        n.createElement(
          "div",
          { className: "n-input-grp" },
          b &&
            n.createElement(
              "span",
              { className: "n-search-icon" },
              n.createElement(i, { className: "search-icon" })
            ),
          E &&
            "textarea" !== p &&
            n.createElement(o, { prefix: N, onPrefixClick: z }),
          n.createElement(
            "div",
            {
              className: `n-input-container ${V} ${(function () {
                let e = "";
                return A && (e = `n-${A}-border`), e;
              })()}`,
            },
            "textarea" !== p &&
              n.createElement(
                "input",
                Object.assign(
                  {
                    ref: M,
                    className: `n-input ${(function () {
                      let e = "";
                      return (
                        (e = `${e} ${
                          b && "textarea" !== p
                            ? "n-search-input-padding input-prefixed"
                            : ""
                        }`),
                        (e = `${e} ${L || ""}`),
                        E && k
                          ? (e = `${e} input-contained`)
                          : ((e = `${e} ${
                              E ? "n-remove-left-border input-prefixed" : ""
                            }`),
                            (e = `${e} ${
                              k ? "n-remove-right-border input-suffixed" : ""
                            }`)),
                        e
                      );
                    })()}`,
                    onKeyUp: K,
                    onChange: F,
                    onBlur: function (e) {
                      var n;
                      (null === (n = M.current) || void 0 === n
                        ? void 0
                        : n.value) ||
                        x ||
                        (R(""), W("")),
                        null == B || B(e);
                    },
                    onFocus: function (e) {
                      Y(), null == T || T(e);
                    },
                    onClick: U,
                    onKeyPress: I,
                    value: H,
                  },
                  (function () {
                    const e = {};
                    return (
                      j && (e.min = j),
                      S && (e.max = S),
                      void 0 !== y && (e.maxLength = y),
                      f && (e.autoComplete = f),
                      C && (e.id = C),
                      p && (e.type = p),
                      h && (e.disabled = h),
                      x && (e.placeholder = x),
                      q && (e.style = q),
                      e
                    );
                  })(),
                  { onInput: X },
                  G
                )
              ),
            "textarea" === p &&
              n.createElement(
                "textarea",
                Object.assign(
                  {
                    ref: M,
                    onKeyUp: K,
                    onChange: F,
                    onBlur: B,
                    onFocus: T,
                    onClick: U,
                    onKeyPress: I,
                    className: `n-input input-text ${
                      "textarea" === p && "n-input-textarea"
                    }`,
                  },
                  (function () {
                    const e = {};
                    return (
                      void 0 !== y && (e.maxLength = y),
                      h && (e.disabled = h),
                      x && (e.placeholder = x),
                      q && (e.style = q),
                      e
                    );
                  })(),
                  { onInput: X, value: H },
                  G
                )
              )
          ),
          "textarea" !== p &&
            k &&
            n.createElement(s, { suffix: P, onSuffixClick: D })
        ),
        n.createElement(
          "div",
          { className: "n-input-underinfo" },
          "default" !== A &&
            (function (e) {
              let t, a;
              switch (A) {
                case "error":
                  (t = "n-field-error"), (a = c);
                  break;
                case "success":
                  (t = "n-field-success"), (a = m);
                  break;
                case "warning":
                  (t = "n-field-warning"), (a = u);
              }
              return n.createElement(
                "div",
                { className: `n-state-container ${t}` },
                n.createElement(
                  "div",
                  { className: "n-svg-container" },
                  " ",
                  n.createElement("img", { src: a, alt: `${A} badge` })
                ),
                e
              );
            })(_),
          O && n.createElement("span", { className: "n-helper-text" }, O)
        )
      )
    )
  );
};
f.defaultProps = {
  autoComplete: "",
  type: "text",
  label: "",
  placeholder: "",
  disabled: !1,
  required: !1,
  value: "",
  showSearchIcon: !1,
  id: `n-input${l()}`,
  showPrefix: !1,
  showSuffix: !1,
  autofocus: !1,
  onKeyUp: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
  state: "default",
  stateText: "",
  onSuffixClick: () => {},
  onPrefixClick: () => {},
};
var p = n.memo(f);
export { p as default };
//# sourceMappingURL=Input.js.map
