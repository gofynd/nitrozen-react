import React from "react";
import { ButtonProps } from "../Button/Button";
import "./Card.scss";
export interface CardProps {
  title?: string;
  image?: JSX.Element;
  imageFocus?: "top" | "bottom" | "left" | "right" | "center";
  imageRatio?: "wide" | "landscape" | "portrait" | "square";
  orientation?: "horizontal" | "vertical";
  description?: string | Element;
  primaryCTA?: JSX.Element;
  secondaryCTA?: JSX.Element;
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
    title,
    image,
    imageFocus,
    imageRatio,
    orientation,
    description,
    primaryCTA,
    secondaryCTA,
    ...restProps
  } = props;
  return (
    <div className="n-card n-card__container">
      <div className={`n-flex orientation-${orientation}`}>
        {image && (
          <div
            className={`n-card__image ratio-${imageRatio} focus-${imageFocus}`}
          >
            {image}
          </div>
        )}
        <div className="n-card__content">
          {title && <h3>{title}</h3>}
          {description && <div className="n-text-body">{description}</div>}
          <div className="n-button-group">
            {primaryCTA && primaryCTA}
            {secondaryCTA && secondaryCTA}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  imageRatio: "wide",
  imageFocus: "center",
  orientation: "vertical",
  style: {},
  cardTitle: "",
  className: "",
  showBorder: false,
  children: null,
  cardIcon: null,
};

export default Card;
