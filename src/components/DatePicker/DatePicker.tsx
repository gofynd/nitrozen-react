import React, { useState, useEffect, useRef } from "react";
import { SvgIcClose } from "../../assets/svg-components";
import "./DatePicker.scss";
import Calendar from "./Calendar";
import Button from "../Button/Button";
import { daysInMonth, months, getFormattedDate } from "../../utils/dateHandler";

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
  } = props;

  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");

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
  const datePickerRef = useRef<any>(null);
  const [dropDownStyle, setDropDownStyle] = useState({});

  useEffect(() => {
    if (window.innerWidth < 426) {
      setIsMobile(true);
    } else {
      calculateDropDownPos();
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
      setStartDate(rangeConfig?.start || "");
      setEndDate(rangeConfig?.end || "");
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
      return getRange?.({
        start: "",
        end: new Date(endDate),
        min: rangeConfig?.min,
        max: rangeConfig?.max,
      });
    }
    if (endDate == dateValue) {
      setEndDate("");
      return getRange?.({
        start: new Date(startDate),
        end: "",
        min: rangeConfig?.min,
        max: rangeConfig?.max,
      });
    }
    // case if start date exists
    if (startDate) {
      if (new Date(startDate) > convertedDate) {
        setEndDate(startDate);
        setStartDate(dateValue);
        return getRange?.({
          start: new Date(dateValue),
          end: new Date(startDate),
          min: rangeConfig?.min,
          max: rangeConfig?.max,
        });
      } else {
        setEndDate(dateValue);
        return getRange?.({
          start: new Date(startDate),
          end: new Date(dateValue),
          min: rangeConfig?.min,
          max: rangeConfig?.max,
        });
      }
    }
    setStartDate(dateValue);
    getRange?.({
      start: new Date(dateValue),
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
      onDateClick?.(selectedDate);
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

  const calculateDropDownPos = () => {
    const dateRef = datePickerRef?.current;
    if (!dateRef) return;
    const datePickerModal = dateRef.getBoundingClientRect();
    const rightSpace = window.innerWidth - datePickerModal.width;
    if (datePickerModal.right > rightSpace) setDropDownStyle({ right: 0 });
    else setDropDownStyle({ left: 0 });
  };
  return (
    <div
      data-testid="picker-wrapper"
      ref={datePickerRef}
      className={`n-picker-wrapper ${!isRange ? "n-picker-wrapper-width" : ""}`}
      style={dropDownStyle}
    >
      <div
        data-testid="n-closeicon-wrapper"
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
            calendarId={"c1"}
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
            <div
              className="n-picker-divider"
              data-testid="date-picker-divider"
            />{" "}
            <Calendar
              calendarId={"c2"}
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
            <div
              className="n-picker-footer-date-item"
              data-testid="picker-startdate"
            >
              <span>Start Date</span>
              <span>
                {rangeConfig.start ? getFormattedDate(rangeConfig.start) : "--"}
              </span>
            </div>
            <div
              className="n-picker-footer-date-item"
              data-testid="picker-enddate"
            >
              <span>End Date</span>
              <span>
                {rangeConfig.end ? getFormattedDate(rangeConfig.end) : "--"}
              </span>
            </div>
          </div>
          <div className="n-picker-footer-button">
            <Button
              disabled={
                rangeConfig.end && getFormattedDate(rangeConfig.start)
                  ? false
                  : true
              }
              onClick={() => {
                onConfirmRange?.(rangeConfig);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="n-picker-single-footer"
          data-testid="n-picker-single-footer"
        >
          <div className="n-picker-single-footer-date-group">
            <div
              className="n-picker-single-footer-date-item"
              data-testid="single-footer-value"
            >
              <span>{singleDate ? getFormattedDate(singleDate) : "--"}</span>
            </div>
          </div>
          <div className="n-picker-single-footer-button">
            <Button
              disabled={singleDate ? false : true}
              onClick={() => {
                onDateClick?.(singleDate);
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
