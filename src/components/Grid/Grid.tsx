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

const getWindowWidth = () => {
  return window.document.documentElement.clientWidth;
};

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
    const windowWidth = getWindowWidth();

    if (windowWidth > 768) {
      setResponsiveTemplate(template);
    } else if (windowWidth <= 480) {
      setResponsiveTemplate(mobileTemplate);
    } else if (windowWidth <= 768) {
      setResponsiveTemplate(tabletTemplate);
    }
  }, []);

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
