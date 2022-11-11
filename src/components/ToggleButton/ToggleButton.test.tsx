import React from "react";
import { render } from "@testing-library/react";
import ToggleButton from "./ToggleButton";
import userEvent from "@testing-library/user-event";

describe("ToggleButton", () => {
  const onHandlerMock = jest.fn().mockImplementation((e) => {});
  test("Renders basic toggle button", () => {
    const screen = render(<ToggleButton onToggle={onHandlerMock} />);
    userEvent.click(screen.getByTestId("toggle-checkbox"));
    expect(onHandlerMock).toBeCalled();
  });
});
