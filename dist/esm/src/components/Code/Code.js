import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as l, useEffect as a } from "react";
import o from "../Validation/Validation.js";
import { SvgIcHelp as i } from "../../assets/svg-components/Nitrozen/index.js";
import n from "../Tooltip/Tooltip.js";
import "./Code.scss.js";
const d = (d) => {
  const {
    fields: s,
    getCode: c,
    label: r,
    codeId: m,
    type: p,
    hideValidation: u,
    validationLabel: f,
    validationState: v,
    validationClassName: b,
    validationStyle: y,
    helperText: E,
    required: N,
    tooltip: h,
    tooltipIcon: g,
  } = d;
  e(d, [
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
  const [C, $] = l([]);
  function j(e) {
    if (e + 1 <= s - 1) {
      let t = document.getElementById(`code-input-${m}-${e + 1}`);
      null == t || t.focus();
    }
  }
  function x(e, t) {
    [8, 46].includes(e.keyCode) &&
      (function (e) {
        if (e >= 0 && e <= s - 1) {
          let t = [...C];
          (t[e] = ""), $(t), c(t.join(""));
          let l = document.getElementById(`code-input-${m}-${e - 1}`);
          null == l || l.focus();
        }
      })(t);
  }
  return (
    a(() => {
      let e = Array(s).fill("");
      $(e);
    }, []),
    t.createElement(
      "div",
      { className: "n-code-main" },
      t.createElement(
        "div",
        { className: "n-code-label-container", "data-testid": `label-id-${m}` },
        t.createElement(
          "label",
          { className: "n-code-label", "data-testid": `code-label-${m}` },
          r,
          " ",
          N ? "*" : "",
          h &&
            t.createElement(
              "span",
              { className: "n-input-tooltip" },
              h &&
                t.createElement(n, {
                  tooltipContent: h,
                  icon:
                    g || t.createElement(i, { style: { fontSize: "14px" } }),
                  position: "top",
                })
            )
        )
      ),
      t.createElement(
        "div",
        { className: "n-code-field-container" },
        C.map((e, l) =>
          t.createElement("input", {
            autoComplete: "off",
            id: `code-input-${m}-` + l,
            key: `code-input-${m}-` + l,
            "data-testid": `code-input-${m}-` + l,
            value: e,
            type: p,
            onChange: (e) =>
              (function (e, t) {
                let l = e.target.value.replace(/[^0-9]+/g, "");
                if (2 == l.length && t + 1 <= s - 1) {
                  l = l[1];
                  let e = [...C];
                  return (e[t + 1] = l), $(e), c(e.join("")), void j(t);
                }
                if (l && l.length <= 1) {
                  let e = [...C];
                  (e[t] = l), $(e), c(e.join("")), j(t);
                }
              })(e, l),
            placeholder: "0",
            className:
              "n-code-input-field " +
              (v && !u ? `n-code-input-border-${v}` : "n-code-input-border"),
            onKeyDown: (e) => x(e, l),
          })
        )
      ),
      t.createElement(
        "div",
        { className: "n-code-underinfo" },
        !u &&
          t.createElement(o, {
            isHidden: u,
            label: f,
            style: y,
            className: b,
            validationState: v,
          }),
        E && t.createElement("span", { className: "n-helper-text" }, E)
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
var s = t.memo(d);
export { s as default };
//# sourceMappingURL=Code.js.map
