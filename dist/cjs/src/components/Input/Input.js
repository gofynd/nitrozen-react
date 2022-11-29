"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  n = require("./InputPrefix.js"),
  a = require("./InputSuffix.js"),
  l = require("../../utils/uuids.js"),
  o = require("../Tooltip/Tooltip.js"),
  r = require("../../assets/svg-components/Action/index.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var u = s(t);
const i = (l) => {
  const {
      autoComplete: s,
      type: i,
      label: c,
      placeholder: f,
      disabled: d,
      required: p,
      value: m,
      search: h,
      showSearchIcon: x,
      showTooltip: g,
      tooltipText: v,
      tooltipIcon: E,
      id: b,
      name: y,
      maxLength: C,
      showPrefix: N,
      showSuffix: S,
      prefix: w,
      suffix: $,
      autofocus: q,
      min: z,
      max: K,
      onKeyUp: P,
      onKeyPress: j,
      onChange: I,
      onBlur: F,
      onFocus: T,
      onClick: k,
      className: B,
      style: L,
    } = l,
    U = e.__rest(l, [
      "autoComplete",
      "type",
      "label",
      "placeholder",
      "disabled",
      "required",
      "value",
      "search",
      "showSearchIcon",
      "showTooltip",
      "tooltipText",
      "tooltipIcon",
      "id",
      "name",
      "maxLength",
      "showPrefix",
      "showSuffix",
      "prefix",
      "suffix",
      "autofocus",
      "min",
      "max",
      "onKeyUp",
      "onKeyPress",
      "onChange",
      "onBlur",
      "onFocus",
      "onClick",
      "className",
      "style",
    ]),
    [O, _] = t.useState(!1),
    [A, H] = t.useState(m || ""),
    R = t.useRef(null);
  function D(e) {
    "search" === i && _(!0), H(e.target.value), null == I || I(e);
  }
  return (
    t.useEffect(() => {
      var e;
      l.autofocus &&
        (null === (e = null == R ? void 0 : R.current) ||
          void 0 === e ||
          e.focus());
    }, []),
    t.useEffect(() => {
      H(m || "");
    }, [m]),
    u.default.createElement(
      u.default.Fragment,
      null,
      u.default.createElement(
        "div",
        { className: "nitrozen-form-input" },
        u.default.createElement(
          "div",
          { className: "n-input-label-container" },
          c &&
            u.default.createElement(
              "label",
              { className: "n-input-label" },
              u.default.createElement(
                u.default.Fragment,
                null,
                c,
                " ",
                p ? " *" : "",
                g &&
                  u.default.createElement(
                    "span",
                    { className: "nitrozen-tooltip-icon" },
                    v &&
                      u.default.createElement(o, {
                        tooltipContent: v,
                        icon:
                          E ||
                          u.default.createElement(r.SvgHelpOutline, {
                            style: { fontSize: "14px" },
                          }),
                        position: "top",
                      })
                  )
              )
            ),
          C &&
            u.default.createElement(
              "label",
              { className: "n-input-label n-input-maxLength" },
              u.default.createElement(u.default.Fragment, null, length, "/", C)
            )
        ),
        O &&
          h &&
          u.default.createElement(
            "span",
            { className: "nitrozen-loader-div" },
            u.default.createElement("img", { src: "./../../assets/loader.gif" })
          ),
        u.default.createElement(
          "div",
          { className: "nitrozen-input-grp" },
          x &&
            u.default.createElement(
              "span",
              { className: "nitrozen-search-icon" },
              u.default.createElement(r.SvgSearch, { className: "search-icon" })
            ),
          N && u.default.createElement(n, { prefix: w }),
          "textarea" !== i &&
            u.default.createElement(
              "input",
              Object.assign(
                {
                  ref: R,
                  className: `n-input input-text ${(function () {
                    let e = "";
                    return (
                      (e = `${e} ${x ? "nitrozen-search-input-padding" : ""}`),
                      (e = `${e} ${N ? "nitrozen-remove-left-border" : ""}`),
                      (e = `${e} ${S ? "nitrozen-remove-right-border" : ""}`),
                      (e = `${e} ${B || ""}`),
                      e
                    );
                  })()}`,
                  onKeyUp: P,
                  onChange: I,
                  onBlur: F,
                  onFocus: T,
                  onClick: k,
                  onKeyPress: j,
                  value: A,
                },
                (function () {
                  const e = {};
                  return (
                    z && (e.min = z),
                    K && (e.max = K),
                    void 0 !== C && (e.maxLength = C),
                    i && (e.type = i),
                    f && (e.placeholder = f),
                    s && (e.autoComplete = s),
                    b && (e.id = b),
                    d && (e.disabled = d),
                    L && (e.style = L),
                    e
                  );
                })(),
                { onInput: D },
                U
              )
            ),
          "textarea" === i &&
            u.default.createElement(
              "textarea",
              Object.assign(
                {
                  ref: R,
                  onKeyUp: P,
                  onChange: I,
                  onBlur: F,
                  onFocus: T,
                  onClick: k,
                  onKeyPress: j,
                  className: `n-input input-text ${
                    "textarea" === i && "n-input-textarea"
                  }`,
                },
                (function () {
                  const e = {};
                  return (
                    void 0 !== C && (e.maxLength = C),
                    d && (e.disabled = d),
                    f && (e.placeholder = f),
                    L && (e.style = L),
                    e
                  );
                })(),
                { onInput: D },
                U
              )
            ),
          S && u.default.createElement(a, { suffix: $ })
        )
      )
    )
  );
};
i.defaultProps = {
  autoComplete: "",
  type: "text",
  label: "",
  placeholder: "",
  disabled: !1,
  required: !1,
  value: "",
  search: !1,
  showSearchIcon: !1,
  showTooltip: !1,
  tooltipText: "",
  id: `nitrozen-input${l()}`,
  showPrefix: !1,
  showSuffix: !1,
  autofocus: !1,
  onKeyUp: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
};
var c = u.default.memo(i);
module.exports = c;
//# sourceMappingURL=Input.js.map
