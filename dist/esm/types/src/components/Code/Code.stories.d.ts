import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CodeProps } from "./Code";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: CodeProps): JSX.Element;
    defaulProps: {
      fields: number;
      label: string;
      codeId: string;
      default: string;
      hideValidation: boolean;
      validationLabel: string;
      validationClassName: string;
      validationStyle: {};
      helperText: string;
      tooltip: null;
      required: boolean;
    };
  }>
>;
export default _default;
export declare const CodePlayground: ComponentStory<
  React.MemoExoticComponent<{
    (props: CodeProps): JSX.Element;
    defaulProps: {
      fields: number;
      label: string;
      codeId: string;
      default: string;
      hideValidation: boolean;
      validationLabel: string;
      validationClassName: string;
      validationStyle: {};
      helperText: string;
      tooltip: null;
      required: boolean;
    };
  }>
>;
export declare const OtpSample: (args: CodeProps) => JSX.Element;
