import React, { memo } from "react";
import uuid from "../../utils/uuids";
import "./TabItem.scss";

export interface TabItemProps {
  id?: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  icon?: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
}

const TabItem = React.forwardRef<HTMLLIElement, TabItemProps>(
  (props: TabItemProps, ref) => {
    const { id, children, onClick, className, style, icon, ...restProps } =
      props;
    return (
      <li
        id={id}
        className={`n-tab-item ${className ?? ""}`}
        style={style ?? {}}
        {...restProps}
        ref={ref}
      >
        <button
          role="tab"
          className="n-tab-btn"
          type="button"
          onClick={onClick}
        >
          {icon ? <span className="n-tab-icon">{icon}</span> : null}
          <span>{children}</span>
        </button>
      </li>
    );
  }
);

TabItem.defaultProps = {
  id: "n-tab-item" + uuid(),
  children: <></>,
};

export default memo(TabItem);
