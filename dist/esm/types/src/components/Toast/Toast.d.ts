import React from "react";
import "./Toast.scss";
export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  type: string;
  position: string;
  toastHeaderAlign?: "left" | "center" | "right";
  toastWidth?: string;
}
declare const _default: React.NamedExoticComponent<ToastProps>;
export default _default;
