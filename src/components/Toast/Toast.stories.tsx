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
    type: {
      control: "select",
      options: ["success", "danger", "info", "warning"],
    },
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
    toastHeaderAlign: {
      control: "select",
      options: ["left", "right", "center"],
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
            destroy: () => console.log("Danger Toast destroyed"),
            title: "Dangerous Toast",
            type: "danger",
            position: args.position,
          })
        }
      >
        Show Danger Toast
      </Button>
    </div>
  );
};

ShowToast.args = {
  destroy: () => console.log("Toast destroyed"),
  title: "Title 1",
  type: "success",
  position: "top-center",
  shouldClose: false,
};

export const ToastWithUndo: ComponentStory<typeof Toast> = (args) => {
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
            destroy: () => console.log("Danger Toast destroyed"),
            title: "Dangerous Toast",
            type: "danger",
            position: args.position,
            shouldClose: true,
          })
        }
      >
        Show Danger Toast
      </Button>
    </div>
  );
};

ToastWithUndo.args = {
  destroy: () => console.log("Toast destroyed"),
  title: "Title 1",
  type: "success",
  position: "top-center",
  shouldClose: true,
};

ShowToast.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};
