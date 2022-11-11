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
            title: "Title 1",
            content: "This is the content of this tostst !!!",
            type: "success",
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
            type: "success",
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
    const toastCrossIcon = screen.getByRole("button", { name: "UNDO" });
    userEvent.click(toastCrossIcon);
    expect(screen.queryByText("Title 2")).toBeNull();
  });
});
