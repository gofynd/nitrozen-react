import React from "react";
import "./DatePicker.scss";
interface RangeConfigProps {
  start: string | Date;
  end: string | Date;
  min: string | Date;
  max: string | Date;
}
export interface DatePickerProps {
  dateVal?: string | Date;
  isRange?: boolean;
  onDateClick?: Function;
  onClose: Function;
  minDate?: string | Date;
  maxDate?: string | Date;
  rangeConfig?: RangeConfigProps;
  getRange?: Function;
  onConfirmRange?: Function;
}
declare const _default: React.MemoExoticComponent<{
  (props: DatePickerProps): JSX.Element;
  defaulProps: {
    dateVal: string;
    isRange: boolean;
    rangeConfig: {};
    getRange: () => void;
  };
}>;
export default _default;
