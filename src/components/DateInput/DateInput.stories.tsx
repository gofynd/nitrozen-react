import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInput, { DateInputProps } from "./DateInput";

export default {
  title: "Components/Input/DateInput",
  component: DateInput,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    validationState: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Describes the state of validity",
    },
    validationLabel: {
      type: "string",
      description: "The description of validation message",
    },
    validationStyle: { control: "object" },
    validationClassName: { control: "text" },
    helperText: { control: "text", defaultValue: "" },
    useDatePicker: {
      control: { type: "select" },
      options: [true, false],
      defaultValue: false,
    },
    dateValue: {
      control: "text",
      description: "Pre value if any, format : mm/dd/yyyy",
    },
    dateValidation: {
      control: "function",
      description: "Custom function sent as props for date validation",
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: any) => (
  <div className="main-div space-between">
    <DateInput {...args} />
  </div>
);

export const DateInputPlayground = Template.bind({});

DateInputPlayground.args = {
  label: "Birthday",
  required: true,
  useDatePicker: false,
  helperText: "Enter your birth date",
};
