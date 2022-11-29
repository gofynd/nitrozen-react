import React from "react";
import loaderWhite from "./../../assets/loader-white.gif";
import classnames from "classnames";
import "./Button.scss";
// import '../../base/base.scss';
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
const Button = (props: ButtonProps) => {
  const generateClasses = () =>
    classnames({
      "n-button-rounded": props.rounded,
      "n-button-primary": props.theme === "primary",
      "n-button-secondary": props.theme === "secondary",
      "n-button-large": props.size === "large",
      "n-button-mid": props.size === "medium",
      "n-button-small": props.size === "small",
      "n-button-focused": props.focused,
      "n-button-disable": props.showProgress,
      "n-button-stroke n-button-stroke-primary":
        props.stroke && props.theme === "primary",
      "n-button-stroke n-button-stroke-secondary":
        props.stroke && props.theme === "secondary",
      "n-flat-button n-flat-button-primary":
        !props.stroke && props.theme === "primary",
      "n-flat-button n-flat-button-secondary":
        !props.stroke && props.theme === "secondary",
      "n-button-link": props.link,
    });
  const generateAttributes = () => {
    if (props.href) {
      const {
        rounded,
        theme,
        stroke,
        size,
        focused,
        showProgress,
        onClick,
        className,
        children,
        icon,
        ...rest
      } = props;
      return { ...rest };
    } else {
      const {
        rounded,
        theme,
        stroke,
        size,
        href,
        focused,
        showProgress,
        className,
        children,
        icon,
        ...rest
      } = props;
      return { ...rest };
    }
  };

  return props.href ? (
    <a
      href={props.href}
      className={`n-button ripple ripple-anchor ${generateClasses()} ${
        props.className && props.className
      }`}
      {...generateAttributes()}
    >
      <ButtonContent {...props} />
    </a>
  ) : (
    <button
      className={`n-button ripple ${generateClasses()} ${
        props.className && props.className
      }`}
      {...generateAttributes()}
    >
      <ButtonContent {...props} />
    </button>
  );
};

const ButtonContent = (props: ButtonProps) => {
  const Icon = props.icon as React.ElementType;
  return (
    <div className="n-button-content">
      {!props.showProgress && props.icon && (
        <div className="social-icon">
          <Icon
            className={classnames({
              "n-icon-small": props.size === "small",
              "n-icon": props.size === "medium",
              "n-icon-large": props.size === "large",
            })}
          />
        </div>
      )}
      {!props.showProgress && props.children}
      {props.showProgress && (
        <div className="n-btn-spin">
          <img
            className="n-btn-spinner"
            style={{ width: "50px" }}
            src={loaderWhite}
          />
        </div>
      )}
    </div>
  );
};

Button.defaultProps = {
  href: null,
  type: "button",
  disabled: false,
  rounded: false,
  theme: "primary",
  size: "medium",
  focused: false,
  showProgress: false,
  stroke: null,
  children: null,
  onClick: null,
  className: null,
  id: null,
  icon: null,
  name: null,
};

export default React.memo(Button);
