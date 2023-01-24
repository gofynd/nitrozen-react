import React, { useState, useEffect } from "react";
import "./Grid.scss";

export interface GridProps {
  template?: string;
  tabletTemplate?: string;
  mobileTemplate?: string;
  gap?: any;
  align?: string;
  justify?: string;
  className?: string;
  style?: React.CSSProperties;
  children: any;
}

const Grid = (props: GridProps) => {
  const {
    template,
    tabletTemplate,
    mobileTemplate,
    gap,
    align,
    justify,
    className,
    style,
    children,
    ...restProps
  } = props;

  const [responsiveTemplate, setResponsiveTemplate] = useState(template);

  useEffect(() => {
    /* Regular */
    if (getWindowWidth() > 768) {
      setResponsiveTemplate(template);
    }

    if (getWindowWidth() <= 768) {
      setResponsiveTemplate(tabletTemplate);
    }

    if (getWindowWidth() <= 480) {
      setResponsiveTemplate(mobileTemplate);
    }
    // console.log("getWindowWidth()", getWindowWidth());
  }, []);

  const getWindowWidth = () => {
    return window.document.documentElement.clientWidth;
  };

  return (
    <div
      style={{
        gridTemplateColumns: responsiveTemplate,
        gap: gap,
        alignItems: align,
        justifyItems: justify,
        ...(style ?? {}),
      }}
      className={`nitrozen-grid-container nitrozen-grid-font-size ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  template: "1fr 1fr 1fr 1fr",
  gap: "10px 10px",
  align: "center",
};

export default Grid;
