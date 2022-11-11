import React from "react";
import "./Radio.scss";
export interface RadioProps {
  disabled?: boolean;
  name?: string;
  value?: string;
  radioValue?: string | number;
  id?: string;
  labelText?: string;
  onChange?: Function;
  className?: string;
  style?: React.CSSProperties;
}
declare const Radio: {
  (props: RadioProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    labelText: string;
    className: string;
    style: {};
    onChange: () => void;
  };
};
export default Radio;
