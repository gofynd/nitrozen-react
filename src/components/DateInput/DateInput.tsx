import React, { useState, useEffect } from "react";
import Validation from "../Validation";
import {
  SvgIcCloseRemove,
  SvgIcCalendar,
} from "../../assets/svg-components/Nitrozen";
import "./DateInput.scss";
import DatePicker from "../DatePicker/DatePicker";
import { getFormattedDate } from "../../utils/dateHandler";
interface RangeConfigProps {
  start: string | Date;
  end: string | Date;
  min: string | Date;
  max: string | Date;
}
export interface DateInputProps {
  id: string;
  label: string;
  required?: boolean;
  useDatePicker?: boolean;
  dateValue?: Date | string;
  helperText?: string;
  validationState?: string;
  validationText?: string;
  validationStyle?: React.CSSProperties;
  validationClassName?: string;
  getDateValue?: Function;
  closeClicked?: Function;
  isRange?: boolean;
  rangeConfig?: RangeConfigProps;
  onConfirmRange?: Function;
  defaultValidation?: boolean;
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
    isRange,
    rangeConfig,
    onConfirmRange,
    defaultValidation,
  } = props;
  const [date, setDate] = useState<any>({ mm: "", dd: "", yyyy: "" });
  const [dateError, setDateError] = useState("");
  const [datePickerDate, setDatePickerDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState<RangeConfigProps>({
    start: "",
    end: "",
    min: "",
    max: "",
  });

  // if a date value is given as input then set that in the state
  // * The format is important "mm/dd/yyyy"
  useEffect(() => {
    if (dateValue) {
      let dateVal: any = new Date(dateValue);
      let stateDateObj = { ...date };
      stateDateObj.mm =
        dateVal.getMonth() + 1 < 10
          ? "0" + (dateVal.getMonth() + 1).toString()
          : (dateVal.getMonth() + 1).toString();
      stateDateObj.dd =
        dateVal.getDate() < 10
          ? "0" + dateVal.getDate().toString()
          : dateVal.getDate().toString();
      stateDateObj.yyyy = dateVal.getFullYear().toString();
      setDate(stateDateObj);
    }
    if (isRange && rangeConfig) {
      setRange(rangeConfig);
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
    getDateValue?.(
      new Date(`${stateDateObj.mm}/${stateDateObj.dd}/${stateDateObj.yyyy}`)
    );
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
    getDateValue?.("");
  };

  // a default date validation that peforms basic checks
  const defaultErrorValidation = (stateDateObj: any) => {
    if (defaultValidation) {
      if (stateDateObj.mm && (stateDateObj.mm === 0 || stateDateObj.mm > 12)) {
        return setDateError("Invalid Date");
      }
      if (
        (stateDateObj.yyyy && stateDateObj.yyyy.length < 4) ||
        ["0000", "9999"].includes(stateDateObj.yyyy)
      ) {
        return setDateError("Invalid Date");
      }
      let availableMonths = daysInMonth(stateDateObj.mm, stateDateObj.yyyy);
      if (
        stateDateObj.dd &&
        (stateDateObj.dd == 0 || stateDateObj.dd > availableMonths)
      ) {
        return setDateError("Invalid Date");
      }
      // if no errors then set the error state as empty
      setDateError("");
    }
  };

  // Function to get number of days available in a mont
  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

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
  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    currentIndex: number
  ) {
    if ([8, 46].includes(event.keyCode)) {
      handleBackSpace(currentIndex, event);
    }
  }

  const handleDateClicked = (dateValue: string) => {
    setDatePickerDate(dateValue);
    const dateVal = dateValue.split("/");
    let stateDateObj = { ...date };
    stateDateObj.mm = dateVal[0];
    stateDateObj.dd = dateVal[1];
    stateDateObj.yyyy = dateVal[2];
    setDate(stateDateObj);
    getDateValue?.(
      new Date(`${stateDateObj.mm}/${stateDateObj.dd}/${stateDateObj.yyyy}`)
    );
  };

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
        <div
          className="n-date-left-group"
          data-testid={`n-date-left-group`}
          onClick={() =>
            useDatePicker ? setShowPicker(!showPicker) : () => {}
          }
        >
          <div
            data-testid={`n-datepicker-icon`}
            className={`n-icon-container ${
              useDatePicker ? "n-cursor-pointer" : ""
            }`}
          >
            <SvgIcCalendar />
          </div>
          <div className="n-date-input-group">
            {!isRange &&
              Object.keys(date).map((dateKey: string, index) => (
                <>
                  <input
                    key={`date-input-${index}-${id}`}
                    data-testid={`date-input-${index}-${id}`}
                    id={`date-input-${index}-${id}`}
                    className="n-date-single-field"
                    value={date[dateKey]}
                    type="text"
                    onChange={(event) => handleDateInput(event, dateKey, index)}
                    placeholder={dateKey.toUpperCase()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onBlur={() => {
                      if ([0, 1].includes(index)) {
                        let dateVal = { ...date };
                        if (dateVal[dateKey].length == 1) {
                          dateVal[dateKey] = `0${dateVal[dateKey]}`;
                          setDate(dateVal);
                        }
                      }
                      getDateValue?.(`${date.mm}/${date.dd}/${date.yyyy}`);
                    }}
                    autoComplete={"off"}
                    disabled={useDatePicker ? true : false}
                  />
                  {index < 3 ? (
                    <span className="n-date-divider">/</span>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            {isRange ? (
              range.start !== "" && range.end !== "" ? (
                <div className="n-date-range-field">
                  <div>{getFormattedDate(range.start) || "--"}</div>
                  <div>{"to"}</div>
                  <div>{getFormattedDate(range.end) || "--"}</div>
                </div>
              ) : (
                <div className="n-date-range-field">Select a date range</div>
              )
            ) : null}
          </div>
        </div>
        {date.mm || date.dd || date.yyyy ? (
          <div
            data-testid={`n-date-close-icon`}
            className="n-input-close-btn n-icon-container n-cursor-pointer"
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
      <div className="n-date-picker-container">
        {showPicker ? (
          <DatePicker
            dateVal={datePickerDate}
            onDateClick={(date: string) => {
              handleDateClicked(date);
              setShowPicker(false);
            }}
            onClose={() => setShowPicker(false)}
            minDate={""}
            maxDate={""}
            isRange={isRange}
            rangeConfig={{
              start: range.start,
              min: range.min,
              max: range.max,
              end: range.end,
            }}
            getRange={(range: RangeConfigProps) => setRange(range)}
            onConfirmRange={(range: RangeConfigProps) => {
              onConfirmRange?.(range);
              setShowPicker(false);
            }}
          />
        ) : (
          <></>
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
  isRange: false,
  rangeConfig: {},
  onConfirmRange: () => {},
  defaultValidation: true,
};

export default React.memo(DateInput);
