import React from "react";
import { memo } from "react";
import { GridProps, ScreenTypes } from "./Grid.interfaces";
import { useGridStyles } from "./useGridStyles";
import "./Grid.scss";

const Grid: React.FC<GridProps> = (props) => {
  const { onGridContainerClick, children, style } = props;

  const { deviceType, customStyles } = useGridStyles(props);

  const isOverflow =
    props.overflow?.[ScreenTypes.MOBILE] && deviceType === ScreenTypes.MOBILE;

  // If the User has asked for overflow in Mobile size then this will be true and we want every children to follow row 1 only as we want everything in row one

  const customClassName = `n-grid-block-${
    props.columns[deviceType] || props.columns[ScreenTypes.DESKTOP] || 1
  }`;

  // Whenever there is no customWidth we will directly render the fixed class based on columns

  return (
    <div
      className={`n-grid-container ${
        !props.customWidth && !isOverflow && customClassName
      } 
      ${isOverflow ? "overflow" : ""}  `}
      style={{ ...style, ...customStyles }}
      onClick={onGridContainerClick}
      data-testid={`grid-container`}
    >
      {children}
    </div>
  );
};

export default memo(Grid);
