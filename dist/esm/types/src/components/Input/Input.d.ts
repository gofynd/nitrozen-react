import React from "react";
import "./Input.scss";
export interface InputProps {
  autoComplete?: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: Boolean;
  required?: Boolean;
  value?: Number | string;
  showSearchIcon?: Boolean;
  id?: Number | string;
  name?: string;
  maxLength?: Number;
  showPrefix?: Boolean;
  showSuffix?: Boolean;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  autofocus?: Boolean;
  min?: Number;
  max?: Number;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
  helperText?: string;
  state?: "error" | "success" | "warning" | "default";
  stateText?: string;
  onSuffixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onPrefixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  tooltipText?: string;
  showTooltip?: boolean;
  tooltipIcon?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<{
  (props: InputProps): JSX.Element;
  defaultProps: {
    autoComplete: string;
    type: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    value: string;
    showSearchIcon: boolean;
    id: string;
    showPrefix: boolean;
    showSuffix: boolean;
    autofocus: boolean;
    onKeyUp: () => void;
    onKeyPress: () => void;
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    onClick: () => void;
    state: string;
    stateText: string;
    onSuffixClick: () => void;
    onPrefixClick: () => void;
    tooltip: null;
  };
}>;
export default _default;
