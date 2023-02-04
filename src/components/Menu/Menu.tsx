import React, {
  CSSProperties,
  memo,
  useEffect,
  useState,
  RefObject,
  useRef,
} from "react";
import { SvgMoreHoriz } from "../../assets/svg-components";
import "./Menu.scss";
import NitrozenId from "../../utils/uuids";

export interface MenuProps {
  id?: string | undefined;
  mode?: string;
  inverted?: boolean;
  position?: string;
  icon?: React.ReactSVGElement;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  open?: boolean;
  maxHeight?: number;
  onChangeMenuItem?: Function;
  anchorEl?: RefObject<HTMLDivElement>;
  onOpen?: Function;
  onClose?: Function;
}
let counter = 0;
const Menu = (props: MenuProps) => {
  const {
    id,
    mode,
    inverted,
    position,
    icon,
    children,
    className,
    style,
    open,
    maxHeight,
    onChangeMenuItem,
    anchorEl,
    onOpen,
    onClose,
  } = props;
  const [isOpen, setIsOpen] = useState(open || false);
  const [isAnchored, setIsAnchored] = useState(false);
  let ref = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const ulId = `{n-menu-block-ul-${NitrozenId()}`;
  /**
   * get onOpen/onClose event callbacks
   */
  useEffect(() => {
    if (isOpen) {
      return onClose?.();
    }
    onOpen?.();
    setIsOpen(false);
  }, [isOpen]);

  /**
   * add click event listner
   */
  useEffect(() => {
    if (anchorEl?.current) {
      setIsAnchored(true);
    }
    if (typeof document !== "undefined") {
      document.addEventListener("click", documentClick);
    }
  }, []);

  /**
   * get menu visibility
   * @returns boolean
   */
  const getVisibilityClass = () => {
    return isOpen ? "n-menu-block-open" : "n-menu-block-close";
  };

  /**
   * get selected active lebel index, headings are ignored
   * @param e Event
   * @returns
   */
  const getClickIndex = (e: any) => {
    const ulList: any = document.getElementById(ulId)?.childNodes;
    const nodes = Array.from(ulList);
    const currentLi = e?.target?.parentElement;
    const index = nodes.indexOf(currentLi);
    if (
      !currentLi.className.includes("n-menu-block-item-disabled") &&
      !currentLi.className.includes("n-menu-block-item-heading")
    ) {
      return index;
    }
    return -1;
  };
  /**
   * return the current selected menu element and index
   * @param e Event
   * @returns void
   */
  const onSelectHandler = (e: any) => {
    const index = getClickIndex(e);
    if (index > -1) {
      onChangeMenuItem?.(e.target.innerHTML, index);
      setIsOpen(false);
    }
  };

  const onIconClickHandler = () => {
    setIsOpen(!isOpen);
  };

  /**
   * sets the max height if explicitly passed
   * @returns inline css styling
   */
  const getStyle = () => {
    let computedStyle: any = {};

    if (toggleRef?.current?.parentElement && !anchorEl) {
      toggleRef.current.parentElement.style.position = "relative";
      computedStyle = {
        right: "100%",
        top:
          toggleRef.current?.offsetHeight + toggleRef.current?.offsetTop + "px",
      };
      if (position === "top" && !anchorEl) {
        delete computedStyle.top;
        computedStyle.bottom = "100%";
      }
      if (mode === "horizontal" && !anchorEl) {
        delete computedStyle.right;
        computedStyle.left = "100%";
      }
    } else if (anchorEl?.current) {
      anchorEl.current.parentElement.style.position = "relative";
      computedStyle = {
        left: anchorEl.current?.offsetLeft + "px",
        top:
          anchorEl.current?.offsetHeight + anchorEl.current?.offsetTop + "px",
      };
    }
    if (maxHeight) {
      return {
        maxHeight: `${maxHeight}px`,
        ...style,
        ...computedStyle,
      } as React.CSSProperties;
    }
    return {
      ...style,
      ...computedStyle,
    } as React.CSSProperties;
  };

  /**
   * handle document click events
   * @param e
   */
  const documentClick = (e: Event) => {
    if (ref?.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
      document.removeEventListener("click", () => {});
    }
  };

  return (
    <div
      className="n-menu-container"
      id={`prop-${open}-state-${isOpen}`}
      ref={ref}
    >
      {!isAnchored ? (
        <span
          ref={toggleRef}
          className={`n-menu-block-toggle 
          ${mode === "horizontal" ? "n-menu-block-toggle-horizontal" : ""}
          ${inverted ? "n-menu-block-toggle-inverted" : ""}`}
          onClick={onIconClickHandler}
        >
          <>{icon}</>
        </span>
      ) : null}
      <div
        id={id}
        className={`n-menu-block-container ${className}`}
        style={getStyle()}
      >
        <ul
          id={ulId}
          className={`n-menu-block ${getVisibilityClass()}`}
          data-testid="n-menu-block"
          onClick={onSelectHandler}
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

Menu.defaultProps = {
  id: `n-menu-block-container-${NitrozenId()}`,
  mode: "vertical",
  inverted: false,
  position: "bottom",
  icon: <SvgMoreHoriz />,
  className: "custom-classname",
  style: {},
  open: false,
  maxHeight: undefined,
  onChangeMenuItem: () => {},
  anchorEl: undefined,
  onOpen: () => {},
  onClose: () => {},
  children: <></>,
};

export default memo(Menu);
