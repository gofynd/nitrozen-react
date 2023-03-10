import { GridProps, ScreenTypes } from "./Grid.interfaces";

export const calculateCustomGridCss = (
  props: GridProps,
  deviceType: ScreenTypes
) => {
  let currentCustomStyles = {
    gridTemplateColumns: "",
  };
  if (props.customWidth && props.customWidth.length > 0) {
    let currentColumns =
      props.columns[deviceType] || props.columns[ScreenTypes.DESKTOP] || 1;
    let gridColumns = "";
    for (let j = 0; j < currentColumns; j++) {
      const haveCustomWidth = props.customWidth.filter(
        (el) => el.columnNumber === j + 1
      );
      if (haveCustomWidth.length > 0) {
        if (typeof haveCustomWidth[0].customWidth === "number") {
          gridColumns += ` ${haveCustomWidth[0].customWidth}%`;
          // In Number we will make it to percentage
        } else if (typeof haveCustomWidth[0].customWidth === "string") {
          gridColumns += ` ${haveCustomWidth[0].customWidth}`;
          // If its String like 100px 200px 1rem 2rem
        }
      } else {
        // If no Provided any Custom Width it will be remaining to 1fr
        gridColumns += " 1fr";
      }
    }
    currentCustomStyles.gridTemplateColumns = gridColumns;
  }
  return currentCustomStyles;
};
