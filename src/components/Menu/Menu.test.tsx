import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";
import userEvent from "@testing-library/user-event";
import MenuItem from "../MenuItem";

describe("Menu", () => {
  test("renders the Menu component with inverted=false", () => {
    const { getByTestId } = render(
      <Menu mode="horizontal" inverted={false} position="bottom">
        <MenuItem>M1</MenuItem>
      </Menu>
    );
    const testImage = getByTestId("menu-icon");
    expect(testImage.classList).toContain("nitrozen-menu-icon");
  });

  test("renders the Menu component with inverted=true", () => {
    const { getByTestId } = render(
      <Menu mode="horizontal" inverted={true} position="bottom">
        <MenuItem>M1</MenuItem>
      </Menu>
    );
    const testImage = getByTestId("menu-icon");
    expect(testImage.classList).toContain("inverted");
  });

  test("test onClick", () => {
    const screen = render(
      <Menu>
        <MenuItem>M1</MenuItem>
      </Menu>
    );
    const testImage = screen.getByTestId("menu-icon");
    userEvent.click(testImage);
    expect(screen.getByText("M1")).toBeInTheDocument();
  });

  test("Get MenuItem value after clicking on it", () => {
    let selectedMenu = "";
    const screen = render(
      <Menu
        onChangeMenuItem={(menu) => {
          selectedMenu = menu;
        }}
      >
        <MenuItem>M1</MenuItem>
        <MenuItem>M2</MenuItem>
        <MenuItem>M3</MenuItem>
      </Menu>
    );
    const testImage = screen.getByTestId("menu-icon");
    userEvent.click(testImage);
    const menuItemM2 = screen.getByText("M2");
    userEvent.click(menuItemM2);
    expect(selectedMenu).toBe("M2");
  });
});
