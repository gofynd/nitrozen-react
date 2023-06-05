"use strict";
var e = require("react"),
  l = require("../../utils/uuids.js"),
  t = require("../Tooltip/Tooltip.js"),
  n = require("../Checkbox/Checkbox.js"),
  a = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Nitrozen/index.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = i(e);
const u = { text: "Select All", value: "all" },
  r = (l) => {
    var i, r, s, c, p;
    const v = e.useRef(null),
      m = e.useRef(!0),
      f = e.useRef(null),
      [h, g] = e.useState(!1),
      [b, E] = e.useState({ height: null, width: null }),
      [w, N] = e.useState(!1),
      [S, x] = e.useState(""),
      [$, y] = e.useState(),
      [C, k] = e.useState([]),
      [A, L] = e.useState(),
      [O, q] = e.useState(),
      [I, j] = e.useState(),
      [J, G] = e.useState(""),
      [H, z] = e.useState(l.enableSelectAll || !1),
      P = e.useRef(null);
    function R(e) {
      const l = v.current;
      l && !l.contains(e.target) && g(!1);
    }
    function T(e) {
      9 === e.keyCode && h && (e.preventDefault(), e.stopPropagation(), g(!1));
    }
    function _() {
      var e, t;
      if (l.multiple) {
        if (A) return `All ${C.length} ${l.label} selected`;
        let e = [];
        const n = {};
        return (
          l.value && x(""),
          C.length
            ? (C.forEach((e) => {
                n[e] || (n[e] = !0);
              }),
              null === (t = l.items) ||
                void 0 === t ||
                t.forEach((l) => {
                  n[l.value] && e.push(l.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : l.placeholder
            ? l.placeholder
            : l.label
            ? `Choose ${l.label}`
            : ""
        );
      }
      return (
        l.value &&
          (null === (e = l.items) || void 0 === e ? void 0 : e.length) &&
          x((null == I ? void 0 : I.text) ? I.text : ""),
        (null == I ? void 0 : I.text)
          ? I.text
          : l.label
          ? l.placeholder || `Choose ${l.label}`
          : l.placeholder
          ? l.placeholder
          : ""
      );
    }
    function V() {
      const e = null == v ? void 0 : v.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (b.height ? b.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      N(!(n < t));
    }
    function D() {
      const e = l.items ? [...l.items] : [];
      if (l.multiple && H) {
        const l = C.length === B(e).length && H;
        L(l), q(l);
      }
    }
    function B(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function F() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        l = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      E({ width: e, height: l });
    }
    function M(e, t, n) {
      t.isGroupLabel ||
        (l.multiple
          ? "all" === e
            ? (k(O ? [] : B(l.items)), n.stopPropagation())
            : (C.includes(t.value)
                ? k((e) => e.filter((e) => e !== t.value))
                : k([...C, t.value]),
              n.stopPropagation())
          : (j(t), t.text && x(t.text)));
    }
    function W() {
      var e;
      null === (e = l.onChange) || void 0 === e || e.call(l, C), y(_());
    }
    e.useEffect(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", R),
        document.addEventListener("keydown", T)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", F),
          window.addEventListener("scroll", F));
    }, []),
      e.useEffect(() => {
        var e, t;
        if ((F(), l.multiple))
          l.value
            ? JSON.stringify(
                null !== (t = l.value) && void 0 !== t ? t : []
              ) !== JSON.stringify(C) &&
              (k(Array.isArray(l.value) ? [...l.value] : [l.value]),
              D(),
              y(_()))
            : (k([]), x(""), y(_()), D());
        else {
          if ((z(!1), P.current !== l.value))
            if (l.value) {
              if (
                JSON.stringify(l.value) !==
                JSON.stringify(null == I ? void 0 : I.value)
              ) {
                const t =
                  null === (e = l.items) || void 0 === e
                    ? void 0
                    : e.find((e) => e.value === l.value);
                x((null == t ? void 0 : t.text) ? t.text : ""), j(t), y(_());
              }
            } else j(void 0), x(""), y(_());
          P.current = l.value;
        }
      }, [l.value, l.items]),
      e.useEffect(() => {
        var e, t, n;
        m.current
          ? y(_())
          : (l.multiple
              ? JSON.stringify(
                  null !== (t = l.value) && void 0 !== t ? t : []
                ) !== JSON.stringify(C) &&
                (null === (n = l.onChange) || void 0 === n || n.call(l, C),
                y(_()))
              : (JSON.stringify(l.value) !==
                  JSON.stringify(null == I ? void 0 : I.value) &&
                  (null === (e = l.onChange) ||
                    void 0 === e ||
                    e.call(l, null == I ? void 0 : I.value)),
                y(_())),
            D()),
          (m.current = !1);
      }, [C, I]),
      e.useEffect(() => {
        V();
      }, [b]);
    const K = l.prefixIcon;
    return d.default.createElement(
      "div",
      {
        id: null == l ? void 0 : l.id,
        className: `n-dropdown-container ${l.className} ${
          l.disabled ? "disabled" : ""
        }`,
      },
      l.label &&
        d.default.createElement(
          "label",
          { className: "n-dropdown-label" },
          ` ${l.label}${l.required ? "*" : ""} `,
          l.tooltip &&
            d.default.createElement(t, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: l.tooltip,
              position:
                null !== (i = null == l ? void 0 : l.tooltipPosition) &&
                void 0 !== i
                  ? i
                  : "top",
              icon:
                null !== (r = null == l ? void 0 : l.tooltipIcon) &&
                void 0 !== r
                  ? r
                  : d.default.createElement(o.SvgIcInfo, {
                      style: { fontSize: "14px" },
                    }),
            })
        ),
      d.default.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            l.disabled || (g(!h), h && V());
          },
        },
        d.default.createElement(
          "div",
          {
            className: `n-select ${h && "n-dropdown-open"} ${
              l.disabled ? "cursor-disabled" : ""
            }`,
            ref: v,
          },
          d.default.createElement(
            "div",
            {
              className: `n-select__trigger ${
                l.disabled ? "cursor-disabled" : ""
              } ${l.validationState ? `n-${l.validationState}-border` : J}`,
            },
            l.prefixIcon
              ? d.default.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  d.default.createElement(K, { className: "n-dropdown-prefix" })
                )
              : null,
            d.default.createElement(
              "div",
              { className: "n-dropdown-input-arrow-wrapper" },
              l.searchable && !l.disabled
                ? d.default.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    d.default.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: S,
                      onChange: function (e) {
                        var t;
                        g(!0), x(e.target.value);
                        const n = { id: l.id, text: e.target.value };
                        S || D(),
                          null === (t = l.onSearchInputChange) ||
                            void 0 === t ||
                            t.call(l, n),
                          F();
                      },
                      placeholder:
                        l.enableSelectAll && C.length
                          ? C.length === B(null == l ? void 0 : l.items).length
                            ? `All ${l.label}(s) selected`
                            : `${C.length} ${l.label}(s) selected`
                          : l.placeholder || `Search ${l.label}`,
                      onClick: () => G("n-focused-border"),
                      onBlur: () => {
                        G(""), "" === S && y(_());
                      },
                      className: "n-dropdown-search",
                    })
                  )
                : d.default.createElement(
                    "span",
                    { "data-testid": "dropdown-selected-text" },
                    $
                  ),
              d.default.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                d.default.createElement(o.SvgIcChevronDown, {
                  "data-testid": "dropdown-arrow-icon",
                  style: { width: "20px", height: "20px", color: "black" },
                })
              )
            )
          ),
          d.default.createElement(
            "div",
            {
              className: `n-options ${w && "n-dropup"}`,
              ref: f,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var t;
                const n = null == f ? void 0 : f.current;
                null === (t = l.onScroll) || void 0 === t || t.call(l, n);
              },
            },
            H &&
              !S &&
              0 !==
                (null === (s = l.items) || void 0 === s ? void 0 : s.length) &&
              d.default.createElement(
                d.default.Fragment,
                null,
                d.default.createElement(
                  "span",
                  {
                    "data-testid": "all-option",
                    className: "n-option ripple",
                    onClick: (e) => {
                      M("all", u, e);
                    },
                    key: `all_${
                      null === (c = l.items) || void 0 === c ? void 0 : c.length
                    }`,
                  },
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    d.default.createElement(
                      n,
                      { checkboxValue: O, value: O, onChange: W },
                      d.default.createElement(
                        "span",
                        {
                          className: `n-option-image ${
                            O && "n-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
                d.default.createElement("div", {
                  className: "horizantal-divider",
                })
              ),
            l.items &&
              l.items.length > 0 &&
              (null === (p = null == l ? void 0 : l.items) || void 0 === p
                ? void 0
                : p.map((e, t) => {
                    var a, o;
                    return d.default.createElement(
                      "span",
                      {
                        key: `${t}_${
                          null === (a = l.items) || void 0 === a
                            ? void 0
                            : a.length
                        }`,
                        "data-value": null == e ? void 0 : e.value,
                        className: `n-option ripple ${e === I && "selected"} ${
                          (null == e ? void 0 : e.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (l) => M(t, e, l),
                      },
                      d.default.createElement(
                        "div",
                        { className: "n-option-container" },
                        l.multiple && !(null == e ? void 0 : e.isGroupLabel)
                          ? d.default.createElement(
                              n,
                              {
                                checkboxValue: null == e ? void 0 : e.value,
                                checkArray: [...C],
                                onChange: W,
                                value: null == e ? void 0 : e.value,
                              },
                              d.default.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    C.includes(null == e ? void 0 : e.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                (null == e ? void 0 : e.logo) &&
                                  d.default.createElement("img", {
                                    className: "n-option-logo",
                                    src: null == e ? void 0 : e.logo,
                                    alt: "logo",
                                  }),
                                " ",
                                null == e ? void 0 : e.text
                              )
                            )
                          : d.default.createElement(
                              "span",
                              {
                                className:
                                  "n-option-image " +
                                  ((null === (o = l.items) || void 0 === o
                                    ? void 0
                                    : o.find((e) =>
                                        null == e ? void 0 : e.isGroupLabel
                                      )) &&
                                  !(null == e ? void 0 : e.isGroupLabel)
                                    ? "n-option-child-label"
                                    : ""),
                              },
                              (null == e ? void 0 : e.logo) &&
                                d.default.createElement("img", {
                                  className: "n-option-logo",
                                  src: null == e ? void 0 : e.logo,
                                  alt: "logo",
                                }),
                              d.default.createElement(
                                "div",
                                { className: "n-option-wrapper" },
                                d.default.createElement(
                                  "span",
                                  null,
                                  null == e ? void 0 : e.text
                                ),
                                d.default.createElement(
                                  "span",
                                  { className: "n-option-subtext" },
                                  null == e ? void 0 : e.sub_text
                                )
                              )
                            )
                      )
                    );
                  })),
            l.searchable &&
              l.items &&
              0 === l.items.length &&
              d.default.createElement(
                "span",
                { className: "n-option" },
                l.addOption &&
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    "No ",
                    l.label,
                    " Found"
                  ),
                l.addOption &&
                  (null == S ? void 0 : S.length) > 0 &&
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    d.default.createElement(
                      "div",
                      {
                        "data-testid": "add-option",
                        className: "n-dropdown-empty",
                        onClick: function () {
                          var e;
                          const t = S;
                          x(""),
                            null === (e = l.addOptionHandler) ||
                              void 0 === e ||
                              e.call(l, t),
                            F();
                        },
                      },
                      d.default.createElement(o.SvgIcAdd, null),
                      d.default.createElement("p", null, "Add ", S)
                    )
                  )
              )
          )
        )
      ),
      l.validationState &&
        d.default.createElement(a, {
          className: "n-dropdown-validation",
          "data-testid": "dropdown-validation",
          isHidden: !l.validationState,
          label: l.validationLabel,
          validationState: l.validationState,
        }),
      l.helperText &&
        d.default.createElement(
          "div",
          { className: "n-input-underinfo n-helper-text n-dropdown-helper" },
          l.helperText
        )
    );
  };
(r.defaultProps = {
  id: `nitrozen-dropdown-${l()}`,
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
}),
  (module.exports = r);
//# sourceMappingURL=Dropdown.js.map
