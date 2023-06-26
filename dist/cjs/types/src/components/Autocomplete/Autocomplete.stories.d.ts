import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<{
  (props: import("./Autocomplete").AutocompleteProps): React.JSX.Element;
  defaultProps: {
    debounceDuration: number;
    showSearchIcon: boolean;
    showClearAll: boolean;
  };
}>;
export default _default;
export declare const AutocompleteInput: ComponentStory<{
  (props: import("./Autocomplete").AutocompleteProps): React.JSX.Element;
  defaultProps: {
    debounceDuration: number;
    showSearchIcon: boolean;
    showClearAll: boolean;
  };
}>;
export declare const AutocompleteWithObjectItem: () => React.JSX.Element;
