import React from "react";
import "./DatePicker.scss";
export interface CalendarProps {
  dateVal?: string;
  onDateClick: Function;
  isRange?: boolean;
  from: string;
  to: string;
  calendar: any;
  selectedMonth: string;
  selectedYear: string;
  monthHandler: Function;
  yearHandler: Function;
  handleNextButtonClicked?: Function;
  handlePreviousButtonClicked?: Function;
  calendarId: string;
}
declare const _default: React.MemoExoticComponent<{
  (props: CalendarProps): JSX.Element;
  defaulProps: {
    dateVal: string;
    from: string;
    to: string;
  };
}>;
export default _default;
