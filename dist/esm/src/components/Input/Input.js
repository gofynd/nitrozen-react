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
      showSearchIcon: C,
      id: g,
      name: y,
      maxLength: E,
      showPrefix: $,
      showSuffix: N,
      prefix: P,
      suffix: k,
      autofocus: S,
      min: w,
      max: T,
      onKeyUp: j,
      onKeyPress: I,
      onChange: K,
      onBlur: F,
      onFocus: B,
      onClick: L,
      className: U,
      style: q,
      helperText: z,
      state: O,
      stateText: V,
      onPrefixClick: H,
      onSuffixClick: _,
      tooltipText: A,
      showTooltip: D,
      tooltipIcon: G,
    } = r,
    J = e(r, [
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
      "tooltipText",
      "showTooltip",
      "tooltipIcon",
    ]),
    [M, Q] = n(v || ""),
    R = o(null),
    [W, X] = n(""),
    [Y, Z] = n(""),
    [ee, te] = n("");
  function ne(e) {
    Q(e.target.value), null == K || K(e);
  }
  function oe() {
    X("n-focused-label" + ($ || C ? "-prefixed" : "")), Z("n-border-focused");
  }
  return (
    a(() => {
      var e;
      r.autofocus &&
        (null === (e = null == R ? void 0 : R.current) ||
          void 0 === e ||
          e.focus()),
        (v || x) && oe();
    }, []),
    a(() => {
      Q(v || "");
    }, [v]),
    t.createElement(
      "div",
      { className: `n-form-input ${h && "n-input-group-disabled"}` },
      t.createElement(
        "div",
        {
          className: `n-input-label-container ${
            $ || C ? "n-input-label-prefixed" : ""
          } ${W}`,
        },
        d &&
          t.createElement(
            "label",
            { className: "n-input-label" },
            t.createElement(
              t.Fragment,
              null,
              d,
              " ",
              b ? " *" : "",
              D &&
                t.createElement(
                  "span",
                  { className: "n-input-tooltip" },
                  A &&
                    t.createElement(c, {
                      tooltipContent: A,
                      icon:
                        G ||
                        t.createElement(s, { style: { fontSize: "14px" } }),
                      position: "top",
                    })
                )
            )
          ),
        E &&
          "string" == typeof M &&
          "number" != f &&
          t.createElement(
            "label",
            { className: "n-input-label n-input-maxLength" },
            t.createElement(t.Fragment, null, M.length, "/", E)
          )
      ),
      t.createElement(
        "div",
        { className: "n-input-grp" },
        C &&
          t.createElement(
            "span",
            { className: "n-search-icon" },
            t.createElement(u, { className: "search-icon" })
          ),
        t.createElement(
          "div",
          {
            className: `n-input-container ${Y} ${ee} ${
              r.state && "default" !== r.state ? `n-${O}-border` : ""
            }`,
          },
          $ &&
            "textarea" !== f &&
            t.createElement(l, { prefix: P, onPrefixClick: H }),
          "textarea" !== f &&
            t.createElement(
              "input",
              Object.assign(
                {
                  ref: R,
                  className: `n-input ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${
                        C && "textarea" !== f
                          ? "n-search-input-padding input-prefixed"
                          : ""
                      }`),
                      (e = `${e} ${U || ""}`),
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
                  onKeyUp: j,
                  onChange: K,
                  onBlur: function (e) {
                    var t;
                    (null === (t = R.current) || void 0 === t
                      ? void 0
                      : t.value) ||
                      x ||
                      (X(""), Z("")),
                      te(""),
                      null == F || F(e);
                  },
                  onFocus: (e) => {
                    oe(), null == B || B(e);
                  },
                  onClick: (e) => {
                    te("n-focused-border"), null == L || L(e);
                  },
                  onKeyPress: I,
                  value: M,
                },
                (function () {
                  const e = {};
                  return (
                    w && (e.min = w),
                    T && (e.max = T),
                    void 0 !== E && (e.maxLength = E),
                    m && (e.autoComplete = m),
                    g && (e.id = g),
                    f && (e.type = f),
                    h && (e.disabled = h),
                    x && (e.placeholder = x),
                    q && (e.style = q),
                    e
                  );
                })(),
                { onInput: ne },
                J
              )
            ),
          "textarea" === f &&
            t.createElement(
              "textarea",
              Object.assign(
                {
                  ref: R,
                  onKeyUp: j,
                  onChange: K,
                  onBlur: F,
                  onFocus: (e) => {
                    oe(), null == B || B(e);
                  },
                  onClick: (e) => {
                    te("n-focused-border"), null == L || L(e);
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
                    q && (e.style = q),
                    e
                  );
                })(),
                { onInput: ne, value: M },
                J
              )
            ),
          "textarea" !== f &&
            N &&
            t.createElement(i, { suffix: k, onSuffixClick: _ })
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
