import React, { useState } from "react";
import classNames from "classnames";
import "./SearchBox.scss";
import {
  SvgIcSearch,
  SvgIcBack,
  SvgIcCloseRemove,
} from "../../assets/svg-components";

export interface SearchBoxProps {
  className?: string;
  items?: string[];
  listItemClicked?: Function;
  onChange?: Function;
  placeholder?: string;
  showSearchIcon?: boolean;
  style?: React.CSSProperties;
}

const SearchBox = (props: SearchBoxProps) => {
  const {
    className = "",
    items = [],
    placeholder,
    onChange,
    style,
    ...restProps
  } = props;

  const cName = classNames(
    "n-searchbox",
    { [className]: className },
    { "n-searchbox-active": true },
    { "n-searchbox-pressed": true },
    { "n-searchbox-focussed": true },
    { "n-searchbox-disabled": true }
  );

  return (
    <div className="n-searchbox-wrapper" {...restProps}>
      <div style={style ?? {}} className={cName}>
        <span className="n-pre-input-icon ">
          <SvgIcSearch className="n-search-svg" size={24} />
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="n-pre-input n-suf-input"
        />
        <span className="n-suf-input-icon "></span>
      </div>
      <div className="n-searchbox-result-wrapper">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              data-testid={`test-${item}`}
              // onMouseDown={() => autoComplete(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

SearchBox.defaultProps = {};

export default SearchBox;
