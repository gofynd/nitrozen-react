import React from "react";

export interface InputSuffixProps {
  suffix?: string | JSX.Element;
}

const InputSuffix = (props: InputSuffixProps) => {
  return (
    <span
      className={`nitrozen-input-suffix nitrozen-remove-left-border ${
        typeof props.suffix === "string" && "nitrozen-suffix-padding"
      }`}
    >
      {props.suffix}
    </span>
  );
};
export default InputSuffix;
