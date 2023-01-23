import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as l, useEffect as a } from "react";
import n from "../Validation/Validation.js";
import "./Code.scss.js";
const i = (i) => {
  const {
    fields: o,
    getCode: d,
    label: c,
    codeId: s,
    type: r,
    hideValidation: u,
    validationLabel: m,
    validationState: f,
    validationClassName: p,
    validationStyle: b,
    helperText: v,
  } = i;
  e(i, [
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
  const [y, $] = l(""),
    [h, g] = l([]);
  function C(e) {
    if (e + 1 <= o - 1) {
      let t = document.getElementById(`code-input-${s}-${e + 1}`);
      null == t || t.focus();
    }
  }
  function N(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e) {
        if (e >= 0 && e <= o - 1) {
          let t = [...h];
          (t[e] = ""), g(t), d(t.join(""));
          let l = document.getElementById(`code-input-${s}-${e - 1}`);
          null == l || l.focus();
        }
      })(t);
  }
  function E() {
    $("n-code-focused-label");
  }
  function j() {
    h.join("").length || $("");
  }
  return (
    a(() => {
      let e = Array(o).fill("");
      g(e);
    }, []),
    t.createElement(
      "div",
      { className: "n-code-main" },
      t.createElement(
        "div",
        {
          className: `n-code-label-container ${y}`,
          "data-testid": `label-id-${s}`,
        },
        t.createElement(
          "label",
          { className: "n-code-label", "data-testid": `code-label-${s}` },
          c
        )
      ),
      t.createElement(
        "div",
        { className: "n-code-field-container" },
        h.map((e, l) =>
          t.createElement("input", {
            autoComplete: "off",
            id: `code-input-${s}-` + l,
            key: `code-input-${s}-` + l,
            "data-testid": `code-input-${s}-` + l,
            value: e,
            type: r,
            onClick: E,
            onBlur: j,
            onChange: (e) =>
              (function (e, t) {
                let l = e.target.value.replace(/[^0-9]+/g, "");
                if (2 == l.length && t + 1 <= o - 1) {
                  l = l[1];
                  let e = [...h];
                  return (
                    (e[t + 1] = l),
                    g(e),
                    d(e.join("")),
                    C(t),
                    void $("n-code-focused-label")
                  );
                }
                if (l && l.length <= 1) {
                  let e = [...h];
                  (e[t] = l),
                    g(e),
                    d(e.join("")),
                    C(t),
                    $("n-code-focused-label");
                }
              })(e, l),
            className: `n-code-input-field n-code-${o} ${
              f && !u ? `n-code-input-border-${f}` : "n-code-input-border"
            }`,
            onKeyDown: (e) => N(e, l),
          })
        )
      ),
      !u &&
        t.createElement(n, {
          isHidden: u,
          label: m,
          style: b,
          className: p,
          validationState: f,
        }),
      v && t.createElement("span", { className: "n-helper-text" }, v)
    )
  );
};
i.defaulProps = {
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
var o = t.memo(i);
export { o as default };
//# sourceMappingURL=Code.js.map
