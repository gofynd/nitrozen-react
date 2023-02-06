import React, { memo, useEffect } from "react";
import uuid from "../../utils/uuids";
import Button from "../Button";

export interface NudgeProps {
  id: string;
  destroy: () => void;
  heading: string;
  supportText: string;
  duration?: number;
  cta1?: string;
  cta2?: string;
  cta1OnClick?: any;
  cta2OnClick?: any;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  className?: string;
  position: "top-right" | "top-bottom";
}

const Nudge = (props: NudgeProps) => {
  const {
    id,
    destroy,
    heading,
    supportText,
    duration,
    cta1,
    cta2,
    cta1OnClick,
    cta2OnClick,
    leftImage,
    rightImage,
    className,
    position,
    ...restProps
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
      id={id}
      data-testid={`${id}-nudge`}
      className={`${
        className ? className : ""
      } n-nudge-wrapper n-nudge-${position} n-nudge`}
    >
      <div className="n-nudge-top">
        <div className="n-nudge-left-section">
          <div className="n-nudge-image-container" data-testid="left-image">
            {leftImage}
          </div>
          <div className="n-nudge-text-wrapper">
            <span className="n-nudge-header" data-testid="nudge-header">
              {heading}
            </span>
            <span className="n-nudge-support" data-testid="nudge-support">
              {supportText}
            </span>
          </div>
        </div>
        <div className="n-nudge-right-section">
          <div className="n-nudge-image-container" data-testid="right-image">
            {rightImage}
          </div>
        </div>
      </div>
      <div className="n-nudge-bottom">
        {cta1 && (
          <Button
            name={cta1}
            onClick={cta1OnClick}
            className="n-nudge-cta1"
            data-testid="cta1-btn"
          >
            {cta1}
          </Button>
        )}
        {cta2 && (
          <Button name={cta2} onClick={cta2OnClick} className="n-nudge-cta2">
            {cta2}
          </Button>
        )}
      </div>
    </div>
  );
};

Nudge.defaultProps = {
  id: "nitrozen-menu" + uuid(),
  duration: 4000,
  position: "top-right",
};

export default memo(Nudge);
