import React, { useState, useEffect } from "react";
import {
  SvgIcChevronDown,
  SvgIcChevronLeft,
  SvgIcChevronRight,
  SvgIcChevronUp,
} from "../../assets/svg-components";
import "./DatePicker.scss";
import { daysInMonth, months, years } from "../../utils/dateHandler";
export interface CalendarProps {
  dateVal?: string;
  onDateClick: Function;
  isRange?: boolean;
  rangeConfig: any;
  from?: string;
  to?: string;
  calendar: any;
  selectedMonth: string;
  selectedYear: string;
  monthHandler: Function;
  yearHandler: Function;
}

const Calendar = (props: CalendarProps) => {
  const {
    dateVal,
    onDateClick,
    isRange,
    rangeConfig,
    from,
    to,
    calendar,
    selectedMonth,
    selectedYear,
    monthHandler,
    yearHandler,
  } = props;

  const [days, setDays] = useState([
    { name: "S", enum: 7 },
    { name: "M", enum: 1 },
    { name: "T", enum: 2 },
    { name: "W", enum: 3 },
    { name: "T", enum: 4 },
    { name: "F", enum: 5 },
    { name: "S", enum: 6 },
  ]);
  useEffect(() => {}, [props]);

  const [showMonthToggle, setShowMonthToggle] = useState(false);
  const [showYearToggle, setShowYearToggle] = useState(false);

  const handleMonthClicked = (monthIndex: number) => {
    monthHandler(monthIndex);
    setShowMonthToggle(false);
  };

  const handleYearClicked = (year: any) => {
    yearHandler(year);
    setShowYearToggle(false);
  };

  const handleDateClick = (calendarItem: any) => {
    let dd =
      calendarItem.value < 10 ? "0" + calendarItem.value : calendarItem.value;
    let monthIndex: any = months.findIndex((name) => name == selectedMonth) + 1;
    if (monthIndex < 10) {
      monthIndex = "0" + monthIndex;
    }
    let formattedDate = `${monthIndex}/${dd}/${selectedYear}`;
    // execute props function
    onDateClick(formattedDate);
  };

  const getCalendarItemClasses = (calendarItem: any) => {
    let classes = "";
    classes +=
      calendarItem.value !== 0 && !calendarItem.inRange
        ? " n-picker-calendar-griditem-hover"
        : "";
    classes += calendarItem.isDisabled
      ? " n-picker-calendar-griditem-disabled"
      : "";
    classes += calendarItem.isToday ? " n-picker-calendar-griditem-today" : "";
    let monthValue: any, yearValue: any, day: any;
    if (dateVal) {
      let recievedDate = new Date(dateVal);
      monthValue = recievedDate.getMonth();
      yearValue = recievedDate.getFullYear();
      day = recievedDate.getDate();
    }
    if (
      selectedMonth == months[monthValue] &&
      yearValue == selectedYear &&
      calendarItem.value == day &&
      !isRange
    ) {
      return "n-picker-calendar-griditem-selected";
    }
    if (isRange) {
      let rangeClass = "";
      let monthIndex: number | string =
        months.findIndex((name) => name == selectedMonth) + 1;
      monthIndex = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
      let currentItetrationaDate = `${monthIndex}/${calendarItem.value}/${selectedYear}`;
      if (
        from &&
        new Date(currentItetrationaDate).getTime() == new Date(from).getTime()
      ) {
        rangeClass += " n-picker-calendar-griditem-rangestart";
        classes = classes.replace("n-picker-calendar-griditem-hover", "");
        classes = classes.replace("n-picker-calendar-griditem-today", "");
      }
      if (
        !rangeClass &&
        to &&
        new Date(currentItetrationaDate).getTime() == new Date(to).getTime()
      ) {
        rangeClass += " n-picker-calendar-griditem-rangeend";
        classes = classes.replace("n-picker-calendar-griditem-hover", "");
        classes = classes.replace("n-picker-calendar-griditem-today", "");
      }
      if (
        !rangeClass &&
        from &&
        to &&
        new Date(currentItetrationaDate).getTime() < new Date(to).getTime() &&
        new Date(currentItetrationaDate).getTime() > new Date(from).getTime()
      ) {
        rangeClass += " n-picker-calendar-griditem-range";
        classes = classes.replace("n-picker-calendar-griditem-today", "");
        classes = classes.replace("n-picker-calendar-griditem-hover", "");
      }
      classes += rangeClass;
    }
    return classes;
  };

  return (
    <div className="n-picker-calendar-wrapper">
      <div className="n-picker-my-wrapper">
        <div className="n-picker-toggle-icon">
          <SvgIcChevronLeft />
        </div>
        {/* Render only if both month and year are present */}
        {selectedMonth && selectedYear && (
          <div className="n-picker-month-year">
            <div
              className={`n-picker-btn ${
                showMonthToggle ? "n-picker-btn-active" : ""
              }`}
              onClick={() => {
                setShowMonthToggle(!showMonthToggle);
                setShowYearToggle(false);
              }}
            >
              {selectedMonth.slice(0, 3)}
              <span>
                {showMonthToggle ? <SvgIcChevronUp /> : <SvgIcChevronDown />}
              </span>
            </div>
            <div
              className={`n-picker-btn ${
                showYearToggle ? "n-picker-btn-active" : ""
              }`}
              onClick={() => {
                setShowYearToggle(!showYearToggle);
                setShowMonthToggle(false);
              }}
            >
              {selectedYear}
              <span>
                {showYearToggle ? <SvgIcChevronUp /> : <SvgIcChevronDown />}
              </span>
            </div>
          </div>
        )}
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
        {calendar &&
          calendar.length &&
          calendar.map((calendarItem: any, calendarIndex: number) => (
            <div
              className={`n-picker-calendar-griditem ${
                calendarItem.isDisabled
                  ? "n-picker-calendar-griditem-disabled"
                  : ""
              }`}
              key={`calendar-griditem-${calendarIndex}`}
              onClick={() => {
                calendarItem.value !== 0 && !calendarItem.isDisabled
                  ? handleDateClick(calendarItem)
                  : () => {};
              }}
            >
              <div
                className={`${getCalendarItemClasses(calendarItem)}`}
                key={`calendar-griditem-value-${calendarIndex}`}
              >
                {calendarItem.value !== 0 && calendarItem.value}
              </div>
            </div>
          ))}
      </div>
      {showMonthToggle && (
        <div
          className={`n-picker-monthlist ${
            isRange
              ? "n-picker-monthlist-semiwidth"
              : "n-picker-monthlist-width"
          }`}
        >
          {months.map((month, monthIndex) => (
            <div
              className={`n-picker-monthlist-item ${
                selectedMonth == month ? "n-picker-monthlist-selected" : ""
              }`}
              onClick={() => handleMonthClicked(monthIndex + 1)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
      {showYearToggle && (
        <div
          className={`n-picker-monthlist ${
            isRange
              ? "n-picker-monthlist-semiwidth"
              : "n-picker-monthlist-width"
          }`}
        >
          {years.map((year: any, yearIndex) => (
            <div
              className={`n-picker-monthlist-item ${
                selectedYear == year ? "n-picker-monthlist-selected" : ""
              }`}
              onClick={() => handleYearClicked(year)}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Calendar.defaulProps = { dateVal: "", rangeConfig: {}, from: "", to: "" };

export default React.memo(Calendar);
