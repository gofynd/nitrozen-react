import React from "react";
import { render } from "@testing-library/react";
import Radio from "./Radio";
import userEvent from "@testing-library/user-event";

describe("Radio", () => {
  test("renders the Radio component", () => {
    const onHandlerMock = jest.fn().mockImplementation((e) => {});
    const screen = render(
      <Radio
        labelText="Basic Radio 1"
        value="radio-1"
        id="radio-1"
        name="basic"
        onChange={onHandlerMock}
      />
    );
    userEvent.type(screen.getByLabelText("Basic Radio 1"), "first");
    expect(onHandlerMock).toBeCalled();
  });
});
