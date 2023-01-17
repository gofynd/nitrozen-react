import e, { useRef as l, useState as t, useEffect as n } from "react";
import a from "../../utils/uuids.js";
import o from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import d from "../Validation/Validation.js";
import "./Dropdown.scss.js";
import { SvgInfo as r } from "../../assets/svg-components/Action/index.js";
import { SvgAdd as s } from "../../assets/svg-components/Content/index.js";
import { SvgKeyboardArrowDown as c } from "../../assets/svg-components/Hardware/index.js";
const u = { text: "Select All", value: "all" },
  m = (a) => {
    var m;
    const p = l(null),
      v = l(null),
      [h, g] = t(!1),
      [f, b] = t({ height: null, width: null }),
      [E, x] = t(!1),
      [w, N] = t(""),
      [$, C] = t(),
      [S, k] = t([]),
      [y, A] = t(),
      [L, j] = t(),
      [H, G] = t(),
      [T, z] = t(a.enableSelectAll || !1);
    function O(e) {
      const l = p.current;
      l && !l.contains(e.target) && g(!1);
    }
    function P(e) {
      9 === e.keyCode && h && (e.preventDefault(), e.stopPropagation(), g(!1));
    }
    function V() {
      var e, l;
      if (a.multiple) {
        if (y) return `All ${S.length} ${a.label} selected`;
        let e = [];
        const t = {};
        return (
          a.value && N(""),
          S.length
            ? (S.forEach((e) => {
                t[e] || (t[e] = !0);
              }),
              null === (l = a.items) ||
                void 0 === l ||
                l.forEach((l) => {
                  t[l.value] && e.push(l.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : a.label
            ? a.placeholder || `Choose ${a.label}`
            : ""
        );
      }
      if (
        a.value &&
        (null === (e = a.items) || void 0 === e ? void 0 : e.length)
      ) {
        const e = a.items.find((e) => e.value == a.value);
        G(e), N((null == H ? void 0 : H.text) ? H.text : "");
      }
      return (null == H ? void 0 : H.text)
        ? H.text
        : a.label
        ? a.placeholder || `Choose ${a.label}`
        : a.placeholder
        ? a.placeholder
        : "";
    }
    function D() {
      const e = null == p ? void 0 : p.current;
      if (!e) return;
      const l = e.getBoundingClientRect(),
        t = (f.height ? f.height : 0) - l.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      x(!(n < t));
    }
    function q(e = !1) {
      const l = a.items ? [...a.items] : [];
      if (a.multiple && T) {
        const e = S.length === M(l).length && T;
        A(e), j(e);
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
      b({ width: e, height: l });
    }
    function _(e, l, t) {
      var n;
      l.isGroupLabel ||
        (a.multiple
          ? "all" === e
            ? (k(L ? [] : M(a.items)), j(!L), t.stopPropagation())
            : (S.includes(l.value)
                ? k((e) => e.filter((e) => e !== l.value))
                : k([...S, l.value]),
              t.stopPropagation(),
              j(y))
          : (G(l),
            l.text && N(l.text),
            null === (n = a.onChange) || void 0 === n || n.call(a, l.value)));
    }
    function B() {
      var e;
      null === (e = a.onChange) || void 0 === e || e.call(a, S), C(V());
    }
    return (
      n(() => {
        var e;
        if (
          (W(),
          "undefined" != typeof document &&
            (document.addEventListener("click", O),
            document.addEventListener("keydown", P)),
          "undefined" != typeof window &&
            (window.addEventListener("resize", W),
            window.addEventListener("scroll", W)),
          a.multiple)
        )
          a.value &&
            (k(Array.isArray(a.value) ? [...a.value] : [a.value]),
            N(""),
            q(!0));
        else if ((z(!1), a.value)) {
          const l =
            null === (e = a.items) || void 0 === e
              ? void 0
              : e.find((e) => e.value === a.value);
          N((null == l ? void 0 : l.text) ? l.text : ""), k([a.value]);
        }
      }, []),
      n(() => {
        a.multiple && a.onChange && a.onChange(S), C(V());
      }, [S, H]),
      n(() => {
        D();
      }, [f]),
      e.createElement(
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
              a.disabled || (g(!h), h && D());
            },
          },
          e.createElement(
            "div",
            {
              className: `n-select ${h && "n-dropdown-open"} ${
                a.disabled ? "cursor-disabled" : ""
              } ${
                a.validationState
                  ? `n-${a.validationState}-border`
                  : "n-default-border"
              }`,
              ref: p,
            },
            e.createElement(
              "div",
              {
                className:
                  "n-select__trigger " + (a.disabled ? "cursor-disabled" : ""),
              },
              a.searchable && !a.disabled
                ? e.createElement(
                    "span",
                    { className: "n-searchable-input-container" },
                    e.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: w,
                      onChange: function (e) {
                        var l;
                        g(!0), N(e.target.value);
                        const t = { id: a.id, text: e.target.value };
                        w || q(),
                          null === (l = a.onSearchInputChange) ||
                            void 0 === l ||
                            l.call(a, t),
                          W();
                      },
                      placeholder:
                        a.enableSelectAll && S.length
                          ? S.length === M(null == a ? void 0 : a.items).length
                            ? `All ${a.label}(s) selected`
                            : `${S.length} ${a.label}(s) selected`
                          : a.placeholder || `Search ${a.label}`,
                    })
                  )
                : a.disabled
                ? e.createElement("span", null, "Disabled")
                : e.createElement("span", null, $),
              e.createElement(
                "div",
                { className: "n-dropdown-arrow" },
                e.createElement(c, { style: { width: "20px", height: "20px" } })
              )
            ),
            e.createElement(
              "div",
              {
                className: `n-options ${E && "n-dropup"}`,
                ref: v,
                "data-testid": "dropdown-scroll",
                onScroll: function (e) {
                  var l;
                  const t = null == v ? void 0 : v.current;
                  null === (l = a.onScroll) || void 0 === l || l.call(a, t);
                },
              },
              T &&
                !w &&
                e.createElement(
                  "span",
                  {
                    className: "n-option ripple",
                    onClick: (e) => {
                      _("all", u, e);
                    },
                  },
                  e.createElement(
                    "div",
                    { className: "n-option-container" },
                    e.createElement(
                      i,
                      { checkboxValue: L, value: L, onChange: B },
                      e.createElement(
                        "span",
                        {
                          className: `n-option-image n-icon-padding ${
                            L && "n-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
              T &&
                !w &&
                e.createElement("div", { className: "horizantal-divider" }),
              a.items &&
                a.items.length > 0 &&
                (null === (m = null == a ? void 0 : a.items) || void 0 === m
                  ? void 0
                  : m.map((l, t) => {
                      var n;
                      return e.createElement(
                        "span",
                        {
                          key: t,
                          "data-value": l.value,
                          className: `n-option ripple ${
                            l === H && "selected"
                          } ${
                            (null == l ? void 0 : l.isGroupLabel) &&
                            "n-option-group-label"
                          }`,
                          onClick: (e) => _(t, l, e),
                        },
                        e.createElement(
                          "div",
                          { className: "n-option-container" },
                          a.multiple && !(null == l ? void 0 : l.isGroupLabel)
                            ? e.createElement(
                                i,
                                {
                                  checkboxValue: l.value,
                                  checkArray: [...S],
                                  onChange: B,
                                  value: l.value,
                                },
                                e.createElement(
                                  "span",
                                  {
                                    className: `n-option-image ${
                                      S.includes(l.value) &&
                                      "n-dropdown-multicheckbox-selected"
                                    } n-icon-padding`,
                                  },
                                  l.logo &&
                                    e.createElement("img", {
                                      className: "n-option-logo",
                                      src: l.logo,
                                      alt: "logo",
                                    }),
                                  " ",
                                  l.text
                                )
                              )
                            : e.createElement(
                                "span",
                                {
                                  className:
                                    "n-option-image " +
                                    ((null === (n = a.items) || void 0 === n
                                      ? void 0
                                      : n.find((e) =>
                                          null == e ? void 0 : e.isGroupLabel
                                        )) &&
                                    !(null == l ? void 0 : l.isGroupLabel)
                                      ? "n-option-child-label"
                                      : ""),
                                },
                                l.logo &&
                                  e.createElement("img", {
                                    className: "n-option-logo",
                                    src: l.logo,
                                    alt: "logo",
                                  }),
                                l.text
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
                    (null == w ? void 0 : w.length) > 0 &&
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
                            const l = w;
                            N(""),
                              null === (e = a.addOptionHandler) ||
                                void 0 === e ||
                                e.call(a, l),
                              W();
                          },
                        },
                        e.createElement(s, null),
                        e.createElement("p", null, "Add ", w)
                      )
                    )
                )
            )
          )
        ),
        a.validationState &&
          e.createElement(d, {
            isHidden: !a.validationState,
            label: a.validationLabel,
            validationState: a.validationState,
          }),
        a.helperText &&
          e.createElement(
            "div",
            { className: " n-input-underinfo n-helper-text" },
            a.helperText
          )
      )
    );
  };
m.defaultProps = {
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
};
export { m as default };
//# sourceMappingURL=Dropdown.js.map
