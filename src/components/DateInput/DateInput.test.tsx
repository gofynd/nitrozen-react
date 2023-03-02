import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateInput from "./DateInput";

const backspaceKey = {
  key: "Backspace",
  code: 8,
  inputType: "deleteContentBackward",
};

const sharedEventConfig = {
  key: backspaceKey.key,
  charCode: backspaceKey.code,
  keyCode: backspaceKey.code,
  which: backspaceKey.code,
};

describe("DateInput", () => {
  test("renders the DateInput component to check markup", () => {
    const screen = render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={"11/27/1997"}
        getDateValue={() => {}}
        id={"birth-field"}
      />
    );
    const labelContainer = screen.getByTestId(
      "n-date-label"
    ) as HTMLInputElement;
    expect(labelContainer.className).toBe("n-input-label");
    expect(labelContainer.textContent).toContain("Birthdate  *");
    const wrapper = screen.getByTestId("n-date-inputfield") as HTMLInputElement;
    expect(wrapper.className).toBe("n-date-inputfield ");
    const datePickerIcon = screen.getByTestId(
      "n-datepicker-icon"
    ) as HTMLInputElement;
    expect(datePickerIcon).toBeInTheDocument();
    const Input1 = screen.getByTestId(
      "date-input-0-birth-field"
    ) as HTMLInputElement;
    expect(Input1.value).toBe("11");
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    expect(Input2.value).toBe("27");
    const Input3 = screen.getByTestId(
      "date-input-2-birth-field"
    ) as HTMLInputElement;
    expect(Input3.value).toBe("1997");
    const closeBtn = screen.getByTestId(
      "n-date-close-icon"
    ) as HTMLInputElement;
    expect(closeBtn.className).toBe(
      "n-input-close-btn n-icon-container n-cursor-pointer"
    );
    const helperText = screen.getByTestId(
      "n-date-helpertext"
    ) as HTMLInputElement;
    expect(helperText.className).toBe("n-helper-text");
    expect(helperText.textContent).toBe("Enter your birth date");
  });
  test("renders the DateInput component to check typing on input field", () => {
    let date: string = "";
    function getDate(dateVal: string) {
      date = dateVal;
    }
    const screen = render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={"11/27/1997"}
        getDateValue={getDate}
        id={"birth-field"}
      />
    );
    const Input1 = screen.getByTestId(
      "date-input-0-birth-field"
    ) as HTMLInputElement;
    expect(Input1.value).toBe("11");
    fireEvent.change(Input1, { target: { value: "12" } });
    expect(date).toStrictEqual(new Date("1997-12-26T18:30:00.000Z"));
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    expect(Input2).toHaveFocus();
    fireEvent.change(Input2, { target: { value: "44" } });
    const Input3 = screen.getByTestId(
      "date-input-2-birth-field"
    ) as HTMLInputElement;
    expect(Input3).toHaveFocus();
    fireEvent.change(Input3, { target: { value: "19979" } });
    fireEvent.change(Input2, { target: { value: "02" } });
    fireEvent.change(Input1, { target: { value: "33" } });
    const cancel = screen.getByTestId("n-date-close-icon");
    userEvent.click(cancel);
    expect(date).toBe("");
  });
  test("renders the DateInput component to check typing on input field with wrong input", () => {
    const { container } = render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={"11/27/1997"}
        getDateValue={() => {}}
        id={"birth-field"}
      />
    );
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    fireEvent.change(Input2, { target: { value: "44" } });
    const errorMessage = container.getElementsByClassName(
      "n-validation-container"
    );
    expect(errorMessage.length).toBe(0);
  });
  test("renders the DateInput component to check typing on input field with wrong input", () => {
    const { container } = render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={"11/27/1997"}
        getDateValue={() => {}}
        id={"birth-field"}
      />
    );
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    fireEvent.change(Input2, { target: { value: "44" } });
    const errorMessage = container.getElementsByClassName(
      "n-validation-container"
    );
    expect(errorMessage.length).toBe(0);
  });
  test("renders the DateInput component to check typing backspace", () => {
    render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={""}
        getDateValue={() => {}}
        id={"birth-field"}
      />
    );
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    fireEvent.keyDown(Input2, sharedEventConfig);
    const Input1 = screen.getByTestId(
      "date-input-0-birth-field"
    ) as HTMLInputElement;
    expect(Input1).toHaveFocus();
    fireEvent.change(Input1, { target: { value: "1" } });
    fireEvent.blur(Input1);
    expect(Input1.value).toBe("01");
  });
  test("renders the DateInput component to check typing on input field with wrong input", () => {
    const { container } = render(
      <DateInput
        label="Birthdate"
        required={true}
        helperText={"Enter your birth date"}
        dateValue={"11/27/1997"}
        getDateValue={() => {}}
        id={"birth-field"}
        defaultValidation={true}
      />
    );
    const Input2 = screen.getByTestId(
      "date-input-1-birth-field"
    ) as HTMLInputElement;
    fireEvent.change(Input2, { target: { value: "44" } });
    const errorMessage = container.getElementsByClassName(
      "n-validation-container"
    );
    expect(errorMessage.length).toBe(1);
  });
});
