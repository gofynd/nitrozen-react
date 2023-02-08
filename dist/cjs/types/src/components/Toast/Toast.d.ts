import React from "react";
import "./Toast.scss";
export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  leftIconPosition: string;
  rightIconPosition: string;
  position: string;
  toastWidth?: string;
}
declare const _default: React.NamedExoticComponent<ToastProps>;
export default _default;
