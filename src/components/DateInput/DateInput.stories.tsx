import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInput, { DateInputProps } from "./DateInput";
import { getFormattedDate } from "../../utils/dateHandler";

export default {
  title: "Components/Input/DateInput",
  component: DateInput,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    validationState: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Describes the state of validity",
    },
    validationLabel: {
      type: "string",
      description: "The description of validation message",
    },
    validationStyle: { control: "object" },
    validationClassName: { control: "text" },
    helperText: { control: "text", defaultValue: "" },
    useDatePicker: {
      control: { type: "select" },
      options: [true, false],
      defaultValue: false,
    },
    required: {
      control: { type: "select" },
      options: [true, false],
      defaultValue: false,
    },
    dateValue: {
      control: "date",
      description: "Pre value if any, format : Date",
    },
    dateValidation: {
      control: "function",
      description: "Custom function sent as props for date validation",
    },
    onConfirmRange: {
      control: "function",
      description:
        "Function that returns range value when confirm button is clicked",
    },
    rangeConfig: {
      control: { type: "object" },
      description:
        "Contains data of the range and min and max values of the calendar",
    },
    defaultValidation: {
      control: { type: "boolean" },
      description: "Flag to disable default validation",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: any) => (
  <div className="main-div custom-date-story" style={{ height: "650px" }}>
    <div className="date-input-wrapper">
      <DateInput {...args} />
    </div>
  </div>
);

export const DateInputPlayground = Template.bind({});

DateInputPlayground.args = {
  label: "Birthday",
  required: true,
  useDatePicker: false,
  helperText: "Enter your birth date",
  id: "customfynd",
  getDateValue: () => {},
  isRange: false,
  dateValue: new Date(),
};

export const DateRangeSample = (args: DateInputProps) => {
  var nextDay = new Date(new Date());
  nextDay.setDate(new Date().getDate() + 1);

  const [rangeConfig, setRangeConfig] = useState({
    start: new Date(),
    end: nextDay,
    min: "",
    max: "",
  });

  return (
    <div
      className="main-div custom-date-story"
      style={{
        height: "650px",
        justifyContent: "unset",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <div className="state-date">
        {rangeConfig.start
          ? `Selected Range: ${getFormattedDate(
              rangeConfig.start
            )} to ${getFormattedDate(rangeConfig.end)}`
          : `Start selecting a range`}
      </div>
      <div className="date-input-wrapper">
        <DateInput
          useDatePicker={true}
          label="Select your leaves"
          helperText={"Select a range"}
          id={"range-field"}
          isRange={true}
          rangeConfig={rangeConfig}
          onConfirmRange={(range: any) => {
            setRangeConfig(range);
          }}
        />
      </div>
    </div>
  );
};

export const DateValidationSample = (args: DateInputProps) => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const dateValidator = (val: string) => {
    let formattedDate = getFormattedDate(val);
    let splitDate = formattedDate.split("/");
    let currentYear = new Date().getUTCFullYear();
    if (parseInt(splitDate[2]) > currentYear) {
      setError("Your birthday cannot be greater than today");
    } else {
      setError("");
    }
  };

  return (
    <div
      className="main-div  custom-date-story"
      style={{ height: "650px", justifyContent: "unset" }}
    >
      <div className="state-date">
        {date ? `Date: ${getFormattedDate(date)}` : `Select a date`}
      </div>
      <div className="date-input-wrapper">
        <DateInput
          label="Birthdate"
          required={true}
          helperText={"Enter your birth date"}
          dateValue={date}
          getDateValue={(val: any) => {
            setDate(val);
            dateValidator(val);
          }}
          validationState={error ? "error" : ""}
          validationText={error}
          id={"birth-field"}
          isRange={false}
          useDatePicker={true}
        />
      </div>
    </div>
  );
};
