import React from "react";
import "./Alert.scss";
export interface AlertProps {
  state?: string;
  href?: string;
  labelText?: string;
  ctaButton?: boolean;
  ctaButtonText?: string;
  className?: string;
  style?: React.CSSProperties;
  Icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  extendedAlert?: boolean;
  extendedAlertBodyText?: string;
  reasonArray?: string[];
  alertWidth?: string;
}
declare const Alert: {
  (props: AlertProps): JSX.Element;
  defaultProps: {
    state: string;
    ctaButton: boolean;
    labelText: string;
    ctaButtonText: string;
    className: string;
    style: {};
    Icon: string;
  };
};
export default Alert;
