import e, { useRef as l, useState as t, useEffect as n } from "react";
import o from "../../utils/uuids.js";
import a from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import d from "../Validation/Validation.js";
import "./Dropdown.scss.js";
import {
  SvgIcInfo as r,
  SvgIcChevronDown as c,
  SvgIcAdd as s,
} from "../../assets/svg-components/Nitrozen/index.js";
const u = { text: "Select All", value: "all" },
  p = (o) => {
    var p, m, v, h, g;
    const f = l(null),
      b = l(!0),
      E = l(null),
      [w, N] = t(!1),
      [x, $] = t({ height: null, width: null }),
      [S, y] = t(!1),
      [C, k] = t(""),
      [L, O] = t(),
      [A, J] = t([]),
      [j, G] = t(),
      [H, z] = t(),
      [I, P] = t(),
      [T, _] = t(""),
      [V, q] = t(o.enableSelectAll || !1),
      B = l(null);
    function D(e) {
      const l = f.current;
      l && !l.contains(e.target) && N(!1);
    }
    function F(e) {
      9 === e.keyCode && w && (e.preventDefault(), e.stopPropagation(), N(!1));
    }
    function M() {
      var e, l;
      if (o.multiple) {
        if (j) return `All ${A.length} ${o.label} selected`;
        let e = [];
        const t = {};
        return (
          o.value && k(""),
          A.length
            ? (A.forEach((e) => {
                t[e] || (t[e] = !0);
              }),
              null === (l = o.items) ||
                void 0 === l ||
                l.forEach((l) => {
                  t[l.value] && e.push(l.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : o.placeholder
            ? o.placeholder
            : o.label
            ? `Choose ${o.label}`
            : ""
        );
      }
      return (
        o.value &&
          (null === (e = o.items) || void 0 === e ? void 0 : e.length) &&
          k((null == I ? void 0 : I.text) ? I.text : ""),
        (null == I ? void 0 : I.text)
          ? I.text
          : o.label
          ? o.placeholder || `Choose ${o.label}`
          : o.placeholder
          ? o.placeholder
          : ""
      );
    }
    function W() {
      const e = null == f ? void 0 : f.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (x.height ? x.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      y(!(n < t));
    }
    function R() {
      const e = o.items ? [...o.items] : [];
      if (o.multiple && V) {
        const l = A.length === K(e).length && V;
        G(l), z(l);
      }
    }
    function K(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function Q() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        l = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      $({ width: e, height: l });
    }
    function U(e, l, t) {
      l.isGroupLabel ||
        (o.multiple
          ? "all" === e
            ? (J(H ? [] : K(o.items)), t.stopPropagation())
            : (A.includes(l.value)
                ? J((e) => e.filter((e) => e !== l.value))
                : J([...A, l.value]),
              t.stopPropagation())
          : (P(l), l.text && k(l.text)));
    }
    function X() {
      var e;
      null === (e = o.onChange) || void 0 === e || e.call(o, A), O(M());
    }
    n(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", D),
        document.addEventListener("keydown", F)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", Q),
          window.addEventListener("scroll", Q));
    }, []),
      n(() => {
        var e, l;
        if ((Q(), o.multiple))
          o.value
            ? JSON.stringify(
                null !== (l = o.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(A) &&
              (J(Array.isArray(o.value) ? [...o.value] : [o.value]),
              R(),
              O(M()))
            : (J([]), k(""), O(M()), R());
        else {
          if ((q(!1), B.current !== o.value))
            if (o.value) {
              if (
                JSON.stringify(o.value) !==
                JSON.stringify(null == I ? void 0 : I.value)
              ) {
                const l =
                  null === (e = o.items) || void 0 === e
                    ? void 0
                    : e.find((e) => e.value === o.value);
                k((null == l ? void 0 : l.text) ? l.text : ""), P(l), O(M());
              }
            } else P(void 0), k(""), O(M());
          B.current = o.value;
        }
      }, [o.value, o.items]),
      n(() => {
        var e, l, t;
        b.current
          ? O(M())
          : (o.multiple
              ? JSON.stringify(
                  null !== (l = o.value) && void 0 !== l ? l : []
                ) !== JSON.stringify(A) &&
                (null === (t = o.onChange) || void 0 === t || t.call(o, A),
                O(M()))
              : (JSON.stringify(o.value) !==
                  JSON.stringify(null == I ? void 0 : I.value) &&
                  (null === (e = o.onChange) ||
                    void 0 === e ||
                    e.call(o, null == I ? void 0 : I.value)),
                O(M())),
            R()),
          (b.current = !1);
      }, [A, I]),
      n(() => {
        W();
      }, [x]);
    const Y = o.prefixIcon;
    return e.createElement(
      "div",
      {
        id: null == o ? void 0 : o.id,
        className: `n-dropdown-container ${o.className} ${
          o.disabled ? "disabled" : ""
        }`,
      },
      o.label &&
        e.createElement(
          "label",
          { className: "n-dropdown-label" },
          ` ${o.label}${o.required ? "*" : ""} `,
          o.tooltip &&
            e.createElement(a, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: o.tooltip,
              position:
                null !== (p = null == o ? void 0 : o.tooltipPosition) &&
                void 0 !== p
                  ? p
                  : "top",
              icon:
                null !== (m = null == o ? void 0 : o.tooltipIcon) &&
                void 0 !== m
                  ? m
                  : e.createElement(r, { style: { fontSize: "14px" } }),
            })
        ),
      e.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            o.disabled || (N(!w), w && W());
          },
        },
        e.createElement(
          "div",
          {
            className: `n-select ${w && "n-dropdown-open"} ${
              o.disabled ? "cursor-disabled" : ""
            }`,
            ref: f,
          },
          e.createElement(
            "div",
            {
              className: `n-select__trigger ${
                o.disabled ? "cursor-disabled" : ""
              } ${o.validationState ? `n-${o.validationState}-border` : T}`,
            },
            o.prefixIcon
              ? e.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  e.createElement(Y, { className: "n-dropdown-prefix" })
                )
              : null,
            e.createElement(
              "div",
              { className: "n-dropdown-input-arrow-wrapper" },
              o.searchable && !o.disabled
                ? e.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    e.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: C,
                      onChange: function (e) {
                        var l;
                        N(!0), k(e.target.value);
                        const t = { id: o.id, text: e.target.value };
                        C || R(),
                          null === (l = o.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(o, t),
                          Q();
                      },
                      placeholder:
                        o.enableSelectAll && A.length
                          ? A.length === K(null == o ? void 0 : o.items).length
                            ? `All ${o.label}(s) selected`
                            : `${A.length} ${o.label}(s) selected`
                          : o.placeholder || `Search ${o.label}`,
                      onClick: () => _("n-focused-border"),
                      onBlur: () => {
                        _(""), "" === C && O(M());
                      },
                      className: "n-dropdown-search",
                    })
                  )
                : e.createElement(
                    "span",
                    { "data-testid": "dropdown-selected-text" },
                    L
                  ),
              e.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                e.createElement(c, {
                  "data-testid": "dropdown-arrow-icon",
                  style: { width: "20px", height: "20px", color: "black" },
                })
              )
            )
          ),
          e.createElement(
            "div",
            {
              className: `n-options ${S && "n-dropup"}`,
              ref: E,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const t = null == E ? void 0 : E.current;
                null === (l = o.onScroll) || void 0 === l || l.call(o, t);
              },
            },
            V &&
              !C &&
              0 !==
                (null === (v = o.items) || void 0 === v ? void 0 : v.length) &&
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  "span",
                  {
                    "data-testid": "all-option",
                    className: "n-option ripple",
                    onClick: (e) => {
                      U("all", u, e);
                    },
                    key: `all_${
                      null === (h = o.items) || void 0 === h ? void 0 : h.length
                    }`,
                  },
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    e.createElement(
                      i,
                      { checkboxValue: H, value: H, onChange: X },
                      e.createElement(
                        "span",
                        {
                          className: `n-option-image ${
                            H && "n-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
                e.createElement("div", { className: "horizantal-divider" })
              ),
            o.items &&
              o.items.length > 0 &&
              (null === (g = null == o ? void 0 : o.items) || void 0 === g
                ? void 0
                : g.map((l, t) => {
                    var n, a;
                    return e.createElement(
                      "span",
                      {
                        key: `${t}_${
                          null === (n = o.items) || void 0 === n
                            ? void 0
                            : n.length
                        }`,
                        "data-value": null == l ? void 0 : l.value,
                        className: `n-option ripple ${l === I && "selected"} ${
                          (null == l ? void 0 : l.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (e) => U(t, l, e),
                      },
                      e.createElement(
                        "div",
                        { className: "n-option-container" },
                        o.multiple && !(null == l ? void 0 : l.isGroupLabel)
                          ? e.createElement(
                              i,
                              {
                                checkboxValue: null == l ? void 0 : l.value,
                                checkArray: [...A],
                                onChange: X,
                                value: null == l ? void 0 : l.value,
                              },
                              e.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    A.includes(null == l ? void 0 : l.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                (null == l ? void 0 : l.logo) &&
                                  e.createElement("img", {
                                    className: "n-option-logo",
                                    src: null == l ? void 0 : l.logo,
                                    alt: "logo",
                                  }),
                                " ",
                                null == l ? void 0 : l.text
                              )
                            )
                          : e.createElement(
                              "span",
                              {
                                className:
                                  "n-option-image " +
                                  ((null === (a = o.items) || void 0 === a
                                    ? void 0
                                    : a.find((e) =>
                                        null == e ? void 0 : e.isGroupLabel
                                      )) &&
                                  !(null == l ? void 0 : l.isGroupLabel)
                                    ? "n-option-child-label"
                                    : ""),
                              },
                              (null == l ? void 0 : l.logo) &&
                                e.createElement("img", {
                                  className: "n-option-logo",
                                  src: null == l ? void 0 : l.logo,
                                  alt: "logo",
                                }),
                              e.createElement(
                                "div",
                                { className: "n-option-wrapper" },
                                e.createElement(
                                  "span",
                                  null,
                                  null == l ? void 0 : l.text
                                ),
                                e.createElement(
                                  "span",
                                  { className: "n-option-subtext" },
                                  null == l ? void 0 : l.sub_text
                                )
                              )
                            )
                      )
                    );
                  })),
            o.searchable &&
              o.items &&
              0 === o.items.length &&
              e.createElement(
                "span",
                { className: "n-option" },
                o.addOption &&
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    "No ",
                    o.label,
                    " Found"
                  ),
                o.addOption &&
                  (null == C ? void 0 : C.length) > 0 &&
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
                          const l = C;
                          k(""),
                            null === (e = o.addOptionHandler) ||
                              void 0 === e ||
                              e.call(o, l),
                            Q();
                        },
                      },
                      e.createElement(s, null),
                      e.createElement("p", null, "Add ", C)
                    )
                  )
              )
          )
        )
      ),
      o.validationState &&
        e.createElement(d, {
          className: "n-dropdown-validation",
          "data-testid": "dropdown-validation",
          isHidden: !o.validationState,
          label: o.validationLabel,
          validationState: o.validationState,
        }),
      o.helperText &&
        e.createElement(
          "div",
          { className: "n-input-underinfo n-helper-text n-dropdown-helper" },
          o.helperText
        )
    );
  };
p.defaultProps = {
  id: `nitrozen-dropdown-${o()}`,
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
export { p as default };
//# sourceMappingURL=Dropdown.js.map
