import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<{
  (props: import("./Dropdown").DropdownProps): JSX.Element;
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
  };
}>;
export default _default;
export declare const SingleSelect: ComponentStory<{
  (props: import("./Dropdown").DropdownProps): JSX.Element;
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
  };
}>;
export declare const MultiSelect: ComponentStory<{
  (props: import("./Dropdown").DropdownProps): JSX.Element;
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
  };
}>;
export declare const Search: () => JSX.Element;
