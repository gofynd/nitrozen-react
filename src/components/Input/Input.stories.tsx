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
        "search",
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
    search: { control: { type: "boolean" } },
    showSearchIcon: { control: { type: "boolean" } },
    showTooltip: { control: { type: "boolean" } },
    tooltipText: { control: { type: "text" } },
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
  showTooltip: true,
  tooltipText: "This is a toolip",
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: "textarea",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
  showTooltip: true,
  tooltipText: "This is a toolip",
};

export const TextfieldValidation = () => {
  const MIN_CHAR = 4;
  const [inputValue, handleInputChange] = useState("");
  const [isValidInput, handleValidation] = useState(
    inputValue.length >= MIN_CHAR
  );

  return (
    <>
      <Input
        label={"*Required Input field with Validation"}
        value={inputValue}
        onChange={changeInput}
      />
      <div style={{ marginTop: "8px" }}>
        <Validation
          isValid={isValidInput}
          validLabel={"Criteria matched"}
          invalidLabel={`Minimum ${MIN_CHAR} charaters required`}
        />
      </div>
    </>
  );

  function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    handleInputChange(input);
    handleValidation(input.length >= MIN_CHAR);
  }
};
