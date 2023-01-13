import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import Validation from "../Validation";
export default {
  title: "Components/Input/Textfields",
  component: Input,
  argTypes: {
    autoComplete: { control: { type: "text" } },
    type: {
      control: "select",
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "submit",
        "tel",
        "text",
        "textarea",
        "time",
        "url",
        "week",
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
      options: ["deafult", "error", "success", "warning"],
    },
    stateText: { control: { type: "text" } },
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
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: "textarea",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
};
