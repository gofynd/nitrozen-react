import React from "react";
import "./Dialog.scss";
export interface dialogTitle {
  helperBlock: {
    text: React.ReactNode;
  };
  titleBlock: {
    text: React.ReactNode;
  };
}
export interface DialogProps {
  id?: string;
  title: string | dialogTitle;
  kind: "dialog" | "acknowledgement" | "informational";
  size: "s" | "m";
  theme?: string;
  children?: React.ReactNode;
  positiveButtonLabel?: string | boolean;
  negativeButtonLabel?: string | boolean;
  onPositiveResponse?: Function;
  onNegativeResponse?: Function;
  isVisible?: boolean;
  isClosable?: boolean;
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
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
};
export default Dialog;
