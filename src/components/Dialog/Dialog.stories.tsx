import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button";

export default {
  title: "Components/Dialog",
  component: Dialog,

  argTypes: {
    children: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Submit",
      description: "This property sets the display value of the Dialog",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Submit" },
      },
      control: {
        type: "text",
      },
    },
    id: { type: "string" },
    theme: { type: "string", description: "Theme for buttons" },
    title: { control: "object" } || { type: "string" },
    style: { control: "object" },
    className: { control: "text" },
    positiveButtonLabel: { control: "text", defaultValue: "Primary action" },
    negativeButtonLabel: { control: "text", defaultValue: "Cancel" },
  },
} as ComponentMeta<typeof Dialog>;

export const dialog = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-div space-between">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Dialog
        </Button>
      </div>
      <Dialog
        id={"1"}
        kind={"dialog"}
        size="m"
        title={"MyJio - One-stop destination for all things Jio"}
        isClosable={true}
        positiveButtonLabel={"Primary action"}
        negativeButtonLabel={"Cancel"}
        isVisible={open}
        neutralButtonLabel={"Neutral"}
        {...args}
        closeHandle={() => setOpen(false)}
      >
        <div>
          <div>
            <p>
              <span>MyJio - One-stop destination for all things Jio.</span>{" "}
              <span>
                There's more to Jio than just unlimited data and free voice
                calls.
              </span>{" "}
              <span>
                MyJio is your one stop destination for recharges, UPI &
                payments, managing Jio devices, Movies, Music, News, Games,
                Quizzes & a lot more.
              </span>{" "}
            </p>
            <p>
              <span>MyJio is a gateway to digital Life.</span>{" "}
              <span>
                Using MyJio app you can view your high speed data balance,
              </span>{" "}
              <span>
                choose from a range of plans to recharge your number and manage
                your account.
              </span>{" "}
            </p>
            <p>
              <span>
                You can also view your active 4G plan along with validity
              </span>{" "}
              <span>
                , check usage details for your calls, messages & data.
              </span>
              <span>generate detailed statements for up to 6 months.</span>{" "}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export const Acknowledgement = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-div space-between">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Acknowledgement
        </Button>
      </div>
      <Dialog
        id={"1"}
        kind={"acknowledgement"}
        size="m"
        title={"MyJio - One-stop destination for all things Jio"}
        isClosable={true}
        positiveButtonLabel={"Primary action"}
        negativeButtonLabel={"Cancel"}
        isVisible={open}
        neutralButtonLabel={false}
        {...args}
        closeHandle={() => setOpen(false)}
      >
        <div>
          <div>
            <p>
              <span>MyJio - One-stop destination for all things Jio.</span>{" "}
              <span>
                There's more to Jio than just unlimited data and free voice
                calls.
              </span>{" "}
              <span>
                MyJio is your one stop destination for recharges, UPI &
                payments, managing Jio devices, Movies, Music, News, Games,
                Quizzes & a lot more.
              </span>{" "}
            </p>
            <p>
              <span>MyJio is a gateway to digital Life.</span>{" "}
              <span>
                Using MyJio app you can view your high speed data balance,
              </span>{" "}
              <span>
                choose from a range of plans to recharge your number and manage
                your account.
              </span>{" "}
            </p>
            <p>
              <span>
                You can also view your active 4G plan along with validity
              </span>{" "}
              <span>
                , check usage details for your calls, messages & data.
              </span>
              <span>generate detailed statements for up to 6 months.</span>{" "}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export const Informational = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-div space-between">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Informational
        </Button>
      </div>
      <Dialog
        id={"1"}
        kind={"informational"}
        size="m"
        title={"MyJio - One-stop destination for all things Jio"}
        isClosable={true}
        positiveButtonLabel={"Primary action"}
        negativeButtonLabel={"Cancel"}
        isVisible={open}
        neutralButtonLabel={false}
        {...args}
        closeHandle={() => setOpen(false)}
      >
        <div>
          <div>
            <p>
              <span>MyJio - One-stop destination for all things Jio.</span>{" "}
              <span>
                There's more to Jio than just unlimited data and free voice
                calls.
              </span>{" "}
              <span>
                MyJio is your one stop destination for recharges, UPI &
                payments, managing Jio devices, Movies, Music, News, Games,
                Quizzes & a lot more.
              </span>{" "}
            </p>
            <p>
              <span>MyJio is a gateway to digital Life.</span>{" "}
              <span>
                Using MyJio app you can view your high speed data balance,
              </span>{" "}
              <span>
                choose from a range of plans to recharge your number and manage
                your account.
              </span>{" "}
            </p>
            <p>
              <span>
                You can also view your active 4G plan along with validity
              </span>{" "}
              <span>
                , check usage details for your calls, messages & data.
              </span>
              <span>generate detailed statements for up to 6 months.</span>{" "}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
