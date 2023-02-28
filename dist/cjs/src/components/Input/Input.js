"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react");
require("./Input.scss.js");
var n = require("./InputPrefix.js"),
  a = require("./InputSuffix.js"),
  l = require("../../utils/uuids.js"),
  o = require("../../assets/svg-components/Nitrozen/index.js"),
  u = require("../Tooltip/Tooltip.js"),
  i = require("../Validation/Validation.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = r(t);
const c = (l) => {
  const {
      autoComplete: r,
      type: c,
      label: f,
      placeholder: d,
      disabled: p,
      required: m,
      value: x,
      showSearchIcon: h,
      id: v,
      name: b,
      maxLength: g,
      showPrefix: C,
      showSuffix: E,
      prefix: y,
      suffix: S,
      autofocus: $,
      min: N,
      max: P,
      onKeyUp: k,
      onKeyPress: q,
      onChange: I,
      onBlur: j,
      onFocus: w,
      onClick: T,
      className: K,
      style: F,
      helperText: B,
      state: L,
      stateText: U,
      onPrefixClick: _,
      onSuffixClick: z,
      tooltipText: H,
      showTooltip: O,
      tooltipIcon: V,
    } = l,
    R = e.__rest(l, [
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
    [A, D] = t.useState(x || ""),
    G = t.useRef(null),
    [J, M] = t.useState(""),
    [Q, W] = t.useState(""),
    [X, Y] = t.useState("");
  function Z(e) {
    D(e.target.value), null == I || I(e);
  }
  function ee() {
    M("n-focused-label" + (C || h ? "-prefixed" : "")), W("n-border-focused");
  }
  return (
    t.useEffect(() => {
      var e;
      l.autofocus &&
        (null === (e = null == G ? void 0 : G.current) ||
          void 0 === e ||
          e.focus()),
        (x || d) && ee();
    }, []),
    t.useEffect(() => {
      D(x || "");
    }, [x]),
    s.default.createElement(
      "div",
      { className: `n-form-input ${p && "n-input-group-disabled"}` },
      s.default.createElement(
        "div",
        {
          className: `n-input-label-container ${
            C || h ? "n-input-label-prefixed" : ""
          } ${J}`,
        },
        f &&
          s.default.createElement(
            "label",
            { className: "n-input-label" },
            s.default.createElement(
              s.default.Fragment,
              null,
              f,
              " ",
              m ? " *" : "",
              O &&
                s.default.createElement(
                  "span",
                  { className: "n-input-tooltip" },
                  H &&
                    s.default.createElement(u, {
                      tooltipContent: H,
                      icon:
                        V ||
                        s.default.createElement(o.SvgIcHelp, {
                          style: { fontSize: "14px" },
                        }),
                      position: "top",
                    })
                )
            )
          ),
        g &&
          "string" == typeof A &&
          "number" != c &&
          s.default.createElement(
            "label",
            { className: "n-input-label n-input-maxLength" },
            s.default.createElement(s.default.Fragment, null, A.length, "/", g)
          )
      ),
      s.default.createElement(
        "div",
        { className: "n-input-grp" },
        h &&
          s.default.createElement(
            "span",
            { className: "n-search-icon" },
            s.default.createElement(o.SvgIcSearch, { className: "search-icon" })
          ),
        s.default.createElement(
          "div",
          {
            className: `n-input-container ${Q} ${X} ${
              l.state && "default" !== l.state ? `n-${L}-border` : ""
            }`,
          },
          C &&
            "textarea" !== c &&
            s.default.createElement(n, { prefix: y, onPrefixClick: _ }),
          "textarea" !== c &&
            s.default.createElement(
              "input",
              Object.assign(
                {
                  ref: G,
                  className: `n-input ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${
                        h && "textarea" !== c
                          ? "n-search-input-padding input-prefixed"
                          : ""
                      }`),
                      (e = `${e} ${K || ""}`),
                      C && E
                        ? (e = `${e} input-contained`)
                        : ((e = `${e} ${
                            C ? "n-remove-left-border input-prefixed" : ""
                          }`),
                          (e = `${e} ${
                            E ? "n-remove-right-border input-suffixed" : ""
                          }`)),
                      e
                    );
                  })()}`,
                  onKeyUp: k,
                  onChange: I,
                  onBlur: function (e) {
                    var t;
                    (null === (t = G.current) || void 0 === t
                      ? void 0
                      : t.value) ||
                      d ||
                      (M(""), W("")),
                      Y(""),
                      null == j || j(e);
                  },
                  onFocus: (e) => {
                    ee(), null == w || w(e);
                  },
                  onClick: (e) => {
                    Y("n-focused-border"), null == T || T(e);
                  },
                  onKeyPress: q,
                  value: A,
                },
                (function () {
                  const e = {};
                  return (
                    N && (e.min = N),
                    P && (e.max = P),
                    void 0 !== g && (e.maxLength = g),
                    r && (e.autoComplete = r),
                    v && (e.id = v),
                    c && (e.type = c),
                    p && (e.disabled = p),
                    d && (e.placeholder = d),
                    F && (e.style = F),
                    e
                  );
                })(),
                { onInput: Z },
                R
              )
            ),
          "textarea" === c &&
            s.default.createElement(
              "textarea",
              Object.assign(
                {
                  ref: G,
                  onKeyUp: k,
                  onChange: I,
                  onBlur: j,
                  onFocus: (e) => {
                    ee(), null == w || w(e);
                  },
                  onClick: (e) => {
                    Y("n-focused-border"), null == T || T(e);
                  },
                  onKeyPress: q,
                  className: `n-input input-text ${
                    "textarea" === c && "n-input-textarea"
                  }`,
                },
                (function () {
                  const e = {};
                  return (
                    void 0 !== g && (e.maxLength = g),
                    p && (e.disabled = p),
                    d && (e.placeholder = d),
                    F && (e.style = F),
                    e
                  );
                })(),
                { onInput: Z, value: A },
                R
              )
            ),
          "textarea" !== c &&
            E &&
            s.default.createElement(a, { suffix: S, onSuffixClick: z })
        )
      ),
      s.default.createElement(
        "div",
        { className: "n-input-underinfo" },
        "default" !== l.state &&
          s.default.createElement(i, {
            validationState: l.state,
            label: U,
            isHidden: !1,
          }),
        B && s.default.createElement("span", { className: "n-helper-text" }, B)
      )
    )
  );
};
c.defaultProps = {
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
  tooltip: null,
};
var f = s.default.memo(c);
module.exports = f;
//# sourceMappingURL=Input.js.map
