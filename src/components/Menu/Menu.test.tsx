import React, { RefObject, useRef, useState } from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";
import Button from "../Button";

const menuItems = {
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
      divider: false,
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
      value: "pomegranet",
    },
  ],
  complex: [],
  links: [
    {
      label: "Apple",
      divider: true,
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
      divider: true,
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      suffix: <p>$50,000</p>,
      value: "pineapple",
    },
    {
      label: "Guava",
      value: "guava",
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

const onSelectHandler = jest.fn();

describe("Primary Menu", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render menu with all simple menu items", () => {
    const selectedIndex = 3;
    const { getByTestId } = render(
      <Menu
        items={menuItems.simple}
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
    menuItems.simple.map((item, index) => {
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
        items={menuItems.noIcons}
        onSelect={onSelectHandler}
        selectedIndex={selectedIndex}
      />
    );
    const menuBlock = getByTestId("n-menu-block");
    // testing rendered classes
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
    menuItems.noIcons.map(async (item, index) => {
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
        items={menuItems.links}
        onSelect={onSelectHandler}
        selectedIndex={selectedIndex}
      />
    );
    const menuBlock = getByTestId("n-menu-block");
    //testing rendered classes
    expect(menuBlock.className).toContain("n-menu-block");
    expect(menuBlock.className).toContain("n-menu-block-open");
    menuItems.links.map(async (item, index) => {
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
          items={menuItems.simple}
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
