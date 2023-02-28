import e, { useRef as l, useState as t, useEffect as n } from "react";
import a from "../../utils/uuids.js";
import o from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import r from "../Validation/Validation.js";
import "./Dropdown.scss.js";
import {
  SvgIcInfo as d,
  SvgIcChevronDown as c,
  SvgIcAdd as s,
} from "../../assets/svg-components/Nitrozen/index.js";
const p = { text: "Select All", value: "all" },
  u = (a) => {
    var u;
    const m = l(null),
      v = l(null),
      [h, f] = t(!1),
      [g, b] = t({ height: null, width: null }),
      [E, w] = t(!1),
      [x, N] = t(""),
      [$, C] = t(),
      [S, k] = t([]),
      [y, L] = t(),
      [A, j] = t(),
      [G, H] = t(),
      [z, T] = t(""),
      [I, O] = t(a.enableSelectAll || !1);
    function P(e) {
      const l = m.current;
      l && !l.contains(e.target) && f(!1);
    }
    function V(e) {
      9 === e.keyCode && h && (e.preventDefault(), e.stopPropagation(), f(!1));
    }
    function D() {
      var e, l;
      if (a.multiple) {
        if (y) return `All ${S.length} ${a.label} selected`;
        let e = [];
        const t = {};
        return (
          a.value && N(""),
          S.length
            ? (S.forEach((e) => {
                t[e] || (t[e] = !0);
              }),
              null === (l = a.items) ||
                void 0 === l ||
                l.forEach((l) => {
                  t[l.value] && e.push(l.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : a.placeholder
            ? a.placeholder
            : a.label
            ? `Choose ${a.label}`
            : ""
        );
      }
      if (
        a.value &&
        (null === (e = a.items) || void 0 === e ? void 0 : e.length)
      ) {
        const e = a.items.find((e) => e.value == a.value);
        H(e), N((null == G ? void 0 : G.text) ? G.text : "");
      }
      return (null == G ? void 0 : G.text)
        ? G.text
        : a.label
        ? a.placeholder || `Choose ${a.label}`
        : a.placeholder
        ? a.placeholder
        : "";
    }
    function _() {
      const e = null == m ? void 0 : m.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (g.height ? g.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      w(!(n < t));
    }
    function q(e = !1) {
      const l = a.items ? [...a.items] : [];
      if (a.multiple && I) {
        const e = S.length === B(l).length && I;
        L(e), j(e);
      }
    }
    function B(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function M() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        l = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      b({ width: e, height: l });
    }
    function W(e, l, t) {
      var n;
      l.isGroupLabel ||
        (a.multiple
          ? "all" === e
            ? (k(A ? [] : B(a.items)), j(!A), t.stopPropagation())
            : (S.includes(l.value)
                ? k((e) => e.filter((e) => e !== l.value))
                : k([...S, l.value]),
              t.stopPropagation(),
              j(y))
          : (H(l),
            l.text && N(l.text),
            null === (n = a.onChange) || void 0 === n || n.call(a, l.value)));
    }
    function F() {
      var e;
      null === (e = a.onChange) || void 0 === e || e.call(a, S), C(D());
    }
    n(() => {
      var e;
      if (
        (M(),
        "undefined" != typeof document &&
          (document.addEventListener("click", P),
          document.addEventListener("keydown", V)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", M),
          window.addEventListener("scroll", M)),
        a.multiple)
      )
        a.value &&
          (k(Array.isArray(a.value) ? [...a.value] : [a.value]), N(""), q(!0));
      else if ((O(!1), a.value)) {
        const l =
          null === (e = a.items) || void 0 === e
            ? void 0
            : e.find((e) => e.value === a.value);
        N((null == l ? void 0 : l.text) ? l.text : ""), k([a.value]);
      }
    }, []),
      n(() => {
        a.multiple && a.onChange && a.onChange(S), C(D());
      }, [S, G]),
      n(() => {
        _();
      }, [g]);
    const R = a.prefixIcon;
    return e.createElement(
      "div",
      {
        id: null == a ? void 0 : a.id,
        className: `n-dropdown-container ${a.className} ${
          a.disabled ? "disabled" : ""
        }`,
      },
      a.label &&
        e.createElement(
          "label",
          { className: "n-dropdown-label" },
          ` ${a.label} ${a.required ? " *" : ""} `,
          a.tooltip &&
            e.createElement(o, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: a.tooltip,
              position: "top",
              icon: e.createElement(d, { style: { fontSize: "14px" } }),
            })
        ),
      e.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            a.disabled || (f(!h), h && _());
          },
        },
        e.createElement(
          "div",
          {
            className: `n-select ${h && "n-dropdown-open"} ${
              a.disabled ? "cursor-disabled" : ""
            }`,
            ref: m,
          },
          e.createElement(
            "div",
            {
              className: `n-select__trigger ${
                a.disabled ? "cursor-disabled" : ""
              } ${a.validationState ? `n-${a.validationState}-border` : z}`,
            },
            a.prefixIcon
              ? e.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  e.createElement(R, { className: "n-dropdown-prefix" })
                )
              : null,
            e.createElement(
              "div",
              { className: "n-dropdown-input-arrow-wrapper" },
              a.searchable && !a.disabled
                ? e.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    e.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: x,
                      onChange: function (e) {
                        var l;
                        f(!0), N(e.target.value);
                        const t = { id: a.id, text: e.target.value };
                        x || q(),
                          null === (l = a.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(a, t),
                          M();
                      },
                      placeholder:
                        a.enableSelectAll && S.length
                          ? S.length === B(null == a ? void 0 : a.items).length
                            ? `All ${a.label}(s) selected`
                            : `${S.length} ${a.label}(s) selected`
                          : a.placeholder || `Search ${a.label}`,
                      onClick: () => T("n-focused-border"),
                      onBlur: () => T(""),
                      className: "n-dropdown-search",
                    })
                  )
                : a.disabled
                ? e.createElement("span", null, "Disabled")
                : e.createElement("span", null, $),
              e.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                e.createElement(c, { style: { width: "20px", height: "20px" } })
              )
            )
          ),
          e.createElement(
            "div",
            {
              className: `n-options ${E && "n-dropup"}`,
              ref: v,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const t = null == v ? void 0 : v.current;
                null === (l = a.onScroll) || void 0 === l || l.call(a, t);
              },
            },
            I &&
              !x &&
              e.createElement(
                "span",
                {
                  className: "n-option ripple",
                  onClick: (e) => {
                    W("all", p, e);
                  },
                },
                e.createElement(
                  "div",
                  { className: "n-option-container" },
                  e.createElement(
                    i,
                    { checkboxValue: A, value: A, onChange: F },
                    e.createElement(
                      "span",
                      {
                        className: `n-option-image ${
                          A && "n-dropdown-multicheckbox-selected"
                        }`,
                      },
                      "All"
                    )
                  )
                )
              ),
            I &&
              !x &&
              e.createElement("div", { className: "horizantal-divider" }),
            a.items &&
              a.items.length > 0 &&
              (null === (u = null == a ? void 0 : a.items) || void 0 === u
                ? void 0
                : u.map((l, t) => {
                    var n;
                    return e.createElement(
                      "span",
                      {
                        key: t,
                        "data-value": l.value,
                        className: `n-option ripple ${l === G && "selected"} ${
                          (null == l ? void 0 : l.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (e) => W(t, l, e),
                      },
                      e.createElement(
                        "div",
                        { className: "n-option-container" },
                        a.multiple && !(null == l ? void 0 : l.isGroupLabel)
                          ? e.createElement(
                              i,
                              {
                                checkboxValue: l.value,
                                checkArray: [...S],
                                onChange: F,
                                value: l.value,
                              },
                              e.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    S.includes(l.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                l.logo &&
                                  e.createElement("img", {
                                    className: "n-option-logo",
                                    src: l.logo,
                                    alt: "logo",
                                  }),
                                " ",
                                l.text
                              )
                            )
                          : e.createElement(
                              "span",
                              {
                                className:
                                  "n-option-image " +
                                  ((null === (n = a.items) || void 0 === n
                                    ? void 0
                                    : n.find((e) =>
                                        null == e ? void 0 : e.isGroupLabel
                                      )) &&
                                  !(null == l ? void 0 : l.isGroupLabel)
                                    ? "n-option-child-label"
                                    : ""),
                              },
                              l.logo &&
                                e.createElement("img", {
                                  className: "n-option-logo",
                                  src: l.logo,
                                  alt: "logo",
                                }),
                              e.createElement(
                                "div",
                                { className: "n-option-wrapper" },
                                e.createElement("span", null, l.text),
                                e.createElement(
                                  "span",
                                  { className: "n-option-subtext" },
                                  l.sub_text
                                )
                              )
                            )
                      )
                    );
                  })),
            a.searchable &&
              a.items &&
              0 === a.items.length &&
              e.createElement(
                "span",
                { className: "n-option" },
                a.addOption &&
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    "No ",
                    a.label,
                    " Found"
                  ),
                a.addOption &&
                  (null == x ? void 0 : x.length) > 0 &&
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    e.createElement(
                      "div",
                      {
                        "data-testid": "add-option",
                        className: "n-dropdown-empty",
                        onClick: function () {
                          var e;
                          const l = x;
                          N(""),
                            null === (e = a.addOptionHandler) ||
                              void 0 === e ||
                              e.call(a, l),
                            M();
                        },
                      },
                      e.createElement(s, null),
                      e.createElement("p", null, "Add ", x)
                    )
                  )
              )
          )
        )
      ),
      a.validationState &&
        e.createElement(r, {
          className: "n-dropdown-validation",
          isHidden: !a.validationState,
          label: a.validationLabel,
          validationState: a.validationState,
        }),
      a.helperText &&
        e.createElement(
          "div",
          { className: "n-input-underinfo n-helper-text n-dropdown-helper" },
          a.helperText
        )
    );
  };
u.defaultProps = {
  id: `nitrozen-dropdown-${a()}`,
  items: [],
  disabled: !1,
  label: "",
  multiple: !1,
  placeholder: "",
  required: !1,
  searchable: !1,
  tooltip: null,
  addOption: !1,
  enableSelectAll: !1,
  helperText: "",
  className: "",
  validationState: "",
  validationLabel: "",
  prefixIcon: "",
};
export { u as default };
//# sourceMappingURL=Dropdown.js.map
