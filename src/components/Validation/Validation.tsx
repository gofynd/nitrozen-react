import React from "react";
import "./Validation.scss";
import errorSvg from "../../assets/error-red-badge.svg";
import correctSvg from "../../assets/tick-green-badge.svg";
export interface ValidationProps {
  isValid: boolean;
  isHidden?: boolean;
  validLabel: string;
  invalidLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

const Validation = (props: ValidationProps) => {
  const {
    isValid,
    validLabel,
    invalidLabel,
    isHidden: hideValidation,
    className,
    style,
    ...restProps
  } = props;

  if (hideValidation) return <></>;

  if (!isValid) {
    return (
      <div
        style={style ?? {}}
        className={`badge-description-container ${className ?? ""}`}
        {...restProps}
      >
        <img src={errorSvg} alt="error badge" />
        <span className="nitrozen-error-visible">{invalidLabel}</span>
      </div>
    );
  }

  return (
    <div
      style={style ?? {}}
      className={`badge-description-container ${className ?? ""}`}
      {...restProps}
    >
      <img src={correctSvg} alt="correct badge" />
      <span className="nitrozen-approval-visible">{validLabel}</span>
    </div>
  );
};

Validation.defaultProps = {
  isValid: false,
  validLabel: "",
  invalidLabel: "",
  isHidden: false,
};

export default React.memo(Validation);
