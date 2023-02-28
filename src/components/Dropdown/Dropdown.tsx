import React, { useState, useRef, useEffect } from "react";
import NitrozenId from "../../utils/uuids";
import Tooltip from "../Tooltip";
import Checkbox from "../Checkbox";
import Validation from "../Validation";
import "./Dropdown.scss";
import {
  SvgIcAdd,
  SvgIcInfo,
  SvgIcChevronDown,
} from "../../assets/svg-components";

interface ItemProps {
  logo?: string;
  text?: string;
  value: string | number | boolean | Object;
  isGroupLabel?: Boolean;
  sub_text?: string;
}
export interface DropdownProps {
  id?: string;
  items?: ItemProps[];
  disabled?: boolean;
  label?: string;
  multiple?: Boolean;
  placeholder?: string;
  required?: Boolean;
  searchable?: Boolean;
  tooltip?: string;
  value?: string | number | boolean | any[];
  addOption?: Boolean;
  addOptionHandler?: Function;
  enableSelectAll?: Boolean;
  onChange?: Function;
  onSearchInputChange?: Function;
  onScroll?: Function;
  className?: string;
  helperText?: string;
  validationState?: string;
  validationLabel?: string;
  prefixIcon?: React.ReactNode;
}
const ALL_OPTION = { text: "Select All", value: "all" };

const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<any>(null);
  const nitrozenSelectOptionRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const [viewport, setViewport] = useState<{
    height: number | null;
    width: number | null;
  }>({
    height: null,
    width: null,
  });
  const [dropUp, setDropUp] = useState<Boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedText, setSelectedText] = useState<string>();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [allOptionsSelected, setAllOptionsSelected] = useState<Boolean>();
  const [allSelected, setAllSelected] = useState<any>();
  const [selected, setSelected] = useState<any>();
  const [focusBorder, setFocusBorder] = useState("");

  const [enableSelectAll, setEnableSelectAll] = useState(
    props.enableSelectAll || false
  );
  useEffect(() => {
    calculateViewport();
    if (typeof document !== "undefined") {
      document.addEventListener("click", documentClick);
      document.addEventListener("keydown", handleTABKey);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", calculateViewport);
      window.addEventListener("scroll", calculateViewport);
    }
    if (!props.multiple) {
      setEnableSelectAll(false);
      if (props.value) {
        const selected = props.items?.find(
          (i: ItemProps) => i.value === props.value
        );
        setSearchInput(selected?.text ? selected.text : "");
        setSelectedItems([props.value]);
      }
    } else {
      if (props.value) {
        setSelectedItems(
          Array.isArray(props.value) ? [...props.value] : [props.value]
        );
        setSearchInput("");
        setAllOptions(true);
      }
    }
  }, []);
  useEffect(() => {
    props.multiple && props.onChange && props.onChange(selectedItems);
    setSelectedText(generateSelectedText());
  }, [selectedItems, selected]);
  useEffect(() => {
    calculateDropUpDown();
  }, [viewport]);
  function documentClick(event: Event) {
    const select = dropdownRef.current;
    if (select && !select.contains(event.target)) {
      setShowOptions(false);
    }
  }
  function handleTABKey(event: any) {
    if (event.keyCode === 9 && showOptions) {
      event.preventDefault();
      event.stopPropagation();
      setShowOptions(false);
    }
  }
  function toggle() {
    if (props.disabled) return;
    setShowOptions(!showOptions);
    if (showOptions) {
      calculateDropUpDown();
    }
  }
  function generateSelectedText() {
    if (!props.multiple) {
      if (props.value) {
        if (props.items?.length) {
          // eslint-disable-next-line eqeqeq
          const currentSelected = props.items.find(
            (i) => i.value == props.value
          );
          setSelected(currentSelected);
          setSearchInput(selected?.text ? selected.text : "");
        }
      }
      if (selected?.text) {
        return selected.text;
      } else if (props.label) {
        return props.placeholder || `Choose ${props.label}`;
      } else if (props.placeholder) {
        return props.placeholder;
      }
      return "";
    } else {
      if (allOptionsSelected) {
        return `All ${selectedItems.length} ${props.label} selected`;
      }
      let tmp: any[] = [];
      const selectedTmp: any = {};
      if (props.value) {
        setSearchInput("");
      }
      if (selectedItems.length) {
        selectedItems.forEach((ele: any) => {
          if (!selectedTmp[ele]) {
            selectedTmp[ele] = true;
          }
        });
        props.items?.forEach((ele: any) => {
          if (selectedTmp[ele.value]) {
            tmp.push(ele.text);
          }
        });
        tmp = [...new Set(tmp)];
        return `${tmp.join(", ")}`;
      } else if (props.placeholder) {
        return props.placeholder;
      } else if (props.label) {
        return `Choose ${props.label}`;
      }
      return "";
    }
  }
  function searchInputPlaceholder() {
    if (props.enableSelectAll && selectedItems.length) {
      if (selectedItems.length === getItems(props?.items).length) {
        return `All ${props.label}(s) selected`;
      }
      return `${selectedItems.length} ${props.label}(s) selected`;
    }
    return props.placeholder || `Search ${props.label}`;
  }
  function calculateDropUpDown() {
    const dropdown = dropdownRef?.current;
    if (!dropdown) return;
    const dropdownRect = dropdown.getBoundingClientRect();
    const bottomSpace =
      (viewport.height ? viewport.height : 0) -
      dropdownRect.top -
      dropdown.offsetHeight;
    const dropdownOptionsHeight = dropdown.children[1].offsetHeight || 0;
    if (dropdownOptionsHeight < bottomSpace) {
      setDropUp(false);
    } else {
      setDropUp(true);
    }
  }
  function searchInputChange(e: React.KeyboardEvent | any) {
    setShowOptions(true);
    setSearchInput(e.target.value);
    const obj = {
      id: props.id,
      text: e.target.value,
    };
    if (!searchInput) {
      setAllOptions();
    }
    props.onSearchInputChange?.(obj);
    calculateViewport();
  }
  function setAllOptions(mounted = false) {
    const items = props.items ? [...props.items] : [];
    if (props.multiple && enableSelectAll) {
      const allSelectedOptions =
        selectedItems.length === getItems(items).length && enableSelectAll;
      setAllOptionsSelected(allSelectedOptions);
      setAllSelected(allSelectedOptions);
    }
  }
  function getItems(items: ItemProps[] | any) {
    return items
      .filter(function (item: ItemProps) {
        return !item.isGroupLabel;
      })
      .map((item: ItemProps) => item.value);
  }
  function calculateViewport() {
    const vw = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    setViewport({ width: vw, height: vh });
  }
  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const elem = nitrozenSelectOptionRef?.current;
    props.onScroll?.(elem);
  }
  function selectItem(
    index: string | number,
    item: ItemProps,
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    if (item.isGroupLabel) {
      return;
    }

    if (!props.multiple) {
      setSelected(item);
      if (item.text) {
        setSearchInput(item.text);
      }
      props.onChange?.(item.value);
    } else {
      if (index === "all") {
        if (!allSelected) {
          setSelectedItems(getItems(props.items));
        } else {
          setSelectedItems([]);
        }
        setAllSelected(!allSelected);
        event.stopPropagation();
      } else {
        if (selectedItems.includes(item.value)) {
          setSelectedItems((selectedItems: Array<string | number>) => {
            const data = selectedItems.filter(
              (value: string | number) => value !== item.value
            );
            return data;
          });
        } else {
          setSelectedItems([...selectedItems, item.value]);
        }
        event.stopPropagation();
        setAllSelected(allOptionsSelected);
      }
    }
  }
  function setCheckedItem() {
    props.onChange?.(selectedItems);
    setSelectedText(generateSelectedText());
  }
  function addOption() {
    const value = searchInput;
    setSearchInput("");
    props.addOptionHandler?.(value);
    calculateViewport();
  }
  const Icon = props.prefixIcon as React.ElementType;
  return (
    <div
      id={props?.id}
      className={`n-dropdown-container ${props.className} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      {props.label && (
        <label className="n-dropdown-label">
          {` ${props.label} ${props.required ? " *" : ""} `}
          {props.tooltip && (
            <Tooltip
              className="n-dropdown-tooltip"
              data-testid="icon-component"
              tooltipContent={props.tooltip}
              position="top"
              icon={<SvgIcInfo style={{ fontSize: "14px" }} />}
            />
          )}
        </label>
      )}
      <div className="n-select-wrapper" onClick={toggle}>
        <div
          className={`n-select ${showOptions && "n-dropdown-open"} ${
            props.disabled ? "cursor-disabled" : ""
          }`}
          ref={dropdownRef}
        >
          <div
            className={`n-select__trigger ${
              props.disabled ? "cursor-disabled" : ""
            } ${
              props.validationState
                ? `n-${props.validationState}-border`
                : focusBorder
            }`}
          >
            {props.prefixIcon ? (
              <div className="n-dropdown-prefix-icon-wrapper">
                <Icon className="n-dropdown-prefix" />
              </div>
            ) : null}
            <div className="n-dropdown-input-arrow-wrapper">
              {props.searchable && !props.disabled ? (
                <span className="n-searchable-input-container">
                  <input
                    data-testid="dropdown-search"
                    type="search"
                    value={searchInput}
                    onChange={searchInputChange}
                    placeholder={searchInputPlaceholder()}
                    onClick={() => setFocusBorder("n-focused-border")}
                    onBlur={() => setFocusBorder("")}
                    className={"n-dropdown-search"}
                  />
                </span>
              ) : props.disabled ? (
                <span>Disabled</span>
              ) : (
                <span>{selectedText}</span>
              )}

              <div className="n-dropdown-arrow">
                <SvgIcChevronDown style={{ width: "20px", height: "20px" }} />
              </div>
            </div>
          </div>
          <div
            className={`n-options ${dropUp && "n-dropup"}`}
            ref={nitrozenSelectOptionRef}
            data-testid="dropdown-scroll"
            onScroll={handleScroll}
          >
            {enableSelectAll && !searchInput && (
              <span
                className="n-option ripple"
                onClick={(e) => {
                  selectItem("all", ALL_OPTION, e);
                }}
              >
                <div className="n-option-container">
                  <Checkbox
                    checkboxValue={allSelected}
                    value={allSelected}
                    onChange={setCheckedItem}
                  >
                    <span
                      className={`n-option-image ${
                        allSelected && "n-dropdown-multicheckbox-selected"
                      }`}
                    >
                      All
                    </span>
                  </Checkbox>
                </div>
              </span>
            )}
            {enableSelectAll && !searchInput && (
              <div className="horizantal-divider" />
            )}
            {props.items &&
              props.items.length > 0 &&
              props?.items?.map((item: ItemProps, index: number) => (
                <span
                  key={index}
                  data-value={item.value}
                  className={`n-option ripple ${
                    item === selected && "selected"
                  } ${item?.isGroupLabel && "n-option-group-label"}`}
                  onClick={(event) => selectItem(index, item, event)}
                >
                  <div className="n-option-container">
                    {props.multiple && !item?.isGroupLabel ? (
                      <Checkbox
                        checkboxValue={item.value}
                        checkArray={[...selectedItems]}
                        onChange={setCheckedItem}
                        value={item.value}
                      >
                        <span
                          className={`n-option-image ${
                            selectedItems.includes(item.value) &&
                            "n-dropdown-multicheckbox-selected"
                          }`}
                        >
                          {item.logo && (
                            <img
                              className="n-option-logo"
                              src={item.logo}
                              alt="logo"
                            />
                          )}{" "}
                          {item.text}
                        </span>
                      </Checkbox>
                    ) : (
                      <span
                        className={`n-option-image ${
                          props.items?.find(
                            (i: ItemProps) => i?.isGroupLabel
                          ) && !item?.isGroupLabel
                            ? "n-option-child-label"
                            : ""
                        }`}
                      >
                        {item.logo && (
                          <img
                            className="n-option-logo"
                            src={item.logo}
                            alt="logo"
                          />
                        )}
                        <div className="n-option-wrapper">
                          <span>{item.text}</span>
                          <span className="n-option-subtext">
                            {item.sub_text}
                          </span>
                        </div>
                      </span>
                    )}
                  </div>
                </span>
              ))}
            {props.searchable && props.items && props.items.length === 0 && (
              <span className="n-option">
                {props.addOption && (
                  <div className="n-option-container">
                    No {props.label} Found
                  </div>
                )}
                {props.addOption && searchInput?.length > 0 && (
                  <div className="n-option-container">
                    <div
                      data-testid="add-option"
                      className="n-dropdown-empty"
                      onClick={addOption}
                    >
                      <SvgIcAdd />
                      <p>Add {searchInput}</p>
                    </div>
                  </div>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
      {props.validationState && (
        <Validation
          className="n-dropdown-validation"
          isHidden={props.validationState ? false : true}
          label={props.validationLabel}
          validationState={props.validationState}
        />
      )}
      {props.helperText && (
        <div className="n-input-underinfo n-helper-text n-dropdown-helper">
          {props.helperText}
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  id: `nitrozen-dropdown-${NitrozenId()}`,
  items: [],
  disabled: false,
  label: "",
  multiple: false,
  placeholder: "",
  required: false,
  searchable: false,
  tooltip: null,
  addOption: false,
  enableSelectAll: false,
  helperText: "",
  className: "",
  validationState: "",
  validationLabel: "",
  prefixIcon: "",
};

export default Dropdown;
