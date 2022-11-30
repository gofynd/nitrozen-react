import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    value: { control: "text" },
    name: { control: "text" },
    checkboxValue: { control: "boolean" },
    id: { control: "text" },
    onChange: { action: "clicked" },
    style: { control: "object" },
    labelStyle: { control: "object" },
    className: { control: "text" },
    labelText: { control: "text" },
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
  value: "React",
  id: "React",
  onChange: () => {},
  checkboxValue: true,
  name: "basic",
};

export const Multiple_checkbox = (args: any) => {
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

export const checkboxVariant = () => {
  return (
    <div className="main-div space-between">
      <div className="nitrozen-badge-collection">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}
        >
          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Checkbox labelText="Text" value="random1" id="random1" />

            <Checkbox
              labelText="Text"
              value="random2"
              id="random2"
              checkboxValue={true}
            />
          </div>

          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Checkbox
              labelText="Text"
              value="randomValue1"
              id="randomValue1"
              disabled
            />

            <Checkbox
              labelText="Text"
              value="randomValue2"
              id="randomValue2"
              checkboxValue={true}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};
