import React, { ReactSVGElement, RefObject, useRef, useState } from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";
import MenuItem from "../MenuItem";
import Button from "../Button";
import NitrozenId from "../../utils/uuids";
import { SvgIcMoreHorizontal } from "../../assets/svg-components";
export const menuItems = [
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
const onClose = jest.fn();
const onOpen = jest.fn();
const onChangeMenuItem = jest.fn();
const menuAttr = `n-menu-container-${NitrozenId()}`;
const _args: any = {
  id: menuAttr,
  className: menuAttr,
  mode: "vertical",
  position: "bottom",
  inverted: false,
  maxHeight: undefined,
  open: false,
  selectedIndex: 2,
  onChangeMenuItem: onChangeMenuItem,
  onOpen: onOpen,
  onClose: onClose,
  anchorEl: undefined,
  style: {},
};
describe("Primary Menu", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render default menu with all items", () => {
    const { getByTestId } = render(primaryMenu(_args));

    const menuToggle = getByTestId("n-menu-block-toggle");
    const menuBlock = getByTestId("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-close");
    expect(onClose).toBeCalled();

    userEvent.click(menuToggle);
    expect(menuBlock.className).toContain("n-menu-block-open");
    expect(onOpen).toBeCalled();

    userEvent.click(menuToggle);
    expect(menuBlock.className).toContain("n-menu-block-close");

    menuItems.map((item, index) => {
      const menuItem = getByTestId(`n-menu-block-item-${index}`);
      if (item.disabled)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");
      if (item.divider)
        expect(menuItem.className).toContain("n-menu-block-item-divider");
      if (item.heading)
        expect(menuItem.className).toContain("n-menu-block-item-heading");
      if (item.selected)
        expect(menuItem.className).toContain("n-menu-block-item-selected");
      expect(menuItem.innerHTML).toContain(item.label);
    });
    const menuItem2a = getByTestId(`n-menu-block-item-${2}-link`);
    userEvent.click(menuItem2a);
    expect(onChangeMenuItem).toBeCalled();
    expect(onClose).toBeCalled();
  });
  test("should contain correct mode, iversion and position", () => {
    const args = { ..._args };
    args.mode = "horizontal";
    args.position = "top";
    args.inverted = true;
    args.icon = (<SvgIcMoreHorizontal />) as ReactSVGElement;
    args.maxHeight = 200;
    const { getByTestId } = render(primaryMenu(args));
    const menuToggle = getByTestId("n-menu-block-toggle");
    expect(menuToggle.className).toContain("n-menu-block-toggle-horizontal");
    expect(menuToggle.className).toContain("n-menu-block-toggle-inverted");
    const menuBlock = getByTestId("n-menu-block");
    expect(menuBlock.style.height).toBe(`${args.maxHeight}px`);
    expect(menuBlock.style.left).toBe(`100%`);
    expect(menuBlock.style.bottom).toBe(`100%`);
  });
});

describe("Achored Menu", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render buttoned menu with all items", async () => {
    const args = { ..._args };
    let isOpen = true;
    let selectedIndex = undefined;
    let selectedValue = undefined;
    const ref = React.createRef() as RefObject<HTMLDivElement>;
    args.anchorEl = ref;
    const onClick = () => {
      isOpen = !isOpen;
    };

    const _onChangeMenuItem = (value: number, index: string) => {
      onChangeMenuItem();
      selectedIndex = index;
      selectedValue = value;
    };

    const _onClose = () => {
      onClose();
      isOpen = false;
    };
    args.onClose = _onClose;
    args.onOpen = onOpen;
    args.onChangeMenuItem = _onChangeMenuItem;
    args.mode = "aligned";
    args.maxHeight = 150;

    const { getByTestId } = render(
      <div className="menu-story-container" style={{ height: "500px" }}>
        <div
          id="menu-div"
          style={{
            width: "fit-content",
          }}
          ref={ref}
        >
          <Button onClick={onClick} name="Menu" data-testid="button">
            {selectedValue || "Menu"}
          </Button>
          {primaryMenu(args)}
        </div>
      </div>
    );
    const menuBlock = getByTestId("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-close");
    const button = getByTestId("button");
    userEvent.click(button);

    setTimeout(function () {
      expect(onOpen).toBeCalled();
      expect(menuBlock.className).toContain("n-menu-block-open");
    }, 500);
    expect(isOpen).toBeTruthy();
    const menuItem2a = getByTestId(`n-menu-block-item-${2}-link`);
    userEvent.click(menuItem2a);
    expect(onChangeMenuItem).toBeCalled();
    expect(onClose).toBeCalled();
    expect(isOpen).toBeTruthy();
    expect(selectedIndex).toBe(2);
    expect(selectedValue).toBe(menuItems[2].label);
    const menuItem2 = getByTestId(`n-menu-block-item-${2}`);
    setTimeout(function () {
      expect(menuItem2.className).toContain("n-menu-block-item-selected");
    }, 500);

    const menuItem3a = getByTestId(`n-menu-block-item-${3}-link`);
    const menuItem3 = getByTestId(`n-menu-block-item-${3}`);
    userEvent.click(menuItem3a);
    expect(menuItem2.className).not.toContain("n-menu-block-item-selected");
    expect(menuItem3.className).toContain("n-menu-block-item-selected");
    expect(menuBlock.style.height).toBe(`${args.maxHeight}px`);
    expect(menuBlock.style.left).toBe(`0%`);
    expect(menuBlock.style.top).toBe(`100%`);
  });
});

const primaryMenu = (args: any) => {
  return (
    <Menu {...args}>
      {menuItems.map((item: any, index: any) => {
        return (
          <MenuItem
            disabled={item.disabled}
            divider={item.divider}
            heading={item.heading}
            selected={item.selected}
            linkConfig={item.linkConfig}
            index={index}
            key={NitrozenId()}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
