import React, {
  CSSProperties,
  memo,
  useEffect,
  useState,
  RefObject,
} from "react";
import "./Menu.scss";

export interface MenuItemProps {
  disabled?: boolean;
  label?: string;
  value?: string;
  prefix?: React.ReactSVGElement;
  suffix?: any;
  linkConfig?: {
    href: string;
    textAppreance?: string;
    target?: string;
  };
  divider?: boolean;
  heading?: boolean;
}
export interface MenuProps {
  items: Array<any>;
  open?: boolean;
  selectedIndex?: number;
  anchorEl?: RefObject<HTMLDivElement>;
  onSelect?: Function;
  onOpen?: Function;
  onClose?: Function;
  maxHeight?: number;
  style?: CSSProperties;
}

const Menu = (props: MenuProps) => {
  const {
    items,
    open = true,
    selectedIndex,
    anchorEl = undefined,
    onSelect,
    onOpen,
    onClose,
    maxHeight,
    style,
  } = props;
  const [selection, setSelection] = useState(selectedIndex);
  const [hasPrefix, setHasPrefix] = useState(false);
  const [hasSuffix, setHasSuffix] = useState(false);
  const [isOpen, setIsOpen] = useState(open || false);

  /**
   * get onOpen/onClose event callbacks
   */
  useEffect(() => {
    if (!open) {
      setIsOpen(false);
      return onClose?.();
    }
    setIsOpen(true);
    onOpen?.();
  }, [open]);

  /**
   * check if any suffix or prefix exists for ui formatting
   */
  useEffect(() => {
    checkPrefix();
    checkSuffix();
    if (anchorEl !== undefined && typeof document !== "undefined") {
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
   * set current selection for highlightingn and call onSelect callback
   * @param index
   * @returns void
   */
  const onSelectHandler = (index: number) => {
    if (items[index]?.disabled) return;
    onSelect?.(index, items[index]?.value);
    setSelection(index);
  };

  /**
   * sets the max height if explicitly passed
   * @returns inline css styling
   */
  const getStyle = () => {
    let computedStyle = {};
    if (anchorEl?.current?.parentElement) {
      anchorEl.current.parentElement.style.position = "relative";
      computedStyle = {
        position: "absolute",
        zIndex: 60,
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
   * checks if any prefix exists
   * @returns void
   */
  const checkPrefix = () => {
    if (hasPrefix) return;
    const index = items.findIndex((item) => item?.prefix);
    if (index < 0) {
      setHasPrefix(false);
      return;
    }
    setHasPrefix(true);
  };

  /**
   * checks if any suffix exists
   * @returns void
   */
  const checkSuffix = () => {
    if (hasSuffix) return;
    const index = items.findIndex((item) => item.suffix);
    if (index < 0) {
      setHasSuffix(false);
      return;
    }
    setHasSuffix(true);
  };

  /**
   * check if curent menu item selected
   * @param item menu prop item
   * @param index curent index
   * @returns boolean
   */
  const isSelected = (item: MenuItemProps, index: number) => {
    return selection === index && !item.disabled && !item.heading;
  };

  /**
   * handle document click events
   * @param e
   */
  const documentClick = (e: Event) => {
    if (anchorEl?.current && !anchorEl.current.contains(e.target as Node)) {
      onClose?.();
      setIsOpen(false);
      document.removeEventListener("click", () => {});
    }
  };

  return (
    <div className="n-menu-container" style={getStyle()}>
      <ul
        className={`n-menu-block ${getVisibilityClass()}`}
        data-testid="n-menu-block"
      >
        {items.map((item, index) => {
          // if type is not set, then it is a menu item, else divider
          return (
            <li
              onClick={() => onSelectHandler(index)}
              key={`n-menu-block-item-${index}`}
              data-testid={`n-menu-block-item-${index}`}
              className={`n-menu-block-item 
            ${item.disabled ? "n-menu-block-item-disabled" : ""}
            ${item?.divider ? "n-menu-block-item-divider" : ""}
            ${item?.heading ? "n-menu-block-item-heading" : ""}
            ${isSelected(item, index) ? "n-menu-block-item-selected" : ""}
            `}
            >
              {/* setting links only for enabled menu items */}
              <a
                href={(!item.disabled && item?.linkConfig?.href) || undefined}
                target={item?.linkConfig?.target || "_self"}
                data-testid={`n-menu-block-item-${index}-link`}
              >
                {hasPrefix && (
                  <div className={`n-menu-block-item-element`}>
                    <span
                      data-testid={`n-menu-block-item-element-prefix-${index}`}
                      className="n-menu-block-item-element-prefix"
                    >
                      {item.prefix}
                    </span>
                  </div>
                )}
                <div className="n-menu-block-item-element n-menu-block-item-element-suffix">
                  <span
                    data-testid={`n-menu-block-item-element-label-${index}`}
                  >
                    {item.label}
                  </span>
                  {hasSuffix && (
                    <span
                      data-testid={`n-menu-block-item-element-suffix-${index}`}
                      className="n-menu-block-item-element-outer"
                    >
                      {item.suffix}
                    </span>
                  )}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Menu.defaultProps = {
  items: [],
  open: true,
  selectedIndex: 3,
};

export default memo(Menu);
