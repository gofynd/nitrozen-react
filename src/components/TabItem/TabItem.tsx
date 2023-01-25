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
        className={`nitrozen-tab-item ${className ?? ""}`}
        style={style ?? {}}
        {...restProps}
        ref={ref}
      >
        <button role="tab" className="tab-btn" type="button" onClick={onClick}>
          {icon ? <span className="tab-icon">{icon}</span> : null}
          <span>{children}</span>
        </button>
      </li>
    );
  }
);

TabItem.defaultProps = {
  id: "nitrozen-tab-item" + uuid(),
  children: <></>,
};

export default memo(TabItem);
