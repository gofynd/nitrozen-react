import React, { useState, useEffect, useCallback } from "react";
import classnames from "classnames";
import "./Stepper.scss";
import {
  SvgCheckCircle,
  SvgCircleProgress,
  SvgCircleDisabled,
} from "../../assets/svg-components";

type ItemsType = Array<{
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

  const getSelectedIcon = useCallback(
    (
      icon: React.ElementType,
      iconSize: string = "22",
      iconColor: string = "#419266",
      extraIconProps: object = {}
    ) => {
      if (!icon) return <></>;
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
                <div className="nitrozen-flex-center bar-ball-container">
                  {/* Horizontal Stepper Circle states */}
                  {isHorizontal && isActive(index) && (
                    <div className="nitrozen-circle-outer-container">
                      <SvgCircleProgress className="progress-svg" />
                    </div>
                  )}
                  {isHorizontal && isChecked(index) && (
                    <div className="nitrozen-cirle-check-container">
                      <SvgCheckCircle className="completed-svg" />
                    </div>
                  )}
                  {isHorizontal && isDisabled(index) && (
                    <div className="nitrozen-circle-outer-container">
                      <SvgCircleDisabled />
                    </div>
                  )}

                  {/* Vertical Stepper Circle states */}
                  {isVertical && item.isCompleted && (
                    <div className="nitrozen-cirle-check-container">
                      <div className="nitrozen-circle-outer"></div>
                      <div className="nitrozen-checkmark"></div>
                    </div>
                  )}
                  {isVertical && !item.isCompleted && !item.icon && (
                    <div className="nitrozen-circle-outer-container index-container">
                      <div className="nitrozen-circle-outer"></div>
                      <div className="index-number">{index + 1}</div>
                    </div>
                  )}

                  {isVertical && !item.isCompleted && item.icon && (
                    <div className="nitrozen-circle-outer-container stepper-icon-container">
                      <div className="nitrozen-circle-outer"></div>
                      <div className="stepper-icon active-stepper">
                        {getSelectedIcon(
                          item.icon,
                          item.iconSize,
                          item.iconColor,
                          item.extraIconProps
                        )}
                      </div>
                    </div>
                  )}

                  {/* Bar states */}
                  {index < Math.max(maxActiveIndex, activeIndexState) && (
                    <div
                      className={classnames({
                        "nitrozen-bar nitrozen-active": true,
                        "completed-bar": isVertical && item.isCompleted,
                      })}
                    ></div>
                  )}
                  {index > Math.max(maxActiveIndex, activeIndexState) - 1 && (
                    <div
                      className={classnames({
                        "nitrozen-bar nitrozen-disabled": true,
                        "completed-bar": isVertical && item.isCompleted,
                      })}
                    ></div>
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
                    {item.description && (
                      <div className="stepper-description">
                        {encodeDescription(item.description.toString())}
                      </div>
                    )}
                  </div>

                  {/* Vertical stepper CTA */}
                  {isVertical && item.buttonText && !item.isInactive && (
                    <button
                      className="ripple"
                      data-testid={`stepper-cta-${index}`}
                      onClick={() => stepClick(index, item)}
                      style={{ ...defaultButtonStyles, ...item.buttonStyles }}
                    >
                      {item.buttonText}
                    </button>
                  )}
                </div>
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
