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
}

const Calendar = (props: CalendarProps) => {
  const { dateVal, onDateClick, isRange } = props;

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
  const [showMonthToggle, setShowMonthToggle] = useState(false);
  const [showYearToggle, setShowYearToggle] = useState(false);

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

    // get total days in the given month and year
    let noOfDays = daysInMonth(month, year);
    let day = new Date(`${month}/01/${year}`).getDay();
    let monthVal = new Date(`${month}/01/${year}`).getMonth();
    let tempDays = [...days];
    // Find the weekday / weekend the 1st day of the given month falls on
    let emptyIndex = tempDays.findIndex((a) => {
      return a.enum == day;
    });
    // iterate through the number of days and push a data object for UI mapping
    let tempCalendar: any = [];
    for (var i = 1; i <= noOfDays; i++) {
      // only if the iteration value is the same as todays date then set today as true
      let today = false;
      if (mm == month && yyyy == year && dd == i) {
        today = true;
      }
      tempCalendar.push({ value: i, isToday: today });
    }
    // only to fill UI gaps has no functional use case
    let emptyArr = Array(emptyIndex == -1 ? 0 : emptyIndex).fill({ value: 0 });
    setCalendar([...emptyArr, ...tempCalendar]);
    setSelectedMonth(months[monthVal]);
    setSelectedYear(year);
  };

  const handleMonthClicked = (monthIndex: number) => {
    generateCalendar(monthIndex, selectedYear);
    setShowMonthToggle(false);
  };

  const handleYearClicked = (year: any) => {
    let monthIndex = months.findIndex((name) => name == selectedMonth);
    generateCalendar(monthIndex + 1, year);
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
    classes += calendarItem.isToday ? " n-picker-calendar-griditem-today" : "";
    classes +=
      calendarItem.value !== 0 ? " n-picker-calendar-griditem-hover" : "";
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
      calendarItem.value == day
    ) {
      return " n-picker-calendar-griditem-selected";
    }
    return classes;
  };
  return (
    <div className="n-picker-calendar-wrapper">
      <div className="n-picker-my-wrapper">
        <div className="n-picker-toggle-icon">
          <SvgIcChevronLeft />
        </div>
        <div className="n-picker-month-year">
          <div
            className="n-picker-btn"
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
            className="n-picker-btn"
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
            onClick={() => {
              handleDateClick(calendarItem);
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

Calendar.defaulProps = { dateVal: "" };

export default React.memo(Calendar);
