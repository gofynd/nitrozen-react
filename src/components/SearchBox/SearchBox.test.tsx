import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchBox from "./SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  const countries = ["India", "Nepal"];
  const changeMock = jest.fn().mockImplementation((e) => {});
  const blurMock = jest.fn().mockImplementation((e) => {});
  const focusMock = jest.fn().mockImplementation((e) => {});
  const itemClickedMock = jest.fn().mockImplementation((e) => {});
  test("Renders autocomplete component", () => {
    const screen = render(
      <SearchBox
        placeholder={"Test placeholder"}
        onChange={changeMock}
        onBlur={blurMock}
        onFocus={focusMock}
        listItemClicked={itemClickedMock}
        items={countries}
        showClearAll
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "Test placeholder"
    ) as HTMLInputElement;
    userEvent.type(inputElement, "Ind");
    const clearIcn = screen.container.getElementsByClassName("n-suf-icon-back");
    expect(clearIcn[0]).toBeInTheDocument();
    expect(clearIcn.length).toBe(1);

    fireEvent.keyDown(inputElement, {
      key: "ArrowDown",
    });
    fireEvent.keyDown(inputElement, {
      key: "ArrowDown",
    });

    fireEvent.keyDown(inputElement, {
      key: "ArrowUp",
    });
    expect(changeMock).toBeCalled();

    userEvent.click(screen.getByTestId("test-India"));

    expect(itemClickedMock).toBeCalled();
    fireEvent.click(clearIcn[0]);
    fireEvent.blur(inputElement);
    expect(blurMock).toBeCalled();
    fireEvent.focus(inputElement);
    expect(focusMock).toBeCalled();
  });
});
