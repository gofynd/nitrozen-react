import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Code, { CodeProps } from "./Code";

export default {
  title: "Components/Code",
  component: Code,
  argTypes: {
    fields: {
      control: {
        type: "select",
      },
      options: [4, 6],
    },
    label: {
      control: {
        type: "text",
      },
    },
    getCode: {
      action: "changed",
      description: "Function that returns the code value",
    },
    codeId: {
      action: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "select",
      },
      options: ["text", "password"],
    },
    validationState: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Describes the state of validity",
      defaultValue: "success",
    },
    validationLabel: {
      type: "string",
      description: "The description",
    },
    hideValidation: {
      type: "boolean",
      description: "Toggles validation component's visibility",
      defaultValue: true,
    },
    validationStyle: { control: "object" },
    validationClassName: { control: "text" },
    helperText: { control: "text", defaultValue: "" },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args: any) => (
  <div className="main-div space-between">
    <Code {...args} />
  </div>
);

export const CodePlayground = Template.bind({});

CodePlayground.args = {
  fields: 6,
  label: "OTP",
  getCode: () => {},
  codeId: "test",
};

export const OtpSample = (args: CodeProps) => {
  const [otpText, setOtpText] = useState("");
  const [hideValidation, setHideValidation] = useState(true);
  function getFinalOtp(otp: string) {
    setOtpText(otp);
    if (otpText.length == 3) {
      setHideValidation(false);
    } else {
      setHideValidation(true);
    }
  }
  return (
    <div className="main-div space-between" style={{ display: "flex" }}>
      <Code
        fields={4}
        label={"Label"}
        getCode={getFinalOtp}
        codeId={"custom-otp"}
        type={"password"}
        hideValidation={hideValidation}
        validationLabel={"Input data correct"}
        validationState={"success"}
      />
      <br />
      <div style={{ marginTop: "12px" }}>OTP : {otpText}</div>
    </div>
  );
};
