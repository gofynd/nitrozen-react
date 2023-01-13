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
      className={`jds-input-prefix jds-remove-right-border jds-prefix-position ${
        typeof props.prefix === "string" && "jds-prefix-padding"
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
