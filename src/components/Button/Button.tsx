import React from "react";
import classnames from "classnames";
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
const Button = (props: ButtonProps) => {
  const generateClasses = () =>
    classnames({
      "n-button-rounded": props.rounded,
      "n-button-primary": props.theme === "primary",
      "n-button-primary-positive":
        props.theme === "primary" && props.state === "positive",
      "n-button-primary-destructive":
        props.theme === "primary" && props.state === "destructive",
      "n-button-secondary": props.theme === "secondary",
      "n-button-secondary-positive":
        props.theme === "secondary" && props.state === "positive",
      "n-button-secondary-destructive":
        props.theme === "secondary" && props.state === "destructive",
      "n-button-tertiary": props.theme === "tertiary",
      "n-button-tertiary-positive":
        props.theme === "tertiary" && props.state === "positive",
      "n-button-tertiary-destructive":
        props.theme === "tertiary" && props.state === "destructive",
      "n-button-large": props.size === "large",
      "n-button-large_only_icon": !props.children,
      "n-button-mid": props.size === "medium",
      "n-button-mid_only_icon": !props.children,
      "n-button-small": props.size === "small",
      "n-button-small_only_icon": !props.children,
      "n-button-focused": props.focused,
      "n-button-disable": props.showProgress,
      "n-button-full-width": props.fullWidth,
    });
  const generateAttributes = () => {
    if (props.href) {
      const {
        rounded,
        theme,
        as,
        size,
        focused,
        showProgress,
        fullWidth,
        onClick,
        className,
        children,
        icon,
        iconRight,
        ...rest
      } = props;
      return { ...rest };
    } else {
      const {
        rounded,
        theme,
        as,
        size,
        href,
        focused,
        showProgress,
        fullWidth,
        className,
        children,
        icon,
        iconRight,
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
  ) : props.as == "div" ? (
    <div
      className={`n-button ripple ${generateClasses()} ${
        props.className && props.className
      }`}
      {...generateAttributes()}
    >
      <ButtonContent {...props} />
    </div>
  ) : props.as == "span" ? (
    <span
      className={`n-button ripple ${generateClasses()} ${
        props.className && props.className
      }`}
      {...generateAttributes()}
    >
      <ButtonContent {...props} />
    </span>
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
  const IconRight = props.iconRight as React.ElementType;
  return (
    <div className="n-button-content">
      {props.icon && (props.children || !props.showProgress) && (
        <div className="n-btn-social-icon">
          <Icon
            className={classnames({
              "n-icon-small": props.size === "small",
              "n-icon": props.size === "medium",
              "n-icon-large": props.size === "large",
              "icon-padding-right": props.children,
            })}
          />
        </div>
      )}
      {props.children}
      {props.showProgress && (
        <div className="n-btn-spin">
          <img
            className="n-btn-spinner"
            style={{ width: "50px" }}
            src={
              "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/loader.gif"
            }
          />
        </div>
      )}
      {!props.showProgress && props.children && props.iconRight && (
        <div className="social-icon-right">
          <IconRight
            className={classnames({
              "n-icon-small": props.size === "small",
              "n-icon": props.size === "medium",
              "n-icon-large": props.size === "large",
              "icon-padding-left": props.children,
            })}
          />
        </div>
      )}
    </div>
  );
};

Button.defaultProps = {
  href: null,
  disabled: false,
  rounded: true,
  theme: "primary",
  as: null,
  size: "medium",
  focused: false,
  showProgress: false,
  fullWidth: false,
  children: null,
  onClick: null,
  className: null,
  id: null,
  icon: null,
  name: null,
};

export default React.memo(Button);
