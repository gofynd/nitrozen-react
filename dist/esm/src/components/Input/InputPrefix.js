import e from "react";
const r = (r) =>
  e.createElement(
    "span",
    {
      className: `nitrozen-input-prefix nitrozen-remove-right-border ${
        "string" == typeof r.prefix && "nitrozen-prefix-padding"
      }`,
    },
    r.prefix
  );
export { r as default };
//# sourceMappingURL=InputPrefix.js.map
