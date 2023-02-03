"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var f = e(require("react"));
const t = (e) =>
  f.default.createElement(
    "span",
    {
      className: `jds-input-suffix jds-remove-left-border jds-suffix-position ${
        "string" == typeof e.suffix && "jds-suffix-padding"
      }`,
      onClick: e.onSuffixClick,
    },
    e.suffix
  );
(t.defaultProps = { onSuffixClick: () => {} }), (module.exports = t);
//# sourceMappingURL=InputSuffix.js.map
