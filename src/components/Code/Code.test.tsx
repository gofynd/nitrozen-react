import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Code from "./Code";

describe("Button", () => {
  test("renders the Code component with 6 input fields", () => {
    const { getByTestId } = render(
      <Code
        fields={6}
        label={"OTP"}
        codeId={"custom-code"}
        getCode={() => {}}
      />
    );
    const testImage = getByTestId("label-id-custom-code");
    expect(testImage.className).toBe("n-code-label-container ");
    const label = getByTestId("code-label-custom-code");
    expect(label.textContent).toBe("OTP");
    for (let i = 0; i < 6; i++) {
      const field = getByTestId("code-input-custom-code-" + i);
      expect(field.className).toBe(
        "n-code-input-field n-code-6 n-code-input-border"
      );
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
    expect(field.className).toBe("n-code-label-container n-code-focused-label");
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
});
