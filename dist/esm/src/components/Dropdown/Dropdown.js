import e, { useRef as l, useState as t, useEffect as n } from "react";
import o from "../../utils/uuids.js";
import a from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import d from "../Validation/Validation.js";
import "./Dropdown.scss.js";
import {
  SvgIcInfo as r,
  SvgIcChevronDown as s,
  SvgIcAdd as c,
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
      [O, A] = t(),
      [L, I] = t([]),
      [J, j] = t(),
      [B, G] = t(),
      [H, z] = t(),
      [P, T] = t(""),
      [_, V] = t(o.enableSelectAll || !1),
      W = l(null);
    function q(e) {
      const l = f.current;
      l && !l.contains(e.target) && N(!1);
    }
    function D(e) {
      9 === e.keyCode && w && (e.preventDefault(), e.stopPropagation(), N(!1));
    }
    function F() {
      var e, l;
      if (o.multiple) {
        if (J) return `All ${L.length} ${o.label} selected`;
        let e = [];
        const t = {};
        return (
          o.value && k(""),
          L.length
            ? (L.forEach((e) => {
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
          k((null == H ? void 0 : H.text) ? H.text : ""),
        (null == H ? void 0 : H.text)
          ? H.text
          : o.label
          ? o.placeholder || `Choose ${o.label}`
          : o.placeholder
          ? o.placeholder
          : ""
      );
    }
    function M() {
      const e = null == f ? void 0 : f.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (x.height ? x.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      y(!(n < t));
    }
    function R() {
      const e = o.items ? [...o.items] : [];
      if (o.multiple && _) {
        const l = L.length === K(e).length && _;
        j(l), G(l);
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
            ? (I(B ? [] : K(o.items)), t.stopPropagation())
            : (L.includes(l.value)
                ? I((e) => e.filter((e) => e !== l.value))
                : I([...L, l.value]),
              t.stopPropagation())
          : (z(l), l.text && k(l.text)));
    }
    function X() {
      var e;
      null === (e = o.onChange) || void 0 === e || e.call(o, L), A(F());
    }
    n(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", q),
        document.addEventListener("keydown", D)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", Q),
          window.addEventListener("scroll", Q));
    }, []),
      n(() => {
        var e, l;
        if ((Q(), o.multiple))
          o.value
            ? (JSON.stringify(
                null !== (l = o.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(L) &&
                (I(Array.isArray(o.value) ? [...o.value] : [o.value]), A(F())),
              R())
            : (I([]), k(""), A(F()), R());
        else {
          if ((V(!1), W.current !== o.value))
            if (o.value) {
              if (
                JSON.stringify(o.value) !==
                JSON.stringify(null == H ? void 0 : H.value)
              ) {
                const l =
                  null === (e = o.items) || void 0 === e
                    ? void 0
                    : e.find((e) => e.value === o.value);
                k((null == l ? void 0 : l.text) ? l.text : ""), z(l), A(F());
              }
            } else z(void 0), k(""), A(F());
          W.current = o.value;
        }
      }, [o.value, o.items]),
      n(() => {
        var e, l, t;
        b.current ||
          (o.multiple
            ? JSON.stringify(
                null !== (l = o.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(L) &&
              (null === (t = o.onChange) || void 0 === t || t.call(o, L))
            : JSON.stringify(o.value) !==
                JSON.stringify(null == H ? void 0 : H.value) &&
              (null === (e = o.onChange) ||
                void 0 === e ||
                e.call(o, null == H ? void 0 : H.value)),
          R()),
          A(F()),
          (b.current = !1);
      }, [L, H]),
      n(() => {
        M();
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
            o.disabled || (N(!w), w && M());
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
              } ${o.validationState ? `n-${o.validationState}-border` : P}`,
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
                        o.enableSelectAll && L.length
                          ? L.length === K(null == o ? void 0 : o.items).length
                            ? `All ${o.label}(s) selected`
                            : `${L.length} ${o.label}(s) selected`
                          : o.placeholder || `Search ${o.label}`,
                      onClick: () => T("n-focused-border"),
                      onBlur: () => {
                        T(""), "" === C && A(F());
                      },
                      className: "n-dropdown-search",
                    })
                  )
                : e.createElement(
                    "span",
                    { "data-testid": "dropdown-selected-text" },
                    O
                  ),
              e.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                e.createElement(s, {
                  "data-testid": "dropdown-arrow-icon",
                  style: { width: "20px", height: "20px", color: "black" },
                })
              )
            )
          ),
          e.createElement(
            "div",
            {
              className: `n-options ${S ? "n-dropup" : ""} ${
                o.removeBorderBetweenItems ? "n-options-no-border" : ""
              }`,
              ref: E,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const t = null == E ? void 0 : E.current;
                null === (l = o.onScroll) || void 0 === l || l.call(o, t);
              },
            },
            _ &&
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
                      { checkboxValue: B, value: B, onChange: X },
                      e.createElement(
                        "span",
                        {
                          className: `n-option-image ${
                            B && "n-dropdown-multicheckbox-selected"
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
                        className: `n-option ripple ${l === H && "selected"} ${
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
                                checkArray: [...L],
                                onChange: X,
                                value: null == l ? void 0 : l.value,
                              },
                              e.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    L.includes(null == l ? void 0 : l.value) &&
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
            o.items &&
              e.createElement(
                "span",
                { className: "n-option" },
                0 === o.items.length &&
                  e.createElement(
                    "div",
                    {
                      className: "n-option-container",
                      "data-testid": "no-option",
                    },
                    "No ",
                    o.label || "Options",
                    " Found"
                  ),
                o.searchable &&
                  ((o.addOption && 0 === o.items.length) ||
                    (o.showAddOptionWithItems && 0 !== o.items.length)) &&
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
                      e.createElement(c, null),
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
  showAddOptionWithItems: !1,
  removeBorderBetweenItems: !1,
  enableSelectAll: !1,
  helperText: "",
  className: "",
  validationState: "",
  validationLabel: "",
  prefixIcon: "",
};
export { p as default };
//# sourceMappingURL=Dropdown.js.map
