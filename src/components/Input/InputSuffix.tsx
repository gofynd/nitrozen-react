import React from "react";

export interface InputSuffixProps {
  suffix?: string | JSX.Element;
  onSuffixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}

const InputSuffix = (props: InputSuffixProps) => {
  return (
    <span
      className={`n-input-suffix n-remove-left-border n-suffix-position ${
        typeof props.suffix === "string" && "n-suffix-padding"
      }`}
      onClick={props.onSuffixClick}
    >
      {props.suffix}
    </span>
  );
};
InputSuffix.defaultProps = {
  onSuffixClick: () => {},
};
export default InputSuffix;
