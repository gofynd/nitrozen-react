import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chip from "./Chip";
import {
  SvgIcFire,
  SvgIcCloseRemove,
  SvgIcColourPalette,
} from "../../assets/svg-components";
import * as SvgArray from "../../assets/svg-components";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    children: {
      name: "Value",
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
      defaultValue: true,
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
    maxWidth: {
      control: { type: "text", required: false },
      description: "Custom chip width",
      defaultValue: "220px",
    },
    label: {
      control: "text",
      description: "Sets the display label of the chip",
    },
    icon: {
      description:
        "An element to be placed on the right, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
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
  isRounded: true,
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  state: "secondary",
  children: "Secondary Chip",
  isRounded: true,
};

export const DeletableChip = Template.bind({});
DeletableChip.args = {
  deletable: true,
  children: "Delete Chip",
  onClick: () => {},
  onDelete: () => {},
  isRounded: true,
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
        <Chip icon={SvgIcFire} iconStyle={{ color: "red" }}>
          Chip with Custom Icon
        </Chip>
        <Chip deletable={true} icon={SvgIcCloseRemove} state="secondary">
          Deletable Chip Custom Icon
        </Chip>
        <Chip
          icon={SvgIcColourPalette}
          state="secondary"
          style={{ borderColor: "green", color: "green" }}
          iconStyle={{ color: "green" }}
        >
          Chip with Custom Styling
        </Chip>
        <Chip maxWidth={"100px"}> Chip with Custom Width </Chip>
        <Chip label="Filter1"> Chip With Label </Chip>
      </div>
    </div>
  );
};
