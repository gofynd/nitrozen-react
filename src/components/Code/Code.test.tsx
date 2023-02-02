import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Code from "./Code";

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

describe("Button", () => {
  test("renders the Code component with 6 input fields", () => {
    const { getByTestId } = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={() => {}}
        required={true}
      />
    );
    const testImage = getByTestId("label-id-custom-code");
    expect(testImage.className).toBe("n-code-label-container");
    const label = getByTestId("code-label-custom-code");
    expect(label.textContent).toBe("OTP *");
    for (let i = 0; i < 6; i++) {
      const field = getByTestId("code-input-custom-code-" + i);
      expect(field.className).toBe("n-code-input-field n-code-input-border");
    }
  });
  test("renders the Code component with 6 input fields on change", () => {
    const screen = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={() => {}}
      />
    );
    const inputElement = screen.getByTestId(
      "code-input-custom-code-0"
    ) as HTMLInputElement;
    userEvent.type(inputElement, "1");
    expect(inputElement.value).toBe("1");
    const field = screen.getByTestId("label-id-custom-code");
    expect(field.className).toBe("n-code-label-container");
  });
  test("renders the Code component with 6 input fields on change on all fields", () => {
    let finalCode = "";
    function getChangeResult(val: string) {
      finalCode = val;
    }
    const screen = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={getChangeResult}
      />
    );
    for (let i = 0; i < 6; i++) {
      const inputElement = screen.getByTestId(
        `code-input-custom-code-${i}`
      ) as HTMLInputElement;
      userEvent.type(inputElement, `${i + 2}`);
    }
    expect(finalCode).toBe("234567");
  });
  test("renders the Code component with 4 fields and validation text visible", () => {
    const { container } = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={() => {}}
        hideValidation={false}
        validationState={"success"}
        validationLabel={"all good"}
      />
    );
    expect(container.getElementsByClassName("n-field-success").length).toBe(1);
  });
  test("renders the Code component with 6 input fields on change", () => {
    const screen = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={() => {}}
      />
    );
    const inputElement = screen.getByTestId(
      "code-input-custom-code-0"
    ) as HTMLInputElement;
    userEvent.type(inputElement, "12");
    expect(inputElement.value).toBe("1");
    const inputElement1 = screen.getByTestId(
      "code-input-custom-code-1"
    ) as HTMLInputElement;
    expect(inputElement1.value).toBe("2");
    const field = screen.getByTestId("label-id-custom-code");
    expect(field.className).toBe("n-code-label-container");
    const inputElement2 = screen.getByTestId(
      "code-input-custom-code-2"
    ) as HTMLInputElement;
    fireEvent.keyDown(inputElement2, sharedEventConfig);
    expect(inputElement1).toHaveFocus();
    fireEvent.keyDown(inputElement1, sharedEventConfig);
    expect(inputElement1.value).toBe("");
    expect(inputElement).toHaveFocus();
    fireEvent.keyDown(inputElement, sharedEventConfig);
    expect(inputElement).toHaveFocus();
    expect(inputElement.value).toBe("");
  });
  test("renders the Code component with 4 input fields on and test flow", () => {
    let finalCode = "";
    function getChangeResult(val: string) {
      finalCode = val;
    }
    const screen = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={getChangeResult}
      />
    );
    for (let i = 0; i < 6; i++) {
      const inputElement = screen.getByTestId(
        `code-input-custom-code-${i}`
      ) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: `${i + 3}` } });
    }
    expect(finalCode).toBe("345678");
    let input = screen.getByTestId(
      "code-input-custom-code-5"
    ) as HTMLInputElement;
    // press backspace on the last field
    fireEvent.keyDown(input, sharedEventConfig);
    expect(finalCode).toBe("34567");
    input = screen.getByTestId("code-input-custom-code-4") as HTMLInputElement;
    expect(input).toHaveFocus();
    fireEvent.change(input, { target: { value: `23` } });
    expect(finalCode).toBe("345673");
  });
});
