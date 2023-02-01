import React, { useRef, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu, { MenuItemProps } from "./Menu";
import "./Menu.scss";
import Button from "../Button";
import {
  SvgDone,
  SvgContentCopy,
  SvgAdsClick,
  SvgFace,
  SvgFavorite,
  SvgCheckBox,
  SvgNature,
  SvgNotAccessible,
  SvgPanTool,
} from "../../assets/svg-components";
export const stories = {
  simple: [
    {
      label: "Apple",
      prefix: <SvgAdsClick />,
      disabled: true,
      suffix: <p>$50,000</p>,
      value: "apple",
      divider: true,
    },
    {
      heading: true,
      label: "Banana",
      value: "banana",
      suffix: <SvgContentCopy />,
    },
    {
      label: "Pineapple",
      prefix: <SvgFace />,
      value: "pineapple",
    },
    {
      label: "Guava",
      prefix: <SvgFavorite />,
      value: "guava",
    },
    {
      label: "Pomegranate",
      prefix: <SvgDone />,
      value: "apple",
    },
  ],
  complex: [],
  links: [
    {
      label: "Apple",
      prefix: <SvgFace />,
      disabled: true,
      suffix: <p>$50,000</p>,
      value: "apple",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
    {
      label: "Banana",
      divider: false,
      prefix: <SvgNature />,
      value: "apple",
      linkConfig: { href: "/" },
      suffix: <SvgNotAccessible />,
    },
    {
      label: "Pineapple",
      prefix: <SvgCheckBox />,
      suffix: <p>$50,000</p>,
      value: "pineapple",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
    {
      label: "Guava",
      prefix: <SvgCheckBox />,
      value: "Guava",
    },
    {
      label: "Pomegranate",
      prefix: <SvgPanTool />,
      value: "pomegranate",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
  ],
  noIcons: [
    {
      label: "Apple",
      divider: false,
      disabled: true,
      suffix: <p>$50,000</p>,
      value: "apple",
    },
    {
      label: "Banana",
      value: "apple",
    },
    {
      label: "Pineapple",
      suffix: <p>$50,000</p>,
      value: "pineapple",
    },
    {
      label: "Guava",
      value: "Guava",
    },
    {
      label: "Pomegranate",
      value: "pomegranate",
    },
  ],
  onlyLabels: [
    {
      label: "Apple",
      disabled: true,
      value: "apple",
      divider: true,
    },
    {
      label: "Banana",
      value: "apple",
      divider: true,
    },
    {
      label: "Pineapple",
      value: "pineapple",
      divider: true,
    },
    {
      label: "Guava",
      value: "Guava",
      divider: true,
    },
    {
      label: "Pomegranate",
      value: "pomegranate",
    },
  ],
};
export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    items: {
      control: "select",
      options: ["simple", "with links", "no icons", "only labels"],
      mapping: {
        simple: stories.simple,
        "with links": stories.links,
        "no icons": stories.noIcons,
        "only labels": stories.onlyLabels,
      },
      defaultValue: "simple",
    },
    open: { control: "select", options: [true, false] },
    maxHeight: { control: { type: "number" } },
    selectedIndex: { control: { type: "number" } },
    onSelect: {
      action: "changed",
      description: "Function that returns the current selected index",
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
  },
} as ComponentMeta<typeof Menu>;

export const PrimaryMenu: ComponentStory<typeof Menu> = (args) => (
  <div className="menu-story-container">
    <Menu {...args}></Menu>
  </div>
);

export const AnchoredMenu = (args: MenuItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (index: number, value: string) => {
    console.log(index, value);
  };
  const onOpen = () => {};
  const onClose = () => {
    setIsOpen(false);
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
          Menu
        </Button>
      </div>
      <Menu
        items={stories.simple}
        selectedIndex={2}
        onClose={onClose}
        onOpen={onOpen}
        onSelect={onSelect}
        anchorEl={ref}
        open={isOpen}
        maxHeight={250}
      ></Menu>
    </div>
  );
};
