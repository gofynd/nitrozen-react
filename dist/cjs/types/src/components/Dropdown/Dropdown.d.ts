import React from "react";
import "./Dropdown.scss";
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
declare const Dropdown: {
  (props: DropdownProps): JSX.Element;
  defaultProps: {
    id: string;
    items: never[];
    disabled: boolean;
    label: string;
    multiple: boolean;
    placeholder: string;
    required: boolean;
    searchable: boolean;
    tooltip: null;
    addOption: boolean;
    enableSelectAll: boolean;
    helperText: string;
    className: string;
    validationState: string;
    validationLabel: string;
    prefixIcon: string;
  };
};
export default Dropdown;
