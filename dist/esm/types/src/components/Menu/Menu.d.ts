import React, { CSSProperties, RefObject } from "react";
import "./Menu.scss";
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
declare const _default: React.MemoExoticComponent<{
  (props: MenuProps): React.JSX.Element;
  defaultProps: {
    id: string;
    className: string;
    mode: string;
    position: string;
    inverted: boolean;
    icon: React.JSX.Element;
    maxHeight: undefined;
    open: boolean;
    selectedIndex: number;
    onChangeMenuItem: () => void;
    onOpen: () => void;
    onClose: () => void;
    anchorEl: undefined;
    style: {};
    children: React.JSX.Element;
  };
}>;
export default _default;
