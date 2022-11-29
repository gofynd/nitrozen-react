import React, { memo, useCallback, useState } from "react";
import uuid from "../../utils/uuids";
import classnames from "classnames";
import { useOutsideClick } from "../../utils/useOutsideClick";
import "./Menu.scss";
import { SvgMoreHoriz } from "../../assets/svg-components";

export interface MenuProps {
  id?: string | undefined;
  mode: string;
  inverted: boolean;
  position: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onChangeMenuItem?: (menu: string) => void;
}

const Menu = (props: MenuProps) => {
  const {
    id,
    mode,
    inverted,
    position,
    children,
    onChangeMenuItem,
    className = "",
    style,
    ...restProps
  } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useOutsideClick(() => setToggleMenu(false));

  const handleToggleMenu = () => {
    setToggleMenu((toggle) => !toggle);
  };

  const getSelectedMenuItem = useCallback(
    (e: any) => {
      onChangeMenuItem?.(e.target.innerHTML);
    },
    [onChangeMenuItem]
  );

  return (
    <div
      id={id}
      ref={ref}
      onClick={handleToggleMenu}
      style={style ?? {}}
      className={classnames({
        "nitrozen-menu-content": true,
        "nitrozen-default-menu": !inverted,
        [className]: className?.length,
      })}
      {...restProps}
    >
      <span
        className={classnames({
          "nitrozen-menu-dots": true,
          "nitrozen-menu-vertical-dots": mode === "vertical",
        })}
      >
        <SvgMoreHoriz
          data-testid="menu-icon"
          className={`nitrozen-menu-icon ${inverted ? "inverted" : ""}`}
        />
      </span>
      {toggleMenu && (
        <ul
          className={classnames({
            "nitrozen-menu-vertical-dropdown": mode === "vertical",
            "nitrozen-menu-top": position === "top",
          })}
          onClick={getSelectedMenuItem}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

Menu.defaultProps = {
  id: "nitrozen-menu" + uuid(),
  mode: "vertical",
  inverted: false,
  position: "bottom",
};

export default memo(Menu);
