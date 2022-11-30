import React, { memo, useEffect } from "react";
import { SvgUndo } from "../../assets/svg-components";
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

const Toast: React.FC<ToastProps> = (props) => {
  const {
    destroy,
    content,
    title,
    duration,
    id,
    shouldClose,
    toastHeaderAlign,
    toastWidth = "25rem",
    type,
    position,
  } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div
      style={{ width: toastWidth }}
      id={id}
      className={`toast-wrapper ${type} ${position}`}
    >
      <div
        className={`toast-header ${
          shouldClose ? "space-between" : toastHeaderAlign
        }`}
      >
        <div>{title}</div>
        {shouldClose && (
          <div className="undo-container">
            <span className="vertical-line"></span>
            <button className="cross-btn" onClick={destroy}>
              <SvgUndo style={{ fontSize: "20px", marginRight: "5px" }} /> UNDO
            </button>
          </div>
        )}
      </div>
      {content && <div className="toast-body">{content}</div>}
    </div>
  );
};

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id;
};

Toast.defaultProps = {
  title: "Title",
  toastHeaderAlign: "center",
  toastWidth: "25rem",
  duration: 2500,
};

export default memo(Toast, shouldRerender);
