import React from "react";
import { render } from "@testing-library/react";
import { NudgeManager } from "./NudgeManager";
import userEvent from "@testing-library/user-event";
function delay(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}
describe("Nudge", () => {
  test("renders the Nudge component", () => {
    const nudge = new NudgeManager("top-center");
    const screen = render(
      <button
        onClick={() =>
          nudge.show({
            id: "",
            destroy: () => {},
            heading: "Nudge header",
            supportText: "Nudge support text",
            leftImage: <img />,
            rightImage: <img />,
            cta1: "CTA1",
            cta2: "CTA2",
            cta1OnClick: () => {},
            cta2OnClick: () => {},
            position: "top-right",
          })
        }
      >
        Show Nudge
      </button>
    );
    const ShowNudge = screen.getByText("Show Nudge");
    userEvent.click(ShowNudge);
    expect(screen.getByTestId("left-image")).toHaveClass(
      "n-nudge-image-container"
    );
    expect(screen.getByTestId("right-image")).toHaveClass(
      "n-nudge-image-container"
    );
    expect(screen.getByTestId("nudge-header").textContent).toBe("Nudge header");
    expect(screen.getByTestId("nudge-support").textContent).toBe(
      "Nudge support text"
    );
  });
  test("renders the Nudge component and check if destroy is called", () => {
    const nudge = new NudgeManager("top-center");
    let called = false;

    const screen = render(
      <button
        onClick={() =>
          nudge.show({
            id: "",
            destroy: () => {
              called = true;
            },
            heading: "Nudge header",
            supportText: "Nudge support text",
            leftImage: <img />,
            rightImage: <img />,
            cta1: "CTA1",
            cta2: "CTA2",
            cta1OnClick: () => {},
            cta2OnClick: () => {},
            position: "top-right",
            duration: 1000,
          })
        }
      >
        Show Nudge
      </button>
    );
    const ShowNudge = screen.getByText("Show Nudge");
    userEvent.click(ShowNudge);
    delay(1000).then(() => {
      expect(called).toBe(true);
    });
  });
});
