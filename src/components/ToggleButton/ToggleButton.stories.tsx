import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./ToggleButton";

export default {
  title: "Components/Button/ToggleButton",
  component: ToggleButton,
  argTypes: {
    disabled: {
      type: "boolean",
      description: "Makes the toggle button unclickable",
    },
    value: {
      type: "boolean",
      description: "Initial toggle state",
    },
    onToggle: {
      type: "function",
      description: "Captures the toggle button's click event",
    },
    size: {
      control: "select",
      defaultValue: "medium",
      options: ["large", "medium", "small"],
    },
    style: { control: "object" },
    className: { control: "text" },
    labelText: { control: "text" },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <div
    className="main-div"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ToggleButton {...args} />
  </div>
);
export const ToggleBtn = Template.bind({});
ToggleBtn.args = {
  labelText: "React",
  disabled: false,
  value: false,
  onToggle: () => {},
};

export const demo = () => {
  const sizes = ["small", "medium", "large"];

  return (
    <div className="main-div all-togglebtn-sections">
      {sizes.map((size) => (
        <div className="section" key={size}>
          <span>{size}</span>
          <ToggleButton labelText="Text" size={size} />
          <ToggleButton labelText="Text" size={size} value={true} />
          <ToggleButton labelText="Text" size={size} disabled={true} />
          <ToggleButton
            labelText="Text"
            size={size}
            disabled={true}
            value={true}
          />
        </div>
      ))}
    </div>
  );
};
