import React, { useRef, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu, { MenuItemProps } from "./Menu";
import "./Menu.scss";
import Button from "../Button";

const stories = {
  simple: [
    {
      label: "Apple",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      disabled: true,
      suffix: <p>$50,000</p>,
      value: "apple",
    },
    {
      label: "Banana",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "banana",
      suffix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Pineapple",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "pineapple",
    },
    {
      label: "Guava",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "guava",
    },
    {
      label: "Pomegranate",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "apple",
    },
  ],
  complex: [],
  links: [
    {
      label: "Apple",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      disabled: true,
      suffix: <p>$50,000</p>,
      value: "apple",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
    {
      label: "Banana",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "apple",
      linkConfig: { href: "/" },
      suffix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Pineapple",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      suffix: <p>$50,000</p>,
      value: "pineapple",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
    {
      label: "Guava",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "Guava",
    },
    {
      label: "Pomegranate",
      prefix: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 4A5.6 5.6 0 0012 5.46 5.6 5.6 0 008.4 4 5.36 5.36 0 003 9.44c0 3.37 2.63 6.43 7.16 10.56l.49.45a2 2 0 002.7 0l.49-.44C18.37 15.86 21 12.8 21 9.44A5.36 5.36 0 0015.6 4z"
            fill="currentColor"
          />
        </svg>
      ),
      value: "pomegranate",
      linkConfig: { href: "/?path=/docs/introduction-changelog--changelog" },
    },
  ],
  noIcons: [
    {
      label: "Apple",
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
  const onOpen = () => {
    // console.log("opened");
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="menu-story-container" style={{ height: "500px" }}>
      <div
        id="menu-div"
        style={{
          width: "fit-content",
        }}
        ref={ref}
      >
        <Button onClick={onClick} name="Menu">
          Menu
        </Button>
      </div>

      <Button name="Settings">Settings</Button>
      <Button name="Login">Login</Button>
      <Menu
        items={stories.simple}
        selectedIndex={2}
        onClose={onClose}
        onOpen={onOpen}
        onSelect={onSelect}
        anchorEl={ref}
        open={isOpen}
        maxHeight={150}
      ></Menu>
    </div>
  );
};
