import React, { useState, useEffect } from "react";
import { SvgIcClose } from "../../assets/svg-components";
import "./DatePicker.scss";
import Calendar from "./Calendar";
import Button from "../Button/Button";
import { daysInMonth, months, years } from "../../utils/dateHandler";

interface RangeConfigProps {
  start: string;
  end: string;
  min: string;
  max: string;
}
export interface DatePickerProps {
  dateVal?: string;
  isRange?: boolean;
  onDateClick: Function;
  onClose: Function;
  minDate?: string;
  maxDate?: string;
  rangeConfig?: RangeConfigProps;
  getRange?: Function;
  onConfirmRange?: Function;
  align: string;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    dateVal,
    isRange,
    onDateClick,
    onClose,
    minDate,
    maxDate,
    rangeConfig,
    getRange,
    onConfirmRange,
    align,
  } = props;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [days] = useState([
    { name: "S", enum: 7 },
    { name: "M", enum: 1 },
    { name: "T", enum: 2 },
    { name: "W", enum: 3 },
    { name: "T", enum: 4 },
    { name: "F", enum: 5 },
    { name: "S", enum: 6 },
  ]);
  const [selectedCalendarMonth, setSelectedCalendarMonth] = useState(["", ""]);
  const [selectedCalendarYear, setSelectedCalendarYear] = useState(["", ""]);
  const [calendars, setCalendars] = useState([[], []]);
  const [today] = useState(new Date());
  const [singleDate, setSingleDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 426) {
      setIsMobile(true);
    }
    let monthValue: any = "";
    let yearValue: any = "";
    // Only if the isRange prop is true
    monthValue = today.getMonth() + 1; // Months start at 0!
    yearValue = today.getFullYear();
    let calendar2Month: any = "";
    let calendar2Year: any = "";
    if (isRange) {
      if (rangeConfig?.start) {
        let recievedCalendar1 = new Date(rangeConfig.start);
        monthValue = recievedCalendar1.getMonth() + 1;
        yearValue = recievedCalendar1.getFullYear();
      }
      if (rangeConfig?.end) {
        let recievedCalendar2 = new Date(rangeConfig.end);
        calendar2Month = recievedCalendar2.getMonth() + 1;
        calendar2Year = recievedCalendar2.getFullYear();
        // if both the calendar1 and calendar2 months are same then increment the month by 1 for second calendar
        if (monthValue == calendar2Month) {
          if (calendar2Month == 12) {
            recievedCalendar2 = new Date(
              recievedCalendar2.getFullYear() + 1,
              0,
              1
            );
          } else {
            recievedCalendar2 = new Date(
              recievedCalendar2.getFullYear(),
              recievedCalendar2.getMonth() + 1,
              1
            );
          }
          calendar2Month = recievedCalendar2.getMonth() + 1;
          calendar2Year = recievedCalendar2.getFullYear();
        }
      } else {
        // if no date is given for end date then go to the next month of the existing todays date
        let now = new Date();
        let current;
        if (now.getMonth() == 11) {
          current = new Date(now.getFullYear() + 1, 0, 1);
        } else {
          current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        }
        calendar2Month = current.getMonth() + 1;
        calendar2Year = current.getFullYear();
      }
    } else {
      if (dateVal) {
        let recievedDate = new Date(dateVal);
        monthValue = recievedDate.getMonth() + 1;
        yearValue = recievedDate.getFullYear();
      }
    }
    // Call the generate calendar function to generate calendar config for the first calendar
    generateCalendar({
      forMonth: monthValue,
      forYear: yearValue,
      calendarIndex: 0,
    });
    // Only if isRange prop is true then call the function again but with 1 index
    if (isRange) {
      generateCalendar({
        forMonth: calendar2Month,
        forYear: calendar2Year,
        calendarIndex: 1,
      });
      setStartDate(rangeConfig ? rangeConfig.start : "");
      setEndDate(rangeConfig ? rangeConfig.end : "");
    }
  }, []);

  const generateCalendar = (calendarConfig: any) => {
    let { forMonth, forYear, calendarIndex } = calendarConfig;
    forMonth = forMonth < 10 ? `0${forMonth}` : forMonth;
    // Get todays date, month and year
    let todayYear = today.getFullYear();
    let todayMonth: any = today.getMonth() + 1; // Months start at 0!
    let todayDate: any = today.getDate();
    todayMonth = todayMonth < 10 ? `0${todayMonth}` : todayMonth;
    // get total days in the given month and year
    let noOfDaysInMonth = daysInMonth(forMonth, forYear);
    // Finds which day the 1st of the given month falls in  ( sun / mon / tue / .. / n)
    let weekDayVal = new Date(`${forMonth}/01/${forYear}`).getDay();
    // Find the weekday / weekend the 1st day of the given month falls on
    let emptyIndex = days.findIndex((a) => {
      return a.enum == weekDayVal;
    });
    // iterate through the number of days and push a data object for UI mapping
    let tempCalendar: any = [];
    for (var i = 1; i <= noOfDaysInMonth; i++) {
      let iterationDate = new Date(`${forMonth}/${i}/${forYear}`);
      let isToday = false;
      let isDisabled = false;
      let inRange = false;
      let rangeStart = false;
      let rangeEnd = false;
      if (
        new Date(`${forMonth}/${i}/${forYear}`).getTime() ==
        new Date(`${todayMonth}/${todayDate}/${todayYear}`).getTime()
      ) {
        isToday = true;
      }
      if (minDate) {
        if (new Date(minDate) > iterationDate) {
          isDisabled = true;
        }
      }
      if (maxDate) {
        if (new Date(maxDate) < iterationDate) {
          isDisabled = true;
        }
      }
      tempCalendar.push({
        value: i,
        isToday,
        isDisabled,
        inRange,
        rangeEnd,
        rangeStart,
      });
    }
    // only to fill UI gaps has no functional use case
    let emptyArr = Array(emptyIndex == -1 ? 0 : emptyIndex).fill({ value: 0 });
    let tempCalendars: any = calendars;
    tempCalendars[calendarIndex] = [...emptyArr, ...tempCalendar];
    let monthVal = new Date(`${forMonth}/01/${forYear}`).getMonth();
    let calendarMonth = selectedCalendarMonth;
    calendarMonth[calendarIndex] = months[monthVal];
    let calendarYear = selectedCalendarYear;
    calendarYear[calendarIndex] = forYear.toString();
    setSelectedCalendarMonth([...calendarMonth]);
    setSelectedCalendarYear([...calendarYear]);
    setCalendars([...tempCalendars]);
  };

  const handleMonthClicked = (monthIndex: number, calendarIndex: number) => {
    // Only if mode is not isRange
    if (!isRange) {
      generateCalendar({
        forMonth: monthIndex,
        forYear: selectedCalendarYear[calendarIndex],
        calendarIndex: calendarIndex,
      });
    } else {
      if (!selectedCalendarMonth.includes(months[monthIndex - 1])) {
        generateCalendar({
          forMonth: monthIndex,
          forYear: selectedCalendarYear[calendarIndex],
          calendarIndex: calendarIndex,
        });
      }
    }
  };

  const handleYearClicked = (year: string, calendarIndex: number) => {
    // Only if mode is not isRange
    let monthIndex = months.findIndex(
      (name) => name == selectedCalendarMonth[calendarIndex]
    );
    if (!isRange) {
      generateCalendar({
        forMonth: monthIndex + 1,
        forYear: year,
        calendarIndex: calendarIndex,
      });
    } else {
      if (!selectedCalendarYear.includes(year)) {
        generateCalendar({
          forMonth: monthIndex + 1,
          forYear: year,
          calendarIndex: calendarIndex,
        });
      }
    }
  };

  const handleCalendarDateItemClicked = (dateValue: string) => {
    let convertedDate = new Date(dateValue);
    if (startDate == dateValue) {
      setStartDate("");
      getRange?.({
        start: "",
        end: endDate,
        min: rangeConfig?.min,
        max: rangeConfig?.max,
      });
      return;
    }
    if (endDate == dateValue) {
      setEndDate("");
      getRange?.({
        start: startDate,
        end: "",
        min: rangeConfig?.min,
        max: rangeConfig?.max,
      });
      return;
    }
    // case if start date exists
    if (startDate) {
      if (new Date(startDate) > convertedDate) {
        setEndDate(startDate);
        setStartDate(dateValue);
        getRange?.({
          start: dateValue,
          end: startDate,
          min: rangeConfig?.min,
          max: rangeConfig?.max,
        });
        return;
      } else {
        setEndDate(dateValue);
        getRange?.({
          start: startDate,
          end: dateValue,
          min: rangeConfig?.min,
          max: rangeConfig?.max,
        });
        return;
      }
    }
    setStartDate(dateValue);
    getRange?.({
      start: dateValue,
      end: "",
      min: rangeConfig?.min,
      max: rangeConfig?.max,
    });
  };

  //function specific for non range calendar mode
  const handleDateItemClicked = (selectedDate: string) => {
    if (isMobile) {
      setSingleDate(selectedDate);
    } else {
      onDateClick(selectedDate);
    }
  };

  const handleNextButtonClicked = (calendarIndex: number) => {
    let calendarMonth = selectedCalendarMonth[calendarIndex];
    let monthIndex = months.findIndex((name) => name == calendarMonth);
    let calendarYear = selectedCalendarYear[calendarIndex];
    let currentCalendar = `${monthIndex + 1}/01/${calendarYear}`;
    // increment the month
    let nextMonth = incrementMonth(currentCalendar);
    generateCalendar({
      forMonth: nextMonth.getMonth() + 1,
      forYear: nextMonth.getFullYear(),
      calendarIndex: 0,
    });
    if (isRange) {
      nextMonth = incrementMonth(nextMonth);
      generateCalendar({
        forMonth: nextMonth.getMonth() + 1,
        forYear: nextMonth.getFullYear(),
        calendarIndex: 1,
      });
    }
  };

  const handlePreviousButtonClicked = (calendarIndex: number) => {
    let calendarMonth = selectedCalendarMonth[calendarIndex];
    let monthIndex = months.findIndex((name) => name == calendarMonth);
    let calendarYear = selectedCalendarYear[calendarIndex];
    let currentCalendar = `${monthIndex + 1}/01/${calendarYear}`;
    // increment the month
    let previousMonth = decrementMonth(currentCalendar);
    console.log(previousMonth, "previousMonth");
    generateCalendar({
      forMonth: previousMonth.getMonth() + 1,
      forYear: previousMonth.getFullYear(),
      calendarIndex: 1,
    });
    if (isRange) {
      previousMonth = decrementMonth(previousMonth);
      generateCalendar({
        forMonth: previousMonth.getMonth() + 1,
        forYear: previousMonth.getFullYear(),
        calendarIndex: 0,
      });
    }
  };

  const incrementMonth = (requestedDate: any) => {
    let nextMonth = new Date(requestedDate);
    console.log(nextMonth, "nextMonth");
    if (nextMonth.getMonth() == 11) {
      nextMonth = new Date(nextMonth.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(
        nextMonth.getFullYear(),
        nextMonth.getMonth() + 1,
        1
      );
    }
    return nextMonth;
  };

  const decrementMonth = (requestedDate: any) => {
    let previousMonth = new Date(requestedDate);
    console.log(previousMonth.getMonth(), "previousMonth.getMonth()");
    if (previousMonth.getMonth() == 0) {
      previousMonth = new Date(previousMonth.getFullYear() - 1, 11, 1);
    } else {
      previousMonth = new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() - 1,
        1
      );
    }
    return previousMonth;
  };
  return (
    <div
      className={`n-picker-wrapper ${
        !isRange ? "n-picker-wrapper-width" : ""
      } n-picker-${align}-container`}
    >
      <div
        className="n-closeicon-wrapper"
        onClick={() => {
          onClose();
        }}
      >
        <SvgIcClose />
      </div>
      <div className="n-picker-calendar-group">
        {calendars[0].length && (
          <Calendar
            onDateClick={
              isRange
                ? (dateVal: string) => handleCalendarDateItemClicked(dateVal)
                : handleDateItemClicked
            }
            selectedMonth={selectedCalendarMonth[0]}
            selectedYear={selectedCalendarYear[0]}
            monthHandler={(monthIndex: number) =>
              handleMonthClicked(monthIndex, 0)
            }
            yearHandler={(year: string) => {
              handleYearClicked(year, 0);
            }}
            isRange={isRange}
            from={startDate}
            to={endDate}
            calendar={calendars[0]}
            handleNextButtonClicked={() => {
              handleNextButtonClicked(0);
            }}
            handlePreviousButtonClicked={() => {
              handlePreviousButtonClicked(0);
            }}
          />
        )}
        {isRange && calendars[1].length ? (
          <>
            <div className="n-picker-divider" />{" "}
            <Calendar
              onDateClick={(dateVal: string) =>
                handleCalendarDateItemClicked(dateVal)
              }
              isRange={isRange}
              from={startDate}
              to={endDate}
              selectedMonth={selectedCalendarMonth[1]}
              selectedYear={selectedCalendarYear[1]}
              calendar={calendars[1]}
              monthHandler={(monthIndex: number) =>
                handleMonthClicked(monthIndex, 1)
              }
              yearHandler={(year: string) => {
                handleYearClicked(year, 1);
              }}
              handleNextButtonClicked={() => {
                handleNextButtonClicked(1);
              }}
              handlePreviousButtonClicked={() => {
                handlePreviousButtonClicked(1);
              }}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      {isRange && rangeConfig ? (
        <div className="n-picker-footer">
          <div className="n-picker-footer-date-group">
            <div className="n-picker-footer-date-item">
              <span>Start Date</span>
              <span>{rangeConfig.start ? rangeConfig.start : "--"}</span>
            </div>
            <div className="n-picker-footer-date-item">
              <span>End Date</span>
              <span>{rangeConfig.end ? rangeConfig.end : "--"}</span>
            </div>
          </div>
          <div className="n-picker-footer-button">
            <Button
              disabled={rangeConfig.end && rangeConfig.start ? false : true}
              onClick={() => {
                onConfirmRange?.(rangeConfig);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      ) : (
        <div className="n-picker-single-footer">
          <div className="n-picker-single-footer-date-group">
            <div className="n-picker-single-footer-date-item">
              <span>{singleDate ? singleDate : "--"}</span>
            </div>
          </div>
          <div className="n-picker-single-footer-button">
            <Button
              disabled={singleDate ? false : true}
              onClick={() => {
                onDateClick(singleDate);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.defaulProps = {
  dateVal: "",
  isRange: false,
  rangeConfig: {},
  getRange: () => {},
};

export default React.memo(DatePicker);
