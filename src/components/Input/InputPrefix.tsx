import React from "react";

export interface InputPrefixProps {
  prefix?: string | JSX.Element;
  onPrefixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}

const InputPrefix = (props: InputPrefixProps) => {
  return (
    <span
      className={`n-input-prefix n-remove-right-border n-prefix-position ${
        typeof props.prefix === "string" && "n-prefix-padding"
      }`}
      onClick={props.onPrefixClick}
    >
      {props.prefix}
    </span>
  );
};

InputPrefix.defaultProps = {
  onPrefixClick: () => {},
};
export default InputPrefix;
