import React from "react";
import Button from "../Button";
import NitrozenId from "../../utils/uuids";
import "./Dialog.scss";
import { useOutsideClick } from "../../utils/useOutsideClick";

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

const Dialog = (props: DialogProps) => {
  const {
    id,
    title,
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
    className,
    style,
    closeHandle,
    ...restProps
  } = props;

  const positiveButtonLabelText = positiveButtonLabel || false;
  const neutralButtonLabelText = neutralButtonLabel ?? "";
  const negativeButtonLabelText = negativeButtonLabel || false;

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

  const dialogRef = useOutsideClick(close);

  return (
    <>
      {isVisible && (
        <div id={id}>
          <div className="nitrozen-dialog-backdrop">
            <div
              ref={dialogRef}
              className={`nitrozen-dialog ${className ?? ""}`}
              style={style ?? {}}
              role="dialog"
              aria-labelledby="id + '_title'"
              aria-describedby="id + '_desc'"
              {...restProps}
            >
              {DialogIcon ?? null}
              <header className="nitrozen-dialog-header" id="id + '_title'">
                <div className="header">{title}</div>
              </header>
              <section className="nitrozen-dialog-body" id="id + '_desc'">
                {children}
              </section>

              <footer className="nitrozen-dialog-footer">
                <div className="nitrozen-dialog-footer-container">
                  {positiveButtonLabelText && (
                    <Button
                      theme={`${theme || "primary"}`}
                      rounded={false}
                      stroke
                      className="nitrozen-dialog-footer-button-margin"
                      onClick={handlePositiveButtonClick}
                    >
                      {positiveButtonLabelText}
                    </Button>
                  )}
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
                  {negativeButtonLabelText && (
                    <Button
                      rounded={false}
                      theme={`${theme || "primary"}`}
                      className="nitrozen-dialog-footer-button-margin"
                      onClick={handleNegativeButtonClick}
                    >
                      {negativeButtonLabelText}
                    </Button>
                  )}
                </div>
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
