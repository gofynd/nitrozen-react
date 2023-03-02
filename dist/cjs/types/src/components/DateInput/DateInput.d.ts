import React from "react";
import "./DateInput.scss";
interface RangeConfigProps {
  start: string | Date;
  end: string | Date;
  min: string | Date;
  max: string | Date;
}
export interface DateInputProps {
  id: string;
  label: string;
  required?: boolean;
  useDatePicker?: boolean;
  dateValue?: Date | string;
  helperText?: string;
  validationState?: string;
  validationText?: string;
  validationStyle?: React.CSSProperties;
  validationClassName?: string;
  getDateValue?: Function;
  closeClicked?: Function;
  isRange?: boolean;
  rangeConfig?: RangeConfigProps;
  onConfirmRange?: Function;
  defaultValidation?: boolean;
}
declare const _default: React.MemoExoticComponent<{
  (props: DateInputProps): JSX.Element;
  defaulProps: {
    useDatePicker: boolean;
    required: boolean;
    tooltipText: string;
    helperText: string;
    validationStyle: {};
    validationClassName: string;
    isRange: boolean;
    rangeConfig: {};
    onConfirmRange: () => void;
    defaultValidation: boolean;
  };
}>;
export default _default;
