import e, { useRef as l, useState as t, useEffect as n } from "react";
import a from "../../utils/uuids.js";
import o from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import d from "../Validation/Validation.js";
import "./Dropdown.scss.js";
import {
  SvgIcInfo as r,
  SvgIcChevronDown as c,
  SvgIcAdd as s,
} from "../../assets/svg-components/Nitrozen/index.js";
const u = { text: "Select All", value: "all" },
  p = (a) => {
    var p, m, v;
    const h = l(null),
      g = l(!0),
      f = l(null),
      [b, E] = t(!1),
      [w, N] = t({ height: null, width: null }),
      [x, $] = t(!1),
      [S, C] = t(""),
      [k, y] = t(),
      [L, A] = t([]),
      [O, j] = t(),
      [G, H] = t(),
      [z, T] = t(),
      [_, I] = t(""),
      [J, P] = t(a.enableSelectAll || !1);
    function V(e) {
      const l = h.current;
      l && !l.contains(e.target) && E(!1);
    }
    function q(e) {
      9 === e.keyCode && b && (e.preventDefault(), e.stopPropagation(), E(!1));
    }
    function B() {
      var e, l;
      if (a.multiple) {
        if (O) return `All ${L.length} ${a.label} selected`;
        let e = [];
        const t = {};
        return (
          a.value && C(""),
          L.length
            ? (L.forEach((e) => {
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
      return (
        a.value &&
          (null === (e = a.items) || void 0 === e ? void 0 : e.length) &&
          C((null == z ? void 0 : z.text) ? z.text : ""),
        (null == z ? void 0 : z.text)
          ? z.text
          : a.label
          ? a.placeholder || `Choose ${a.label}`
          : a.placeholder
          ? a.placeholder
          : ""
      );
    }
    function D() {
      const e = null == h ? void 0 : h.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (w.height ? w.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      $(!(n < t));
    }
    function F() {
      const e = a.items ? [...a.items] : [];
      if (a.multiple && J) {
        const l = L.length === M(e).length && J;
        j(l), H(l);
      }
    }
    function M(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function W() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        l = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      N({ width: e, height: l });
    }
    function R(e, l, t) {
      l.isGroupLabel ||
        (a.multiple
          ? "all" === e
            ? (A(G ? [] : M(a.items)), t.stopPropagation())
            : (L.includes(l.value)
                ? A((e) => e.filter((e) => e !== l.value))
                : A([...L, l.value]),
              t.stopPropagation())
          : (T(l), l.text && C(l.text)));
    }
    function K() {
      var e;
      null === (e = a.onChange) || void 0 === e || e.call(a, L), y(B());
    }
    n(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", V),
        document.addEventListener("keydown", q)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", W),
          window.addEventListener("scroll", W));
    }, []),
      n(() => {
        var e, l;
        if ((W(), a.multiple))
          a.value
            ? JSON.stringify(
                null !== (l = a.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(L) &&
              (A(Array.isArray(a.value) ? [...a.value] : [a.value]), F())
            : (A([]), C(""), y(B()), F());
        else if ((P(!1), a.value)) {
          if (a.value !== (null == z ? void 0 : z.value)) {
            const l =
              null === (e = a.items) || void 0 === e
                ? void 0
                : e.find((e) => e.value === a.value);
            C((null == l ? void 0 : l.text) ? l.text : ""), T(l), y(B());
          }
        } else T(void 0), C(""), y(B());
      }, [a.value, a.items]),
      n(() => {
        var e, l, t;
        g.current
          ? y(B())
          : (a.multiple
              ? JSON.stringify(
                  null !== (l = a.value) && void 0 !== l ? l : []
                ) !== JSON.stringify(L) &&
                (null === (t = a.onChange) || void 0 === t || t.call(a, L),
                y(B()))
              : (a.value !== (null == z ? void 0 : z.value) &&
                  (null === (e = a.onChange) ||
                    void 0 === e ||
                    e.call(a, null == z ? void 0 : z.value)),
                y(B())),
            F()),
          (g.current = !1);
      }, [L, z]),
      n(() => {
        D();
      }, [w]);
    const Q = a.prefixIcon;
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
              icon: e.createElement(r, { style: { fontSize: "14px" } }),
            })
        ),
      e.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            a.disabled || (E(!b), b && D());
          },
        },
        e.createElement(
          "div",
          {
            className: `n-select ${b && "n-dropdown-open"} ${
              a.disabled ? "cursor-disabled" : ""
            }`,
            ref: h,
          },
          e.createElement(
            "div",
            {
              className: `n-select__trigger ${
                a.disabled ? "cursor-disabled" : ""
              } ${a.validationState ? `n-${a.validationState}-border` : _}`,
            },
            a.prefixIcon
              ? e.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  e.createElement(Q, { className: "n-dropdown-prefix" })
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
                      value: S,
                      onChange: function (e) {
                        var l;
                        E(!0), C(e.target.value);
                        const t = { id: a.id, text: e.target.value };
                        S || F(),
                          null === (l = a.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(a, t),
                          W();
                      },
                      placeholder:
                        a.enableSelectAll && L.length
                          ? L.length === M(null == a ? void 0 : a.items).length
                            ? `All ${a.label}(s) selected`
                            : `${L.length} ${a.label}(s) selected`
                          : a.placeholder || `Search ${a.label}`,
                      onClick: () => I("n-focused-border"),
                      onBlur: () => {
                        I(""), "" === S && y(B());
                      },
                      className: "n-dropdown-search",
                    })
                  )
                : e.createElement(
                    "span",
                    { "data-testid": "dropdown-selected-text" },
                    k
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
              className: `n-options ${x && "n-dropup"}`,
              ref: f,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const t = null == f ? void 0 : f.current;
                null === (l = a.onScroll) || void 0 === l || l.call(a, t);
              },
            },
            J &&
              !S &&
              0 !==
                (null === (p = a.items) || void 0 === p ? void 0 : p.length) &&
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  "span",
                  {
                    "data-testid": "all-option",
                    className: "n-option ripple",
                    onClick: (e) => {
                      R("all", u, e);
                    },
                    key: `all_${
                      null === (m = a.items) || void 0 === m ? void 0 : m.length
                    }`,
                  },
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    e.createElement(
                      i,
                      { checkboxValue: G, value: G, onChange: K },
                      e.createElement(
                        "span",
                        {
                          className: `n-option-image ${
                            G && "n-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
                e.createElement("div", { className: "horizantal-divider" })
              ),
            a.items &&
              a.items.length > 0 &&
              (null === (v = null == a ? void 0 : a.items) || void 0 === v
                ? void 0
                : v.map((l, t) => {
                    var n, o;
                    return e.createElement(
                      "span",
                      {
                        key: `${t}_${
                          null === (n = a.items) || void 0 === n
                            ? void 0
                            : n.length
                        }`,
                        "data-value": null == l ? void 0 : l.value,
                        className: `n-option ripple ${l === z && "selected"} ${
                          (null == l ? void 0 : l.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (e) => R(t, l, e),
                      },
                      e.createElement(
                        "div",
                        { className: "n-option-container" },
                        a.multiple && !(null == l ? void 0 : l.isGroupLabel)
                          ? e.createElement(
                              i,
                              {
                                checkboxValue: null == l ? void 0 : l.value,
                                checkArray: [...L],
                                onChange: K,
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
                                  ((null === (o = a.items) || void 0 === o
                                    ? void 0
                                    : o.find((e) =>
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
                  (null == S ? void 0 : S.length) > 0 &&
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
                          const l = S;
                          C(""),
                            null === (e = a.addOptionHandler) ||
                              void 0 === e ||
                              e.call(a, l),
                            W();
                        },
                      },
                      e.createElement(s, null),
                      e.createElement("p", null, "Add ", S)
                    )
                  )
              )
          )
        )
      ),
      a.validationState &&
        e.createElement(d, {
          className: "n-dropdown-validation",
          "data-testid": "dropdown-validation",
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
p.defaultProps = {
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
export { p as default };
//# sourceMappingURL=Dropdown.js.map
