import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Validation").ValidationProps): JSX.Element;
    defaultProps: {
      isValid: boolean;
      validLabel: string;
      invalidLabel: string;
      isHidden: boolean;
    };
  }>
>;
export default _default;
export declare const ValidationMessage: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Validation").ValidationProps): JSX.Element;
    defaultProps: {
      isValid: boolean;
      validLabel: string;
      invalidLabel: string;
      isHidden: boolean;
    };
  }>
>;
export declare const ValidationDemo: () => JSX.Element;
