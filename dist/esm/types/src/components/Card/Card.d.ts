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
declare const Card: {
  (props: CardProps): JSX.Element;
  defaultProps: {
    imageRatio: string;
    imageFocus: string;
    orientation: string;
    style: {};
    className: string;
  };
};
export default Card;
