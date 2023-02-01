import React from "react";
import { SvgClose } from "../../assets/svg-components";
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
    DialogIcon,
    theme,
    children,
    positiveButtonLabel,
    neutralButtonLabel,
    negativeButtonLabel,
    onPositiveResponse,
    onNeutralResponse,
    onNegativeResponse,
    isVisible,
    isClosable,
    className,
    style,
    closeHandle,
    ...restProps
  } = props;

  const neutralButtonLabelText = neutralButtonLabel ?? "";

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

  const handleNeutralButtonClick = () => {
    if (onNeutralResponse) {
      onNeutralResponse();
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
      return size === "s"
        ? "nitrozen-dialog-footer-size"
        : "nitrozen-dialog-footer";
    }
    if (kind === "acknowledgement") {
      return "nitrozen-dialog-footer-size";
    }
  };

  return (
    <>
      {isVisible && (
        <div id={id}>
          <div className="nitrozen-dialog-backdrop">
            <div
              className={
                size === "s"
                  ? `n-wrapper-width-s nitrozen-dialog ${className ?? ""}`
                  : `n-wrapper-width-m nitrozen-dialog ${className ?? ""}`
              }
              style={style ?? {}}
              role="dialog"
              aria-labelledby="id + '_title'"
              aria-describedby="id + '_desc'"
              {...restProps}
            >
              <div className="n-closebtn-container">
                {isClosable && (
                  <SvgClose className="n-closebtn" onClick={close} />
                )}
              </div>
              <header className="nitrozen-dialog-header" id="id + '_title'">
                {typeof title === "string" ? (
                  <h5 className="header">{title}</h5>
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
              <section className="nitrozen-dialog-body" id="id + '_desc'">
                {children}
              </section>

              <footer className={footerClass()}>
                {neutralButtonLabelText && (
                  <Button
                    theme={`${theme || "primary"}`}
                    rounded={false}
                    className="nitrozen-dialog-footer-button-margin"
                    onClick={handleNeutralButtonClick}
                  >
                    {neutralButtonLabelText}
                  </Button>
                )}

                {kind === "dialog" && (
                  <Button
                    className="nitrozen-dialog-footer-btn-spacing"
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
  id: `nitrozen-dialog-${NitrozenId()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: false,
  neutralButtonLabel: "",
  negativeButtonLabel: false,
  isVisible: false,
};

export default Dialog;
