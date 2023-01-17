"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Input.scss.js");
var n = require("./InputPrefix.js"),
  a = require("./InputSuffix.js"),
  r = require("../../utils/uuids.js"),
  l = require("../../assets/svg-components/Action/index.js"),
  s = require("../../assets/error-badge.svg.js"),
  u = require("../../assets/warning-badge.svg.js"),
  i = require("../../assets/tick-green-badge.svg.js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c = o(t);
const f = (r) => {
  const {
      autoComplete: o,
      type: f,
      label: d,
      placeholder: m,
      disabled: p,
      required: x,
      value: h,
      showSearchIcon: v,
      id: g,
      name: b,
      maxLength: C,
      showPrefix: E,
      showSuffix: y,
      prefix: $,
      suffix: k,
      autofocus: S,
      min: N,
      max: P,
      onKeyUp: q,
      onKeyPress: w,
      onChange: j,
      onBlur: K,
      onFocus: I,
      onClick: F,
      className: B,
      style: T,
      helperText: U,
      state: L,
      stateText: _,
      onPrefixClick: O,
      onSuffixClick: A,
    } = r,
    R = e.__rest(r, [
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
    [z, D] = t.useState(h || ""),
    G = t.useRef(null),
    [H, J] = t.useState(""),
    [M, Q] = t.useState("");
  function V(e) {
    D(e.target.value), null == j || j(e);
  }
  function W() {
    J("n-focused-label" + (E || v ? "-prefixed" : "")), Q("n-border-focused");
  }
  return (
    t.useEffect(() => {
      var e;
      r.autofocus &&
        (null === (e = null == G ? void 0 : G.current) ||
          void 0 === e ||
          e.focus()),
        (h || m) && W();
    }, []),
    t.useEffect(() => {
      D(h || "");
    }, [h]),
    c.default.createElement(
      c.default.Fragment,
      null,
      c.default.createElement(
        "div",
        { className: "n-form-input" },
        c.default.createElement(
          "div",
          {
            className: `n-input-label-container ${
              E || v ? "n-input-label-prefixed" : ""
            } ${H}`,
          },
          d &&
            c.default.createElement(
              "label",
              { className: "n-input-label" },
              c.default.createElement(
                c.default.Fragment,
                null,
                d,
                " ",
                x ? " *" : ""
              )
            )
        ),
        c.default.createElement(
          "div",
          { className: "n-input-grp" },
          v &&
            c.default.createElement(
              "span",
              { className: "n-search-icon" },
              c.default.createElement(l.SvgSearch, { className: "search-icon" })
            ),
          E &&
            "textarea" !== f &&
            c.default.createElement(n, { prefix: $, onPrefixClick: O }),
          c.default.createElement(
            "div",
            {
              className: `n-input-container ${M} ${(function () {
                let e = "";
                return L && (e = `n-${L}-border`), e;
              })()}`,
            },
            "textarea" !== f &&
              c.default.createElement(
                "input",
                Object.assign(
                  {
                    ref: G,
                    className: `n-input ${(function () {
                      let e = "";
                      return (
                        (e = `${e} ${
                          v && "textarea" !== f
                            ? "n-search-input-padding input-prefixed"
                            : ""
                        }`),
                        (e = `${e} ${B || ""}`),
                        E && y
                          ? (e = `${e} input-contained`)
                          : ((e = `${e} ${
                              E ? "n-remove-left-border input-prefixed" : ""
                            }`),
                            (e = `${e} ${
                              y ? "n-remove-right-border input-suffixed" : ""
                            }`)),
                        e
                      );
                    })()}`,
                    onKeyUp: q,
                    onChange: j,
                    onBlur: function (e) {
                      var t;
                      (null === (t = G.current) || void 0 === t
                        ? void 0
                        : t.value) ||
                        m ||
                        (J(""), Q("")),
                        null == K || K(e);
                    },
                    onFocus: function (e) {
                      W(), null == I || I(e);
                    },
                    onClick: F,
                    onKeyPress: w,
                    value: z,
                  },
                  (function () {
                    const e = {};
                    return (
                      N && (e.min = N),
                      P && (e.max = P),
                      void 0 !== C && (e.maxLength = C),
                      o && (e.autoComplete = o),
                      g && (e.id = g),
                      f && (e.type = f),
                      p && (e.disabled = p),
                      m && (e.placeholder = m),
                      T && (e.style = T),
                      e
                    );
                  })(),
                  { onInput: V },
                  R
                )
              ),
            "textarea" === f &&
              c.default.createElement(
                "textarea",
                Object.assign(
                  {
                    ref: G,
                    onKeyUp: q,
                    onChange: j,
                    onBlur: K,
                    onFocus: I,
                    onClick: F,
                    onKeyPress: w,
                    className: `n-input input-text ${
                      "textarea" === f && "n-input-textarea"
                    }`,
                  },
                  (function () {
                    const e = {};
                    return (
                      void 0 !== C && (e.maxLength = C),
                      p && (e.disabled = p),
                      m && (e.placeholder = m),
                      T && (e.style = T),
                      e
                    );
                  })(),
                  { onInput: V, value: z },
                  R
                )
              )
          ),
          "textarea" !== f &&
            y &&
            c.default.createElement(a, { suffix: k, onSuffixClick: A })
        ),
        c.default.createElement(
          "div",
          { className: "n-input-underinfo" },
          "default" !== L &&
            (function (e) {
              let t, n;
              switch (L) {
                case "error":
                  (t = "n-field-error"), (n = s);
                  break;
                case "success":
                  (t = "n-field-success"), (n = i);
                  break;
                case "warning":
                  (t = "n-field-warning"), (n = u);
              }
              return c.default.createElement(
                "div",
                { className: `n-state-container ${t}` },
                c.default.createElement(
                  "div",
                  { className: "n-svg-container" },
                  " ",
                  c.default.createElement("img", { src: n, alt: `${L} badge` })
                ),
                e
              );
            })(_),
          U &&
            c.default.createElement("span", { className: "n-helper-text" }, U)
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
};
var d = c.default.memo(f);
module.exports = d;
//# sourceMappingURL=Input.js.map
