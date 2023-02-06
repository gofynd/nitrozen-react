import e from "react";
const r = (r) =>
  e.createElement(
    "span",
    {
      className: `n-input-prefix n-remove-right-border n-prefix-position ${
        "string" == typeof r.prefix && "n-prefix-padding"
      }`,
      onClick: r.onPrefixClick,
    },
    r.prefix
  );
r.defaultProps = { onPrefixClick: () => {} };
export { r as default };
//# sourceMappingURL=InputPrefix.js.map
