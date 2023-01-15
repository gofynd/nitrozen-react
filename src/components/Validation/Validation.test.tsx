import React from "react";
import { render } from "@testing-library/react";
import Validation from "./Validation";

describe("Validation", () => {
  test("Renders valid label", () => {
    const { container } = render(
      <Validation validationState={"success"} label={"Approve"} />
    );
    expect(container.getElementsByClassName("n-field-success").length).toBe(1);
  });

  test("Renders invalid label", () => {
    const { container } = render(
      <Validation validationState={"error"} label={"Invalid"} />
    );
    expect(container.getElementsByClassName("n-field-error").length).toBe(1);
  });
  test("Renders warning label", () => {
    const { container } = render(
      <Validation validationState={"warning"} label={"warning"} />
    );
    expect(container.getElementsByClassName("n-field-warning").length).toBe(1);
  });

  test("Hides label", () => {
    const { container } = render(
      <Validation
        validationState={"success"}
        label={"Approve"}
        isHidden={true}
      />
    );
    expect(container.getElementsByClassName("n-field-warning").length).toBe(0);
    expect(container.getElementsByClassName("n-field-error").length).toBe(0);
    expect(container.getElementsByClassName("n-field-success").length).toBe(0);
  });
});
