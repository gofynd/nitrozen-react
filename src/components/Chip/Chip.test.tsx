import React from "react";
import { render } from "@testing-library/react";
import Chip from "./Chip";
import userEvent from "@testing-library/user-event";
import { SvgIcCloseRemove } from "../../assets/svg-components";

describe("Chips", () => {
  const onHandlerMock = jest.fn().mockImplementation((e) => {});
  test("Renders Primary chip", () => {
    const screen = render(
      <Chip onClick={onHandlerMock} className="test-custom-class">
        Primary test Chip
      </Chip>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("test-custom-class").length).toBe(
      1
    );
    userEvent.click(screen.getByText("Primary test Chip"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders deletable chip", () => {
    const screen = render(
      <Chip onDelete={onHandlerMock} deletable={true}>
        Deletable Chip
      </Chip>
    );
    userEvent.click(screen.getByTestId("deletable-cross"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders rounded chip", () => {
    const { container } = render(<Chip isRounded={true}> Rounded chip </Chip>);
    expect(container.getElementsByClassName("rounded").length).toBe(1);
  });
  test("Renders chip with custom icon", () => {
    const onHandlerMock = jest.fn().mockImplementation((e) => {});
    const screen = render(
      <Chip icon={SvgIcCloseRemove} onIconClick={onHandlerMock}>
        Rounded chip
      </Chip>
    );
    userEvent.click(screen.getByTestId("prop-icon"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders disabled chip", () => {
    const { container } = render(<Chip disabled={true}> Disabled Chip </Chip>);
    expect(container.getElementsByClassName("n-disabled").length).toBe(1);
  });
  test("Renders Secondary state chip", () => {
    const { container } = render(
      <Chip state="secondary"> Selected State Chip </Chip>
    );
    expect(container.getElementsByClassName("n-chip-secondary").length).toBe(1);
  });
  test("Renders Label with chip", () => {
    const { container } = render(<Chip label="Filter"></Chip>);
    expect(container.getElementsByClassName("n-chip-label").length).toBe(1);
  });
});
