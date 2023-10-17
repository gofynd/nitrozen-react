import React from "react";
import "./Code.scss";
export interface CodeProps {
  fields: 4 | 6;
  getCode: Function;
  label: string;
  codeId: string;
  type?: "text" | "password";
  validationState?: string;
  hideValidation?: boolean;
  validationLabel?: string;
  validationClassName?: string;
  validationStyle?: React.CSSProperties;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  tooltipIcon?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<{
  (props: CodeProps): JSX.Element;
  defaulProps: {
    fields: number;
    label: string;
    codeId: string;
    default: string;
    hideValidation: boolean;
    validationLabel: string;
    validationClassName: string;
    validationStyle: {};
    helperText: string;
    tooltip: null;
    required: boolean;
  };
}>;
export default _default;
