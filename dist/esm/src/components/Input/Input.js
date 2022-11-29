import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useRef as o, useEffect as a } from "react";
import "./Input.scss.js";
import l from "./InputPrefix.js";
import r from "./InputSuffix.js";
import s from "../../utils/uuids.js";
import i from "../Tooltip/Tooltip.js";
import {
  SvgHelpOutline as c,
  SvgSearch as u,
} from "../../assets/svg-components/Action/index.js";
const m = (s) => {
  const {
      autoComplete: m,
      type: p,
      label: f,
      placeholder: d,
      disabled: h,
      required: x,
      value: g,
      search: b,
      showSearchIcon: y,
      showTooltip: E,
      tooltipText: v,
      tooltipIcon: C,
      id: N,
      name: w,
      maxLength: $,
      showPrefix: z,
      showSuffix: I,
      prefix: K,
      suffix: P,
      autofocus: j,
      min: F,
      max: S,
      onKeyUp: T,
      onKeyPress: k,
      onChange: B,
      onBlur: L,
      onFocus: U,
      onClick: q,
      className: O,
      style: A,
    } = s,
    _ = e(s, [
      "autoComplete",
      "type",
      "label",
      "placeholder",
      "disabled",
      "required",
      "value",
      "search",
      "showSearchIcon",
      "showTooltip",
      "tooltipText",
      "tooltipIcon",
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
    ]),
    [D, G] = n(!1),
    [H, J] = n(g || ""),
    M = o(null);
  function Q(e) {
    "search" === p && G(!0), J(e.target.value), null == B || B(e);
  }
  return (
    a(() => {
      var e;
      s.autofocus &&
        (null === (e = null == M ? void 0 : M.current) ||
          void 0 === e ||
          e.focus());
    }, []),
    a(() => {
      J(g || "");
    }, [g]),
    t.createElement(
      t.Fragment,
      null,
      t.createElement(
        "div",
        { className: "nitrozen-form-input" },
        t.createElement(
          "div",
          { className: "n-input-label-container" },
          f &&
            t.createElement(
              "label",
              { className: "n-input-label" },
              t.createElement(
                t.Fragment,
                null,
                f,
                " ",
                x ? " *" : "",
                E &&
                  t.createElement(
                    "span",
                    { className: "nitrozen-tooltip-icon" },
                    v &&
                      t.createElement(i, {
                        tooltipContent: v,
                        icon:
                          C ||
                          t.createElement(c, { style: { fontSize: "14px" } }),
                        position: "top",
                      })
                  )
              )
            ),
          $ &&
            t.createElement(
              "label",
              { className: "n-input-label n-input-maxLength" },
              t.createElement(t.Fragment, null, length, "/", $)
            )
        ),
        D &&
          b &&
          t.createElement(
            "span",
            { className: "nitrozen-loader-div" },
            t.createElement("img", { src: "./../../assets/loader.gif" })
          ),
        t.createElement(
          "div",
          { className: "nitrozen-input-grp" },
          y &&
            t.createElement(
              "span",
              { className: "nitrozen-search-icon" },
              t.createElement(u, { className: "search-icon" })
            ),
          z && t.createElement(l, { prefix: K }),
          "textarea" !== p &&
            t.createElement(
              "input",
              Object.assign(
                {
                  ref: M,
                  className: `n-input input-text ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${y ? "nitrozen-search-input-padding" : ""}`),
                      (e = `${e} ${z ? "nitrozen-remove-left-border" : ""}`),
                      (e = `${e} ${I ? "nitrozen-remove-right-border" : ""}`),
                      (e = `${e} ${O || ""}`),
                      e
                    );
                  })()}`,
                  onKeyUp: T,
                  onChange: B,
                  onBlur: L,
                  onFocus: U,
                  onClick: q,
                  onKeyPress: k,
                  value: H,
                },
                (function () {
                  const e = {};
                  return (
                    F && (e.min = F),
                    S && (e.max = S),
                    void 0 !== $ && (e.maxLength = $),
                    p && (e.type = p),
                    d && (e.placeholder = d),
                    m && (e.autoComplete = m),
                    N && (e.id = N),
                    h && (e.disabled = h),
                    A && (e.style = A),
                    e
                  );
                })(),
                { onInput: Q },
                _
              )
            ),
          "textarea" === p &&
            t.createElement(
              "textarea",
              Object.assign(
                {
                  ref: M,
                  onKeyUp: T,
                  onChange: B,
                  onBlur: L,
                  onFocus: U,
                  onClick: q,
                  onKeyPress: k,
                  className: `n-input input-text ${
                    "textarea" === p && "n-input-textarea"
                  }`,
                },
                (function () {
                  const e = {};
                  return (
                    void 0 !== $ && (e.maxLength = $),
                    h && (e.disabled = h),
                    d && (e.placeholder = d),
                    A && (e.style = A),
                    e
                  );
                })(),
                { onInput: Q },
                _
              )
            ),
          I && t.createElement(r, { suffix: P })
        )
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
  search: !1,
  showSearchIcon: !1,
  showTooltip: !1,
  tooltipText: "",
  id: `nitrozen-input${s()}`,
  showPrefix: !1,
  showSuffix: !1,
  autofocus: !1,
  onKeyUp: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
};
var p = t.memo(m);
export { p as default };
//# sourceMappingURL=Input.js.map
