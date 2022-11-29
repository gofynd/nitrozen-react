import React from "react";
import "./Autocomplete.scss";
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
declare const Autocomplete: {
  (props: AutocompleteProps): JSX.Element;
  defaultProps: {
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    listItemClicked: () => void;
    showSearchIcon: boolean;
  };
};
export default Autocomplete;
