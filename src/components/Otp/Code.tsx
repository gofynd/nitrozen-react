import React, { useState, useEffect } from "react";
import "./Code.scss";

export interface CodeProps {
  fields: 4 | 6;
  getCode: Function;
  label: string;
}

const Code = (props: CodeProps) => {
  const { fields, getCode, label, ...restProps } = props;
  const [labelFocus, setlabelFocus] = useState("");
  const [codeArr, setCodeArr] = useState<string[]>([]);

  useEffect(() => {
    let codeArrEnum = Array(fields).fill("");
    setCodeArr(codeArrEnum);
    let firstField = document.getElementById(`code-input-${0}`);
    firstField?.focus();
  }, [fields]);

  function onInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    if (event.target.value == "") {
      handleBackSpace(index);
    }
    // Replace the user input to allow only numbers
    let codeInput = event.target.value.replace(/[^0-9]+/g, "");
    if (codeInput && codeInput.length <= 1) {
      let tempCodeArr = [...codeArr];
      tempCodeArr[index] = codeInput;
      setCodeArr(tempCodeArr);
      getCode(tempCodeArr.join(""));
      goToNextField(index);
      setlabelFocus("n-code-focused-label");
    }
  }

  function goToNextField(currentIndex: number) {
    if (currentIndex + 1 <= fields - 1) {
      let nextField = document.getElementById(`code-input-${currentIndex + 1}`);
      nextField?.focus();
    }
  }

  function handleBackSpace(currentIndex: number) {
    if (currentIndex >= 0 && currentIndex <= fields - 1) {
      let tempCodeArr = [...codeArr];
      tempCodeArr[currentIndex] = "";
      setCodeArr(tempCodeArr);
      getCode(tempCodeArr.join(""));
      let prevField = document.getElementById(`code-input-${currentIndex - 1}`);
      prevField?.focus();
    }
  }
  function handleClick() {
    setlabelFocus("n-code-focused-label");
  }
  function handleBlur() {
    if (!codeArr.join("").length) {
      setlabelFocus("");
    }
  }
  return (
    <div className="n-code-main">
      <div className={`n-code-label-container ${labelFocus}`}>
        <label className="n-code-label">{label}</label>
      </div>
      <div className={`n-code-field-container`}>
        {codeArr.map((value, index) => {
          return (
            <input
              id={"code-input-" + index}
              value={value}
              type="text"
              onClick={handleClick}
              onBlur={handleBlur}
              onChange={(e) => onInputChange(e, index)}
              className={`n-code-input-field ${`n-code-${fields}`}`}
            />
          );
        })}
      </div>
    </div>
  );
};

Code.defaulProps = {
  fields: 4,
  label: "",
};

export default React.memo(Code);
