import * as react from "react";
import react__default, { RefObject, CSSProperties } from "react";

interface AutocompleteProps {
  className?: string;
  disabled?: boolean;
  debounceDuration?: number;
  items?: any[];
  onListItemClick?: Function;
  onBlur?: Function;
  onChange?: Function;
  onFocus?: Function;
  loader?: react__default.ReactNode;
  placeholder?: string;
  renderItem?: (item: any, index: number) => JSX.Element;
  resultStringKeyName?: string;
  showClearAll?: boolean;
  showLoader?: boolean;
  showItems?: boolean;
  showSearchIcon?: boolean;
  style?: react__default.CSSProperties;
}
declare const Autocomplete: {
  (props: AutocompleteProps): react__default.JSX.Element;
  defaultProps: {
    debounceDuration: number;
    showSearchIcon: boolean;
    showClearAll: boolean;
  };
};

interface BadgeProps {
  size?: String;
  kind?: String;
  icon?: any;
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: react__default.CSSProperties;
  onClickHandler?: react__default.MouseEventHandler<HTMLDivElement>;
}
declare const _default$g: react__default.MemoExoticComponent<{
  (props: BadgeProps): react__default.JSX.Element;
  defaultProps: {
    size: string;
    kind: string;
    state: string;
    icon: string;
    fill: boolean;
    labelText: string;
    className: string;
    style: {};
    onClickHandler: () => void;
  };
}>;

interface ButtonProps {
  href?: string;
  disabled?: boolean;
  rounded?: boolean;
  state?: "positive" | "destructive" | "default";
  theme?: string;
  as?: "div" | "span" | "default";
  size?: string;
  focused?: boolean;
  showProgress?: boolean;
  fullWidth?: boolean;
  children: react__default.ReactNode;
  onClick?: react__default.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
  >;
  className?: string;
  id?: string;
  icon?: react__default.ReactNode;
  iconRight?: react__default.ReactNode;
  name?: string;
  style?: react__default.CSSProperties;
}
declare const _default$f: react__default.MemoExoticComponent<{
  (props: ButtonProps): react__default.JSX.Element;
  defaultProps: {
    href: null;
    disabled: boolean;
    rounded: boolean;
    theme: string;
    as: null;
    size: string;
    focused: boolean;
    showProgress: boolean;
    fullWidth: boolean;
    children: null;
    onClick: null;
    className: null;
    id: null;
    icon: null;
    name: null;
  };
}>;

interface CardProps {
  title?: string;
  image?: JSX.Element;
  imageFocus?: "top" | "bottom" | "left" | "right" | "center";
  imageRatio?: "wide" | "landscape" | "portrait" | "square";
  orientation?: "horizontal" | "vertical";
  description?: string | Element;
  primaryCTA?: JSX.Element;
  secondaryCTA?: JSX.Element;
  caption?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
}
declare const Card: {
  (props: CardProps): react__default.JSX.Element;
  defaultProps: {
    imageRatio: string;
    imageFocus: string;
    orientation: string;
    style: {};
    className: string;
  };
};

interface CheckboxProps {
  disabled?: boolean;
  value?: any;
  name?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  checkboxValue: string | number | boolean | Object;
  id?: string;
  labelText?: string;
  children?: react__default.ReactNode;
  onChange: Function;
  checkArray?: Array<string | number | boolean | Object>;
  ref?: any;
  className?: string;
  style?: react__default.CSSProperties;
  labelStyle?: react__default.CSSProperties;
  icon?: react__default.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
  isIndeterminate?: Boolean;
}
declare const Checkbox: {
  (props: CheckboxProps): react__default.JSX.Element;
  defaultProps: {
    disabled: boolean;
    value: string;
    name: string;
    checkboxValue: null;
    state: null;
    stateMessage: string;
    id: string;
    labelText: string;
    children: null;
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
    checkArray: null;
    ref: null;
    isIndeterminate: boolean;
  };
};

interface ChipProps {
  deletable?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fontWeight?: string | number;
  state?: string;
  children?: string;
  onClick?: Function;
  onDelete?: Function;
  icon?: react__default.ElementType;
  iconStyle?: react__default.CSSProperties;
  onIconClick?: Function;
  className?: string;
  style?: react__default.CSSProperties;
  maxWidth?: string | number;
  label?: string | number;
}
declare const _default$e: react__default.MemoExoticComponent<{
  (props: ChipProps): react__default.JSX.Element;
  defaultProps: {
    deletable: boolean;
    disabled: boolean;
    iconStyle: {};
    isRounded: boolean;
    state: string;
    style: {};
    maxWidth: string;
  };
}>;

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "top-start"
  | "top-end";
interface TooltipProps {
  children?: react__default.ReactNode;
  className?: string;
  contentBgColor?: string;
  contentColor?: string;
  icon?: react__default.ReactNode;
  link?: string;
  linkText?: string;
  position?: Position;
  style?: react__default.CSSProperties;
  tooltipContent: JSX.Element | react__default.ReactNode | string;
}
declare const _default$d: react__default.MemoExoticComponent<{
  (props: TooltipProps): react__default.JSX.Element;
  defaultProps: {
    contentBgColor: string;
    contentColor: string;
    icon: react__default.JSX.Element;
    position: string;
    tooltipContent: string;
  };
}>;

interface ItemProps {
  logo?: string;
  text?: string;
  value: string | number | boolean | Object;
  isGroupLabel?: Boolean;
  sub_text?: string;
}
interface DropdownProps {
  id?: string;
  items?: ItemProps[];
  disabled?: boolean;
  label?: string;
  multiple?: Boolean;
  placeholder?: string;
  required?: Boolean;
  searchable?: Boolean;
  tooltip?: string;
  tooltipPosition?: Position;
  tooltipIcon?: react__default.ReactNode;
  value?: string | number | boolean | any[];
  addOption?: Boolean;
  addOptionHandler?: Function;
  enableSelectAll?: Boolean;
  onChange?: Function;
  onSearchInputChange?: Function;
  onScroll?: Function;
  className?: string;
  helperText?: string;
  validationState?: string;
  validationLabel?: string;
  prefixIcon?: react__default.ReactNode;
}
declare const Dropdown: {
  (props: DropdownProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    items: never[];
    disabled: boolean;
    label: string;
    multiple: boolean;
    placeholder: string;
    required: boolean;
    searchable: boolean;
    tooltip: null;
    addOption: boolean;
    enableSelectAll: boolean;
    helperText: string;
    className: string;
    validationState: string;
    validationLabel: string;
    prefixIcon: string;
  };
};

interface ValidationProps {
  validationState: string;
  isHidden?: boolean;
  label: string;
  className?: string;
  style?: react__default.CSSProperties;
}
declare const _default$c: react__default.MemoExoticComponent<{
  (props: ValidationProps): react__default.JSX.Element;
  defaultProps: {
    validationState: string;
    label: string;
    isHidden: boolean;
  };
}>;

interface InputProps {
  autoComplete?: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: Boolean;
  required?: Boolean;
  value?: Number | string;
  showSearchIcon?: Boolean;
  id?: Number | string;
  name?: string;
  maxLength?: Number;
  showPrefix?: Boolean;
  showSuffix?: Boolean;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  autofocus?: Boolean;
  min?: Number;
  max?: Number;
  onKeyUp?: react__default.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onKeyDown?: react__default.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onKeyPress?: react__default.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChange?: react__default.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onBlur?: react__default.FocusEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onFocus?: react__default.FocusEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onClick?: react__default.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  className?: string;
  style?: react__default.CSSProperties;
  helperText?: string;
  state?: "error" | "success" | "warning" | "default";
  stateText?: string;
  onSuffixClick?: react__default.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onPrefixClick?: react__default.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  tooltipText?: string;
  showTooltip?: boolean;
  tooltipIcon?: react__default.ReactNode;
}
declare const _default$b: react__default.MemoExoticComponent<{
  (props: InputProps): react__default.JSX.Element;
  defaultProps: {
    autoComplete: string;
    type: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    value: string;
    showSearchIcon: boolean;
    id: string;
    showPrefix: boolean;
    showSuffix: boolean;
    autofocus: boolean;
    onKeyUp: () => void;
    onKeyPress: () => void;
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    onClick: () => void;
    state: string;
    stateText: string;
    onSuffixClick: () => void;
    onPrefixClick: () => void;
    tooltip: null;
  };
}>;

interface MenuProps {
  id?: string | undefined;
  className?: string;
  mode?: string;
  position?: string;
  inverted?: boolean;
  icon?: react__default.ReactSVGElement;
  maxHeight?: number;
  open?: boolean;
  selectedIndex?: number;
  onChangeMenuItem?: Function;
  onOpen?: Function;
  onClose?: Function;
  anchorEl?: RefObject<HTMLDivElement>;
  style?: CSSProperties;
  children?: react__default.ReactNode;
}
declare const _default$a: react__default.MemoExoticComponent<{
  (props: MenuProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    className: string;
    mode: string;
    position: string;
    inverted: boolean;
    icon: react__default.JSX.Element;
    maxHeight: undefined;
    open: boolean;
    selectedIndex: number;
    onChangeMenuItem: () => void;
    onOpen: () => void;
    onClose: () => void;
    anchorEl: undefined;
    style: {};
    children: react__default.JSX.Element;
  };
}>;

interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: react__default.CSSProperties;
  children?: react__default.ReactNode;
  disabled?: boolean;
  linkConfig?: {
    href: string;
    target?: string;
  };
  divider?: boolean;
  heading?: boolean;
  selected?: boolean;
  key?: string;
  index?: number;
}
declare const _default$9: react__default.MemoExoticComponent<{
  (props: MenuItemProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    key: string;
    style: {};
    className: string;
    disabled: boolean;
    selected: boolean;
    heading: boolean;
    linkConfig: {};
    divider: boolean;
    childern: string;
  };
}>;

declare enum ModeEnum {
  MODE_REGULAR = "regular",
  MODE_CURSOR = "cursor",
}
declare enum TypeEnum {
  TYPE_DEFAULT = "default",
  TYPE_TOP = "top",
}
declare enum SizeEnum {
  SIZE_LARGE = "large",
  SIZE_SMALL = "small",
}
interface ConfigProps {
  limit?: number;
  total?: number;
  current?: number;
  prevPage?: string;
  nextPage?: string;
  currentPage?: string;
  currentTotal?: number;
}
interface PaginationProps {
  id?: string;
  name?: string;
  mode?: ModeEnum;
  type?: TypeEnum;
  size?: SizeEnum;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  value: ConfigProps;
  onChange?: (paginationData: ConfigProps) => any;
  onPreviousClick?: () => any;
  onNextClick?: () => any;
  className?: string;
  style?: react__default.CSSProperties;
  visiblePagesNodeCount?: number;
}
declare const _default$8: react__default.MemoExoticComponent<{
  (props: PaginationProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    mode: ModeEnum;
    type: TypeEnum;
    size: SizeEnum;
    pageSizeOptions: number[];
    defaultPageSize: number;
    value: {
      limit: number;
      total: number;
      current: number;
      prevPage: string;
      nextPage: string;
      currentPage: string;
      currentTotal: number;
    };
  };
}>;

interface RadioProps {
  disabled?: boolean;
  name?: string;
  value?: string;
  radioValue?: string | number;
  id?: string;
  labelText?: string;
  onChange?: Function;
  className?: string;
  style?: react__default.CSSProperties;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  icon?: react__default.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
}
declare const Radio: {
  (props: RadioProps): react__default.JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    state: null;
    stateMessage: string;
    labelText: string;
    className: string;
    style: {};
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
  };
};

declare enum StepState {
  "Current" = "Current",
  "Upcoming" = "Upcoming",
  "Disabled" = "Disabled",
  "Issue" = "Issue",
  "Completed" = "Completed",
}
type ItemType = {
  name: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: react__default.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
  state: StepState;
  content?: string;
};
type ItemsType = Array<ItemType>;
interface StepperProps {
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  className?: string;
  style?: react__default.CSSProperties;
}
declare const _default$7: react__default.MemoExoticComponent<{
  (props: StepperProps): react__default.JSX.Element;
  defaultProps: {
    items: never[];
    isHorizontal: boolean;
  };
}>;

interface TabProps {
  id?: string;
  children?: react__default.ReactChild;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: react__default.CSSProperties;
  appearance: "normal" | "navbar";
  overflow: "fit" | "scroll" | "arrow";
  tabs?: number;
}
declare const _default$6: react__default.MemoExoticComponent<{
  (props: TabProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    activeIndex: number;
    tabItem: never[];
    appearance: string;
    overflow: string;
  };
}>;

interface TabItemProps {
  id?: string;
  children?: react__default.ReactNode;
  onClick: react__default.MouseEventHandler;
  icon?: react__default.ReactElement;
  className?: string;
  style?: react__default.CSSProperties;
}
declare const _default$5: react__default.MemoExoticComponent<
  react__default.ForwardRefExoticComponent<
    TabItemProps & react__default.RefAttributes<HTMLLIElement>
  >
>;

interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: react__default.CSSProperties;
  size?: string;
  id?: string;
  labelText?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  icon?: react__default.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
}
declare const _default$4: react__default.MemoExoticComponent<{
  (props: ToggleButtonProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    value: boolean;
    disabled: boolean;
    labelText: null;
    size: string;
    state: null;
    stateMessage: string;
    icon: null;
    showIcon: boolean;
    onIconClick: () => void;
  };
}>;

interface dialogTitle {
  helperBlock: {
    text: react__default.ReactNode;
  };
  titleBlock: {
    text: react__default.ReactNode;
  };
}
interface DialogProps {
  id?: string;
  title: string | dialogTitle;
  kind: "dialog" | "acknowledgement" | "informational";
  size: "s" | "m";
  theme?: string;
  children?: react__default.ReactNode;
  positiveButtonLabel?: string | boolean;
  negativeButtonLabel?: string | boolean;
  onPositiveResponse?: Function;
  onNegativeResponse?: Function;
  isVisible?: boolean;
  isClosable?: boolean;
  className?: string;
  style?: react__default.CSSProperties;
  closeHandle?: Function;
}
declare const Dialog: {
  (props: DialogProps): react__default.JSX.Element;
  defaultProps: {
    id: string;
    title: string;
    theme: null;
    children: null;
    positiveButtonLabel: boolean;
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
};

interface ToastOptions {
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  leftIconPosition: string;
  rightIconPosition: string;
  leftImage: react__default.ReactNode;
  rightImage: react__default.ReactNode;
  position: string;
}
declare class ToastManager {
  private readonly containerRef?;
  private toasts;
  root: any;
  constructor(position: string);
  show(options: ToastOptions): void;
  destroy(id: string): void;
  private render;
}

interface CodeProps {
  fields: 4 | 6;
  getCode: Function;
  label: string;
  codeId: string;
  type?: "text" | "password";
  validationState?: string;
  hideValidation?: boolean;
  validationLabel?: string;
  validationClassName?: string;
  validationStyle?: react__default.CSSProperties;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  tooltipIcon?: react__default.ReactNode;
}
declare const _default$3: react__default.MemoExoticComponent<{
  (props: CodeProps): react__default.JSX.Element;
  defaulProps: {
    fields: number;
    label: string;
    codeId: string;
    default: string;
    hideValidation: boolean;
    validationLabel: string;
    validationClassName: string;
    validationStyle: {};
    helperText: string;
    tooltip: null;
    required: boolean;
  };
}>;

interface NudgeOptions {
  id: string;
  destroy: () => void;
  heading: string;
  supportText: string;
  duration?: number;
  cta1?: string;
  cta2?: string;
  cta1OnClick?: Function;
  cta2OnClick?: Function;
  leftImage: react__default.ReactNode;
  rightImage: react__default.ReactNode;
  className?: string;
  position: "top-right" | "top-bottom";
}
declare class NudgeManager {
  private readonly nudgeContainerRef?;
  private nudges;
  root: any;
  constructor(position: string);
  show(options: NudgeOptions): void;
  destroy(id: string): void;
  private render;
}

interface TableProps {
  id?: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
  footer?: String;
  rowStyle: string;
  headerBackground?: string;
  customSortIcon?: react__default.ReactNode;
  checkable?: boolean;
  onRowClick?: (index: number) => void;
  allChecked?: boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
  showColumnDivider?: boolean;
  customClassName?: string;
  customStyle?: react__default.CSSProperties;
  freezeLeftColumns?: number;
  freezeRightColumns?: number;
}
declare const _default$2: react__default.NamedExoticComponent<TableProps>;

interface RangeConfigProps {
  start: string | Date;
  end: string | Date;
  min: string | Date;
  max: string | Date;
}
interface DateInputProps {
  id: string;
  label: string;
  required?: boolean;
  useDatePicker?: boolean;
  dateValue?: Date | string;
  helperText?: string;
  validationState?: string;
  validationText?: string;
  validationStyle?: react__default.CSSProperties;
  validationClassName?: string;
  getDateValue?: Function;
  closeClicked?: Function;
  isRange?: boolean;
  rangeConfig?: RangeConfigProps;
  onConfirmRange?: Function;
  defaultValidation?: boolean;
}
declare const _default$1: react__default.MemoExoticComponent<{
  (props: DateInputProps): react__default.JSX.Element;
  defaulProps: {
    useDatePicker: boolean;
    required: boolean;
    tooltipText: string;
    helperText: string;
    validationStyle: {};
    validationClassName: string;
    isRange: boolean;
    rangeConfig: {};
    onConfirmRange: () => void;
    defaultValidation: boolean;
  };
}>;

interface AlertProps {
  alertWidth?: string;
  buttonText?: string;
  buttonType?: "button" | "default" | "link";
  children?: react__default.ReactNode;
  className?: string;
  displayButton?: boolean;
  extendedAlert?: boolean;
  fullWidth?: boolean;
  href?: string;
  Icon?: react__default.ReactNode;
  labelText?: string;
  linkText?: string;
  loader?: boolean;
  onClick?: react__default.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
  state?: string;
  style?: react__default.CSSProperties;
}
declare const Alert: {
  (props: AlertProps): react__default.JSX.Element;
  defaultProps: {
    className: string;
    displayButton: boolean;
    extendedAlert: boolean;
    fullWidth: boolean;
    Icon: string;
    labelText: string;
    loader: boolean;
    state: string;
    style: {};
  };
};

declare enum ScreenTypes {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}
interface CustomWidthObject {
  columnNumber: 1 | 2 | 3 | 4 | 6;
  customWidth: number | string;
}
interface GridProps {
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

declare const _default: react__default.NamedExoticComponent<GridProps>;

interface IconBaseProps extends react__default.SVGAttributes<SVGElement> {
  children?: react__default.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

declare function SvgIc4In1Sensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIc404Error(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarFour(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarNoNetwork(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarNone(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarOne(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarThree(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GBarTwo(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4GLte(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4G(props: IconBaseProps): react.JSX.Element;
declare function SvgIc4K(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAbdominalPain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAcRemote(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAccessories(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAccountInfo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAceOfSpades(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAddCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAdventure(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAerobics(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAirConditioner(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAirDry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAirFilterClean(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAirPurificationMode(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAirport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlarmOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlarmSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlarm(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlbum(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlert(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignBottom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignHorizontalCenters(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAlignLeft(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignRight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignVerticalCenters(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAlignmentFilling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAlignmentHorizontal(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAlignmentVertical(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAnalyticsData(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAnalyticsPieChartTree(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAnalyticsPieChartTwo(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAnalyticsPieChart(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAnalytics(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAndroid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAnimation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAntiCorrosion(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAntibacteria(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAnxiety(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAparell(props: IconBaseProps): react.JSX.Element;
declare function SvgIcApartmentComplex(props: IconBaseProps): react.JSX.Element;
declare function SvgIcApartment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAppSwitcher(props: IconBaseProps): react.JSX.Element;
declare function SvgIcApple(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArcade(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArchiveRoom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArchive(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAreaMap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAreaTypeBottom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAreaTypeCenter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAreaTypeJustify(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAreaTypeTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArea(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArena(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAristMic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArmedOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArmedPartially(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArmed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowBack(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowDown(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowLineDiagonal(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcArrowLineDot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowLine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowNext(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArrowUp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcArtificialInsemination(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcAssistiveGrid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAstrology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAtHomeHazard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAtHome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAttachment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAudio(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAutoMode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAutoRikshaw(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAux35(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAux(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAwardBadge(props: IconBaseProps): react.JSX.Element;
declare function SvgIcAward(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBabyBottle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBabyChangingRoom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBabyMonitor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBack(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBackspace(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBadminton(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBakery(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBalcony(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBankAccount(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBankBranch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBankMainBranch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBarcode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBarnStock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBarn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBasketballPlayer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBasketball(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBathroom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBathtub(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery10(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery100(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery20(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery30(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery40(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery5(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery50(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery60(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery70(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery80(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBattery90(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryEmptyLoading(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryEmpty(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryFullLoading(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryFull(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryHorizontal1Bar(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryHorizontal2Bar(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryHorizontal3Bar(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryHorizontalEmpty(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBatteryLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryMid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBatteryWarning(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBeamer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBeautyProducts(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBeauty(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBedDouble(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBedMedical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBedSingle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBedSleeping(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBikeMan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBill(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBinaryCode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBiography(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBiology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBirthday(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBladder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBlocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBloodBag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBloodBank(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBloodCells(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBloodGlucoseMeter(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBloodPressureCuff(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBloodTest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBloodVessels(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBlood(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBluetoothConnected(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBluetooth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBoards(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBodyCare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBodyScale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBold(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBookmarkAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBookmark(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBoxing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrainAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrainStroke(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrainSurgery(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrightnessDisplay(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcBrightnessFull(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrightnessHalf(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrightness(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBroadcast(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrokenImage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBroom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBrush(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBuffer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBulb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBull(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBurgerMenu(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBusFront(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBusShuttle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcBusSide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcButler(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCableBox(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCablePlug(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalculate(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalculatorPercentage(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCalculator(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalendarEvent(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalendarSchedule(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalendarWeek(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalendarWeekend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalendar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCalf(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallChat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallClear(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallComposer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallData(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallDids(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallEnd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallForward(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallGroup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallHd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallHold(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallHunting(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallIncomingOutgoing(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCallIncomming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallMissed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallNumber(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallOutgoing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallSound(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCallWifi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCall(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraAuto(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraDome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraFocus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraHighEnd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraManual(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCameraVarifocalBullet(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCameraVarifocalDome(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCancer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarDriver(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarFleet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarFront(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarShareRide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarSide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarbonDioxide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCardiologyOutput(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCardiologyVentricle(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCardiology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCards(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarpenter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCarpool(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCartPreorder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCart(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCastMedia(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCastScreen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCast(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCategoriesSub(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCategories(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCattleGroup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCattleList(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCcvOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCcv(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCelebration(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChaos(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCharity(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChats(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChemistry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCherry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChestPain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChevronDownCircle(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcChevronDown(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChevronLeftCircle(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcChevronLeft(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChevronRightCircle(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcChevronRight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChevronUpCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChevronUp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChildrenGame(props: IconBaseProps): react.JSX.Element;
declare function SvgIcChip(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCholesterol(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCinchCable(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCinch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCity(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClauset(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCleaningRequest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCleaning(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClear(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClerk(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClimbing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClipping(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloseRemove(props: IconBaseProps): react.JSX.Element;
declare function SvgIcClose(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloudConnect(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloudOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloudSynced(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloudUpload(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCloud(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCodeDocument(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcColonComplaints(props: IconBaseProps): react.JSX.Element;
declare function SvgIcColourPalette(props: IconBaseProps): react.JSX.Element;
declare function SvgIcColourSpot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcComedy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCommunicationSkills(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCompare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcComparison(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCompoundInterest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCompress(props: IconBaseProps): react.JSX.Element;
declare function SvgIcComputerGraph(props: IconBaseProps): react.JSX.Element;
declare function SvgIcComputerHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcComputer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConfirm(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConnectedHome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConsultant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConsumptionAccounted(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcConsumptionAverage(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcConsumptionHigh(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConsumptionLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcConsumptionUnaccounted(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcContactAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcContactShare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcContacts(props: IconBaseProps): react.JSX.Element;
declare function SvgIcControler(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCooking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCoolingHeating(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCooling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCopyDocument(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCopy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCough(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCoupon(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCovid19(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowAdult(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowDeviceOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowDevice(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowHeatActivity(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowProfile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCowRetired(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCreatePlaylist(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCricket(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCrime(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCropFree(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCropOriginal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCropPlanningStyle1(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCropPlanningStyle2(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCropPlanningStyle3(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcCrop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCutOut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCutScissor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcCv(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDancing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDarkLight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataInOutNone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataInOut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataIn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataLoan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataOut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataPack(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDataSaver(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDayNight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDc9V(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDeleteBackspace(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDeliveryBoy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDeployment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDesignTools(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDevelopment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDeviceHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDevicesMixed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDevotion(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDiamond(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDiaolog(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDice2(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDigitalEcosystem(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDigitalSelfService(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDining(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDirectionTurnRight(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDirectionsOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDisabled(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDisinfectant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDislike(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDisplayLed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDisposeOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDistributeHorizontalSpacing(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDistributeVerticalSpacing(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDistribution(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDizzy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDna(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoctor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDocumentUnknown(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDocumentViewer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDocument(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDocumentary(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDolbySound(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDongleAudio(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDongleVideo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoodle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorBell(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorLocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorOpen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorUnlocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDoorlock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownloadFast(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownloadQueueBottom(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDownloadQueueTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownloadQueue(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownload(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownloadsFast(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDownloads(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDrama(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDrawer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDrill(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDrinks(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDrone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDryAir(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDthSignal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDualCameraHorizontal(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcDualCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDualSim(props: IconBaseProps): react.JSX.Element;
declare function SvgIcDvdPlayer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEBookReader(props: IconBaseProps): react.JSX.Element;
declare function SvgIcESim(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEarPain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEditPen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEdit(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEducation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcElephant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcElevator(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEllipse(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEmergencyServices(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcEmvcoTapPay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEndChat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEndocrinology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEnergyOthers(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEnergyTotal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEngineeringRequest(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcEnter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEnterpreneurial(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEntertainmentPlay(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcEntertainment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEpisodes(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEqualizer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEraser(props: IconBaseProps): react.JSX.Element;
declare function SvgIcErrorColored(props: IconBaseProps): react.JSX.Element;
declare function SvgIcError(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEthernetOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcEthernet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExchangeData(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExchange(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExclamation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExploreCompass(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExposure(props: IconBaseProps): react.JSX.Element;
declare function SvgIcExtract(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFaceFilter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFacebook(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFallopianTube(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFamilyHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFamilyMember(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFanAutoSpeed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFanSpeedHigh(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFanSpeedLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFanSpeedMedium(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFanSpeedTurbo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFantasy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFaq(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFashionChild(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFashionWoman(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFashion(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFavorite(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFavouriteMode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFeaver(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFeedbackAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFeedbackRating(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFeedback(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFemaleHygieneProducts(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcFemaleMale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFemale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFertilized(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFertilizer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFilterMultiple(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFilter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFingerprint(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFinishLine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFireAlarm(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFire(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFirefighterManager(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcFirefighterOfficer(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcFirefighter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFirstAid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFirstpage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFitness(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFixedDeposit(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlagGb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlagIn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlashAuto(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlashOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlash(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlightGame(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlightModeOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlightMode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlipCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlipHorizontal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlipVertical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlower(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFlushRelay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFolderFavorites(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFolderMoveFiles(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFolderRated(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFolderRemove(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFolder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFoodDrink(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFootball(props: IconBaseProps): react.JSX.Element;
declare function SvgIcForkSpoon(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFormAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcForm(props: IconBaseProps): react.JSX.Element;
declare function SvgIcForms(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFort(props: IconBaseProps): react.JSX.Element;
declare function SvgIcForward1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcForward(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFoyer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFrame(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFrontDoor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFuel(props: IconBaseProps): react.JSX.Element;
declare function SvgIcFullscreenModeOff(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcFullscreenMode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGames(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGamingCloud(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGamingControllers(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcGamingProfile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGaming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGarage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGardenPlants(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGardenTools(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGasPiped(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGasSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGas(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGastrointestinal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGateway1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGateway2(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGayser(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGeometry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGhost(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGiftCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGift(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGladiator(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGlobe(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoBack10(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoBack30(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoBack(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoForward10(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoForward30(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoForward(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoogleLens(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGoogle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGpon(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGraphIncreasing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGraphLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGraphTable(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGrocery(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGroup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGuard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcGuestroom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHairDresser(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHairProblems(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHairRoot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHalloween(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHammer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHandBag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHandLuggage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHandSoap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHandcuffs(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHands(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHardDisk(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHarddrive(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHarvest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHcvTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHdScreen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHdmi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHdrAuto(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHdrOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHdr(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeadlight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeadphones(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeadsetBluetooth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeadset(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHealthConditions(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHealthProtection(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHealthReport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeartRate(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHeifer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHelmetWar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHelp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHieferAbortion(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHieferBreeding(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHighSpeed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHighTemperatureOff(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcHockeyIce(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHockey(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHomeCare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHomeConnection(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHomeMaintenance(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHomework(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHorror(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHorzontalSwing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHospitalBed(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHospital(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHotspotLocator(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHotspot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHourglass(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHtml5(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHubmode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHumidity(props: IconBaseProps): react.JSX.Element;
declare function SvgIcHydrant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIceSkating(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIdCheck(props: IconBaseProps): react.JSX.Element;
declare function SvgIcId(props: IconBaseProps): react.JSX.Element;
declare function SvgIcImage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcImport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIncognito(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIncoming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIndustry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInfant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInfoText(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInfo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInformationSensor(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcInfrastructure(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInsemination(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInsomnia(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInstagram(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIntercomCallMobile(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcIntercomCalls(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInterestLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInterestPayout(props: IconBaseProps): react.JSX.Element;
declare function SvgIcInternetHighSpeed(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcInternet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIntersection(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIpCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIp67(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIron(props: IconBaseProps): react.JSX.Element;
declare function SvgIcIrrigation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcItalic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcItching(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJanitor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJewelleryDiamond(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJewelleryRing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioFiDongle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioFi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioInstitute(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioLink(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioPayments(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJioTunes(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJiopay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcJoints(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKabaddi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKarate(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKeyOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKey(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKeyboard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKidneyBladder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKidney(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKidsroom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKiranaStore(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKitchenExtractor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKitchenPot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKitchenSink(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKitchen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKnightChess(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKnownConditions(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKycManager(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKycSupervisor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcKyc(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLamp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLandComposition(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLandPreparation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLandscape(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLanguage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLaptopMobile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLaptopScreen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLaptop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLastpage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLcvTop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLibrary(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLightbulb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLike(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLimitAccessProtection(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcLimitAccess(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLineCrossing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLinkedAccounts(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLinkedin(props: IconBaseProps): react.JSX.Element;
declare function SvgIcList(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLiveCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLoactionShare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocationDoctor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocationHospital(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocationMobileCoolers(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcLocationOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocationOpen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocationPoint(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLocation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLockUnlock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLogin(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLogout(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLoiteringOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLotus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLteDevice(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLuggage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcLungs(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMagic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMagnetTrain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMail(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcManager(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMapLayers(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMarioGame(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMaskOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMask(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMason(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMathematics(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMediaShareMobile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMediaShare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicalFiles(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicalHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicalInsurance(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicineMortar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMedicines(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMeetingRoom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMegaphone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMenuCardRoomservice(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcMenuCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMerge(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMessagePartiallyDelivered(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcMessageRead(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMessageSend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMicOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMicroSd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMicroscope(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMicrowave(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMilkLow(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMilk(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMinimise(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMinus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMirrorCast(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobileDataOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobileData(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobileDevices(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobileHorizontal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobileNumberPortability(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcMobileOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMobile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcModem(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneyAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneyLoan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneyRequest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneySend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneyToSelf(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoneybag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMonster(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMonth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMopedDelivery(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMopedSide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoreHorizontal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoreVertical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMotionOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMotorbikeSide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMouse(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMoversPackers(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMovie(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMultiSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMunicipalTax(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMusicNote(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMusic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMusical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMyLocation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcMythology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNamaste(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNas(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNatureOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNature(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNetworkDetails(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNetworkDish(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNetworkFuture(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNetwork(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNeutralGender(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNewChat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNews(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNextCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNextTitle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNext(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNfc(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNicCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNoRepair(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNoSimCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNonVeg(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNose(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNotAtHome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNotes(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNotificationOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNotification(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNowPlaying(props: IconBaseProps): react.JSX.Element;
declare function SvgIcNumPad(props: IconBaseProps): react.JSX.Element;
declare function SvgIcObesity(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOfferCoupon(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOffer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOlympics(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOneTap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOpenInNewTab(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOpenWith(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOperatingTable(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOperator(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOrder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOrders(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOtp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOutOfStock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOutgoing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOutlet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOverlay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcOxygen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPageFlip(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPaintRoller(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPaired(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPairingComplete(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPairing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPanicButton(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPanorma(props: IconBaseProps): react.JSX.Element;
declare function SvgIcParentalControlPhone(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcParentalControlWeb(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcParking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPartialOxygenPressure(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPartner(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPassbook(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPasteDocument(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPaste(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPauseCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPause(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPayBill(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPayEmiInstall(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPayFriend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPayRecurring(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPaySchedule(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPaymentPlan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPayment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPercentageDecrease(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPercentageIncrease(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPercentageValue(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPeriodProblems(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPersonalHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPersonalTrainer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPestProblem(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPesticides(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPests(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPets(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPharmacy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhoneKeyAccess(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhoneNumberLandline(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPhonePerformance(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhoneSecured(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoCamera(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoCrop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoFilter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoMediaFiles(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoRemove(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoResize(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhotoSize(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPhoto(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPinOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPin(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPipe(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlanAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlaneArrival(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlaneDeparture(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlans(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlantGrowth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlanting(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlayCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlayPause(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlaylistAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlaylistSuccessful(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPlaylist(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlcPoe(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlcWifi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlc(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPlug(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPooja(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPool(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPorch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPortrait(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPowerOverEthernet(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcPregnancyTest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPreviousTitle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPrimeContent(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPrint(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPro(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProfileFemale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProfileMale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProfile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProjection(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProtectionLocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProtectionThreats(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcProtectionUnlock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcProtection(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPulseOximeter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcPuzzle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcQrCode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcQuickCapture(props: IconBaseProps): react.JSX.Element;
declare function SvgIcQuickPayment(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRacingCar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRacingRacetrack(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRadioSignal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRadioStation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRadio(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRamHorizonal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRam(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRaspberry(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReader(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRearrange(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRecentHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRechargeFriend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRechargeHistory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRecord(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRecording(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRectangle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRecycling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRedo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRefresh(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRefund(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRegularSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemotePush(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemoteRecord(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemoteUniversalA(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemoteUniversalB(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemoteUniversalU(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemoteUniversal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRemote(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRename(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRepeatOne(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRepeat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReplay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReplyAll(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReplyCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReply(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRequest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcResearch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReset(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRestaurant(props: IconBaseProps): react.JSX.Element;
declare function SvgIcResumeReading(props: IconBaseProps): react.JSX.Element;
declare function SvgIcResumeWatching(props: IconBaseProps): react.JSX.Element;
declare function SvgIcReturn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRevolver(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRewind(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRibbonGrid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRingerVibrate(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoRepair(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoamingNetwork(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoamingOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoaming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRobot(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRocket(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRollerBlindsClosed(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcRollerBlinds(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRomance(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoomPurifyer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRotatePhone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoulette(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoutesTraffic(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRoutes(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRuler(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRunning(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRupeeCoinOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRupeeCoin(props: IconBaseProps): react.JSX.Element;
declare function SvgIcRupee(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSafetySensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSampling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSaturation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSave(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSavings(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScale(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScalpel(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScanBody(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScanFace(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScanPicture(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScanQrCode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScanText(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSchedule(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScheduledDoctorAppointment(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcScheduledDoctorConsultation(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSciFiction(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScreenFull(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScreenMinimise(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScreenReduce(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScreen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcScribble(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSdCard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSearch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSeats(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSecureLocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSecured(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSecurityCameraBall(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSecurityCameraCeiling(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSecuritySensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSecurityVehicle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSecurityguardManager(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSecurityguardOfficer(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSecurityguard(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSeedling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSeekbar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSendMessage(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServerCloud(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServerHome(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServerInternet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServerShared(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServerWifi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServer(props: IconBaseProps): react.JSX.Element;
declare function SvgIcServiceCenter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSettings(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSewingMachine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShare(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShoppingBagFavorite(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcShoppingBag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShoppingBags(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShoppingBasket(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShopping(props: IconBaseProps): react.JSX.Element;
declare function SvgIcShuffle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSignIn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSignOut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSign(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSim1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSim2(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSimOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSimPostPaid(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSim(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSirene(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSkating(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSkull(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSleepMode(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSleeping(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSlide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSlowMotion(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartBulbConnect(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartBulbDimmable(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSmartBulbRgb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartBulb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartCleaner(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartDoorlock(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartFridge(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartHoover(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartOutlet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartPlug(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartSwitchPlug(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartWatch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmartphoneLandline(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSmileyDelighted(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileyHappy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileyNeutral(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileyOutraged(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileySatisfied(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileyUnhappy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmileyUnsatisfied(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcSmokeSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmokingOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmoking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmsGroup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmsReceive(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmsSend(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSms(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSmss(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSnacks(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSnapchat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSofa(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoilLayers(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoil(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSortHandle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSortList(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSort(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSosCircle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSos(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoundDisabled(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoundLoud(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoundMedium(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSoundQuiet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSound(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSowing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpade(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpanner(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpdifOpticalPos(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpdifOptical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpeaker(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSportsPulse(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSpotcolor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSprayCan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStabilization(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStairway(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStamp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStarAdd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStatusFail(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStatusLoading(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStatusSuccessful(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSteeringWheel(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSteps(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStopwatch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStoreRoom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStore(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStory(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStreamOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStream(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStretching(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStroller(props: IconBaseProps): react.JSX.Element;
declare function SvgIcStudent(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSubscription(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSubscriptions(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSubtitle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSuccessColored(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSuccess(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSunHeating(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSupervisor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSupportAdmin(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSupport(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSurvey(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSwap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSwimming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSwitch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcSword(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTableTennis(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTablet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTag(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTargetAim(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTarget(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTariffAlert(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTariffChecking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTariffExpired(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTask(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTaxiFront(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTeach(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTeamMembers(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTeam(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTechnology(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTeddyLove(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTeddy(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTemperatureDown(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTemperatureOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTemperatureUp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTemperature(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTempered(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTemple(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTennis(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTerminal(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTest(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTextAlignCenter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTextAlignJustify(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTextAlignLeft(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTextAlignRight(props: IconBaseProps): react.JSX.Element;
declare function SvgIcText(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTextbook(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTheaterRoom(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTheme(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThinkingBrain(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThinkingCritical(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThinking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThreeDay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThroat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcThumbnail(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTicketDetails(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTicketPnrNumber(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTicketRaise(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTicketStatus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTicket(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTickets(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTime(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTimelapse(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTimeline(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTimelines(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTimezone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTimezones(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTips(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTochpanel(props: IconBaseProps): react.JSX.Element;
declare function SvgIcToddler(props: IconBaseProps): react.JSX.Element;
declare function SvgIcToiletManWomen(props: IconBaseProps): react.JSX.Element;
declare function SvgIcToiletSeat(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTollStation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcToll(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTooth(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTorchOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTorch(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTower(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrackEcg(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrackVitals(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrafficCone(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrainDelay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrainFront(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrainStatus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTramFront(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTransactionHistory(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcTrashClear(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrash(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrendingFlame(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTriangle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrivia(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTrolleyClearance(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTruckDelivery(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTruckSide(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvCall(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvCam(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvChannels(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvOnline(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvPlay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTvPlus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTv(props: IconBaseProps): react.JSX.Element;
declare function SvgIcTwitter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUdderOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUdder(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUnderline(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUndo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUnpaired(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUpdate(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUpiNumber(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUpload1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUpload(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUploads(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUsbCable(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUsbDongle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUsbStick(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUsb(props: IconBaseProps): react.JSX.Element;
declare function SvgIcUser(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVaccine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVaccumCleaner(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVampire(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVeg(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVerticalSwing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoCallGroup(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoCall(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoCalls(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoEnd(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoInOut(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoIncomming(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoOutgoing(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoResize(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoSize(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVideoSurveillance(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcVideo(props: IconBaseProps): react.JSX.Element;
declare function SvgIcViewTile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVinylRecord(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVirus(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVisibleOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVisible(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVoice(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVolume(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVoucher4G(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVoucherCashback(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVoucherPlan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVpn(props: IconBaseProps): react.JSX.Element;
declare function SvgIcVr(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWalkingAids(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWalking(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWallet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWallpaper(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWar(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWarehouse(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWarningColored(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWarning(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWarranty(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWashingMachine(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterBottleReuseable(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcWaterBottle(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterChecked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterPipe(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterPump(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterPurifier(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterSensor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWaterTap(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWater(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWateringCan(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWatermelon(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWebBrowserCursor(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWebBrowserMobile(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWebBrowserSuccessful(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcWebBrowser(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWebseries(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWeek(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWeightTraining(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWhatsapp(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWideAngle170(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWidestRange(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWidgets(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiConnected(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiEnable(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiLocked0(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiLocked1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiLocked2(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiLocked3(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiLocked(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiNetwork(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiNoInternet(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiNotFound(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiOff(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiOk(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiRouter(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiSignInRequired(
  props: IconBaseProps
): react.JSX.Element;
declare function SvgIcWifiStrength0(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiStrength1(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiStrength2(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifiStrength3(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWifi(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWord(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWork(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWorkshop(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWps(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWrestling(props: IconBaseProps): react.JSX.Element;
declare function SvgIcWriting(props: IconBaseProps): react.JSX.Element;
declare function SvgIcXRayBody(props: IconBaseProps): react.JSX.Element;
declare function SvgIcXRay(props: IconBaseProps): react.JSX.Element;
declare function SvgIcYogaMeditation(props: IconBaseProps): react.JSX.Element;
declare function SvgIcYoga(props: IconBaseProps): react.JSX.Element;
declare function SvgIcYoutube(props: IconBaseProps): react.JSX.Element;
declare function SvgIcZombie(props: IconBaseProps): react.JSX.Element;

export {
  Alert,
  Autocomplete,
  _default$g as Badge,
  _default$f as Button,
  Card,
  Checkbox,
  _default$e as Chip,
  _default$3 as Code,
  _default$1 as DateInput,
  Dialog,
  Dropdown,
  _default as Grid,
  _default$b as Input,
  _default$a as Menu,
  _default$9 as MenuItem,
  NudgeManager,
  _default$8 as Pagination,
  Radio,
  _default$7 as Stepper,
  SvgIc404Error,
  SvgIc4G,
  SvgIc4GBarFour,
  SvgIc4GBarNoNetwork,
  SvgIc4GBarNone,
  SvgIc4GBarOne,
  SvgIc4GBarThree,
  SvgIc4GBarTwo,
  SvgIc4GLte,
  SvgIc4In1Sensor,
  SvgIc4K,
  SvgIcAbdominalPain,
  SvgIcAcRemote,
  SvgIcAccessories,
  SvgIcAccountInfo,
  SvgIcAceOfSpades,
  SvgIcAdd,
  SvgIcAddCircle,
  SvgIcAdventure,
  SvgIcAerobics,
  SvgIcAirConditioner,
  SvgIcAirDry,
  SvgIcAirFilterClean,
  SvgIcAirPurificationMode,
  SvgIcAirport,
  SvgIcAlarm,
  SvgIcAlarmOff,
  SvgIcAlarmSensor,
  SvgIcAlbum,
  SvgIcAlert,
  SvgIcAlignBottom,
  SvgIcAlignHorizontalCenters,
  SvgIcAlignLeft,
  SvgIcAlignRight,
  SvgIcAlignTop,
  SvgIcAlignVerticalCenters,
  SvgIcAlignmentFilling,
  SvgIcAlignmentHorizontal,
  SvgIcAlignmentVertical,
  SvgIcAnalytics,
  SvgIcAnalyticsData,
  SvgIcAnalyticsPieChart,
  SvgIcAnalyticsPieChartTree,
  SvgIcAnalyticsPieChartTwo,
  SvgIcAndroid,
  SvgIcAnimation,
  SvgIcAntiCorrosion,
  SvgIcAntibacteria,
  SvgIcAnxiety,
  SvgIcAparell,
  SvgIcApartment,
  SvgIcApartmentComplex,
  SvgIcAppSwitcher,
  SvgIcApple,
  SvgIcArcade,
  SvgIcArch,
  SvgIcArchive,
  SvgIcArchiveRoom,
  SvgIcArea,
  SvgIcAreaMap,
  SvgIcAreaTypeBottom,
  SvgIcAreaTypeCenter,
  SvgIcAreaTypeJustify,
  SvgIcAreaTypeTop,
  SvgIcArena,
  SvgIcAristMic,
  SvgIcArmed,
  SvgIcArmedOff,
  SvgIcArmedPartially,
  SvgIcArrowBack,
  SvgIcArrowDown,
  SvgIcArrowLine,
  SvgIcArrowLineDiagonal,
  SvgIcArrowLineDot,
  SvgIcArrowNext,
  SvgIcArrowUp,
  SvgIcArtificialInsemination,
  SvgIcAssistiveGrid,
  SvgIcAstrology,
  SvgIcAtHome,
  SvgIcAtHomeHazard,
  SvgIcAttachment,
  SvgIcAudio,
  SvgIcAutoMode,
  SvgIcAutoRikshaw,
  SvgIcAux,
  SvgIcAux35,
  SvgIcAward,
  SvgIcAwardBadge,
  SvgIcBabyBottle,
  SvgIcBabyChangingRoom,
  SvgIcBabyMonitor,
  SvgIcBack,
  SvgIcBackspace,
  SvgIcBadminton,
  SvgIcBakery,
  SvgIcBalcony,
  SvgIcBankAccount,
  SvgIcBankBranch,
  SvgIcBankMainBranch,
  SvgIcBarcode,
  SvgIcBarn,
  SvgIcBarnStock,
  SvgIcBasketball,
  SvgIcBasketballPlayer,
  SvgIcBathroom,
  SvgIcBathtub,
  SvgIcBattery10,
  SvgIcBattery100,
  SvgIcBattery20,
  SvgIcBattery30,
  SvgIcBattery40,
  SvgIcBattery5,
  SvgIcBattery50,
  SvgIcBattery60,
  SvgIcBattery70,
  SvgIcBattery80,
  SvgIcBattery90,
  SvgIcBatteryEmpty,
  SvgIcBatteryEmptyLoading,
  SvgIcBatteryFull,
  SvgIcBatteryFullLoading,
  SvgIcBatteryHorizontal1Bar,
  SvgIcBatteryHorizontal2Bar,
  SvgIcBatteryHorizontal3Bar,
  SvgIcBatteryHorizontalEmpty,
  SvgIcBatteryLow,
  SvgIcBatteryMid,
  SvgIcBatteryOff,
  SvgIcBatteryWarning,
  SvgIcBeamer,
  SvgIcBeauty,
  SvgIcBeautyProducts,
  SvgIcBedDouble,
  SvgIcBedMedical,
  SvgIcBedSingle,
  SvgIcBedSleeping,
  SvgIcBikeMan,
  SvgIcBill,
  SvgIcBinaryCode,
  SvgIcBiography,
  SvgIcBiology,
  SvgIcBirthday,
  SvgIcBladder,
  SvgIcBlocked,
  SvgIcBlood,
  SvgIcBloodBag,
  SvgIcBloodBank,
  SvgIcBloodCells,
  SvgIcBloodGlucoseMeter,
  SvgIcBloodPressureCuff,
  SvgIcBloodTest,
  SvgIcBloodVessels,
  SvgIcBluetooth,
  SvgIcBluetoothConnected,
  SvgIcBoards,
  SvgIcBodyCare,
  SvgIcBodyScale,
  SvgIcBold,
  SvgIcBookmark,
  SvgIcBookmarkAdd,
  SvgIcBoxing,
  SvgIcBrain,
  SvgIcBrainAdd,
  SvgIcBrainStroke,
  SvgIcBrainSurgery,
  SvgIcBrightness,
  SvgIcBrightnessDisplay,
  SvgIcBrightnessFull,
  SvgIcBrightnessHalf,
  SvgIcBroadcast,
  SvgIcBrokenImage,
  SvgIcBroom,
  SvgIcBrush,
  SvgIcBuffer,
  SvgIcBulb,
  SvgIcBull,
  SvgIcBurgerMenu,
  SvgIcBusFront,
  SvgIcBusShuttle,
  SvgIcBusSide,
  SvgIcButler,
  SvgIcCableBox,
  SvgIcCablePlug,
  SvgIcCalculate,
  SvgIcCalculator,
  SvgIcCalculatorPercentage,
  SvgIcCalendar,
  SvgIcCalendarEvent,
  SvgIcCalendarSchedule,
  SvgIcCalendarWeek,
  SvgIcCalendarWeekend,
  SvgIcCalf,
  SvgIcCall,
  SvgIcCallChat,
  SvgIcCallClear,
  SvgIcCallComposer,
  SvgIcCallData,
  SvgIcCallDids,
  SvgIcCallEnd,
  SvgIcCallForward,
  SvgIcCallGroup,
  SvgIcCallHd,
  SvgIcCallHold,
  SvgIcCallHunting,
  SvgIcCallIncomingOutgoing,
  SvgIcCallIncomming,
  SvgIcCallMissed,
  SvgIcCallNumber,
  SvgIcCallOff,
  SvgIcCallOutgoing,
  SvgIcCallSound,
  SvgIcCallWifi,
  SvgIcCamera,
  SvgIcCameraAuto,
  SvgIcCameraDome,
  SvgIcCameraFocus,
  SvgIcCameraHighEnd,
  SvgIcCameraManual,
  SvgIcCameraVarifocalBullet,
  SvgIcCameraVarifocalDome,
  SvgIcCancer,
  SvgIcCarDriver,
  SvgIcCarFleet,
  SvgIcCarFront,
  SvgIcCarShareRide,
  SvgIcCarSide,
  SvgIcCarTop,
  SvgIcCarbonDioxide,
  SvgIcCard,
  SvgIcCardiology,
  SvgIcCardiologyOutput,
  SvgIcCardiologyVentricle,
  SvgIcCards,
  SvgIcCare,
  SvgIcCarpenter,
  SvgIcCarpool,
  SvgIcCart,
  SvgIcCartPreorder,
  SvgIcCast,
  SvgIcCastMedia,
  SvgIcCastScreen,
  SvgIcCategories,
  SvgIcCategoriesSub,
  SvgIcCattleGroup,
  SvgIcCattleList,
  SvgIcCcv,
  SvgIcCcvOff,
  SvgIcCelebration,
  SvgIcChaos,
  SvgIcCharity,
  SvgIcChat,
  SvgIcChats,
  SvgIcChemistry,
  SvgIcCherry,
  SvgIcChestPain,
  SvgIcChevronDown,
  SvgIcChevronDownCircle,
  SvgIcChevronLeft,
  SvgIcChevronLeftCircle,
  SvgIcChevronRight,
  SvgIcChevronRightCircle,
  SvgIcChevronUp,
  SvgIcChevronUpCircle,
  SvgIcChildrenGame,
  SvgIcChip,
  SvgIcCholesterol,
  SvgIcCinch,
  SvgIcCinchCable,
  SvgIcCity,
  SvgIcClauset,
  SvgIcCleaning,
  SvgIcCleaningRequest,
  SvgIcClear,
  SvgIcClerk,
  SvgIcClimbing,
  SvgIcClipping,
  SvgIcClose,
  SvgIcCloseRemove,
  SvgIcCloud,
  SvgIcCloudConnect,
  SvgIcCloudOff,
  SvgIcCloudSynced,
  SvgIcCloudUpload,
  SvgIcCode,
  SvgIcCodeDocument,
  SvgIcColonComplaints,
  SvgIcColourPalette,
  SvgIcColourSpot,
  SvgIcComedy,
  SvgIcCommunicationSkills,
  SvgIcCompare,
  SvgIcComparison,
  SvgIcCompoundInterest,
  SvgIcCompress,
  SvgIcComputer,
  SvgIcComputerGraph,
  SvgIcComputerHistory,
  SvgIcConfirm,
  SvgIcConnectedHome,
  SvgIcConsultant,
  SvgIcConsumptionAccounted,
  SvgIcConsumptionAverage,
  SvgIcConsumptionHigh,
  SvgIcConsumptionLow,
  SvgIcConsumptionUnaccounted,
  SvgIcContactAdd,
  SvgIcContactShare,
  SvgIcContacts,
  SvgIcControler,
  SvgIcCooking,
  SvgIcCooling,
  SvgIcCoolingHeating,
  SvgIcCopy,
  SvgIcCopyDocument,
  SvgIcCough,
  SvgIcCoupon,
  SvgIcCovid19,
  SvgIcCowAdult,
  SvgIcCowDevice,
  SvgIcCowDeviceOff,
  SvgIcCowHeatActivity,
  SvgIcCowProfile,
  SvgIcCowRetired,
  SvgIcCreatePlaylist,
  SvgIcCricket,
  SvgIcCrime,
  SvgIcCrop,
  SvgIcCropFree,
  SvgIcCropOriginal,
  SvgIcCropPlanningStyle1,
  SvgIcCropPlanningStyle2,
  SvgIcCropPlanningStyle3,
  SvgIcCup,
  SvgIcCut,
  SvgIcCutOut,
  SvgIcCutScissor,
  SvgIcCv,
  SvgIcDancing,
  SvgIcDarkLight,
  SvgIcDataCard,
  SvgIcDataCircle,
  SvgIcDataIn,
  SvgIcDataInOut,
  SvgIcDataInOutNone,
  SvgIcDataLoan,
  SvgIcDataOut,
  SvgIcDataPack,
  SvgIcDataSaver,
  SvgIcDay,
  SvgIcDayNight,
  SvgIcDc9V,
  SvgIcDeleteBackspace,
  SvgIcDeliveryBoy,
  SvgIcDeployment,
  SvgIcDesignTools,
  SvgIcDevelopment,
  SvgIcDeviceHistory,
  SvgIcDevicesMixed,
  SvgIcDevotion,
  SvgIcDiamond,
  SvgIcDiaolog,
  SvgIcDice2,
  SvgIcDigitalEcosystem,
  SvgIcDigitalSelfService,
  SvgIcDining,
  SvgIcDirectionTurnRight,
  SvgIcDirectionsOff,
  SvgIcDisabled,
  SvgIcDisinfectant,
  SvgIcDislike,
  SvgIcDisplayLed,
  SvgIcDisposeOff,
  SvgIcDistributeHorizontalSpacing,
  SvgIcDistributeVerticalSpacing,
  SvgIcDistribution,
  SvgIcDizzy,
  SvgIcDna,
  SvgIcDoctor,
  SvgIcDocument,
  SvgIcDocumentUnknown,
  SvgIcDocumentViewer,
  SvgIcDocumentary,
  SvgIcDolbySound,
  SvgIcDongleAudio,
  SvgIcDongleVideo,
  SvgIcDoodle,
  SvgIcDoor,
  SvgIcDoorBell,
  SvgIcDoorCamera,
  SvgIcDoorLocked,
  SvgIcDoorOpen,
  SvgIcDoorSensor,
  SvgIcDoorUnlocked,
  SvgIcDoorlock,
  SvgIcDownload,
  SvgIcDownloadFast,
  SvgIcDownloadQueue,
  SvgIcDownloadQueueBottom,
  SvgIcDownloadQueueTop,
  SvgIcDownloads,
  SvgIcDownloadsFast,
  SvgIcDrama,
  SvgIcDrawer,
  SvgIcDrill,
  SvgIcDrinks,
  SvgIcDrone,
  SvgIcDryAir,
  SvgIcDth,
  SvgIcDthSignal,
  SvgIcDualCamera,
  SvgIcDualCameraHorizontal,
  SvgIcDualSim,
  SvgIcDvdPlayer,
  SvgIcEBookReader,
  SvgIcESim,
  SvgIcEar,
  SvgIcEarPain,
  SvgIcEdit,
  SvgIcEditPen,
  SvgIcEducation,
  SvgIcElephant,
  SvgIcElevator,
  SvgIcEllipse,
  SvgIcEmergencyServices,
  SvgIcEmvcoTapPay,
  SvgIcEndChat,
  SvgIcEndocrinology,
  SvgIcEnergyOthers,
  SvgIcEnergyTotal,
  SvgIcEngineeringRequest,
  SvgIcEnter,
  SvgIcEnterpreneurial,
  SvgIcEntertainment,
  SvgIcEntertainmentPlay,
  SvgIcEpisodes,
  SvgIcEqualizer,
  SvgIcEraser,
  SvgIcError,
  SvgIcErrorColored,
  SvgIcEthernet,
  SvgIcEthernetOff,
  SvgIcExchange,
  SvgIcExchangeData,
  SvgIcExclamation,
  SvgIcExploreCompass,
  SvgIcExport,
  SvgIcExposure,
  SvgIcExtract,
  SvgIcFaceFilter,
  SvgIcFacebook,
  SvgIcFallopianTube,
  SvgIcFamilyHistory,
  SvgIcFamilyMember,
  SvgIcFan,
  SvgIcFanAutoSpeed,
  SvgIcFanSpeedHigh,
  SvgIcFanSpeedLow,
  SvgIcFanSpeedMedium,
  SvgIcFanSpeedTurbo,
  SvgIcFantasy,
  SvgIcFaq,
  SvgIcFashion,
  SvgIcFashionChild,
  SvgIcFashionWoman,
  SvgIcFavorite,
  SvgIcFavouriteMode,
  SvgIcFeaver,
  SvgIcFeedback,
  SvgIcFeedbackAdd,
  SvgIcFeedbackRating,
  SvgIcFemale,
  SvgIcFemaleHygieneProducts,
  SvgIcFemaleMale,
  SvgIcFertilized,
  SvgIcFertilizer,
  SvgIcFilter,
  SvgIcFilterMultiple,
  SvgIcFingerprint,
  SvgIcFinishLine,
  SvgIcFire,
  SvgIcFireAlarm,
  SvgIcFirefighter,
  SvgIcFirefighterManager,
  SvgIcFirefighterOfficer,
  SvgIcFirstAid,
  SvgIcFirstpage,
  SvgIcFitness,
  SvgIcFixedDeposit,
  SvgIcFlag,
  SvgIcFlagGb,
  SvgIcFlagIn,
  SvgIcFlash,
  SvgIcFlashAuto,
  SvgIcFlashOff,
  SvgIcFlightGame,
  SvgIcFlightMode,
  SvgIcFlightModeOff,
  SvgIcFlipCamera,
  SvgIcFlipHorizontal,
  SvgIcFlipVertical,
  SvgIcFlower,
  SvgIcFlushRelay,
  SvgIcFolder,
  SvgIcFolderFavorites,
  SvgIcFolderMoveFiles,
  SvgIcFolderRated,
  SvgIcFolderRemove,
  SvgIcFoodDrink,
  SvgIcFootball,
  SvgIcForkSpoon,
  SvgIcForm,
  SvgIcFormAdd,
  SvgIcForms,
  SvgIcFort,
  SvgIcForward,
  SvgIcForward1,
  SvgIcFoyer,
  SvgIcFrame,
  SvgIcFrontDoor,
  SvgIcFuel,
  SvgIcFullscreenMode,
  SvgIcFullscreenModeOff,
  SvgIcGames,
  SvgIcGaming,
  SvgIcGamingCloud,
  SvgIcGamingControllers,
  SvgIcGamingProfile,
  SvgIcGarage,
  SvgIcGardenPlants,
  SvgIcGardenTools,
  SvgIcGas,
  SvgIcGasPiped,
  SvgIcGasSensor,
  SvgIcGastrointestinal,
  SvgIcGateway1,
  SvgIcGateway2,
  SvgIcGayser,
  SvgIcGeometry,
  SvgIcGhost,
  SvgIcGift,
  SvgIcGiftCard,
  SvgIcGladiator,
  SvgIcGlobe,
  SvgIcGoBack,
  SvgIcGoBack10,
  SvgIcGoBack30,
  SvgIcGoForward,
  SvgIcGoForward10,
  SvgIcGoForward30,
  SvgIcGoogle,
  SvgIcGoogleLens,
  SvgIcGpon,
  SvgIcGraphIncreasing,
  SvgIcGraphLow,
  SvgIcGraphTable,
  SvgIcGrocery,
  SvgIcGroup,
  SvgIcGuard,
  SvgIcGuestroom,
  SvgIcHairDresser,
  SvgIcHairProblems,
  SvgIcHairRoot,
  SvgIcHalloween,
  SvgIcHammer,
  SvgIcHandBag,
  SvgIcHandLuggage,
  SvgIcHandSoap,
  SvgIcHandcuffs,
  SvgIcHands,
  SvgIcHardDisk,
  SvgIcHarddrive,
  SvgIcHarvest,
  SvgIcHcvTop,
  SvgIcHd,
  SvgIcHdScreen,
  SvgIcHdmi,
  SvgIcHdr,
  SvgIcHdrAuto,
  SvgIcHdrOff,
  SvgIcHeadlight,
  SvgIcHeadphones,
  SvgIcHeadset,
  SvgIcHeadsetBluetooth,
  SvgIcHealthConditions,
  SvgIcHealthProtection,
  SvgIcHealthReport,
  SvgIcHeartRate,
  SvgIcHeifer,
  SvgIcHelmetWar,
  SvgIcHelp,
  SvgIcHieferAbortion,
  SvgIcHieferBreeding,
  SvgIcHighSpeed,
  SvgIcHighTemperatureOff,
  SvgIcHockey,
  SvgIcHockeyIce,
  SvgIcHome,
  SvgIcHomeCare,
  SvgIcHomeConnection,
  SvgIcHomeMaintenance,
  SvgIcHomework,
  SvgIcHorror,
  SvgIcHorzontalSwing,
  SvgIcHospital,
  SvgIcHospitalBed,
  SvgIcHotspot,
  SvgIcHotspotLocator,
  SvgIcHourglass,
  SvgIcHtml5,
  SvgIcHubmode,
  SvgIcHumidity,
  SvgIcHydrant,
  SvgIcIceSkating,
  SvgIcId,
  SvgIcIdCheck,
  SvgIcImage,
  SvgIcImport,
  SvgIcIncognito,
  SvgIcIncoming,
  SvgIcIndustry,
  SvgIcInfant,
  SvgIcInfo,
  SvgIcInfoText,
  SvgIcInformationSensor,
  SvgIcInfrastructure,
  SvgIcInsemination,
  SvgIcInsomnia,
  SvgIcInstagram,
  SvgIcIntercomCallMobile,
  SvgIcIntercomCalls,
  SvgIcInterestLow,
  SvgIcInterestPayout,
  SvgIcInternet,
  SvgIcInternetHighSpeed,
  SvgIcIntersection,
  SvgIcIp67,
  SvgIcIpCamera,
  SvgIcIron,
  SvgIcIrrigation,
  SvgIcItalic,
  SvgIcItching,
  SvgIcJanitor,
  SvgIcJewelleryDiamond,
  SvgIcJewelleryRing,
  SvgIcJioFi,
  SvgIcJioFiDongle,
  SvgIcJioInstitute,
  SvgIcJioLink,
  SvgIcJioPayments,
  SvgIcJioTunes,
  SvgIcJiopay,
  SvgIcJoints,
  SvgIcKabaddi,
  SvgIcKarate,
  SvgIcKey,
  SvgIcKeyOff,
  SvgIcKeyboard,
  SvgIcKidney,
  SvgIcKidneyBladder,
  SvgIcKidsroom,
  SvgIcKiranaStore,
  SvgIcKitchen,
  SvgIcKitchenExtractor,
  SvgIcKitchenPot,
  SvgIcKitchenSink,
  SvgIcKnightChess,
  SvgIcKnownConditions,
  SvgIcKyc,
  SvgIcKycManager,
  SvgIcKycSupervisor,
  SvgIcLamp,
  SvgIcLandComposition,
  SvgIcLandPreparation,
  SvgIcLandscape,
  SvgIcLanguage,
  SvgIcLaptop,
  SvgIcLaptopMobile,
  SvgIcLaptopScreen,
  SvgIcLastpage,
  SvgIcLcvTop,
  SvgIcLibrary,
  SvgIcLightbulb,
  SvgIcLike,
  SvgIcLimitAccess,
  SvgIcLimitAccessProtection,
  SvgIcLine,
  SvgIcLineCrossing,
  SvgIcLinkedAccounts,
  SvgIcLinkedin,
  SvgIcList,
  SvgIcLiveCamera,
  SvgIcLoactionShare,
  SvgIcLocation,
  SvgIcLocationDoctor,
  SvgIcLocationHospital,
  SvgIcLocationMobileCoolers,
  SvgIcLocationOff,
  SvgIcLocationOpen,
  SvgIcLocationPoint,
  SvgIcLock,
  SvgIcLockUnlock,
  SvgIcLogin,
  SvgIcLogout,
  SvgIcLoiteringOff,
  SvgIcLotus,
  SvgIcLteDevice,
  SvgIcLuggage,
  SvgIcLungs,
  SvgIcMagic,
  SvgIcMagnetTrain,
  SvgIcMail,
  SvgIcMale,
  SvgIcManager,
  SvgIcMap,
  SvgIcMapLayers,
  SvgIcMarioGame,
  SvgIcMask,
  SvgIcMaskOff,
  SvgIcMason,
  SvgIcMathematics,
  SvgIcMediaShare,
  SvgIcMediaShareMobile,
  SvgIcMedicalFiles,
  SvgIcMedicalHistory,
  SvgIcMedicalInsurance,
  SvgIcMedicine,
  SvgIcMedicineMortar,
  SvgIcMedicines,
  SvgIcMeetingRoom,
  SvgIcMegaphone,
  SvgIcMenuCard,
  SvgIcMenuCardRoomservice,
  SvgIcMerge,
  SvgIcMessagePartiallyDelivered,
  SvgIcMessageRead,
  SvgIcMessageSend,
  SvgIcMic,
  SvgIcMicOff,
  SvgIcMicroSd,
  SvgIcMicroscope,
  SvgIcMicrowave,
  SvgIcMilk,
  SvgIcMilkLow,
  SvgIcMinimise,
  SvgIcMinus,
  SvgIcMirrorCast,
  SvgIcMobile,
  SvgIcMobileData,
  SvgIcMobileDataOff,
  SvgIcMobileDevices,
  SvgIcMobileHorizontal,
  SvgIcMobileNumberPortability,
  SvgIcMobileOff,
  SvgIcModem,
  SvgIcMoneyAdd,
  SvgIcMoneyLoan,
  SvgIcMoneyRequest,
  SvgIcMoneySend,
  SvgIcMoneyToSelf,
  SvgIcMoneybag,
  SvgIcMonster,
  SvgIcMonth,
  SvgIcMopedDelivery,
  SvgIcMopedSide,
  SvgIcMoreHorizontal,
  SvgIcMoreVertical,
  SvgIcMotionOff,
  SvgIcMotorbikeSide,
  SvgIcMouse,
  SvgIcMoversPackers,
  SvgIcMovie,
  SvgIcMultiSensor,
  SvgIcMunicipalTax,
  SvgIcMusic,
  SvgIcMusicNote,
  SvgIcMusical,
  SvgIcMyLocation,
  SvgIcMythology,
  SvgIcNamaste,
  SvgIcNas,
  SvgIcNature,
  SvgIcNatureOff,
  SvgIcNetwork,
  SvgIcNetworkDetails,
  SvgIcNetworkDish,
  SvgIcNetworkFuture,
  SvgIcNeutralGender,
  SvgIcNewChat,
  SvgIcNews,
  SvgIcNext,
  SvgIcNextCircle,
  SvgIcNextTitle,
  SvgIcNfc,
  SvgIcNicCard,
  SvgIcNoRepair,
  SvgIcNoSimCard,
  SvgIcNonVeg,
  SvgIcNose,
  SvgIcNotAtHome,
  SvgIcNotes,
  SvgIcNotification,
  SvgIcNotificationOff,
  SvgIcNowPlaying,
  SvgIcNumPad,
  SvgIcObesity,
  SvgIcOff,
  SvgIcOffer,
  SvgIcOfferCoupon,
  SvgIcOlympics,
  SvgIcOneTap,
  SvgIcOpenInNewTab,
  SvgIcOpenWith,
  SvgIcOperatingTable,
  SvgIcOperator,
  SvgIcOrder,
  SvgIcOrders,
  SvgIcOtp,
  SvgIcOutOfStock,
  SvgIcOutgoing,
  SvgIcOutlet,
  SvgIcOverlay,
  SvgIcOxygen,
  SvgIcPageFlip,
  SvgIcPaintRoller,
  SvgIcPaired,
  SvgIcPairing,
  SvgIcPairingComplete,
  SvgIcPanicButton,
  SvgIcPanorma,
  SvgIcParentalControlPhone,
  SvgIcParentalControlWeb,
  SvgIcParking,
  SvgIcPartialOxygenPressure,
  SvgIcPartner,
  SvgIcPassbook,
  SvgIcPaste,
  SvgIcPasteDocument,
  SvgIcPause,
  SvgIcPauseCircle,
  SvgIcPayBill,
  SvgIcPayEmiInstall,
  SvgIcPayFriend,
  SvgIcPayRecurring,
  SvgIcPaySchedule,
  SvgIcPayment,
  SvgIcPaymentPlan,
  SvgIcPercentageDecrease,
  SvgIcPercentageIncrease,
  SvgIcPercentageValue,
  SvgIcPeriodProblems,
  SvgIcPersonalHistory,
  SvgIcPersonalTrainer,
  SvgIcPestProblem,
  SvgIcPesticides,
  SvgIcPests,
  SvgIcPets,
  SvgIcPharmacy,
  SvgIcPhoneKeyAccess,
  SvgIcPhoneNumberLandline,
  SvgIcPhonePerformance,
  SvgIcPhoneSecured,
  SvgIcPhoto,
  SvgIcPhotoAdd,
  SvgIcPhotoCamera,
  SvgIcPhotoCrop,
  SvgIcPhotoFilter,
  SvgIcPhotoMediaFiles,
  SvgIcPhotoRemove,
  SvgIcPhotoResize,
  SvgIcPhotoSize,
  SvgIcPin,
  SvgIcPinOff,
  SvgIcPipe,
  SvgIcPlan,
  SvgIcPlanAdd,
  SvgIcPlaneArrival,
  SvgIcPlaneDeparture,
  SvgIcPlans,
  SvgIcPlantGrowth,
  SvgIcPlanting,
  SvgIcPlay,
  SvgIcPlayCircle,
  SvgIcPlayPause,
  SvgIcPlaylist,
  SvgIcPlaylistAdd,
  SvgIcPlaylistSuccessful,
  SvgIcPlc,
  SvgIcPlcPoe,
  SvgIcPlcWifi,
  SvgIcPlug,
  SvgIcPooja,
  SvgIcPool,
  SvgIcPorch,
  SvgIcPortrait,
  SvgIcPowerOverEthernet,
  SvgIcPregnancyTest,
  SvgIcPreviousTitle,
  SvgIcPrimeContent,
  SvgIcPrint,
  SvgIcPro,
  SvgIcProfile,
  SvgIcProfileFemale,
  SvgIcProfileMale,
  SvgIcProjection,
  SvgIcProtection,
  SvgIcProtectionLocked,
  SvgIcProtectionThreats,
  SvgIcProtectionUnlock,
  SvgIcPulseOximeter,
  SvgIcPuzzle,
  SvgIcQrCode,
  SvgIcQuickCapture,
  SvgIcQuickPayment,
  SvgIcRacingCar,
  SvgIcRacingRacetrack,
  SvgIcRadio,
  SvgIcRadioSignal,
  SvgIcRadioStation,
  SvgIcRam,
  SvgIcRamHorizonal,
  SvgIcRaspberry,
  SvgIcReader,
  SvgIcRearrange,
  SvgIcRecentHistory,
  SvgIcRechargeFriend,
  SvgIcRechargeHistory,
  SvgIcRecord,
  SvgIcRecording,
  SvgIcRectangle,
  SvgIcRecycling,
  SvgIcRedo,
  SvgIcRefresh,
  SvgIcRefund,
  SvgIcRegularSensor,
  SvgIcRemote,
  SvgIcRemotePush,
  SvgIcRemoteRecord,
  SvgIcRemoteUniversal,
  SvgIcRemoteUniversalA,
  SvgIcRemoteUniversalB,
  SvgIcRemoteUniversalU,
  SvgIcRename,
  SvgIcRepeat,
  SvgIcRepeatOne,
  SvgIcReplay,
  SvgIcReply,
  SvgIcReplyAll,
  SvgIcReplyCircle,
  SvgIcRequest,
  SvgIcResearch,
  SvgIcReset,
  SvgIcRestaurant,
  SvgIcResumeReading,
  SvgIcResumeWatching,
  SvgIcReturn,
  SvgIcRevolver,
  SvgIcRewind,
  SvgIcRibbonGrid,
  SvgIcRingerVibrate,
  SvgIcRoRepair,
  SvgIcRoaming,
  SvgIcRoamingNetwork,
  SvgIcRoamingOff,
  SvgIcRobot,
  SvgIcRocket,
  SvgIcRollerBlinds,
  SvgIcRollerBlindsClosed,
  SvgIcRomance,
  SvgIcRoomPurifyer,
  SvgIcRotatePhone,
  SvgIcRoulette,
  SvgIcRoutes,
  SvgIcRoutesTraffic,
  SvgIcRuler,
  SvgIcRunning,
  SvgIcRupee,
  SvgIcRupeeCoin,
  SvgIcRupeeCoinOff,
  SvgIcSafetySensor,
  SvgIcSampling,
  SvgIcSaturation,
  SvgIcSave,
  SvgIcSavings,
  SvgIcScale,
  SvgIcScalpel,
  SvgIcScan,
  SvgIcScanBody,
  SvgIcScanFace,
  SvgIcScanPicture,
  SvgIcScanQrCode,
  SvgIcScanText,
  SvgIcSchedule,
  SvgIcScheduledDoctorAppointment,
  SvgIcScheduledDoctorConsultation,
  SvgIcSciFiction,
  SvgIcScreen,
  SvgIcScreenFull,
  SvgIcScreenMinimise,
  SvgIcScreenReduce,
  SvgIcScribble,
  SvgIcSdCard,
  SvgIcSearch,
  SvgIcSeats,
  SvgIcSecureLocked,
  SvgIcSecured,
  SvgIcSecurityCameraBall,
  SvgIcSecurityCameraCeiling,
  SvgIcSecuritySensor,
  SvgIcSecurityVehicle,
  SvgIcSecurityguard,
  SvgIcSecurityguardManager,
  SvgIcSecurityguardOfficer,
  SvgIcSeedling,
  SvgIcSeekbar,
  SvgIcSendMessage,
  SvgIcServer,
  SvgIcServerCloud,
  SvgIcServerHome,
  SvgIcServerInternet,
  SvgIcServerShared,
  SvgIcServerWifi,
  SvgIcServiceCenter,
  SvgIcSettings,
  SvgIcSewingMachine,
  SvgIcShare,
  SvgIcShopping,
  SvgIcShoppingBag,
  SvgIcShoppingBagFavorite,
  SvgIcShoppingBags,
  SvgIcShoppingBasket,
  SvgIcShuffle,
  SvgIcSign,
  SvgIcSignIn,
  SvgIcSignOut,
  SvgIcSim,
  SvgIcSim1,
  SvgIcSim2,
  SvgIcSimOff,
  SvgIcSimPostPaid,
  SvgIcSirene,
  SvgIcSkating,
  SvgIcSkull,
  SvgIcSleepMode,
  SvgIcSleeping,
  SvgIcSlide,
  SvgIcSlowMotion,
  SvgIcSmartBulb,
  SvgIcSmartBulbConnect,
  SvgIcSmartBulbDimmable,
  SvgIcSmartBulbRgb,
  SvgIcSmartCleaner,
  SvgIcSmartDoorlock,
  SvgIcSmartFridge,
  SvgIcSmartHoover,
  SvgIcSmartOutlet,
  SvgIcSmartPlug,
  SvgIcSmartSwitchPlug,
  SvgIcSmartWatch,
  SvgIcSmartphoneLandline,
  SvgIcSmileyDelighted,
  SvgIcSmileyHappy,
  SvgIcSmileyNeutral,
  SvgIcSmileyOutraged,
  SvgIcSmileySatisfied,
  SvgIcSmileyUnhappy,
  SvgIcSmileyUnsatisfied,
  SvgIcSmokeSensor,
  SvgIcSmoking,
  SvgIcSmokingOff,
  SvgIcSms,
  SvgIcSmsGroup,
  SvgIcSmsReceive,
  SvgIcSmsSend,
  SvgIcSmss,
  SvgIcSnacks,
  SvgIcSnapchat,
  SvgIcSofa,
  SvgIcSoil,
  SvgIcSoilLayers,
  SvgIcSort,
  SvgIcSortHandle,
  SvgIcSortList,
  SvgIcSos,
  SvgIcSosCircle,
  SvgIcSound,
  SvgIcSoundDisabled,
  SvgIcSoundLoud,
  SvgIcSoundMedium,
  SvgIcSoundQuiet,
  SvgIcSowing,
  SvgIcSpade,
  SvgIcSpanner,
  SvgIcSpdifOptical,
  SvgIcSpdifOpticalPos,
  SvgIcSpeaker,
  SvgIcSpine,
  SvgIcSport,
  SvgIcSportsPulse,
  SvgIcSpotcolor,
  SvgIcSprayCan,
  SvgIcStabilization,
  SvgIcStairway,
  SvgIcStamp,
  SvgIcStar,
  SvgIcStarAdd,
  SvgIcStatusFail,
  SvgIcStatusLoading,
  SvgIcStatusSuccessful,
  SvgIcSteeringWheel,
  SvgIcSteps,
  SvgIcStopwatch,
  SvgIcStore,
  SvgIcStoreRoom,
  SvgIcStory,
  SvgIcStream,
  SvgIcStreamOff,
  SvgIcStretching,
  SvgIcStroller,
  SvgIcStudent,
  SvgIcSubscription,
  SvgIcSubscriptions,
  SvgIcSubtitle,
  SvgIcSuccess,
  SvgIcSuccessColored,
  SvgIcSunHeating,
  SvgIcSupervisor,
  SvgIcSupport,
  SvgIcSupportAdmin,
  SvgIcSurvey,
  SvgIcSwap,
  SvgIcSwimming,
  SvgIcSwitch,
  SvgIcSword,
  SvgIcTableTennis,
  SvgIcTablet,
  SvgIcTag,
  SvgIcTarget,
  SvgIcTargetAim,
  SvgIcTariffAlert,
  SvgIcTariffChecking,
  SvgIcTariffExpired,
  SvgIcTask,
  SvgIcTaxiFront,
  SvgIcTeach,
  SvgIcTeam,
  SvgIcTeamMembers,
  SvgIcTechnology,
  SvgIcTeddy,
  SvgIcTeddyLove,
  SvgIcTemperature,
  SvgIcTemperatureDown,
  SvgIcTemperatureOff,
  SvgIcTemperatureUp,
  SvgIcTempered,
  SvgIcTemple,
  SvgIcTennis,
  SvgIcTerminal,
  SvgIcTest,
  SvgIcText,
  SvgIcTextAlignCenter,
  SvgIcTextAlignJustify,
  SvgIcTextAlignLeft,
  SvgIcTextAlignRight,
  SvgIcTextbook,
  SvgIcTheaterRoom,
  SvgIcTheme,
  SvgIcThinking,
  SvgIcThinkingBrain,
  SvgIcThinkingCritical,
  SvgIcThreeDay,
  SvgIcThroat,
  SvgIcThumbnail,
  SvgIcTicket,
  SvgIcTicketDetails,
  SvgIcTicketPnrNumber,
  SvgIcTicketRaise,
  SvgIcTicketStatus,
  SvgIcTickets,
  SvgIcTime,
  SvgIcTimelapse,
  SvgIcTimeline,
  SvgIcTimelines,
  SvgIcTimezone,
  SvgIcTimezones,
  SvgIcTips,
  SvgIcTochpanel,
  SvgIcToddler,
  SvgIcToiletManWomen,
  SvgIcToiletSeat,
  SvgIcToll,
  SvgIcTollStation,
  SvgIcTooth,
  SvgIcTorch,
  SvgIcTorchOff,
  SvgIcTower,
  SvgIcTrackEcg,
  SvgIcTrackVitals,
  SvgIcTrafficCone,
  SvgIcTrainDelay,
  SvgIcTrainFront,
  SvgIcTrainStatus,
  SvgIcTramFront,
  SvgIcTransactionHistory,
  SvgIcTrash,
  SvgIcTrashClear,
  SvgIcTrendingFlame,
  SvgIcTriangle,
  SvgIcTrivia,
  SvgIcTrolleyClearance,
  SvgIcTruckDelivery,
  SvgIcTruckSide,
  SvgIcTv,
  SvgIcTvCall,
  SvgIcTvCam,
  SvgIcTvChannels,
  SvgIcTvOnline,
  SvgIcTvPlay,
  SvgIcTvPlus,
  SvgIcTwitter,
  SvgIcUdder,
  SvgIcUdderOff,
  SvgIcUnderline,
  SvgIcUndo,
  SvgIcUnpaired,
  SvgIcUpdate,
  SvgIcUpiNumber,
  SvgIcUpload,
  SvgIcUpload1,
  SvgIcUploads,
  SvgIcUsb,
  SvgIcUsbCable,
  SvgIcUsbDongle,
  SvgIcUsbStick,
  SvgIcUser,
  SvgIcVaccine,
  SvgIcVaccumCleaner,
  SvgIcVampire,
  SvgIcVeg,
  SvgIcVerticalSwing,
  SvgIcVideo,
  SvgIcVideoCall,
  SvgIcVideoCallGroup,
  SvgIcVideoCalls,
  SvgIcVideoEnd,
  SvgIcVideoInOut,
  SvgIcVideoIncomming,
  SvgIcVideoOutgoing,
  SvgIcVideoResize,
  SvgIcVideoSize,
  SvgIcVideoSurveillance,
  SvgIcViewTile,
  SvgIcVinylRecord,
  SvgIcVirus,
  SvgIcVisible,
  SvgIcVisibleOff,
  SvgIcVoice,
  SvgIcVolume,
  SvgIcVoucher4G,
  SvgIcVoucherCashback,
  SvgIcVoucherPlan,
  SvgIcVpn,
  SvgIcVr,
  SvgIcWalking,
  SvgIcWalkingAids,
  SvgIcWallet,
  SvgIcWallpaper,
  SvgIcWar,
  SvgIcWarehouse,
  SvgIcWarning,
  SvgIcWarningColored,
  SvgIcWarranty,
  SvgIcWashingMachine,
  SvgIcWater,
  SvgIcWaterBottle,
  SvgIcWaterBottleReuseable,
  SvgIcWaterChecked,
  SvgIcWaterPipe,
  SvgIcWaterPump,
  SvgIcWaterPurifier,
  SvgIcWaterSensor,
  SvgIcWaterTap,
  SvgIcWateringCan,
  SvgIcWatermelon,
  SvgIcWebBrowser,
  SvgIcWebBrowserCursor,
  SvgIcWebBrowserMobile,
  SvgIcWebBrowserSuccessful,
  SvgIcWebseries,
  SvgIcWeek,
  SvgIcWeightTraining,
  SvgIcWhatsapp,
  SvgIcWideAngle170,
  SvgIcWidestRange,
  SvgIcWidgets,
  SvgIcWifi,
  SvgIcWifiConnected,
  SvgIcWifiEnable,
  SvgIcWifiLocked,
  SvgIcWifiLocked0,
  SvgIcWifiLocked1,
  SvgIcWifiLocked2,
  SvgIcWifiLocked3,
  SvgIcWifiNetwork,
  SvgIcWifiNoInternet,
  SvgIcWifiNotFound,
  SvgIcWifiOff,
  SvgIcWifiOk,
  SvgIcWifiRouter,
  SvgIcWifiSignInRequired,
  SvgIcWifiStrength0,
  SvgIcWifiStrength1,
  SvgIcWifiStrength2,
  SvgIcWifiStrength3,
  SvgIcWord,
  SvgIcWork,
  SvgIcWorkshop,
  SvgIcWps,
  SvgIcWrestling,
  SvgIcWriting,
  SvgIcXRay,
  SvgIcXRayBody,
  SvgIcYoga,
  SvgIcYogaMeditation,
  SvgIcYoutube,
  SvgIcZombie,
  _default$6 as Tab,
  _default$5 as TabItem,
  _default$2 as Table,
  ToastManager,
  _default$4 as ToggleButton,
  _default$d as Tooltip,
  _default$c as Validation,
};
//# sourceMappingURL=index.d.ts.map
