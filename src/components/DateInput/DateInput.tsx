import React, { useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import Validation from "../Validation";
import {
  SvgHelpOutline,
  SvgIcCloseRemove,
  SvgIcCalendar,
} from "../../assets/svg-components";
import "./DateInput.scss";

export interface DateInputProps {
  id: string;
  label: string;
  required?: Boolean;
  useDatePicker?: Boolean;
  dateValue?: string; // mm/dd/yyyy format
  helperText?: string;
  validationState?: string;
  validationText?: string;
  validationStyle?: React.CSSProperties;
  validationClassName?: string;
  getDateValue: Function;
  closeClicked?: Function;
}

const DateInput = (props: DateInputProps) => {
  const {
    label,
    required,
    useDatePicker,
    dateValue,
    helperText,
    validationState,
    validationText,
    validationClassName,
    validationStyle,
    getDateValue,
    closeClicked,
    id,
  } = props;
  const [date, setDate] = useState<any>({ mm: "", dd: "", yyyy: "" });
  const [dateError, setDateError] = useState("");

  // if a date value is given as input then set that in the state
  // * The format is important "mm/dd/yyyy"
  useEffect(() => {
    if (dateValue) {
      let dateVal = dateValue.split("/");
      let stateDateObj = { ...date };
      stateDateObj.mm = dateVal[0];
      stateDateObj.dd = dateVal[1];
      stateDateObj.yyyy = dateVal[2];
      setDate(stateDateObj);
    }
  }, []);

  const handleDateInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    dateKey: string,
    index: number
  ) => {
    let stateDateObj: any = { ...date };
    event.target.value = event.target.value.replace(/[^0-9]+/g, "");
    // if the given input has a length on 2 charcters and its not the last input field
    if (event.target.value.length == 2 && index != 2) {
      // get the next document and focus
      let nextInput = document.getElementById(`date-input-${index + 1}-${id}`);
      nextInput?.focus();
    }

    if (index == 2 && event.target.value.length > 4) {
      return;
    }
    // set the data in the state
    stateDateObj[dateKey] = event.target.value;
    setDate(stateDateObj);
    // if all inputs are filled then execute the local date validation function
    if (stateDateObj.mm && stateDateObj.dd && stateDateObj.yyyy) {
      defaultErrorValidation(stateDateObj);
    }
    getDateValue(`${stateDateObj.mm}/${stateDateObj.dd}/${stateDateObj.yyyy}`);
  };

  // Function to handle cancel button click
  const handleCancelClick = () => {
    let stateDateObj = { ...date };
    stateDateObj.mm = "";
    stateDateObj.dd = "";
    stateDateObj.yyyy = "";
    setDate(stateDateObj);
    // empty state value and error text
    setDateError("");
    getDateValue("");
  };

  // a default date validation that peforms basic checks
  const defaultErrorValidation = (stateDateObj: any) => {
    if (stateDateObj.mm && (stateDateObj.mm == 0 || stateDateObj.mm > 12)) {
      setDateError("Entered month is not valid");
      return;
    }
    if (stateDateObj.dd && (stateDateObj.dd == 0 || stateDateObj.dd > 31)) {
      setDateError("Entered day is not valid");
      return;
    }
    if (stateDateObj.yyyy && stateDateObj.yyyy.length < 4) {
      setDateError("Entered year is not valid");
      return;
    }
    // if no errors then set the error state as empty
    setDateError("");
  };

  function handleBackSpace(currentIndex: number, event: any) {
    // if there is a field before the current index then delete and focus on that index
    if (currentIndex >= 0 && !event.target.value) {
      let prevField = document.getElementById(
        `date-input-${currentIndex - 1}-${id}`
      );
      prevField?.focus();
    }
    defaultErrorValidation(date);
  }

  //function to handle backspace event
  function handleKeyDown(event: any, currentIndex: number) {
    if ([8, 46].includes(event.keyCode)) {
      handleBackSpace(currentIndex, event);
    }
  }
  return (
    <div className="n-date-wrapper">
      <div className={`n-input-label-container`}>
        {label && (
          <label className="n-input-label" data-testid={`n-date-label`}>
            <>
              {label} {required ? " *" : ""}
            </>
          </label>
        )}
      </div>
      <div
        data-testid={`n-date-inputfield`}
        className={`n-date-inputfield ${
          dateError
            ? "n-date-error"
            : validationState
            ? `n-${validationState}-field`
            : ""
        }`}
      >
        <div className="n-date-left-group">
          <div
            data-testid={`n-datepicker-icon`}
            className="n-icon-container"
            onClick={useDatePicker ? () => {} : () => {}}
          >
            <SvgIcCalendar />
          </div>
          <div className="n-date-input-group">
            {Object.keys(date).map((dateKey: string, index) => (
              <>
                <input
                  key={`date-input-${index}`}
                  data-testid={`date-input-${index}-${id}`}
                  id={`date-input-${index}-${id}`}
                  className="n-date-single-field"
                  value={date[dateKey]}
                  type="text"
                  onChange={(event) => handleDateInput(event, dateKey, index)}
                  placeholder={dateKey.toUpperCase()}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onBlur={() =>
                    getDateValue(`${date.mm}/${date.dd}/${date.yyyy}`)
                  }
                  autoComplete={"off"}
                />
                {index < 3 ? <span className="n-date-divider">/</span> : <></>}
              </>
            ))}
          </div>
        </div>
        {date.mm || date.dd || date.yyyy ? (
          <div
            data-testid={`n-date-close-icon`}
            className="n-input-close-btn n-icon-container"
            onClick={() => {
              handleCancelClick();
              closeClicked?.();
            }}
          >
            <SvgIcCloseRemove />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="n-input-underinfo" data-testid={`n-date-underinfo`}>
        {(dateError || validationState) && (
          <Validation
            validationState={dateError ? "error" : validationState}
            label={validationText ? validationText : dateError}
            isHidden={false}
            style={validationStyle}
            className={validationClassName}
          />
        )}
        {helperText && (
          <span className="n-helper-text" data-testid={`n-date-helpertext`}>
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
};

DateInput.defaulProps = {
  useDatePicker: true,
  required: false,
  tooltipText: "",
  helperText: "",
  validationStyle: {},
  validationClassName: "",
};

export default React.memo(DateInput);
