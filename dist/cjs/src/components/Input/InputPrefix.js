"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = e(require("react"));
const i = (e) =>
  r.default.createElement(
    "span",
    {
      className: `n-input-prefix n-remove-right-border n-prefix-position ${
        "string" == typeof e.prefix && "n-prefix-padding"
      }`,
      onClick: e.onPrefixClick,
    },
    e.prefix
  );
(i.defaultProps = { onPrefixClick: () => {} }), (module.exports = i);
//# sourceMappingURL=InputPrefix.js.map
