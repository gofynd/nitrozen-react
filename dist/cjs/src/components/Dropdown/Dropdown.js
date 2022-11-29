"use strict";
var e = require("react"),
  t = require("../../utils/uuids.js"),
  l = require("../Tooltip/Tooltip.js"),
  n = require("../Checkbox/Checkbox.js"),
  a = require("../../assets/svg-components/Action/index.js"),
  o = require("../../assets/svg-components/Content/index.js"),
  i = require("../../assets/svg-components/Hardware/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var d = r(e);
const u = { text: "Select All", value: "all" },
  s = (t) => {
    var r;
    const s = e.useRef(null),
      c = e.useRef(null),
      [p, m] = e.useState(!1),
      [v, f] = e.useState({ height: null, width: null }),
      [h, g] = e.useState(!1),
      [b, E] = e.useState(""),
      [z, w] = e.useState(),
      [x, N] = e.useState([]),
      [S, C] = e.useState(),
      [$, k] = e.useState(),
      [y, A] = e.useState(),
      [L, q] = e.useState(t.enableSelectAll || !1);
    function j(e) {
      const t = s.current;
      t && !t.contains(e.target) && m(!1);
    }
    function G(e) {
      9 === e.keyCode && p && (e.preventDefault(), e.stopPropagation(), m(!1));
    }
    function H() {
      var e, l;
      if (t.multiple) {
        if (S) return `All ${x.length} ${t.label} selected`;
        let e = [];
        const n = {};
        return (
          t.value && E(""),
          x.length
            ? (x.forEach((e) => {
                n[e] || (n[e] = !0);
              }),
              null === (l = t.items) ||
                void 0 === l ||
                l.forEach((t) => {
                  n[t.value] && e.push(t.text);
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
        A(e), E((null == y ? void 0 : y.text) ? y.text : "");
      }
      return (null == y ? void 0 : y.text)
        ? y.text
        : t.label
        ? t.placeholder || `Choose ${t.label}`
        : t.placeholder
        ? t.placeholder
        : "";
    }
    function O() {
      const e = null == s ? void 0 : s.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (v.height ? v.height : 0) - t.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      g(!(n < l));
    }
    function P(e = !1) {
      const l = t.items ? [...t.items] : [];
      if (t.multiple && L) {
        const e = x.length === D(l).length && L;
        C(e), k(e);
      }
    }
    function D(e) {
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
      f({ width: e, height: t });
    }
    function I(e, l, n) {
      var a;
      l.isGroupLabel ||
        (t.multiple
          ? "all" === e
            ? (N($ ? [] : D(t.items)), k(!$), n.stopPropagation())
            : (x.includes(l.value)
                ? N((e) => e.filter((e) => e !== l.value))
                : N([...x, l.value]),
              n.stopPropagation(),
              k(S))
          : (A(l),
            l.text && E(l.text),
            null === (a = t.onChange) || void 0 === a || a.call(t, l.value)));
    }
    function M() {
      var e;
      null === (e = t.onChange) || void 0 === e || e.call(t, x), w(H());
    }
    return (
      e.useEffect(() => {
        var e;
        if (
          (R(),
          "undefined" != typeof document &&
            (document.addEventListener("click", j),
            document.addEventListener("keydown", G)),
          "undefined" != typeof window &&
            (window.addEventListener("resize", R),
            window.addEventListener("scroll", R)),
          t.multiple)
        )
          t.value &&
            (N(Array.isArray(t.value) ? [...t.value] : [t.value]),
            E(""),
            P(!0));
        else if ((q(!1), t.value)) {
          const l =
            null === (e = t.items) || void 0 === e
              ? void 0
              : e.find((e) => e.value === t.value);
          E((null == l ? void 0 : l.text) ? l.text : ""), N([t.value]);
        }
      }, []),
      e.useEffect(() => {
        t.multiple && t.onChange && t.onChange(x), w(H());
      }, [x, y]),
      e.useEffect(() => {
        O();
      }, [v]),
      d.default.createElement(
        "div",
        {
          id: null == t ? void 0 : t.id,
          className: `nitrozen-dropdown-container ${
            null == t ? void 0 : t.className
          }`,
        },
        t.label &&
          d.default.createElement(
            "label",
            { className: "nitrozen-dropdown-label" },
            ` ${t.label} ${t.required ? " *" : ""} `,
            t.tooltip &&
              d.default.createElement(l, {
                "data-testid": "icon-component",
                tooltipContent: t.tooltip,
                position: "top",
                icon: d.default.createElement(a.SvgInfo, {
                  style: { fontSize: "14px" },
                }),
              })
          ),
        d.default.createElement(
          "div",
          {
            className: "nitrozen-select-wrapper",
            onClick: function () {
              t.disabled || (m(!p), p && O());
            },
          },
          d.default.createElement(
            "div",
            {
              className: `nitrozen-select ${t.disabled ? "disabled" : ""} ${
                p && "nitrozen-dropdown-open"
              }`,
              ref: s,
            },
            d.default.createElement(
              "div",
              { className: "nitrozen-select__trigger" },
              t.searchable && !t.disabled
                ? d.default.createElement(
                    "span",
                    { className: "nitrozen-searchable-input-container" },
                    d.default.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: b,
                      onChange: function (e) {
                        var l;
                        m(!0), E(e.target.value);
                        const n = { id: t.id, text: e.target.value };
                        b || P(),
                          null === (l = t.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(t, n),
                          R();
                      },
                      placeholder:
                        t.enableSelectAll && x.length
                          ? x.length === D(null == t ? void 0 : t.items).length
                            ? `All ${t.label}(s) selected`
                            : `${x.length} ${t.label}(s) selected`
                          : t.placeholder || `Search ${t.label}`,
                    })
                  )
                : t.disabled
                ? d.default.createElement("span", null, "Disabled")
                : d.default.createElement("span", null, z),
              d.default.createElement(
                "div",
                { className: "nitrozen-dropdown-arrow" },
                d.default.createElement(i.SvgKeyboardArrowDown, {
                  style: { width: "20px", height: "20px" },
                })
              )
            ),
            d.default.createElement(
              "div",
              {
                className: `nitrozen-options ${h && "nitrozen-dropup"}`,
                ref: c,
                "data-testid": "dropdown-scroll",
                onScroll: function (e) {
                  var l;
                  const n = null == c ? void 0 : c.current;
                  null === (l = t.onScroll) || void 0 === l || l.call(t, n);
                },
              },
              L &&
                !b &&
                d.default.createElement(
                  "span",
                  {
                    className: "nitrozen-option ripple",
                    onClick: (e) => {
                      I("all", u, e);
                    },
                  },
                  d.default.createElement(
                    "div",
                    { className: "nitrozen-option-container" },
                    d.default.createElement(
                      n,
                      { checkboxValue: $, value: $, onChange: M },
                      d.default.createElement(
                        "span",
                        {
                          className: `nitrozen-option-image ${
                            $ && "nitrozen-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
              L &&
                !b &&
                d.default.createElement("div", {
                  className: "horizantal-divider",
                }),
              t.items &&
                t.items.length > 0 &&
                (null === (r = null == t ? void 0 : t.items) || void 0 === r
                  ? void 0
                  : r.map((e, l) => {
                      var a;
                      return d.default.createElement(
                        "span",
                        {
                          key: l,
                          "data-value": e.value,
                          className: `nitrozen-option ripple ${
                            e === y && "selected"
                          } ${
                            (null == e ? void 0 : e.isGroupLabel) &&
                            "nitrozen-option-group-label"
                          }`,
                          onClick: (t) => I(l, e, t),
                        },
                        d.default.createElement(
                          "div",
                          { className: "nitrozen-option-container" },
                          t.multiple && !(null == e ? void 0 : e.isGroupLabel)
                            ? d.default.createElement(
                                n,
                                {
                                  checkboxValue: e.value,
                                  checkArray: [...x],
                                  onChange: M,
                                  value: e.value,
                                },
                                d.default.createElement(
                                  "span",
                                  {
                                    className: `nitrozen-option-image ${
                                      x.includes(e.value) &&
                                      "nitrozen-dropdown-multicheckbox-selected"
                                    }`,
                                  },
                                  e.logo &&
                                    d.default.createElement("img", {
                                      className: "nitrozen-option-logo",
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
                                    "nitrozen-option-image " +
                                    ((null === (a = t.items) || void 0 === a
                                      ? void 0
                                      : a.find((e) =>
                                          null == e ? void 0 : e.isGroupLabel
                                        )) &&
                                    !(null == e ? void 0 : e.isGroupLabel)
                                      ? "nitrozen-option-child-label"
                                      : ""),
                                },
                                e.logo &&
                                  d.default.createElement("img", {
                                    className: "nitrozen-option-logo",
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
                d.default.createElement(
                  "span",
                  { className: "nitrozen-option" },
                  t.addOption &&
                    d.default.createElement(
                      "div",
                      { className: "nitrozen-option-container" },
                      "No ",
                      t.label,
                      " Found"
                    ),
                  t.addOption &&
                    (null == b ? void 0 : b.length) > 0 &&
                    d.default.createElement(
                      "div",
                      { className: "nitrozen-option-container" },
                      d.default.createElement(
                        "div",
                        {
                          "data-testid": "add-option",
                          className: "nitrozen-dropdown-empty",
                          onClick: function () {
                            var e;
                            const l = b;
                            E(""),
                              null === (e = t.addOptionHandler) ||
                                void 0 === e ||
                                e.call(t, l),
                              R();
                          },
                        },
                        d.default.createElement(o.SvgAdd, null),
                        d.default.createElement("p", null, "Add ", b)
                      )
                    )
                )
            )
          )
        )
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
}),
  (module.exports = s);
//# sourceMappingURL=Dropdown.js.map
