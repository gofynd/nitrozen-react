import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Input/Input";
import Validation from "./Validation";

export default {
  title: "Components/Validation",
  component: Validation,
  argTypes: {
    isValid: {
      type: { name: "boolean", required: true },
      description: "Describes the state of validity",
      defaultValue: true,
    },
    validLabel: {
      type: "string",
      description: "Shown when the validitiy is True",
    },
    invalidLabel: {
      type: "string",
      description: "Shown when the validitiy is False",
    },
    isHidden: {
      type: "boolean",
      description: "Toggles component's visibility",
      defaultValue: false,
    },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Validation>;

const Template: ComponentStory<typeof Validation> = (args) => (
  <Validation {...args} />
);

export const ValidationMessage = Template.bind({});
ValidationMessage.args = {
  isValid: true,
  validLabel: "Approval message",
  invalidLabel: "Error message",
  isHidden: false,
};

// DEMO
export const ValidationDemo = () => {
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
