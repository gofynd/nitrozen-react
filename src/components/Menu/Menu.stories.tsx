import React, { useCallback, useRef, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "../MenuItem";
import "./Menu.scss";
import Button from "../Button";
import { SvgAddAlarm } from "../../assets/svg-components";
import { log } from "../../../docs/83.d53405cc.iframe.bundle";
import NitrozenId from "../../utils/uuids";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    id: { control: { type: "text" }, description: "unique id" },
    className: { control: { type: "text" }, description: "unique id" },
    open: {
      control: "select",
      options: [true, false],
      description: "open or close the menu",
    },
    inverted: {
      control: "select",
      options: [true, false],
      description:
        "invenrt two tonw color scheme of the default menu icon element",
    },
    position: {
      control: "select",
      options: ["top", "bottom"],
      description: "menu render position",
    },
    mode: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "menu render direction",
    },
    maxHeight: {
      control: { type: "number" },
      description: "menu becomes scrollable after this height",
    },
    icon: { control: { type: "number" }, description: "custom menu icon" },
    selectedIndex: {
      control: { type: "number" },
      description: "highlight a specific index",
    },
    onChangeMenuItem: {
      action: "changed",
      description: "Function that returns the current value",
    },
    onOpen: {
      action: "changed",
      description: "Function that executed when the menu opens",
    },
    onClose: {
      action: "changed",
      description: "Function that executed when the menu closes",
    },
    anchorEl: {
      action: "changed",
      description:
        "The target element underneath which the menu should open from",
    },
    style: {
      action: "changed",
      description: "custom css styling",
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
            selected={2 === index}
            linkConfig={item.linkConfig}
            key={index}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  </div>
);

export const AnchoredMenu = (args: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [selectedIndex, setSelectedIndex] = useState(2);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (value: any, index: number) => {
    onChangeMenuItem(value, index);
    setSelected(value);
    setSelectedIndex(index);
  };
  const _onOpen = () => {
    onOpen();
  };
  const _onClose = () => {
    onClose();
    // setIsOpen(false);
  };

  return (
    <div className="menu-story-container">
      <div
        id="menu-div"
        style={{
          width: "fit-content",
          height: "fit-content",
        }}
        ref={ref}
      >
        <Button onClick={onClick} name="Menu">
          {selected || "Menu"}
        </Button>
      </div>
      <Menu
        onClose={_onClose}
        onOpen={_onOpen}
        onChangeMenuItem={onSelect}
        anchorEl={ref}
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
              key={index}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

PrimaryMenu.args = {
  className: `menu-${NitrozenId()}`,
  id: "",
  open: false,
  mode: "vertical",
  icon: <SvgAddAlarm />,
  inverted: true,
  position: "bottom",
  selectedIndex: 2,
  onChangeMenuItem: onChangeMenuItem,
  onClose: onOpen,
  onOpen: onClose,
  anchorEl: undefined,
  style: { undefined },
};
