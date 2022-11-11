import React from "react";
import "./Validation.scss";
export interface ValidationProps {
  isValid: boolean;
  isHidden?: boolean;
  validLabel: string;
  invalidLabel: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: ValidationProps): JSX.Element;
  defaultProps: {
    isValid: boolean;
    validLabel: string;
    invalidLabel: string;
    isHidden: boolean;
  };
}>;
export default _default;
