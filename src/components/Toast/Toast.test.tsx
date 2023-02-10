import React from "react";
import { render } from "@testing-library/react";
import { ToastManager } from "./ToastManager";
import userEvent from "@testing-library/user-event";

describe("Toast", () => {
  test("renders the Toast component", () => {
    const toast = new ToastManager("top-center");
    const screen = render(
      <button
        onClick={() =>
          toast.show({
            destroy: () => {},
            leftIconPosition: "top-align",
            rightIconPosition: "top-align",
            leftImage: <img></img>,
            rightImage: <img></img>,
            title: "Title 1",
            content: "This is the content of this tostst !!!",
            position: "top-right",
          })
        }
      >
        Show Toast
      </button>
    );
    const showToast = screen.getByText("Show Toast");
    userEvent.click(showToast);
    expect(screen.getByText("Title 1")).toBeInTheDocument();
  });

  test("renders the Toast component and disappears on clicking cross", () => {
    const toast = new ToastManager("top-right");
    const screen = render(
      <button
        onClick={() =>
          toast.show({
            destroy: () => {},
            title: "Title 2",
            content: "This is the content of this toast !!!",
            duration: 3000,
            leftIconPosition: "top-align",
            rightIconPosition: "top-align",
            leftImage: <img></img>,
            rightImage: (
              <img
                aria-label="right-image"
                style={{ height: "1em", width: "1em" }}
                src={require("../../assets/cross-filled.svg")}
              />
            ),
            position: "top-right",
            shouldClose: true,
          })
        }
      >
        Show Toast
      </button>
    );
    const showToast = screen.getByText("Show Toast");
    userEvent.click(showToast);
    const toastCrossIcon = screen.getByRole("img", { name: "right-image" });
    userEvent.click(toastCrossIcon);
    expect(screen.queryByText("Title 2")).toBeNull();
  });
});
