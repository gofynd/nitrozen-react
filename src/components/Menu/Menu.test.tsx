import React, { RefObject, useRef, useState } from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";
import Button from "../Button";
import { stories } from "./Menu.stories";

const onSelectHandler = jest.fn();

describe("Primary Menu", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render menu with all simple menu items", () => {
    const selectedIndex = 3;
    const { getByTestId } = render(
      <Menu
        items={stories.simple}
        onSelect={onSelectHandler}
        selectedIndex={selectedIndex}
        maxHeight={150}
      />
    );
    const seletced = getByTestId(`n-menu-block-item-${selectedIndex}`);
    expect(seletced.className).toContain("n-menu-block-item-selected");

    const menuBlock = getByTestId("n-menu-block");
    // testing rendered classes
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
    stories.simple.map((item, index) => {
      const menuItem = getByTestId(`n-menu-block-item-${index}`);
      const menuItemPrefix = getByTestId(
        `n-menu-block-item-element-prefix-${index}`
      );
      const menuItemLabel = getByTestId(
        `n-menu-block-item-element-label-${index}`
      );
      const menuItemSuffix = getByTestId(
        `n-menu-block-item-element-suffix-${index}`
      );

      expect(menuItem.className).toContain("n-menu-block-item");
      if (item?.disabled)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");
      if (item?.divider)
        expect(menuItem.className).toContain(`n-menu-block-item-disabled`);

      // testing callbacks
      if (!item?.disabled) {
        userEvent.click(menuItem);
        expect(onSelectHandler).toBeCalledWith(index, item.value);
      }

      // testing rendered data
      expect(menuItemPrefix).toBeInTheDocument();
      expect(menuItemSuffix).toBeInTheDocument();
      expect(menuItemLabel.textContent).toBe(item.label);
    });
  });
  test("should render menu with all noIcon menu items", () => {
    const selectedIndex = 3;
    const { getByTestId } = render(
      <Menu
        items={stories.noIcons}
        onSelect={onSelectHandler}
        selectedIndex={selectedIndex}
      />
    );
    const menuBlock = getByTestId("n-menu-block");
    // testing rendered classes
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
    stories.noIcons.map(async (item, index) => {
      const menuItem = getByTestId(`n-menu-block-item-${index}`);
      const menuItemLabel = getByTestId(
        `n-menu-block-item-element-label-${index}`
      );
      const menuItemSuffix = getByTestId(
        `n-menu-block-item-element-suffix-${index}`
      );

      expect(menuItem.className).toContain("n-menu-block-item");
      if (item?.disabled)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");
      if (item?.divider)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");

      // testing callbacks
      if (!item?.disabled) {
        userEvent.click(menuItem);
        expect(onSelectHandler).toBeCalledWith(index, item.value);
      }

      // testing rendered data
      expect(menuItemSuffix).toBeInTheDocument();
      expect(menuItemLabel.textContent).toBe(item.label);
    });
  });
  test("should render menu with all menu items with links", () => {
    const selectedIndex = 3;
    const { getByTestId } = render(
      <Menu
        items={stories.links}
        onSelect={onSelectHandler}
        selectedIndex={selectedIndex}
      />
    );
    const menuBlock = getByTestId("n-menu-block");
    //testing rendered classes
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
    stories.links.map(async (item, index) => {
      const menuItem = getByTestId(`n-menu-block-item-${index}`);
      const menuItemPrefix = getByTestId(
        `n-menu-block-item-element-prefix-${index}`
      );
      const menuItemLabel = getByTestId(
        `n-menu-block-item-element-label-${index}`
      );
      const menuItemSuffix = getByTestId(
        `n-menu-block-item-element-suffix-${index}`
      );
      const menuItemLink = getByTestId(`n-menu-block-item-${index}-link`);

      expect(menuItem.className).toContain("n-menu-block-item");
      if (item?.disabled)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");
      if (item?.divider)
        expect(menuItem.className).toContain("n-menu-block-item-disabled");

      // testing callbacks
      if (!item?.disabled && item?.linkConfig?.href) {
        expect(menuItemLink.getAttribute("href")).toBe(item?.linkConfig?.href);
        userEvent.click(menuItem);
        expect(onSelectHandler).toBeCalledWith(index, item.value);
      }

      // testing rendered data
      expect(menuItemPrefix).toBeInTheDocument();
      expect(menuItemSuffix).toBeInTheDocument();
      expect(menuItemLabel.textContent).toBe(item.label);
    });
  });
});

describe("Achored Menu", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render anchored menu", async () => {
    let isOpen = true;
    const ref = React.createRef() as RefObject<HTMLDivElement>;

    const onClick = () => {
      isOpen = !isOpen;
    };

    const onSelect = (index: number, value: string) => {
      console.log(index, value);
    };
    const onOpen = () => {};
    const onClose = () => {
      isOpen = false;
    };

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
          maxHeight={150}
        ></Menu>
      </div>
    );
    const menuBlock = getByTestId("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
  });
});
