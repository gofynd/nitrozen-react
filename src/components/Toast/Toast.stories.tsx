import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toast from "./Toast";
import Button from "../Button/Button";
import "./Toast.scss";
import { ToastManager } from "./ToastManager";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    destroy: { action: "clicked" },
    duration: { control: "number" },
    position: {
      control: "select",
      options: [
        "top-right",
        "bottom-right",
        "top-center",
        "top-left",
        "bottom-left",
      ],
    },
    leftIconPosition: {
      control: "select",
      options: ["top-align", "center-align"],
    },
    rightIconPosition: {
      control: "select",
      options: ["top-align", "center-align"],
    },

    toastWidth: { control: "text" },
  },
} as ComponentMeta<typeof Toast>;

export const ShowToast: ComponentStory<typeof Toast> = (args) => {
  const toast = new ToastManager(args.position);
  return (
    <div className="main-div space-between">
      <Button
        onClick={() =>
          toast.show({
            ...args,
          })
        }
      >
        Show Success Toast
      </Button>
      <Button
        onClick={() =>
          toast.show({
            ...args,
            destroy: () => console.log("Toast destroyed"),
            title: "Toast with close icon",
            position: args.position,
            rightImage: (
              <img
                style={{ height: "1em", width: "1em" }}
                src={require("../../assets/cross-filled.svg")}
              />
            ),
            leftImage: (
              <img
                style={{ height: "2em", width: "2em" }}
                src={require("../../assets/left-placeholder.svg")}
              ></img>
            ),
            shouldClose: true,
          })
        }
      >
        Show with Toast close
      </Button>
    </div>
  );
};

ShowToast.args = {
  destroy: () => console.log("Toast destroyed"),
  title: "HEADING TEXT",
  position: "top-center",
  leftIconPosition: "top-align",
  rightIconPosition: "top-align",
  shouldClose: false,
  leftImage: <img src={require("../../assets/left-placeholder.svg")} />,
  rightImage: <img src={require("../../assets/right-placeholder.svg")} />,
};

ShowToast.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};
