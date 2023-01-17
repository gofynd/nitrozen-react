import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import * as SvgArray from "../../assets/svg-components";

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
    state: {
      control: "select",
      description: "Validation state",
      options: ["success", "warning", "error"],
    },
    stateMessage: { control: "text" },
    onIconClick: { type: "function" },
    showIcon: { control: "boolean" },
    icon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
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

export const iconDemo = () => {
  const sizes = ["small", "medium", "large"];

  return (
    <div className="main-div all-togglebtn-sections">
      {sizes.map((size) => (
        <div className="section" key={size}>
          <ToggleButton
            showIcon={true}
            icon={SvgArray.SvgAutoMode}
            labelText="Text"
            size={size}
          />
          <ToggleButton
            showIcon={true}
            icon={SvgArray.SvgAutoMode}
            labelText="Text"
            size={size}
            value={true}
          />
          <ToggleButton
            showIcon={true}
            icon={SvgArray.SvgAutoMode}
            labelText="Text"
            size={size}
            disabled={true}
          />
          <ToggleButton
            showIcon={true}
            icon={SvgArray.SvgAutoMode}
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
