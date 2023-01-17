import f from "react";
const s = (s) =>
  f.createElement(
    "span",
    {
      className: `jds-input-suffix jds-remove-left-border jds-suffix-position ${
        "string" == typeof s.suffix && "jds-suffix-padding"
      }`,
      onClick: s.onSuffixClick,
    },
    s.suffix
  );
s.defaultProps = { onSuffixClick: () => {} };
export { s as default };
//# sourceMappingURL=InputSuffix.js.map
