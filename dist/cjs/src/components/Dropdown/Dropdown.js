"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js"),
  l = require("../Tooltip/Tooltip.js"),
  a = require("../Checkbox/Checkbox.js"),
  n = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Nitrozen/index.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = i(e);
const r = { text: "Select All", value: "all" },
  s = (t) => {
    var i;
    const s = e.useRef(null),
      c = e.useRef(null),
      [u, p] = e.useState(!1),
      [m, v] = e.useState({ height: null, width: null }),
      [f, h] = e.useState(!1),
      [g, b] = e.useState(""),
      [E, w] = e.useState(),
      [x, N] = e.useState([]),
      [S, $] = e.useState(),
      [C, k] = e.useState(),
      [y, A] = e.useState(),
      [L, q] = e.useState(""),
      [j, I] = e.useState(t.enableSelectAll || !1);
    function G(e) {
      const t = s.current;
      t && !t.contains(e.target) && p(!1);
    }
    function H(e) {
      9 === e.keyCode && u && (e.preventDefault(), e.stopPropagation(), p(!1));
    }
    function z() {
      var e, l;
      if (t.multiple) {
        if (S) return `All ${x.length} ${t.label} selected`;
        let e = [];
        const a = {};
        return (
          t.value && b(""),
          x.length
            ? (x.forEach((e) => {
                a[e] || (a[e] = !0);
              }),
              null === (l = t.items) ||
                void 0 === l ||
                l.forEach((t) => {
                  a[t.value] && e.push(t.text);
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
      if (
        t.value &&
        (null === (e = t.items) || void 0 === e ? void 0 : e.length)
      ) {
        const e = t.items.find((e) => e.value == t.value);
        A(e), b((null == y ? void 0 : y.text) ? y.text : "");
      }
      return (null == y ? void 0 : y.text)
        ? y.text
        : t.label
        ? t.placeholder || `Choose ${t.label}`
        : t.placeholder
        ? t.placeholder
        : "";
    }
    function T() {
      const e = null == s ? void 0 : s.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (m.height ? m.height : 0) - t.top - e.offsetHeight,
        a = e.children[1].offsetHeight || 0;
      h(!(a < l));
    }
    function D(e = !1) {
      const l = t.items ? [...t.items] : [];
      if (t.multiple && j) {
        const e = x.length === O(l).length && j;
        $(e), k(e);
      }
    }
    function O(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function P() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        t = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      v({ width: e, height: t });
    }
    function V(e, l, a) {
      var n;
      l.isGroupLabel ||
        (t.multiple
          ? "all" === e
            ? (N(C ? [] : O(t.items)), k(!C), a.stopPropagation())
            : (x.includes(l.value)
                ? N((e) => e.filter((e) => e !== l.value))
                : N([...x, l.value]),
              a.stopPropagation(),
              k(S))
          : (A(l),
            l.text && b(l.text),
            null === (n = t.onChange) || void 0 === n || n.call(t, l.value)));
    }
    function R() {
      var e;
      null === (e = t.onChange) || void 0 === e || e.call(t, x), w(z());
    }
    e.useEffect(() => {
      var e;
      if (
        (P(),
        "undefined" != typeof document &&
          (document.addEventListener("click", G),
          document.addEventListener("keydown", H)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", P),
          window.addEventListener("scroll", P)),
        t.multiple)
      )
        t.value &&
          (N(Array.isArray(t.value) ? [...t.value] : [t.value]), b(""), D(!0));
      else if ((I(!1), t.value)) {
        const l =
          null === (e = t.items) || void 0 === e
            ? void 0
            : e.find((e) => e.value === t.value);
        b((null == l ? void 0 : l.text) ? l.text : ""), N([t.value]);
      }
    }, []),
      e.useEffect(() => {
        t.multiple && t.onChange && t.onChange(x), w(z());
      }, [x, y]),
      e.useEffect(() => {
        T();
      }, [m]);
    const _ = t.prefixIcon;
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
          ` ${t.label} ${t.required ? " *" : ""} `,
          t.tooltip &&
            d.default.createElement(l, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: t.tooltip,
              position: "top",
              icon: d.default.createElement(o.SvgIcInfo, {
                style: { fontSize: "14px" },
              }),
            })
        ),
      d.default.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            t.disabled || (p(!u), u && T());
          },
        },
        d.default.createElement(
          "div",
          {
            className: `n-select ${u && "n-dropdown-open"} ${
              t.disabled ? "cursor-disabled" : ""
            }`,
            ref: s,
          },
          d.default.createElement(
            "div",
            {
              className: `n-select__trigger ${
                t.disabled ? "cursor-disabled" : ""
              } ${t.validationState ? `n-${t.validationState}-border` : L}`,
            },
            t.prefixIcon
              ? d.default.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  d.default.createElement(_, { className: "n-dropdown-prefix" })
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
                      value: g,
                      onChange: function (e) {
                        var l;
                        p(!0), b(e.target.value);
                        const a = { id: t.id, text: e.target.value };
                        g || D(),
                          null === (l = t.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(t, a),
                          P();
                      },
                      placeholder:
                        t.enableSelectAll && x.length
                          ? x.length === O(null == t ? void 0 : t.items).length
                            ? `All ${t.label}(s) selected`
                            : `${x.length} ${t.label}(s) selected`
                          : t.placeholder || `Search ${t.label}`,
                      onClick: () => q("n-focused-border"),
                      onBlur: () => q(""),
                      className: "n-dropdown-search",
                    })
                  )
                : t.disabled
                ? d.default.createElement("span", null, "Disabled")
                : d.default.createElement("span", null, E),
              d.default.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                d.default.createElement(o.SvgIcChevronDown, {
                  style: { width: "20px", height: "20px" },
                })
              )
            )
          ),
          d.default.createElement(
            "div",
            {
              className: `n-options ${f && "n-dropup"}`,
              ref: c,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const a = null == c ? void 0 : c.current;
                null === (l = t.onScroll) || void 0 === l || l.call(t, a);
              },
            },
            j &&
              !g &&
              d.default.createElement(
                "span",
                {
                  className: "n-option ripple",
                  onClick: (e) => {
                    V("all", r, e);
                  },
                },
                d.default.createElement(
                  "div",
                  { className: "n-option-container" },
                  d.default.createElement(
                    a,
                    { checkboxValue: C, value: C, onChange: R },
                    d.default.createElement(
                      "span",
                      {
                        className: `n-option-image ${
                          C && "n-dropdown-multicheckbox-selected"
                        }`,
                      },
                      "All"
                    )
                  )
                )
              ),
            j &&
              !g &&
              d.default.createElement("div", {
                className: "horizantal-divider",
              }),
            t.items &&
              t.items.length > 0 &&
              (null === (i = null == t ? void 0 : t.items) || void 0 === i
                ? void 0
                : i.map((e, l) => {
                    var n;
                    return d.default.createElement(
                      "span",
                      {
                        key: l,
                        "data-value": e.value,
                        className: `n-option ripple ${e === y && "selected"} ${
                          (null == e ? void 0 : e.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (t) => V(l, e, t),
                      },
                      d.default.createElement(
                        "div",
                        { className: "n-option-container" },
                        t.multiple && !(null == e ? void 0 : e.isGroupLabel)
                          ? d.default.createElement(
                              a,
                              {
                                checkboxValue: e.value,
                                checkArray: [...x],
                                onChange: R,
                                value: e.value,
                              },
                              d.default.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    x.includes(e.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                e.logo &&
                                  d.default.createElement("img", {
                                    className: "n-option-logo",
                                    src: e.logo,
                                    alt: "logo",
                                  }),
                                " ",
                                e.text
                              )
                            )
                          : d.default.createElement(
                              "span",
                              {
                                className:
                                  "n-option-image " +
                                  ((null === (n = t.items) || void 0 === n
                                    ? void 0
                                    : n.find((e) =>
                                        null == e ? void 0 : e.isGroupLabel
                                      )) &&
                                  !(null == e ? void 0 : e.isGroupLabel)
                                    ? "n-option-child-label"
                                    : ""),
                              },
                              e.logo &&
                                d.default.createElement("img", {
                                  className: "n-option-logo",
                                  src: e.logo,
                                  alt: "logo",
                                }),
                              d.default.createElement(
                                "div",
                                { className: "n-option-wrapper" },
                                d.default.createElement("span", null, e.text),
                                d.default.createElement(
                                  "span",
                                  { className: "n-option-subtext" },
                                  e.sub_text
                                )
                              )
                            )
                      )
                    );
                  })),
            t.searchable &&
              t.items &&
              0 === t.items.length &&
              d.default.createElement(
                "span",
                { className: "n-option" },
                t.addOption &&
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    "No ",
                    t.label,
                    " Found"
                  ),
                t.addOption &&
                  (null == g ? void 0 : g.length) > 0 &&
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
                          const l = g;
                          b(""),
                            null === (e = t.addOptionHandler) ||
                              void 0 === e ||
                              e.call(t, l),
                            P();
                        },
                      },
                      d.default.createElement(o.SvgIcAdd, null),
                      d.default.createElement("p", null, "Add ", g)
                    )
                  )
              )
          )
        )
      ),
      t.validationState &&
        d.default.createElement(n, {
          className: "n-dropdown-validation",
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
(s.defaultProps = {
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
  enableSelectAll: !1,
  helperText: "",
  className: "",
  validationState: "",
  validationLabel: "",
  prefixIcon: "",
}),
  (module.exports = s);
//# sourceMappingURL=Dropdown.js.map
