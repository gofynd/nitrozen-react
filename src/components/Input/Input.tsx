import React, { useState, useRef, useEffect, FocusEvent } from "react";
import "./Input.scss";
import InputPrefix from "./InputPrefix";
import InputSuffix from "./InputSuffix";
import NId from "../../utils/uuids";
import { SvgIcSearch, SvgIcHelp } from "../../assets/svg-components";
import Tooltip from "../Tooltip";
import Validation from "../Validation";
export interface InputProps {
  autoComplete?: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: Boolean;
  required?: Boolean;
  value?: Number | string;
  showSearchIcon?: Boolean;
  id?: Number | string;
  name?: string;
  maxLength?: Number;
  showPrefix?: Boolean;
  showSuffix?: Boolean;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  autofocus?: Boolean;
  min?: Number;
  max?: Number;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
  helperText?: string;
  state?: "error" | "success" | "warning" | "default";
  stateText?: string;
  onSuffixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onPrefixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  tooltipText?: string;
  showTooltip?: boolean;
  tooltipIcon?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const {
    autoComplete,
    type,
    label,
    placeholder,
    disabled,
    required,
    value: propValue,
    showSearchIcon,
    id,
    name,
    maxLength,
    showPrefix,
    showSuffix,
    prefix,
    suffix,
    autofocus,
    min,
    max,
    onKeyUp,
    onKeyPress,
    onChange,
    onBlur,
    onFocus,
    onClick,
    className,
    style,
    helperText,
    state,
    stateText,
    onPrefixClick,
    onSuffixClick,
    tooltipText,
    showTooltip,
    tooltipIcon,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue || "");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [labelFocus, setlabelFocus] = useState("");
  const [borderFocus, setBorderFocus] = useState("");
  const [focusBorder, setFocusBorder] = useState("");
  useEffect(() => {
    function autoFocus() {
      if (props.autofocus) {
        inputRef?.current?.focus();
      }
      // if there is a value already in the props then focus the input field
      if (propValue || placeholder) {
        focusHandler();
      }
    }
    autoFocus();
  }, []);

  useEffect(() => {
    setValue(propValue || "");
  }, [propValue]);

  function onInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setValue(event.target.value);
    onChange?.(event);
  }

  function generateClassesForInput() {
    let classes = "";
    classes = `${classes} ${
      showSearchIcon && type !== "textarea"
        ? "n-search-input-padding input-prefixed"
        : ""
    }`;
    classes = `${classes} ${className || ""}`;
    // if both suffix and prefix are present then set class accordingly
    if (showPrefix && showSuffix) {
      classes = `${classes} input-contained`;
    } else {
      // else set separate classes
      classes = `${classes} ${
        showPrefix ? "n-remove-left-border input-prefixed" : ""
      }`;
      classes = `${classes} ${
        showSuffix ? "n-remove-right-border input-suffixed" : ""
      }`;
    }
    return classes;
  }
  function generateAttributesForInput() {
    const attrs: any = {};
    min && (attrs.min = min);
    max && (attrs.max = max);
    typeof maxLength !== "undefined" && (attrs.maxLength = maxLength);
    autoComplete && (attrs.autoComplete = autoComplete);
    id && (attrs.id = id);
    type && (attrs.type = type);
    disabled && (attrs.disabled = disabled);
    placeholder && (attrs.placeholder = placeholder);
    style && (attrs.style = style);
    return attrs;
  }
  function generateAttributesForTextarea() {
    const attrs: any = {};
    typeof maxLength !== "undefined" && (attrs.maxLength = maxLength);
    disabled && (attrs.disabled = disabled);
    placeholder && (attrs.placeholder = placeholder);
    style && (attrs.style = style);
    return attrs;
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    if (!inputRef.current?.value && !placeholder) {
      setlabelFocus("");
      setBorderFocus("");
    }
    setFocusBorder("");
    onBlur?.(event);
  }

  function focusHandler() {
    setlabelFocus(
      `n-focused-label${showPrefix || showSearchIcon ? "-prefixed" : ""}`
    );
    setBorderFocus("n-border-focused");
  }

  return (
    <div className={`n-form-input ${disabled && "n-input-group-disabled"}`}>
      <div
        className={`n-input-label-container ${
          showPrefix || showSearchIcon ? "n-input-label-prefixed" : ""
        } ${labelFocus}`}
      >
        {label && (
          <label className="n-input-label">
            <>
              {label} {required ? " *" : ""}
              {showTooltip && (
                <span className="n-input-tooltip">
                  {tooltipText && (
                    <Tooltip
                      tooltipContent={tooltipText}
                      icon={
                        tooltipIcon || (
                          <SvgIcHelp style={{ fontSize: "14px" }} />
                        )
                      }
                      position="top"
                    />
                  )}
                </span>
              )}
            </>
          </label>
        )}
        {maxLength && typeof value == "string" && type != "number" && (
          <label className="n-input-label n-input-maxLength">
            <>
              {value.length}/{maxLength}
            </>
          </label>
        )}
      </div>
      <div className={`n-input-grp`}>
        {showSearchIcon && (
          <span className="n-search-icon">
            <SvgIcSearch className="search-icon" />
          </span>
        )}
        {/* <!-- Input --> */}
        <div
          className={`n-input-container ${borderFocus} ${focusBorder} ${
            props.state && props.state !== "default" ? `n-${state}-border` : ""
          }`}
        >
          {/* <!-- Prefix --> */}
          {showPrefix && type !== "textarea" && (
            <InputPrefix prefix={prefix} onPrefixClick={onPrefixClick} />
          )}
          {type !== "textarea" && (
            <input
              ref={inputRef}
              className={`n-input ${generateClassesForInput()}`}
              onKeyUp={onKeyUp}
              onChange={onChange}
              onBlur={handleOnBlur}
              onFocus={(event) => {
                focusHandler();
                // set the place holder only if the value exists in props
                // placeholder && setPlaceHolderText(value ? "" : placeholder);
                onFocus?.(event);
              }}
              onClick={(event) => {
                setFocusBorder("n-focused-border");
                onClick?.(event);
              }}
              onKeyPress={onKeyPress}
              value={value}
              {...generateAttributesForInput()}
              onInput={onInputChange}
              {...restProps}
            />
          )}
          {/* <!-- Textarea --> */}
          {type === "textarea" && (
            <textarea
              ref={inputRef}
              onKeyUp={onKeyUp}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={(event) => {
                focusHandler();
                // set the place holder only if the value exists in props
                // placeholder && setPlaceHolderText(value ? "" : placeholder);
                onFocus?.(event);
              }}
              onClick={(event) => {
                setFocusBorder("n-focused-border");
                onClick?.(event);
              }}
              onKeyPress={onKeyPress}
              className={`n-input input-text ${
                type === "textarea" && "n-input-textarea"
              }`}
              {...generateAttributesForTextarea()}
              onInput={onInputChange}
              value={value}
              {...restProps}
            ></textarea>
          )}
          {/* <!-- Suffix --> */}
          {type !== "textarea" && showSuffix && (
            <InputSuffix suffix={suffix} onSuffixClick={onSuffixClick} />
          )}
        </div>
      </div>
      <div className="n-input-underinfo">
        {props.state !== "default" && (
          <Validation
            validationState={props.state}
            label={stateText}
            isHidden={false}
          />
        )}
        {helperText && <span className="n-helper-text">{helperText}</span>}
      </div>
    </div>
  );
};

Input.defaultProps = {
  autoComplete: "",
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  required: false,
  value: "",
  showSearchIcon: false,
  id: `n-input${NId()}`,
  showPrefix: false,
  showSuffix: false,
  autofocus: false,
  onKeyUp: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
  state: "default",
  stateText: "",
  onSuffixClick: () => {},
  onPrefixClick: () => {},
  tooltip: null,
};

export default React.memo(Input);
