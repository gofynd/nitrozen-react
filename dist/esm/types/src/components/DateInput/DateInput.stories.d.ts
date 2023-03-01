import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DateInputProps } from "./DateInput";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: DateInputProps): JSX.Element;
    defaulProps: {
      useDatePicker: boolean;
      required: boolean;
      tooltipText: string;
      helperText: string;
      validationStyle: {};
      validationClassName: string;
      isRange: boolean;
      rangeConfig: {};
      onConfirmRange: () => void;
      defaultValidation: boolean;
    };
  }>
>;
export default _default;
export declare const DateInputPlayground: ComponentStory<
  React.MemoExoticComponent<{
    (props: DateInputProps): JSX.Element;
    defaulProps: {
      useDatePicker: boolean;
      required: boolean;
      tooltipText: string;
      helperText: string;
      validationStyle: {};
      validationClassName: string;
      isRange: boolean;
      rangeConfig: {};
      onConfirmRange: () => void;
      defaultValidation: boolean;
    };
  }>
>;
export declare const DateRangeSample: (args: DateInputProps) => JSX.Element;
export declare const DateValidationSample: (
  args: DateInputProps
) => JSX.Element;
