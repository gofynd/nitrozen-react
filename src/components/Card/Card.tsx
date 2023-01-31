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
  const containerVertical = orientation === "vertical" && "n-card-vertical";
  const cardContentVertical =
    orientation === "vertical" && "n-card-vertical-space";
  return (
    <div className={`n-card n-card__container ${containerVertical}`}>
      {header && <div className="n-card-header">{header}</div>}
      <div className={`n-flex n-card-orientation-${orientation}`}>
        {image && (
          <div
            className={`n-card-image n-card-ratio-${imageRatio} n-card-focus-${imageFocus}`}
          >
            {image}
          </div>
        )}
        <div className={`n-card__content ${cardContentVertical}`}>
          {caption && <div className="n-card-caption">{caption}</div>}
          {title && <h3 className="n-heading">{title}</h3>}
          {description && <div className="n-text-md">{description}</div>}
          <div className="n-button-group">
            {primaryCTA && primaryCTA}
            {secondaryCTA && secondaryCTA}
          </div>
        </div>
      </div>
      {footer && <div className="n-card-footer">{footer}</div>}
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
