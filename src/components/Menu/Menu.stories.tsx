import React, { useEffect, useRef, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "../MenuItem";
import "./Menu.scss";
import Button from "../Button";
import { SvgIcAlarm } from "../../assets/svg-components";
import NitrozenId from "../../utils/uuids";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    id: { control: { type: "text" }, description: "Custom unique id" },
    className: { control: { type: "text" }, description: "Custom classname" },
    open: {
      control: "select",
      options: [true, false],
      description: "Control Menu visibility via input props",
    },
    mode: {
      control: "select",
      options: ["vertical", "horizontal", "aligned"],
      description: "Menu render direction",
    },
    position: {
      control: "select",
      options: ["top", "bottom"],
      description: "Menu render position",
    },
    inverted: {
      control: "select",
      options: [true, false],
      description:
        "Invert the two tone color scheme of the default menu icon element",
    },
    icon: {
      control: { type: "component" },
      description: "custom menu svg icon",
    },
    maxHeight: {
      control: { type: "number" },
      description: "Menu becomes scrollable after this height",
    },
    selectedIndex: {
      control: { type: "number" },
      description: "Highlight a specific index. Storybook Preview Only",
    },
    onChangeMenuItem: {
      action: "changed",
      description: "Function that returns the current value",
    },
    onClose: {
      action: "changed",
      description: "Function that executes when the menu closes",
    },
    onOpen: {
      action: "changed",
      description: "Function that executes when the menu opens",
    },
    anchorEl: {
      action: "changed",
      description:
        "The target element underneath which the menu should open from",
    },
    style: {
      action: "changed",
      description: "Custom css styling",
    },
    children: {
      control: { type: "object" },
      action: "changed",
      description: "Menu Item component",
    },
  },
} as ComponentMeta<typeof Menu>;

const menuItems = [
  {
    label: "Fruits for thought",
    heading: true,
    divider: true,
  },
  {
    label: "Apple",
    disabled: true,
    heading: false,
    divider: false,
  },
  {
    label: "Banana",
    heading: false,
    divider: false,
  },
  {
    label: "Pomegranet",
    heading: false,
    divider: true,
    selected: true,
  },
  {
    label: "Links",
    heading: true,
    divider: true,
  },
  {
    label: "Spacex.com",
    selected: false,
    linkConfig: { href: "https://www.spacex.com/", target: "_self" },
  },
  {
    label: "Nasa.com",
    selected: false,
    linkConfig: { href: "https://www.nasa.com/", target: "_blank" },
  },
  {
    label: "Tesla.com",
    selected: false,
    disabled: true,
    linkConfig: { href: "https://www.tesla.com/", target: "_blank" },
  },
];
const onChangeMenuItem = (value: any, index: number) => {
  console.log(
    "onChangeMenuItem = (value, index) => {}\n",
    "value:",
    value,
    "\n",
    "index:",
    index
  );
};
const onClose = () => {
  console.log("onClose = () => {}");
};
const onOpen = () => {
  console.log("onOpen = () => {}");
};

export const PrimaryMenu = (args: MenuProps) => (
  <div className="menu-story-container">
    <Menu {...args}>
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            disabled={item.disabled}
            divider={item.divider}
            heading={item.heading}
            selected={index === args.selectedIndex}
            linkConfig={item.linkConfig}
            index={index}
            key={NitrozenId()}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
    {delete args.icon}
    <Menu {...args}>
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            disabled={item.disabled}
            divider={item.divider}
            heading={item.heading}
            selected={index == args.selectedIndex}
            linkConfig={item.linkConfig}
            index={index}
            key={NitrozenId()}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  </div>
);

export const AnchoredMenu = (args: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(args.open || false);
  const [selected, setSelected] = useState(undefined);
  const [selectedIndex, setSelectedIndex] = useState(
    args.selectedIndex || null
  );

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (value: any, index: number) => {
    onChangeMenuItem(value, index);
    setSelected(value);
    setSelectedIndex(index);
    setIsOpen(false);
  };
  const _onOpen = () => {
    setIsOpen(true);
    onOpen();
  };
  const _onClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="menu-story-container">
      <div ref={ref}>
        <Button onClick={onClick} name="Menu">
          {selected || "Menu"}
        </Button>
        <Menu
          onClose={_onClose}
          onOpen={_onOpen}
          onChangeMenuItem={onSelect}
          anchorEl={ref}
          mode={"aligned"}
          open={isOpen}
        >
          {menuItems.map((item, index) => {
            return (
              <MenuItem
                disabled={item.disabled}
                divider={item.divider}
                heading={item.heading}
                selected={selectedIndex === index}
                linkConfig={item.linkConfig}
                index={index}
                key={NitrozenId()}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};

PrimaryMenu.args = {
  id: `n-menu-contaner-${NitrozenId()}`,
  className: `n-menu-container-${NitrozenId()}`,
  mode: "vertical",
  position: "bottom",
  inverted: false,
  icon: <SvgIcAlarm />,
  maxHeight: undefined,
  open: false,
  selectedIndex: 2,
  onChangeMenuItem: onChangeMenuItem,
  onClose: onClose,
  onOpen: onOpen,
  anchorEl: undefined,
  style: {},
  children: <></>,
};
