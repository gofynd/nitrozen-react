import React from "react";
import "./Autocomplete.scss";
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
declare const Autocomplete: {
  (props: AutocompleteProps): JSX.Element;
  defaultProps: {
    debounceDuration: number;
    showSearchIcon: boolean;
    showClearAll: boolean;
  };
};
export default Autocomplete;
