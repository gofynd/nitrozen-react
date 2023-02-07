import React, { useState, useEffect } from "react";
import {
  SvgIcChevronLeft,
  SvgIcChevronRight,
  SvgIcClose,
} from "../../assets/svg-components";
import "./DatePicker.scss";

export interface DatePickerProps {}

const DateInput = (props: DatePickerProps) => {
  const [days, setDays] = useState(["S", "M", "T", "W", "T", "F", "S"]);
  const [calendar, setCalendar] = useState([]);
  return (
    <div className="n-picker-wrapper">
      <div className="n-closeicon-wrapper">
        <SvgIcClose />
      </div>
      <div className="n-picker-my-wrapper">
        <div className="n-picker-toggle-icon">
          <SvgIcChevronLeft />
        </div>
        <div className="n-picker-month-year">
          <div className="n-picker-btn">Apr</div>
          <div className="n-picker-btn">2022</div>
        </div>
        <div className="n-picker-toggle-icon">
          <SvgIcChevronRight />
        </div>
      </div>
      <div className="n-picker-day-row">
        {days.map((day, index) => (
          <span key={`day-${index}`} data-testid={`day-${index}`}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

DateInput.defaulProps = {};

export default React.memo(DateInput);
