import React, { useState, useEffect } from "react";
import Validation from "../Validation";
import { SvgIcHelp } from "../../assets/svg-components";
import Tooltip from "../Tooltip";
import "./Code.scss";

export interface CodeProps {
  fields: 4 | 6;
  getCode: Function;
  label: string;
  codeId: string;
  type?: "text" | "password";
  validationState?: string;
  hideValidation?: boolean;
  validationLabel?: string;
  validationClassName?: string;
  validationStyle?: React.CSSProperties;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  tooltipIcon?: React.ReactNode;
}

const Code = (props: CodeProps) => {
  const {
    fields,
    getCode,
    label,
    codeId,
    type,
    hideValidation,
    validationLabel,
    validationState,
    validationClassName,
    validationStyle,
    helperText,
    required,
    tooltip,
    tooltipIcon,
    ...restProps
  } = props;
  const [codeArr, setCodeArr] = useState<string[]>([]);

  // Once the component mounts set the state array with the number of prop fields
  useEffect(() => {
    let codeArrEnum = Array(fields).fill("");
    setCodeArr(codeArrEnum);
  }, []);

  function onInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    // if the target event is empty then delete and go back
    // Replace the user input to allow only numbers
    let codeInput = event.target.value.replace(/[^0-9]+/g, "");
    // Case to handle backspace event in case there is a value already in the field
    if (codeInput.length == 2 && index + 1 <= fields - 1) {
      codeInput = codeInput[1];
      let tempCodeArr = [...codeArr];
      tempCodeArr[index + 1] = codeInput;
      setCodeArr(tempCodeArr);
      getCode(tempCodeArr.join(""));
      goToNextField(index);
      // IMP to return
      return;
    }
    // only if there is input with 1 digit
    if (codeInput && codeInput.length <= 1) {
      let tempCodeArr = [...codeArr];
      tempCodeArr[index] = codeInput;
      setCodeArr(tempCodeArr);
      getCode(tempCodeArr.join(""));
      goToNextField(index);
    }
  }

  function goToNextField(currentIndex: number) {
    // if there is a field after the current index then shift focus on that
    if (currentIndex + 1 <= fields - 1) {
      let nextField = document.getElementById(
        `code-input-${codeId}-${currentIndex + 1}`
      );
      nextField?.focus();
    }
  }

  function handleBackSpace(currentIndex: number) {
    // if there is a field before the current index then delete and focus on that index
    if (currentIndex >= 0 && currentIndex <= fields - 1) {
      let tempCodeArr = [...codeArr];
      tempCodeArr[currentIndex] = "";
      setCodeArr(tempCodeArr);
      getCode(tempCodeArr.join(""));
      let prevField = document.getElementById(
        `code-input-${codeId}-${currentIndex - 1}`
      );
      prevField?.focus();
    }
  }
  function handleKeyDown(event: any, currentIndex: number) {
    if ([8, 46].includes(event.keyCode)) {
      handleBackSpace(currentIndex);
    }
  }

  return (
    <div className="n-code-main">
      <div
        className={`n-code-label-container`}
        data-testid={`label-id-${codeId}`}
      >
        <label className="n-code-label" data-testid={`code-label-${codeId}`}>
          {label} {required ? "*" : ""}
          {tooltip && (
            <span className="n-input-tooltip">
              {tooltip && (
                <Tooltip
                  tooltipContent={tooltip}
                  icon={
                    tooltipIcon || <SvgIcHelp style={{ fontSize: "14px" }} />
                  }
                  position="top"
                />
              )}
            </span>
          )}
        </label>
      </div>
      <div className={`n-code-field-container`}>
        {codeArr.map((value, index) => {
          return (
            <input
              autoComplete="off"
              id={`code-input-${codeId}-` + index}
              key={`code-input-${codeId}-` + index}
              data-testid={`code-input-${codeId}-` + index}
              value={value}
              type={type}
              onChange={(e) => onInputChange(e, index)}
              placeholder={"0"}
              className={`n-code-input-field ${
                validationState && !hideValidation
                  ? `n-code-input-border-${validationState}`
                  : `n-code-input-border`
              }`}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
      <div className="n-code-underinfo">
        {!hideValidation && (
          <Validation
            isHidden={hideValidation}
            label={validationLabel}
            style={validationStyle}
            className={validationClassName}
            validationState={validationState}
          />
        )}
        {helperText && <span className="n-helper-text">{helperText}</span>}
      </div>
    </div>
  );
};

Code.defaulProps = {
  fields: 4,
  label: "",
  codeId: "",
  default: "text",
  hideValidation: true,
  validationLabel: "",
  validationClassName: "",
  validationStyle: {},
  helperText: "",
  tooltip: null,
  required: false,
};

export default React.memo(Code);
