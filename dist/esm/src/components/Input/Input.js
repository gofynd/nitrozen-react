import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useRef as o, useEffect as a } from "react";
import "./Input.scss.js";
import l from "./InputPrefix.js";
import i from "./InputSuffix.js";
import r from "../../utils/uuids.js";
import {
  SvgIcHelp as s,
  SvgIcSearch as u,
} from "../../assets/svg-components/Nitrozen/index.js";
import c from "../Tooltip/Tooltip.js";
import p from "../Validation/Validation.js";
const m = (r) => {
  const {
      autoComplete: m,
      type: f,
      label: d,
      placeholder: x,
      disabled: h,
      required: b,
      value: v,
      showSearchIcon: y,
      id: C,
      name: g,
      maxLength: E,
      showPrefix: $,
      showSuffix: N,
      prefix: w,
      suffix: P,
      autofocus: k,
      min: K,
      max: S,
      onKeyUp: T,
      onKeyDown: j,
      onKeyPress: I,
      onChange: F,
      onBlur: B,
      onFocus: L,
      onClick: U,
      className: q,
      style: D,
      helperText: z,
      state: O,
      stateText: V,
      onPrefixClick: H,
      onSuffixClick: _,
      tooltipText: A,
      showTooltip: G,
      tooltipIcon: J,
    } = r,
    M = e(r, [
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
      "onKeyDown",
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
      "tooltipText",
      "showTooltip",
      "tooltipIcon",
    ]),
    [Q, R] = n(v || ""),
    W = o(null),
    [X, Y] = n(""),
    [Z, ee] = n(""),
    [te, ne] = n("");
  function oe(e) {
    R(e.target.value), null == F || F(e);
  }
  function ae() {
    Y("n-focused-label" + ($ || y ? "-prefixed" : "")), ee("n-border-focused");
  }
  return (
    a(() => {
      var e;
      r.autofocus &&
        (null === (e = null == W ? void 0 : W.current) ||
          void 0 === e ||
          e.focus()),
        (v || x) && ae();
    }, []),
    a(() => {
      R(v || "");
    }, [v]),
    t.createElement(
      "div",
      { className: `n-form-input ${h && "n-input-group-disabled"}` },
      t.createElement(
        "div",
        {
          className: `n-input-label-container ${
            $ || y ? "n-input-label-prefixed" : ""
          } ${X}`,
        },
        d &&
          t.createElement(
            "label",
            { className: "n-input-label" },
            t.createElement(
              t.Fragment,
              null,
              d,
              b ? "*" : "",
              G &&
                t.createElement(
                  "span",
                  { className: "n-input-tooltip" },
                  A &&
                    t.createElement(c, {
                      tooltipContent: A,
                      icon:
                        J ||
                        t.createElement(s, { style: { fontSize: "14px" } }),
                      position: "top",
                    })
                )
            )
          ),
        E &&
          "string" == typeof Q &&
          "number" != f &&
          t.createElement(
            "label",
            { className: "n-input-label n-input-maxLength" },
            t.createElement(t.Fragment, null, Q.length, "/", E)
          )
      ),
      t.createElement(
        "div",
        { className: "n-input-grp" },
        y &&
          t.createElement(
            "span",
            { className: "n-search-icon" },
            t.createElement(u, { className: "search-icon" })
          ),
        t.createElement(
          "div",
          {
            className: `n-input-container ${Z} ${te} ${
              r.state && "default" !== r.state ? `n-${O}-border` : ""
            }`,
          },
          $ &&
            "textarea" !== f &&
            t.createElement(l, { prefix: w, onPrefixClick: H }),
          "textarea" !== f &&
            t.createElement(
              "input",
              Object.assign(
                {
                  ref: W,
                  className: `n-input ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${
                        y && "textarea" !== f
                          ? "n-search-input-padding input-prefixed"
                          : ""
                      }`),
                      (e = `${e} ${q || ""}`),
                      $ && N
                        ? (e = `${e} input-contained`)
                        : ((e = `${e} ${
                            $ ? "n-remove-left-border input-prefixed" : ""
                          }`),
                          (e = `${e} ${
                            N ? "n-remove-right-border input-suffixed" : ""
                          }`)),
                      e
                    );
                  })()}`,
                  onKeyUp: T,
                  onKeyDown: j,
                  onChange: F,
                  onBlur: function (e) {
                    var t;
                    (null === (t = W.current) || void 0 === t
                      ? void 0
                      : t.value) ||
                      x ||
                      (Y(""), ee("")),
                      ne(""),
                      null == B || B(e);
                  },
                  onFocus: (e) => {
                    ae(), null == L || L(e);
                  },
                  onClick: (e) => {
                    ne("n-focused-border"), null == U || U(e);
                  },
                  onKeyPress: I,
                  value: Q,
                },
                (function () {
                  const e = {};
                  return (
                    K && (e.min = K),
                    S && (e.max = S),
                    void 0 !== E && (e.maxLength = E),
                    m && (e.autoComplete = m),
                    C && (e.id = C),
                    f && (e.type = f),
                    h && (e.disabled = h),
                    x && (e.placeholder = x),
                    D && (e.style = D),
                    e
                  );
                })(),
                { onInput: oe },
                M
              )
            ),
          "textarea" === f &&
            t.createElement(
              "textarea",
              Object.assign(
                {
                  ref: W,
                  onKeyUp: T,
                  onChange: F,
                  onBlur: B,
                  onFocus: (e) => {
                    ae(), null == L || L(e);
                  },
                  onClick: (e) => {
                    ne("n-focused-border"), null == U || U(e);
                  },
                  onKeyPress: I,
                  className: `n-input input-text ${
                    "textarea" === f && "n-input-textarea"
                  }`,
                },
                (function () {
                  const e = {};
                  return (
                    void 0 !== E && (e.maxLength = E),
                    h && (e.disabled = h),
                    x && (e.placeholder = x),
                    D && (e.style = D),
                    e
                  );
                })(),
                { onInput: oe, value: Q },
                M
              )
            ),
          "textarea" !== f &&
            N &&
            t.createElement(i, { suffix: P, onSuffixClick: _ })
        )
      ),
      t.createElement(
        "div",
        { className: "n-input-underinfo" },
        "default" !== r.state &&
          t.createElement(p, {
            validationState: r.state,
            label: V,
            isHidden: !1,
          }),
        z && t.createElement("span", { className: "n-helper-text" }, z)
      )
    )
  );
};
m.defaultProps = {
  autoComplete: "",
  type: "text",
  label: "",
  placeholder: "",
  disabled: !1,
  required: !1,
  value: "",
  showSearchIcon: !1,
  id: `n-input${r()}`,
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
  tooltip: null,
};
var f = t.memo(m);
export { f as default };
//# sourceMappingURL=Input.js.map
