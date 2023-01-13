import React, { useState, useRef, useEffect, FocusEvent } from "react";
import "./Input.scss";
import InputPrefix from "./InputPrefix";
import InputSuffix from "./InputSuffix";
import JDSId from "../../utils/uuids";
import { SvgSearch } from "../../assets/svg-components/Action";
import errorSvg from "../../assets/error-badge.svg";
import warningSvg from "../../assets/warning-badge.svg";
import correctSvg from "../../assets/tick-green-badge.svg";
import openEye from "../../assets/eye-open.svg";
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
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue || "");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [labelFocus, setlabelFocus] = useState("");
  const [borderFocus, setBorderFocus] = useState("");
  const [showPasswordEye, setShowPasswordEye] = useState(false);
  const [textType, setTextType] = useState("");

  useEffect(() => {
    function autoFocus() {
      if (props.autofocus) {
        inputRef?.current?.focus();
      }
      // if there is a value already in the props then focus the input field
      if (propValue || placeholder) {
        focusHandler();
      }
      if (type == "password") {
        setShowPasswordEye(true);
      }
      setTextType(type);
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
        ? "jds-search-input-padding input-prefixed"
        : ""
    }`;
    classes = `${classes} ${className || ""}`;
    // if both suffix and prefix are present then set class accordingly
    if (showPrefix && showSuffix) {
      classes = `${classes} input-contained`;
    } else {
      // else set separate classes
      classes = `${classes} ${
        showPrefix ? "jds-remove-left-border input-prefixed" : ""
      }`;
      classes = `${classes} ${
        showSuffix ? "jds-remove-right-border input-suffixed" : ""
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
    onBlur?.(event);
  }
  function focusHandler() {
    setlabelFocus(
      `focused-label${showPrefix || showSearchIcon ? "-prefixed" : ""}`
    );
    setBorderFocus("border-focused");
  }
  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    focusHandler();
    // set the place holder only if the value exists in props
    // placeholder && setPlaceHolderText(value ? "" : placeholder);
    onFocus?.(event);
  }

  function generateInputStateMessage(text: string | undefined) {
    let className;
    let icon;
    switch (state) {
      case "error":
        className = "n-field-error";
        icon = errorSvg;
        break;
      case "success":
        className = "n-field-success";
        icon = correctSvg;
        break;
      case "warning":
        className = "n-field-warning";
        icon = warningSvg;
        break;
      default:
        break;
    }
    let markup = (
      <div className={`n-state-container ${className}`}>
        <div className="n-svg-container">
          {" "}
          <img src={icon} alt={`${state} badge`} />
        </div>
        {text}
      </div>
    );
    return markup;
  }
  function getBorderState() {
    let borderClass = "";
    if (state) {
      borderClass = `n-${state}-border`;
    }
    return borderClass;
  }

  function toggleEye() {
    if (!disabled) {
      setTextType(textType == "text" ? "password" : "text");
    }
  }

  return (
    <>
      <div className="jds-form-input">
        <div
          className={`j-input-label-container ${
            showPrefix || showSearchIcon ? "n-input-label-prefixed" : ""
          } ${labelFocus}`}
        >
          {label && (
            <label className="j-input-label">
              <>
                {label} {required ? " *" : ""}
              </>
            </label>
          )}
          {maxLength && (
            <label className="j-input-label j-input-maxLength">
              <>
                {length}/{maxLength}
              </>
            </label>
          )}
        </div>
        <div className="jds-input-grp">
          {showSearchIcon && (
            <span className="jds-search-icon">
              <SvgSearch className="search-icon" />
            </span>
          )}
          {/* <!-- Prefix --> */}
          {showPrefix && type !== "textarea" && (
            <InputPrefix prefix={prefix} onPrefixClick={onPrefixClick} />
          )}
          {/* <!-- Input --> */}
          <div
            className={`jds-input-container ${borderFocus} ${getBorderState()}`}
          >
            {type !== "textarea" && (
              <input
                ref={inputRef}
                className={`j-input ${generateClassesForInput()}`}
                onKeyUp={onKeyUp}
                onChange={onChange}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                onClick={onClick}
                onKeyPress={onKeyPress}
                value={value}
                {...generateAttributesForInput()}
                onInput={onInputChange}
                type={textType}
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
                onFocus={onFocus}
                onClick={onClick}
                onKeyPress={onKeyPress}
                className={`j-input input-text ${
                  type === "textarea" && "j-input-textarea"
                }`}
                {...generateAttributesForTextarea()}
                onInput={onInputChange}
                type={textType}
                value={value}
                {...restProps}
              ></textarea>
            )}
          </div>
          {/* <!-- Suffix --> */}
          {!showPasswordEye && type !== "textarea" && showSuffix && (
            <InputSuffix suffix={suffix} onSuffixClick={onSuffixClick} />
          )}
          {showPasswordEye && (
            <span
              className="jds-input-suffix jds-remove-left-border jds-suffix-position n-password-eye"
              onClick={toggleEye}
            >
              <img
                src={textType == "text" ? openEye : openEye}
                alt={`${state} badge`}
              />
            </span>
          )}
        </div>
        <div className="n-input-underinfo">
          {state !== "default" && generateInputStateMessage(stateText)}
          {helperText && <span className="n-helper-text">{helperText}</span>}
        </div>
      </div>
    </>
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
  id: `jds-input${JDSId()}`,
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
};

export default React.memo(Input);
