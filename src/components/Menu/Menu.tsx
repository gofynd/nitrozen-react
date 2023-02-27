import React, {
  CSSProperties,
  memo,
  useEffect,
  useState,
  RefObject,
  useRef,
} from "react";
import { SvgIcMoreHorizontal } from "../../assets/svg-components";
import "./Menu.scss";
import NitrozenId from "../../utils/uuids";

export interface MenuProps {
  id?: string | undefined;
  className?: string;
  mode?: string;
  position?: string;
  inverted?: boolean;
  icon?: React.ReactSVGElement;
  maxHeight?: number;
  open?: boolean;
  selectedIndex?: number;
  onChangeMenuItem?: Function;
  onOpen?: Function;
  onClose?: Function;
  anchorEl?: RefObject<HTMLDivElement>;
  style?: CSSProperties;
  children?: React.ReactNode;
}
const Menu = (props: MenuProps) => {
  const {
    id,
    className,
    mode,
    position,
    inverted,
    icon,
    maxHeight,
    open,
    onChangeMenuItem,
    onOpen,
    onClose,
    anchorEl,
    style,
    children,
    selectedIndex,
    ...restProps
  } = props;
  const [isOpen, setIsOpen] = useState(open);
  const [isAnchored, setIsAnchored] = useState(false);
  let ref = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const ulId = `n-menu-block-ul-${NitrozenId()}`;

  /**
   * set visibility state if element is anchore and controlled via
   * an anchor elem, example: button, icon, etc.
   */
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  /**
   * get onOpen/onClose event callbacks
   */
  useEffect(() => {
    if (isOpen) {
      return onOpen?.();
    }
    return onClose?.();
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
      return () => {
        document.removeEventListener("click", documentClick);
      };
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
   * get selected active label index, headings/disabled are ignored
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
   * sets the max height if passed explicitly
   * computes component positioning base on `position` and `mode` props
   * @returns inline css styling
   */
  const getStyle = () => {
    const computedStyle = {
      ...style,
    } as CSSProperties;

    if (toggleRef?.current?.parentElement && !anchorEl) {
      toggleRef.current.parentElement.style.position = "relative";
    } else if (anchorEl?.current) {
      anchorEl.current.style.position = "relative";
      anchorEl.current.style.height = "fit-content";
    }
    switch (position) {
      case "top":
        computedStyle.bottom = "100%";
        break;
      case "bottom":
        computedStyle.top = "100%";
        break;
    }
    switch (mode) {
      case "horizontal":
        computedStyle.left = "100%";
        break;
      case "vertical":
        computedStyle.right = "100%";
        break;
      case "aligned":
        computedStyle.left = "0%";
        break;
    }
    if (maxHeight) {
      computedStyle.height = `${maxHeight}px`;
    }
    return computedStyle;
  };

  /**
   * handle document click events
   * @param e
   */
  const documentClick = (e: Event) => {
    if (
      ref?.current &&
      !ref.current.contains(e.target as Node) &&
      !anchorEl?.current
    ) {
      setIsOpen(false);
      return;
    }
    if (anchorEl?.current && !anchorEl.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`n-menu-container ${className}`}
      ref={ref}
      id={id}
      {...restProps}
    >
      {!isAnchored ? (
        <span
          ref={toggleRef}
          data-testid={`n-menu-block-toggle`}
          className={`n-menu-block-toggle 
          ${mode === "horizontal" ? "n-menu-block-toggle-horizontal" : ""}
          ${inverted ? "n-menu-block-toggle-inverted" : ""}`}
          onClick={onIconClickHandler}
        >
          <>{icon}</>
        </span>
      ) : null}
      <ul
        id={ulId}
        className={`n-menu-block ${getVisibilityClass()}`}
        data-testid="n-menu-block"
        onClick={onSelectHandler}
        style={getStyle()}
      >
        {children}
      </ul>
    </div>
  );
};

Menu.defaultProps = {
  id: `n-menu-container-${NitrozenId()}`,
  className: `n-menu-container-${NitrozenId()}`,
  mode: "vertical",
  position: "bottom",
  inverted: false,
  icon: <SvgIcMoreHorizontal />,
  maxHeight: undefined,
  open: false,
  selectedIndex: 2,
  onChangeMenuItem: () => {},
  onOpen: () => {},
  onClose: () => {},
  anchorEl: undefined,
  style: {},
  children: <></>,
};

export default memo(Menu);
