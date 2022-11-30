import React from "react";
import "./Button.scss";
export interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
  link?: boolean;
  theme?: string;
  size?: string;
  focused?: boolean;
  showProgress?: boolean;
  stroke?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
  name?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: ButtonProps): JSX.Element;
  defaultProps: {
    href: null;
    type: string;
    disabled: boolean;
    rounded: boolean;
    theme: string;
    size: string;
    focused: boolean;
    showProgress: boolean;
    stroke: null;
    children: null;
    onClick: null;
    className: null;
    id: null;
    icon: null;
    name: null;
  };
}>;
export default _default;
