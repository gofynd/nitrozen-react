import React, { useState, useEffect } from "react";
import { SvgIcClose } from "../../assets/svg-components";
import "./DatePicker.scss";
import Calendar from "./Calendar";
import Button from "../Button/Button";
export interface DatePickerProps {
  dateVal?: string;
  isRange?: boolean;
  onDateClick: Function;
  onClose: Function;
  min?: string;
  max?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const { dateVal, isRange, onDateClick, onClose, min, max } = props;

  const [days, setDays] = useState([
    { name: "S", enum: 7 },
    { name: "M", enum: 1 },
    { name: "T", enum: 2 },
    { name: "W", enum: 3 },
    { name: "T", enum: 4 },
    { name: "F", enum: 5 },
    { name: "S", enum: 6 },
  ]);

  const handleDateItemClicked = (selectedDate: string) => {
    onDateClick(selectedDate);
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
          onDateClick={handleDateItemClicked}
          dateVal={dateVal}
          isRange={isRange}
          min={min}
          max={max}
        />
        {isRange ? (
          <>
            <div className="n-picker-divider" />{" "}
            <Calendar
              onDateClick={handleDateItemClicked}
              dateVal={dateVal}
              isRange={isRange}
            />
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
              <span>Apr 18, 2022</span>
            </div>
            <div className="n-picker-footer-date-item">
              <span>End Date</span>
              <span>Apr 18, 2022</span>
            </div>
          </div>
          <div className="n-picker-footer-button">
            <Button>Confirm</Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

DatePicker.defaulProps = { dateVal: "", isRange: false };

export default React.memo(DatePicker);
