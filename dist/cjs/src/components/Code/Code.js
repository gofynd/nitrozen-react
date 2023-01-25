"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../Validation/Validation.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Code.scss.js");
var n = l(t);
const d = (l) => {
  const {
    fields: d,
    getCode: i,
    label: o,
    codeId: c,
    type: s,
    hideValidation: u,
    validationLabel: r,
    validationState: f,
    validationClassName: m,
    validationStyle: p,
    helperText: v,
  } = l;
  e.__rest(l, [
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
  ]);
  const [b, y] = t.useState(""),
    [$, h] = t.useState([]);
  function g(e) {
    if (e + 1 <= d - 1) {
      let t = document.getElementById(`code-input-${c}-${e + 1}`);
      null == t || t.focus();
    }
  }
  function C(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e) {
        if (e >= 0 && e <= d - 1) {
          let t = [...$];
          (t[e] = ""), h(t), i(t.join(""));
          let a = document.getElementById(`code-input-${c}-${e - 1}`);
          null == a || a.focus();
        }
      })(t);
  }
  function E() {
    y("n-code-focused-label");
  }
  function N() {
    $.join("").length || y("");
  }
  return (
    t.useEffect(() => {
      let e = Array(d).fill("");
      h(e);
    }, []),
    n.default.createElement(
      "div",
      { className: "n-code-main" },
      n.default.createElement(
        "div",
        {
          className: `n-code-label-container ${b}`,
          "data-testid": `label-id-${c}`,
        },
        n.default.createElement(
          "label",
          { className: "n-code-label", "data-testid": `code-label-${c}` },
          o
        )
      ),
      n.default.createElement(
        "div",
        { className: "n-code-field-container" },
        $.map((e, t) =>
          n.default.createElement("input", {
            autoComplete: "off",
            id: `code-input-${c}-` + t,
            key: `code-input-${c}-` + t,
            "data-testid": `code-input-${c}-` + t,
            value: e,
            type: s,
            onClick: E,
            onBlur: N,
            onChange: (e) =>
              (function (e, t) {
                let a = e.target.value.replace(/[^0-9]+/g, "");
                if (2 == a.length && t + 1 <= d - 1) {
                  a = a[1];
                  let e = [...$];
                  return (
                    (e[t + 1] = a),
                    h(e),
                    i(e.join("")),
                    g(t),
                    void y("n-code-focused-label")
                  );
                }
                if (a && a.length <= 1) {
                  let e = [...$];
                  (e[t] = a),
                    h(e),
                    i(e.join("")),
                    g(t),
                    y("n-code-focused-label");
                }
              })(e, t),
            className: `n-code-input-field n-code-${d} ${
              f && !u ? `n-code-input-border-${f}` : "n-code-input-border"
            }`,
            onKeyDown: (e) => C(e, t),
          })
        )
      ),
      !u &&
        n.default.createElement(a, {
          isHidden: u,
          label: r,
          style: p,
          className: m,
          validationState: f,
        }),
      v && n.default.createElement("span", { className: "n-helper-text" }, v)
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
};
var i = n.default.memo(d);
module.exports = i;
//# sourceMappingURL=Code.js.map
