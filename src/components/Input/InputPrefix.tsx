import React from "react";

export interface InputPrefixProps {
  prefix?: string | JSX.Element;
}

const InputPrefix = (props: InputPrefixProps) => {
  return (
    <span
      className={`nitrozen-input-prefix nitrozen-remove-right-border ${
        typeof props.prefix === "string" && "nitrozen-prefix-padding"
      }`}
    >
      {props.prefix}
    </span>
  );
};
export default InputPrefix;
