import React from "react";
import "./Dialog.scss";
export interface DialogProps {
  id?: string;
  title?: string;
  DialogIcon?: React.ReactNode;
  theme?: string;
  children?: React.ReactNode;
  positiveButtonLabel?: string | boolean;
  neutralButtonLabel?: string | boolean;
  negativeButtonLabel?: string | boolean;
  onPositiveResponse?: Function;
  onNeutralResponse?: Function;
  onNegativeResponse?: Function;
  isVisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
  closeHandle?: Function;
}
declare const Dialog: {
  (props: DialogProps): JSX.Element;
  defaultProps: {
    id: string;
    title: string;
    theme: null;
    children: null;
    positiveButtonLabel: boolean;
    neutralButtonLabel: string;
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
};
export default Dialog;
