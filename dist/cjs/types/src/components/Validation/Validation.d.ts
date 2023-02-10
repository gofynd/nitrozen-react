import React from "react";
import "./Validation.scss";
export interface ValidationProps {
  validationState: string;
  isHidden?: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: ValidationProps): JSX.Element;
  defaultProps: {
    validationState: string;
    label: string;
    isHidden: boolean;
  };
}>;
export default _default;
