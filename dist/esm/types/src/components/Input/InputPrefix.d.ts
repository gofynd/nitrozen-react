import React from "react";
export interface InputPrefixProps {
  prefix?: string | JSX.Element;
  onPrefixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}
declare const InputPrefix: {
  (props: InputPrefixProps): React.JSX.Element;
  defaultProps: {
    onPrefixClick: () => void;
  };
};
export default InputPrefix;
