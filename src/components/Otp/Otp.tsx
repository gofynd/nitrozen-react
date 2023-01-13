import React from "react";
import "./Otp.scss";

export interface OtpProps {
  fields: 4 | 6;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Otp = (props: OtpProps) => {
  const { fields, onChange, ...restProps } = props;
  return <div></div>;
};

Otp.defaulProps = {
  fields: 4,
};
