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
};

export const OtpSample = (args: CodeProps) => {
  const [otpText, setOtpText] = useState("");

  function getFinalOtp(otp: string) {
    setOtpText(otp);
  }
  return (
    <div className="main-div space-between">
      <Code fields={6} label={"Type your OTP"} getCode={getFinalOtp} />
      <span>OTP : {otpText}</span>
    </div>
  );
};
