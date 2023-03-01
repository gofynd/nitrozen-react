import React from "react";
import "./Validation.scss";
import errorSvg from "../../assets/error-badge.svg";
import warningSvg from "../../assets/warning-badge.svg";
import correctSvg from "../../assets/tick-green-badge.svg";
export interface ValidationProps {
  validationState: string;
  isHidden?: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const Validation = (props: ValidationProps) => {
  const { validationState, label, isHidden, className, style, ...restProps } =
    props;

  function generateInputStateMessage() {
    let customClass;
    let icon;
    switch (validationState) {
      case "error":
        customClass = "n-field-error";
        icon = errorSvg;
        break;
      case "success":
        customClass = "n-field-success";
        icon = correctSvg;
        break;
      case "warning":
        customClass = "n-field-warning";
        icon = warningSvg;
        break;
      default:
        break;
    }
    let markup = (
      <div
        className={`n-state-container ${customClass} ${className ?? ""}`}
        style={style ?? {}}
      >
        <div className="n-svg-container">
          {" "}
          <img src={icon} alt={`${validationState} badge`} />
        </div>
        {label}
      </div>
    );
    return markup;
  }
  if (isHidden) return <></>;
  else {
    return (
      <div className="n-validation-container">
        {generateInputStateMessage()}
      </div>
    );
  }
};

Validation.defaultProps = {
  validationState: "success",
  label: "",
  isHidden: false,
};

export default React.memo(Validation);
