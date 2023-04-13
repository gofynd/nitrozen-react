"use strict";
var e = require("react"),
  l = require("../../utils/uuids.js"),
  t = require("../Tooltip/Tooltip.js"),
  a = require("../Checkbox/Checkbox.js"),
  n = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Nitrozen/index.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = i(e);
const r = { text: "Select All", value: "all" },
  u = (l) => {
    var i, u, s;
    const c = e.useRef(null),
      p = e.useRef(!0),
      v = e.useRef(null),
      [m, f] = e.useState(!1),
      [h, g] = e.useState({ height: null, width: null }),
      [b, E] = e.useState(!1),
      [w, x] = e.useState(""),
      [N, S] = e.useState(),
      [$, C] = e.useState([]),
      [k, y] = e.useState(),
      [A, L] = e.useState(),
      [q, j] = e.useState(),
      [I, G] = e.useState(""),
      [H, O] = e.useState(l.enableSelectAll || !1);
    function z(e) {
      const l = c.current;
      l && !l.contains(e.target) && f(!1);
    }
    function T(e) {
      9 === e.keyCode && m && (e.preventDefault(), e.stopPropagation(), f(!1));
    }
    function _() {
      var e, t;
      if (l.multiple) {
        if (k) return `All ${$.length} ${l.label} selected`;
        let e = [];
        const a = {};
        return (
          l.value && x(""),
          $.length
            ? ($.forEach((e) => {
                a[e] || (a[e] = !0);
              }),
              null === (t = l.items) ||
                void 0 === t ||
                t.forEach((l) => {
                  a[l.value] && e.push(l.text);
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
          x((null == q ? void 0 : q.text) ? q.text : ""),
        (null == q ? void 0 : q.text)
          ? q.text
          : l.label
          ? l.placeholder || `Choose ${l.label}`
          : l.placeholder
          ? l.placeholder
          : ""
      );
    }
    function P() {
      const e = null == c ? void 0 : c.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (h.height ? h.height : 0) - l.top - e.offsetHeight,
        a = e.children[1].offsetHeight || 0;
      E(!(a < t));
    }
    function R() {
      const e = l.items ? [...l.items] : [];
      if (l.multiple && H) {
        const l = $.length === V(e).length && H;
        y(l), L(l);
      }
    }
    function V(e) {
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
        l = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      g({ width: e, height: l });
    }
    function B(e, t, a) {
      t.isGroupLabel ||
        (l.multiple
          ? "all" === e
            ? (C(A ? [] : V(l.items)), a.stopPropagation())
            : ($.includes(t.value)
                ? C((e) => e.filter((e) => e !== t.value))
                : C([...$, t.value]),
              a.stopPropagation())
          : (j(t), t.text && x(t.text)));
    }
    function F() {
      var e;
      null === (e = l.onChange) || void 0 === e || e.call(l, $), S(_());
    }
    e.useEffect(() => {
      "undefined" != typeof document &&
        (document.addEventListener("click", z),
        document.addEventListener("keydown", T)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", D),
          window.addEventListener("scroll", D));
    }, []),
      e.useEffect(() => {
        var e;
        if ((D(), l.multiple))
          l.value
            ? C(Array.isArray(l.value) ? [...l.value] : [l.value])
            : (C([]), S(_())),
            R();
        else {
          if ((O(!1), l.value)) {
            if (l.value !== (null == q ? void 0 : q.value)) {
              const t =
                null === (e = l.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.value === l.value);
              x((null == t ? void 0 : t.text) ? t.text : ""), j(t);
            }
          } else j(void 0);
          S(_());
        }
      }, [l.value, l.items]),
      e.useEffect(() => {
        var e, t, a;
        p.current
          ? S(_())
          : (l.multiple
              ? JSON.stringify(
                  null !== (t = l.value) && void 0 !== t ? t : []
                ) !== JSON.stringify($) &&
                (null === (a = l.onChange) || void 0 === a || a.call(l, $),
                S(_()))
              : (l.value !== (null == q ? void 0 : q.value) &&
                  (null === (e = l.onChange) ||
                    void 0 === e ||
                    e.call(l, null == q ? void 0 : q.value)),
                S(_())),
            R()),
          (p.current = !1);
      }, [$, q]),
      e.useEffect(() => {
        P();
      }, [h]);
    const J = l.prefixIcon;
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
          ` ${l.label} ${l.required ? " *" : ""} `,
          l.tooltip &&
            d.default.createElement(t, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: l.tooltip,
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
            l.disabled || (f(!m), m && P());
          },
        },
        d.default.createElement(
          "div",
          {
            className: `n-select ${m && "n-dropdown-open"} ${
              l.disabled ? "cursor-disabled" : ""
            }`,
            ref: c,
          },
          d.default.createElement(
            "div",
            {
              className: `n-select__trigger ${
                l.disabled ? "cursor-disabled" : ""
              } ${l.validationState ? `n-${l.validationState}-border` : I}`,
            },
            l.prefixIcon
              ? d.default.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  d.default.createElement(J, { className: "n-dropdown-prefix" })
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
                      value: w,
                      onChange: function (e) {
                        var t;
                        f(!0), x(e.target.value);
                        const a = { id: l.id, text: e.target.value };
                        w || R(),
                          null === (t = l.onSearchInputChange) ||
                            void 0 === t ||
                            t.call(l, a),
                          D();
                      },
                      placeholder:
                        l.enableSelectAll && $.length
                          ? $.length === V(null == l ? void 0 : l.items).length
                            ? `All ${l.label}(s) selected`
                            : `${$.length} ${l.label}(s) selected`
                          : l.placeholder || `Search ${l.label}`,
                      onClick: () => G("n-focused-border"),
                      onBlur: () => {
                        G(""), "" === w && S(_());
                      },
                      className: "n-dropdown-search",
                    })
                  )
                : d.default.createElement(
                    "span",
                    { "data-testid": "dropdown-selected-text" },
                    N
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
              className: `n-options ${b && "n-dropup"}`,
              ref: v,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var t;
                const a = null == v ? void 0 : v.current;
                null === (t = l.onScroll) || void 0 === t || t.call(l, a);
              },
            },
            H &&
              !w &&
              0 !==
                (null === (i = l.items) || void 0 === i ? void 0 : i.length) &&
              d.default.createElement(
                d.default.Fragment,
                null,
                d.default.createElement(
                  "span",
                  {
                    "data-testid": "all-option",
                    className: "n-option ripple",
                    onClick: (e) => {
                      B("all", r, e);
                    },
                    key: `all_${
                      null === (u = l.items) || void 0 === u ? void 0 : u.length
                    }`,
                  },
                  d.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    d.default.createElement(
                      a,
                      { checkboxValue: A, value: A, onChange: F },
                      d.default.createElement(
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
                d.default.createElement("div", {
                  className: "horizantal-divider",
                })
              ),
            l.items &&
              l.items.length > 0 &&
              (null === (s = null == l ? void 0 : l.items) || void 0 === s
                ? void 0
                : s.map((e, t) => {
                    var n, o;
                    return d.default.createElement(
                      "span",
                      {
                        key: `${t}_${
                          null === (n = l.items) || void 0 === n
                            ? void 0
                            : n.length
                        }`,
                        "data-value": null == e ? void 0 : e.value,
                        className: `n-option ripple ${e === q && "selected"} ${
                          (null == e ? void 0 : e.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (l) => B(t, e, l),
                      },
                      d.default.createElement(
                        "div",
                        { className: "n-option-container" },
                        l.multiple && !(null == e ? void 0 : e.isGroupLabel)
                          ? d.default.createElement(
                              a,
                              {
                                checkboxValue: null == e ? void 0 : e.value,
                                checkArray: [...$],
                                onChange: F,
                                value: null == e ? void 0 : e.value,
                              },
                              d.default.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    $.includes(null == e ? void 0 : e.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                e.logo &&
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
                  (null == w ? void 0 : w.length) > 0 &&
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
                          const t = w;
                          x(""),
                            null === (e = l.addOptionHandler) ||
                              void 0 === e ||
                              e.call(l, t),
                            D();
                        },
                      },
                      d.default.createElement(o.SvgIcAdd, null),
                      d.default.createElement("p", null, "Add ", w)
                    )
                  )
              )
          )
        )
      ),
      l.validationState &&
        d.default.createElement(n, {
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
(u.defaultProps = {
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
  (module.exports = u);
//# sourceMappingURL=Dropdown.js.map
