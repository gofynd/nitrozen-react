import React, { useEffect, useState } from "react";
import "./Alert.scss";
import Button from "../Button";
import { SvgCheck, SvgError } from "../../assets/svg-components";
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

const Alert = (props: AlertProps) => {
  const {
    state,
    labelText,
    className,
    style,
    ctaButton,
    ctaButtonText,
    Icon,
    children,
    onClick,
    href,
    extendedAlert,
    extendedAlertBodyText,
    reasonArray,
    alertWidth,
    ...restProps
  } = props;
  const [classes, setClasses] = useState({ c1: "", c2: "", c3: "", c4: "" }); // c1 => container ,c2 => icon ,c3 : => button , c4: => ctaLabel

  useEffect(() => {
    switch (state) {
      case "info":
        setClasses({
          c1: "nitrozen-alert-info",
          c2: "nitrozen-alert-icon-info",
          c3: "",
          c4: "nitrozen-alert-cta-info",
        });
        break;
      case "success":
        setClasses({
          c1: "nitrozen-alert-success",
          c2: "nitrozen-alert-icon-success",
          c3: "nitrozen-alert-button-success",
          c4: "nitrozen-alert-cta-success",
        });
        break;
      case "warn":
        setClasses({
          c1: "nitrozen-alert-warn",
          c2: "nitrozen-alert-icon-warn",
          c3: "nitrozen-alert-button-warn",
          c4: "nitrozen-alert-cta-warn",
        });
        break;
      case "error":
        setClasses({
          c1: "nitrozen-alert-error",
          c2: "nitrozen-alert-icon-error",
          c3: "nitrozen-alert-button-error",
          c4: "nitrozen-alert-cta-error",
        });
        break;
    }
  }, [state]);

  return (
    <div
      style={
        {
          ...style,
          width: alertWidth || "100%",
          height: extendedAlert ? "auto" : "48px",
        } ?? {}
      }
      className={`nitrozen-alert ${classes.c1}`}
      {...restProps}
    >
      <div className="nitrozen-alert-flex">
        <div className="nitrozen-alert-text-icon-wrapper">
          {Icon ||
            (state === "success" ? (
              <SvgCheck className={`nitrozen-alert-icon  ${classes.c2}`} />
            ) : (
              <SvgError className={`nitrozen-alert-icon  ${classes.c2}`} />
            ))}
          <div
            className={
              extendedAlert
                ? `nitrozen-alert-cta ${classes.c4} nitrozen-extended-alert`
                : ""
            }
          >
            {labelText}
          </div>
        </div>
        {ctaButton ? (
          <Button
            size="small"
            className={`nitrozen-alert-button ${classes.c3}`}
            onClick={onClick}
          >
            {ctaButtonText}
          </Button>
        ) : (
          <a
            className={`nitrozen-alert-cta ${classes.c4}`}
            onClick={onClick}
            href={href}
          >
            {children}
          </a>
        )}
      </div>
      {extendedAlert && (
        <div className="nitrozen-extended-alert-body">
          <div className="nitrozen-extended-alert-reasons">
            {reasonArray?.map((reason, i, arr) => {
              return (
                <span key={i}>
                  {reason}
                  {i !== arr.length - 1 ? " | " : " "}{" "}
                </span>
              );
            })}
          </div>
          <div className="nitrozen-extended-alert-description">
            {extendedAlertBodyText}
          </div>
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = {
  state: "success",
  ctaButton: false,
  labelText: "",
  ctaButtonText: "",
  className: "",
  style: {},
  Icon: "",
};

export default Alert;
