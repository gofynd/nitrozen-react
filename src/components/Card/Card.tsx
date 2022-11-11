import React from "react";
import "./Card.scss";
export interface CardProps {
  style?: React.CSSProperties;
  cardTitle?: string;
  className?: string;
  showBorder?: boolean;
  children?: React.ReactNode;
  cardIcon?: string;
  headerStyle?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const {
    style,
    headerStyle,
    cardTitle,
    className,
    showBorder,
    children,
    cardIcon,
    ...restProps
  } = props;
  return (
    <div
      className={
        className
          ? `${className} ${
              showBorder && "nitrozen-card-container-border"
            } nitrozen-card-container`
          : `${
              showBorder && "nitrozen-card-container-border"
            } nitrozen-card-container`
      }
      style={style}
      {...restProps}
    >
      <div className="nitrozen-card-header" style={headerStyle}>
        {cardIcon && (
          <img src={cardIcon} alt="cardIcon" className="nitrozen-card-icon" />
        )}
        {cardTitle && <span>{cardTitle}</span>}
      </div>
      <div className="nitrozen-card-description">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  style: {},
  cardTitle: "",
  className: "",
  showBorder: false,
  children: null,
  cardIcon: null,
};

export default Card;
