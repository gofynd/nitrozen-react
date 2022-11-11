import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
import userEvent from "@testing-library/user-event";

describe("Autocomplete", () => {
  const countries = ["India"];
  const changeMock = jest.fn().mockImplementation((e) => {});
  const blurMock = jest.fn().mockImplementation((e) => {});
  const focusMock = jest.fn().mockImplementation((e) => {});
  const itemClickedMock = jest.fn().mockImplementation((e) => {});
  test("Renders autocomplete component", () => {
    const screen = render(
      <Autocomplete
        placeholder={"Test placeholder"}
        onChange={changeMock}
        onBlur={blurMock}
        onFocus={focusMock}
        listItemClicked={itemClickedMock}
        items={countries}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "Test placeholder"
    ) as HTMLInputElement;
    userEvent.type(inputElement, "Ind");
    expect(changeMock).toBeCalled();
    fireEvent.blur(inputElement);
    expect(blurMock).toBeCalled();
    fireEvent.focus(inputElement);
    expect(focusMock).toBeCalled();
    userEvent.click(screen.getByTestId("test-India"));
    expect(itemClickedMock).toBeCalled();
  });
});
