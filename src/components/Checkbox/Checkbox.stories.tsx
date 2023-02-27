import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";
import * as SvgArray from "../../assets/svg-components";

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    value: { control: "text" },
    name: { control: "text" },
    state: {
      control: "select",
      description: "Validation state",
      options: ["success", "warning", "error"],
    },
    stateMessage: { control: "text" },
    checkboxValue: { control: "boolean" },
    id: { control: "text" },
    onChange: { action: "clicked" },
    onIconClick: { type: "function" },
    style: { control: "object" },
    labelStyle: { control: "object" },
    className: { control: "text" },
    labelText: { control: "text" },
    showIcon: { control: "boolean" },
    icon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
    isIndeterminate: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div className="main-div space-between">
    <Checkbox {...args} />
  </div>
);

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {
  labelText: "React",
  value: "React0",
  id: "React0",
  onChange: () => {},
  onIconClick: () => {
    console.log("124");
  },
  checkboxValue: true,
  name: "basic",
  stateMessage: "Your Validation message!",
};

export const Basic_checkbox = (args: any) => {
  const [CheckArray, setCheckArray] = useState<string[]>(["React"]);
  return (
    <div className="main-div space-between">
      <Checkbox
        labelText="React"
        value="React"
        id="React"
        onChange={setCheckArray}
        checkArray={CheckArray}
        checkboxValue="React"
        name="basic"
        {...args}
      />
      <Checkbox
        labelText="Angular"
        value="Angular"
        id="Angular"
        checkboxValue="Angular"
        checkArray={CheckArray}
        onChange={setCheckArray}
        name="basic"
        {...args}
      />
      <Checkbox
        labelText="Vue"
        value="Vue"
        id="Vue"
        checkboxValue="Vue"
        checkArray={CheckArray}
        disabled
        onChange={() => {}}
        {...args}
      />
    </div>
  );
};

export const Multiple_checkbox = (args: any) => {
  const [CheckArray2, setCheckArray2] = useState<string[]>(["Vue1"]);
  return (
    <div className="main-div space-between">
      <Checkbox
        labelText="React"
        value="React1"
        id="React1"
        onChange={setCheckArray2}
        checkArray={CheckArray2}
        showIcon={true}
        icon={SvgArray.SvgIc4K}
        state="success"
        stateMessage="Success"
        checkboxValue="React"
        name="basic1"
        {...args}
      />
      <Checkbox
        labelText="Angular"
        value="Angular1"
        id="Angular1"
        checkboxValue="Angular1"
        checkArray={CheckArray2}
        showIcon={true}
        icon={SvgArray.SvgIc4K}
        state="warning"
        stateMessage="Warning"
        onChange={setCheckArray2}
        name="basic"
        {...args}
      />
      <Checkbox
        labelText="Vue"
        value="Vue1"
        id="Vue1"
        checkboxValue="Vue1"
        checkArray={CheckArray2}
        showIcon={true}
        icon={SvgArray.SvgIc4K}
        state="error"
        stateMessage="Error"
        disabled
        onChange={() => {}}
        {...args}
      />
    </div>
  );
};
