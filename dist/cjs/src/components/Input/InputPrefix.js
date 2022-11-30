"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = e(require("react"));
module.exports = (e) =>
  r.default.createElement(
    "span",
    {
      className: `nitrozen-input-prefix nitrozen-remove-right-border ${
        "string" == typeof e.prefix && "nitrozen-prefix-padding"
      }`,
    },
    e.prefix
  );
//# sourceMappingURL=InputPrefix.js.map
