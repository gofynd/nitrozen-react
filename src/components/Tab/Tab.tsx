import React, { memo, useEffect, useState } from "react";
import uuid from "../../utils/uuids";
import TabItem from "../TabItem";
import classnames from "classnames";
import "./Tab.scss";

export interface TabProps {
  id?: string;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Tab = (props: TabProps) => {
  const {
    id,
    tabItem,
    label,
    activeIndex,
    className,
    style,
    onTabChange,
    ...restProps
  } = props;
  const [activeTab, setActiveTab] = useState<number>(activeIndex);

  useEffect(() => {
    setActiveTab(activeIndex);
  }, [activeIndex]);

  if (activeTab > tabItem?.length) {
    throw new Error(
      "Active Tab index cannot be greater than TabItem array length !"
    );
  }

  const selectTab = (index: number, item: {} | string | number) => () => {
    setActiveTab(index);
    onTabChange?.(item);
  };

  return (
    <div
      id={id}
      style={style ?? {}}
      className={`nitrozen-tab-container ${className ?? ""}`}
      {...restProps}
    >
      <ul className="nitrozen-tab">
        {tabItem?.map((item, index) => (
          <TabItem
            onClick={selectTab(index, item)}
            className={classnames({
              "nitrozen-tab-active": activeTab === index,
            })}
            key={getItem(item, label) + index + uuid()}
            icon={getIcon(item, "icon")}
            tooltipIcon={getIcon(item, "tooltipIcon")}
            tooltipIconHoverText={getIcon(item, "tooltipIconHoverText")}
          >
            {getItem(item, label)}
          </TabItem>
        ))}
      </ul>
    </div>
  );
};

const getItem = (item: Object | string | any, label?: string) => {
  if (label) {
    return item[label] ?? item;
  }
  return item;
};

const getIcon = (item: Object | string | any, prop: string) => {
  if (item[prop]) return item[prop];
};

Tab.defaultProps = {
  id: "nitrozen-tab-item" + uuid(),
  activeIndex: 0,
  tabItem: [],
};

export default memo(Tab);
