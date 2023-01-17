import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Input/Input";
import Validation from "./Validation";

export default {
  title: "Components/Validation",
  component: Validation,
  argTypes: {
    validationState: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Describes the state of validity",
      defaultValue: "success",
    },
    label: {
      type: "string",
      description: "The description",
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
  validationState: "success",
  label: "All fields are valid",
  isHidden: true,
  style: {},
  className: "",
};

// DEMO
export const ValidationDemo = () => {
  const [inputValue, handleInputChange] = useState("");

  return (
    <>
      <Input
        label={"*Required Input field with Validation"}
        value={inputValue}
        onChange={changeInput}
      />
      <div style={{ marginTop: "8px" }}>
        <Validation
          validationState="error"
          label={"Criteria not matched"}
          isHidden={false}
        />
      </div>
    </>
  );

  function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    handleInputChange(input);
  }
};
