import e from "react";
const r = (r) =>
  e.createElement(
    "span",
    {
      className: `jds-input-prefix jds-remove-right-border jds-prefix-position ${
        "string" == typeof r.prefix && "jds-prefix-padding"
      }`,
      onClick: r.onPrefixClick,
    },
    r.prefix
  );
r.defaultProps = { onPrefixClick: () => {} };
export { r as default };
//# sourceMappingURL=InputPrefix.js.map
