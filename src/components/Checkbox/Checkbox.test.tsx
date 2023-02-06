import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox 1", () => {
  test("renders the Checbox component", () => {
    const onHandlerMock = jest.fn().mockImplementation((e) => {});
    const screen = render(
      <Checkbox
        checkArray={[1, 2]}
        checkboxValue={1}
        id="1"
        name="1"
        labelText="React"
        onChange={onHandlerMock}
      />
    );
    userEvent.type(screen.getByLabelText("React"), "first");
    expect(onHandlerMock).toBeCalled();
  });

  test("renders the Checbox component", () => {
    const onHandlerMock = jest.fn().mockImplementation((e) => {});
    const screen = render(
      <Checkbox
        checkArray={[1, 2]}
        checkboxValue={3}
        id="1"
        name="1"
        labelText="Angular"
        onChange={onHandlerMock}
      />
    );
    userEvent.type(screen.getByLabelText("Angular"), "first");
    expect(onHandlerMock).toBeCalled();
    let spanElement = screen.getByTestId(`n-checkbox-1`);
    expect(spanElement.className).toBe("n-checkbox");
  });
  test("renders the Checbox component with isIndeterminate state", () => {
    const onHandlerMock = jest.fn().mockImplementation((e) => {});
    const screen = render(
      <Checkbox
        checkArray={[1, 2]}
        checkboxValue={3}
        id="1"
        name="1"
        labelText="Angular"
        onChange={onHandlerMock}
        isIndeterminate={true}
      />
    );
    userEvent.type(screen.getByLabelText("Angular"), "first");
    expect(onHandlerMock).toBeCalled();
    let spanElement = screen.getByTestId(`n-checkbox-1`);
    expect(spanElement.className).toBe("n-checkbox n-checkbox-indeterminate");
  });
});
