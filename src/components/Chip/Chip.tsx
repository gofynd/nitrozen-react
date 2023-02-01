import React, { useState, useCallback } from "react";
import "./Chip.scss";
import { SvgIcClose } from "../../assets/svg-components/Jio/";

export interface ChipProps {
  deletable?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fontWeight?: string | number;
  state?: string;
  children?: string;
  onClick?: Function;
  onDelete?: Function;
  icon?: React.ElementType;
  iconStyle?: React.CSSProperties;
  onIconClick?: Function;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string | number;
  label?: string | number;
}

const Chip = (props: ChipProps) => {
  const {
    deletable,
    disabled,
    isRounded,
    fontWeight,
    state,
    children,
    onIconClick,
    onClick,
    onDelete,
    className,
    icon,
    iconStyle,
    style,
    maxWidth,
    label,
    ...restProps
  } = props;

  const [chipDeleted, deleteChip] = useState(false);
  const Icon = props.icon as React.ElementType;
  const defaultIconStyles: React.CSSProperties = {
    color: props.state === "secondary" ? "#2e31be" : "#8F8F8F",
    fontSize: "16px",
  };

  const iconClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;
      e.stopPropagation();
      onIconClick?.({ event: e, chipProps: props });
      if (deletable && onDelete) {
        deleteChip(!chipDeleted);
        onDelete({ event: e, chipProps: props });
      }
    },
    [props]
  );

  const handleChipClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick?.({ event: e, chipProps: props });
    },
    [props]
  );

  const removeChip = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;
      e.stopPropagation();
      deleteChip(!chipDeleted);
      onDelete?.({ event: e, chipProps: props });
    },
    [props]
  );

  if (!chipDeleted) {
    return (
      <div
        onClick={handleChipClick}
        style={{ fontWeight: setFontWeight(), ...style }}
        className={`nitrozen-chip ${setClasses()}`}
        {...restProps}
      >
        <span className="chiptext" style={{ maxWidth: setMaxWidth() }}>
          {label ? <span className="label">{label}: </span> : null}
          {children ? children : "Submit"}
        </span>
        {deletable && !icon && (
          <span
            data-testid="deletable-cross"
            className="nitrozen-icon"
            onClick={removeChip}
          >
            <SvgIcClose style={{ ...defaultIconStyles, ...iconStyle }} />
          </span>
        )}
        {icon && (
          <span
            data-testid="prop-icon"
            className="nitrozen-icon"
            onClick={iconClicked}
          >
            <Icon style={{ ...defaultIconStyles, ...iconStyle }} />
          </span>
        )}
      </div>
    );
  }
  return <></>;

  function setClasses() {
    let classes: String = "";
    if (disabled) classes += "nitrozen-disabled ";
    if (isRounded) classes += "rounded ";
    if (state === "secondary") classes += "nitrozen-chip-secondary ";
    if (className) classes += className + " ";

    return classes;
  }

  function setFontWeight() {
    let fw: string | number;
    fw = props.state === "secondary" ? 600 : 400;
    fw = props.fontWeight ? props.fontWeight : fw;
    return fw;
  }

  function setMaxWidth() {
    let maxWidth: string | number;
    maxWidth = props.maxWidth ? props.maxWidth : "220px";
    return maxWidth;
  }
};

Chip.defaultProps = {
  deletable: false,
  disabled: false,
  iconStyle: {},
  isRounded: false,
  state: "primary",
  style: {},
  maxWidth: "220px",
};

export default React.memo(Chip);
