export enum ScreenTypes {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

export interface CustomWidthObject {
  columnNumber: 1 | 2 | 3 | 4 | 6;
  customWidth: number | string;
}

export interface GridProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onGridContainerClick?: React.MouseEventHandler;
  columns: {
    [ScreenTypes.MOBILE]?: 1 | 2 | 3 | 4 | 6;
    [ScreenTypes.TABLET]?: 1 | 2 | 3 | 4 | 6;
    [ScreenTypes.DESKTOP]: 1 | 2 | 3 | 4 | 6;
  };
  overflow?: {
    [ScreenTypes.MOBILE]: boolean;
  };
  customWidth?: CustomWidthObject[];
}
