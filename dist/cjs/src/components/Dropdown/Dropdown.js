"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js"),
  l = require("../Tooltip/Tooltip.js"),
  n = require("../Checkbox/Checkbox.js"),
  a = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Nitrozen/index.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = i(e);
const r = { text: "Select All", value: "all" },
  u = (t) => {
    var i, u, s, c, p;
    const v = e.useRef(null),
      m = e.useRef(!0),
      f = e.useRef(null),
      [h, g] = e.useState(!1),
      [b, E] = e.useState({ height: null, width: null }),
      [w, N] = e.useState(!1),
      [S, x] = e.useState(""),
      [$, y] = e.useState(),
      [C, k] = e.useState([]),
      [A, O] = e.useState(),
      [I, L] = e.useState(),
      [q, j] = e.useState(),
      [J, B] = e.useState(""),
      [G, H] = e.useState(t.enableSelectAll || !1),
      z = e.useRef(null);
    function P(e) {
      const t = v.current;
      t && !t.contains(e.target) && g(!1);
    }
    function R(e) {
      9 === e.keyCode && h && (e.preventDefault(), e.stopPropagation(), g(!1));
    }
    function T() {
      var e, l;
      if (t.multiple) {
        if (A) return `All ${C.length} ${t.label} selected`;
        let e = [];
        const n = {};
        return (
          t.value && x(""),
          C.length
            ? (C.forEach((e) => {
                n[e] || (n[e] = !0);
              }),
              null === (l = t.items) ||
                void 0 === l ||
                l.forEach((t) => {
                  n[t.value] && e.push(t.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : t.placeholder
            ? t.placeholder
            : t.label
            ? `Choose ${t.label}`
            : ""
        );
      }
      return (
        t.value &&
          (null === (e = t.items) || void 0 === e ? void 0 : e.length) &&
          x((null == q ? void 0 : q.text) ? q.text : ""),
        (null == q ? void 0 : q.text)
          ? q.text
          : t.label
          ? t.placeholder || `Choose ${t.label}`
          : t.placeholder
          ? t.placeholder
          : ""
      );
    }
    function _() {
      const e = null == v ? void 0 : v.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (b.height ? b.height : 0) - t.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      N(!(n < l));
    }
    function V() {
      const e = t.items ? [...t.items] : [];
      if (t.multiple && G) {
        const t = C.length === W(e).length && G;
        O(t), L(t);
      }
    }
    function W(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function D() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        t = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      E({ width: e, height: t });
    }
    function F(e, l, n) {
      l.isGroupLabel ||
        (t.multiple
          ? "all" === e
            ? (k(I ? [] : W(t.items)), n.stopPropagation())
            : (C.includes(l.value)
                ? k((e) => e.filter((e) => e !== l.value))
                : k([...C, l.value]),
              n.stopPropagation())
          : (j(l), l.text && x(l.text)));
    }
    function M() {
      var e;
      null === (e = t.onChange) || void 0 === e || e.call(t, C), y(T());
    }
    e.useEffect(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", P),
        document.addEventListener("keydown", R)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", D),
          window.addEventListener("scroll", D));
    }, []),
      e.useEffect(() => {
        var e, l;
        if ((D(), t.multiple))
          t.value
            ? (JSON.stringify(
                null !== (l = t.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(C) &&
                (k(Array.isArray(t.value) ? [...t.value] : [t.value]), y(T())),
              V())
            : (k([]), x(""), y(T()), V());
        else {
          if ((H(!1), z.current !== t.value))
            if (t.value) {
              if (
                JSON.stringify(t.value) !==
                JSON.stringify(null == q ? void 0 : q.value)
              ) {
                const l =
                  null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.find((e) => e.value === t.value);
                x((null == l ? void 0 : l.text) ? l.text : ""), j(l), y(T());
              }
            } else j(void 0), x(""), y(T());
          z.current = t.value;
        }
      }, [t.value, t.items]),
      e.useEffect(() => {
        var e, l, n;
        m.current ||
          (t.multiple
            ? JSON.stringify(
                null !== (l = t.value) && void 0 !== l ? l : []
              ) !== JSON.stringify(C) &&
              (null === (n = t.onChange) || void 0 === n || n.call(t, C))
            : JSON.stringify(t.value) !==
                JSON.stringify(null == q ? void 0 : q.value) &&
              (null === (e = t.onChange) ||
                void 0 === e ||
                e.call(t, null == q ? void 0 : q.value)),
          V()),
          y(T()),
          (m.current = !1);
      }, [C, q]),
      e.useEffect(() => {
        _();
      }, [b]);
    const K = t.prefixIcon;
    return d.default.createElement(
      "div",
      {
        id: null == t ? void 0 : t.id,
        className: `n-dropdown-container ${t.className} ${
          t.disabled ? "disabled" : ""
        }`,
      },
      t.label &&
        d.default.createElement(
          "label",
          { className: "n-dropdown-label" },
          ` ${t.label}${t.required ? "*" : ""} `,
          t.tooltip &&
            d.default.createElement(l, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: t.tooltip,
              position:
                null !== (i = null == t ? void 0 : t.tooltipPosition) &&
                void 0 !== i
                  ? i
                  : "top",
              icon:
                null !== (u = null == t ? void 0 : t.tooltipIcon) &&
                void 0 !== u
                  ? u
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
            t.disabled || (g(!h), h && _());
          },
        },
        d.default.createElement(
          "div",
          {
            className: `n-select ${h && "n-dropdown-open"} ${
              t.disabled ? "cursor-disabled" : ""
            }`,
            ref: v,
          },
          d.default.createElement(
            "div",
            {
              className: `n-select__trigger ${
                t.disabled ? "cursor-disabled" : ""
              } ${t.validationState ? `n-${t.validationState}-border` : J}`,
            },
            t.prefixIcon
              ? d.default.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  d.default.createElement(K, { className: "n-dropdown-prefix" })
                )
              : null,
            d.default.createElement(
              "div",
              { className: "n-dropdown-input-arrow-wrapper" },
              t.searchable && !t.disabled
                ? d.default.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    d.default.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: S,
                      onChange: function (e) {
                        var l;
                        g(!0), x(e.target.value);
                        const n = { id: t.id, text: e.target.value };
                        S || V(),
                          null === (l = t.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(t, n),
                          D();
                      },
                      placeholder:
                        t.enableSelectAll && C.length
                          ? C.length === W(null == t ? void 0 : t.items).length
                            ? `All ${t.label}(s) selected`
                            : `${C.length} ${t.label}(s) selected`
                          : t.placeholder || `Search ${t.label}`,
                      onClick: () => B("n-focused-border"),
                      onBlur: () => {
                        B(""), "" === S && y(T());
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
              className: `n-options ${w ? "n-dropup" : ""} ${
                t.removeBorderBetweenItems ? "n-options-no-border" : ""
              }`,
              ref: f,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const n = null == f ? void 0 : f.current;
                null === (l = t.onScroll) || void 0 === l || l.call(t, n);
              },
            },
            G &&
              !S &&
              0 !==
                (null === (s = t.items) || void 0 === s ? void 0 : s.length) &&
              d.default.createElement(
                d.default.Fragment,
                null,
                d.default.createElement(
                  "span",
                  {
                    "data-testid": "all-option",
                    className: "n-option ripple",
                    onClick: (e) => {
                      F("all", r, e);
                    },
                    key: `all_${
                      null === (c = t.items) || void 0 === c ? void 0 : c.length
                    }`,
                  },
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    d.default.createElement(
                      n,
                      { checkboxValue: I, value: I, onChange: M },
                      d.default.createElement(
                        "span",
                        {
                          className: `n-option-image ${
                            I && "n-dropdown-multicheckbox-selected"
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
            t.items &&
              t.items.length > 0 &&
              (null === (p = null == t ? void 0 : t.items) || void 0 === p
                ? void 0
                : p.map((e, l) => {
                    var a, o;
                    return d.default.createElement(
                      "span",
                      {
                        key: `${l}_${
                          null === (a = t.items) || void 0 === a
                            ? void 0
                            : a.length
                        }`,
                        "data-value": null == e ? void 0 : e.value,
                        className: `n-option ripple ${e === q && "selected"} ${
                          (null == e ? void 0 : e.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (t) => F(l, e, t),
                      },
                      d.default.createElement(
                        "div",
                        { className: "n-option-container" },
                        t.multiple && !(null == e ? void 0 : e.isGroupLabel)
                          ? d.default.createElement(
                              n,
                              {
                                checkboxValue: null == e ? void 0 : e.value,
                                checkArray: [...C],
                                onChange: M,
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
                                  ((null === (o = t.items) || void 0 === o
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
            t.items &&
              d.default.createElement(
                "span",
                { className: "n-option" },
                0 === t.items.length &&
                  d.default.createElement(
                    "div",
                    {
                      className: "n-option-container",
                      "data-testid": "no-option",
                    },
                    "No ",
                    t.label || "Options",
                    " Found"
                  ),
                t.searchable &&
                  ((t.addOption && 0 === t.items.length) ||
                    (t.showAddOptionWithItems && 0 !== t.items.length)) &&
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
                          const l = S;
                          x(""),
                            null === (e = t.addOptionHandler) ||
                              void 0 === e ||
                              e.call(t, l),
                            D();
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
      t.validationState &&
        d.default.createElement(a, {
          className: "n-dropdown-validation",
          "data-testid": "dropdown-validation",
          isHidden: !t.validationState,
          label: t.validationLabel,
          validationState: t.validationState,
        }),
      t.helperText &&
        d.default.createElement(
          "div",
          { className: "n-input-underinfo n-helper-text n-dropdown-helper" },
          t.helperText
        )
    );
  };
(u.defaultProps = {
  id: `nitrozen-dropdown-${t()}`,
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
}),
  (module.exports = u);
//# sourceMappingURL=Dropdown.js.map
