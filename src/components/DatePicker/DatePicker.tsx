import React, { useState, useEffect } from "react";
import {
  SvgIcChevronDown,
  SvgIcChevronLeft,
  SvgIcChevronRight,
  SvgIcClose,
} from "../../assets/svg-components";
import "./DatePicker.scss";
import { daysInMonth, months } from "../../utils/dateHandler";
export interface DatePickerProps {
  dateVal?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const { dateVal } = props;
  const [days, setDays] = useState([
    { name: "S", enum: 7 },
    { name: "M", enum: 1 },
    { name: "T", enum: 2 },
    { name: "W", enum: 3 },
    { name: "T", enum: 4 },
    { name: "F", enum: 5 },
    { name: "S", enum: 6 },
  ]);

  const [calendar, setCalendar] = useState<any>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    let monthValue: any = "";
    let yearValue: any = "";
    if (dateVal) {
      let recievedDate = new Date(dateVal);
      monthValue = recievedDate.getMonth() + 1;
      yearValue = recievedDate.getFullYear();
    } else {
      monthValue = today.getMonth() + 1; // Months start at 0!
      yearValue = today.getFullYear();
    }
    setSelectedYear(yearValue);
    setSelectedMonth(months[monthValue]);
    generateCalendar(
      monthValue < 10 ? "0" + monthValue : monthValue,
      yearValue
    );
  }, []);

  const generateCalendar = (month: any, year: any) => {
    // Get todays date, month and year\
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();

    // get totaldays in the given month and year
    let noOfDays = daysInMonth(month, year);
    let day = new Date(`${month}/01/${year}`).getDay();
    let monthVal = new Date(`${month}/01/${year}`).getMonth();
    let tempDays = [...days];
    // Find the weekday / weekend the 1st day of the given month falls on
    let emptyIndex = tempDays.findIndex((a) => {
      return a.enum == day;
    });
    // iterate through the number of days and push a data object for UI mapping
    let tempCalendar = [...calendar];
    for (var i = 1; i <= noOfDays; i++) {
      // only if the iteration value is the same as todays date then set today as true
      let today = false;
      if (mm == month && yyyy == year && dd == i) {
        today = true;
      }
      tempCalendar.push({ value: i, isToday: today });
    }
    // only to fill UI gaps has no functional use case
    let emptyArr = Array(emptyIndex).fill({ value: 0 });
    setCalendar([...emptyArr, ...tempCalendar]);
    setSelectedMonth(months[monthVal]);
  };

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
          <div className="n-picker-btn">
            {selectedMonth.slice(0, 3)}
            <span>
              <SvgIcChevronDown />
            </span>
          </div>
          <div className="n-picker-btn">
            {selectedYear}
            <span>
              <SvgIcChevronDown />
            </span>
          </div>
        </div>
        <div className="n-picker-toggle-icon">
          <SvgIcChevronRight />
        </div>
      </div>
      <div className="n-picker-day-row">
        {days.map((day, index) => (
          <span key={`day-${index}`} data-testid={`day-${index}`}>
            {/* Sun/Mon/Tue etc */}
            {day.name}
          </span>
        ))}
      </div>
      <div className="n-picker-calendar-grid">
        {calendar.map((calendarItem: any, calendarIndex: number) => (
          <div
            className={`n-picker-calendar-griditem `}
            key={`calendar-griditem-${calendarIndex}`}
          >
            <div
              className={`${
                calendarItem.value !== 0
                  ? "n-picker-calendar-griditem-hover"
                  : ""
              } ${
                calendarItem.isToday ? "n-picker-calendar-griditem-today" : ""
              }`}
              key={`calendar-griditem-value-${calendarIndex}`}
            >
              {calendarItem.value !== 0 && calendarItem.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

DatePicker.defaulProps = { dateVal: "" };

export default React.memo(DatePicker);
