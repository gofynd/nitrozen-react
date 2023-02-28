"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../Validation/Validation.js"),
  a = require("../../assets/svg-components/Nitrozen/index.js"),
  i = require("../Tooltip/Tooltip.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Code.scss.js");
var o = n(t);
const d = (n) => {
  const {
    fields: d,
    getCode: s,
    label: c,
    codeId: r,
    type: u,
    hideValidation: f,
    validationLabel: p,
    validationState: m,
    validationClassName: v,
    validationStyle: b,
    helperText: y,
    required: E,
    tooltip: N,
    tooltipIcon: g,
  } = n;
  e.__rest(n, [
    "fields",
    "getCode",
    "label",
    "codeId",
    "type",
    "hideValidation",
    "validationLabel",
    "validationState",
    "validationClassName",
    "validationStyle",
    "helperText",
    "required",
    "tooltip",
    "tooltipIcon",
  ]);
  const [h, C] = t.useState([]);
  function $(e) {
    if (e + 1 <= d - 1) {
      let t = document.getElementById(`code-input-${r}-${e + 1}`);
      null == t || t.focus();
    }
  }
  function j(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e) {
        if (e >= 0 && e <= d - 1) {
          let t = [...h];
          (t[e] = ""), C(t), s(t.join(""));
          let l = document.getElementById(`code-input-${r}-${e - 1}`);
          null == l || l.focus();
        }
      })(t);
  }
  return (
    t.useEffect(() => {
      let e = Array(d).fill("");
      C(e);
    }, []),
    o.default.createElement(
      "div",
      { className: "n-code-main" },
      o.default.createElement(
        "div",
        { className: "n-code-label-container", "data-testid": `label-id-${r}` },
        o.default.createElement(
          "label",
          { className: "n-code-label", "data-testid": `code-label-${r}` },
          c,
          " ",
          E ? "*" : "",
          N &&
            o.default.createElement(
              "span",
              { className: "n-input-tooltip" },
              N &&
                o.default.createElement(i, {
                  tooltipContent: N,
                  icon:
                    g ||
                    o.default.createElement(a.SvgIcHelp, {
                      style: { fontSize: "14px" },
                    }),
                  position: "top",
                })
            )
        )
      ),
      o.default.createElement(
        "div",
        { className: "n-code-field-container" },
        h.map((e, t) =>
          o.default.createElement("input", {
            autoComplete: "off",
            id: `code-input-${r}-` + t,
            key: `code-input-${r}-` + t,
            "data-testid": `code-input-${r}-` + t,
            value: e,
            type: u,
            onChange: (e) =>
              (function (e, t) {
                let l = e.target.value.replace(/[^0-9]+/g, "");
                if (2 == l.length && t + 1 <= d - 1) {
                  l = l[1];
                  let e = [...h];
                  return (e[t + 1] = l), C(e), s(e.join("")), void $(t);
                }
                if (l && l.length <= 1) {
                  let e = [...h];
                  (e[t] = l), C(e), s(e.join("")), $(t);
                }
              })(e, t),
            placeholder: "0",
            className:
              "n-code-input-field " +
              (m && !f ? `n-code-input-border-${m}` : "n-code-input-border"),
            onKeyDown: (e) => j(e, t),
          })
        )
      ),
      o.default.createElement(
        "div",
        { className: "n-code-underinfo" },
        !f &&
          o.default.createElement(l, {
            isHidden: f,
            label: p,
            style: b,
            className: v,
            validationState: m,
          }),
        y && o.default.createElement("span", { className: "n-helper-text" }, y)
      )
    )
  );
};
d.defaulProps = {
  fields: 4,
  label: "",
  codeId: "",
  default: "text",
  hideValidation: !0,
  validationLabel: "",
  validationClassName: "",
  validationStyle: {},
  helperText: "",
  tooltip: null,
  required: !1,
};
var s = o.default.memo(d);
module.exports = s;
//# sourceMappingURL=Code.js.map
