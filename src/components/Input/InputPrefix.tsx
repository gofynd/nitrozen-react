import React from "react";

export interface InputPrefix {
  prefix?: string | JSX.Element;
}

const InputPrefix = (props: InputPrefix) => {
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
