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
  value: "React",
  id: "React",
  name: "basic",
};

export const radioSample = (args: RadioProps) => {
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
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
        showIcon={true}
        icon={SvgArray.SvgGirl}
        onIconClick={() => {
          console.log("I am a women");
        }}
      />
      <Radio
        labelText="Male"
        value="male"
        id="male"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
        showIcon={true}
        icon={SvgArray.SvgBoy}
        onIconClick={() => {
          console.log("I am a man");
        }}
      />
      <Radio
        labelText="Others"
        value="others"
        id="others"
        radioValue={selected.selectedRadio}
        onChange={SelectedchangeHandler}
        name="basic"
      />
    </div>
  );
};

// export const stateSample = (args: RadioProps) => {
//   const [selected, setSelected] = useState({ selectedRadio: "female" });
//   const SelectedchangeHandler = (arg: any) => {
//     setSelected({ ...selected, selectedRadio: arg });
//   };

//   return (
//     <div className="main-div space-between">
//       <Radio
//         labelText="Female"
//         value="female"
//         id="female"
//         state="success"
//         stateMessage="Success message!"
//         radioValue={selected.selectedRadio}
//         onChange={SelectedchangeHandler}
//         name="basic"
//       />
//       <Radio
//         labelText="Male"
//         value="male"
//         id="male"
//         state="warning"
//         stateMessage="Warning message!"
//         radioValue={selected.selectedRadio}
//         onChange={SelectedchangeHandler}
//         name="basic"
//       />
//       <Radio
//         labelText="Others"
//         value="others"
//         id="others"
//         state="success"
//         stateMessage="Success message!"
//         radioValue={selected.selectedRadio}
//         onChange={SelectedchangeHandler}
//         name="basic"
//       />
//     </div>
//   );
// };

export const radioVariants = (args: RadioProps) => {
  return (
    <div className="main-div space-between">
      <div className="n-badge-collection">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}
        >
          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Radio labelText="Text" value="random1" id="random1" />

            <Radio
              labelText="Text"
              value="random2"
              id="random2"
              radioValue={"random2"}
            />
          </div>

          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Radio
              labelText="Text"
              value="randomValue1"
              id="randomValue1"
              disabled
            />

            <Radio
              labelText="Text"
              value="randomValue2"
              id="randomValue2"
              radioValue={"randomValue2"}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const radioSelectors = (args: RadioProps) => {
  return (
    <div className="main-div space-between">
      <div className="n-badge-collection">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}
        >
          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Radio
              labelText="Add text here"
              value="random1"
              id="random1"
              className="radio-story"
              style={{ border: "1px solid #E0E0E0", background: "#FFFFFF" }}
            />

            <Radio
              labelText="Add text here"
              value="random2"
              id="random2"
              radioValue={"random2"}
              className="radio-story"
              style={{ background: "#E7EEFF", border: "1px solid #2E31BE" }}
            />
          </div>

          <div style={{ display: "flex", gap: "3.2rem" }}>
            <Radio
              labelText="Add text here"
              value="randomValue1"
              id="randomValue1"
              className="radio-story"
              style={{ background: "#EDEDED", border: "1px solid #E0E0E0" }}
              disabled
            />

            <Radio
              labelText="Add text here"
              value="randomValue2"
              id="randomValue2"
              radioValue={"randomValue2"}
              className="radio-story"
              style={{ border: "1px solid #2E31BE", background: "#E7EEFF" }}
              disabled
            />
          </div>
        </div>
      </div>
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
