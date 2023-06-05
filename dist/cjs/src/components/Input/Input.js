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
      showPrefix: y,
      showSuffix: C,
      prefix: E,
      suffix: S,
      autofocus: $,
      min: N,
      max: w,
      onKeyUp: P,
      onKeyDown: k,
      onKeyPress: K,
      onChange: q,
      onBlur: I,
      onFocus: j,
      onClick: T,
      className: F,
      style: B,
      helperText: L,
      state: U,
      stateText: D,
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
    [A, G] = t.useState(x || ""),
    J = t.useRef(null),
    [M, Q] = t.useState(""),
    [W, X] = t.useState(""),
    [Y, Z] = t.useState("");
  function ee(e) {
    G(e.target.value), null == q || q(e);
  }
  function te() {
    Q("n-focused-label" + (y || h ? "-prefixed" : "")), X("n-border-focused");
  }
  return (
    t.useEffect(() => {
      var e;
      l.autofocus &&
        (null === (e = null == J ? void 0 : J.current) ||
          void 0 === e ||
          e.focus()),
        (x || d) && te();
    }, []),
    t.useEffect(() => {
      G(x || "");
    }, [x]),
    s.default.createElement(
      "div",
      { className: `n-form-input ${p && "n-input-group-disabled"}` },
      s.default.createElement(
        "div",
        {
          className: `n-input-label-container ${
            y || h ? "n-input-label-prefixed" : ""
          } ${M}`,
        },
        f &&
          s.default.createElement(
            "label",
            { className: "n-input-label" },
            s.default.createElement(
              s.default.Fragment,
              null,
              f,
              m ? "*" : "",
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
            className: `n-input-container ${W} ${Y} ${
              l.state && "default" !== l.state ? `n-${U}-border` : ""
            }`,
          },
          y &&
            "textarea" !== c &&
            s.default.createElement(n, { prefix: E, onPrefixClick: _ }),
          "textarea" !== c &&
            s.default.createElement(
              "input",
              Object.assign(
                {
                  ref: J,
                  className: `n-input ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${
                        h && "textarea" !== c
                          ? "n-search-input-padding input-prefixed"
                          : ""
                      }`),
                      (e = `${e} ${F || ""}`),
                      y && C
                        ? (e = `${e} input-contained`)
                        : ((e = `${e} ${
                            y ? "n-remove-left-border input-prefixed" : ""
                          }`),
                          (e = `${e} ${
                            C ? "n-remove-right-border input-suffixed" : ""
                          }`)),
                      e
                    );
                  })()}`,
                  onKeyUp: P,
                  onKeyDown: k,
                  onChange: q,
                  onBlur: function (e) {
                    var t;
                    (null === (t = J.current) || void 0 === t
                      ? void 0
                      : t.value) ||
                      d ||
                      (Q(""), X("")),
                      Z(""),
                      null == I || I(e);
                  },
                  onFocus: (e) => {
                    te(), null == j || j(e);
                  },
                  onClick: (e) => {
                    Z("n-focused-border"), null == T || T(e);
                  },
                  onKeyPress: K,
                  value: A,
                },
                (function () {
                  const e = {};
                  return (
                    N && (e.min = N),
                    w && (e.max = w),
                    void 0 !== g && (e.maxLength = g),
                    r && (e.autoComplete = r),
                    v && (e.id = v),
                    c && (e.type = c),
                    p && (e.disabled = p),
                    d && (e.placeholder = d),
                    B && (e.style = B),
                    e
                  );
                })(),
                { onInput: ee },
                R
              )
            ),
          "textarea" === c &&
            s.default.createElement(
              "textarea",
              Object.assign(
                {
                  ref: J,
                  onKeyUp: P,
                  onChange: q,
                  onBlur: I,
                  onFocus: (e) => {
                    te(), null == j || j(e);
                  },
                  onClick: (e) => {
                    Z("n-focused-border"), null == T || T(e);
                  },
                  onKeyPress: K,
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
                    B && (e.style = B),
                    e
                  );
                })(),
                { onInput: ee, value: A },
                R
              )
            ),
          "textarea" !== c &&
            C &&
            s.default.createElement(a, { suffix: S, onSuffixClick: z })
        )
      ),
      s.default.createElement(
        "div",
        { className: "n-input-underinfo" },
        "default" !== l.state &&
          s.default.createElement(i, {
            validationState: l.state,
            label: D,
            isHidden: !1,
          }),
        L && s.default.createElement("span", { className: "n-helper-text" }, L)
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
