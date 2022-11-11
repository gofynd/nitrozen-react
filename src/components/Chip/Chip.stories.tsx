import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chip from "./Chip";
import {
  SvgLocalFireDepartment,
  SvgDelete,
  SvgColorLens,
} from "../../assets/svg-components";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    children: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Submit",
      description: "Sets the display value of the chip",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Submit" },
      },
      control: {
        type: "text",
      },
    },
    isRounded: {
      control: "boolean",
      description: "Makes the chip rounded",
    },
    fontWeight: {
      control: "select",
      options: [300, 400, 500, 600, 700, 800],
      description: "Custom font weight",
    },
    state: {
      control: { type: "select" },
      description: "Used to display a chip's state",
      defaultValue: "primary",
      options: ["primary", "secondary"],
    },
    deletable: {
      control: "boolean",
      default: "false",
      description: "Makes the chip deletable with a Cross icon",
    },
    disabled: {
      control: "boolean",
      description: "Makes the chip muted",
    },
    onDelete: {
      control: { type: "function", required: false },
      description:
        "Captures Deletable chip's delete event and sends an argument {event: object, chipProps: object}",
    },
    onIconClick: {
      control: { type: "function", required: false },
      description:
        "Captures Custom Icon's event and sends an argument {event: object, chipProps: object}",
    },
    onClick: {
      control: "function",
      description:
        "Captures the chip's body click event and sends an argument {event: object, chipProps: object}",
    },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div className="main-div space-between">
    <Chip {...args} />
  </div>
);

export const PrimaryChip = Template.bind({});
PrimaryChip.args = {
  children: "Primary Chip",
  state: "none",
  isRounded: false,
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  state: "secondary",
  children: "Secondary Chip",
  isRounded: false,
};

export const DeletableChip = Template.bind({});
DeletableChip.args = {
  deletable: true,
  children: "Delete Chip",
  onClick: () => {},
  onDelete: () => {},
  isRounded: false,
};

export const ChipsDemo = () => {
  return (
    <div className="main-div space-between">
      <div className="chip-demo-section">
        <Chip>Primary Chip</Chip>
        <Chip state="secondary">Secondary Chip</Chip>
        <Chip isRounded={true}>Rounded Chip</Chip>
        <Chip deletable={true}>Deletable Chip</Chip>
        <Chip disabled={true}>Disabled Chip</Chip>
        <Chip icon={SvgLocalFireDepartment} iconStyle={{ color: "red" }}>
          Chip with Custom Icon
        </Chip>
        <Chip deletable={true} icon={SvgDelete} state="secondary">
          Deletable Chip Custom Icon
        </Chip>
        <Chip
          icon={SvgColorLens}
          state="secondary"
          style={{ borderColor: "green", color: "green" }}
          iconStyle={{ color: "green" }}
        >
          Chip with Custom Styling
        </Chip>
      </div>
    </div>
  );
};
