import React, { useState, useEffect } from "react";
import { SvgIcClose } from "../../assets/svg-components";
import "./DatePicker.scss";
import Calendar from "./Calendar";
import Button from "../Button/Button";
interface RangeConfigProps {
  start: {
    dateValue: string;
    min: string;
  };
  end: {
    dateValue: string;
    max: string;
  };
}
export interface DatePickerProps {
  dateVal?: string;
  isRange?: boolean;
  onDateClick: Function;
  onClose: Function;
  min?: string;
  max?: string;
  rangeConfig: RangeConfigProps;
  getRange: Function;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    dateVal,
    isRange,
    onDateClick,
    onClose,
    min,
    max,
    rangeConfig,
    getRange,
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateItemClicked = (selectedDate: string) => {
    onDateClick(selectedDate);
  };

  useEffect(() => {
    setStartDate(rangeConfig.start.dateValue);
    setEndDate(rangeConfig.end.dateValue);
  }, []);

  const handleCalendarDateItemClicked = (dateValue: string) => {
    let convertedDate = new Date(dateValue);
    if (startDate == dateValue) {
      setStartDate("");
      getRange({
        start: "",
        end: endDate,
      });
      return;
    }
    if (endDate == dateValue) {
      setEndDate("");
      getRange({
        start: startDate,
        end: "",
      });
      return;
    }
    // case if start date exists
    if (startDate) {
      if (new Date(startDate) > convertedDate) {
        setEndDate(startDate);
        setStartDate(dateValue);
        getRange({
          start: dateValue,
          end: startDate,
        });
        return;
      } else {
        setEndDate(dateValue);
        getRange({
          start: startDate,
          end: dateValue,
        });
        return;
      }
    }
    setStartDate(dateValue);
    getRange({
      start: dateValue,
      end: "",
    });
  };

  return (
    <div
      className={`n-picker-wrapper ${!isRange ? "n-picker-wrapper-width" : ""}`}
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
        <Calendar
          onDateClick={
            isRange
              ? (dateVal: string) => handleCalendarDateItemClicked(dateVal)
              : handleDateItemClicked
          }
          dateVal={isRange ? rangeConfig.start.dateValue : dateVal}
          isRange={isRange}
          min={isRange ? rangeConfig.start.min : min}
          max={isRange ? rangeConfig.end.max : max}
          rangeConfig={rangeConfig}
          from={startDate}
          to={endDate}
        />
        {isRange ? (
          <>
            <div className="n-picker-divider" />{" "}
            {/* <Calendar
              onDateClick={(dateVal: string) => handleCalendarDateItemClicked(dateVal)}
              dateVal={rangeConfig.end.dateValue}
              isRange={isRange}
              max={rangeConfig.end.max}
              rangeConfig={rangeConfig}
              min={rangeConfig.start.min}
              from={startDate}
              to={endDate}
            /> */}
          </>
        ) : (
          <></>
        )}
      </div>
      {isRange ? (
        <div className="n-picker-footer">
          <div className="n-picker-footer-date-group">
            <div className="n-picker-footer-date-item">
              <span>Start Date</span>
              <span>
                {rangeConfig.start.dateValue
                  ? rangeConfig.start.dateValue
                  : "--"}
              </span>
            </div>
            <div className="n-picker-footer-date-item">
              <span>End Date</span>
              <span>
                {rangeConfig.end.dateValue ? rangeConfig.end.dateValue : "--"}
              </span>
            </div>
          </div>
          <div className="n-picker-footer-button">
            <Button
              disabled={
                !rangeConfig.end.dateValue || !rangeConfig.start.dateValue
              }
            >
              Confirm
            </Button>
          </div>
        </div>
      ) : (
        <></>
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
