//prettier-ignore
/* Package imports */
import React, { ReactElement, useEffect, useState } from "react";

/* CSS imports */
import "./Alert.scss";

/* Component imports */
import Button from "../Button";

/* Assets imports*/
import {
  SvgCheck,
  SvgError,
  SvgIcErrorColored,
  SvgIcInfo,
  SvgIcStatusLoading,
} from "./../../assets/svg-components";
import LoadingImage from "./../../assets/loader.gif";

/* Interface */
export interface AlertProps {
  alertWidth?: string;
  buttonText?: string;
  buttonType?: "button" | "default" | "link";
  children?: React.ReactNode;
  className?: string;
  displayButton?: boolean;
  extendedAlert?: boolean;
  fullWidth?: boolean;
  href?: string;
  Icon?: React.ReactNode;
  labelText?: string;
  linkText?: string;
  loader?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  state?: string;
  style?: React.CSSProperties;
}

//prettier-ignore
const Alert = (props: AlertProps) => {
    const {
        alertWidth,
        buttonText,
        buttonType,
        children,
        className,
        displayButton,
        extendedAlert,
        fullWidth,
        href,
        Icon,
        labelText,
        linkText,
        loader,
        onClick,
        state,
        style,
        ...restProps
    } = props;

    /**
     * Variables and constants
     *
     * The following variables are currently defined:
     * a) iconTypes: To apply specific icons if user has not defined any icon.
     *
     * @author Rushabh Mulraj Shah 
     * @since 1.0.0
     */
    const iconTypes = {
        info: SvgIcInfo,
        success: SvgCheck,
        warn: SvgError,
        error: SvgIcErrorColored
    };

    //prettier-ignore
    /**
     * States
     *
     * The following states are currently defined:
     * a) classes: For setting the classnames across the component.
     * b) IconTag: For setting the icon to be displayed at the start of the component.
     * c) componentWidth: For setting the width of the component.
     *
     * @author Rushabh Mulraj Shah 
     * @since 1.0.0
     */
    const [classes, setClasses] = useState({
        container: "",
        icon: "",
        button: "",
        buttonLabel: ""
    });
    const [IconTag, setIconTag] = useState<any>(() => iconTypes["info"]);
    const [componentWidth, setComponentWidth] = useState("fit-content");
    const [xsAlert, setXSAlert] = useState(false);
    const [xxsAlert, setXXSAlert] = useState(false);

    /**
     * Handling the effects on state change.
     *
     * Whent the `state` value is set, following changes
     * happen:
     * a) Individual classes are set depending on the state
     * b) IconTag is set on the basis of loader or state
     *
     * @author Rushabh Mulraj Shah 
     * @since 1.0.0
     */
    useEffect(() => {
        switch (state) {
            case "info":
                setClasses({
                    container: "n-alert-info",
                    icon: "n-alert-icon-info",
                    button: "",
                    buttonLabel: "n-alert-button-link-info"
                });
                break;
            case "success":
                setClasses({
                    container: "n-alert-success",
                    icon: "n-alert-icon-success",
                    button: "n-alert-button-success",
                    buttonLabel: "n-alert-button-link-success"
                });
                break;
            case "warn":
                setClasses({
                    container: "n-alert-warn",
                    icon: "n-alert-icon-warn",
                    button: "n-alert-button-warn",
                    buttonLabel: "n-alert-button-link-warn"
                });
                break;
            case "error":
                setClasses({
                    container: "n-alert-error",
                    icon: "n-alert-icon-error",
                    button: "n-alert-button-error",
                    buttonLabel: "n-alert-button-link-error"
                });
                break;
        }

        if (state !== undefined) {
            // @ts-ignore
            setIconTag(() => iconTypes[state]);
        }
    }, [state]);

    //prettier-ignore
    /**
     * Handling the effects on alertWidth and fullWidth change.
     *
     * When the `alertWidth` value is set, the following
     * changes are applied to `componentWidth`:
     * a) If `alertWidth` is NOT undefined, it's set to `alertWidth`.
     * b) If `alertWidth` is undefined & fullWidth is true, it's set to "100%""
     * c) If `alertWidth` is undefined & fullWidth is false, it's set to "auto".
     * d) Default value is set to "auto".
     *
     * @author Rushabh Mulraj Shah 
     * @since 1.0.0
    */
    useEffect(() => {
        if (alertWidth !== undefined) {
            setComponentWidth(alertWidth);

            if(alertWidth.includes("%")) {
                if(alertWidth < '15%') {
                    setXSAlert(false);
                    setXXSAlert(true);
                } else if(alertWidth < '45%') {
                    setXSAlert(true);
                    setXXSAlert(false);
                } else {
                    setXSAlert(false);
                    setXXSAlert(false);
                }
            } else if(alertWidth.includes('px')) {
                let widthValue = alertWidth.split('px')[0];
                if(+widthValue < 100) {
                    setXSAlert(false);
                    setXXSAlert(true);
                } else if(+widthValue < 300) {
                    setXSAlert(true);
                    setXXSAlert(false);
                } else {
                    setXSAlert(false);
                    setXXSAlert(false);
                }
            } else if(alertWidth.includes('rem')) {
                let widthValue = alertWidth.split('rem')[0];
                if(+widthValue < 10) {
                    setXSAlert(false);
                    setXXSAlert(true);
                } else if(+widthValue <= 20) {
                    setXSAlert(true);
                    setXXSAlert(false);
                } else {
                    setXSAlert(false);
                    setXXSAlert(false);
                }
            }
        } else if (!alertWidth && fullWidth) {
            setComponentWidth("100%");
        } else if (!alertWidth && !fullWidth) {
            setComponentWidth("fit-content");
        } else {
            setComponentWidth("fit-content");
        }
    }, [alertWidth, fullWidth]);

    let containerClassNames = ['n-alert', classes.container];
    if(className) containerClassNames.push(className);
    if(fullWidth) containerClassNames.push('n-alert-full-width');
    if(buttonType === 'link') containerClassNames.push('n-alert-link-button-container');
    if(loader) containerClassNames.push('n-alert-loader-container');
    if(xsAlert) containerClassNames.push('n-alert-xs');
    if(xxsAlert) containerClassNames.push('n-alert-xxs');

    return (
        //prettier-ignore
        <div
            style={
                {
                ...style,
                width: componentWidth,
                height: extendedAlert ? "auto" : "48px",
                } ?? {}
            }
            className={containerClassNames.join(' ')}
            {...restProps}
        >
            {/* prettier-ignore */}
            <div className={`n-alert-flex ${extendedAlert ? "n-alert-extended" : ""}`}>
                <div className={`n-alert-text-icon-wrapper`}>
                    {
                        loader ?
                        <img src={LoadingImage} className={`n-alert-icon n-alert-loader`} /> :
                        (
                            Icon || 
                            (
                                <IconTag
                                    className={`
                                        n-alert-icon 
                                        ${classes.icon} 
                                        ${loader ? "n-alert-loader" : ""}
                                    `}
                                />
                            )
                        )
                    }
                    <div className="n-alert-label-text">{labelText}</div>
                    <div className="n-alert-text">{children}</div>
                </div>

                {
                    displayButton && !loader && (
                        <div className="n-alert-button-container">
                            {
                                buttonType === "default" || buttonType === "button" ? 
                                (
                                    <Button
                                        size="small"
                                        className={`n-alert-button ${classes.button}`}
                                        onClick={onClick}
                                    >
                                        {buttonText}
                                    </Button>
                                ) : 
                                (
                                    <a
                                        className={`n-alert-link ${classes.buttonLabel}`}
                                        onClick={onClick}
                                        href={href}
                                    >
                                        {linkText || buttonText || "Click"}
                                    </a>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Alert.defaultProps = {
  className: "",
  displayButton: false,
  extendedAlert: false,
  fullWidth: true,
  Icon: "",
  labelText: "",
  loader: false,
  state: "info",
  style: {},
};

export default Alert;
