import React, { useState, useRef, useEffect } from "react";
import "./Input.scss";
import InputPrefix from "./InputPrefix";
import InputSuffix from "./InputSuffix";
import NitrozenId from "../../utils/uuids";
import Tooltip from "../Tooltip";
import { SvgHelpOutline, SvgSearch } from "../../assets/svg-components/Action";
export interface InputProps {
  autoComplete?: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: Boolean;
  required?: Boolean;
  value?: Number | string;
  search?: Boolean;
  showSearchIcon?: Boolean;
  showTooltip?: Boolean;
  tooltipText?: string;
  tooltipIcon?: React.ReactNode;
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
    search,
    showSearchIcon,
    showTooltip,
    tooltipText,
    tooltipIcon,
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
    ...restProps
  } = props;
  const [loaderShow, setLoaderShow] = useState(false);
  const [value, setValue] = useState(propValue || "");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  useEffect(() => {
    function autoFocus() {
      if (props.autofocus) {
        inputRef?.current?.focus();
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
    if (type === "search") {
      setLoaderShow(true);
    }
    setValue(event.target.value);
    onChange?.(event);
  }
  function generateClassesForInput() {
    let classes = "";
    classes = `${classes} ${
      showSearchIcon ? "nitrozen-search-input-padding" : ""
    }`;
    classes = `${classes} ${showPrefix ? "nitrozen-remove-left-border" : ""}`;
    classes = `${classes} ${showSuffix ? "nitrozen-remove-right-border" : ""}`;
    classes = `${classes} ${className || ""}`;
    return classes;
  }
  function generateAttributesForInput() {
    const attrs: any = {};
    min && (attrs.min = min);
    max && (attrs.max = max);
    typeof maxLength !== "undefined" && (attrs.maxLength = maxLength);
    type && (attrs.type = type);
    placeholder && (attrs.placeholder = placeholder);
    autoComplete && (attrs.autoComplete = autoComplete);
    id && (attrs.id = id);
    disabled && (attrs.disabled = disabled);
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
  return (
    <>
      <div className="nitrozen-form-input">
        <div className="n-input-label-container">
          {label && (
            <label className="n-input-label">
              <>
                {label} {required ? " *" : ""}
                {showTooltip && (
                  <span className="nitrozen-tooltip-icon">
                    {tooltipText && (
                      <Tooltip
                        tooltipContent={tooltipText}
                        icon={
                          tooltipIcon || (
                            <SvgHelpOutline style={{ fontSize: "14px" }} />
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
          {maxLength && (
            <label className="n-input-label n-input-maxLength">
              <>
                {length}/{maxLength}
              </>
            </label>
          )}
        </div>

        {loaderShow && search && (
          <span className="nitrozen-loader-div">
            <img src="./../../assets/loader.gif" />
          </span>
        )}

        <div className="nitrozen-input-grp">
          {showSearchIcon && (
            <span className="nitrozen-search-icon">
              <SvgSearch className="search-icon" />
            </span>
          )}
          {/* <!-- Prefix --> */}
          {showPrefix && <InputPrefix prefix={prefix} />}
          {/* <!-- Input --> */}
          {type !== "textarea" && (
            <input
              ref={inputRef}
              className={`n-input input-text ${generateClassesForInput()}`}
              onKeyUp={onKeyUp}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
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
              onFocus={onFocus}
              onClick={onClick}
              onKeyPress={onKeyPress}
              className={`n-input input-text ${
                type === "textarea" && "n-input-textarea"
              }`}
              {...generateAttributesForTextarea()}
              onInput={onInputChange}
              {...restProps}
            ></textarea>
          )}
          {/* <!-- Suffix --> */}
          {showSuffix && <InputSuffix suffix={suffix} />}
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
  search: false,
  showSearchIcon: false,
  showTooltip: false,
  tooltipText: "",
  id: `nitrozen-input${NitrozenId()}`,
  showPrefix: false,
  showSuffix: false,
  autofocus: false,
  onKeyUp: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
};

export default React.memo(Input);
