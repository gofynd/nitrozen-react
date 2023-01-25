import React from "react";
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
  caption?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
}

const Card = (props: CardProps) => {
  const {
    title,
    image,
    imageFocus,
    imageRatio,
    orientation,
    description,
    primaryCTA,
    secondaryCTA,
    caption,
    footer,
    header,
    ...restProps
  } = props;
  return (
    <div
      className={`nitrozen-card nitrozen-card__container ${
        orientation === "vertical" && "card-vertical"
      }`}
    >
      {header && <div className="nitrozen-card-header">{header}</div>}
      <div className={`nitrozen-flex orientation-${orientation}`}>
        {image && (
          <div
            className={`nitrozen-card-image ratio-${imageRatio} focus-${imageFocus}`}
          >
            {image}
          </div>
        )}
        <div
          className={`nitrozen-card__content ${
            orientation === "vertical" && "vertical-space"
          }`}
        >
          {caption && <div className="nitrozen-card-caption">{caption}</div>}
          {title && <h3 className="nitrozen-heading">{title}</h3>}
          {description && <div className="nitrozen-text-md">{description}</div>}
          <div className="nitrozen-button-group">
            {primaryCTA && primaryCTA}
            {secondaryCTA && secondaryCTA}
          </div>
        </div>
      </div>
      {footer && <div className="nitrozen-card-footer">{footer}</div>}
    </div>
  );
};

Card.defaultProps = {
  imageRatio: "wide",
  imageFocus: "center",
  orientation: "vertical",
  style: {},
  className: "",
};

export default Card;
