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
      className={`jds-input-suffix jds-remove-left-border jds-suffix-position ${
        typeof props.suffix === "string" && "jds-suffix-padding"
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
