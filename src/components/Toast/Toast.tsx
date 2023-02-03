import React, { memo, useEffect } from "react";
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

const Toast: React.FC<ToastProps> = (props) => {
  const {
    destroy,
    content = "Support text",
    title,
    duration,
    id,
    shouldClose,
    leftIconPosition,
    rightIconPosition,
    toastWidth = "38.4rem",
    leftImage,
    rightImage,
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
    <div style={{ width: toastWidth }} id={id} className={`toast-wrapper`}>
      <div className="toast-left-container">
        <div
          className={`toast-left-image ${leftIconPosition}`}
          data-testid="left-image"
        >
          {leftImage}
        </div>
        <div className={`toast-title-container`}>
          <div className={`toast-header ${shouldClose ? "space-between" : ""}`}>
            {title}
          </div>
          {content && (
            <div className={`toast-body ${shouldClose ? "space-between" : ""}`}>
              {content}
            </div>
          )}
        </div>
      </div>
      {shouldClose && (
        <div
          className={`toast-right-image ${rightIconPosition}`}
          data-testid="right-image"
          onClick={destroy}
        >
          {rightImage}
        </div>
      )}
    </div>
  );
};

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id;
};

Toast.defaultProps = {
  title: "Title",
  toastWidth: "38.4rem",
  position: "top-center",
  leftIconPosition: "top-align",
  rightIconPosition: "top-align",
  shouldClose: false,
  leftImage: <img src={require("../../assets/left-placeholder.svg")} />,
  rightImage: <img src={require("../../assets/right-placeholder.svg")} />,
  duration: 2500,
};

export default memo(Toast, shouldRerender);
