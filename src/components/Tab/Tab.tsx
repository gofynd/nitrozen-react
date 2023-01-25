import React, { memo, useEffect, useState, useRef } from "react";
import uuid from "../../utils/uuids";
import TabItem from "../TabItem";
import classnames from "classnames";
import "./Tab.scss";
import {
  SvgIcChevronLeft,
  SvgIcChevronRight,
} from "../../assets/svg-components";

export interface TabProps {
  id?: string;
  children?: React.ReactChild;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
  appearance: "normal" | "navbar";
  overflow: "fit" | "scroll" | "arrow";
  tabs?: number;
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
    appearance,
    children,
    overflow,
    tabs,
    ...restProps
  } = props;
  const [activeTab, setActiveTab] = useState<number>(activeIndex);
  const isDragging = useRef<boolean>(false);
  const tabContainerRootRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLUListElement>(null);
  const leftNavBtnRef = useRef<HTMLButtonElement>(null);
  const rightNavBtnRef = useRef<HTMLButtonElement>(null);
  const tabsRef = useRef<HTMLLIElement[]>([]);
  const scroll = useRef<HTMLDivElement>(null);

  const pointerdown = () => {
    isDragging.current = true;
  };

  const pointerup = () => {
    if (tabContainerRef.current) {
      tabContainerRef.current.classList.remove("n-dragging");
    }
    isDragging.current = false;
  };

  const pointermove = (e: PointerEvent) => {
    if (isDragging.current) {
      if (tabContainerRef.current) {
        tabContainerRef.current.classList.add("n-dragging");
        let scrollWidth = tabContainerRef.current.scrollLeft - e.movementX;
        tabContainerRef.current.scrollLeft = scrollWidth;
        handleScrollIcon(scrollWidth);
      }
    }
  };

  const wheelmove = (e: WheelEvent) => {
    e.preventDefault();
    if (tabContainerRef.current) {
      tabContainerRef.current.classList.add("n-dragging");
      let scrollWidth = tabContainerRef.current.scrollLeft + e.deltaX;
      tabContainerRef.current.scrollLeft = scrollWidth;
      handleScrollIcon(scrollWidth);
    }
  };

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

  const handleScrollIcon = (scrollWidth: number) => {
    if (
      tabContainerRef.current &&
      leftNavBtnRef.current &&
      rightNavBtnRef.current
    ) {
      if (
        scrollWidth > 0 &&
        tabContainerRef.current.scrollWidth >
          tabContainerRef.current.clientWidth
      ) {
        leftNavBtnRef.current.style.display = "flex";
      } else {
        leftNavBtnRef.current.style.display = "none";
      }

      const maxScrollWidth =
        tabContainerRef.current?.scrollWidth -
        tabContainerRef.current?.clientWidth;

      if (
        Math.ceil(scrollWidth) >= maxScrollWidth ||
        tabContainerRef.current.scrollWidth <=
          tabContainerRef.current.clientWidth
      ) {
        rightNavBtnRef.current.style.display = "none";
      } else {
        rightNavBtnRef.current.style.display = "flex";
      }
    }
  };
  const handleScroll = (position: "left" | "right") => {
    return () => {
      if (tabContainerRef.current) {
        let scrollWidth =
          tabContainerRef.current.scrollLeft +
          (position === "left" ? -250 : 250);
        handleScrollIcon(scrollWidth);

        tabContainerRef.current.scrollLeft = scrollWidth;
      }
    };
  };

  useEffect(() => {
    if (tabsRef.current.length > 0) {
      setTimeout(() => {
        const totalWidth = tabContainerRef.current?.offsetWidth;
        const currentWidth =
          tabsRef.current[activeTab].getBoundingClientRect().width;
        if (tabContainerRef.current) {
          let scrollWidth = 0;
          tabsRef.current.forEach((tab, i) => {
            if (i < activeTab) {
              scrollWidth += tab.getBoundingClientRect().width;
            }
          });

          if (
            tabContainerRef.current.scrollWidth >
            tabContainerRef.current.clientWidth
          ) {
            tabContainerRef.current.scrollLeft = scrollWidth;
            handleScrollIcon(
              Math.min(scrollWidth, totalWidth || Number.MAX_SAFE_INTEGER)
            );
          }
          if (scroll.current) {
            scroll.current.style.left = scrollWidth + "px";
            scroll.current.style.width = currentWidth + "px";
          }
        }
      }, 0);
    }
  }, [activeTab, tabsRef.current]);

  useEffect(() => {
    if (
      tabContainerRef.current &&
      tabContainerRef.current.scrollWidth > tabContainerRef.current.clientWidth
    ) {
      let scrollWidth = tabContainerRef.current.scrollLeft;
      handleScrollIcon(scrollWidth);
      tabContainerRef.current.addEventListener("pointerdown", pointerdown);
      tabContainerRef.current.addEventListener("pointerup", pointerup);
      tabContainerRef.current.addEventListener("pointerout", pointerup);
      tabContainerRef.current.addEventListener("pointermove", pointermove);
      tabContainerRef.current.addEventListener("wheel", wheelmove);
    }

    return () => {
      if (
        tabContainerRef.current &&
        tabContainerRef.current.scrollWidth >
          tabContainerRef.current.clientWidth
      ) {
        tabContainerRef.current.removeEventListener("pointerdown", pointerdown);
        tabContainerRef.current.removeEventListener("pointerup", pointerup);
        tabContainerRef.current.removeEventListener("pointermove", pointermove);
        tabContainerRef.current.removeEventListener("pointerout", pointerup);
        tabContainerRef.current.removeEventListener("wheel", wheelmove);
      }
    };
  }, [tabContainerRef.current]);

  useEffect(() => {
    if (
      tabContainerRef.current &&
      tabsRef.current &&
      tabContainerRootRef.current
    ) {
      if (
        tabContainerRef.current.scrollWidth <=
        tabContainerRef.current.clientWidth
      ) {
        tabContainerRootRef.current.classList.remove("n-tab-scroll");
      }
    }
  }, [tabItem, tabContainerRef, tabsRef, tabContainerRootRef]);

  return (
    <>
      <div
        id={id}
        style={style ?? {}}
        className={`n-tab-container n-tab-scroll ${
          appearance === "navbar" ? "n-tab-navbar" : ""
        } ${overflow === "fit" ? "n-overflow-fit" : "n-overflow-scroll"} ${
          className ?? ""
        }`}
        {...restProps}
        ref={tabContainerRootRef}
      >
        {overflow === "arrow" && (
          <button
            className="n-nav-btn n-icon-btn-left"
            onClick={handleScroll("left")}
            ref={leftNavBtnRef}
          >
            <SvgIcChevronLeft className="n-scroll-left-icon" />
          </button>
        )}
        <ul className="n-tab" ref={tabContainerRef}>
          {tabItem
            ?.filter((_, index) => !tabs || index < tabs)
            ?.map((item, index) => (
              <TabItem
                onClick={selectTab(index, item)}
                ref={(el: HTMLLIElement) => (tabsRef.current[index] = el)}
                className={classnames({
                  "n-tab-active": activeTab === index,
                })}
                key={getItem(item, label) + index + uuid()}
                icon={getIcon(item, "icon")}
              >
                {getItem(item, label)}
              </TabItem>
            ))}
          <div className="n-d-scroll" ref={scroll} />
        </ul>
        {overflow === "arrow" && (
          <button
            className="n-nav-btn n-icon-btn-right"
            onClick={handleScroll("right")}
            ref={rightNavBtnRef}
          >
            <SvgIcChevronRight className="n-scroll-right-icon" />
          </button>
        )}
      </div>
      {children ? children : null}
    </>
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
  id: "n-tab-item" + uuid(),
  activeIndex: 0,
  tabItem: [],
  appearance: "normal",
  overflow: "fit",
};

export default memo(Tab);
