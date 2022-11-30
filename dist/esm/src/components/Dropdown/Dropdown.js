import e, { useRef as t, useState as l, useEffect as n } from "react";
import o from "../../utils/uuids.js";
import a from "../Tooltip/Tooltip.js";
import i from "../Checkbox/Checkbox.js";
import "./Dropdown.scss.js";
import { SvgInfo as r } from "../../assets/svg-components/Action/index.js";
import { SvgAdd as c } from "../../assets/svg-components/Content/index.js";
import { SvgKeyboardArrowDown as s } from "../../assets/svg-components/Hardware/index.js";
const d = { text: "Select All", value: "all" },
  u = (o) => {
    var u;
    const m = t(null),
      p = t(null),
      [v, h] = l(!1),
      [g, f] = l({ height: null, width: null }),
      [b, E] = l(!1),
      [z, w] = l(""),
      [x, N] = l(),
      [C, $] = l([]),
      [k, y] = l(),
      [A, L] = l(),
      [S, j] = l(),
      [G, H] = l(o.enableSelectAll || !1);
    function O(e) {
      const t = m.current;
      t && !t.contains(e.target) && h(!1);
    }
    function P(e) {
      9 === e.keyCode && v && (e.preventDefault(), e.stopPropagation(), h(!1));
    }
    function D() {
      var e, t;
      if (o.multiple) {
        if (k) return `All ${C.length} ${o.label} selected`;
        let e = [];
        const l = {};
        return (
          o.value && w(""),
          C.length
            ? (C.forEach((e) => {
                l[e] || (l[e] = !0);
              }),
              null === (t = o.items) ||
                void 0 === t ||
                t.forEach((t) => {
                  l[t.value] && e.push(t.text);
                }),
              (e = [...new Set(e)]),
              `${e.join(", ")}`)
            : o.label
            ? o.placeholder || `Choose ${o.label}`
            : ""
        );
      }
      if (
        o.value &&
        (null === (e = o.items) || void 0 === e ? void 0 : e.length)
      ) {
        const e = o.items.find((e) => e.value == o.value);
        j(e), w((null == S ? void 0 : S.text) ? S.text : "");
      }
      return (null == S ? void 0 : S.text)
        ? S.text
        : o.label
        ? o.placeholder || `Choose ${o.label}`
        : o.placeholder
        ? o.placeholder
        : "";
    }
    function q() {
      const e = null == m ? void 0 : m.current;
      if (!e) return;
      const t = e.getBoundingClientRect(),
        l = (g.height ? g.height : 0) - t.top - e.offsetHeight,
        n = e.children[1].offsetHeight || 0;
      E(!(n < l));
    }
    function M(e = !1) {
      const t = o.items ? [...o.items] : [];
      if (o.multiple && G) {
        const e = C.length === T(t).length && G;
        y(e), L(e);
      }
    }
    function T(e) {
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
      f({ width: e, height: t });
    }
    function W(e, t, l) {
      var n;
      t.isGroupLabel ||
        (o.multiple
          ? "all" === e
            ? ($(A ? [] : T(o.items)), L(!A), l.stopPropagation())
            : (C.includes(t.value)
                ? $((e) => e.filter((e) => e !== t.value))
                : $([...C, t.value]),
              l.stopPropagation(),
              L(k))
          : (j(t),
            t.text && w(t.text),
            null === (n = o.onChange) || void 0 === n || n.call(o, t.value)));
    }
    function _() {
      var e;
      null === (e = o.onChange) || void 0 === e || e.call(o, C), N(D());
    }
    return (
      n(() => {
        var e;
        if (
          (V(),
          "undefined" != typeof document &&
            (document.addEventListener("click", O),
            document.addEventListener("keydown", P)),
          "undefined" != typeof window &&
            (window.addEventListener("resize", V),
            window.addEventListener("scroll", V)),
          o.multiple)
        )
          o.value &&
            ($(Array.isArray(o.value) ? [...o.value] : [o.value]),
            w(""),
            M(!0));
        else if ((H(!1), o.value)) {
          const t =
            null === (e = o.items) || void 0 === e
              ? void 0
              : e.find((e) => e.value === o.value);
          w((null == t ? void 0 : t.text) ? t.text : ""), $([o.value]);
        }
      }, []),
      n(() => {
        o.multiple && o.onChange && o.onChange(C), N(D());
      }, [C, S]),
      n(() => {
        q();
      }, [g]),
      e.createElement(
        "div",
        {
          id: null == o ? void 0 : o.id,
          className: `nitrozen-dropdown-container ${
            null == o ? void 0 : o.className
          }`,
        },
        o.label &&
          e.createElement(
            "label",
            { className: "nitrozen-dropdown-label" },
            ` ${o.label} ${o.required ? " *" : ""} `,
            o.tooltip &&
              e.createElement(a, {
                "data-testid": "icon-component",
                tooltipContent: o.tooltip,
                position: "top",
                icon: e.createElement(r, { style: { fontSize: "14px" } }),
              })
          ),
        e.createElement(
          "div",
          {
            className: "nitrozen-select-wrapper",
            onClick: function () {
              o.disabled || (h(!v), v && q());
            },
          },
          e.createElement(
            "div",
            {
              className: `nitrozen-select ${o.disabled ? "disabled" : ""} ${
                v && "nitrozen-dropdown-open"
              }`,
              ref: m,
            },
            e.createElement(
              "div",
              { className: "nitrozen-select__trigger" },
              o.searchable && !o.disabled
                ? e.createElement(
                    "span",
                    { className: "nitrozen-searchable-input-container" },
                    e.createElement("input", {
                      "data-testid": "dropdown-search",
                      type: "search",
                      value: z,
                      onChange: function (e) {
                        var t;
                        h(!0), w(e.target.value);
                        const l = { id: o.id, text: e.target.value };
                        z || M(),
                          null === (t = o.onSearchInputChange) ||
                            void 0 === t ||
                            t.call(o, l),
                          V();
                      },
                      placeholder:
                        o.enableSelectAll && C.length
                          ? C.length === T(null == o ? void 0 : o.items).length
                            ? `All ${o.label}(s) selected`
                            : `${C.length} ${o.label}(s) selected`
                          : o.placeholder || `Search ${o.label}`,
                    })
                  )
                : o.disabled
                ? e.createElement("span", null, "Disabled")
                : e.createElement("span", null, x),
              e.createElement(
                "div",
                { className: "nitrozen-dropdown-arrow" },
                e.createElement(s, { style: { width: "20px", height: "20px" } })
              )
            ),
            e.createElement(
              "div",
              {
                className: `nitrozen-options ${b && "nitrozen-dropup"}`,
                ref: p,
                "data-testid": "dropdown-scroll",
                onScroll: function (e) {
                  var t;
                  const l = null == p ? void 0 : p.current;
                  null === (t = o.onScroll) || void 0 === t || t.call(o, l);
                },
              },
              G &&
                !z &&
                e.createElement(
                  "span",
                  {
                    className: "nitrozen-option ripple",
                    onClick: (e) => {
                      W("all", d, e);
                    },
                  },
                  e.createElement(
                    "div",
                    { className: "nitrozen-option-container" },
                    e.createElement(
                      i,
                      { checkboxValue: A, value: A, onChange: _ },
                      e.createElement(
                        "span",
                        {
                          className: `nitrozen-option-image ${
                            A && "nitrozen-dropdown-multicheckbox-selected"
                          }`,
                        },
                        "All"
                      )
                    )
                  )
                ),
              G &&
                !z &&
                e.createElement("div", { className: "horizantal-divider" }),
              o.items &&
                o.items.length > 0 &&
                (null === (u = null == o ? void 0 : o.items) || void 0 === u
                  ? void 0
                  : u.map((t, l) => {
                      var n;
                      return e.createElement(
                        "span",
                        {
                          key: l,
                          "data-value": t.value,
                          className: `nitrozen-option ripple ${
                            t === S && "selected"
                          } ${
                            (null == t ? void 0 : t.isGroupLabel) &&
                            "nitrozen-option-group-label"
                          }`,
                          onClick: (e) => W(l, t, e),
                        },
                        e.createElement(
                          "div",
                          { className: "nitrozen-option-container" },
                          o.multiple && !(null == t ? void 0 : t.isGroupLabel)
                            ? e.createElement(
                                i,
                                {
                                  checkboxValue: t.value,
                                  checkArray: [...C],
                                  onChange: _,
                                  value: t.value,
                                },
                                e.createElement(
                                  "span",
                                  {
                                    className: `nitrozen-option-image ${
                                      C.includes(t.value) &&
                                      "nitrozen-dropdown-multicheckbox-selected"
                                    }`,
                                  },
                                  t.logo &&
                                    e.createElement("img", {
                                      className: "nitrozen-option-logo",
                                      src: t.logo,
                                      alt: "logo",
                                    }),
                                  " ",
                                  t.text
                                )
                              )
                            : e.createElement(
                                "span",
                                {
                                  className:
                                    "nitrozen-option-image " +
                                    ((null === (n = o.items) || void 0 === n
                                      ? void 0
                                      : n.find((e) =>
                                          null == e ? void 0 : e.isGroupLabel
                                        )) &&
                                    !(null == t ? void 0 : t.isGroupLabel)
                                      ? "nitrozen-option-child-label"
                                      : ""),
                                },
                                t.logo &&
                                  e.createElement("img", {
                                    className: "nitrozen-option-logo",
                                    src: t.logo,
                                    alt: "logo",
                                  }),
                                t.text
                              )
                        )
                      );
                    })),
              o.searchable &&
                o.items &&
                0 === o.items.length &&
                e.createElement(
                  "span",
                  { className: "nitrozen-option" },
                  o.addOption &&
                    e.createElement(
                      "div",
                      { className: "nitrozen-option-container" },
                      "No ",
                      o.label,
                      " Found"
                    ),
                  o.addOption &&
                    (null == z ? void 0 : z.length) > 0 &&
                    e.createElement(
                      "div",
                      { className: "nitrozen-option-container" },
                      e.createElement(
                        "div",
                        {
                          "data-testid": "add-option",
                          className: "nitrozen-dropdown-empty",
                          onClick: function () {
                            var e;
                            const t = z;
                            w(""),
                              null === (e = o.addOptionHandler) ||
                                void 0 === e ||
                                e.call(o, t),
                              V();
                          },
                        },
                        e.createElement(c, null),
                        e.createElement("p", null, "Add ", z)
                      )
                    )
                )
            )
          )
        )
      )
    );
  };
u.defaultProps = {
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
  enableSelectAll: !1,
};
export { u as default };
//# sourceMappingURL=Dropdown.js.map
