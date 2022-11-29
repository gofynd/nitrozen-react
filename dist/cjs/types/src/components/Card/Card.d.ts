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
declare const Card: {
  (props: CardProps): JSX.Element;
  defaultProps: {
    style: {};
    cardTitle: string;
    className: string;
    showBorder: boolean;
    children: null;
    cardIcon: null;
  };
};
export default Card;
