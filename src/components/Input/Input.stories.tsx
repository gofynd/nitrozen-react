import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import * as SvgArray from "../../assets/svg-components";
import { SvgIcSave } from "../../assets/svg-components";

export default {
  title: "Components/Input/Textfields",
  component: Input,
  argTypes: {
    autoComplete: { control: { type: "text" } },
    type: {
      control: "select",
      options: [
        "email",
        "month",
        "number",
        "password",
        "tel",
        "text",
        "textarea",
        "week",
        "date",
        "datetime-local",
        "month",
      ],
    },
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    required: { control: { type: "boolean" } },
    value: { control: { type: "text" } },
    showSearchIcon: { control: { type: "boolean" } },
    id: { control: { type: "text" } },
    showPrefix: { control: { type: "boolean" } },
    showSuffix: { control: { type: "boolean" } },
    autofocus: { control: { type: "boolean" } },
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    stateText: { control: { type: "text" } },
    maxLength: { control: { type: "number" } },
    tooltipText: { control: { type: "text" } },
    showTooltip: { control: { type: "boolean" } },
    onKeyUp: { action: "keyup" },
    onKeyPress: { action: "keypressed" },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
    onFocus: { action: "focused" },
    onClick: { action: "clicked" },
    onPrefixClick: { action: "clicked" },
    onSuffixClick: { action: "clicked" },
    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
    },
    suffix: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable",
      options: SvgArray,
    },
    prefix: {
      description:
        "An element to be placed on the right, ideally an icon. This is clickable",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div className="main-div">
    {" "}
    <Input {...args} data-testid="input-test-id" />
  </div>
);

export const Textfield = Template.bind({});
Textfield.args = {
  type: "text",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
  helperText:
    "It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter, and 1 special character.",
  suffix: <SvgIcSave />,
  prefix: <SvgIcSave />,
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: "textarea",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
};
