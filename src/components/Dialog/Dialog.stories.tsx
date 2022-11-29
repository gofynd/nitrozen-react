import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button";
import Radio from "../Radio";
import { SvgError } from "../../assets/svg-components";

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
    theme: { type: "string" },
    title: { type: "string" },
    DialogIcon: { type: "string" },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Dialog>;

export const confirm_dialog = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-div space-between">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Confirm Dialog
        </Button>
      </div>
      <Dialog
        id={"1"}
        DialogIcon={
          <SvgError
            size="60px"
            style={{ borderRadius: "50%", color: "#FFBB33" }}
          />
        }
        title={"Are you sure ?"}
        positiveButtonLabel={"No"}
        negativeButtonLabel={`Yes`}
        isVisible={open}
        neutralButtonLabel={false}
        {...args}
        closeHandle={() => setOpen(false)}
      >
        <span>
          If you turn off multi size, your current selection will be deselected
          and you will have to select everythng from the start
        </span>
      </Dialog>
    </div>
  );
};

export const choose_dialog = (args: any) => {
  const [selected, setSelected] = useState({ selectedRadio: "" });
  const SchangeHandler = (arg: any) => {
    setSelected({ ...selected, selectedRadio: arg });
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-div space-between">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Choose Dialog
        </Button>
      </div>
      <Dialog
        id={"1"}
        title={"Choose Who You are?"}
        isVisible={open}
        neutralButtonLabel="DONE"
        {...args}
        closeHandle={() => setOpen(false)}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}
        >
          <Radio
            labelText="Male"
            value="male"
            id="male"
            radioValue={selected.selectedRadio}
            onChange={SchangeHandler}
            name="basic"
          />
          <Radio
            labelText="Female"
            value="female"
            id="female"
            radioValue={selected.selectedRadio}
            onChange={SchangeHandler}
            name="basic"
          />
          <Radio
            labelText="Others"
            value="others"
            id="others"
            radioValue={selected.selectedRadio}
            onChange={SchangeHandler}
            name="basic"
          />
        </div>
      </Dialog>
    </div>
  );
};
