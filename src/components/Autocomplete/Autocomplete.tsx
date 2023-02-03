import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEventHandler,
} from "react";
import classNames from "classnames";
import "./Autocomplete.scss";
import {
  SvgIcSearch,
  SvgIcCloseRemove,
  SvgIcStatusLoading,
} from "../../assets/svg-components";
import debounce from "../../utils/debounce";

export interface AutocompleteProps {
  className?: string;
  disabled?: boolean;
  debounceDuration?: number;
  items?: any[];
  onListItemClick?: Function;
  onBlur?: Function;
  onChange?: Function;
  onFocus?: Function;
  loader?: React.ReactNode;
  placeholder?: string;
  renderItem?: (item: any, index: number) => JSX.Element;
  resultStringKeyName?: string;
  showClearAll?: boolean;
  showLoader?: boolean;
  showItems?: boolean;
  showSearchIcon?: boolean;
  style?: React.CSSProperties;
}

const Autocomplete = (props: AutocompleteProps) => {
  const {
    className = "",
    disabled,
    debounceDuration,
    items = [],
    onListItemClick,
    onBlur,
    onChange,
    onFocus,
    loader,
    placeholder,
    renderItem,
    resultStringKeyName,
    showClearAll,
    showLoader,
    showItems,
    showSearchIcon,
    style,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const resultWrapperRef = useRef<HTMLUListElement>(null);
  const resultItemWrapperRef = useRef<HTMLLIElement[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      activeItemIndex !== null &&
      resultItemWrapperRef.current &&
      wrapperRef.current
    ) {
      let item = resultItemWrapperRef.current[activeItemIndex];

      item?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    }
  }, [activeItemIndex, resultItemWrapperRef, wrapperRef.current]);

  useEffect(() => {
    setActiveItemIndex(null);
    setLoading(false);
  }, [items]);

  useEffect(() => {
    if (!showLoader) {
      setLoading(false);
    }
  }, [showLoader]);

  const cName = classNames(
    "n-autocomplete",
    { [className]: className },
    { "n-autocomplete-disabled": disabled }
  );

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  const debouncedHandleChange = useCallback(
    debounce(handleOnChange, debounceDuration),
    []
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    if (showLoader) {
      setLoading(true);
    }
    debouncedHandleChange(e);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (activeItemIndex === null) {
        wrapperRef.current?.classList.remove("n-autocomplete-focussed");
      } else {
        onListItemClick?.(activeItemIndex);
        const item = items[activeItemIndex];
        if (typeof item === "object" && resultStringKeyName) {
          setInputValue(items[activeItemIndex][resultStringKeyName]);
        } else {
          setInputValue(items[activeItemIndex]);
        }
        inputRef.current?.blur();
        onListItemClick?.(activeItemIndex);
      }
    } else if (event.key === "Tab") {
      inputRef.current?.blur();
      wrapperRef.current?.classList.remove("n-autocomplete-focussed");
    } else if (event.key === "ArrowDown") {
      if (activeItemIndex === null) {
        setActiveItemIndex(0);
      } else {
        setActiveItemIndex((activeItemIndex + 1) % items.length);
      }
    } else if (event.key === "ArrowUp") {
      if (activeItemIndex === null || activeItemIndex === 0) {
        setActiveItemIndex(items.length - 1);
      } else {
        setActiveItemIndex(activeItemIndex - 1);
      }
    }
  }
  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    wrapperRef.current?.classList.add("n-autocomplete-focussed");
    setIsInputFocus(true);
    onFocus?.(event);
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    setTimeout(() => {
      setIsInputFocus(false);
      onBlur?.(event);
      wrapperRef.current?.classList.remove("n-autocomplete-focussed");
    }, 10);
  }
  function handleListItemClick(index: number) {
    return function () {
      const item = items[index];
      if (typeof item === "object" && resultStringKeyName) {
        setInputValue(items[index][resultStringKeyName]);
      } else {
        setInputValue(items[index]);
      }
      onListItemClick?.(index);
      wrapperRef.current?.classList.remove("n-autocomplete-focussed");
    } as MouseEventHandler<HTMLLIElement>;
  }

  function handleClearInput() {
    setInputValue("");
    inputRef.current?.focus();
    onChange?.("");
  }

  return (
    <div className="n-autocomplete-wrapper" {...restProps}>
      <div style={style ?? {}} className={cName} ref={wrapperRef}>
        {(loading || showSearchIcon) && (
          <span className="n-pre-input-icon ">
            {loading ? (
              loader ? (
                { loader }
              ) : (
                <SvgIcStatusLoading className="n-search-loading" size={24} />
              )
            ) : (
              <SvgIcSearch className="n-search-svg" size={24} />
            )}
          </span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={classNames([
            { "n-pre-input": showSearchIcon || loading },
            "n-suf-input",
          ])}
          onChange={handleChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          ref={inputRef}
          disabled={disabled}
        />
        <span className="n-suf-input-icon ">
          {showClearAll && inputValue && (
            <div className="n-suf-icon-back" onClick={handleClearInput}>
              <SvgIcCloseRemove size={24} />
            </div>
          )}
        </span>
      </div>
      {(isInputFocus || showItems) && items?.length > 0 && (
        <ul className="n-autocomplete-result-wrapper" ref={resultWrapperRef}>
          {items.map((item, index) => {
            let element;
            if (renderItem) {
              element = renderItem(item, index);
            }
            return element ? (
              React.cloneElement(element, {
                key: index,
                "data-testid": `test-item-${index}`,
                className: classNames("n-autocomplete-result-item", {
                  "n-autocomplete-result-item-active":
                    activeItemIndex === index,
                }),
                ref: (el: HTMLLIElement) =>
                  (resultItemWrapperRef.current[index] = el),
                onClick: handleListItemClick(index),
              })
            ) : (
              <li
                key={index}
                data-testid={`test-${item}`}
                className={classNames("n-autocomplete-result-item", {
                  "n-autocomplete-result-item-active":
                    activeItemIndex === index,
                })}
                ref={(el: HTMLLIElement) =>
                  (resultItemWrapperRef.current[index] = el)
                }
                onClick={handleListItemClick(index)}
              >
                <span className="n-autocomplete-result-item-icon">
                  {" "}
                  <SvgIcSearch className="n-search-svg" size={19} />
                </span>
                <span className="n-autocomplete-result-item-text">{item}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Autocomplete.defaultProps = {
  debounceDuration: 300,
  showSearchIcon: true,
  showClearAll: true,
};

export default Autocomplete;
