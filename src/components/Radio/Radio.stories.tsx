import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio, { RadioProps } from "./Radio";
import * as SvgArray from "../../assets/svg-components";

export default {
  title: "Components/Input/Radiobutton",
  component: Radio,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    labelText: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    radioValue: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
    onChange: {
      action: "clicked",
    },
    state: {
      control: "select",
      description: "Validation state",
      options: ["success", "warning", "error"],
    },
    stateMessage: { control: "text" },
    onIconClick: { type: "function" },
    showIcon: { control: "boolean" },
    icon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: any) => (
  <div className="main-div space-between">
    <Radio {...args} />
  </div>
);

export const RadioPlayground = Template.bind({});

RadioPlayground.args = {
  labelText: "React",
  value: "React0",
  id: "React0",
  name: "basic0",
  radioValue: "React0",
};

export const radioSample = (args: RadioProps) => {
  const [selected, setSelected] = useState({ selectedRadio: "girl" });
  const SelectedchangeHandler = (arg: any) => {
    setSelected({ ...selected, selectedRadio: arg });
  };

  return (
    <div className="main-div space-between">
      <Radio
        labelText="Girl"
        value="girl"
        id="girl"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
        showIcon={true}
        icon={SvgArray.SvgIcFemale}
        onIconClick={() => {
          console.log("I am a Girl");
        }}
      />
      <Radio
        labelText="Boy"
        value="boy"
        id="boy"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
        showIcon={true}
        icon={SvgArray.SvgIcMale}
        onIconClick={() => {
          console.log("I am a Boy");
        }}
      />
      <Radio
        labelText="Other"
        value="other"
        id="other"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
      />
    </div>
  );
};

export const stateSample = (args: RadioProps) => {
  const [selected, setSelected] = useState({ selectedRadio: "female" });
  const SelectedchangeHandler = (arg: any) => {
    setSelected({ ...selected, selectedRadio: arg });
  };

  return (
    <div className="main-div space-between">
      <Radio
        labelText="Female"
        value="female"
        id="female"
        state="success"
        stateMessage="Success!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic2"
        showIcon={true}
        icon={SvgArray.SvgIcFemale}
      />
      <Radio
        labelText="Male"
        value="male"
        id="male"
        state="warning"
        stateMessage="Warning!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic2"
        showIcon={true}
        icon={SvgArray.SvgIcMale}
      />
      <Radio
        labelText="Other"
        value="other1"
        id="other1"
        state="error"
        stateMessage="Error!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic2"
      />
    </div>
  );
};

export const disabledRadioSample = (args: RadioProps) => {
  const [selected, setSelected] = useState({ selectedRadio: "female1" });
  const SelectedchangeHandler = (arg: any) => {
    setSelected({ ...selected, selectedRadio: arg });
  };

  return (
    <div className="main-div space-between">
      <Radio
        labelText="Female"
        value="female1"
        id="female1"
        state="success"
        stateMessage="Success!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic3"
        disabled
        showIcon={true}
        icon={SvgArray.SvgIcFemale}
      />
      <Radio
        labelText="Male"
        value="male1"
        id="male1"
        state="warning"
        stateMessage="Warning!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic3"
        disabled
        showIcon={true}
        icon={SvgArray.SvgIcMale}
      />
      <Radio
        labelText="Other"
        value="other2"
        id="other2"
        state="error"
        stateMessage="Error!"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic3"
        disabled
      />
    </div>
  );
};

export const stateVariants = (args: RadioProps) => {
  return (
    <div className="main-div space-between">
      <div className="n-badge-collection">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "4.2rem" }}
        >
          <div style={{ display: "flex", gap: "4.2rem" }}>
            <Radio
              labelText="Success"
              value="random2"
              id="random2"
              state="success"
              stateMessage="Success message!"
              radioValue={"random2"}
            />
          </div>

          <div style={{ display: "flex", gap: "4.2rem" }}>
            <Radio
              labelText="Warning"
              value="random2"
              id="random2"
              state="warning"
              stateMessage="Warning message!"
              radioValue={"random2"}
            />
          </div>

          <div style={{ display: "flex", gap: "4.2rem" }}>
            <Radio
              labelText="Error"
              value="randomValue2"
              id="randomValue2"
              state="error"
              stateMessage="Error message!"
              radioValue={"randomValue2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
