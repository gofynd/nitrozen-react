import React from "react";
import { SvgIcClose } from "../../assets/svg-components";
import NitrozenId from "../../utils/uuids";
import Button from "../Button";
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

const Dialog = (props: DialogProps) => {
  const {
    id,
    kind,
    title,
    size,
    theme,
    children,
    positiveButtonLabel,
    negativeButtonLabel,
    onPositiveResponse,
    onNegativeResponse,
    isVisible,
    isClosable,
    className,
    style,
    closeHandle,
    ...restProps
  } = props;

  // Methods
  const close = () => {
    closeHandle?.(); // user
  };

  const handlePositiveButtonClick = () => {
    if (onPositiveResponse) {
      onPositiveResponse();
    }
    close();
  };

  const handleNegativeButtonClick = () => {
    if (onNegativeResponse) {
      onNegativeResponse();
    }
    close();
  };

  const footerClass = () => {
    if (kind === "dialog") {
      return size === "s" ? "n-dialog-footer-size" : "n-dialog-footer";
    }
    if (kind === "acknowledgement") {
      return "n-dialog-footer-size";
    }
  };

  return (
    <>
      {isVisible && (
        <div id={id}>
          <div className="n-dialog-backdrop">
            <div
              className={
                size === "s"
                  ? `n-wrapper-width-s n-dialog ${className ?? ""}`
                  : `n-wrapper-width-m n-dialog ${className ?? ""}`
              }
              style={style ?? {}}
              role="dialog"
              aria-labelledby="id + '_title'"
              aria-describedby="id + '_desc'"
              {...restProps}
            >
              <div className="n-closebtn-container">
                <header
                  className={
                    kind === "acknowledgement"
                      ? `n-dialog-header-acknowlegdement n-dialog-header`
                      : `n-dialog-header`
                  }
                  id="id + '_title'"
                >
                  {typeof title === "string" ? (
                    <h5
                      className={
                        kind === "acknowledgement"
                          ? `acknowlegdement-header header`
                          : `header`
                      }
                    >
                      {title}
                    </h5>
                  ) : (
                    <div className="n-header-card">
                      <span className="n-header-card-1">
                        {" "}
                        {title.helperBlock.text}
                      </span>
                      <span className="n-header-card-2">
                        {" "}
                        {title.titleBlock.text}
                      </span>
                    </div>
                  )}
                </header>
                {isClosable && (
                  <SvgIcClose className="n-closebtn" onClick={close} />
                )}
              </div>

              <section className="n-dialog-body" id="id + '_desc'">
                {children}
              </section>

              <footer className={footerClass()}>
                {kind === "dialog" && (
                  <Button
                    className="n-dialog-footer-btn-spacing"
                    theme="secondary"
                    size="medium"
                    onClick={handleNegativeButtonClick}
                  >
                    {negativeButtonLabel}
                  </Button>
                )}

                {(kind === "dialog" || kind === "acknowledgement") && (
                  <Button
                    theme="primary"
                    size="medium"
                    onClick={handlePositiveButtonClick}
                  >
                    {positiveButtonLabel}
                  </Button>
                )}
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Dialog.defaultProps = {
  id: `n-dialog-${NitrozenId()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: false,
  negativeButtonLabel: false,
  isVisible: false,
};

export default Dialog;
