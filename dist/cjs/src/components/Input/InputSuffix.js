"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = e(require("react"));
module.exports = (e) =>
  t.default.createElement(
    "span",
    {
      className: `nitrozen-input-suffix nitrozen-remove-left-border ${
        "string" == typeof e.suffix && "nitrozen-suffix-padding"
      }`,
    },
    e.suffix
  );
//# sourceMappingURL=InputSuffix.js.map
