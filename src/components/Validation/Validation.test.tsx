import React from "react";
import { render } from "@testing-library/react";
import Validation from "./Validation";

describe("Validation", () => {
  test("Renders valid label", () => {
    const { container } = render(
      <Validation isValid={true} validLabel={"Approve"} invalidLabel={"Deny"} />
    );
    expect(
      container.getElementsByClassName("nitrozen-approval-visible").length
    ).toBe(1);
  });

  test("Renders invalid label", () => {
    const { container } = render(
      <Validation
        isValid={false}
        validLabel={"Approve"}
        invalidLabel={"Deny"}
      />
    );
    expect(
      container.getElementsByClassName("nitrozen-error-visible").length
    ).toBe(1);
  });

  test("Hides label", () => {
    const { container } = render(
      <Validation
        isValid={false}
        validLabel={"Approve"}
        invalidLabel={"Deny"}
        isHidden={true}
      />
    );
    expect(
      container.getElementsByClassName("nitrozen-error-visible").length
    ).toBe(0);
    expect(
      container.getElementsByClassName("nitrozen-approval-visible").length
    ).toBe(0);
  });
});
