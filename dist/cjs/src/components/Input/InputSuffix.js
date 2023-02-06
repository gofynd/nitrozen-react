"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var f = e(require("react"));
const t = (e) =>
  f.default.createElement(
    "span",
    {
      className: `n-input-suffix n-remove-left-border n-suffix-position ${
        "string" == typeof e.suffix && "n-suffix-padding"
      }`,
      onClick: e.onSuffixClick,
    },
    e.suffix
  );
(t.defaultProps = { onSuffixClick: () => {} }), (module.exports = t);
//# sourceMappingURL=InputSuffix.js.map
