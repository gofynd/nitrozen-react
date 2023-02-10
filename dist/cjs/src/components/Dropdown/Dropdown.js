"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js"),
  l = require("../Tooltip/Tooltip.js"),
  a = require("../Checkbox/Checkbox.js"),
  n = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Content/index.js"),
  i = require("../../assets/svg-components/Hardware/index.js"),
  d = require("../../assets/svg-components/Jio/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = r(e);
const u = { text: "Select All", value: "all" },
  c = (t) => {
    var r;
    const c = e.useRef(null),
      p = e.useRef(null),
      [m, v] = e.useState(!1),
      [f, h] = e.useState({ height: null, width: null }),
      [g, b] = e.useState(!1),
      [E, w] = e.useState(""),
      [x, N] = e.useState(),
      [S, $] = e.useState([]),
      [C, k] = e.useState(),
      [y, A] = e.useState(),
      [L, q] = e.useState(),
      [j, H] = e.useState(""),
      [G, I] = e.useState(t.enableSelectAll || !1);
    function T(e) {
      const t = c.current;
      t && !t.contains(e.target) && v(!1);
    }
    function z(e) {
      9 === e.keyCode && m && (e.preventDefault(), e.stopPropagation(), v(!1));
    }
    function D() {
      var e, l;
      if (t.multiple) {
        if (C) return `All ${S.length} ${t.label} selected`;
        let e = [];
        const a = {};
        return (
          t.value && w(""),
          S.length
            ? (S.forEach((e) => {
                a[e] || (a[e] = !0);
              }),
              null === (l = t.items) ||
                void 0 === l ||
                l.forEach((t) => {
                  a[t.value] && e.push(t.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : t.label
            ? t.placeholder || `Choose ${t.label}`
            : ""
        );
      }
      if (
        t.value &&
        (null === (e = t.items) || void 0 === e ? void 0 : e.length)
      ) {
        const e = t.items.find((e) => e.value == t.value);
        q(e), w((null == L ? void 0 : L.text) ? L.text : "");
      }
      return (null == L ? void 0 : L.text)
        ? L.text
        : t.label
        ? t.placeholder || `Choose ${t.label}`
        : t.placeholder
        ? t.placeholder
        : "";
    }
    function O() {
      const e = null == c ? void 0 : c.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (f.height ? f.height : 0) - t.top - e.offsetHeight,
        a = e.children[1].offsetHeight || 0;
      b(!(a < l));
    }
    function P(e = !1) {
      const l = t.items ? [...t.items] : [];
      if (t.multiple && G) {
        const e = S.length === V(l).length && G;
        k(e), A(e);
      }
    }
    function V(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function R() {
      const e = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        t = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      h({ width: e, height: t });
    }
    function _(e, l, a) {
      var n;
      l.isGroupLabel ||
        (t.multiple
          ? "all" === e
            ? ($(y ? [] : V(t.items)), A(!y), a.stopPropagation())
            : (S.includes(l.value)
                ? $((e) => e.filter((e) => e !== l.value))
                : $([...S, l.value]),
              a.stopPropagation(),
              A(C))
          : (q(l),
            l.text && w(l.text),
            null === (n = t.onChange) || void 0 === n || n.call(t, l.value)));
    }
    function B() {
      var e;
      null === (e = t.onChange) || void 0 === e || e.call(t, S), N(D());
    }
    e.useEffect(() => {
      var e;
      if (
        (R(),
        "undefined" != typeof document &&
          (document.addEventListener("click", T),
          document.addEventListener("keydown", z)),
        "undefined" != typeof window &&
          (window.addEventListener("resize", R),
          window.addEventListener("scroll", R)),
        t.multiple)
      )
        t.value &&
          ($(Array.isArray(t.value) ? [...t.value] : [t.value]), w(""), P(!0));
      else if ((I(!1), t.value)) {
        const l =
          null === (e = t.items) || void 0 === e
            ? void 0
            : e.find((e) => e.value === t.value);
        w((null == l ? void 0 : l.text) ? l.text : ""), $([t.value]);
      }
    }, []),
      e.useEffect(() => {
        t.multiple && t.onChange && t.onChange(S), N(D());
      }, [S, L]),
      e.useEffect(() => {
        O();
      }, [f]);
    const M = t.prefixIcon;
    return s.default.createElement(
      "div",
      {
        id: null == t ? void 0 : t.id,
        className: `n-dropdown-container ${t.className} ${
          t.disabled ? "disabled" : ""
        }`,
      },
      t.label &&
        s.default.createElement(
          "label",
          { className: "n-dropdown-label" },
          ` ${t.label} ${t.required ? " *" : ""} `,
          t.tooltip &&
            s.default.createElement(l, {
              className: "n-dropdown-tooltip",
              "data-testid": "icon-component",
              tooltipContent: t.tooltip,
              position: "top",
              icon: s.default.createElement(d.SvgIcInfo, {
                style: { fontSize: "14px" },
              }),
            })
        ),
      s.default.createElement(
        "div",
        {
          className: "n-select-wrapper",
          onClick: function () {
            t.disabled || (v(!m), m && O());
          },
        },
        s.default.createElement(
          "div",
          {
            className: `n-select ${m && "n-dropdown-open"} ${
              t.disabled ? "cursor-disabled" : ""
            }`,
            ref: c,
          },
          s.default.createElement(
            "div",
            {
              className: `n-select__trigger ${
                t.disabled ? "cursor-disabled" : ""
              } ${t.validationState ? `n-${t.validationState}-border` : j}`,
            },
            t.prefixIcon
              ? s.default.createElement(
                  "div",
                  { className: "n-dropdown-prefix-icon-wrapper" },
                  s.default.createElement(M, { className: "n-dropdown-prefix" })
                )
              : null,
            s.default.createElement(
              "div",
              { className: "n-dropdown-input-arrow-wrapper" },
              t.searchable && !t.disabled
                ? s.default.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    s.default.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: E,
                      onChange: function (e) {
                        var l;
                        v(!0), w(e.target.value);
                        const a = { id: t.id, text: e.target.value };
                        E || P(),
                          null === (l = t.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(t, a),
                          R();
                      },
                      placeholder:
                        t.enableSelectAll && S.length
                          ? S.length === V(null == t ? void 0 : t.items).length
                            ? `All ${t.label}(s) selected`
                            : `${S.length} ${t.label}(s) selected`
                          : t.placeholder || `Search ${t.label}`,
                      onClick: () => H("n-focused-border"),
                      onBlur: () => H(""),
                      className: "n-dropdown-search",
                    })
                  )
                : t.disabled
                ? s.default.createElement("span", null, "Disabled")
                : s.default.createElement("span", null, x),
              s.default.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                s.default.createElement(i.SvgKeyboardArrowDown, {
                  style: { width: "20px", height: "20px" },
                })
              )
            )
          ),
          s.default.createElement(
            "div",
            {
              className: `n-options ${g && "n-dropup"}`,
              ref: p,
              "data-testid": "dropdown-scroll",
              onScroll: function (e) {
                var l;
                const a = null == p ? void 0 : p.current;
                null === (l = t.onScroll) || void 0 === l || l.call(t, a);
              },
            },
            G &&
              !E &&
              s.default.createElement(
                "span",
                {
                  className: "n-option ripple",
                  onClick: (e) => {
                    _("all", u, e);
                  },
                },
                s.default.createElement(
                  "div",
                  { className: "n-option-container" },
                  s.default.createElement(
                    a,
                    { checkboxValue: y, value: y, onChange: B },
                    s.default.createElement(
                      "span",
                      {
                        className: `n-option-image ${
                          y && "n-dropdown-multicheckbox-selected"
                        }`,
                      },
                      "All"
                    )
                  )
                )
              ),
            G &&
              !E &&
              s.default.createElement("div", {
                className: "horizantal-divider",
              }),
            t.items &&
              t.items.length > 0 &&
              (null === (r = null == t ? void 0 : t.items) || void 0 === r
                ? void 0
                : r.map((e, l) => {
                    var n;
                    return s.default.createElement(
                      "span",
                      {
                        key: l,
                        "data-value": e.value,
                        className: `n-option ripple ${e === L && "selected"} ${
                          (null == e ? void 0 : e.isGroupLabel) &&
                          "n-option-group-label"
                        }`,
                        onClick: (t) => _(l, e, t),
                      },
                      s.default.createElement(
                        "div",
                        { className: "n-option-container" },
                        t.multiple && !(null == e ? void 0 : e.isGroupLabel)
                          ? s.default.createElement(
                              a,
                              {
                                checkboxValue: e.value,
                                checkArray: [...S],
                                onChange: B,
                                value: e.value,
                              },
                              s.default.createElement(
                                "span",
                                {
                                  className: `n-option-image ${
                                    S.includes(e.value) &&
                                    "n-dropdown-multicheckbox-selected"
                                  }`,
                                },
                                e.logo &&
                                  s.default.createElement("img", {
                                    className: "n-option-logo",
                                    src: e.logo,
                                    alt: "logo",
                                  }),
                                " ",
                                e.text
                              )
                            )
                          : s.default.createElement(
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
                                s.default.createElement("img", {
                                  className: "n-option-logo",
                                  src: e.logo,
                                  alt: "logo",
                                }),
                              s.default.createElement(
                                "div",
                                { className: "n-option-wrapper" },
                                s.default.createElement("span", null, e.text),
                                s.default.createElement(
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
              s.default.createElement(
                "span",
                { className: "n-option" },
                t.addOption &&
                  s.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    "No ",
                    t.label,
                    " Found"
                  ),
                t.addOption &&
                  (null == E ? void 0 : E.length) > 0 &&
                  s.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    s.default.createElement(
                      "div",
                      {
                        "data-testid": "add-option",
                        className: "n-dropdown-empty",
                        onClick: function () {
                          var e;
                          const l = E;
                          w(""),
                            null === (e = t.addOptionHandler) ||
                              void 0 === e ||
                              e.call(t, l),
                            R();
                        },
                      },
                      s.default.createElement(o.SvgAdd, null),
                      s.default.createElement("p", null, "Add ", E)
                    )
                  )
              )
          )
        )
      ),
      t.validationState &&
        s.default.createElement(n, {
          className: "n-dropdown-validation",
          isHidden: !t.validationState,
          label: t.validationLabel,
          validationState: t.validationState,
        }),
      t.helperText &&
        s.default.createElement(
          "div",
          { className: "n-input-underinfo n-helper-text n-dropdown-helper" },
          t.helperText
        )
    );
  };
(c.defaultProps = {
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
  (module.exports = c);
//# sourceMappingURL=Dropdown.js.map
