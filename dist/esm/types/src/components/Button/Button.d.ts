import React from "react";
import "./Button.scss";
export interface ButtonProps {
  href?: string;
  disabled?: boolean;
  rounded?: boolean;
  state?: "positive" | "destructive" | "default";
  theme?: string;
  as?: "div" | "span" | "default";
  size?: string;
  focused?: boolean;
  showProgress?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
  >;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  name?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: ButtonProps): JSX.Element;
  defaultProps: {
    href: null;
    disabled: boolean;
    rounded: boolean;
    theme: string;
    as: null;
    size: string;
    focused: boolean;
    showProgress: boolean;
    fullWidth: boolean;
    children: null;
    onClick: null;
    className: null;
    id: null;
    icon: null;
    name: null;
  };
}>;
export default _default;
