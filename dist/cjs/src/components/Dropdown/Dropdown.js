"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js"),
  l = require("../Tooltip/Tooltip.js"),
  a = require("../Checkbox/Checkbox.js"),
  n = require("../Validation/Validation.js");
require("./Dropdown.scss.js");
var o = require("../../assets/svg-components/Action/index.js"),
  i = require("../../assets/svg-components/Content/index.js"),
  d = require("../../assets/svg-components/Hardware/index.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = s(e);
const u = { text: "Select All", value: "all" },
  c = (t) => {
    var s;
    const c = e.useRef(null),
      p = e.useRef(null),
      [m, v] = e.useState(!1),
      [f, h] = e.useState({ height: null, width: null }),
      [g, b] = e.useState(!1),
      [E, x] = e.useState(""),
      [w, S] = e.useState(),
      [N, $] = e.useState([]),
      [C, k] = e.useState(),
      [y, A] = e.useState(),
      [L, q] = e.useState(),
      [j, H] = e.useState(t.enableSelectAll || !1);
    function G(e) {
      const t = c.current;
      t && !t.contains(e.target) && v(!1);
    }
    function T(e) {
      9 === e.keyCode && m && (e.preventDefault(), e.stopPropagation(), v(!1));
    }
    function z() {
      var e, l;
      if (t.multiple) {
        if (C) return `All ${N.length} ${t.label} selected`;
        let e = [];
        const a = {};
        return (
          t.value && x(""),
          N.length
            ? (N.forEach((e) => {
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
        q(e), x((null == L ? void 0 : L.text) ? L.text : "");
      }
      return (null == L ? void 0 : L.text)
        ? L.text
        : t.label
        ? t.placeholder || `Choose ${t.label}`
        : t.placeholder
        ? t.placeholder
        : "";
    }
    function D() {
      const e = null == c ? void 0 : c.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (f.height ? f.height : 0) - t.top - e.offsetHeight,
        a = e.children[1].offsetHeight || 0;
      b(!(a < l));
    }
    function O(e = !1) {
      const l = t.items ? [...t.items] : [];
      if (t.multiple && j) {
        const e = N.length === P(l).length && j;
        k(e), A(e);
      }
    }
    function P(e) {
      return e
        .filter(function (e) {
          return !e.isGroupLabel;
        })
        .map((e) => e.value);
    }
    function V() {
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
    function R(e, l, a) {
      var n;
      l.isGroupLabel ||
        (t.multiple
          ? "all" === e
            ? ($(y ? [] : P(t.items)), A(!y), a.stopPropagation())
            : (N.includes(l.value)
                ? $((e) => e.filter((e) => e !== l.value))
                : $([...N, l.value]),
              a.stopPropagation(),
              A(C))
          : (q(l),
            l.text && x(l.text),
            null === (n = t.onChange) || void 0 === n || n.call(t, l.value)));
    }
    function I() {
      var e;
      null === (e = t.onChange) || void 0 === e || e.call(t, N), S(z());
    }
    return (
      e.useEffect(() => {
        var e;
        if (
          (V(),
          "undefined" != typeof document &&
            (document.addEventListener("click", G),
            document.addEventListener("keydown", T)),
          "undefined" != typeof window &&
            (window.addEventListener("resize", V),
            window.addEventListener("scroll", V)),
          t.multiple)
        )
          t.value &&
            ($(Array.isArray(t.value) ? [...t.value] : [t.value]),
            x(""),
            O(!0));
        else if ((H(!1), t.value)) {
          const l =
            null === (e = t.items) || void 0 === e
              ? void 0
              : e.find((e) => e.value === t.value);
          x((null == l ? void 0 : l.text) ? l.text : ""), $([t.value]);
        }
      }, []),
      e.useEffect(() => {
        t.multiple && t.onChange && t.onChange(N), S(z());
      }, [N, L]),
      e.useEffect(() => {
        D();
      }, [f]),
      r.default.createElement(
        "div",
        {
          id: null == t ? void 0 : t.id,
          className: `n-dropdown-container ${t.className} ${
            t.disabled ? "disabled" : ""
          }`,
        },
        t.label &&
          r.default.createElement(
            "label",
            { className: "n-dropdown-label" },
            ` ${t.label} ${t.required ? " *" : ""} `,
            t.tooltip &&
              r.default.createElement(l, {
                "data-testid": "icon-component",
                tooltipContent: t.tooltip,
                position: "top",
                icon: r.default.createElement(o.SvgInfo, {
                  style: { fontSize: "14px" },
                }),
              })
          ),
        r.default.createElement(
          "div",
          {
            className: "n-select-wrapper",
            onClick: function () {
              t.disabled || (v(!m), m && D());
            },
          },
          r.default.createElement(
            "div",
            {
              className: `n-select ${m && "n-dropdown-open"} ${
                t.disabled ? "cursor-disabled" : ""
              } ${
                t.validationState
                  ? `n-${t.validationState}-border`
                  : "n-default-border"
              }`,
              ref: c,
            },
            r.default.createElement(
              "div",
              {
                className:
                  "n-select__trigger " + (t.disabled ? "cursor-disabled" : ""),
              },
              t.searchable && !t.disabled
                ? r.default.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    r.default.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: E,
                      onChange: function (e) {
                        var l;
                        v(!0), x(e.target.value);
                        const a = { id: t.id, text: e.target.value };
                        E || O(),
                          null === (l = t.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(t, a),
                          V();
                      },
                      placeholder:
                        t.enableSelectAll && N.length
                          ? N.length === P(null == t ? void 0 : t.items).length
                            ? `All ${t.label}(s) selected`
                            : `${N.length} ${t.label}(s) selected`
                          : t.placeholder || `Search ${t.label}`,
                    })
                  )
                : t.disabled
                ? r.default.createElement("span", null, "Disabled")
                : r.default.createElement("span", null, w),
              r.default.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                r.default.createElement(d.SvgKeyboardArrowDown, {
                  style: { width: "20px", height: "20px" },
                })
              )
            ),
            r.default.createElement(
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
              j &&
                !E &&
                r.default.createElement(
                  "span",
                  {
                    className: "n-option ripple",
                    onClick: (e) => {
                      R("all", u, e);
                    },
                  },
                  r.default.createElement(
                    "div",
                    { className: "n-option-container" },
                    r.default.createElement(
                      a,
                      { checkboxValue: y, value: y, onChange: I },
                      r.default.createElement(
                        "span",
                        {
                          className: `n-option-image n-icon-padding ${
                            y && "n-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
              j &&
                !E &&
                r.default.createElement("div", {
                  className: "horizantal-divider",
                }),
              t.items &&
                t.items.length > 0 &&
                (null === (s = null == t ? void 0 : t.items) || void 0 === s
                  ? void 0
                  : s.map((e, l) => {
                      var n;
                      return r.default.createElement(
                        "span",
                        {
                          key: l,
                          "data-value": e.value,
                          className: `n-option ripple ${
                            e === L && "selected"
                          } ${
                            (null == e ? void 0 : e.isGroupLabel) &&
                            "n-option-group-label"
                          }`,
                          onClick: (t) => R(l, e, t),
                        },
                        r.default.createElement(
                          "div",
                          { className: "n-option-container" },
                          t.multiple && !(null == e ? void 0 : e.isGroupLabel)
                            ? r.default.createElement(
                                a,
                                {
                                  checkboxValue: e.value,
                                  checkArray: [...N],
                                  onChange: I,
                                  value: e.value,
                                },
                                r.default.createElement(
                                  "span",
                                  {
                                    className: `n-option-image ${
                                      N.includes(e.value) &&
                                      "n-dropdown-multicheckbox-selected"
                                    } n-icon-padding`,
                                  },
                                  e.logo &&
                                    r.default.createElement("img", {
                                      className: "n-option-logo",
                                      src: e.logo,
                                      alt: "logo",
                                    }),
                                  " ",
                                  e.text
                                )
                              )
                            : r.default.createElement(
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
                                  r.default.createElement("img", {
                                    className: "n-option-logo",
                                    src: e.logo,
                                    alt: "logo",
                                  }),
                                e.text
                              )
                        )
                      );
                    })),
              t.searchable &&
                t.items &&
                0 === t.items.length &&
                r.default.createElement(
                  "span",
                  { className: "n-option" },
                  t.addOption &&
                    r.default.createElement(
                      "div",
                      { className: "n-option-container" },
                      "No ",
                      t.label,
                      " Found"
                    ),
                  t.addOption &&
                    (null == E ? void 0 : E.length) > 0 &&
                    r.default.createElement(
                      "div",
                      { className: "n-option-container" },
                      r.default.createElement(
                        "div",
                        {
                          "data-testid": "add-option",
                          className: "n-dropdown-empty",
                          onClick: function () {
                            var e;
                            const l = E;
                            x(""),
                              null === (e = t.addOptionHandler) ||
                                void 0 === e ||
                                e.call(t, l),
                              V();
                          },
                        },
                        r.default.createElement(i.SvgAdd, null),
                        r.default.createElement("p", null, "Add ", E)
                      )
                    )
                )
            )
          )
        ),
        t.validationState &&
          r.default.createElement(n, {
            isHidden: !t.validationState,
            label: t.validationLabel,
            validationState: t.validationState,
          }),
        t.helperText &&
          r.default.createElement(
            "div",
            { className: " n-input-underinfo n-helper-text" },
            t.helperText
          )
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
}),
  (module.exports = c);
//# sourceMappingURL=Dropdown.js.map
