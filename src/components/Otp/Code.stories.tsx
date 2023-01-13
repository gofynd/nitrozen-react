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
    },
    codeId: {
      action: {
        type: "text",
      },
    },
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

  function getFinalOtp(otp: string) {
    setOtpText(otp);
  }
  return (
    <div className="main-div space-between">
      <Code
        fields={4}
        label={"Label"}
        getCode={getFinalOtp}
        codeId={"custom-otp"}
      />
      <br />
      <div style={{ marginTop: "12px" }}>OTP : {otpText}</div>
    </div>
  );
};
