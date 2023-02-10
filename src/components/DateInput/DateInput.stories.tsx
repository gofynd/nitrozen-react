import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInput, { DateInputProps } from "./DateInput";

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
      control: "text",
      description: "Pre value if any, format : mm/dd/yyyy",
    },
    dateValidation: {
      control: "function",
      description: "Custom function sent as props for date validation",
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: any) => (
  <div
    className="main-div space-between custom-date-story"
    style={{ height: "650px" }}
  >
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
};

export const DateRangeSample = (args: DateInputProps) => {
  const [rangeConfig, setRangeConfig] = useState({
    start: "",
    end: "",
    min: "",
    max: "",
  });

  return (
    <div
      className="main-div space-between custom-date-story"
      style={{ height: "650px", justifyContent: "unset" }}
    >
      <div className="state-date">
        {rangeConfig.start
          ? `Selected Range: ${rangeConfig.start} to ${rangeConfig.end}`
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
    let splitDate = val.split("/");
    let currentYear = new Date().getUTCFullYear();
    if (parseInt(splitDate[2]) > currentYear) {
      setError("Your birthday cannot be greater than today");
    } else {
      setError("");
    }
  };

  return (
    <div
      className="main-div space-between custom-date-story"
      style={{ height: "650px", justifyContent: "unset" }}
    >
      <div className="state-date">
        {date ? `Date: ${date}` : `Start typing to see the written date value`}
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
          useDatePicker={false}
        />
      </div>
    </div>
  );
};
