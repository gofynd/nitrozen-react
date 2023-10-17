import React from "react";
import "./Alert.scss";
export interface AlertProps {
  alertWidth?: string;
  buttonText?: string;
  buttonType?: "button" | "default" | "link";
  children?: React.ReactNode;
  className?: string;
  displayButton?: boolean;
  extendedAlert?: boolean;
  fullWidth?: boolean;
  href?: string;
  Icon?: React.ReactNode;
  labelText?: string;
  linkText?: string;
  loader?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  state?: string;
  style?: React.CSSProperties;
}
declare const Alert: {
  (props: AlertProps): JSX.Element;
  defaultProps: {
    className: string;
    displayButton: boolean;
    extendedAlert: boolean;
    fullWidth: boolean;
    Icon: string;
    labelText: string;
    loader: boolean;
    state: string;
    style: {};
  };
};
export default Alert;
