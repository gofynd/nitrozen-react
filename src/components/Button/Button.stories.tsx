import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import * as SvgArray from "../../assets/svg-components";
export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    children: {
      name: "label",
      type: { name: "string", required: false },
      description: "This property sets the display value of the button",
    },
    theme: {
      control: "select",
      description: "This property sets the theme of the button",
      options: ["primary", "secondary", "tertiary"],
    },
    as: {
      control: "select",
      description:
        "Whether the root element should be a `<div>` or `<span>` instead of a `<button>`",
      options: ["div", "span"],
    },
    size: {
      control: "select",
      description: "This property sets the size of the button",
      options: ["small", "medium", "large"],
    },
    rounded: {
      control: { type: "boolean" },
      description: "This property sets the border radius of the button",
    },
    href: {
      type: { name: "string", required: false },
      description:
        "This property converts a button into an anchor tag. Useful for redirection",
    },
    disabled: {
      control: { type: "boolean" },
      description: "This property enables / disables the button.",
    },
    focused: {
      control: { type: "boolean" },
      description: "This property sets focus on the button.",
    },
    state: {
      control: "select",
      description: "Changes the button to custom state",
      options: ["positive", "destructive", "default"],
    },
    showProgress: {
      control: { type: "boolean" },
      description: "This property adds a loader on the button.",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button takes full width or not",
    },
    id: {
      description: "This property sets a unique identifier for the button.",
    },
    name: {
      description: "This property sets name for the button.",
    },
    icon: {
      description: "Displays icon on the left.",
      options: SvgArray,
    },
    iconRight: {
      description: "Displays icon on the right with.",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="main-div space-between">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const AllThemes = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small">
        Button
      </Button>
      <Button theme="primary" size="medium">
        Button
      </Button>
      <Button theme="primary" size="large">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small">
        Button
      </Button>
      <Button theme="secondary" size="medium">
        Button
      </Button>
      <Button theme="secondary" size="large">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small">
        Button
      </Button>
      <Button theme="tertiary" size="medium">
        Button
      </Button>
      <Button theme="tertiary" size="large">
        Button
      </Button>
    </div>
  </div>
);

export const AllDisbledThemes = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small" disabled>
        Button
      </Button>
      <Button theme="primary" size="medium" disabled>
        Button
      </Button>
      <Button theme="primary" size="large" disabled>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small" disabled>
        Button
      </Button>
      <Button theme="secondary" size="medium" disabled>
        Button
      </Button>
      <Button theme="secondary" size="large" disabled>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small" disabled>
        Button
      </Button>
      <Button theme="tertiary" size="medium" disabled>
        Button
      </Button>
      <Button theme="tertiary" size="large" disabled>
        Button
      </Button>
    </div>
  </div>
);

export const IconButton = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button
        theme="primary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="primary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="primary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
    </div>
    <div className="sb-display-grid">
      <Button
        theme="secondary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="secondary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="secondary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
    </div>
    <div className="sb-display-grid">
      <Button
        theme="tertiary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="tertiary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
      <Button
        theme="tertiary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
      ></Button>
    </div>
  </div>
);

export const ButtonWithIconLeft = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="primary" size="medium" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="primary" size="large" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="secondary" size="medium" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="secondary" size="large" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="tertiary" size="medium" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="tertiary" size="large" icon={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
  </div>
);

export const ButtonWithIconRight = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="primary" size="medium" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="primary" size="large" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button
        theme="secondary"
        size="medium"
        iconRight={SvgArray.SvgIcAlarmOff}
      >
        Button
      </Button>
      <Button theme="secondary" size="large" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="tertiary" size="medium" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
      <Button theme="tertiary" size="large" iconRight={SvgArray.SvgIcAlarmOff}>
        Button
      </Button>
    </div>
  </div>
);

export const ButtonWithBothIcon = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button
        theme="primary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="primary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="primary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button
        theme="secondary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="secondary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="secondary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button
        theme="tertiary"
        size="small"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="tertiary"
        size="medium"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
      <Button
        theme="tertiary"
        size="large"
        icon={SvgArray.SvgIcAlarmOff}
        iconRight={SvgArray.SvgIcChevronRight}
      >
        Button
      </Button>
    </div>
  </div>
);

export const AllThemesWithPositiveState = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small" state="positive">
        Button
      </Button>
      <Button theme="primary" size="medium" state="positive">
        Button
      </Button>
      <Button theme="primary" size="large" state="positive">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small" state="positive">
        Button
      </Button>
      <Button theme="secondary" size="medium" state="positive">
        Button
      </Button>
      <Button theme="secondary" size="large" state="positive">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small" state="positive">
        Button
      </Button>
      <Button theme="tertiary" size="medium" state="positive">
        Button
      </Button>
      <Button theme="tertiary" size="large" state="positive">
        Button
      </Button>
    </div>
  </div>
);

export const AllThemesWithDestructiveState = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button theme="primary" size="small" state="destructive">
        Button
      </Button>
      <Button theme="primary" size="medium" state="destructive">
        Button
      </Button>
      <Button theme="primary" size="large" state="destructive">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="secondary" size="small" state="destructive">
        Button
      </Button>
      <Button theme="secondary" size="medium" state="destructive">
        Button
      </Button>
      <Button theme="secondary" size="large" state="destructive">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button theme="tertiary" size="small" state="destructive">
        Button
      </Button>
      <Button theme="tertiary" size="medium" state="destructive">
        Button
      </Button>
      <Button theme="tertiary" size="large" state="destructive">
        Button
      </Button>
    </div>
  </div>
);
