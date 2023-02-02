import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEventHandler,
} from "react";
import classNames from "classnames";
import "./SearchBox.scss";
import { SvgIcSearch, SvgIcCloseRemove } from "../../assets/svg-components";

export interface SearchBoxProps {
  className?: string;
  disabled?: boolean;
  items?: string[];
  listItemClicked?: Function;
  onBlur?: Function;
  onChange?: Function;
  onFocus?: Function;
  placeholder?: string;
  showClearAll?: boolean;
  showItemsAtStart?: boolean;
  style?: React.CSSProperties;
}

const SearchBox = (props: SearchBoxProps) => {
  const {
    className = "",
    disabled,
    items = [],
    listItemClicked,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    showClearAll,
    showItemsAtStart,
    style,
    ...restProps
  } = props;

  const [inputValue, updateInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const resultWrapperRef = useRef<HTMLUListElement>(null);
  const resultItemWrapperRef = useRef<HTMLLIElement[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (
      inputValue === "" &&
      showItemsAtStart &&
      wrapperRef.current?.classList.contains("n-searchbox-focussed")
    ) {
      setFilteredItems(items);
    } else {
      setFilteredItems(getFilteredList(items, inputValue));
    }
  }, [inputValue, showItemsAtStart, wrapperRef.current]);

  useEffect(() => {
    if (
      activeItemIndex !== null &&
      resultItemWrapperRef.current &&
      wrapperRef.current
    ) {
      const item = resultItemWrapperRef.current[activeItemIndex];
      item.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    }
  }, [activeItemIndex, resultItemWrapperRef, wrapperRef.current]);

  const cName = classNames(
    "n-searchbox",
    { [className]: className },
    { "n-searchbox-disabled": disabled }
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    updateInputValue(e.target.value);
    onChange?.(e.target.value);
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    setTimeout(() => {
      console.log(event);
      onBlur?.(event);
      wrapperRef.current?.classList.remove("n-searchbox-focussed");
      setFilteredItems([]);
    }, 10);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (activeItemIndex === null) {
        wrapperRef.current?.classList.remove("n-searchbox-focussed");
        setFilteredItems([]);
      } else {
        listItemClicked?.(filteredItems[activeItemIndex]);
        updateInputValue(filteredItems[activeItemIndex]);
        listItemClicked?.(filteredItems[activeItemIndex]);
      }
    } else if (event.key === "Tab") {
      wrapperRef.current?.classList.remove("n-searchbox-focussed");
      setFilteredItems([]);
    } else if (event.key === "ArrowDown") {
      if (activeItemIndex === null) {
        setActiveItemIndex(0);
      } else {
        setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
      }
    } else if (event.key === "ArrowUp") {
      if (activeItemIndex === null || activeItemIndex === 0) {
        setActiveItemIndex(filteredItems.length - 1);
      } else {
        setActiveItemIndex(activeItemIndex - 1);
      }
    }
  }
  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    // console.log(911);
    if (inputValue === "" && showItemsAtStart) {
      setFilteredItems(items);
    }
    wrapperRef.current?.classList.add("n-searchbox-focussed");
    onFocus?.(event);
  }

  function handleListItemClick(index: number) {
    return function (event: MouseEvent) {
      updateInputValue(filteredItems[index]);
      listItemClicked?.(filteredItems[index]);
      wrapperRef.current?.classList.remove("n-searchbox-focussed");
    } as MouseEventHandler<HTMLLIElement> | (() => void);
  }

  function handleClearInput() {
    updateInputValue("");
    inputRef.current?.focus();
    onChange?.("");
  }

  return (
    <div className="n-searchbox-wrapper" {...restProps}>
      <div style={style ?? {}} className={cName} ref={wrapperRef}>
        <span className="n-pre-input-icon ">
          <SvgIcSearch className="n-search-svg" size={24} />
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="n-pre-input n-suf-input"
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
      {filteredItems?.length > 0 && (
        <ul className="n-searchbox-result-wrapper" ref={resultWrapperRef}>
          {filteredItems.map((item, index) => {
            return (
              <li
                key={index}
                data-testid={`test-${item}`}
                className={classNames("n-searchbox-result-item", {
                  "n-searchbox-result-item-active": activeItemIndex === index,
                })}
                ref={(el: HTMLLIElement) =>
                  (resultItemWrapperRef.current[index] = el)
                }
                onClick={handleListItemClick(index)}
              >
                <span className="n-searchbox-result-item-icon">
                  {" "}
                  <SvgIcSearch className="n-search-svg" size={19} />
                </span>
                <span className="n-searchbox-result-item-text">{item}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

function getFilteredList(items: string[] = [], entry: string = "") {
  if (entry === "") return [];
  return items
    ? items.filter(
        (item) =>
          item.toLowerCase() !== entry.toLowerCase() &&
          item.toLowerCase().includes(entry.toLowerCase())
      )
    : [];
}

SearchBox.defaultProps = {};

export default SearchBox;
