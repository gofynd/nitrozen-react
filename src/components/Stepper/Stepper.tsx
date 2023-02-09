import React, { useState, useEffect, useCallback } from "react";
import classnames from "classnames";
import "./Stepper.scss";
import { SvgDone, SvgPriorityHigh } from "../../assets/svg-components";

export enum StepState {
  "Current" = "Current",
  "Upcoming" = "Upcoming",
  "Disabled" = "Disabled",
  "Issue" = "Issue",
  "Completed" = "Completed",
}

export type ItemsType = Array<{
  name: string | number;
  description?: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
  state: StepState;
  content?: string;
}>;

export interface StepperProps {
  activeIndex?: number;
  maxActiveIndex?: number;
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  showProgress?: boolean;
  className?: string;
  style?: React.CSSProperties;
  progressStrokeColor?: string;
}

export interface ProgressCircleProps {
  items?: ItemsType;
  color?: string;
}

const Stepper = (props: StepperProps) => {
  const {
    items = [],
    activeIndex = 1,
    onClick,
    maxActiveIndex = 0,
    isHorizontal,
    heading,
    showProgress = false,
    className = "",
    style,
    progressStrokeColor,
    ...restProps
  } = props;

  const [activeIndexState, setActiveIndex] = useState(activeIndex);
  const isVertical: boolean = !isHorizontal;
  const defaultButtonStyles: React.CSSProperties = {
    padding: "6px 9px",
    minWidth: "120px",
    background: "#419266",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  useEffect(() => {
    if (isVertical) {
      setDefaultStepperStates();
    }
  }, [activeIndex]);

  const setDefaultStepperStates = useCallback(() => {
    items.map((item) => {
      !item.isCompleted && (item.isCompleted = false);
      !item.isInactive && (item.isInactive = false);
      !item.buttonStyles && (item.buttonStyles = {});
      return item;
    });
  }, [items]);

  const stepClick = useCallback(
    (index: number, item?: object) => {
      if (isVertical) {
        onClick?.({ index, item });
        return;
      }
      if (index <= maxActiveIndex) {
        setActiveIndex(index);
        onClick?.({ index, item });
      }
    },
    [isVertical, onClick, maxActiveIndex]
  );

  const encodeDescription = useCallback((description: string) => {
    const lines: string[] = description.split("\n");
    if (lines.length === 1) {
      return description;
    }
    const elements = lines.map((line, index) => <div key={index}>{line}</div>);
    return elements;
  }, []);

  const getClassNameByState = useCallback((state: StepState) => {
    switch (state) {
      case StepState.Current:
        return "current";
      case StepState.Upcoming:
        return "upcoming";
      case StepState.Disabled:
        return "disabled";
      case StepState.Issue:
        return "issue";
      case StepState.Completed:
        return "completed";
      default:
        return "";
    }
  }, []);

  const getStepperCircleContent = useCallback(
    (
      index: number,
      state: StepState,
      icon: React.ElementType | null,
      iconSize: string = "22",
      iconColor: string = "#419266",
      extraIconProps: object = {}
    ) => {
      if (state === StepState.Issue) {
        return <SvgPriorityHigh color="#1E7B74" />;
      }

      if (state === StepState.Completed) {
        return <SvgDone color="#1ECCB0" />;
      }

      if (!icon) {
        return index + 1;
      }

      const iconProps = {
        style: {
          color: iconColor,
          fontSize: `${iconSize}px`,
        },
        ...extraIconProps,
      };

      const Icon = icon;
      return <Icon {...iconProps} />;
    },
    []
  );

  return (
    <>
      <div
        className={classnames({
          "nitrozen-stepper": true,
          vertical: isVertical,
          horizontal: isHorizontal,
          [className]: className?.length,
        })}
        style={style ?? {}}
        {...restProps}
      >
        <div className="nitrozen-stepper-container">
          <div
            className={classnames({
              "heading-progress": heading || showProgress,
            })}
          >
            {heading && <span className="stepper-heading">{heading}</span>}
            {showProgress && isVertical && (
              <ProgressCircle items={items} color={progressStrokeColor} />
            )}
          </div>
          {items.map((item, index) => {
            return (
              <div
                className={classnames({
                  "nitrozen-stepper-group": true,
                  "active-group": !isDisabled(index),
                  "nitrozen-pointer": !isVertical && !isDisabled(index),
                  "inactive-stepper": isVertical && item.isInactive,
                })}
                onClick={() => stepClick(index, item)}
                data-testid={`stepper-${index}`}
                key={index}
              >
                {/* Horizontal Stepper Circle states */}
                {isHorizontal && (
                  <div className="nitrozen-circle-outer-container">
                    <div
                      className={`nitrozen-circle-outer ${getClassNameByState(
                        item?.state
                      )}`}
                    >
                      {getStepperCircleContent(
                        index,
                        item.state,
                        item?.icon ?? null,
                        item.iconSize,
                        item.iconColor,
                        item.extraIconProps
                      )}
                    </div>
                    <div className="stepper-header-description">
                      <div className="header-description">
                        <div
                          className={classnames({
                            "nitrozen-text": true,
                            "heading-center": !item.description,
                          })}
                        >
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Vertical Stepper Circle states */}
                {isVertical && (
                  <div className="nitrozen-circle-outer-container">
                    <div
                      className={`nitrozen-circle-outer nitrozen-circle-border ${getClassNameByState(
                        item.state
                      )}`}
                    >
                      <span
                        className={`nitrozen-circle-content ${getClassNameByState(
                          item.state
                        )}`}
                      >
                        {getStepperCircleContent(
                          index,
                          item.state,
                          item?.icon ?? null,
                          item.iconSize,
                          item.iconColor,
                          item.extraIconProps
                        )}
                      </span>
                    </div>
                    <div className="stepper-header-description">
                      <div className="header-description">
                        <div
                          className={classnames({
                            "nitrozen-text": true,
                            "heading-center": !item.description,
                          })}
                        >
                          {item.name}
                        </div>
                      </div>
                    </div>
                    <div
                      className={classnames({
                        "nitrozen-bar": true,
                        "completed-bar": index === items?.length - 1,
                      })}
                    ></div>
                    {item.content && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  function isActive(index: number) {
    return index === activeIndexState;
  }
  function isChecked(index: number) {
    return (
      index !== activeIndexState &&
      index <= Math.max(maxActiveIndex, activeIndexState)
    );
  }
  function isDisabled(index: number) {
    return (
      index <= items.length - 1 &&
      index > Math.max(maxActiveIndex, activeIndexState)
    );
  }
};

function ProgressCircle(props: ProgressCircleProps) {
  const { items = [], color } = props;
  const stroke = 126;

  const getProgress = useCallback(
    (arg?: string) => {
      const itemsLength = items.length;
      let completed: number = 0;
      if (!items) return completed;
      items?.map((item) => {
        item.isCompleted && completed++;
        return item;
      });
      if (arg === "get-steps-completed") return `${completed}/${itemsLength}`;
      const percentage: number = Math.floor((completed / itemsLength) * 100);
      const strokeDashoffset = stroke - (stroke * percentage) / 100;
      return Math.floor(strokeDashoffset);
    },
    [props.items]
  );

  return (
    <div className="progress-circle">
      <div className="svg-circle-container">
        <svg>
          <circle
            cx="25"
            cy="25"
            r="20"
            style={{ strokeWidth: "3px" }}
          ></circle>
          <circle
            style={{
              strokeDashoffset: getProgress(),
              stroke: color,
              strokeWidth: "3px",
            }}
            cx="25"
            cy="25"
            r="20"
          ></circle>
        </svg>
        <span>{getProgress("get-steps-completed")}</span>
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  items: [],
  maxActiveIndex: -1,
  activeIndex: 0,
  isHorizontal: false,
  progressStrokeColor: "#419266",
};

export default React.memo(Stepper);
