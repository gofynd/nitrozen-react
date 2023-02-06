import f from "react";
const i = (i) =>
  f.createElement(
    "span",
    {
      className: `n-input-suffix n-remove-left-border n-suffix-position ${
        "string" == typeof i.suffix && "n-suffix-padding"
      }`,
      onClick: i.onSuffixClick,
    },
    i.suffix
  );
i.defaultProps = { onSuffixClick: () => {} };
export { i as default };
//# sourceMappingURL=InputSuffix.js.map
