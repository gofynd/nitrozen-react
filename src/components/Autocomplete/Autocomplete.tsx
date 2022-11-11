import React, { useState } from "react";
import "./Autocomplete.scss";
import Input from "../Input/Input";

export interface AutocompleteProps {
  placeholder?: string;
  items?: string[];
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  listItemClicked?: Function;
  showSearchIcon?: boolean;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Autocomplete = (props: AutocompleteProps) => {
  const {
    placeholder,
    items,
    onChange,
    onBlur,
    onFocus,
    showSearchIcon,
    label,
    listItemClicked,
    className,
    style,
    ...restProps
  } = props;
  const emptyStringTypeArray: string[] = [];
  const [list, filterList] = useState(emptyStringTypeArray);
  const [inputValue, updateInputValue] = useState("");

  return (
    <div
      style={style ?? {}}
      className={`nitrozen-autocomplete ${className ?? ""}`}
      {...restProps}
    >
      <Input
        showSearchIcon={showSearchIcon}
        label={label}
        onChange={updateList}
        onBlur={inputBlurred}
        onFocus={inputFocussed}
        value={inputValue}
        placeholder={placeholder}
      />
      {list?.length > 0 && (
        <div className="nitrozen-autocomplete-items">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                data-testid={`test-${item}`}
                onMouseDown={() => autoComplete(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  function updateList(e: React.KeyboardEvent | any) {
    const entry = e.target.value;
    const filteredList: string[] = getFilteredList(entry.toLowerCase());
    updateInputValue(entry);
    filterList(filteredList);
    onChange?.(e);
  }

  function getFilteredList(entry: string = "") {
    if (entry === "") return [];
    return items
      ? items.filter(
          (item) =>
            item.toLowerCase() !== entry && item.toLowerCase().includes(entry)
        )
      : [];
  }

  function autoComplete(item: string) {
    updateInputValue(item);
    filterList([]);
    listItemClicked?.(item);
  }

  function inputFocussed(e: React.KeyboardEvent | any) {
    const filteredList: string[] = getFilteredList(inputValue.toLowerCase());
    filterList(filteredList);
    onFocus?.(e);
  }

  function inputBlurred(e: React.KeyboardEvent | any) {
    filterList([]);
    onBlur?.(e);
  }
};

Autocomplete.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  listItemClicked: () => {},
  showSearchIcon: true,
};

export default Autocomplete;
