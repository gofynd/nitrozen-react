import React, { useState, useRef, useEffect } from "react";
import "./Input.scss";
import InputPrefix from "./InputPrefix";
import InputSuffix from "./InputSuffix";
import NitrozenId from "../../utils/uuids";
import Tooltip from "../Tooltip";
import {
  SvgHelp,
  SvgHelpOutline,
  SvgSearch,
} from "../../assets/svg-components/Action";
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
  const [loaderShow, setLoaderShow] = useState(false);
  const [value, setValue] = useState(props?.value || "");
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
    setValue(props?.value || "");
  }, [props.value]);

  function onInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    if (props.type === "search") {
      setLoaderShow(true);
    }
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  }
  function generateClassesForInput() {
    let classes = "";
    classes = `${classes} ${
      props.showSearchIcon ? "nitrozen-search-input-padding" : ""
    }`;
    classes = `${classes} ${
      props.showPrefix ? "nitrozen-remove-left-border" : ""
    }`;
    classes = `${classes} ${
      props.showSuffix ? "nitrozen-remove-right-border" : ""
    }`;
    classes = `${classes} ${props.className ? props.className : ""}`;
    return classes;
  }
  function generateAttributesForInput() {
    let attrs: any = {};
    props.min && (attrs.min = props.min);
    props.max && (attrs.max = props.max);
    typeof props.maxLength !== "undefined" &&
      (attrs.maxLength = props.maxLength);
    props.type && (attrs.type = props.type);
    props.placeholder && (attrs.placeholder = props.placeholder);
    props.autoComplete && (attrs.autoComplete = props.autoComplete);
    props.id && (attrs.id = props.id);
    props.disabled && (attrs.disabled = props.disabled);
    props.style && (attrs.style = props.style);
    return attrs;
  }
  function generateAttributesForTextarea() {
    let attrs: any = {};
    typeof props.maxLength !== "undefined" &&
      (attrs.maxLength = props.maxLength);
    props.disabled && (attrs.disabled = props.disabled);
    props.placeholder && (attrs.placeholder = props.placeholder);
    props.style && (attrs.style = props.style);
    return attrs;
  }
  return (
    <>
      <div className="nitrozen-form-input">
        <div className="n-input-label-container">
          {props.label && (
            <label className="n-input-label">
              <>
                {props.label} {props.required ? " *" : ""}
                {props.showTooltip && (
                  <span className="nitrozen-tooltip-icon">
                    {props.tooltipText && (
                      <Tooltip
                        tooltipContent={props.tooltipText}
                        icon={
                          props.tooltipIcon ? (
                            props.tooltipIcon
                          ) : (
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
          {props.maxLength && (
            <label className="n-input-label n-input-maxLength">
              <>
                {length}/{props.maxLength}
              </>
            </label>
          )}
        </div>

        {loaderShow && props.search && (
          <span className="nitrozen-loader-div">
            <img src="./../../assets/loader.gif" />
          </span>
        )}

        <div className="nitrozen-input-grp">
          {props.showSearchIcon && (
            <span className="nitrozen-search-icon">
              <SvgSearch className="search-icon" />
            </span>
          )}
          {/* <!-- Prefix --> */}
          {props.showPrefix && <InputPrefix prefix={props.prefix} />}
          {/* <!-- Input --> */}
          {props.type != "textarea" && (
            <input
              ref={inputRef}
              className={`n-input input-text ${generateClassesForInput()}`}
              onKeyUp={props.onKeyUp}
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              onClick={props.onClick}
              onKeyPress={props.onKeyPress}
              value={value}
              {...generateAttributesForInput()}
              onInput={onInputChange}
            />
          )}

          {/* <!-- Textarea --> */}
          {props.type === "textarea" && (
            <textarea
              ref={inputRef}
              onKeyUp={props.onKeyUp}
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              onClick={props.onClick}
              onKeyPress={props.onKeyPress}
              className={`n-input input-text ${
                props.type == "textarea" && "n-input-textarea"
              }`}
              {...generateAttributesForTextarea()}
              onInput={onInputChange}
            ></textarea>
          )}
          {/* <!-- Suffix --> */}
          {props.showSuffix && <InputSuffix suffix={props.suffix} />}
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
